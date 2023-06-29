"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
class Club {
    constructor(name) {
        this._name = name;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set players(players) {
        this._players = players;
    }
    get players() {
        return this._players;
    }
    set location(loc) {
        this._location = loc;
    }
    get location() {
        return this._location;
    }
}
exports.Club = Club;
