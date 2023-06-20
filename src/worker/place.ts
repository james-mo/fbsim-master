export { Country, City, Venue, PitchDimensions };
import { Coords, Rectangle } from "../common/types";

class Place {
  _name: string;
  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

class Country extends Place {
  _flag: string;
  _population: number;
  _capital: City;
  _currency: string;
  _languages: string[];

  set flag(flag: string) {
    this._flag = flag;
  }

  get flag() {
    return this._flag;
  }

  set population(population: number) {
    this._population = population;
  }

  get population() {
    return this._population;
  }

  set capital(capital: City) {
    this._capital = capital;
  }

  get capital() {
    return this._capital;
  }

  set currency(currency: string) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  set languages(languages: string[]) {
    this._languages = languages;
  }

  get languages() {
    return this._languages;
  }
}

class City extends Place {
  _population: number;
  _country: Country;

  set population(population: number) {
    this._population = population;
  }

  get population() {
    return this._population;
  }

  set country(country: Country) {
    this._country = country;
  }

  get country() {
    return this._country;
  }
}

class Venue extends Place {
  _capacity: number;
  _city: City;
  length: number;
  width: number;
  _dimensions: PitchDimensions;

  set capacity(capacity: number) {
    this._capacity = capacity;
  }

  get capacity() {
    return this._capacity;
  }

  set city(city: City) {
    this._city = city;
  }

  get city() {
    return this._city;
  }

  set pitch_dimensions(pitch_dimensions: [number, number]) {
    this.length = pitch_dimensions[0];
    this.width = pitch_dimensions[1];
    this.init_pitch_dimensions();
  }

  init_pitch_dimensions() {
    this._dimensions = new PitchDimensions();
    this._dimensions.length = this.length;
    this._dimensions.width = this.width;
    this._dimensions.init();
  }

  get dimensions() {
    return this._dimensions;
  }
}

class PitchDimensions {
  _length: number;
  _width: number;

  set length(length: number) {
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set width(width: number) {
    this._width = width;
  }

  get width() {
    return this._width;
  }

  static center_circle_radius = 9.15;
  static penalty_area_length = 16.5;
  static penalty_area_width = 40.32;
  static penalty_spot_distance = 11;
  static six_yard_box_length = 5.5;
  static six_yard_box_width = 18.32;
  static goal_width = 7.32;
  static goal_height = 2.44;
  static goal_depth = 2.44;
  static penalty_arc_radius = 9.15;

  penalty_spot_1_coords: Coords;
  penalty_spot_2_coords: Coords;
  kickoff_spot: Coords;
  goal_1: Rectangle;
  goal_2: Rectangle;

  init() {
    this.penalty_spot_1_coords = {
      x: this.width / 2,
      y: PitchDimensions.penalty_spot_distance,
      z: 0,
    };
    this.penalty_spot_2_coords = {
      x: this.width / 2,
      y: this.length - PitchDimensions.penalty_spot_distance,
      z: 0,
    };
    this.kickoff_spot = {
      x: this.length / 2,
      y: this.width / 2,
      z: 0,
    };
    this.goal_1 = {
      point_1: {
        x: this.width / 2 - PitchDimensions.goal_width / 2,
        y: 0,
        z: 0,
      },
      point_2: {
        x: this.width / 2 + PitchDimensions.goal_width / 2,
        y: 0,
        z: PitchDimensions.goal_height,
      },
    };
    this.goal_2 = {
      point_1: {
        x: this.width / 2 - PitchDimensions.goal_width / 2,
        y: this.length,
        z: 0,
      },
      point_2: {
        x: this.width / 2 + PitchDimensions.goal_width / 2,
        y: this.length,
        z: PitchDimensions.goal_height,
      },
    };
  }
}
