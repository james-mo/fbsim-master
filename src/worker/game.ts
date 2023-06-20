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
import { dist } from "../common/helpers";

export class PlayerOnPitch extends Player {
  _role: Role;
  _position: Position;
  _instructions: PlayerInstruction[];
  _loc: Coords;
  _dx: number;
  _dy: number;
  _dz: number;
  venue: Venue;

  target_speed: number;
  target_loc: Polygon;

  defensive_area: PitchArea;

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

  calculate_optimal_position(teamInPossession: Team) {
    return 0;
  }

  kickoff_position() {
    return 0;
  }

  decide_action() {
    return 0;
  }

  move() {
    this.loc.x += this.dx;
    this.loc.y += this.dy;
    this.loc.z += this.dz;

    console.log(this.dx, this.dy, this.dz);
    if (this.dx == 0 && this.dy == 0 && this.dz == 0) {
      console.log("here");
      this.passive_movement();
    }
  }

  pass(team: Team, opp: Team) {
    let target = this.choose_pass_target(team, opp);
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
    let error = 100 - (pass_accuracy * d) / 100;
    target_coords.x += (Math.random() * error) / 4;
    target_coords.y += (Math.random() * error) / 4;
    if (target_coords.z > 0) {
      target_coords.z += (Math.random() * error) / 4;
    }

    // caluclate speed to apply to ball
    // better passing and technique means faster pass
    // max speed = 25 m/s
    let technique = this.attributes.get_attr("technique");
    if (technique == undefined) {
      technique = 25;
    }
    let speed = (25 * (pass_accuracy / 100) * technique) / 100;
    // calculate dx, dy, dz
    let dx = ((target_coords.x - this.loc.x) / d) * speed;
    let dy = ((target_coords.y - this.loc.y) / d) * speed;
    if (lob || cross) {
      let dz = ((target_coords.z - this.loc.z) / d) * speed;
    }
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
        console.log(diff);
        scores[players.indexOf(p)] += 1;
      }
      // players under pressure have a lower chance of being passed to
      let pressure = p.calculate_pressure(opp);
      scores[players.indexOf(p)] -= pressure;
      console.log(scores);
      // players in a threatening position have a higher chance of being passed to
      let threat = p.calculate_threat(team);
      scores[players.indexOf(p)] += threat;

      // sort scores
      scores.sort((a, b) => {
        return b - a;
      });
    }

    console.log(scores);

    // randomly choose player
    // use decision making attribute
    // use team tactics
    // use player instructions

    let decisions = this.attributes.get_attr("decisions");
    if (decisions == undefined) {
      decisions = 25;
    }
    console.log(decisions);
    // lower decisions means more deviatione
    // maximum randomness = 0.5
    // minimum randomness = 0.1
    let randomness = 0.5 - (decisions / 100) * 0.4;
    let index = Math.floor(Math.random() * randomness * 10);
    console.log(index);
    let target = players[index];
    console.log(target);
    return target;
  }

  calculate_pressure(opp: Team) {
    let opponents = opp.playersOnPitch;
    let pressure = 0;
    opponents.forEach((player) => {
      let d = dist(this.loc, player.loc);
      if (d < 10) {
        pressure += 1 / (d * d);
      }
    });
    return pressure;
  }

  passive_movement() {
    // "brownian motion" for players
    // randomly move around in small radius around current location

    console.log("here");

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

  initialize() {
    this.target_speed = 0;
    this.target_loc = new Polygon([
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 0 },
    ]);
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
  possession: Team;
  outOfPossession: Team;
  player_possession: PlayerOnPitch | null;
  ticks: number;
  team_kicked_off_first: Team;
  ball_pos: Coords;
  ball_dx: number;
  ball_dy: number;
  ball_dz: number;
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
      y: this._venue.width / 2,
      z: 0,
    };

    this.ball_dx = 10 / 60;
    this.ball_dy = 0 / 60;
    this.ball_dz = 0;

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
    });

    this.away.playersOnPitch.forEach((player) => {
      player.venue = this.venue;
    });

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
    this.home.playersOnPitch.forEach((player) => {
      player.decide_action();
    });
    this.away.playersOnPitch.forEach((player) => {
      player.decide_action();
    });
  }

  move_ball() {
    this.ball_pos.x += this.ball_dx;
    this.ball_pos.y += this.ball_dy;
    this.ball_pos.z += this.ball_dz;

    this.ball_dx *= 0.99;
    this.ball_dy *= 0.99;
    this.ball_dz *= 0.99;

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
    let ctx = this.foreground?.getContext("2d");
    if (this.foreground) {
      if (ctx) {
        let length = this.background.width;
        let width = this.background.height;
        if (ctx) {
          let x = (this.ball_pos.x / this.venue.length) * length;
          let y = (this.ball_pos.y / this.venue.width) * width;

          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.arc(x, y, 3.4, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = "white";
          ctx.beginPath();
          ctx.arc(x, y, 2.4, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    }
  }

  draw_players() {
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
  }

  tick() {
    this.time += 1 / 60;
    this.ticks += 1;
    if (this.ticks == 10) {
      this.ticks = 0;
      this.players_decide();
    }
    this.draw_agents();
    this.move_players();
    this.move_ball();

    this.update_clock();
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

  setPossession(team: Team) {
    this.possession = team;
    this.outOfPossession = team == this.home ? this.away : this.home;
  }

  do_kickoff(half: boolean) {
    const rand = Math.random();
    if (!half) {
      if (rand < 0.5) {
        this.setPossession(this.home);
        this.team_kicked_off_first = this.home;
      } else {
        this.setPossession(this.away);
        this.team_kicked_off_first = this.away;
      }
    } else {
      if (this.team_kicked_off_first == this.home) {
        this.setPossession(this.away);
      } else {
        this.setPossession(this.home);
      }
    }
    const p1 = this.getKickoffPlayer(this.possession);
    this.player_possession = p1;
    this.player_possession.pass(this.possession, this.outOfPossession);
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
