import { Club } from "./club";
import {
  Player,
  Position,
  Role,
  Instruction,
  TeamInstruction,
  PlayerInstruction,
} from "./person";
import { PitchDimensions, PitchZone, Venue } from "./place";
import { Coords, PitchArea, Polygon } from "../common/types";
import { dist, rand_in_range } from "../common/helpers";
import { SimMatch } from "./sim_game";

type PlayerStats = {
  goals: number;
  assists: number;
  passes_attempted: number;
  passes_completed: number;
  shots: number;
  shots_on_target: number;
  tackles_attempted: number;
  tackles_completed: number;
  interceptions: number;
  fouls: number;
  fouls_suffered: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  goals_conceded: number;
  clean_sheets: number;
  penalties_scored: number;
  penalties_missed: number;
  penalties_saved: number;
  own_goals: number;
  minutes_played: number;
  xG: number;
  xA: number;
};

// how valuable/dangerous a position is, as a function of proximity and
// centrality relative to the goal being attacked. Shared by passing,
// shooting, and dribbling decisions so they're all pulling toward the same
// idea of "a genuinely threatening position" rather than each computing
// their own notion of "progress" independently — a plain distance-based
// "closer than before" metric lets the ball circulate forever without ever
// actually threatening goal, since someone is nearly always marginally
// closer than the passer even deep in a team's own half.
function threat_value(loc: Coords, attacking_goal: Coords): number {
  let dx = loc.x - attacking_goal.x;
  let dy = loc.y - attacking_goal.y;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let centrality = 1 / (1 + Math.abs(dy) / 12);
  let proximity = 1 / (1 + distance / 22);
  return centrality * proximity;
}

// how likely a pass along the straight line from `from` to `to` is to run
// into an opponent — the passing/shooting-target scoring used to judge a
// receiver purely by how open *they* were standing, with no regard for
// whether an opponent was sitting in the direct path the ball has to
// travel to reach them, so a well-marked-looking pass could still be lofted
// straight into a defender's feet along the way. Sums contributions from
// every opponent near the lane (not just the closest one), since two
// defenders loosely covering a passing lane are a bigger risk than one.
function interception_risk(from: Coords, to: Coords, opponents: PlayerOnPitch[]): number {
  let lane_length_sq = (to.x - from.x) ** 2 + (to.y - from.y) ** 2 || 1;
  let risk = 0;
  for (let opp of opponents) {
    let t = ((opp.loc.x - from.x) * (to.x - from.x) + (opp.loc.y - from.y) * (to.y - from.y)) / lane_length_sq;
    t = Math.max(0, Math.min(1, t));
    let closest: Coords = {
      x: from.x + t * (to.x - from.x),
      y: from.y + t * (to.y - from.y),
      z: 0,
    };
    let d = dist(opp.loc, closest);
    let intercept_radius = 4;
    if (d < intercept_radius) {
      risk += (intercept_radius - d) / intercept_radius;
    }
  }
  return risk;
}

// how tightly marked an arbitrary point is — the same falloff model as
// PlayerOnPitch.calculate_pressure, generalized to any location (not just
// a player's actual current spot) so candidate receiving positions can be
// evaluated without having to move the player there first
function pressure_at(loc: Coords, opponents: PlayerOnPitch[]): number {
  let pressure = 0;
  for (let p of opponents) {
    let d = dist(loc, p.loc);
    if (d < 10) {
      if (d == 0) {
        d = 0.1;
      }
      pressure += 1 / (d * d);
    }
  }
  return pressure;
}

export class PlayerOnPitch extends Player {
  _role: Role;
  _position: Position;
  _instructions: PlayerInstruction[];
  _loc: Coords;
  _dx: number;
  _dy: number;
  _dz: number;
  venue: Venue;
  team:Team;
  receive_pass: boolean;
  _zones: number[];
  run_ticks_remaining: number;
  dribble_commit_ticks: number;

  target_speed: number;
  target_loc: Coords;

  defensive_area: PitchArea;

  m:Match;

  set role(role: Role) {
    this._role = role;
  }

  set position(position: Position) {
    this._position = position;
  }

  get position() {
    return this._position;
  }

  get pitchZoneScores(): number[] {
    return this._zones;
  }

  set pitchZoneScores(scores: number[]) {
    this._zones = scores;
  }

  set instructions(instructions: PlayerInstruction[]) {
    this._instructions = instructions;
  }

  get instructions() {
    return this._instructions;
  }

  set loc(loc: Coords) {
    this._loc = loc;
  }

  get loc() {
    return this._loc;
  }

  set dx(dx: number) {
    this._dx = dx;
  }

  get dx() {
    return this._dx;
  }

  set dy(dy: number) {
    this._dy = dy;
  }

  get dy() {
    return this._dy;
  }

  set dz(dz: number) {
    this._dz = dz;
  }

  get dz() {
    return this._dz;
  }

  calculate_pitch_zone_scores() {
    let side: "left" | "right";
    if (this.team.attacking_direction === "left") {
      side = "right";
    } else {
      side = "left";
    }
    this.pitchZoneScores = PitchZone.get_score(this.position, side);
  }

  get_zone_midpoint(): Coords {
    let midpoint = {x:0,y:0,z:0};
    let total = 0;
    for (let i = 0; i < this.pitchZoneScores.length; i++) {
      let coords = PitchZone.get_coords(i);
      if(this.pitchZoneScores[i] > 0) {
        midpoint.x += coords.x * this.pitchZoneScores[i];
        midpoint.y += coords.y * this.pitchZoneScores[i];
        total += this.pitchZoneScores[i];
      }
    }
    midpoint.x /= total;
    midpoint.y /= total;

    return midpoint;
  }

  calculate_optimal_position(teamInPossession: Team|null) {
    // goalkeepers don't hold a formation anchor — they shuffle along the
    // goal line tracking the ball to narrow the angle, and step out a
    // little further as the danger gets closer to goal
    if (this.position.name == "Goalkeeper") {
      let own_goal_x = this.team.attacking_direction === "left" ? this.venue.length : 0;
      let goal_center_y = this.venue.width / 2;
      let max_shuffle = 4;
      let y = goal_center_y + Math.max(
        -max_shuffle,
        Math.min(max_shuffle, this.m.ball_pos.y - goal_center_y)
      );
      let dist_to_goal_line = Math.abs(this.m.ball_pos.x - own_goal_x);
      let step_out = Math.min(5, Math.max(0, (30 - dist_to_goal_line) / 30) * 5);
      let x = own_goal_x + (own_goal_x == 0 ? 1 : -1) * (1 + step_out);
      return { x, y, z: 0 };
    }

    // formation anchor: weighted center of this player's typical zones
    // for the side of the pitch they're currently attacking
    let anchor = this.get_zone_midpoint();

    // the ball is loose more often than not for a tick or two at a time
    // (right after every pass/shot, and while a receiver runs onto it) —
    // treat whichever team last touched it as still "in the ascendancy"
    // during those gaps, rather than washing out to a neutral shape
    let effective_team = teamInPossession ?? this.m.ball_last_touch;

    // shift across the pitch width toward the ball so the team holds
    // its shape but compresses/slides as a unit
    let width_shift = (this.m.ball_pos.y - this.venue.width / 2) * 0.15;

    // shift the WHOLE team shape forward/back as a single unit, by the
    // same amount for every player, so the defensive/midfield/attacking
    // bands keep their natural relative spacing — blending each player's
    // own anchor toward one shared absolute target (the previous approach)
    // collapses everyone onto the same line instead of preserving depth
    let attack_dir = this.team.attacking_direction === "left" ? -1 : 1;
    let attacking_x = this.team.attacking_direction === "left" ? 0 : this.venue.length;
    let own_goal_x = this.team.attacking_direction === "left" ? this.venue.length : 0;

    // work in a "progress" coordinate: 0 = our own goal, venue.length =
    // the goal we're attacking, regardless of which physical direction
    // that corresponds to
    let to_progress = (x: number) => (x - own_goal_x) * attack_dir;
    let to_x = (progress: number) => own_goal_x + progress * attack_dir;

    let ball_progress = Math.max(0, Math.min(this.venue.length, to_progress(this.m.ball_pos.x)));
    // sit closer behind the ball in possession (compact, aggressive),
    // further off it out of possession (deeper block, more reaction time)
    let gap_behind_ball = effective_team == this.team ? 12 : effective_team == null ? 22 : 30;
    let line_progress = Math.max(
      this.venue.length * 0.12,
      Math.min(this.venue.length * 0.62, ball_progress - gap_behind_ball)
    );

    let reference_progress = this.venue.length * 0.15; // a center-back's natural anchor depth
    let length_shift = to_x(line_progress) - to_x(reference_progress);

    // players with worse movement hold their shape less precisely
    let movement = this.attributes.get_attr("movement");
    let jitter = ((100 - movement) / 100) * 2;

    let target: Coords = {
      x: anchor.x + length_shift + rand_in_range(-jitter, jitter),
      y: anchor.y + width_shift + rand_in_range(-jitter, jitter),
      z: 0,
    };

    // the two closest outfield players step out of the line to press the
    // ball carrier, rather than either everyone holding station or just
    // one lone presser doing all the work — only while the opponent
    // actually has the ball; a loose ball is handled by the separate
    // closest-player-chases-it logic in decide_action
    if (
      teamInPossession != null &&
      teamInPossession != this.team &&
      this.position.name != "Goalkeeper"
    ) {
      let sorted = this.team.playersOnPitch
        .filter((p) => p.position.name != "Goalkeeper")
        .sort((a, b) => dist(a.loc, this.m.ball_pos) - dist(b.loc, this.m.ball_pos));
      let rank = sorted.indexOf(this);
      let press_pull = rank == 0 ? 0.75 : rank == 1 ? 0.4 : 0;
      if (press_pull > 0) {
        target.x = target.x * (1 - press_pull) + this.m.ball_pos.x * press_pull;
        target.y = target.y * (1 - press_pull) + this.m.ball_pos.y * press_pull;
      }
    }

    // occasionally break forward beyond the formation shape into space,
    // when the team is attacking and this player isn't the one on the ball
    if (
      teamInPossession == this.team &&
      this.m.player_possession != this &&
      this.position.name != "Goalkeeper"
    ) {
      if (this.run_ticks_remaining > 0) {
        this.run_ticks_remaining--;
      } else {
        let flair = this.attributes.get_attr("flair");
        if (Math.random() < 0.03 + (flair / 100) * 0.05) {
          this.run_ticks_remaining = 4 + Math.floor(Math.random() * 5);
        }
      }
      if (this.run_ticks_remaining > 0) {
        let run_direction = this.team.attacking_direction === "left" ? -1 : 1;
        target.x += run_direction * 14;
      }
    } else {
      this.run_ticks_remaining = 0;
    }

    // when off the ball with our team in possession, nudge toward a
    // nearby spot that's actually easier to receive a pass at — less
    // marked, with a clearer lane back to the carrier — instead of just
    // sitting wherever team shape alone would put us regardless of
    // whether a pass could realistically reach us there. This is what a
    // player's own sense of "am I actually available right now" would
    // drive: not a fixed formation slot, but a live read of marking and
    // passing lanes.
    let carrier = this.m.player_possession;
    if (
      teamInPossession == this.team &&
      carrier != null &&
      carrier != this &&
      this.position.name != "Goalkeeper"
    ) {
      let opp_team = this.team == this.m.home ? this.m.away : this.m.home;
      let opponents = opp_team.playersOnPitch;
      let receivability = (loc: Coords) =>
        pressure_at(loc, opponents) + interception_risk(carrier.loc, loc, opponents) * 0.5;

      let best = target;
      let best_score = receivability(target);
      let search_radius = 5;
      let samples = 8;
      for (let i = 0; i < samples; i++) {
        let angle = (i / samples) * 2 * Math.PI;
        let candidate: Coords = {
          x: Math.min(Math.max(target.x + Math.cos(angle) * search_radius, 1), this.venue.length - 1),
          y: Math.min(Math.max(target.y + Math.sin(angle) * search_radius, 1), this.venue.width - 1),
          z: 0,
        };
        let score = receivability(candidate);
        if (score < best_score) {
          best_score = score;
          best = candidate;
        }
      }

      // a bias on top of the formation shape, not a replacement for it
      target.x = target.x * 0.6 + best.x * 0.4;
      target.y = target.y * 0.6 + best.y * 0.4;
    }

    target.x = Math.min(Math.max(target.x, 1), this.venue.length - 1);
    target.y = Math.min(Math.max(target.y, 1), this.venue.width - 1);

    return target;
  }

  kickoff_position(): Coords {
    let pos = this.get_zone_midpoint();
    return pos;
  }

  dribble() {
    // carry the ball a clear, deliberate distance toward goal, evading
    // the nearest defender sideways rather than backing away from them
    let dribbling = this.attributes.get_attr("dribbling");
    let opp = this.m.outOfPossession as Team;

    let attacking_goal: Coords = {
      x: this.team.attacking_direction === "left" ? 0 : this.venue.length,
      y: this.venue.width / 2,
      z: 0,
    };
    let goal_dist = dist(this.loc, attacking_goal) || 1;
    let toward_goal_x = (attacking_goal.x - this.loc.x) / goal_dist;
    let toward_goal_y = (attacking_goal.y - this.loc.y) / goal_dist;

    let nearest_opp = opp.playersOnPitch.reduce((a, b) =>
      dist(a.loc, this.loc) < dist(b.loc, this.loc) ? a : b
    );
    let opp_dist = dist(this.loc, nearest_opp.loc) || 1;
    let away_from_opp_x = (this.loc.x - nearest_opp.loc.x) / opp_dist;
    let away_from_opp_y = (this.loc.y - nearest_opp.loc.y) / opp_dist;

    // only the *sideways* component of "away from the nearest defender"
    // — blending in the full avoidance vector could cancel out or even
    // reverse forward progress whenever the defender happened to be
    // roughly between the carrier and goal (exactly the common case for
    // a covering defender), which read as "dribbling away from goal"
    let along = away_from_opp_x * toward_goal_x + away_from_opp_y * toward_goal_y;
    let lateral_x = away_from_opp_x - along * toward_goal_x;
    let lateral_y = away_from_opp_y - along * toward_goal_y;
    let lateral_norm = Math.sqrt(lateral_x * lateral_x + lateral_y * lateral_y) || 1;

    let dx = toward_goal_x * 0.8 + (lateral_x / lateral_norm) * 0.35;
    let dy = toward_goal_y * 0.8 + (lateral_y / lateral_norm) * 0.35;
    let norm = Math.sqrt(dx * dx + dy * dy) || 1;

    let carry_distance = 8;
    let target: Coords = {
      x: this.loc.x + (dx / norm) * carry_distance,
      y: this.loc.y + (dy / norm) * carry_distance,
      z: 0,
    };

    // there's no tackle/dispossession mechanic in this engine at all, so
    // nothing else stops a dribble from just walking the ball into the
    // keeper's hands — cap how close a dribble is allowed to carry the
    // ball to the actual goalkeeper (not a blanket distance from goal,
    // which was making the whole box off-limits to attacking dribbles —
    // exactly backwards from the point of dribbling into the box at all)
    let opp_gk = opp.playersOnPitch.find((p) => p.position.name == "Goalkeeper");
    if (opp_gk) {
      let min_dist_to_gk = 4;
      let target_dist_to_gk = dist(target, opp_gk.loc) || 1;
      if (target_dist_to_gk < min_dist_to_gk) {
        let scale = min_dist_to_gk / target_dist_to_gk;
        target.x = opp_gk.loc.x + (target.x - opp_gk.loc.x) * scale;
        target.y = opp_gk.loc.y + (target.y - opp_gk.loc.y) * scale;
      }
    }

    target.x = Math.min(Math.max(target.x, 1), this.venue.length - 1);
    target.y = Math.min(Math.max(target.y, 1), this.venue.width - 1);

    this.move_to(target, dribbling > 60 ? "high" : "medium");
  }

  decelerate() {
    // deceleration = 0.5 * acceleration
    let acceleration = this.attributes.get_attr("acceleration");
    if (acceleration == undefined) {
      acceleration = 25;
    }

    let max_deceleration = 6 + (acceleration / 100) * 2;

    let deceleration = max_deceleration / 2;

    if (this.dx > 0 ) {
      this.dx -= deceleration / 60;
      if (this.dx < 0) {
        this.dx = 0;
      }
    }
    if (this.dx < 0) {
      this.dx += deceleration / 60;
      if (this.dx > 0) {
        this.dx = 0;
      }
    }
    if (this.dy > 0) {
      this.dy -= deceleration / 60;
      if (this.dy < 0) {
        this.dy = 0;
      }
    }
    if (this.dy < 0) {
      this.dy += deceleration / 60;
      if (this.dy > 0) {
        this.dy = 0;
      }

    }


  }

  shoot() {
    let shooting = this.attributes.get_attr("finishing");
    // power
    let technique = this.attributes.get_attr("technique");
    // max power = 25 m/s
    // min power = 15 m/s
    let max_power = 15 + (technique / 100) * 10;
    let power = max_power;
    // distance to goal
    let direction = this.team.attacking_direction;
    let left: Coords = {
      x: 0,
      y: this.venue.width / 2,
      z: 0,
    };
    let right: Coords = {
      x: this.venue.length,
      y: this.venue.width / 2,
      z: 0,
    };

    // accuracy gets sharply worse with distance — a clinical finisher is
    // still fairly reliable close in, but even they spray long-range
    // efforts, and a poor finisher misses the target outright fairly often
    let distance_to_goal = dist(this.loc, direction == "left" ? left : right);
    let base_accuracy_radius = 1.6 - (shooting / 100) * 1.2;
    let accuracy_radius = base_accuracy_radius * (1 + distance_to_goal / 16);

    // choose side of goal
    let target: Coords;
    if (direction == "left") {
      if (Math.random() < 0.5) {
        target = {
          x: -2,
          y: this.venue.width / 2 - 1,
          z: 1.25,
        }
      } else {
        target = {
          x: -2,
          y: this.venue.width / 2 + 1,
          z: 1.25,
        }
      }
    } else {
      if (Math.random() < 0.5) {
        target = {
          x: this.venue.length + 2,
          y: this.venue.width / 2 - 1,
          z: 1.25,
        }
      } else {
        target = {
          x: this.venue.length + 2,
          y: this.venue.width / 2 + 1,
          z: 1.25,
        }
      }
    }

    // apply error to target_coords based on shooting accuracy and distance
    target.x += rand_in_range(-accuracy_radius, accuracy_radius);
    target.y += rand_in_range(-accuracy_radius, accuracy_radius);
    target.z += rand_in_range(-accuracy_radius, accuracy_radius);

    // the ball flies in a straight line at this (now jittered) aim point,
    // so whether it's within the goal frame at aim-time is exactly
    // whether it's "on target"
    let on_target =
      target.y > this.venue.width / 2 - PitchDimensions.goal_width / 2 &&
      target.y < this.venue.width / 2 + PitchDimensions.goal_width / 2 &&
      target.z > 0 &&
      target.z < PitchDimensions.goal_height;
    if (on_target) {
      this.m.record("shots_on_target", this);
    }

    // caluclate speed to apply to ball
    let speed = max_power;
    let distance = dist(this.loc, target);
    let error_plus_minus_percentage = 0.15 - (technique / 100) * 0.1;
    let dx = ((target.x - this.loc.x) / distance) * speed;
    let dy = ((target.y - this.loc.y) / distance) * speed;
    let dz = ((target.z - this.loc.z) / distance) * speed;
    dx /= 60;
    dy /= 60;
    dz /= 60;

    this.attempt_shot(dx, dy, dz);

  }

  attempt_shot(dx, dy, dz) {
    this.m.ball_dx = dx;
    this.m.ball_dy = dy;
    this.m.ball_dz = dz;
    // only a deliberate shot can score — an unclaimed pass/cross that
    // happens to drift into the frame becomes a goal kick instead (see
    // collision_detection), the same way it would be scrambled clear or
    // gathered by the keeper in reality, rather than counting as a goal
    this.m.ball_is_shot = true;
    // the ball is now in flight — don't leave the shooter flagged as the
    // carrier until possession is next resolved, or they'll immediately
    // "receive" their own shot
    this.m.player_possession = null;
    this.m.set_possession(null);
    this.dribble_commit_ticks = 0;
    this.m.last_passer = null;
    this.m.record("shots", this);
  }
  decide_action(m:Match) {
    // a keeper holding the ball is on a hold timer managed by the match
    // (see gk_distribute) — everyone else just carries on positioning
    // themselves for the coming throw/punt
    if (m.gk_holding == this) {
      return;
    }
    // if ball is not possessed by anyone, and player is closest
    // teammate, try to get it
    if (m.possession == null) {
      let closest = m.closest_to_ball();
      if (closest.includes(this)) {
        this.get_ball(m);
      } else {
        if (this.receive_pass) {
          // chase the ball's live position, not the pass's original aim
          // point, so runs onto a pass track it properly as it decelerates
          this.move_to(m.ball_pos, 'max');
        }
        else {
          this.target_loc = this.calculate_optimal_position(m.possession);

          this.move_to(this.target_loc,'medium');
        }
      }
    } else {
      this.receive_pass = false;
      // if ball is possessed by self
      if (m.player_possession == this && this.dribble_commit_ticks > 0) {
        // once committed to a dribble, carry on with it for a short spell
        // instead of re-litigating shoot/pass/dribble every single decide
        // tick (6x/second) — real players don't reconsider their options
        // that often while already running with the ball, and not
        // committing was inflating the number of "chances to shoot" per
        // possession by roughly an order of magnitude
        this.dribble_commit_ticks--;
        this.dribble();
      } else if (m.player_possession == this && this.position.name == "Goalkeeper") {
        // a keeper who ends up on the ball in open play (e.g. a short
        // goal kick that comes straight back to them) should release it
        // immediately, not run the same shoot/dribble evaluation an
        // outfield player would — nothing was stopping them from
        // "dribbling" all the way into the opponent's half otherwise,
        // since dribble() always drives toward the attacking goal
        this.pass(this.team, m.outOfPossession as Team);
      } else if (m.player_possession == this) {
        // dribble, pass, or shoot
        let opp = m.outOfPossession as Team;
        let attacking_goal: Coords = {
          x: this.team.attacking_direction === "left" ? 0 : this.venue.length,
          y: this.venue.width / 2,
          z: 0,
        };
        let self_dist_to_goal = dist(this.loc, attacking_goal);
        let self_pressure = this.calculate_pressure(opp);
        let self_value = threat_value(this.loc, attacking_goal);

        // find the best-placed teammate to pass to — "best" means moving
        // the ball to a genuinely more dangerous position (closer to and
        // more central on goal), not just anyone marginally further
        // forward than the passer, which lets the ball circulate forever
        // without ever actually threatening the goal
        let best_teammate: PlayerOnPitch | null = null;
        let best_teammate_score = -Infinity;
        for (let p of this.team.playersOnPitch.filter((player) => {
          return player != this;
        })) {
          let p_pressure = p.calculate_pressure(opp);
          let p_value_gain = threat_value(p.loc, attacking_goal) - self_value;
          let p_risk = interception_risk(this.loc, p.loc, opp.playersOnPitch);
          let score = p_value_gain * 40 - p_pressure * 3 - p_risk * 8;
          if (score > best_teammate_score) {
            best_teammate_score = score;
            best_teammate = p;
          }
        }

        // shots are only realistic from within range, and worse under
        // pressure or from a shallow angle / long distance (low threat_value)
        let shooting_range = 28;
        let shot_score = self_dist_to_goal < shooting_range
          ? self_value * 40 - self_pressure * 3
          : -Infinity;

        // require a genuinely better option before giving the ball up —
        // otherwise every marginal advantage triggers an instant pass and
        // nobody ever holds it up or carries it forward themselves. But
        // the bar should depend on where the carrier actually is: deep in
        // our own half, build-up play should heavily favor passing (a low
        // bar — carrying the ball the length of the pitch alone is a rare,
        // high-risk event in real football, not a standard way to
        // progress), while further forward, holding the ball to
        // manufacture a chance is a normal, valuable thing to do (a
        // higher bar, so a marginally-better-placed teammate doesn't
        // trigger a hasty pass in a tight area when driving at goal
        // yourself is just as good an option). self_value already tracks
        // how advanced the carrier is (low deep, higher approaching
        // goal), so reuse it instead of a separate field-position notion.
        let pass_threshold = 1 + self_value * 10;

        // even when shooting is technically the best-scoring option,
        // most "decent positions" in a real match don't actually end in
        // a shot — a defender closes the lane, the moment passes, a
        // better-placed teammate develops. None of that is modeled here
        // (no line-of-sight/blocking), so approximate it with a
        // probability of actually pulling the trigger that scales with
        // how clear-cut the chance is, using a saturating curve on
        // shot_score (which already folds in both proximity/centrality
        // and pressure): a wide-open close-range chance should approach
        // "almost always taken", while a marginal or heavily-marked
        // "recognized" one stays rare. A power curve on self_value alone
        // never saturated properly — even a textbook wide-open chance
        // in the box only reached ~5%, since self_value tops out well
        // below 1 even at point-blank range — which is what made open
        // chances go unshot far too often.
        let shot_openness = 1 / (1 + self_pressure);
        // calibrated against the observed distribution of self_value at
        // recognition time — self_value never gets remotely close to its
        // theoretical ceiling of 1 in practice, so a curve calibrated
        // against that ceiling instead of real data barely reaches ~20%
        // even at the best chances a match actually produces
        let shot_take_chance = Math.min(0.92, Math.pow(self_value, 5) * 0.045 * shot_openness);

        // a genuinely clear chance — good position, essentially no one
        // around to block it — shouldn't be a probability roll at all.
        // Without a real hard override, a declined "clear" chance just
        // recycles (pass back, dribble, re-approach) with the same
        // per-cycle odds every time, which given enough cycles produces
        // exactly the same degenerate "walk it in eventually" pattern as
        // an unconditional dribble-toward-goal did, just spread across a
        // few extra touches instead of one continuous run
        // "no one around" needs to mean it literally — the weighted
        // pressure formula can already read as very low with a defender
        // just 6-7m away (1/d^2 falls off fast), which made this fire on
        // a large fraction of ordinary decent positions instead of the
        // rare genuine breakaway it's meant for
        let nearest_opp_dist = Math.min(
          ...opp.playersOnPitch
            .filter((p) => p.position.name != "Goalkeeper")
            .map((p) => dist(p.loc, this.loc))
        );
        let clearly_open = nearest_opp_dist > 12 && self_value > 0.55;
        if (clearly_open) {
          shot_take_chance = 0.95;
        }

        let shot_recognized = shot_score > 0 && shot_score > best_teammate_score;

        if (shot_recognized && Math.random() < shot_take_chance) {
          this.shoot();
        } else if (
          best_teammate &&
          best_teammate_score > (shot_recognized ? -2 : pass_threshold)
        ) {
          // a recognized-but-declined chance should usually be recycled
          // to a supporting teammate for a better angle, not carried
          // even deeper — without this, a declined shot fell through to
          // dribble() (which always drives at goal), so the player just
          // kept re-approaching and re-rolling the same chance, walking
          // the ball ever closer until it was essentially unmissable
          this.pass(this.team, opp);
        } else if (self_pressure > 1.2) {
          // under real pressure, get rid of it even if the option isn't great
          if (best_teammate && best_teammate_score > -2) {
            this.pass(this.team, opp);
          } else {
            this.dribble_commit_ticks = 2 + Math.floor(Math.random() * 3);
            this.dribble();
          }
        } else {
          this.dribble_commit_ticks = 2 + Math.floor(Math.random() * 3);
          this.dribble();
        }
      }

      else {
        // if ball is possessed by teammate
        // move to optimal position
        let target = this.calculate_optimal_position(m.possession);
        if (target==undefined) {
          target = {x:0,y:0,z:0};
        }

        // the closest couple of defenders should be sprinting to close
        // the ball carrier down, not jogging at the same pace as
        // everyone else holding formation shape — a strong target bias
        // toward the ball doesn't mean much if they get there no faster
        // than a player who isn't pressing at all
        let speed: "max" | "high" | "medium" = "medium";
        if (m.possession != this.team && this.position.name != "Goalkeeper") {
          let sorted = this.team.playersOnPitch
            .filter((p) => p.position.name != "Goalkeeper")
            .sort((a, b) => dist(a.loc, m.ball_pos) - dist(b.loc, m.ball_pos));
          let rank = sorted.indexOf(this);
          if (rank == 0) {
            speed = "max";
          } else if (rank == 1) {
            speed = "high";
          }
        }

        this.move_to(target, speed);

      }
        
        



    }
  }

  calculate_closest_teammate(m: Match) {

  }

  get_ball(m:Match) {
    let target = m.ball_pos;
    this.move_to(target,'max');
  }

  move_to(target: Coords, speed: "max" | "high" | "medium" | "slow") {

    // calculate dx, dy, dz
    let pace = this.attributes.get_attr("pace");
    // max speed of 100 pace player = 10 m/s
    // max speed of 0 pace player = 7 m/s
    let max_speed = 7 + (pace / 100) * 3;
    let acceleration = this.attributes.get_attr("acceleration");
    if (speed == "high") {
      max_speed *= 0.85;
    }
    if (speed == "medium") {
      max_speed *= 0.7;
    }
    if (speed == "slow") {
      max_speed *= 0.5;
    }
    // max acceleration of 100 acceleration player = 8 m/s/s
    // max acceleration of 0 acceleration player = 6 m/s/s
    let max_acceleration = 6 + (acceleration / 100) * 2;
    if (speed == "high") {
      max_acceleration *= 0.85;
    }
    if (speed == "medium") {
      max_acceleration *= 0.7;
    }
    if (speed == "slow") {
      max_acceleration *= 0.5;
    }

    // brake smoothly on approach instead of snapping straight to a stop
    let d = dist(this.loc, target);
    let approach_speed = Math.min(max_speed, d * 2);

    let dx = d > 0.01 ? ((target.x - this.loc.x) / d) * approach_speed : 0;
    let dy = d > 0.01 ? ((target.y - this.loc.y) / d) * approach_speed : 0;

    dx /= 60;
    dy /= 60;

    if (dx > this.dx) {
      this.dx = Math.min(this.dx + max_acceleration / 360, dx);
    } else if (dx < this.dx) {
      this.dx = Math.max(this.dx - max_acceleration / 360, dx);
    }
    if (dy > this.dy) {
      this.dy = Math.min(this.dy + max_acceleration / 360, dy);
    } else if (dy < this.dy) {
      this.dy = Math.max(this.dy - max_acceleration / 360, dy);
    }
  }

  attempt_pass(dx, dy, dz) {
    this.m.ball_dx = dx;
    this.m.ball_dy = dy;
    this.m.ball_dz = dz;
    this.m.ball_is_shot = false;
    // the ball is now in flight — don't leave the passer flagged as the
    // carrier, or a soft pass that hasn't traveled far by the next
    // possession check gets reassigned right back to them and they
    // immediately pass again
    this.m.player_possession = null;
    this.m.set_possession(null);
    this.dribble_commit_ticks = 0;
    this.m.last_passer = this;
    this.m.record("passes_attempted", this);
  }

  move() {
    this.loc.x += this.dx;
    this.loc.y += this.dy;
    this.loc.z += this.dz;

    if (this.dx == 0 && this.dy == 0 && this.dz == 0) {
      this.passive_movement();
    }
  }

  pass(team: Team, opp: Team) {
    let target = this.choose_pass_target(team, opp);
    target.receive_pass = true;
    // passing accuracy
    let pass_accuracy = this.attributes.get_attr("passing");
    if (pass_accuracy == undefined) {
      pass_accuracy = 25;
    }
    // distance to target
    let d = dist(this.loc, target.loc);
    let target_coords: Coords = {
      x: target.loc.x,
      y: target.loc.y,
      z: target.loc.z,
    };
    this.m.ball_target = target_coords;
    // choose whether to lob or pass on ground
    let lob = false;
    if (d > 20) {
      // lob
      lob = true;
    }

    let cross = false;
    // if passer in crossing zone and target in box, cross
    let direction = team.attacking_direction;
    if (direction == "left") {
      if (
        (this.loc.x < 20 &&
          this.loc.y <
            this.venue.width / 2 + PitchDimensions.penalty_area_width / 2) ||
        this.loc.y >
          this.venue.width / 2 - PitchDimensions.penalty_area_width / 2
      ) {
        // if target in box
        if (
          target.loc.x < 11 &&
          target.loc.y >
            this.venue.width / 2 - PitchDimensions.penalty_area_width / 3 &&
          target.loc.y <
            this.venue.width / 2 + PitchDimensions.penalty_area_width / 3
        ) {
          cross = true;
        }
      }
    } else if (direction == "right") {
      if (
        (this.loc.x > this.venue.length - 20 &&
          this.loc.y <
            this.venue.width / 2 + PitchDimensions.penalty_area_width / 2) ||
        this.loc.y >
          this.venue.width / 2 - PitchDimensions.penalty_area_width / 2
      ) {
        // if target in box
        if (
          target.loc.x > this.venue.length - 11 &&
          target.loc.y >
            this.venue.width / 2 - PitchDimensions.penalty_area_width / 3 &&
          target.loc.y <
            this.venue.width / 2 + PitchDimensions.penalty_area_width / 3
        ) {
          cross = true;
        }
      }
    }

    //calculate accuracy
    //apply error to target_coords based on passing accuracy and distance
    // worse passing accuracy means a larger error radius
    // max radius: 2m
    // min radius: .35m
    let error_radius = 0.35 + ((100 - pass_accuracy) / 100) * 1.65;
    // pick random point in the circle
    let r = Math.random() * error_radius;
    let theta = Math.random() * 2 * Math.PI;
    target_coords.x += r * Math.cos(theta);
    target_coords.y += r * Math.sin(theta);

    // caluclate speed to apply to ball
    // better passing and technique means faster pass
    // max speed = 25 m/s
    // min speed = 15 m/s

    let max_speed = 15 + (pass_accuracy / 100) * 10;

    let distance = dist(this.loc, target_coords);
    let technique = this.attributes.get_attr("technique");
    let error_plus_minus_percentage = 0.15 - (technique / 100) * 0.1;

    // pace scales with the player's attributes, not proportionally to
    // distance — real passes are struck with conviction even over short
    // distances, they just don't need full power to cover the ground
    let base_speed = max_speed * (0.55 + Math.min(distance, 30) / 30 * 0.45);
    let speed = base_speed * (1 + error_plus_minus_percentage * rand_in_range(-1, 1));

    if (speed > max_speed) {
      speed = max_speed;
    }
    // calculate dx, dy, dz
    let dx = ((target_coords.x - this.loc.x) / d) * speed;
    let dy = ((target_coords.y - this.loc.y) / d) * speed;
    let dz = 0;
    if (lob || cross) {
      dz = ((target_coords.z - this.loc.z) / d) * speed;
    }
    dx /= 60;
    dy /= 60;
    if (lob || cross) {
      dz /= 60;
    }

    this.attempt_pass(dx, dy, dz);

  }

  choose_pass_target(team: Team, opp: Team) {
    let players = team.playersOnPitch.filter((player) => {
      return player != this;
    });

    // preferred pass distance, adjusted by team/player passing tactics
    let preferred_distance = 15;
    if (
      team.tactics.includes("pass_very_short" as TeamInstruction) ||
      team.tactics.includes("pass_short" as TeamInstruction)
    ) {
      preferred_distance *= 0.6;
    }
    if (team.tactics.includes("pass_long" as TeamInstruction)) {
      preferred_distance *= 1.6;
    }
    if (this.instructions.includes("shorter_passes" as PlayerInstruction)) {
      preferred_distance *= 0.75;
    }
    // wide enough that realistic progressive/long passes stay competitive
    // instead of being swamped by a handful of very close teammates
    let std_dev = preferred_distance * 1.3;

    let attacking_goal: Coords = {
      x: team.attacking_direction === "left" ? 0 : this.venue.length,
      y: this.venue.width / 2,
      z: 0,
    };
    let self_value = threat_value(this.loc, attacking_goal);

    let scores = players.map((p) => {
      // prefer passes close to the team/player's preferred distance
      let d = dist(this.loc, p.loc);
      let distance_score = Math.exp(
        -0.5 * Math.pow((d - preferred_distance) / std_dev, 2)
      );

      // prefer teammates with more space from opponents
      let openness_score = 1 / (1 + p.calculate_pressure(opp));

      // prefer teammates in a genuinely more dangerous position, not just
      // teammates who happen to be marginally further forward — otherwise
      // the ball can circulate indefinitely without ever threatening goal
      let value_score = threat_value(p.loc, attacking_goal) - self_value;

      // reward switching the play to an open teammate on the other side of
      // the pitch, a classic creative/sideways pass
      let switch_score =
        (Math.abs(p.loc.y - this.loc.y) / this.venue.width) * openness_score;

      // reward finding a teammate who's currently making a forward run
      let run_score = p.run_ticks_remaining > 0 ? 1 : 0;

      // an open receiver isn't a safe pass if an opponent is standing in
      // the direct line the ball has to travel to reach them
      let risk_score = interception_risk(this.loc, p.loc, opp.playersOnPitch);

      return (
        distance_score * 0.6 +
        openness_score * 2 +
        value_score * 3 +
        switch_score * 1.2 +
        run_score * 1.5 -
        risk_score * 3
      );
    });

    // get player with highest score
    let index = scores.indexOf(Math.max(...scores));
    let target = players[index];
    return target;
  }

  calculate_pressure(opp: Team) {
    return pressure_at(this.loc, opp.playersOnPitch);
  }

  passive_movement() {
    // "brownian motion" for players
    // randomly move around in small radius around current location


    let radius = 0.025;
    let x = this.loc.x + (Math.random() - 0.5) * radius;
    let y = this.loc.y + (Math.random() - 0.5) * radius;

    // check if new location is within pitch
    if (x < 0) {
      x = 0;
    }
    if (x > this.venue.length) {
      x = this.venue.length;
    }
    if (y < 0) {
      y = 0;
    }
    if (y > this.venue.width) {
      y = this.venue.width;
    }

    this.loc = {
      x: x,
      y: y,
      z: this.loc.z,
    };
  }

  initialize() {
    this.target_speed = 0;
    this.target_loc =  (
      { x: 105/2, y: 68/2, z: 0 }
    );

    this.dx = 0;
    this.dy = 0;
    this.dz = 0;

    this.instructions = [];
    this.run_ticks_remaining = 0;
    this.dribble_commit_ticks = 0;
  }
}

export class Team extends Club {
  _playersOnPitch: PlayerOnPitch[];
  _substitutes: Player[];
  _attacking_direction: "left" | "right";

  tactics: TeamInstruction[];

  constructor(name: string) {
    super(name);
    this.tactics = [];
  }

  set playersOnPitch(players: PlayerOnPitch[]) {
    this._playersOnPitch = players;
  }

  get playersOnPitch() {
    return this._playersOnPitch;
  }

  set substitutes(substitutes: Player[]) {
    this._substitutes = substitutes;
  }

  set attacking_direction(direction: "left" | "right") {
    this._attacking_direction = direction;
  }

  get attacking_direction() {
    return this._attacking_direction;
  }

  add_instruction(instruction: TeamInstruction) {
    this.tactics.push(instruction);
  }

  remove_instruction(instruction: TeamInstruction) {
    let index = this.tactics.indexOf(instruction);
    this.tactics.splice(index, 1);
  }

  get instructions() {
    return this.tactics;
  }
}

export class Match {
  time: number;
  home_goals: number;
  away_goals: number;
  started: boolean;
  max_time: number;
  max_1st_half_time: number;
  max_2nd_half_time: number;
  half: 1 | 2;
  possible_extra_time: boolean;
  is_extra_time: boolean;
  extra_time_half: 1 | 2;
  max_1st_half_extra_time: number;
  max_2nd_half_extra_time: number;
  possible_penalties: boolean;
  is_penalties: boolean;
  possession: Team|null;
  outOfPossession: Team|null;
  player_possession: PlayerOnPitch | null;
  ticks: number;
  clock_ticks: number;
  team_kicked_off_first: Team;
  ball_pos: Coords;
  ball_dx: number;
  ball_dy: number;
  ball_dz: number;
  ball_target: Coords;
  _venue: Venue;
  TOP_LEFT: Coords;
  TOP_RIGHT: Coords;
  BOTTOM_LEFT: Coords;
  BOTTOM_RIGHT: Coords;
  _home: Team;
  _away: Team;
  _date_time: Date;
  playersOnPitch: PlayerOnPitch[];
  stat:Stat;
  ball_bounce:boolean;
  ball_last_touch:Team|null;
  gk_holding: PlayerOnPitch | null;
  gk_hold_ticks: number;
  last_passer: PlayerOnPitch | null;
  ball_is_shot: boolean;

  set home(home: Team) {
    this._home = home;
  }
  get home() {
    return this._home;
  }

  set away(away: Team) {
    this._away = away;
  }
  get away() {
    return this._away;
  }

  set date_time(date: Date) {
    this._date_time = date;
  }
  get date_time() {
    return this._date_time;
  }

  set venue(venue: Venue) {
    this._venue = venue;
  }
  get venue() {
    return this._venue;
  }

  record(stat:string, player:PlayerOnPitch) {
    this.stat.record(stat,player);
  }

  // team-level stat totals, summed across each player's individual
  // record — the public way to read match results out of the engine
  // (headless or otherwise) without reaching into Stat's internals
  team_totals(team: Team) {
    let totals = {
      shots: 0,
      shots_on_target: 0,
      passes_attempted: 0,
      passes_completed: 0,
      saves: 0,
    };
    for (let p of team.playersOnPitch) {
      let s = this.stat.player_stats._stats.get(p);
      if (s) {
        totals.shots += s.shots;
        totals.shots_on_target += s.shots_on_target;
        totals.passes_attempted += s.passes_attempted;
        totals.passes_completed += s.passes_completed;
        totals.saves += s.saves;
      }
    }
    return totals;
  }

  get_summary() {
    return {
      home_goals: this.home_goals,
      away_goals: this.away_goals,
      home: this.team_totals(this.home),
      away: this.team_totals(this.away),
    };
  }

  initialize(rules: Map<string, boolean>) {
    this.time = 0.0;
    this.home_goals = 0;
    this.away_goals = 0;
    this.max_time = 90.0 * 60.0;
    this.ticks = 0;
    this.TOP_LEFT = {
      x: 0,
      y: 0,
      z: 0,
    };

    this.TOP_RIGHT = {
      x: this._venue.length,
      y: 0,
      z: 0,
    };

    this.BOTTOM_LEFT = {
      x: 0,
      y: this._venue.width,
      z: 0,
    };

    this.BOTTOM_RIGHT = {
      x: this._venue.length,
      y: this._venue.width,
      z: 0,
    };

    this.ball_pos = {
      x: this.venue.dimensions.kickoff_spot.x,
      y: this.venue.width / 2,
      z: 0,
    };

    this.ball_dx = 0 / 60;
    this.ball_dy = 0 / 60;
    this.ball_dz = 0;
    this.ball_bounce = false;
    this.gk_holding = null;
    this.gk_hold_ticks = 0;
    this.last_passer = null;
    this.ball_is_shot = false;

    this.ball_target = {
      x: this.venue.dimensions.kickoff_spot.x,
      y: this.venue.dimensions.kickoff_spot.y,
      z: 0,
    }

    let rand = Math.random();
    if (rand < 0.5) {
      this.home.attacking_direction = "right";
      this.away.attacking_direction = "left";
    } else {
      this.home.attacking_direction = "left";
      this.away.attacking_direction = "right";
    }

    console.log("White team attacking direction: " + this.home.attacking_direction);

    this.half = 1;

    // this.time never resets between periods (it's the running match
    // clock), so these thresholds have to be cumulative — they previously
    // weren't, which meant the second half's condition (time < 2700) was
    // already false the instant the first half ended (time == 2700), and
    // the match silently stopped at half time every single game.
    this.max_1st_half_time = 45.0 * 60.0;
    this.max_2nd_half_time = this.max_1st_half_time + 45.0 * 60.0;

    if (rules.get("extra_time") == true) {
      this.possible_extra_time = true;
      this.is_extra_time = false;
      this.extra_time_half = 1;
      this.max_1st_half_extra_time = this.max_2nd_half_time + 15.0 * 60.0;
      this.max_2nd_half_extra_time = this.max_1st_half_extra_time + 15.0 * 60.0;
    } else {
      this.possible_extra_time = false;
      this.is_extra_time = false;
      this.extra_time_half = 1;
      this.max_1st_half_extra_time = 0;
      this.max_2nd_half_extra_time = 0;
    }
    if (rules.get("penalties") == true) {
      this.possible_penalties = true;
      this.is_penalties = false;
    } else {
      this.possible_penalties = false;
      this.is_penalties = false;
    }

    this.home.playersOnPitch.forEach((player) => {
      player.venue = this.venue;
      player.team = this.home;
      player.m = this;
    });

    this.away.playersOnPitch.forEach((player) => {
      player.venue = this.venue;
      player.team = this.away;
      player.m = this;
    });

    this.playersOnPitch = [
      ...this.home.playersOnPitch,
      ...this.away.playersOnPitch,
    ];

    this.playersOnPitch.forEach((player) => {
      player.calculate_pitch_zone_scores();
      player.loc = player.kickoff_position();
    });

    this.stat = new Stat(this);
  }

  // pure formatting, no DOM — used by MatchRenderer to display the clock
  fmt_seconds(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    // pad seconds with 0 if less than 10
    if (secs < 10) {
      return `${minutes}:0${secs}`;
    }
    return `${minutes}:${secs}`;
  }

  players_decide() {
    this.away.playersOnPitch.forEach((player) => {
      player.decide_action(this);
    });
    this.home.playersOnPitch.forEach((player) => {
      player.decide_action(this);
    });
    
  }

  // update ball possession
  // there was no way for a defender to actually win the ball off a
  // carrier — proximity alone never cost the attacking side anything, so
  // a player one-on-one with the keeper could recycle possession
  // indefinitely with zero risk, since nothing was closing them down in
  // a way that could actually take the ball away. A defender who
  // genuinely closes the gap now gets a real, attribute-based chance to
  // dispossess them.
  attempt_tackles() {
    if (this.gk_holding || !this.player_possession) {
      return;
    }
    let carrier = this.player_possession;
    let opp_team = carrier.team == this.home ? this.away : this.home;
    // goalkeepers don't tackle in open play — but that means we need the
    // closest *outfield* defender specifically, not "the closest
    // opponent, bail if it's the keeper": in a genuine breakaway the
    // keeper legitimately *is* the closest opponent (nobody else has
    // caught up), so bailing out there disabled tackling in exactly the
    // one-on-one scenario it most needs to cover
    let outfield_opponents = opp_team.playersOnPitch.filter(
      (p) => p.position.name != "Goalkeeper"
    );
    let closest_opp = outfield_opponents.reduce((a, b) =>
      dist(a.loc, carrier.loc) < dist(b.loc, carrier.loc) ? a : b
    );
    let d = dist(closest_opp.loc, carrier.loc);
    let tackle_range = 1.5;
    if (d > tackle_range) {
      return;
    }

    let tackling = closest_opp.attributes.get_attr("tackling");
    let ball_control = (carrier.attributes.get_attr("dribbling") + carrier.attributes.get_attr("balance")) / 2;
    // roughly: an average defender who closes down an average dribbler
    // wins the ball a bit under a third of the time they get close
    // enough to actually challenge — real risk, not a coin flip
    let tackle_chance = Math.min(0.6, Math.max(0.05, 0.28 + ((tackling - ball_control) / 100) * 0.5));
    if (Math.random() < tackle_chance) {
      this.player_possession = null;
      this.set_possession(null);
      this.ball_last_touch = closest_opp.team;
      this.ball_is_shot = false;
      carrier.dribble_commit_ticks = 0;
      // knock it loose a short distance rather than teleporting
      // possession outright — both sides get a fair scramble for it
      let away_x = this.ball_pos.x - closest_opp.loc.x || 0.01;
      let away_y = this.ball_pos.y - closest_opp.loc.y || 0.01;
      let norm = Math.sqrt(away_x * away_x + away_y * away_y) || 1;
      this.ball_dx = (away_x / norm) * 2 / 60;
      this.ball_dy = (away_y / norm) * 2 / 60;
    }
  }

  update_possession() {
    let closest = this.closest_to_ball();

    // hysteresis: once a player has the ball, require it to drift further
    // away before calling it loose, so it doesn't flicker in and out of
    // possession as it rolls right at the boundary
    let release_range = this.player_possession != null ? 3 : 2;

    if (
      (dist(closest[0].loc, this.ball_pos) > release_range &&
        dist(closest[1].loc, this.ball_pos) > release_range) ||
      this.ball_pos.z > 2
    ) {
      this.player_possession = null;
      this.set_possession(null);
    }
    else {
      closest.sort((a, b) => {
        return dist(a.loc, this.ball_pos) - dist(b.loc, this.ball_pos);
      });
      let new_carrier = closest[0];

      // if the ball was in flight from a pass and the intended receiver is
      // the one gaining control, credit the passer with a completion —
      // checked here, before decide_action resets receive_pass for this
      // cycle, since that's the one moment both flags are still valid
      if (this.last_passer && new_carrier.receive_pass && new_carrier.team == this.last_passer.team) {
        this.record("passes_completed", this.last_passer);
      }
      this.last_passer = null;

      this.player_possession = new_carrier;
      this.set_possession(new_carrier.team);

    }
  }

  closest_to_ball() {
    let closest:PlayerOnPitch[] = [];

    let temp: PlayerOnPitch = this.home.playersOnPitch[0];
    let min_dist = 1000;
    for (let p of this.home.playersOnPitch) {
      let d = dist(p.loc, this.ball_pos);
      if (d < min_dist) {
        temp = p;
        min_dist = d;
      }
    }
    closest.push(temp);
    min_dist = 1000;
    for (let p of this.away.playersOnPitch) {
      let d = dist(p.loc, this.ball_pos);
      if (d < min_dist) {
        temp = p;
        min_dist = d;
      }
    }
    closest.push(temp);

    return closest;

  }

  collision_detection() {
    // two players can't occupy the same space (kept tight enough that two
    // players genuinely contesting a loose ball can still both reach it)

    let radius = 0.5;

    for (let p of this.playersOnPitch) {
      for (let q of this.playersOnPitch
        .filter((player) => {
          return player != p;
        })) {
        let d = dist(p.loc, q.loc);
        if (d < radius) {
          // collision
          // move p and q apart
          p.loc.x += (p.loc.x - q.loc.x) /8;
          p.loc.y += (p.loc.y - q.loc.y) /8;
          q.loc.x += (q.loc.x - p.loc.x) /8;
          q.loc.y += (q.loc.y - p.loc.y) /8;

        }
      }
    }

    // opponents can't crowd the goalkeeper — real players naturally give
    // keepers room, especially near their own goal. Without this, a
    // striker could simply stand right in front of (or right next to)
    // the keeper, turning every distribution into a free interception,
    // and there was nothing making an interception-aware throw target
    // actually solve that if the keeper had nowhere else safe to look
    let gk_exclusion_radius = 6;
    for (let team of [this.home, this.away]) {
      let gk = team.playersOnPitch.find((p) => p.position.name == "Goalkeeper");
      if (!gk) {
        continue;
      }
      let opp_team = team == this.home ? this.away : this.home;
      for (let p of opp_team.playersOnPitch) {
        let d = dist(p.loc, gk.loc);
        if (d < gk_exclusion_radius && d > 0) {
          let push = gk_exclusion_radius - d;
          p.loc.x += ((p.loc.x - gk.loc.x) / d) * push;
          p.loc.y += ((p.loc.y - gk.loc.y) / d) * push;
        }
      }
    }

    // player can't go off the screen
    for (let p of this.playersOnPitch) {
      if (p.loc.x < 0) {
        p.loc.x = 0;
      }
      if (p.loc.x > this.venue.length) {
        p.loc.x = this.venue.length;
      }
      if (p.loc.y < 0) {
        p.loc.y = 0;
      }
      if (p.loc.y > this.venue.width) {
        p.loc.y = this.venue.width;
      }
    }


    // ball can't be inside a player
    let ball_radius = 0.22;
    for (let p of this.playersOnPitch) {
      let d = dist(p.loc, this.ball_pos);
      if (d < ball_radius) {
        // collision
        //move ball away from player
        this.ball_pos.x += (this.ball_pos.x - p.loc.x) / 2;
        this.ball_pos.y += (this.ball_pos.y - p.loc.y) / 2;
      }
    }

    // goalkeeper saves: a keeper can gather or parry the ball within
    // diving range if it's heading back toward their own goal
    for (let team of [this.home, this.away]) {
      let gk = team.playersOnPitch.find((p) => p.position.name == "Goalkeeper");
      if (!gk) {
        continue;
      }
      let d = dist(gk.loc, this.ball_pos);
      let dive_radius = 2.2;
      if (d < dive_radius && this.ball_pos.z < 2.4) {
        let own_goal_x = team.attacking_direction == "left" ? this.venue.length : 0;
        let heading_toward_own_goal =
          (own_goal_x == 0 && this.ball_dx < 0) ||
          (own_goal_x != 0 && this.ball_dx > 0);
        if (heading_toward_own_goal) {
          let reactions = gk.attributes.get_attr("reactions");
          let agility = gk.attributes.get_attr("agility");
          let handling = gk.attributes.get_attr("handling");
          let one_on_ones = gk.attributes.get_attr("one_on_ones");
          let positioning = gk.attributes.get_attr("positioning");
          let ability = (reactions + agility + handling + one_on_ones + positioning) / 5;
          let reach = 1 - d / dive_radius;
          let save_chance = Math.min(0.95, (ability / 100) * 0.6 + reach * 0.35);
          if (Math.random() < save_chance) {
            this.ball_pos = { x: gk.loc.x, y: gk.loc.y, z: 0 };
            this.ball_dx = 0;
            this.ball_dy = 0;
            this.ball_dz = 0;
            this.set_possession(team);
            this.player_possession = gk;
            // the keeper can use their hands and hold the ball — the
            // opponent can't challenge for it while they're holding it
            this.gk_holding = gk;
            this.gk_hold_ticks = 60 + Math.floor(Math.random() * 60);
            this.record("saves", gk);
          }
        }
      }
    }

    // check if the ball crosses either goal line
    if (this.ball_pos.x < 0 || this.ball_pos.x > this.venue.length) {
      let exit_side: "left" | "right" = this.ball_pos.x < 0 ? "left" : "right";
      // whichever team attacks the *other* end defends the goal on this side
      let defending_team =
        this.home.attacking_direction == (exit_side == "left" ? "right" : "left")
          ? this.home
          : this.away;
      let attacking_team = defending_team == this.home ? this.away : this.home;

      if (this.ball_is_shot && this.ball_pos.y > this.venue.width/2 - 7.32/2 && this.ball_pos.y < this.venue.width/2 + 7.32/2) {
        // goal
        this.goal(attacking_team);
      }
      else if (this.ball_last_touch == defending_team) {
        // corner for the attacking team
        this.corner(attacking_team, this.ball_pos.y > this.venue.width/2 ? "right" : "left");
      }
      else {
        // goal kick for the defending team
        this.goal_kick(defending_team);
      }
    }
    // check if the ball crosses either touch line
    else if (this.ball_pos.y < 0 || this.ball_pos.y > this.venue.width) {
      // whoever didn't put it out of play takes the throw-in
      let team = this.ball_last_touch == this.home ? this.away : this.home;
      let x = Math.min(Math.max(this.ball_pos.x, 0), this.venue.length);
      this.throw_in(team, x);
    }
  }

  goal(team:Team) {
    this.ball_pos = {
      x: this.venue.length/2,
      y: this.venue.width/2,
      z: 0
    };
    if (team == this.home) {
      this.home_goals++;
    }
    else {
      this.away_goals++;
    }
    this.ball_last_touch = null;
    this.do_kickoff();
  }

  // once the hold timer runs out, the keeper throws it to an open nearby
  // teammate if there's a safe one, otherwise punts it long downfield
  gk_distribute(gk: PlayerOnPitch) {
    let team = gk.team;
    let opp = team == this.home ? this.away : this.home;
    this.ball_is_shot = false;

    // pressure at the receiver's own spot isn't enough — an opponent can
    // be standing in the direct line between the keeper and an otherwise
    // unmarked teammate (a striker camped right in front of goal is the
    // classic case), so the throw needs to check the lane too, the same
    // way outfield passing does
    let candidates = team.playersOnPitch.filter(
      (p) => p != gk && dist(gk.loc, p.loc) < 30
    );
    let best: PlayerOnPitch | null = null;
    let best_risk = Infinity;
    for (let p of candidates) {
      let pressure = p.calculate_pressure(opp);
      let lane_risk = interception_risk(gk.loc, p.loc, opp.playersOnPitch);
      let risk = pressure + lane_risk * 2;
      if (risk < best_risk) {
        best_risk = risk;
        best = p;
      }
    }

    if (best && best_risk < 1.5) {
      // throw it out to them
      let d = dist(gk.loc, best.loc);
      let speed = Math.min(18, d * 1.5);
      this.ball_dx = ((best.loc.x - gk.loc.x) / d) * speed / 60;
      this.ball_dy = ((best.loc.y - gk.loc.y) / d) * speed / 60;
      this.ball_dz = 0;
      best.receive_pass = true;
    } else {
      // punt it long downfield
      let attacking_x = team.attacking_direction == "left" ? 0 : this.venue.length;
      let target_x = gk.loc.x + (attacking_x - gk.loc.x) * 0.6;
      let target_y = this.venue.width / 2 + rand_in_range(-15, 15);
      let d = dist(gk.loc, { x: target_x, y: target_y, z: 0 });
      let speed = 22;
      this.ball_dx = ((target_x - gk.loc.x) / d) * speed / 60;
      this.ball_dy = ((target_y - gk.loc.y) / d) * speed / 60;
      this.ball_dz = 5 / 60;
    }

    this.record("passes_attempted", gk);
    this.gk_holding = null;
    this.player_possession = null;
    this.set_possession(null);
  }

  getClosestPlayer(team: Team, point: Coords) {
    let players = team.playersOnPitch;
    let closest = players[0];
    let min_dist = dist(closest.loc, point);
    for (let p of players) {
      let d = dist(p.loc, point);
      if (d < min_dist) {
        min_dist = d;
        closest = p;
      }
    }
    return closest;
  }

  // "cut" straight to players being organized for a restart, rather than
  // freezing all 22 of them exactly where the stoppage happened
  prepare_restart(teamInPossession: Team) {
    for (let p of this.playersOnPitch) {
      p.dx = 0;
      p.dy = 0;
      p.loc = p.calculate_optimal_position(teamInPossession);
    }
  }

  corner(team: Team, side: "left" | "right") {
    // team is the attacking team taking the corner
    let x = team.attacking_direction == "left" ? 0 : this.venue.length;
    let y = side == "left" ? 0 : this.venue.width;
    let opp = team == this.home ? this.away : this.home;

    this.ball_pos = { x, y, z: 0 };
    this.ball_dx = 0;
    this.ball_dy = 0;
    this.ball_dz = 0;
    this.set_possession(team);
    this.prepare_restart(team);

    let taker = this.getClosestPlayer(team, { x, y, z: 0 });
    taker.loc = { x, y, z: 0 };
    this.player_possession = taker;
    taker.pass(team, opp);
  }

  goal_kick(team: Team) {
    // team is the defending team taking the goal kick
    let x = team.attacking_direction == "left" ? this.venue.length - 5.5 : 5.5;
    let y = this.venue.width / 2;
    let opp = team == this.home ? this.away : this.home;

    this.ball_pos = { x, y, z: 0 };
    this.ball_dx = 0;
    this.ball_dy = 0;
    this.ball_dz = 0;
    this.set_possession(team);
    this.prepare_restart(team);

    let taker = this.getClosestPlayer(team, { x, y, z: 0 });
    taker.loc = { x, y, z: 0 };
    this.player_possession = taker;
    taker.pass(team, opp);
  }

  throw_in(team: Team, x: number) {
    let y = this.ball_pos.y < 0 ? 0 : this.venue.width;
    let opp = team == this.home ? this.away : this.home;

    this.ball_pos = { x, y, z: 0 };
    this.ball_dx = 0;
    this.ball_dy = 0;
    this.ball_dz = 0;
    this.set_possession(team);
    this.prepare_restart(team);

    let taker = this.getClosestPlayer(team, { x, y, z: 0 });
    taker.loc = { x, y: y == 0 ? 1 : this.venue.width - 1, z: 0 };
    this.ball_pos.y = taker.loc.y;
    this.player_possession = taker;
    taker.pass(team, opp);
  }

  move_ball() {
    this.ball_pos.x += this.ball_dx;
    this.ball_pos.y += this.ball_dy;
    this.ball_pos.z += this.ball_dz;

    // ball_dx/dy/dz are stored as per-tick displacement (v * dt, dt = 1/60s),
    // so recover true velocity in m/s before using it in the physics below —
    // using the raw per-tick values directly here made drag ~3600x too weak
    let vx = this.ball_dx * 60;
    let vy = this.ball_dy * 60;
    let vz = this.ball_dz * 60;

    // mass = 0.43 kg, rolling friction coefficient ~0.3 on grass
    let mass = 0.43;
    let f_friction = this.ball_pos.z > 0 ? 0 : 0.3 * mass * 9.81;

    let f_drag_x = 0.5 * 0.25 * Math.PI * 0.11 * 0.11 * 1.2 * vx * vx;
    let f_drag_y = 0.5 * 0.25 * Math.PI * 0.11 * 0.11 * 1.2 * vy * vy;
    let f_drag_z = 0.5 * 0.25 * Math.PI * 0.11 * 0.11 * 1.2 * vz * vz;

    let f_total_x = f_friction + f_drag_x;
    let f_total_y = f_friction + f_drag_y;
    let f_total_z = f_drag_z;
    let a_x = f_total_x / mass;
    let a_y = f_total_y / mass;
    let a_z = 9.81 - f_total_z / mass;

    // v_new = v_old - a*dt, and ball_dx stores v*dt (not v), so the
    // per-tick decrement is a*dt^2, not a*dt (dt = 1/60s)
    let dt2 = 1 / 3600;

    if (this.ball_dx > 0) {
      this.ball_dx = Math.max(0, this.ball_dx - a_x * dt2);
    } else if (this.ball_dx < 0) {
      this.ball_dx = Math.min(0, this.ball_dx + a_x * dt2);
    }
    if (this.ball_dy > 0) {
      this.ball_dy = Math.max(0, this.ball_dy - a_y * dt2);
    } else if (this.ball_dy < 0) {
      this.ball_dy = Math.min(0, this.ball_dy + a_y * dt2);
    }

    // gravity has to keep pulling the ball down for the whole time it's
    // airborne, not just while it's still rising — otherwise it hangs at
    // the top of its arc and barely comes back down
    if (this.ball_pos.z > 0 || this.ball_dz > 0) {
      this.ball_dz -= a_z * dt2;
    }
    if (this.ball_dz <= 0 && this.ball_pos.z < .16) {
      // bounce, losing some energy each time rather than forever
      this.ball_pos.z = 0;
      this.ball_dz = -this.ball_dz * 0.5;
    }

    


    // if velocity is too small, set to 0

    if (this.ball_dx < 0.02 && this.ball_dx > -0.02) {
      this.ball_dx = 0;
    }
    if (this.ball_dy < 0.02 && this.ball_dy > -0.02) {
      this.ball_dy = 0;
    }
    if (this.ball_dz < 0.02 && this.ball_dz > -0.02) {
      this.ball_dz = 0;
    }
  }

  move_players() {
    this.home.playersOnPitch.forEach((player) => {
      player.move();
    });
    this.away.playersOnPitch.forEach((player) => {
      player.move();
    });
  }


  tick() {

    this.time += 1 / 60;
    this.ticks += 1;

    if (this.gk_holding) {
      // the ball stays in the keeper's hands, untouchable, until they
      // release it — no physics, no possession contest, and no leftover
      // dive momentum carrying them around while they're holding it
      this.gk_holding.dx = 0;
      this.gk_holding.dy = 0;
      this.ball_pos = { x: this.gk_holding.loc.x, y: this.gk_holding.loc.y, z: 0 };
      this.gk_hold_ticks--;
      if (this.gk_hold_ticks <= 0) {
        this.gk_distribute(this.gk_holding);
      }
    } else if (this.ticks == 10) {
      this.attempt_tackles();
      this.update_possession();
    }

    if (this.ticks == 10) {
      // human reaction time is roughly
      // a sixth of a second so only
      // update every 10 ticks
      this.ticks = 0;
      this.players_decide();
    }
    this.collision_detection();
    this.move_players();
    if (this.gk_holding) {
      // handled above
    } else if (this.player_possession) {
      // the ball stays at the carrier's feet under close control — the
      // rolling/flight physics only take over once it's actually been
      // kicked (attempt_pass/attempt_shot clear player_possession the
      // instant that happens) or the ball is genuinely loose. Without
      // this, a "dribbling" player just runs away from a ball that stays
      // put, loses possession within a fraction of a second, and never
      // visibly carries it anywhere.
      this.ball_pos = {
        x: this.player_possession.loc.x,
        y: this.player_possession.loc.y,
        z: 0,
      };
      this.ball_dx = 0;
      this.ball_dy = 0;
      this.ball_dz = 0;
    } else {
      this.move_ball();
    }

  }

  getKickoffPlayer(team: Team) {
    let players = team.playersOnPitch;

    // if team has striker
    players = players.filter((player) => {
      return player.position.abbreviation == "ST";
    });
    if (players.length > 0) {
      if (players.length > 1) {
        // choose the one with better passing
        players.sort((a, b) => {
          return a.get_attribute("passing") - b.get_attribute("passing");
        });
      }

      return players[0];
    } else {
      // choose most attacking player
      players.filter((player) => {
        return (
          player.position.abbreviation == "LW" ||
          player.position.abbreviation == "RW"
        );
      });
      if (players.length > 0) {
        if (players.length > 1) {
          // choose the one with better passing
          players.sort((a, b) => {
            return a.get_attribute("passing") - b.get_attribute("passing");
          });
        }
        return players[0];
      } else {
        players.filter((player) => {
          return (
            player.position.abbreviation == "CAM" ||
            player.position.abbreviation == "LAM" ||
            player.position.abbreviation == "RAM"
          );
        });
        if (players.length > 0) {
          if (players.length > 1) {
            // choose the one with better passing
            players.sort((a, b) => {
              return a.get_attribute("passing") - b.get_attribute("passing");
            });
          }
          return players[0];
        } else {
          players.filter((player) => {
            return (
              player.position.abbreviation == "CM" ||
              player.position.abbreviation == "LM" ||
              player.position.abbreviation == "RM"
            );
          });
          if (players.length > 0) {
            if (players.length > 1) {
              // choose the one with better passing
              players.sort((a, b) => {
                return a.get_attribute("passing") - b.get_attribute("passing");
              });
            }
            return players[0];
          } else {
            players.filter((player) => {
              return (
                player.position.abbreviation == "CDM" ||
                player.position.abbreviation == "LCM" ||
                player.position.abbreviation == "CM" ||
                player.position.abbreviation == "RCM"
              );
            });
            if (players.length > 0) {
              if (players.length > 1) {
                // choose the one with better passing
                players.sort((a, b) => {
                  return (
                    a.get_attribute("passing") - b.get_attribute("passing")
                  );
                });
              }
              return players[0];
            } else {
              players.filter((player) => {
                return (
                  player.position.abbreviation == "CDM" ||
                  player.position.abbreviation == "LDM" ||
                  player.position.abbreviation == "RDM"
                );
              });
              if (players.length > 0) {
                if (players.length > 1) {
                  // choose the one with better passing
                  players.sort((a, b) => {
                    return (
                      a.get_attribute("passing") - b.get_attribute("passing")
                    );
                  });
                }
                return players[0];
              } else return players[0];
            }
          }
        }
      }
    }
  }

  set_possession(team: Team|null) {
    
    if (team instanceof Team) {
      this.possession = team;
      this.outOfPossession = team == this.home ? this.away : this.home;
      this.ball_last_touch = team;
    } else {
      this.possession = null;
      this.outOfPossession = null;
    }
  }

  do_kickoff(half?: boolean) {
    const rand = Math.random();
    let team = 0;
    if (!half) {
      if (rand < 0.5) {
        this.set_possession(this.home);
        this.team_kicked_off_first = this.home;
      } else {
        this.set_possession(this.away);
        team = 1;
        this.team_kicked_off_first = this.away;
      }
    } else {
      if (this.team_kicked_off_first == this.home) {
        this.set_possession(this.away);
        team = 1;
      } else {
        this.set_possession(this.home);
        team = 0;
      }
    }
    let t = team == 0 ? this.home : this.away;
    let o = team == 0 ? this.away : this.home;

    this.ball_pos = {
      x: this.venue.dimensions.kickoff_spot.x,
      y: this.venue.dimensions.kickoff_spot.y,
      z: 0,
    };
    this.ball_dx = 0;
    this.ball_dy = 0;
    this.ball_dz = 0;
    this.prepare_restart(t);

    const p1 = this.getKickoffPlayer(t);
    p1.loc.x = this.venue.dimensions.kickoff_spot.x;
    if (p1.team.attacking_direction == "left") {
      p1.loc.x -= 1;
    } else {
      p1.loc.x += 1;
    }
    p1.loc.y = this.venue.dimensions.kickoff_spot.y;
    this.player_possession = p1;
    this.player_possession.pass(t, o);
  }

  // advances the match by exactly one tick, handling kickoffs and
  // half/extra-time transitions along the way. Returns false once the
  // match is completely over. This is the single source of truth for
  // match progression — both the headless simulate() loop and a paced,
  // rendered loop (see index.ts) drive the match by calling this
  // repeatedly, so there's exactly one implementation of "what happens
  // next" instead of the same four-loop structure duplicated per caller.
  tick_match(): boolean {
    if (this.half == 1 && this.time < this.max_1st_half_time) {
      if (!this.started) {
        this.do_kickoff(false);
        this.started = true;
      }
      this.tick();
      return true;
    }
    if (this.half == 1) {
      this.half = 2;
      this.started = false;
      return true;
    }
    if (this.half == 2 && this.time < this.max_2nd_half_time) {
      if (!this.started) {
        this.do_kickoff(true);
        this.started = true;
      }
      this.tick();
      return true;
    }
    if (this.possible_extra_time && this.home_goals == this.away_goals) {
      if (!this.is_extra_time) {
        this.is_extra_time = true;
        this.extra_time_half = 1;
        this.started = false;
        return true;
      }
      if (this.extra_time_half == 1 && this.time < this.max_1st_half_extra_time) {
        if (!this.started) {
          this.do_kickoff(false);
          this.started = true;
        }
        this.tick();
        return true;
      }
      if (this.extra_time_half == 1) {
        this.extra_time_half = 2;
        this.started = false;
        return true;
      }
      if (this.extra_time_half == 2 && this.time < this.max_2nd_half_extra_time) {
        if (!this.started) {
          this.do_kickoff(true);
          this.started = true;
        }
        this.tick();
        return true;
      }
    }
    return false;
  }

  // headless: runs the whole match to completion as fast as possible, no
  // pacing, no rendering. This is what makes running many matches in bulk
  // (to validate the engine's output distribution) actually practical —
  // the old play() paced itself to wall-clock time, so a 90 sim-minute
  // match took ~90 real minutes to compute.
  simulate(
    rules: Map<string, boolean> = new Map([
      ["extra_time", false],
      ["penalties", false],
    ])
  ) {
    this.initialize(rules);
    while (this.tick_match()) {}
  }
}

export class Stat {
  player_stats:PlayerMatchStats;

  constructor (match:Match|SimMatch) {
    this.player_stats = new PlayerMatchStats();
    for (let p of match.playersOnPitch) {
      this.player_stats.push(p);
    }
  }
  record(stat:string, type:Player|Team) {
    if (type instanceof Player) {
      // record player stat
      this.player_stats.record(type, stat);

    }
  }
}

class PlayerMatchStats {
  _stats: Map<Player, PlayerStats>;

  constructor() {
    this._stats = new Map();
  }
  push(player:Player) {
    this._stats.set(player,{
      goals: 0,
      assists: 0,
      passes_attempted: 0,
      passes_completed: 0,
      shots: 0,
      shots_on_target: 0,
      tackles_attempted: 0,
      tackles_completed: 0,
      interceptions: 0,
      fouls: 0,
      fouls_suffered: 0,
      yellow_cards: 0,
      red_cards: 0,
      saves: 0,
      goals_conceded: 0,
      clean_sheets: 0,
      penalties_scored: 0,
      penalties_missed: 0,
      penalties_saved: 0,
      own_goals: 0,
      minutes_played: 0,
      xG: 0,
      xA: 0,
    });
  }

  record(player:Player, stat:string) {
    let s = this._stats.get(player);
    if (s) {
      if (stat == "passes_attempted") {
        s.passes_attempted += 1;
      }
      if (stat == "passes_completed") {
        s.passes_completed += 1;
      }
      if (stat == "shots") {
        s.shots += 1;
      }
      if (stat == "shots_on_target") {
        s.shots_on_target += 1;
      }
      if (stat == "saves") {
        s.saves += 1;
      }

    }

  }
}

