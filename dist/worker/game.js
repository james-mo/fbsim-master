"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = exports.Team = exports.PlayerOnPitch = void 0;
const club_1 = require("./club");
const person_1 = require("./person");
class PlayerOnPitch extends person_1.Player {
    set role(role) {
        this._role = role;
    }
    set position(position) {
        this._position = position;
    }
    set instructions(instructions) {
        this._instructions = instructions;
    }
    set loc(loc) {
        this._loc = loc;
    }
    set dx(dx) {
        this._dx = dx;
    }
    set dy(dy) {
        this._dy = dy;
    }
    set dz(dz) {
        this._dz = dz;
    }
    calculate_optimal_position(teamInPossession) {
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
    }
}
exports.PlayerOnPitch = PlayerOnPitch;
class Team extends club_1.Club {
    constructor(name) {
        super(name);
    }
    set playersOnPitch(players) {
        this.playersOnPitch = players;
    }
    set substitutes(substitutes) {
        this.substitutes = substitutes;
    }
}
exports.Team = Team;
class Match {
    set home(home) {
        this._home = home;
    }
    get home() {
        return this._home;
    }
    set away(away) {
        this._away = away;
    }
    get away() {
        return this._away;
    }
    set date_time(date) {
        this._date_time = date;
    }
    get date_time() {
        return this._date_time;
    }
    set venue(venue) {
        this._venue = venue;
    }
    get venue() {
        return this._venue;
    }
    initialize() {
        this.time = 0.0;
        this.home_goals = 0;
        this.away_goals = 0;
        this.max_time = 90.0;
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
    }
    players_decide() {
        this.home.playersOnPitch.forEach((player) => {
            player.decide_action();
        });
        this.away.playersOnPitch.forEach((player) => {
            player.decide_action();
        });
    }
    tick() {
        this.time += 1 / 60;
        this.ticks += 1;
        if (this.ticks == 10) {
            this.ticks = 0;
            this.players_decide();
        }
    }
    getKickoffPlayer(team) {
        const players = team.playersOnPitch;
        // if team has striker
        players.filter((player) => {
            return player.position.abbreviation == 'ST';
        });
        if (players.length > 0) {
            if (players.length > 1) {
                // choose the one with better passing
                players.sort((a, b) => {
                    return a.get_attribute('passing') - b.get_attribute('passing');
                });
            }
            return players[0];
        }
        else {
            // choose most attacking player
            players.filter((player) => {
                return player.position.abbreviation == 'LW' || player.position.abbreviation == 'RW';
            });
            if (players.length > 0) {
                if (players.length > 1) {
                    // choose the one with better passing
                    players.sort((a, b) => {
                        return a.get_attribute('passing') - b.get_attribute('passing');
                    });
                }
                return players[0];
            }
            else {
                players.filter((player) => {
                    return (player.position.abbreviation == 'CAM' ||
                        player.position.abbreviation == 'LAM' ||
                        player.position.abbreviation == 'RAM');
                });
                if (players.length > 0) {
                    if (players.length > 1) {
                        // choose the one with better passing
                        players.sort((a, b) => {
                            return a.get_attribute('passing') - b.get_attribute('passing');
                        });
                    }
                    return players[0];
                }
                else {
                    players.filter((player) => {
                        return (player.position.abbreviation == 'CM' || player.position.abbreviation == 'LM' || player.position.abbreviation == 'RM');
                    });
                    if (players.length > 0) {
                        if (players.length > 1) {
                            // choose the one with better passing
                            players.sort((a, b) => {
                                return a.get_attribute('passing') - b.get_attribute('passing');
                            });
                        }
                        return players[0];
                    }
                    else {
                        players.filter((player) => {
                            return (player.position.abbreviation == 'CDM' ||
                                player.position.abbreviation == 'LCM' ||
                                player.position.abbreviation == 'CM' ||
                                player.position.abbreviation == 'RCM');
                        });
                        if (players.length > 0) {
                            if (players.length > 1) {
                                // choose the one with better passing
                                players.sort((a, b) => {
                                    return a.get_attribute('passing') - b.get_attribute('passing');
                                });
                            }
                            return players[0];
                        }
                        else {
                            players.filter((player) => {
                                return (player.position.abbreviation == 'CDM' ||
                                    player.position.abbreviation == 'LDM' ||
                                    player.position.abbreviation == 'RDM');
                            });
                            if (players.length > 0) {
                                if (players.length > 1) {
                                    // choose the one with better passing
                                    players.sort((a, b) => {
                                        return a.get_attribute('passing') - b.get_attribute('passing');
                                    });
                                }
                                return players[0];
                            }
                            else
                                return players[0];
                        }
                    }
                }
            }
        }
    }
    do_kickoff() {
        const rand = Math.random();
        if (rand < 0.5) {
            this.possession = this.home;
        }
        else {
            this.possession = this.away;
        }
        const p1 = this.getKickoffPlayer(this.possession);
        this.player_possession = p1;
    }
    play() {
        this.initialize();
        while (this.time < this.max_time) {
            if (!this.started) {
                this.do_kickoff();
            }
            this.tick();
            console.log(this.time);
        }
    }
}
exports.Match = Match;
