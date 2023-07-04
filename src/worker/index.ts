import { Match, Team, PlayerOnPitch } from "./game";
import { SimMatch } from "./sim_game";
import { Player, Position, Role } from "./person";
import { City, Country, PitchDimensions, Venue } from "./place";
import { Attribute, OutfieldAttribute, Attributes } from "./person";
import { meters_to_px } from "../common/helpers";
import { DateTime } from "luxon";
import { Polygon, attribute_names, gk_attribute_names } from "../common/types";

const start_date = DateTime.local(2022,7,1);
const team1 = new Team("Barcelona");
const team2 = new Team("Real Madrid");
const match = new Match();
const venue = new Venue();
venue.pitch_dimensions = [105, 68];
match.venue = venue;
venue.name = "Camp Nou";
venue.capacity = 99354;
const city = new City();
city.name = "Barcelona";
const country = new Country();
country.name = "Spain";
city.country = country;
venue.city = city;

let date_text = document.querySelector("#date-text");
if (date_text) {
  date_text.innerHTML = start_date.toLocaleString(DateTime.DATE_FULL);
}

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

let players1: PlayerOnPitch[] = [];
let players2: PlayerOnPitch[] = [];

for (let i = 0; i < 22; i++) {
  const p = new PlayerOnPitch();
  p.name = "Player " + i;
  p.position = new Position();
  p.position.name = positions[i % 11].name;
  p.position.abbreviation = positions[i % 11].abbreviation;
  p.initialize();
  if (i < 11) {
    players1.push(p);
  } else {
    players2.push(p);
  }
}

team1.playersOnPitch = players1;
team2.playersOnPitch = players2;

for (let i = 0; i < 22; i++) {
  let p1: PlayerOnPitch;
  if (i < 11) {
    p1 = team1.playersOnPitch[i];
  } else {
    p1 = team2.playersOnPitch[i - 11];
  }

  p1.attributes = new Attributes();

  let is_gk = false;
  if (p1.position.name === "Goalkeeper") {
    is_gk = true;
  }
  if (is_gk) {
    for (let a = 0; a < gk_attribute_names.length; a++) {
      p1.attributes.set_attr(
        gk_attribute_names[a],
        Math.floor(Math.random() * 100) + 1
      );
    }
  } else {
    for (let a = 0; a < attribute_names.length; a++) {
      p1.attributes.set_attr(
        attribute_names[a],
        Math.floor(Math.random() * 100) + 1
      );
    }
  }
}

venue.init_pitch_dimensions();

export function draw_pitch(canvas: OffscreenCanvas) {
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const length = 800;
    const width = venue.dimensions.width * (length / venue.dimensions.length);
    canvas.width = length + 100;
    canvas.height = width + 100;
    ctx.fillStyle = "#00ae00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ae00";
    ctx.fillRect(50, 50, length, width);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1.5;
    ctx.rect(50, 50, length, width);
    ctx.stroke();

    // draw white center line
    ctx.beginPath();
    ctx.moveTo(length / 2 + 50, 50);
    ctx.lineTo(length / 2 + 50, width + 50);
    ctx.stroke();
    // draw white center circle
    const radius =
      (PitchDimensions.center_circle_radius / venue.dimensions.length) * length;
    ctx.beginPath();
    ctx.arc(length / 2 + 50, width / 2 + 50, radius, 0, 2 * Math.PI);
    ctx.stroke();
    // draw kickoff spot
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(length / 2 + 50, width / 2 + 50, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    // draw white penalty area
    let x1 =
      (PitchDimensions.penalty_area_length / venue.dimensions.length) * length;
    let y1 =
      (PitchDimensions.penalty_area_width / venue.dimensions.width) * width;
    ctx.beginPath();
    ctx.rect(50, width / 2 - y1 / 2 + 50, x1, y1);
    ctx.stroke();
    // draw white penalty spot
    x1 =
      (PitchDimensions.penalty_spot_distance / venue.dimensions.length) *
        length +
      50;
    y1 = width / 2 + 50;
    ctx.beginPath();
    ctx.arc(x1, y1, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    // draw white six yard box
    x1 =
      (PitchDimensions.six_yard_box_length / venue.dimensions.length) * length;
    y1 = (PitchDimensions.six_yard_box_width / venue.dimensions.width) * width;
    ctx.beginPath();
    ctx.rect(50, width / 2 - y1 / 2 + 50, x1, y1);
    ctx.stroke();
    // draw white goal area
    x1 = (PitchDimensions.goal_depth / venue.dimensions.length) * length;
    y1 = (PitchDimensions.goal_width / venue.dimensions.width) * width;

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(50 - x1, width / 2 - y1 / 2 + 50, x1, y1);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(50 - x1, width / 2 - y1 / 2 + 50, x1, y1);
    ctx.stroke();

    //draw corner arc
    ctx.beginPath();
    const one_meter = (1 / venue.dimensions.length) * length;
    ctx.arc(50, 50, one_meter, 0, (1 / 2) * Math.PI);
    ctx.stroke();
    //other corner arc
    ctx.beginPath();
    ctx.arc(50, width + 50, one_meter, 0, (3 / 2) * Math.PI, true);
    ctx.stroke();

    // other side
    ctx.beginPath();
    ctx.arc(length + 50, 50, one_meter, (1 / 2) * Math.PI, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(length + 50, width + 50, one_meter, Math.PI, (3 / 2) * Math.PI);
    ctx.stroke();

    x1 = (PitchDimensions.goal_depth / venue.dimensions.length) * length;
    y1 = (PitchDimensions.goal_width / venue.dimensions.width) * width;
    ctx.beginPath();
    ctx.rect(length + 50, width / 2 - y1 / 2 + 50, x1, y1);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    x1 =
      (PitchDimensions.six_yard_box_length / venue.dimensions.length) * length;
    y1 = (PitchDimensions.six_yard_box_width / venue.dimensions.width) * width;
    ctx.beginPath();
    ctx.rect(length - x1 + 50, width / 2 - y1 / 2 + 50, x1, y1);
    ctx.stroke();

    x1 =
      (PitchDimensions.penalty_spot_distance / venue.dimensions.length) *
      length;
    y1 = width / 2 + 50;

    const pen_spot2 = [
      (PitchDimensions.penalty_spot_distance / venue.dimensions.length) *
        length,
      width / 2 + 50,
    ];
    ctx.beginPath();
    ctx.arc(length - x1 + 50, y1, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    x1 =
      (PitchDimensions.penalty_area_length / venue.dimensions.length) * length;
    y1 = (PitchDimensions.penalty_area_width / venue.dimensions.width) * width;
    ctx.beginPath();
    ctx.rect(length - x1 + 50, width / 2 - y1 / 2 + 50, x1, y1);
    ctx.stroke();

    // penalty arcs
    const pen_radius =
      (PitchDimensions.penalty_arc_radius / venue.dimensions.length) * length;
    let x =
      length -
      (PitchDimensions.penalty_area_length / venue.dimensions.length) * length +
      50;

    // https://en.wikipedia.org/wiki/Circular_segment#Radius_and_central_angle
    const chord_length = (5.419 / venue.dimensions.length) * length;

    y1 = width / 2 + chord_length + 50;
    const y2 = width / 2 - chord_length + 50;

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.moveTo(x, y1);
    ctx.arcTo(
      x - meters_to_px(3.65, venue.dimensions.length, length),
      width / 2 + 50,
      x,
      y2,
      pen_radius
    );
    ctx.stroke();

    x =
      (PitchDimensions.penalty_area_length / venue.dimensions.length) * length +
      50;
    ctx.beginPath();
    ctx.moveTo(x, y1);
    ctx.arcTo(
      x + meters_to_px(3.65, venue.dimensions.length, length),
      width / 2 + 50,
      x,
      y2,
      pen_radius
    );
    ctx.stroke();
  }
}

match.home = team1;
match.away = team2;
match.play();

import { PitchArea } from "../common/types";
//let areas = new PitchArea();
//let gk_area = PitchArea.
