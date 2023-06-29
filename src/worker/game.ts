import { Club } from "./club";
import {
  Player,
  Position,
  Role,
  Instruction,
  TeamInstruction,
  PlayerInstruction,
} from "./person";
import { PitchDimensions, Venue } from "./place";
import { Coords, PitchArea, Polygon } from "../common/types";
import { DateTime } from "luxon";
import { draw_pitch } from "./index";
import { dist, in_range, meters_to_px, rand_in_range } from "../common/helpers";

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

  calculate_optimal_position(teamInPossession: Team|null) {
    // move towards more threatening positions
    // or provide passing options
    
    // iterate through positions in radius
    // pick one based on movement attribute
    // and team tactics
    let radius = 10;
    // 10 m
    let positions:Coords[] = [];
    for (let x = this.loc.x - radius; x < this.loc.x + radius; x+=2) {
      for (let y = this.loc.y - radius; y < this.loc.y + radius; y+=2) {
        positions.push({x:x,y:y,z:0});
      }
    }
    let scores = Array(positions.length).fill(0);
    for (let p of positions) {
      let threat = this.threat_at_position(this.team, p);
      scores[positions.indexOf(p)] += threat;
    }

    // sort positions by score
    scores.sort((a,b) => {
      return b-a;
    });

    positions.sort((a,b) => {
      return scores[positions.indexOf(b)] - scores[positions.indexOf(a)];
    });      

    let movement = this.attributes.get_attr("movement");
    if (movement == undefined) {
      movement = 25;
    }
    
    // lower movement means more deviation
    // maximum randomness = 0.5
    // minimum randomness = 0.1

    let randomness = 0.5 - (movement / 100) * 0.4;
    let index = Math.floor(Math.random() * randomness * 10);
    let target = positions[index];
    console.log("moving to target" + target.x + " " + target.y);
    return target;
  }

  kickoff_position() {
    return 0;
  }

  dribble() {
    let dribbling = this.attributes.get_attr("dribbling");
    if (dribbling == undefined) {
      dribbling = 25;
    }

    let target = this.calculate_optimal_position(this.team);
    this.dx = 0;
    this.dy = 0;
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
    if (shooting == undefined) {
      shooting = 25;
    }
    // accuracy
    // max accuracy_radius = 1.25m
    // min accuracy_radius = 0.25m
    let accuracy_radius = 1.25 - (shooting / 100) * 1;
    // power
    let technique = this.attributes.get_attr("technique");
    if (technique == undefined) {
      technique = 25;
    }
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
    this.m.record("shots", this);
  }
  decide_action(m:Match) {
    // if ball is not possessed by anyone, and player is closest 
    // teammate, try to get it
    if (m.possession == null) {
      let closest = m.closest_to_ball();
      if (closest.includes(this)) {
        this.get_ball(m);
      } else {
        if (this.receive_pass) {
          console.log("receiving pass");
          this.move_to(m.ball_pos, 'max');
        }
        else {
          this.calculate_optimal_position(m.outOfPossession);

          this.move_to(this.target_loc,'medium');
        }
      }
    } else {
      this.receive_pass = false;
      // if ball is possessed by self
      if (m.player_possession == this) {
        // dribble, pass, or shoot
        // calculate teammate threat
        let teammate_threat = new Array(this.team.playersOnPitch.length-1).fill(0);
        let teammate_pressure = new Array(this.team.playersOnPitch.length-1).fill(0);
        let diff = new Array(this.team.playersOnPitch.length-1).fill(0);
        for (let p of this.team.playersOnPitch.filter((player) => {
          return player != this;
        })) {
          let threat = p.calculate_threat(this.team);
          let pressure = p.calculate_pressure(m.outOfPossession as Team);
          teammate_threat[this.team.playersOnPitch.indexOf(p)] = threat;
          teammate_pressure[this.team.playersOnPitch.indexOf(p)] = pressure;
          diff[this.team.playersOnPitch.indexOf(p)] = (threat - pressure)*.75;
        }

        let self_threat = this.calculate_threat(this.team);
        let self_pressure = this.calculate_pressure(m.outOfPossession as Team);
        let self_diff = self_threat - self_pressure;
        let max_diff = Math.max(...diff);
        console.log(self_diff, max_diff);
        if (max_diff > self_diff) {
          // pass
          this.pass(this.team, m.outOfPossession as Team);
        } else if (self_diff > max_diff){
          // if self diff is lower than shot threshold,
          // dribble to a more threatening position
          if (self_diff < 0.0001) {
            this.dribble();
          }
          else {
            // shoot
            this.shoot();
          }
        } ;

      }

      else {
        // if ball is possessed by teammate
        // move to optimal position
        let target = this.calculate_optimal_position(m.outOfPossession);
        if (target==undefined) {
          target = {x:0,y:0,z:0};
        }
        this.move_to(target,'medium');

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
    if (pace == undefined) {
      pace = 25;
    }
    // max speed of 100 pace player = 10 m/s
    // max speed of 0 pace player = 7 m/s
    let max_speed = 7 + (pace / 100) * 3;
    let acceleration = this.attributes.get_attr("acceleration");
    if (acceleration == undefined) {
      acceleration = 25;
    }
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

    //calculate target dx and dy
    // i.e. vectorize max_speed
    let dx = ((target.x - this.loc.x) / dist(this.loc, target)) * max_speed;
    let dy = ((target.y - this.loc.y) / dist(this.loc, target)) * max_speed;

    dx /= 60;
    dy /= 60;

    if (dx > this.dx) {
      this.dx += max_acceleration / 360;
    } else if (dx < this.dx) {
      this.dx -= max_acceleration / 360;
    }
    if (dy > this.dy) {
      this.dy += max_acceleration / 360;
    } else if (dy < this.dy) {
      this.dy -= max_acceleration / 360;
    }

    


  }

  attempt_pass(dx, dy, dz) {
    this.m.ball_dx = dx;
    this.m.ball_dy = dy;
    this.m.ball_dz = dz;
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
    let error_radius = 0.35 + (pass_accuracy / 100) * 1.65;
    // pick random point in the circle
    let r = Math.random() * error_radius;
    let theta = Math.random() * 2 * Math.PI;
    target_coords.x += r * Math.cos(theta);
    target_coords.y += r * Math.sin(theta);

    // caluclate speed to apply to ball
    // better passing and technique means faster pass
    // max speed = 25 m/s
    // min speed = 15 m/s
    // optimal speed is one that takes 1 second to reach target

    let max_speed = 15 + (pass_accuracy / 100) * 10;
    let speed = max_speed;

    let distance = dist(this.loc, target_coords);
    let technique = this.attributes.get_attr("technique");
    if (technique == undefined) {
      technique = 25;
    }
    let error_plus_minus_percentage = 0.15 - (technique / 100) * 0.1;
    let optimal_speed = distance/2;
    speed = optimal_speed * (1 + error_plus_minus_percentage * rand_in_range(-1,1));
    
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
    // target scores for each other player
    // initially array of 10 0's
    let scores = Array(10).fill(0);
    for (let p of players) {
      let d = dist(this.loc, p.loc);
      // normal distribution by distance
      // if team instruction is shorter passing, reduce the standard deviation
      // if team instruction is longer passing, increase the standard deviation
      // if player instruction is shorter passing, reduce the standard deviation
      // if player instruction is longer passing, increase the standard deviation

      let std_dev = 1;
      if (team.tactics.includes("shorter_passing" as TeamInstruction)) {
        // reduce standard deviation
        std_dev = 0.8;
      }

      if (team.tactics.includes("longer_passing" as TeamInstruction)) {
        // increase standard deviation
        std_dev = 1.2;
      }

      if (this.instructions.includes("shorter_passing" as PlayerInstruction)) {
        std_dev = std_dev - 0.15;
      }

      if (this.instructions.includes("longer_passing" as PlayerInstruction)) {
        std_dev = std_dev + 0.15;
      }
      scores[players.indexOf(p)] += Math.exp(
        (-0.5 * (d * d)) / (std_dev * std_dev)
      );

      // players that the passer is currently facing have a higher chance of being passed to
      let angle = Math.atan2(p.loc.y - this.loc.y, p.loc.x - this.loc.x);
      let facing = Math.atan2(this.dy, this.dx);
      let diff = Math.abs(angle - facing);
      if (diff < Math.PI / 4) {
        scores[players.indexOf(p)] += 1;
      }
      // players under pressure have a lower chance of being passed to
      let pressure = p.calculate_pressure(opp);
      scores[players.indexOf(p)] -= pressure;
      // players in a threatening position have a higher chance of being passed to
      let threat = p.calculate_threat(team);
      scores[players.indexOf(p)] += threat;

      // sort scores
      scores.sort((a, b) => {
        return b - a;
      });

    }



    // randomly choose player
    // use decision making attribute
    // use team tactics
    // use player instructions

    let decisions = this.attributes.get_attr("decisions");
    if (decisions == undefined) {
      decisions = 25;
    }

    // lower decisions means more deviatione
    // maximum randomness = 0.5
    // minimum randomness = 0.1
    let randomness = 0.5 - (decisions / 100) * 0.4;
    let index = Math.floor(Math.random() * randomness * 10);
    let target = players[index];
    return target;
  }

  calculate_pressure(opp: Team) {
    let opponents = opp.playersOnPitch;
    let pressure = 0;
    opponents.forEach((player) => {
      let d = dist(this.loc, player.loc);
      if (d < 10) {
        if (d == 0 ) {
          d += 0.1;
        }
        pressure += 1 / (d * d);
      }
    });
    return pressure;
  }

  passive_movement() {
    // "brownian motion" for players
    // randomly move around in small radius around current location


    let radius = 0.05;
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

  calculate_threat(team: Team) {
    // distance to goal
    let direction = team.attacking_direction;
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

    if (direction == "left") {
      //left side goal
      let d = dist(this.loc, left);
      return 1 / (d * d);
    } else {
      //right side goal
      let d = dist(this.loc, right);
      return 1 / (d * d);
    }
  }

  threat_at_position(team:Team, loc:Coords) {
    // distance to goal
    let direction = team.attacking_direction;
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

    if (direction == "left") {
      //left side goal
      let d = dist(loc, left);
      return 1 / (d * d);
    } else {
      //right side goal
      let d = dist(loc, right);
      return 1 / (d * d);
    }
  }

  initialize() {
    this.target_speed = 0;
    this.target_loc =  (
      { x: 105/2, y: 68/2, z: 0 }
    );
    this.loc = { x: 40, y: 52, z: 0 };

    this.dx = 0;
    this.dy = 0;
    this.dz = 0;

    this.instructions = [];
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
  background: OffscreenCanvas;
  backgroundCtx: ImageBitmapRenderingContext;
  bitmap: ImageBitmap;
  foreground: HTMLCanvasElement | null;
  playersOnPitch: PlayerOnPitch[];
  stat:Stat;

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

    this.half = 1;

    this.max_1st_half_time = 45.0 * 60.0;
    this.max_2nd_half_time = 45.0 * 60.0;

    if (rules.get("extra_time") == true) {
      this.possible_extra_time = true;
      this.is_extra_time = false;
      this.extra_time_half = 1;
      this.max_1st_half_extra_time = 15.0 * 60.0;
      this.max_2nd_half_extra_time = 15.0 * 60.0;
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

    this.stat = new Stat(this);

    this.background = new OffscreenCanvas(900, 900);
    draw_pitch(this.background);
    this.bitmap = this.background.transferToImageBitmap();
    let pitch = document.querySelector("#pitch") as HTMLCanvasElement;
    pitch.height = this.background.height;
    pitch.width = this.background.width;
    this.backgroundCtx = pitch.getContext(
      "bitmaprenderer"
    ) as ImageBitmapRenderingContext;
    this.backgroundCtx.transferFromImageBitmap(this.bitmap);

    this.foreground = document.createElement("canvas");
    this.foreground.id = "foreground";
    this.foreground.width = 900;
    this.foreground.height = this.background.height;
    pitch.insertAdjacentElement("afterend", this.foreground);

    this.update_clock();
  }

  update_clock() {
    
    const clock: HTMLDivElement | null = document.querySelector("#clock");
    if (clock) {
      clock.innerHTML = this.fmt_seconds(this.time);
      setInterval(() => {
        clock.innerHTML = this.fmt_seconds(this.time);
      }, 1000);
    }
  }

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
  update_possession() {
    let closest = this.closest_to_ball();
        
    // if the ball is more than 2m away from any players,
    // possession is null
    if (dist(closest[0].loc, this.ball_pos) > 2 && dist(closest[1].loc, this.ball_pos) > 2) {
      this.player_possession = null;
      this.set_possession(null);
    }
    else {
      closest.sort((a, b) => {
        return dist(a.loc, this.ball_pos) - dist(b.loc, this.ball_pos);
      });
      this.player_possession = closest[0];
      this.set_possession(closest[0].team);

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
    // two players can't occupy the same space

    let radius = 0.8;

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

   // player can't go off the screen
    for (let p of this.playersOnPitch) {
      if (p.loc.x < 0) {
        p.loc.x = 0;
      }
      if (p.loc.x > this.venue.length) {
        console.log('here');
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

  }

  move_ball() {
    this.ball_pos.x += this.ball_dx;
    this.ball_pos.y += this.ball_dy;
    this.ball_pos.z += this.ball_dz;

    // calculate decelration
    // mass = 0.43 kg
    // friction coefficient = 0.03
    // f_friction = 0.03 * 0.43 kg * 9.81 m/s/s = 0.01265 kg m/s/s
    // f_drag = 0.5 * 0.03 * pi*(0.11m)^2 * 1.2 kg/m^3 * velocity^2
    // velocity = dx * 60 + dy * 60 + dz * 60 (m/s)
    // f_total = f_friction + f_drag
    // a = f_total / mass

    let f_friction = 0.01265;

    let f_drag_x = 0.5 * 0.03 * Math.PI * 0.11 * 0.11 * 1.2 * this.ball_dx*this.ball_dx;
    let f_drag_y = 0.5 * 0.03 * Math.PI * 0.11 * 0.11 * 1.2 * this.ball_dy*this.ball_dy;
    let f_drag_z = 0.5 * 0.03 * Math.PI * 0.11 * 0.11 * 1.2 * this.ball_dz*this.ball_dz;
    let f_total_x = f_friction + f_drag_x;
    let f_total_y = f_friction + f_drag_y;
    let f_total_z = f_drag_z;
    let a_x = f_total_x / 0.43;
    let a_y = f_total_y / 0.43;
    let a_z = f_total_z / 0.43;

    // calculate new velocity
    // v = u + at
    // u = v - at
    // v = 0
    // t = 1/60

    //apply a to dx, dy, dz
    if (this.ball_dx > 0) {
      this.ball_dx -= a_x / 60;
    } else if (this.ball_dx < 0) {
      this.ball_dx += a_x / 60;
    }
    if (this.ball_dy > 0) {
      this.ball_dy -= a_y / 60;
    } else if (this.ball_dy < 0) {
      this.ball_dy += a_y / 60;
    }
    if (this.ball_dz > 0) {
      this.ball_dz -= a_z / 60;
    } else if (this.ball_dz < 0) {
      this.ball_dz += a_z / 60;
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

  draw_agents() {
    let ctx = this.foreground?.getContext("2d");
    if (this.foreground) {
      ctx?.clearRect(0, 0, this.foreground.width, this.foreground.height);
      this.draw_ball();
      this.draw_players();
    }
  }

  draw_ball() {
    requestAnimationFrame(() => {
      let ctx = this.foreground?.getContext("2d");
      if (this.foreground) {
        if (ctx) {
          let length = this.background.width;
          let width = this.background.height;
          if (ctx) {
            let x = (this.ball_pos.x / this.venue.length) * length;
            let y = (this.ball_pos.y / this.venue.width) * width;

            // if z is larger than the radius should be larger
            let radius = 3.4;
            if (this.ball_pos.z > 0) {
              radius += this.ball_pos.z*2;
            }

            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(x, y, radius-1, 0, 2 * Math.PI);
            ctx.fill();

            let target_x = (this.ball_target.x/this.venue.length)*length;
            let target_y = (this.ball_target.y/this.venue.width)*width;

            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.arc(target_x, target_y, radius, 0, 2 * Math.PI);
            ctx.stroke();
          }
        }
      }
    });
  }

  draw_players() {
    requestAnimationFrame(() => {
      let ctx = this.foreground?.getContext("2d");
      if (this.foreground) {
        let length = this.background.width;
        let width = this.background.height;
        this.home.playersOnPitch.forEach((player) => {
          let x = (player.loc.x / this.venue.length) * length;
          let y = (player.loc.y / this.venue.width) * width;
          if (ctx) {
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(x, y, 4.4, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(x, y, 3.4, 0, 2 * Math.PI);
            ctx.fill();
          }
        });
        this.away.playersOnPitch.forEach((player) => {
          let x = (player.loc.x / this.venue.length) * length;
          let y = (player.loc.y / this.venue.width) * width;
          if (ctx) {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
          }
        });
      }
    });
  }

  tick() {
    
    this.time += 1 / 60;
    this.ticks += 1;
    if (this.ticks == 10) {
      this.update_possession();
      console.log(this.possession?.name);
      // human reaction time is roughly
      // a sixth of a second so only
      // update every 10 ticks
      this.ticks = 0;
      this.players_decide();
    }
    this.draw_agents();
    this.collision_detection();
    this.move_players();
    this.move_ball();
  
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
    } else {
      this.possession = null;
      this.outOfPossession = null;
    }
  }

  do_kickoff(half: boolean) {
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

  async play() {
    this.initialize(
      new Map<string, boolean>([
        ["extra_time", false],
        ["penalties", false],
      ])
    );
    while (this.half == 1 && this.time < this.max_1st_half_time) {
      if (!this.started) {
        this.do_kickoff(false);
        this.started = true;
      }
      let now = DateTime.now();
      this.tick();
      if (DateTime.now().diff(now).milliseconds < 1000 / 60) {
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 / 60 - DateTime.now().diff(now).milliseconds)
        );
      }
    }
    this.half = 2;
    this.started = false;
    while (this.half == 2 && this.time < this.max_2nd_half_time) {
      if (!this.started) {
        this.do_kickoff(true);
        this.started = true;
      }
      let now = DateTime.now();
      this.tick();
      if (DateTime.now().diff(now).milliseconds < 1000 / 60) {
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 / 60 - DateTime.now().diff(now).milliseconds)
        );
      }
    }
    if (this.possible_extra_time) {
      if (this.home_goals == this.away_goals) {
        this.extra_time_half = 1;
        this.is_extra_time = true;
        this.started = false;
        while (
          this.extra_time_half == 1 &&
          this.time < this.max_1st_half_extra_time
        ) {
          if (!this.started) {
            this.do_kickoff(false);
            this.started = true;
          }
          let now = DateTime.now();
          this.tick();
          if (DateTime.now().diff(now).milliseconds < 1000 / 60) {
            await new Promise((resolve) =>
              setTimeout(
                resolve,
                1000 / 60 - DateTime.now().diff(now).milliseconds
              )
            );
          }
        }
        this.extra_time_half = 2;
        this.started = false;
        while (
          this.extra_time_half == 2 &&
          this.time < this.max_2nd_half_extra_time
        ) {
          if (!this.started) {
            this.do_kickoff(true);
            this.started = true;
          }
          let now = DateTime.now();
          this.tick();
          if (DateTime.now().diff(now).milliseconds < 1000 / 60) {
            await new Promise((resolve) =>
              setTimeout(
                resolve,
                1000 / 60 - DateTime.now().diff(now).milliseconds
              )
            );
          }
        }
      }
    }
  }
}

export class Stat {
  player_stats:PlayerMatchStats;

  constructor (match:Match) {
    let i = 0;
    this.player_stats = new PlayerMatchStats();
    for (let _ of match.playersOnPitch) {
      this.player_stats.push(i);
    }
  }
  record(stat:string, type:Player|Team) {
    if (type instanceof Player) {
      // record player stat
      this.player_stats.record(stat);

    }
  }
}

class PlayerMatchStats {
  _id: number;
  _stats: Map<number, PlayerStats>;

  constructor() {
    this._id = 0;
    this._stats = new Map();
  }
  push(id:number) {
    this._id = id;
    this._stats.set(id,{
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

  record(stat:string) {
    let s = this._stats.get(this._id);
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

    }

  }
}

