import { Country, City } from "./place";
import { DateTime } from "luxon";

class Person {
  _name: string;
  _dob: DateTime;
  _nationalities: Country[];
  _place_of_birth: City;
  _height: number;
  _weight: number;

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set dob(dob: DateTime) {
    this._dob = dob;
  }

  get dob() {
    return this._dob;
  }

  calculate_age(now: DateTime) {
    // calculate age (years and days)
    console.log(now);
    const diff = now.diff(this._dob, ["years", "days"]);
    return diff.years + " years, " + diff.days + " days";
  }

  set nationalities(nationalities: Country[]) {
    this._nationalities = nationalities;
  }

  get nationalities() {
    return this._nationalities;
  }

  set place_of_birth(place_of_birth: City) {
    this._place_of_birth = place_of_birth;
  }

  get place_of_birth() {
    return this._place_of_birth;
  }

  set height(height: number) {
    this._height = height;
  }

  get height() {
    return this._height;
  }

  set weight(weight: number) {
    this._weight = weight;
  }

  get weight() {
    return this._weight;
  }
}

export type OutfieldAttribute =
  | "pace"
  | "acceleration"
  | "agility"
  | "aggression"
  | "balance"
  | "dribbling"
  | "technique"
  | "finishing"
  | "passing"
  | "vision"
  | "tackling"
  | "heading"
  | "strength"
  | "stamina"
  | "positioning"
  | "movement"
  | "decisions"
  | "flair"
  | "natural_fitness"
  | "work_rate"
  | "determination"
  | "leadership"
  | "teamwork"
  | "jumping"
  | "reactions";

export type GoalkeeperAttributes =
  | "handling"
  | "reactions"
  | "one_on_ones"
  | "rushing_out"
  | "communication"
  | "eccentricity"
  | "throwing"
  | "kicking"
  | "vision"
  | "positioning"
  | "pace"
  | "acceleration"
  | "strength"
  | "jumping"
  | "stamina"
  | "natural_fitness"
  | "determination"
  | "work_rate"
  | "leadership"
  | "teamwork";

export type Attribute = {
  name: string;
  value: number;
};

export class Attributes {
  _attributes: Map<string, number>;

  constructor() {
    this._attributes = new Map<string, number>();
  }

  set attributes(attributes: Map<string, number>) {
    this._attributes = attributes;
  }

  get attributes() {
    return this._attributes;
  }

  get_attr(name: string) : number {
    let ret = this._attributes.get(name);
    if (ret!=undefined) {
      return ret;
    }
    return 25;
  }

  set_attr(name: string, value: number) {
    this._attributes.set(name, value);
  }
}

export class Player extends Person {
  _attributes: Attributes;
  _positions: Position[];

  set attributes(attr: Attributes) {
    this._attributes = attr;
  }

  get attributes() {
    return this._attributes;
  }

  get_attribute(name: string): number {
    let attr = this._attributes.get_attr(name);

    if (typeof attr === "number") {
      return attr;
    }
    return 0;
  }

  set positions(positions: Position[]) {
    this._positions = positions;
  }
}

export class Position {
  _name: string;
  _abbreviation: string;
  _roles: Role[];

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set abbreviation(abbreviation: string) {
    this._abbreviation = abbreviation;
  }

  get abbreviation() {
    return this._abbreviation;
  }

  set roles(roles: Role[]) {
    this._roles = roles;
  }
}

export class Role {
  _name: string;
  _abbreviation: string;
  _positions: Position[];
  _primary_attributes: string[];
  _secondary_attributes: string[];
  _description: string;
  _is_goalkeeper: boolean;
  _tactical_instructions: Instruction[];

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set abbreviation(abbreviation: string) {
    this._abbreviation = abbreviation;
  }

  get abbreviation() {
    return this._abbreviation;
  }

  set positions(positions: Position[]) {
    this._positions = positions;
  }

  get positions() {
    return this._positions;
  }

  set primary_attributes(primary_attributes: string[]) {
    this._primary_attributes = primary_attributes;
  }

  get primary_attributes() {
    return this._primary_attributes;
  }

  set secondary_attributes(secondary_attributes: string[]) {
    this._secondary_attributes = secondary_attributes;
  }

  get secondary_attributes() {
    return this._secondary_attributes;
  }

  set description(description: string) {
    this._description = description;
  }

  get description() {
    return this._description;
  }

  set is_goalkeeper(is_goalkeeper: boolean) {
    this._is_goalkeeper = is_goalkeeper;
  }

  get is_goalkeeper() {
    return this._is_goalkeeper;
  }

  set tactical_instructions(tactical_instructions: Instruction[]) {
    this._tactical_instructions = tactical_instructions;
  }
}

export class Instruction {
  _description: string;
  _instruction: PlayerInstruction | TeamInstruction | GoalkeeperInstruction;
  set description(description: string) {
    this._description = description;
  }

  get description() {
    return this._description;
  }

  set instruction(
    instruction: PlayerInstruction | TeamInstruction | GoalkeeperInstruction
  ) {
    this._instruction = instruction;
  }

  get instruction() {
    return this._instruction;
  }
}

export type TeamInstruction =
  | "play_out_from_back"
  | "play_through_the_middle"
  | "play_down_the_wings"
  | "play_long_balls"
  | "play_counter_attacks"
  | "defend_deep"
  | "defend_medium"
  | "defend_high"
  | "offside_trap"
  | "cross_often"
  | "work_ball_into_box"
  | "shoot_from_distance"
  | "wait_for_good_shot"
  | "pass_very_short"
  | "pass_short"
  | "pass_medium"
  | "pass_long"
  | "play_through_balls"
  | "play_lobs"
  | "play_one_twos";

export type PlayerInstruction =
  | "tackle_harder"
  | "mark_tightly"
  | "stay_on_feet"
  | "shorter_passes"
  | "get_in_behind"
  | "dribble_less"
  | "dribble_more"
  | "cross_less"
  | "cross_more"
  | "shoot_less"
  | "shoot_more"
  | "pass_to_space"
  | "pass_to_feet"
  | "try_risky_passes"
  | "play_safe_passes"
  | "hold_up_ball"
  | "move_into_channels"
  | "get_further_forward"
  | "run_wide_with_ball"
  | "cross_from_byline";

export type GoalkeeperInstruction =
  | "dribble_more"
  | "take_more_risks"
  | "rush_out"
  | "use_creative_freedom";
