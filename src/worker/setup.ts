import { Match, Team, PlayerOnPitch } from "./game";
import { Attributes, Position } from "./person";
import { City, Country, Venue } from "./place";
import { attribute_names, gk_attribute_names } from "../common/types";

const positions = [
  { name: "Goalkeeper", abbreviation: "GK" },
  { name: "Left Back", abbreviation: "LB" },
  { name: "Right Back", abbreviation: "RB" },
  { name: "Right Center Back", abbreviation: "RCB" },
  { name: "Left Center Back", abbreviation: "LCB" },
  { name: "Defensive Midfielder", abbreviation: "DM" },
  { name: "Right Central Midfielder", abbreviation: "RCM" },
  { name: "Left Central Midfielder", abbreviation: "LCM" },
  { name: "Left Winger", abbreviation: "LW" },
  { name: "Right Winger", abbreviation: "RW" },
  { name: "Striker", abbreviation: "ST" },
];

function create_random_squad(): PlayerOnPitch[] {
  let players: PlayerOnPitch[] = [];
  for (let i = 0; i < 11; i++) {
    const p = new PlayerOnPitch();
    p.name = "Player " + i;
    p.position = new Position();
    p.position.name = positions[i].name;
    p.position.abbreviation = positions[i].abbreviation;
    p.initialize();
    p.attributes = new Attributes();

    let attr_names = p.position.name === "Goalkeeper" ? gk_attribute_names : attribute_names;
    for (let name of attr_names) {
      p.attributes.set_attr(name, Math.floor(Math.random() * 100) + 1);
    }
    players.push(p);
  }
  return players;
}

// Two randomly-attributed 11-a-side squads, used by both the browser demo
// and the headless simulator so they build matches identically.
export function create_demo_teams(name1: string, name2: string): { home: Team; away: Team } {
  const home = new Team(name1);
  const away = new Team(name2);
  home.playersOnPitch = create_random_squad();
  away.playersOnPitch = create_random_squad();
  return { home, away };
}

export function create_demo_venue(): Venue {
  const venue = new Venue();
  venue.pitch_dimensions = [105, 68];
  venue.name = "Camp Nou";
  venue.capacity = 99354;
  const city = new City();
  city.name = "Barcelona";
  const country = new Country();
  country.name = "Spain";
  city.country = country;
  venue.city = city;
  venue.init_pitch_dimensions();
  return venue;
}

export function create_demo_match(name1 = "Barcelona", name2 = "Real Madrid"): Match {
  const match = new Match();
  match.venue = create_demo_venue();
  const { home, away } = create_demo_teams(name1, name2);
  match.home = home;
  match.away = away;
  return match;
}
