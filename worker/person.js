"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instruction = exports.Role = exports.Position = exports.Player = exports.Attributes = void 0;
class Person {
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set dob(dob) {
        this._dob = dob;
    }
    get dob() {
        return this._dob;
    }
    calculate_age(now) {
        // calculate age (years and days)
        console.log(now);
        const diff = now.diff(this._dob, ["years", "days"]);
        return diff.years + " years, " + diff.days + " days";
    }
    set nationalities(nationalities) {
        this._nationalities = nationalities;
    }
    get nationalities() {
        return this._nationalities;
    }
    set place_of_birth(place_of_birth) {
        this._place_of_birth = place_of_birth;
    }
    get place_of_birth() {
        return this._place_of_birth;
    }
    set height(height) {
        this._height = height;
    }
    get height() {
        return this._height;
    }
    set weight(weight) {
        this._weight = weight;
    }
    get weight() {
        return this._weight;
    }
}
class Attributes {
    constructor() {
        this._attributes = new Map();
    }
    set attributes(attributes) {
        this._attributes = attributes;
    }
    get attributes() {
        return this._attributes;
    }
    get_attr(name) {
        let ret = this._attributes.get(name);
        if (ret != undefined) {
            return ret;
        }
        return 25;
    }
    set_attr(name, value) {
        this._attributes.set(name, value);
    }
}
exports.Attributes = Attributes;
class Player extends Person {
    set attributes(attr) {
        this._attributes = attr;
    }
    get attributes() {
        return this._attributes;
    }
    get_attribute(name) {
        let attr = this._attributes.get_attr(name);
        if (typeof attr === "number") {
            return attr;
        }
        return 0;
    }
    set positions(positions) {
        this._positions = positions;
    }
}
exports.Player = Player;
class Position {
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set abbreviation(abbreviation) {
        this._abbreviation = abbreviation;
    }
    get abbreviation() {
        return this._abbreviation;
    }
    set roles(roles) {
        this._roles = roles;
    }
}
exports.Position = Position;
class Role {
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set abbreviation(abbreviation) {
        this._abbreviation = abbreviation;
    }
    get abbreviation() {
        return this._abbreviation;
    }
    set positions(positions) {
        this._positions = positions;
    }
    get positions() {
        return this._positions;
    }
    set primary_attributes(primary_attributes) {
        this._primary_attributes = primary_attributes;
    }
    get primary_attributes() {
        return this._primary_attributes;
    }
    set secondary_attributes(secondary_attributes) {
        this._secondary_attributes = secondary_attributes;
    }
    get secondary_attributes() {
        return this._secondary_attributes;
    }
    set description(description) {
        this._description = description;
    }
    get description() {
        return this._description;
    }
    set is_goalkeeper(is_goalkeeper) {
        this._is_goalkeeper = is_goalkeeper;
    }
    get is_goalkeeper() {
        return this._is_goalkeeper;
    }
    set tactical_instructions(tactical_instructions) {
        this._tactical_instructions = tactical_instructions;
    }
}
exports.Role = Role;
class Instruction {
    set description(description) {
        this._description = description;
    }
    get description() {
        return this._description;
    }
    set instruction(instruction) {
        this._instruction = instruction;
    }
    get instruction() {
        return this._instruction;
    }
}
exports.Instruction = Instruction;
