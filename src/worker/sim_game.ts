// simulated game using just rng with no animations

import { Team, PlayerOnPitch } from "./game";
import { Venue } from "./place";
import { Stat } from "./game";

export class SimMatch {
  home_goals: number = 0;
  away_goals: number = 0;
  home: Team;
  away: Team;
  half: 1 | 2 = 1;

  possession: Team;

  time: number = 0;
  max_time_1st_half: number = 45 * 60;
  max_time_2nd_half: number = 90 * 60;

  venue: Venue;

  playersOnPitch: PlayerOnPitch[] = [];

  stat: Stat = new Stat(this);

  p: PlayerOnPitch | null = null;

  initialize() {
    this.playersOnPitch = this.home.playersOnPitch.concat(
      this.away.playersOnPitch
    );
    
  }

  async play() {
    this.initialize();
    this.possession = Math.random() > 0.5 ? this.home : this.away;
    while (this.time < this.max_time_1st_half) {
      await this.sim_possession();
    }
    this.half = 2;
    while (this.time < this.max_time_2nd_half) {
      await this.sim_possession();
    }
  }

  async sim_possession() {
    await this.decide();
  }

  async choose_player() {
    let players = this.possession.playersOnPitch.filter(p => p != this.p);
    let player = players[Math.floor(Math.random() * players.length)];
    return player;
  }

  async decide() {
    // most often a player will pass
    // sometimes a player will shoot
    // sometimes a player will dribble
    // a player with better finishing will shoot more often
    // and score at a higher rate
    // a player with better passing will successfully pass more often
    // and will receive the ball more
    // a player with better dribbling will dribble more often
    // and will successfully dribble more often
    // a player with better vision will pass more often
    // a player with better movement will receive the ball more often
    // and will be in position to score more often
    // a player with good positioning will be in position to make more successful tackles
    // and interceptions
    // a player with good tackling will make more successful tackles
    // a player with good acceleration and ball control will be able to dribble past more players
    // and will find themselves free to shoot more often
    // a player with good agility and balance will be able to dribble past more players
    // a player with good strength will be able to hold off more players
    // a player with good jumping will be able to win more headers
    // a player with good heading will be able to win more headers
    // a player with good stamina will be able to run more
    // a player with good work rate will be able to run more
    // a player with good natural fitness will be able to run more

    let p = this.p;
    if (p == null) {
      p = await this.choose_player();
    }

    let rng = Math.random();
    // baseline
    // 75% chance of pass
    // 20% chance of dribble
    // 5% chance of shoot
    let threat = 0;
    let finishing = p.attributes.get_attr("finishing");
    let passing = p.attributes.get_attr("passing");
    let dribbling = p.attributes.get_attr("dribbling");
    let vision = p.attributes.get_attr("vision");
    let movement = p.attributes.get_attr("movement");
    let pace = p.attributes.get_attr("pace");
    let acceleration = p.attributes.get_attr("acceleration");

    threat += movement / 100;
    threat += pace / 100;
    threat += acceleration / 100;
    
    let shot_rng = Math.random()*200;
    if (shot_rng < threat) {
      // shoot
      await this.log(`${p.name} found himself free`);
      await this.log(`${p.name} shoots!`);
      this.stat.record("shots", p);
      
      let shot = Math.random()*100;
      if (shot < finishing) {
        // on target
        let goalkeeper = this.possession == this.home ? this.away.playersOnPitch[0] : this.home.playersOnPitch[0];
        let save = Math.random()*100;
        let reactions = goalkeeper.attributes.get_attr("reactions");
        let agility = goalkeeper.attributes.get_attr("agility");
        let one_on_ones = goalkeeper.attributes.get_attr("one_on_ones");
        let handling = goalkeeper.attributes.get_attr("handling");
        let positioning = goalkeeper.attributes.get_attr("positioning");
        let jumping = goalkeeper.attributes.get_attr("jumping");
        let ovr = (reactions + agility + one_on_ones + handling + positioning + jumping) / 6;
        if (save < ovr) {
          // save
          let diff = ovr - save;
          if (diff < 5) {
            await this.log(`${goalkeeper.name} makes a brilliant save!`);
          }
          else if (diff < 10) {
            await this.log(`${goalkeeper.name} makes a good save!`);
          }
          else {
            await this.log(`${goalkeeper.name} makes a save!`);
          }
          this.p = null;
          return;
          
        }
        else {
          // goal
          this.log("GOAL!");
          if (this.possession == this.home) {
            this.home_goals += 1;
          }
          else {
            this.away_goals += 1;
          }
          this.p = null;
          this.possession = this.possession == this.home ? this.away : this.home;
          return;
        }
      } else {
        // off target
        this.log("It goes wide!");
        this.p = null;
        this.possession = this.possession == this.home ? this.away : this.home;
        return;
      }
    }

    // modulate chance of pass based on passing and vision
    let pass_chance = 0.75;
    pass_chance = pass_chance + (passing - 50) / 100;
    
    if (rng < pass_chance) {
      // pass
      await this.log(`${p.name} passes`);
      let target = await this.choose_player();
      this.stat.record("passes_attempted", p);
      let pass = Math.random()*100;
      if (pass < passing) {
        // successful pass
        await this.log(`Successful pass to ${target.name}`);
        this.stat.record("passes_successful", p);
        this.p = target;
        return;
      }
      else {
        // unsuccessful pass
        await this.log(`Unsuccessful pass`);
        this.p = null;
        this.possession = this.possession == this.home ? this.away : this.home;
        return;
      }
    }

    // modulate chance of dribble based on dribbling
    let dribble_chance = 0.2;
    dribble_chance = dribble_chance + (dribbling - 50) / 100;
    if (rng < dribble_chance) {
      // dribble
      await this.log(`${p.name} dribbles`);
      let dribble = Math.random()*100;
      if (dribble < dribbling) {
        // successful dribble
        await this.log(`Successful dribble`);
        this.p = p;
      }
      else {
        // unsuccessful dribble
        await this.log(`Unsuccessful dribble`);
        this.p = null;
        this.possession = this.possession == this.home ? this.away : this.home;
      }

    }

    this.time += 5;

  }

  async tick() {
    // in order to show results live
    // await 0.25 seconds by default
    let time = 250;
    return new Promise(resolve => setTimeout(resolve, time));


  }

  async log(str:string) {
    let log = document.querySelector("#log-box");
    let time = this.fmt_time();
    await new Promise(resolve => setTimeout(resolve, 0));
    log!.innerHTML += `<p>${time} ${str}</p>`;
    let score = document.querySelector("#score");
    score!.innerHTML = `${this.home_goals} - ${this.away_goals}`;
    // scroll to bottom
    log!.scrollTop = log!.scrollHeight;

  }

  fmt_time() {
    let minutes = Math.floor(this.time / 60);
    let seconds = this.time % 60;
    // pad seconds with 0 if less than 10
    let seconds_str = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds_str}`;

  }


}
