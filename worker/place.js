"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PitchDimensions = exports.Venue = exports.City = exports.Country = void 0;
class Place {
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
class Country extends Place {
    set flag(flag) {
        this._flag = flag;
    }
    get flag() {
        return this._flag;
    }
    set population(population) {
        this._population = population;
    }
    get population() {
        return this._population;
    }
    set capital(capital) {
        this._capital = capital;
    }
    get capital() {
        return this._capital;
    }
    set currency(currency) {
        this._currency = currency;
    }
    get currency() {
        return this._currency;
    }
    set languages(languages) {
        this._languages = languages;
    }
    get languages() {
        return this._languages;
    }
}
exports.Country = Country;
class City extends Place {
    set population(population) {
        this._population = population;
    }
    get population() {
        return this._population;
    }
    set country(country) {
        this._country = country;
    }
    get country() {
        return this._country;
    }
}
exports.City = City;
class Venue extends Place {
    set capacity(capacity) {
        this._capacity = capacity;
    }
    get capacity() {
        return this._capacity;
    }
    set city(city) {
        this._city = city;
    }
    get city() {
        return this._city;
    }
    set pitch_dimensions(pitch_dimensions) {
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
exports.Venue = Venue;
class PitchDimensions {
    set length(length) {
        this._length = length;
    }
    get length() {
        return this._length;
    }
    set width(width) {
        this._width = width;
    }
    get width() {
        return this._width;
    }
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
            x: this.width / 2,
            y: this.length / 2,
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
exports.PitchDimensions = PitchDimensions;
PitchDimensions.center_circle_radius = 9.15;
PitchDimensions.penalty_area_length = 16.5;
PitchDimensions.penalty_area_width = 40.32;
PitchDimensions.penalty_spot_distance = 11;
PitchDimensions.six_yard_box_length = 5.5;
PitchDimensions.six_yard_box_width = 18.32;
PitchDimensions.goal_width = 7.32;
PitchDimensions.goal_height = 2.44;
PitchDimensions.goal_depth = 2.44;
PitchDimensions.penalty_arc_radius = 9.15;
