import { Player } from './person';
import { City } from './place';

export class Club {
  private _name: string;
  private _players: Player[];
  private _location: City;

  constructor(name: string) {
    this._name = name;
  }

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set players(players: Player[]) {
    this._players = players;
  }

  get players() {
    return this._players;
  }

  set location(loc: City) {
    this._location = loc;
  }

  get location() {
    return this._location;
  }
}
