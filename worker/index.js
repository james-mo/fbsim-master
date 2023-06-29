"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
const person_1 = require("./person");
const place_1 = require("./place");
const person_2 = require("./person");
const helpers_1 = require("../common/helpers");
const luxon_1 = require("luxon");
console.log('hello world');
const team1 = new game_1.Team('Barcelona');
const team2 = new game_1.Team('Real Madrid');
const match = new game_1.Match();
const venue = new place_1.Venue();
venue.pitch_dimensions = [105, 68];
match.venue = venue;
venue.name = 'Camp Nou';
venue.capacity = 99354;
const city = new place_1.City();
city.name = 'Barcelona';
const country = new place_1.Country();
country.name = 'Spain';
city.country = country;
venue.city = city;
const p1 = new game_1.PlayerOnPitch();
p1.name = 'Lionel Messi';
const pos = new person_1.Position();
pos.name = 'Right Winger';
pos.abbreviation = 'RW';
p1.position = pos;
const role = new person_1.Role();
role.name = 'Inside Forward';
role.abbreviation = 'IF';
p1.role = role;
p1.loc = { x: 0, y: 0, z: 0 };
p1.height = 170;
p1.weight = 69;
const attrs = [
    { name: 'acceleration', value: 84 },
    { name: 'aggression', value: 48 },
    { name: 'agility', value: 94 },
    { name: 'balance', value: 95 },
    { name: 'dribbling', value: 96 },
    { name: 'finishing', value: 95 },
    { name: 'heading', value: 70 },
    { name: 'pace', value: 84 },
    { name: 'passing', value: 91 },
    { name: 'stamina', value: 72 },
    { name: 'strength', value: 69 },
    { name: 'technique', value: 95 },
    { name: 'vision', value: 94 },
    { name: 'work_rate', value: 33 },
    { name: 'natural_fitness', value: 85 },
    { name: 'leadership', value: 73 },
    { name: 'teamwork', value: 71 },
    { name: 'decisions', value: 94 },
    { name: 'flair', value: 94 },
    { name: 'movement', value: 94 },
    { name: 'positioning', value: 70 },
    { name: 'tackling', value: 26 },
    { name: 'jumping', value: 68 },
    { name: 'reactions', value: 95 },
    { name: 'determination', value: 89 },
];
p1.attributes = new person_2.Attributes();
p1.attributes.attributes = attrs;
p1.dob = luxon_1.DateTime.local(1987, 6, 24);
p1.place_of_birth = new place_1.City();
p1.place_of_birth.name = 'Rosario';
p1.place_of_birth.country = new place_1.Country();
p1.place_of_birth.country.name = 'Argentina';
p1._nationalities = [p1.place_of_birth.country, new place_1.Country()];
p1._nationalities[1].name = 'Spain';
console.log(p1.calculate_age(luxon_1.DateTime.now()));
console.log(venue);
venue.init_pitch_dimensions();
window.onload = () => {
    // venue dimensions scaled to 800px length
    // canvas is 900x900 so 50px padding on each side
    const canvas = document.querySelector('#pitch');
    console.log(canvas);
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const length = 800;
            const width = venue.dimensions.width * (length / venue.dimensions.length);
            canvas.width = length + 100;
            canvas.height = width + 100;
            ctx.fillStyle = 'grey';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ae00';
            ctx.fillRect(50, 50, length, width);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 1.5;
            ctx.rect(50, 50, length, width);
            ctx.stroke();
            // draw white center line
            ctx.beginPath();
            ctx.moveTo(length / 2 + 50, 50);
            ctx.lineTo(length / 2 + 50, width + 50);
            ctx.stroke();
            // draw white center circle
            const radius = (place_1.PitchDimensions.center_circle_radius / venue.dimensions.length) * length;
            ctx.beginPath();
            ctx.arc(length / 2 + 50, width / 2 + 50, radius, 0, 2 * Math.PI);
            ctx.stroke();
            // draw kickoff spot
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(length / 2 + 50, width / 2 + 50, 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            // draw white penalty area
            let x1 = (place_1.PitchDimensions.penalty_area_length / venue.dimensions.length) * length;
            let y1 = (place_1.PitchDimensions.penalty_area_width / venue.dimensions.width) * width;
            ctx.beginPath();
            ctx.rect(50, width / 2 - y1 / 2 + 50, x1, y1);
            ctx.stroke();
            // draw white penalty spot
            x1 = (place_1.PitchDimensions.penalty_spot_distance / venue.dimensions.length) * length + 50;
            y1 = width / 2 + 50;
            ctx.beginPath();
            ctx.arc(x1, y1, 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            // draw white six yard box
            x1 = (place_1.PitchDimensions.six_yard_box_length / venue.dimensions.length) * length;
            y1 = (place_1.PitchDimensions.six_yard_box_width / venue.dimensions.width) * width;
            ctx.beginPath();
            ctx.rect(50, width / 2 - y1 / 2 + 50, x1, y1);
            ctx.stroke();
            // draw white goal area
            x1 = (place_1.PitchDimensions.goal_depth / venue.dimensions.length) * length;
            y1 = (place_1.PitchDimensions.goal_width / venue.dimensions.width) * width;
            ctx.beginPath();
            ctx.fillStyle = 'white';
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
            x1 = (place_1.PitchDimensions.goal_depth / venue.dimensions.length) * length;
            y1 = (place_1.PitchDimensions.goal_width / venue.dimensions.width) * width;
            ctx.beginPath();
            ctx.rect(length + 50, width / 2 - y1 / 2 + 50, x1, y1);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.stroke();
            x1 = (place_1.PitchDimensions.six_yard_box_length / venue.dimensions.length) * length;
            y1 = (place_1.PitchDimensions.six_yard_box_width / venue.dimensions.width) * width;
            ctx.beginPath();
            ctx.rect(length - x1 + 50, width / 2 - y1 / 2 + 50, x1, y1);
            ctx.stroke();
            x1 = (place_1.PitchDimensions.penalty_spot_distance / venue.dimensions.length) * length;
            y1 = width / 2 + 50;
            const pen_spot2 = [(place_1.PitchDimensions.penalty_spot_distance / venue.dimensions.length) * length, width / 2 + 50];
            ctx.beginPath();
            ctx.arc(length - x1 + 50, y1, 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            x1 = (place_1.PitchDimensions.penalty_area_length / venue.dimensions.length) * length;
            y1 = (place_1.PitchDimensions.penalty_area_width / venue.dimensions.width) * width;
            ctx.beginPath();
            ctx.rect(length - x1 + 50, width / 2 - y1 / 2 + 50, x1, y1);
            ctx.stroke();
            // penalty arcs
            const pen_radius = (place_1.PitchDimensions.penalty_arc_radius / venue.dimensions.length) * length;
            let x = length - (place_1.PitchDimensions.penalty_area_length / venue.dimensions.length) * length + 50;
            // https://en.wikipedia.org/wiki/Circular_segment#Radius_and_central_angle
            const chord_length = (5.419 / venue.dimensions.length) * length;
            y1 = width / 2 + chord_length + 50;
            const y2 = width / 2 - chord_length + 50;
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.moveTo(x, y1);
            ctx.arcTo(x - (0, helpers_1.meters_to_px)(3.65, venue.dimensions.length, length), width / 2 + 50, x, y2, pen_radius);
            ctx.stroke();
            x = (place_1.PitchDimensions.penalty_area_length / venue.dimensions.length) * length + 50;
            ctx.beginPath();
            ctx.moveTo(x, y1);
            ctx.arcTo(x + (0, helpers_1.meters_to_px)(3.65, venue.dimensions.length, length), width / 2 + 50, x, y2, pen_radius);
            ctx.stroke();
            match.home = team1;
            match.away = team2;
            console.log(match.play());
        }
    }
};
