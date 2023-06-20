(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dist = exports.meters_to_px = exports.insideRectangle = void 0;
function insideRectangle(rect, point) {
    return (rect.point_1.x <= point.x &&
        rect.point_2.x >= point.x &&
        rect.point_1.y <= point.y &&
        rect.point_2.y >= point.y &&
        rect.point_1.z <= point.z &&
        rect.point_2.z >= point.z);
}
exports.insideRectangle = insideRectangle;
function meters_to_px(meters, venue_length, length) {
    return (meters / venue_length) * length;
}
exports.meters_to_px = meters_to_px;
function dist(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
exports.dist = dist;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gk_attribute_names = exports.attribute_names = exports.PitchArea = exports.Polygon = exports.Shape = void 0;
const place_1 = require("../worker/place");
function onLine(l1, p) {
    if (p.x <= Math.max(l1.point_1.x, l1.point_2.x) &&
        p.x <= Math.min(l1.point_1.x, l1.point_2.x) &&
        (p.y <= Math.max(l1.point_1.y, l1.point_2.y) &&
            p.y <= Math.min(l1.point_1.y, l1.point_2.y))) {
        return true;
    }
    return false;
}
function direction(a, b, c) {
    let val = (b.y - a.y) * (c.x - b.x) -
        (b.x - a.x) * (c.y - b.y);
    if (val == 0) {
        return 0;
    }
    return (val > 0) ? 1 : 2;
}
function isIntersect(l1, l2) {
    let dir1 = direction(l1.point_1, l1.point_2, l2.point_1);
    let dir2 = direction(l1.point_1, l1.point_2, l2.point_2);
    let dir3 = direction(l2.point_1, l2.point_2, l1.point_1);
    let dir4 = direction(l2.point_1, l2.point_2, l1.point_2);
    if (dir1 != dir2 && dir3 != dir4) {
        return true;
    }
    if (dir1 == 0 && onLine(l1, l2.point_1)) {
        return true;
    }
    if (dir2 == 0 && onLine(l1, l2.point_2)) {
        return true;
    }
    if (dir3 == 0 && onLine(l2, l1.point_1)) {
        return true;
    }
    if (dir4 == 0 && onLine(l2, l1.point_2)) {
        return true;
    }
    return false;
}
class Shape {
    constructor(points) {
        this._points = points;
    }
    addPoint(point) {
        this._points.push(point);
    }
    set points(points) {
        this._points = points;
    }
    get points() {
        return this._points;
    }
}
exports.Shape = Shape;
class Polygon extends Shape {
    constructor(points) {
        if (points.length < 3) {
            throw new Error('Polygon must have at least 3 points');
        }
        super(points);
    }
    isInside(point) {
        let extreme = { x: 100000, y: point.y, z: 0 };
        let exline = { point_1: point, point_2: extreme };
        let count = 0;
        let i = 0;
        do {
            let side = { point_1: this.points[i], point_2: this.points[(i + 1) % this.points.length] };
            if (isIntersect(side, exline)) {
                if (direction(side.point_1, point, side.point_2) == 0) {
                    return onLine(side, point);
                }
                count++;
            }
            i = (i + 1) % this.points.length;
        } while (i != 0);
        return count % 2 == 1;
    }
}
exports.Polygon = Polygon;
class PitchArea {
    constructor(venue, area, side) {
        // goalkeeper area : from the goal line to ten meters out
        this.GOALKEEPER_AREA = new PitchArea(0, this.venue.width / 2 + place_1.PitchDimensions.six_yard_box_width / 2 + 4, place_1.PitchDimensions.six_yard_box_length + 4, this.venue.width / 2 - place_1.PitchDimensions.six_yard_box_width / 2 - 4);
        // left back area : from the corner flag to the six yard box up to 3/4 of the half
        this.LB_AREA = new PitchArea(0, 0, place_1.PitchDimensions.six_yard_box_width, (this.venue.length / 2) * 3 / 4);
        // right back area : from the corner flag to the six yard box up to 3/4 of the half
        this.RB_AREA = new PitchArea(0, this.venue.width, place_1.PitchDimensions.six_yard_box_width, (this.venue.length / 2) * 3 / 4);
        // center back area: from the six yard box to halfway up the half and from a little outside the penalty box to the penalty spot
        this.CB_AREA = new PitchArea(place_1.PitchDimensions.six_yard_box_length, this.venue.width / 2, this.venue.length / 4, (this.venue.width / 2) + place_1.PitchDimensions.penalty_area_width / 2 + 3);
        // defensive mid area: from the box to 3/4 of the half and 15m on either side of the center line
        this.DM_AREA = new PitchArea(place_1.PitchDimensions.penalty_area_length, this.venue.width / 2 + 15, (this.venue.length / 2) * 3 / 4, (this.venue.width / 2) - 15);
        // left center mid area: from 5m inside the touchline to the center line and from a little outside the box to the center circle
        this.LCM_AREA = new PitchArea(place_1.PitchDimensions.penalty_area_length + 5, 5, this.venue.length / 2, place_1.PitchDimensions.penalty_area_width / 2 + 3);
        this.length = venue.length;
        this.width = venue.width;
        let coords;
        switch (area) {
            case 'GOALKEEPER_AREA': {
                coords = this.gk_area(side);
            }
        }
    }
    set venue(venue) {
        this._venue = venue;
    }
    get venue() {
        return this._venue;
    }
    gk_area(side) {
        let points;
        if (side == "left") {
            points = [
                {
                    x: 0,
                    y: this.width / 2 + place_1.PitchDimensions.six_yard_box_width / 2 + 4,
                    z: 0
                },
                {
                    x: place_1.PitchDimensions.six_yard_box_length + 4,
                    y: this.width / 2 - place_1.PitchDimensions.six_yard_box_width / 2 - 4,
                    z: 0,
                }
            ];
            return points;
        }
        else {
        }
    }
}
exports.PitchArea = PitchArea;
exports.attribute_names = [
    'pace',
    'acceleration',
    'agility',
    'aggression',
    'balance',
    'dribbling',
    'technique',
    'finishing',
    'passing',
    'vision',
    'tackling',
    'heading',
    'strength',
    'stamina',
    'positioning',
    'movement',
    'decisions',
    'flair',
    'natural_fitness',
    'work_rate',
    'determination',
    'leadership',
    'teamwork',
    'jumping',
    'reactions'
];
exports.gk_attribute_names = [
    'handling',
    'reactions',
    'one_on_ones',
    'rushing_out',
    'communication',
    'eccentricity',
    'throwing',
    'kicking',
    'vision',
    'positioning',
    'pace',
    'acceleration',
    'strength',
    'jumping',
    'stamina',
    'natural_fitness',
    'determination',
    'work_rate',
    'leadership',
    'teamwork'
];

},{"../worker/place":6}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draw_pitch = void 0;
const game_1 = require("./game");
const person_1 = require("./person");
const place_1 = require("./place");
const person_2 = require("./person");
const helpers_1 = require("../common/helpers");
const types_1 = require("../common/types");
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
const positions = [
    { name: 'Goalkeeper', abbreviation: 'GK', },
    { name: 'Left Back', abbreviation: 'LB' },
    { name: 'Right Back', abbreviation: 'RB' },
    { name: 'Right Center Back', abbreviation: 'RCB' },
    { name: 'Left Center Back', abbreviation: 'LCB' },
    { name: 'Defensive Midfielder', abbreviation: 'DM' },
    { name: 'Right Central Midfielder', abbreviation: 'RCM' },
    { name: 'Left Central Midfielder', abbreviation: 'LCM' },
    { name: 'Left Winger', abbreviation: 'LW' },
    { name: 'Right Winger', abbreviation: 'RW' },
    { name: 'Striker', abbreviation: 'ST' },
];
let players1 = [];
let players2 = [];
for (let i = 0; i < 22; i++) {
    const p = new game_1.PlayerOnPitch();
    p.name = 'Player ' + i;
    p.position = new person_1.Position();
    p.position.name = positions[i % 11].name;
    p.position.abbreviation = positions[i % 11].abbreviation;
    p.initialize();
    if (i < 11) {
        players1.push(p);
    }
    else {
        players2.push(p);
    }
}
team1.playersOnPitch = players1;
team2.playersOnPitch = players2;
for (let i = 0; i < 22; i++) {
    let p1;
    if (i < 11) {
        p1 = team1.playersOnPitch[i];
    }
    else {
        p1 = team2.playersOnPitch[i - 11];
    }
    p1.attributes = new person_2.Attributes();
    let is_gk = false;
    if (p1.position.name === 'Goalkeeper') {
        is_gk = true;
    }
    if (!is_gk) {
        for (let a in types_1.gk_attribute_names) {
            p1.attributes.set_attr(a, Math.floor(Math.random() * 100) + 1);
        }
    }
    else {
        for (let a in types_1.attribute_names) {
            p1.attributes.set_attr(a, Math.floor(Math.random() * 100) + 1);
        }
    }
}
venue.init_pitch_dimensions();
function draw_pitch(canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
        const length = 800;
        const width = venue.dimensions.width * (length / venue.dimensions.length);
        canvas.width = length + 100;
        canvas.height = width + 100;
        console.log(canvas.width, canvas.height);
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
    }
}
exports.draw_pitch = draw_pitch;
match.home = team1;
match.away = team2;
match.play();
//let areas = new PitchArea();
//let gk_area = PitchArea.

},{"../common/helpers":1,"../common/types":2,"./game":3,"./person":5,"./place":6}],5:[function(require,module,exports){
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
        const diff = now.diff(this._dob, ['years', 'days']);
        return diff.years + ' years, ' + diff.days + ' days';
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
        this._attributes = [];
    }
    set attributes(attributes) {
        this._attributes = attributes;
    }
    get attributes() {
        return this._attributes;
    }
    get_attr(name) {
        return this._attributes[name];
    }
    set_attr(name, value) {
        this._attributes.push({ name, value });
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
        return this._attributes.get_attr(name);
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

},{}],6:[function(require,module,exports){
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

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tbW9uL2hlbHBlcnMudHMiLCJzcmMvY29tbW9uL3R5cGVzLnRzIiwic3JjL3dvcmtlci9nYW1lLnRzIiwic3JjL3dvcmtlci9pbmRleC50cyIsInNyYy93b3JrZXIvcGVyc29uLnRzIiwic3JjL3dvcmtlci9wbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0VBLFNBQWdCLGVBQWUsQ0FBQyxJQUFlLEVBQUUsS0FBYTtJQUM1RCxPQUFPLENBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FDMUIsQ0FBQztBQUNKLENBQUM7QUFURCwwQ0FTQztBQUVELFNBQWdCLFlBQVksQ0FBQyxNQUFjLEVBQUUsWUFBb0IsRUFBRSxNQUFjO0lBQy9FLE9BQU8sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzFDLENBQUM7QUFGRCxvQ0FFQztBQUVELFNBQWdCLElBQUksQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFD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O2dCQUNsRCxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ2QsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxXQUFXO2FBQy9CO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBek00QiwwQ0FBZTtBQWdKckMsb0NBQW9CLEdBQUcsSUFBSSxDQUFDO0FBQzVCLG1DQUFtQixHQUFHLElBQUksQ0FBQztBQUMzQixrQ0FBa0IsR0FBRyxLQUFLLENBQUM7QUFDM0IscUNBQXFCLEdBQUcsRUFBRSxDQUFDO0FBQzNCLG1DQUFtQixHQUFHLEdBQUcsQ0FBQztBQUMxQixrQ0FBa0IsR0FBRyxLQUFLLENBQUM7QUFDM0IsMEJBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsMkJBQVcsR0FBRyxJQUFJLENBQUM7QUFDbkIsMEJBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsa0NBQWtCLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgQ29vcmRzLCBSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluc2lkZVJlY3RhbmdsZShyZWN0OiBSZWN0YW5nbGUsIHBvaW50OiBDb29yZHMpIHtcbiAgcmV0dXJuIChcbiAgICByZWN0LnBvaW50XzEueCA8PSBwb2ludC54ICYmXG4gICAgcmVjdC5wb2ludF8yLnggPj0gcG9pbnQueCAmJlxuICAgIHJlY3QucG9pbnRfMS55IDw9IHBvaW50LnkgJiZcbiAgICByZWN0LnBvaW50XzIueSA+PSBwb2ludC55ICYmXG4gICAgcmVjdC5wb2ludF8xLnogPD0gcG9pbnQueiAmJlxuICAgIHJlY3QucG9pbnRfMi56ID49IHBvaW50LnpcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGVyc190b19weChtZXRlcnM6IG51bWJlciwgdmVudWVfbGVuZ3RoOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSB7XG4gIHJldHVybiAobWV0ZXJzIC8gdmVudWVfbGVuZ3RoKSAqIGxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3QoYTogQ29vcmRzLCBiOiBDb29yZHMpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsIDIpICsgTWF0aC5wb3coYS55IC0gYi55LCAyKSk7XG59IiwiaW1wb3J0IHsgUGl0Y2hEaW1lbnNpb25zLCBWZW51ZSB9IGZyb20gXCIuLi93b3JrZXIvcGxhY2VcIjtcblxuZXhwb3J0IHR5cGUgQ29vcmRzID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgejogbnVtYmVyO1xufTtcbiAgXG5leHBvcnQgdHlwZSBSZWN0YW5nbGUgPSB7XG4gIHBvaW50XzE6IENvb3JkcztcbiAgcG9pbnRfMjogQ29vcmRzO1xufTtcblxuZXhwb3J0IHR5cGUgTGluZSA9IHtcbiAgcG9pbnRfMTogQ29vcmRzO1xuICBwb2ludF8yOiBDb29yZHM7XG59XG5cbmZ1bmN0aW9uIG9uTGluZShsMTpMaW5lLCBwOkNvb3Jkcykge1xuICBpZiAocC54IDw9IE1hdGgubWF4KGwxLnBvaW50XzEueCwgbDEucG9pbnRfMi54KSAmJiBcbiAgICBwLnggPD0gTWF0aC5taW4obDEucG9pbnRfMS54LCBsMS5wb2ludF8yLngpICYmIFxuICAgIChwLnkgPD0gTWF0aC5tYXgobDEucG9pbnRfMS55LCBsMS5wb2ludF8yLnkpICYmXG4gICAgcC55IDw9IE1hdGgubWluKGwxLnBvaW50XzEueSwgbDEucG9pbnRfMi55KSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkaXJlY3Rpb24oYSxiLGMpIHtcbiAgbGV0IHZhbCA9IChiLnkgLSBhLnkpICogKGMueCAtIGIueCkgLVxuICAgIChiLnggLSBhLngpICogKGMueSAtIGIueSk7XG4gIFxuICBpZiAodmFsID09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiAodmFsID4gMCkgPyAxIDogMjtcblxufVxuXG5mdW5jdGlvbiBpc0ludGVyc2VjdChsMSxsMikge1xuICBsZXQgZGlyMSA9IGRpcmVjdGlvbihsMS5wb2ludF8xLCBsMS5wb2ludF8yLCBsMi5wb2ludF8xKTtcbiAgbGV0IGRpcjIgPSBkaXJlY3Rpb24obDEucG9pbnRfMSwgbDEucG9pbnRfMiwgbDIucG9pbnRfMik7XG4gIGxldCBkaXIzID0gZGlyZWN0aW9uKGwyLnBvaW50XzEsIGwyLnBvaW50XzIsIGwxLnBvaW50XzEpO1xuICBsZXQgZGlyNCA9IGRpcmVjdGlvbihsMi5wb2ludF8xLCBsMi5wb2ludF8yLCBsMS5wb2ludF8yKTtcblxuICBpZiAoZGlyMSAhPSBkaXIyICYmIGRpcjMgIT0gZGlyNCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGRpcjEgPT0gMCAmJiBvbkxpbmUobDEsIGwyLnBvaW50XzEpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZGlyMiA9PSAwICYmIG9uTGluZShsMSwgbDIucG9pbnRfMikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChkaXIzID09IDAgJiYgb25MaW5lKGwyLCBsMS5wb2ludF8xKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGRpcjQgPT0gMCAmJiBvbkxpbmUobDIsIGwxLnBvaW50XzIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4gIFxuZXhwb3J0IGNsYXNzIFNoYXBlIHtcbiAgX3BvaW50czogQ29vcmRzW107XG5cbiAgY29uc3RydWN0b3IocG9pbnRzKSB7XG4gICAgdGhpcy5fcG9pbnRzID0gcG9pbnRzO1xuICB9XG5cbiAgYWRkUG9pbnQocG9pbnQ6IENvb3Jkcykge1xuICAgIHRoaXMuX3BvaW50cy5wdXNoKHBvaW50KTtcbiAgfVxuXG4gIHNldCBwb2ludHMocG9pbnRzKSB7XG4gICAgdGhpcy5fcG9pbnRzID0gcG9pbnRzO1xuICB9XG5cbiAgZ2V0IHBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgU2hhcGUge1xuICBjb25zdHJ1Y3Rvcihwb2ludHM6IENvb3Jkc1tdKSB7XG4gICAgaWYgKHBvaW50cy5sZW5ndGggPCAzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BvbHlnb24gbXVzdCBoYXZlIGF0IGxlYXN0IDMgcG9pbnRzJyk7XG4gICAgfVxuICAgIHN1cGVyKHBvaW50cyk7XG4gIH1cbiAgaXNJbnNpZGUocG9pbnQ6IENvb3Jkcykge1xuICAgIGxldCBleHRyZW1lOiBDb29yZHMgPSB7eDogMTAwMDAwLCB5OiBwb2ludC55LCB6OiAwfTtcbiAgICBsZXQgZXhsaW5lOiBMaW5lID0ge3BvaW50XzE6IHBvaW50LCBwb2ludF8yOiBleHRyZW1lfTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCBpID0gMDtcbiAgICBkbyB7XG4gICAgICBsZXQgc2lkZTogTGluZSA9IHtwb2ludF8xOiB0aGlzLnBvaW50c1tpXSwgcG9pbnRfMjogdGhpcy5wb2ludHNbKGkrMSkgJSB0aGlzLnBvaW50cy5sZW5ndGhdfTtcbiAgICAgIGlmIChpc0ludGVyc2VjdChzaWRlLCBleGxpbmUpKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24oc2lkZS5wb2ludF8xLCBwb2ludCwgc2lkZS5wb2ludF8yKSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG9uTGluZShzaWRlLCBwb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICAgIGkgPSAoaSsxKSAlIHRoaXMucG9pbnRzLmxlbmd0aDtcbiAgICB9IHdoaWxlIChpICE9IDApO1xuXG4gICAgcmV0dXJuIGNvdW50ICUgMiA9PSAxO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaXRjaEFyZWEge1xuICBfdmVudWU6IFZlbnVlO1xuICBsZW5ndGg6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih2ZW51ZTpWZW51ZSwgYXJlYTogc3RyaW5nLCBzaWRlOlwibGVmdFwifFwicmlnaHRcIikge1xuICAgIHRoaXMubGVuZ3RoID0gdmVudWUubGVuZ3RoO1xuICAgIHRoaXMud2lkdGggPSB2ZW51ZS53aWR0aDtcbiAgICBsZXQgY29vcmRzOkNvb3Jkc1tdfHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKGFyZWEpIHtcbiAgICAgIGNhc2UgJ0dPQUxLRUVQRVJfQVJFQScgOiB7XG4gICAgICAgIGNvb3JkcyA9IHRoaXMuZ2tfYXJlYShzaWRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHNldCB2ZW51ZSh2ZW51ZTogVmVudWUpIHtcbiAgICB0aGlzLl92ZW51ZSA9IHZlbnVlO1xuICB9XG5cbiAgZ2V0IHZlbnVlKCkge1xuICAgIHJldHVybiB0aGlzLl92ZW51ZTtcbiAgfVxuXG4gIGdrX2FyZWEoc2lkZTogXCJsZWZ0XCJ8XCJyaWdodFwiKSB7XG4gICAgbGV0IHBvaW50czpDb29yZHNbXTtcbiAgICBpZiAoc2lkZT09XCJsZWZ0XCIpIHtcbiAgICAgIHBvaW50cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogdGhpcy53aWR0aCAvIDIgKyBQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoIC8gMiArIDQsXG4gICAgICAgICAgejogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDogUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF9sZW5ndGggKyA0LFxuICAgICAgICAgIHk6IHRoaXMud2lkdGggLyAyIC0gUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF93aWR0aCAvIDIgLSA0LFxuICAgICAgICAgIHo6IDAsXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH0gZWxzZSB7XG5cbiAgICB9XG4gIH1cblxuICAvLyBnb2Fsa2VlcGVyIGFyZWEgOiBmcm9tIHRoZSBnb2FsIGxpbmUgdG8gdGVuIG1ldGVycyBvdXRcbiAgR09BTEtFRVBFUl9BUkVBID0gbmV3IFBpdGNoQXJlYSgwLCB0aGlzLnZlbnVlLndpZHRoIC8gMiArIFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfd2lkdGggLyAyICsgNCwgUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF9sZW5ndGggKyA0LCB0aGlzLnZlbnVlLndpZHRoIC8gMiAtIFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfd2lkdGggLyAyIC0gNCk7XG4gIC8vIGxlZnQgYmFjayBhcmVhIDogZnJvbSB0aGUgY29ybmVyIGZsYWcgdG8gdGhlIHNpeCB5YXJkIGJveCB1cCB0byAzLzQgb2YgdGhlIGhhbGZcbiAgTEJfQVJFQSA9IG5ldyBQaXRjaEFyZWEoMCwgMCwgUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF93aWR0aCwgKHRoaXMudmVudWUubGVuZ3RoIC8gMikgKiAzLzQpO1xuICAvLyByaWdodCBiYWNrIGFyZWEgOiBmcm9tIHRoZSBjb3JuZXIgZmxhZyB0byB0aGUgc2l4IHlhcmQgYm94IHVwIHRvIDMvNCBvZiB0aGUgaGFsZlxuICBSQl9BUkVBID0gbmV3IFBpdGNoQXJlYSgwLCB0aGlzLnZlbnVlLndpZHRoLCBQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoLCAodGhpcy52ZW51ZS5sZW5ndGggLyAyKSAqIDMvNCk7XG4gIC8vIGNlbnRlciBiYWNrIGFyZWE6IGZyb20gdGhlIHNpeCB5YXJkIGJveCB0byBoYWxmd2F5IHVwIHRoZSBoYWxmIGFuZCBmcm9tIGEgbGl0dGxlIG91dHNpZGUgdGhlIHBlbmFsdHkgYm94IHRvIHRoZSBwZW5hbHR5IHNwb3RcbiAgQ0JfQVJFQSA9IG5ldyBQaXRjaEFyZWEoUGl0Y2hEaW1lbnNpb25zLnNpeF95YXJkX2JveF9sZW5ndGgsIHRoaXMudmVudWUud2lkdGggLyAyLCB0aGlzLnZlbnVlLmxlbmd0aC80LCAodGhpcy52ZW51ZS53aWR0aCAvIDIpICsgUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDIgKyAzKTtcbiAgLy8gZGVmZW5zaXZlIG1pZCBhcmVhOiBmcm9tIHRoZSBib3ggdG8gMy80IG9mIHRoZSBoYWxmIGFuZCAxNW0gb24gZWl0aGVyIHNpZGUgb2YgdGhlIGNlbnRlciBsaW5lXG4gIERNX0FSRUEgPSBuZXcgUGl0Y2hBcmVhKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoLCB0aGlzLnZlbnVlLndpZHRoIC8gMiArIDE1LCAodGhpcy52ZW51ZS5sZW5ndGgvMikgKiAzLzQsICh0aGlzLnZlbnVlLndpZHRoIC8gMikgLSAxNSk7XG4gIC8vIGxlZnQgY2VudGVyIG1pZCBhcmVhOiBmcm9tIDVtIGluc2lkZSB0aGUgdG91Y2hsaW5lIHRvIHRoZSBjZW50ZXIgbGluZSBhbmQgZnJvbSBhIGxpdHRsZSBvdXRzaWRlIHRoZSBib3ggdG8gdGhlIGNlbnRlciBjaXJjbGVcbiAgTENNX0FSRUEgPSBuZXcgUGl0Y2hBcmVhKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoKzUsIDUsIHRoaXMudmVudWUubGVuZ3RoIC8gMiwgUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIDIgKyAzKTtcblxufVxuXG5leHBvcnQgY29uc3QgYXR0cmlidXRlX25hbWVzID0gW1xuICAncGFjZScsXG4gICdhY2NlbGVyYXRpb24nLFxuICAnYWdpbGl0eScsXG4gICdhZ2dyZXNzaW9uJyxcbiAgJ2JhbGFuY2UnLFxuICAnZHJpYmJsaW5nJyxcbiAgJ3RlY2huaXF1ZScsXG4gICdmaW5pc2hpbmcnLFxuICAncGFzc2luZycsXG4gICd2aXNpb24nLFxuICAndGFja2xpbmcnLFxuICAnaGVhZGluZycsXG4gICdzdHJlbmd0aCcsXG4gICdzdGFtaW5hJyxcbiAgJ3Bvc2l0aW9uaW5nJyxcbiAgJ21vdmVtZW50JyxcbiAgJ2RlY2lzaW9ucycsXG4gICdmbGFpcicsXG4gICduYXR1cmFsX2ZpdG5lc3MnLFxuICAnd29ya19yYXRlJyxcbiAgJ2RldGVybWluYXRpb24nLFxuICAnbGVhZGVyc2hpcCcsXG4gICd0ZWFtd29yaycsXG4gICdqdW1waW5nJyxcbiAgJ3JlYWN0aW9ucydcbl07XG5cbmV4cG9ydCBjb25zdCBna19hdHRyaWJ1dGVfbmFtZXMgPSBbXG4gICdoYW5kbGluZycsXG4gICdyZWFjdGlvbnMnLFxuICAnb25lX29uX29uZXMnLFxuICAncnVzaGluZ19vdXQnLFxuICAnY29tbXVuaWNhdGlvbicsXG4gICdlY2NlbnRyaWNpdHknLFxuICAndGhyb3dpbmcnLFxuICAna2lja2luZycsXG4gICd2aXNpb24nLFxuICAncG9zaXRpb25pbmcnLFxuICAncGFjZScsXG4gICdhY2NlbGVyYXRpb24nLFxuICAnc3RyZW5ndGgnLFxuICAnanVtcGluZycsXG4gICdzdGFtaW5hJyxcbiAgJ25hdHVyYWxfZml0bmVzcycsXG4gICdkZXRlcm1pbmF0aW9uJyxcbiAgJ3dvcmtfcmF0ZScsXG4gICdsZWFkZXJzaGlwJyxcbiAgJ3RlYW13b3JrJ1xuXTsiLCIiLCJpbXBvcnQgeyBNYXRjaCwgVGVhbSwgUGxheWVyT25QaXRjaCB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBQbGF5ZXIsIFBvc2l0aW9uLCBSb2xlIH0gZnJvbSAnLi9wZXJzb24nO1xuaW1wb3J0IHsgQ2l0eSwgQ291bnRyeSwgUGl0Y2hEaW1lbnNpb25zLCBWZW51ZSB9IGZyb20gJy4vcGxhY2UnO1xuaW1wb3J0IHsgQXR0cmlidXRlLCBPdXRmaWVsZEF0dHJpYnV0ZSwgQXR0cmlidXRlcyB9IGZyb20gJy4vcGVyc29uJztcbmltcG9ydCB7IG1ldGVyc190b19weCB9IGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuaW1wb3J0IHsgUG9seWdvbiwgYXR0cmlidXRlX25hbWVzLCBna19hdHRyaWJ1dGVfbmFtZXMgfSBmcm9tICcuLi9jb21tb24vdHlwZXMnO1xuXG5jb25zdCB0ZWFtMSA9IG5ldyBUZWFtKCdCYXJjZWxvbmEnKTtcbmNvbnN0IHRlYW0yID0gbmV3IFRlYW0oJ1JlYWwgTWFkcmlkJyk7XG5jb25zdCBtYXRjaCA9IG5ldyBNYXRjaCgpO1xuY29uc3QgdmVudWUgPSBuZXcgVmVudWUoKTtcbnZlbnVlLnBpdGNoX2RpbWVuc2lvbnMgPSBbMTA1LCA2OF07XG5tYXRjaC52ZW51ZSA9IHZlbnVlO1xudmVudWUubmFtZSA9ICdDYW1wIE5vdSc7XG52ZW51ZS5jYXBhY2l0eSA9IDk5MzU0O1xuY29uc3QgY2l0eSA9IG5ldyBDaXR5KCk7XG5jaXR5Lm5hbWUgPSAnQmFyY2Vsb25hJztcbmNvbnN0IGNvdW50cnkgPSBuZXcgQ291bnRyeSgpO1xuY291bnRyeS5uYW1lID0gJ1NwYWluJztcbmNpdHkuY291bnRyeSA9IGNvdW50cnk7XG52ZW51ZS5jaXR5ID0gY2l0eTtcblxuY29uc3QgcG9zaXRpb25zID0gW1xuICB7IG5hbWU6ICdHb2Fsa2VlcGVyJywgYWJicmV2aWF0aW9uOiAnR0snICwgfSxcbiAgeyBuYW1lOiAnTGVmdCBCYWNrJywgYWJicmV2aWF0aW9uOiAnTEInIH0sXG4gIHsgbmFtZTogJ1JpZ2h0IEJhY2snLCBhYmJyZXZpYXRpb246ICdSQicgfSxcbiAgeyBuYW1lOiAnUmlnaHQgQ2VudGVyIEJhY2snLCBhYmJyZXZpYXRpb246ICdSQ0InIH0sXG4gIHsgbmFtZTogJ0xlZnQgQ2VudGVyIEJhY2snLCBhYmJyZXZpYXRpb246ICdMQ0InIH0sXG4gIHsgbmFtZTogJ0RlZmVuc2l2ZSBNaWRmaWVsZGVyJywgYWJicmV2aWF0aW9uOiAnRE0nIH0sXG4gIHsgbmFtZTogJ1JpZ2h0IENlbnRyYWwgTWlkZmllbGRlcicsIGFiYnJldmlhdGlvbjogJ1JDTScgfSxcbiAgeyBuYW1lOiAnTGVmdCBDZW50cmFsIE1pZGZpZWxkZXInLCBhYmJyZXZpYXRpb246ICdMQ00nIH0sXG4gIHsgbmFtZTogJ0xlZnQgV2luZ2VyJywgYWJicmV2aWF0aW9uOiAnTFcnIH0sXG4gIHsgbmFtZTogJ1JpZ2h0IFdpbmdlcicsIGFiYnJldmlhdGlvbjogJ1JXJyB9LFxuICB7IG5hbWU6ICdTdHJpa2VyJywgYWJicmV2aWF0aW9uOiAnU1QnIH0sXG5dXG5cbmxldCBwbGF5ZXJzMTpQbGF5ZXJPblBpdGNoW10gPSBbXTtcbmxldCBwbGF5ZXJzMjpQbGF5ZXJPblBpdGNoW10gPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyMjsgaSsrKSB7XG4gIGNvbnN0IHAgPSBuZXcgUGxheWVyT25QaXRjaCgpO1xuICBwLm5hbWUgPSAnUGxheWVyICcgKyBpO1xuICBwLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKCk7XG4gIHAucG9zaXRpb24ubmFtZSA9IHBvc2l0aW9uc1tpICUgMTFdLm5hbWU7XG4gIHAucG9zaXRpb24uYWJicmV2aWF0aW9uID0gcG9zaXRpb25zW2kgJSAxMV0uYWJicmV2aWF0aW9uO1xuICBwLmluaXRpYWxpemUoKTtcbiAgaWYgKGkgPCAxMSkge1xuICAgIHBsYXllcnMxLnB1c2gocCk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyczIucHVzaChwKTtcbiAgfVxufVxuXG50ZWFtMS5wbGF5ZXJzT25QaXRjaCA9IHBsYXllcnMxO1xudGVhbTIucGxheWVyc09uUGl0Y2ggPSBwbGF5ZXJzMjtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyMjsgaSsrKSB7XG4gIGxldCBwMTpQbGF5ZXJPblBpdGNoO1xuICBpZiAoaSA8IDExKSB7XG4gICAgcDEgPSB0ZWFtMS5wbGF5ZXJzT25QaXRjaFtpXTtcbiAgfVxuICBlbHNlIHtcbiAgICBwMSA9IHRlYW0yLnBsYXllcnNPblBpdGNoW2kgLSAxMV07XG4gIH1cblxuICBwMS5hdHRyaWJ1dGVzID0gbmV3IEF0dHJpYnV0ZXMoKTtcblxuICBsZXQgaXNfZ2sgPSBmYWxzZTtcbiAgaWYgKHAxLnBvc2l0aW9uLm5hbWUgPT09ICdHb2Fsa2VlcGVyJykge1xuICAgIGlzX2drID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWlzX2drKSB7XG4gICAgZm9yICggbGV0IGEgaW4gZ2tfYXR0cmlidXRlX25hbWVzICkge1xuICAgICAgcDEuYXR0cmlidXRlcy5zZXRfYXR0cihhLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKSsxKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgZm9yICggbGV0IGEgaW4gYXR0cmlidXRlX25hbWVzICkge1xuICAgICAgcDEuYXR0cmlidXRlcy5zZXRfYXR0cihhLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKSsxKTtcbiAgICB9XG4gIH1cbn1cblxudmVudWUuaW5pdF9waXRjaF9kaW1lbnNpb25zKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3X3BpdGNoKGNhbnZhczogT2Zmc2NyZWVuQ2FudmFzKSB7XG5cbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmIChjdHgpIHtcblxuICAgIGNvbnN0IGxlbmd0aCA9IDgwMDtcbiAgICBjb25zdCB3aWR0aCA9IHZlbnVlLmRpbWVuc2lvbnMud2lkdGggKiAobGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpO1xuICAgIGNhbnZhcy53aWR0aCA9IGxlbmd0aCArIDEwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2lkdGggKyAxMDA7XG4gICAgY29uc29sZS5sb2coY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyZXknO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwYWUwMCc7XG4gICAgY3R4LmZpbGxSZWN0KDUwLCA1MCwgbGVuZ3RoLCB3aWR0aCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICBjdHgubGluZVdpZHRoID0gMS41O1xuICAgIGN0eC5yZWN0KDUwLCA1MCwgbGVuZ3RoLCB3aWR0aCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgLy8gZHJhdyB3aGl0ZSBjZW50ZXIgbGluZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKGxlbmd0aCAvIDIgKyA1MCwgNTApO1xuICAgIGN0eC5saW5lVG8obGVuZ3RoIC8gMiArIDUwLCB3aWR0aCArIDUwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyB3aGl0ZSBjZW50ZXIgY2lyY2xlXG4gICAgY29uc3QgcmFkaXVzID0gKFBpdGNoRGltZW5zaW9ucy5jZW50ZXJfY2lyY2xlX3JhZGl1cyAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhsZW5ndGggLyAyICsgNTAsIHdpZHRoIC8gMiArIDUwLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyBraWNrb2ZmIHNwb3RcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhsZW5ndGggLyAyICsgNTAsIHdpZHRoIC8gMiArIDUwLCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyB3aGl0ZSBwZW5hbHR5IGFyZWFcbiAgICBsZXQgeDEgPSAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV9sZW5ndGggLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG4gICAgbGV0IHkxID0gKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfd2lkdGggLyB2ZW51ZS5kaW1lbnNpb25zLndpZHRoKSAqIHdpZHRoO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCg1MCwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIGRyYXcgd2hpdGUgcGVuYWx0eSBzcG90XG4gICAgeDEgPSAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfc3BvdF9kaXN0YW5jZSAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aCArIDUwO1xuICAgIHkxID0gd2lkdGggLyAyICsgNTA7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeDEsIHkxLCAyLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gZHJhdyB3aGl0ZSBzaXggeWFyZCBib3hcbiAgICB4MSA9IChQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X2xlbmd0aCAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICB5MSA9IChQaXRjaERpbWVuc2lvbnMuc2l4X3lhcmRfYm94X3dpZHRoIC8gdmVudWUuZGltZW5zaW9ucy53aWR0aCkgKiB3aWR0aDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QoNTAsIHdpZHRoIC8gMiAtIHkxIC8gMiArIDUwLCB4MSwgeTEpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyBkcmF3IHdoaXRlIGdvYWwgYXJlYVxuICAgIHgxID0gKFBpdGNoRGltZW5zaW9ucy5nb2FsX2RlcHRoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoO1xuICAgIHkxID0gKFBpdGNoRGltZW5zaW9ucy5nb2FsX3dpZHRoIC8gdmVudWUuZGltZW5zaW9ucy53aWR0aCkgKiB3aWR0aDtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbFJlY3QoNTAgLSB4MSwgd2lkdGggLyAyIC0geTEgLyAyICsgNTAsIHgxLCB5MSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KDUwIC0geDEsIHdpZHRoIC8gMiAtIHkxIC8gMiArIDUwLCB4MSwgeTEpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIC8vZHJhdyBjb3JuZXIgYXJjXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGNvbnN0IG9uZV9tZXRlciA9ICgxIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoO1xuICAgIGN0eC5hcmMoNTAsIDUwLCBvbmVfbWV0ZXIsIDAsICgxIC8gMikgKiBNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy9vdGhlciBjb3JuZXIgYXJjXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoNTAsIHdpZHRoICsgNTAsIG9uZV9tZXRlciwgMCwgKDMgLyAyKSAqIE1hdGguUEksIHRydWUpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIC8vIG90aGVyIHNpZGVcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhsZW5ndGggKyA1MCwgNTAsIG9uZV9tZXRlciwgKDEgLyAyKSAqIE1hdGguUEksIE1hdGguUEkpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGxlbmd0aCArIDUwLCB3aWR0aCArIDUwLCBvbmVfbWV0ZXIsIE1hdGguUEksICgzIC8gMikgKiBNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICB4MSA9IChQaXRjaERpbWVuc2lvbnMuZ29hbF9kZXB0aCAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICB5MSA9IChQaXRjaERpbWVuc2lvbnMuZ29hbF93aWR0aCAvIHZlbnVlLmRpbWVuc2lvbnMud2lkdGgpICogd2lkdGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KGxlbmd0aCArIDUwLCB3aWR0aCAvIDIgLSB5MSAvIDIgKyA1MCwgeDEsIHkxKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIHgxID0gKFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoO1xuICAgIHkxID0gKFBpdGNoRGltZW5zaW9ucy5zaXhfeWFyZF9ib3hfd2lkdGggLyB2ZW51ZS5kaW1lbnNpb25zLndpZHRoKSAqIHdpZHRoO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdChsZW5ndGggLSB4MSArIDUwLCB3aWR0aCAvIDIgLSB5MSAvIDIgKyA1MCwgeDEsIHkxKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICB4MSA9IChQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9zcG90X2Rpc3RhbmNlIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoO1xuICAgIHkxID0gd2lkdGggLyAyICsgNTA7XG5cbiAgICBjb25zdCBwZW5fc3BvdDIgPSBbKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X3Nwb3RfZGlzdGFuY2UgLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGgsIHdpZHRoIC8gMiArIDUwXTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhsZW5ndGggLSB4MSArIDUwLCB5MSwgMiwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgeDEgPSAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV9sZW5ndGggLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG4gICAgeTEgPSAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJlYV93aWR0aCAvIHZlbnVlLmRpbWVuc2lvbnMud2lkdGgpICogd2lkdGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KGxlbmd0aCAtIHgxICsgNTAsIHdpZHRoIC8gMiAtIHkxIC8gMiArIDUwLCB4MSwgeTEpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIC8vIHBlbmFsdHkgYXJjc1xuICAgIGNvbnN0IHBlbl9yYWRpdXMgPSAoUGl0Y2hEaW1lbnNpb25zLnBlbmFsdHlfYXJjX3JhZGl1cyAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aDtcbiAgICBsZXQgeCA9IGxlbmd0aCAtIChQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9hcmVhX2xlbmd0aCAvIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoKSAqIGxlbmd0aCArIDUwO1xuXG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2lyY3VsYXJfc2VnbWVudCNSYWRpdXNfYW5kX2NlbnRyYWxfYW5nbGVcbiAgICBjb25zdCBjaG9yZF9sZW5ndGggPSAoNS40MTkgLyB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCkgKiBsZW5ndGg7XG5cbiAgICB5MSA9IHdpZHRoIC8gMiArIGNob3JkX2xlbmd0aCArIDUwO1xuICAgIGNvbnN0IHkyID0gd2lkdGggLyAyIC0gY2hvcmRfbGVuZ3RoICsgNTA7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICBjdHgubW92ZVRvKHgsIHkxKTtcbiAgICBjdHguYXJjVG8oeCAtIG1ldGVyc190b19weCgzLjY1LCB2ZW51ZS5kaW1lbnNpb25zLmxlbmd0aCwgbGVuZ3RoKSwgd2lkdGggLyAyICsgNTAsIHgsIHkyLCBwZW5fcmFkaXVzKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICB4ID0gKFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X2FyZWFfbGVuZ3RoIC8gdmVudWUuZGltZW5zaW9ucy5sZW5ndGgpICogbGVuZ3RoICsgNTA7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeTEpO1xuICAgIGN0eC5hcmNUbyh4ICsgbWV0ZXJzX3RvX3B4KDMuNjUsIHZlbnVlLmRpbWVuc2lvbnMubGVuZ3RoLCBsZW5ndGgpLCB3aWR0aCAvIDIgKyA1MCwgeCwgeTIsIHBlbl9yYWRpdXMpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5tYXRjaC5ob21lID0gdGVhbTE7XG5tYXRjaC5hd2F5ID0gdGVhbTI7XG5tYXRjaC5wbGF5KCk7XG5cbmltcG9ydCB7IFBpdGNoQXJlYSB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG4vL2xldCBhcmVhcyA9IG5ldyBQaXRjaEFyZWEoKTtcbi8vbGV0IGdrX2FyZWEgPSBQaXRjaEFyZWEuIiwiaW1wb3J0IHsgQ291bnRyeSwgQ2l0eSB9IGZyb20gJy4vcGxhY2UnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5cbmNsYXNzIFBlcnNvbiB7XG4gIF9uYW1lOiBzdHJpbmc7XG4gIF9kb2I6IERhdGVUaW1lO1xuICBfbmF0aW9uYWxpdGllczogQ291bnRyeVtdO1xuICBfcGxhY2Vfb2ZfYmlydGg6IENpdHk7XG4gIF9oZWlnaHQ6IG51bWJlcjtcbiAgX3dlaWdodDogbnVtYmVyO1xuXG4gIHNldCBuYW1lKG5hbWUpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IGRvYihkb2I6IERhdGVUaW1lKSB7XG4gICAgdGhpcy5fZG9iID0gZG9iO1xuICB9XG5cbiAgZ2V0IGRvYigpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9iO1xuICB9XG5cbiAgY2FsY3VsYXRlX2FnZShub3c6IERhdGVUaW1lKSB7XG4gICAgLy8gY2FsY3VsYXRlIGFnZSAoeWVhcnMgYW5kIGRheXMpXG4gICAgY29uc29sZS5sb2cobm93KTtcbiAgICBjb25zdCBkaWZmID0gbm93LmRpZmYodGhpcy5fZG9iLCBbJ3llYXJzJywgJ2RheXMnXSk7XG4gICAgcmV0dXJuIGRpZmYueWVhcnMgKyAnIHllYXJzLCAnICsgZGlmZi5kYXlzICsgJyBkYXlzJztcbiAgfVxuXG4gIHNldCBuYXRpb25hbGl0aWVzKG5hdGlvbmFsaXRpZXM6IENvdW50cnlbXSkge1xuICAgIHRoaXMuX25hdGlvbmFsaXRpZXMgPSBuYXRpb25hbGl0aWVzO1xuICB9XG5cbiAgZ2V0IG5hdGlvbmFsaXRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdGlvbmFsaXRpZXM7XG4gIH1cblxuICBzZXQgcGxhY2Vfb2ZfYmlydGgocGxhY2Vfb2ZfYmlydGg6IENpdHkpIHtcbiAgICB0aGlzLl9wbGFjZV9vZl9iaXJ0aCA9IHBsYWNlX29mX2JpcnRoO1xuICB9XG5cbiAgZ2V0IHBsYWNlX29mX2JpcnRoKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZV9vZl9iaXJ0aDtcbiAgfVxuXG4gIHNldCBoZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cblxuICBzZXQgd2VpZ2h0KHdlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5fd2VpZ2h0ID0gd2VpZ2h0O1xuICB9XG5cbiAgZ2V0IHdlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2VpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIE91dGZpZWxkQXR0cmlidXRlID1cbiAgfCAncGFjZSdcbiAgfCAnYWNjZWxlcmF0aW9uJ1xuICB8ICdhZ2lsaXR5J1xuICB8ICdhZ2dyZXNzaW9uJ1xuICB8ICdiYWxhbmNlJ1xuICB8ICdkcmliYmxpbmcnXG4gIHwgJ3RlY2huaXF1ZSdcbiAgfCAnZmluaXNoaW5nJ1xuICB8ICdwYXNzaW5nJ1xuICB8ICd2aXNpb24nXG4gIHwgJ3RhY2tsaW5nJ1xuICB8ICdoZWFkaW5nJ1xuICB8ICdzdHJlbmd0aCdcbiAgfCAnc3RhbWluYSdcbiAgfCAncG9zaXRpb25pbmcnXG4gIHwgJ21vdmVtZW50J1xuICB8ICdkZWNpc2lvbnMnXG4gIHwgJ2ZsYWlyJ1xuICB8ICduYXR1cmFsX2ZpdG5lc3MnXG4gIHwgJ3dvcmtfcmF0ZSdcbiAgfCAnZGV0ZXJtaW5hdGlvbidcbiAgfCAnbGVhZGVyc2hpcCdcbiAgfCAndGVhbXdvcmsnXG4gIHwgJ2p1bXBpbmcnXG4gIHwgJ3JlYWN0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIEdvYWxrZWVwZXJBdHRyaWJ1dGVzID1cbiAgfCAnaGFuZGxpbmcnXG4gIHwgJ3JlYWN0aW9ucydcbiAgfCAnb25lX29uX29uZXMnXG4gIHwgJ3J1c2hpbmdfb3V0J1xuICB8ICdjb21tdW5pY2F0aW9uJ1xuICB8ICdlY2NlbnRyaWNpdHknXG4gIHwgJ3Rocm93aW5nJ1xuICB8ICdraWNraW5nJ1xuICB8ICd2aXNpb24nXG4gIHwgJ3Bvc2l0aW9uaW5nJ1xuICB8ICdwYWNlJ1xuICB8ICdhY2NlbGVyYXRpb24nXG4gIHwgJ3N0cmVuZ3RoJ1xuICB8ICdqdW1waW5nJ1xuICB8ICdzdGFtaW5hJ1xuICB8ICduYXR1cmFsX2ZpdG5lc3MnXG4gIHwgJ2RldGVybWluYXRpb24nXG4gIHwgJ3dvcmtfcmF0ZSdcbiAgfCAnbGVhZGVyc2hpcCdcbiAgfCAndGVhbXdvcmsnO1xuXG5leHBvcnQgdHlwZSBBdHRyaWJ1dGUgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVzIHtcbiAgX2F0dHJpYnV0ZXM6IEF0dHJpYnV0ZVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2F0dHJpYnV0ZXMgPSBbXTtcbiAgfVxuXG4gIHNldCBhdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZVtdKSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gIH1cblxuICBnZXQgYXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0cmlidXRlcztcbiAgfVxuXG4gIGdldF9hdHRyKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzW25hbWVdO1xuICB9XG5cbiAgc2V0X2F0dHIobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcy5wdXNoKHsgbmFtZSwgdmFsdWUgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGVyc29uIHtcbiAgX2F0dHJpYnV0ZXM6IEF0dHJpYnV0ZXM7XG4gIF9wb3NpdGlvbnM6IFBvc2l0aW9uW107XG5cbiAgc2V0IGF0dHJpYnV0ZXMoYXR0cjogQXR0cmlidXRlcykge1xuICAgIHRoaXMuX2F0dHJpYnV0ZXMgPSBhdHRyO1xuICB9XG5cbiAgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHJpYnV0ZXM7XG4gIH1cblxuICBnZXRfYXR0cmlidXRlKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9hdHRyaWJ1dGVzLmdldF9hdHRyKG5hbWUpO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnM6IFBvc2l0aW9uW10pIHtcbiAgICB0aGlzLl9wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcbiAgX25hbWU6IHN0cmluZztcbiAgX2FiYnJldmlhdGlvbjogc3RyaW5nO1xuICBfcm9sZXM6IFJvbGVbXTtcblxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IGFiYnJldmlhdGlvbihhYmJyZXZpYXRpb246IHN0cmluZykge1xuICAgIHRoaXMuX2FiYnJldmlhdGlvbiA9IGFiYnJldmlhdGlvbjtcbiAgfVxuXG4gIGdldCBhYmJyZXZpYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FiYnJldmlhdGlvbjtcbiAgfVxuXG4gIHNldCByb2xlcyhyb2xlczogUm9sZVtdKSB7XG4gICAgdGhpcy5fcm9sZXMgPSByb2xlcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm9sZSB7XG4gIF9uYW1lOiBzdHJpbmc7XG4gIF9hYmJyZXZpYXRpb246IHN0cmluZztcbiAgX3Bvc2l0aW9uczogUG9zaXRpb25bXTtcbiAgX3ByaW1hcnlfYXR0cmlidXRlczogc3RyaW5nW107XG4gIF9zZWNvbmRhcnlfYXR0cmlidXRlczogc3RyaW5nW107XG4gIF9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBfaXNfZ29hbGtlZXBlcjogYm9vbGVhbjtcbiAgX3RhY3RpY2FsX2luc3RydWN0aW9uczogSW5zdHJ1Y3Rpb25bXTtcblxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IGFiYnJldmlhdGlvbihhYmJyZXZpYXRpb246IHN0cmluZykge1xuICAgIHRoaXMuX2FiYnJldmlhdGlvbiA9IGFiYnJldmlhdGlvbjtcbiAgfVxuXG4gIGdldCBhYmJyZXZpYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FiYnJldmlhdGlvbjtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zOiBQb3NpdGlvbltdKSB7XG4gICAgdGhpcy5fcG9zaXRpb25zID0gcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25zO1xuICB9XG5cbiAgc2V0IHByaW1hcnlfYXR0cmlidXRlcyhwcmltYXJ5X2F0dHJpYnV0ZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcHJpbWFyeV9hdHRyaWJ1dGVzID0gcHJpbWFyeV9hdHRyaWJ1dGVzO1xuICB9XG5cbiAgZ2V0IHByaW1hcnlfYXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpbWFyeV9hdHRyaWJ1dGVzO1xuICB9XG5cbiAgc2V0IHNlY29uZGFyeV9hdHRyaWJ1dGVzKHNlY29uZGFyeV9hdHRyaWJ1dGVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NlY29uZGFyeV9hdHRyaWJ1dGVzID0gc2Vjb25kYXJ5X2F0dHJpYnV0ZXM7XG4gIH1cblxuICBnZXQgc2Vjb25kYXJ5X2F0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY29uZGFyeV9hdHRyaWJ1dGVzO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBpc19nb2Fsa2VlcGVyKGlzX2dvYWxrZWVwZXI6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc19nb2Fsa2VlcGVyID0gaXNfZ29hbGtlZXBlcjtcbiAgfVxuXG4gIGdldCBpc19nb2Fsa2VlcGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9pc19nb2Fsa2VlcGVyO1xuICB9XG5cbiAgc2V0IHRhY3RpY2FsX2luc3RydWN0aW9ucyh0YWN0aWNhbF9pbnN0cnVjdGlvbnM6IEluc3RydWN0aW9uW10pIHtcbiAgICB0aGlzLl90YWN0aWNhbF9pbnN0cnVjdGlvbnMgPSB0YWN0aWNhbF9pbnN0cnVjdGlvbnM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RydWN0aW9uIHtcbiAgX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIF9pbnN0cnVjdGlvbjogUGxheWVySW5zdHJ1Y3Rpb24gfCBUZWFtSW5zdHJ1Y3Rpb24gfCBHb2Fsa2VlcGVySW5zdHJ1Y3Rpb247XG4gIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgaW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb246IFBsYXllckluc3RydWN0aW9uIHwgVGVhbUluc3RydWN0aW9uIHwgR29hbGtlZXBlckluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5faW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbjtcbiAgfVxuXG4gIGdldCBpbnN0cnVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdHJ1Y3Rpb247XG4gIH1cbn1cblxudHlwZSBUZWFtSW5zdHJ1Y3Rpb24gPVxuICB8ICdwbGF5X291dF9mcm9tX2JhY2snXG4gIHwgJ3BsYXlfdGhyb3VnaF90aGVfbWlkZGxlJ1xuICB8ICdwbGF5X2Rvd25fdGhlX3dpbmdzJ1xuICB8ICdwbGF5X2xvbmdfYmFsbHMnXG4gIHwgJ3BsYXlfY291bnRlcl9hdHRhY2tzJ1xuICB8ICdkZWZlbmRfZGVlcCdcbiAgfCAnZGVmZW5kX21lZGl1bSdcbiAgfCAnZGVmZW5kX2hpZ2gnXG4gIHwgJ29mZnNpZGVfdHJhcCdcbiAgfCAnY3Jvc3Nfb2Z0ZW4nXG4gIHwgJ3dvcmtfYmFsbF9pbnRvX2JveCdcbiAgfCAnc2hvb3RfZnJvbV9kaXN0YW5jZSdcbiAgfCAnd2FpdF9mb3JfZ29vZF9zaG90J1xuICB8ICdwYXNzX3Zlcnlfc2hvcnQnXG4gIHwgJ3Bhc3Nfc2hvcnQnXG4gIHwgJ3Bhc3NfbWVkaXVtJ1xuICB8ICdwYXNzX2xvbmcnXG4gIHwgJ3BsYXlfdGhyb3VnaF9iYWxscydcbiAgfCAncGxheV9sb2JzJ1xuICB8ICdwbGF5X29uZV90d29zJztcblxudHlwZSBQbGF5ZXJJbnN0cnVjdGlvbiA9XG4gIHwgJ3RhY2tsZV9oYXJkZXInXG4gIHwgJ21hcmtfdGlnaHRseSdcbiAgfCAnc3RheV9vbl9mZWV0J1xuICB8ICdzaG9ydGVyX3Bhc3NlcydcbiAgfCAnZ2V0X2luX2JlaGluZCdcbiAgfCAnZHJpYmJsZV9sZXNzJ1xuICB8ICdkcmliYmxlX21vcmUnXG4gIHwgJ2Nyb3NzX2xlc3MnXG4gIHwgJ2Nyb3NzX21vcmUnXG4gIHwgJ3Nob290X2xlc3MnXG4gIHwgJ3Nob290X21vcmUnXG4gIHwgJ3Bhc3NfdG9fc3BhY2UnXG4gIHwgJ3Bhc3NfdG9fZmVldCdcbiAgfCAndHJ5X3Jpc2t5X3Bhc3NlcydcbiAgfCAncGxheV9zYWZlX3Bhc3NlcydcbiAgfCAnaG9sZF91cF9iYWxsJ1xuICB8ICdtb3ZlX2ludG9fY2hhbm5lbHMnXG4gIHwgJ2dldF9mdXJ0aGVyX2ZvcndhcmQnXG4gIHwgJ3J1bl93aWRlX3dpdGhfYmFsbCdcbiAgfCAnY3Jvc3NfZnJvbV9ieWxpbmUnO1xuXG50eXBlIEdvYWxrZWVwZXJJbnN0cnVjdGlvbiA9ICdkcmliYmxlX21vcmUnIHwgJ3Rha2VfbW9yZV9yaXNrcycgfCAncnVzaF9vdXQnIHwgJ3VzZV9jcmVhdGl2ZV9mcmVlZG9tJztcbiIsImV4cG9ydCB7IENvdW50cnksIENpdHksIFZlbnVlLCBQaXRjaERpbWVuc2lvbnMgfTtcbmltcG9ydCB7IENvb3JkcywgUmVjdGFuZ2xlIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcblxuY2xhc3MgUGxhY2Uge1xuICBfbmFtZTogc3RyaW5nO1xuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG59XG5cbmNsYXNzIENvdW50cnkgZXh0ZW5kcyBQbGFjZSB7XG4gIF9mbGFnOiBzdHJpbmc7XG4gIF9wb3B1bGF0aW9uOiBudW1iZXI7XG4gIF9jYXBpdGFsOiBDaXR5O1xuICBfY3VycmVuY3k6IHN0cmluZztcbiAgX2xhbmd1YWdlczogc3RyaW5nW107XG5cbiAgc2V0IGZsYWcoZmxhZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmxhZyA9IGZsYWc7XG4gIH1cblxuICBnZXQgZmxhZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxhZztcbiAgfVxuXG4gIHNldCBwb3B1bGF0aW9uKHBvcHVsYXRpb246IG51bWJlcikge1xuICAgIHRoaXMuX3BvcHVsYXRpb24gPSBwb3B1bGF0aW9uO1xuICB9XG5cbiAgZ2V0IHBvcHVsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcHVsYXRpb247XG4gIH1cblxuICBzZXQgY2FwaXRhbChjYXBpdGFsOiBDaXR5KSB7XG4gICAgdGhpcy5fY2FwaXRhbCA9IGNhcGl0YWw7XG4gIH1cblxuICBnZXQgY2FwaXRhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwaXRhbDtcbiAgfVxuXG4gIHNldCBjdXJyZW5jeShjdXJyZW5jeTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgfVxuXG4gIGdldCBjdXJyZW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVuY3k7XG4gIH1cblxuICBzZXQgbGFuZ3VhZ2VzKGxhbmd1YWdlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XG4gIH1cblxuICBnZXQgbGFuZ3VhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9sYW5ndWFnZXM7XG4gIH1cbn1cblxuY2xhc3MgQ2l0eSBleHRlbmRzIFBsYWNlIHtcbiAgX3BvcHVsYXRpb246IG51bWJlcjtcbiAgX2NvdW50cnk6IENvdW50cnk7XG5cbiAgc2V0IHBvcHVsYXRpb24ocG9wdWxhdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9wdWxhdGlvbiA9IHBvcHVsYXRpb247XG4gIH1cblxuICBnZXQgcG9wdWxhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wdWxhdGlvbjtcbiAgfVxuXG4gIHNldCBjb3VudHJ5KGNvdW50cnk6IENvdW50cnkpIHtcbiAgICB0aGlzLl9jb3VudHJ5ID0gY291bnRyeTtcbiAgfVxuXG4gIGdldCBjb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudHJ5O1xuICB9XG59XG5cbmNsYXNzIFZlbnVlIGV4dGVuZHMgUGxhY2Uge1xuICBfY2FwYWNpdHk6IG51bWJlcjtcbiAgX2NpdHk6IENpdHk7XG4gIGxlbmd0aDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBfZGltZW5zaW9uczogUGl0Y2hEaW1lbnNpb25zO1xuXG4gIHNldCBjYXBhY2l0eShjYXBhY2l0eTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgfVxuXG4gIGdldCBjYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHk7XG4gIH1cblxuICBzZXQgY2l0eShjaXR5OiBDaXR5KSB7XG4gICAgdGhpcy5fY2l0eSA9IGNpdHk7XG4gIH1cblxuICBnZXQgY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2l0eTtcbiAgfVxuXG4gIHNldCBwaXRjaF9kaW1lbnNpb25zKHBpdGNoX2RpbWVuc2lvbnM6IFtudW1iZXIsIG51bWJlcl0pIHtcbiAgICB0aGlzLmxlbmd0aCA9IHBpdGNoX2RpbWVuc2lvbnNbMF07XG4gICAgdGhpcy53aWR0aCA9IHBpdGNoX2RpbWVuc2lvbnNbMV07XG4gICAgdGhpcy5pbml0X3BpdGNoX2RpbWVuc2lvbnMoKTtcbiAgfVxuXG4gIGluaXRfcGl0Y2hfZGltZW5zaW9ucygpIHtcbiAgICB0aGlzLl9kaW1lbnNpb25zID0gbmV3IFBpdGNoRGltZW5zaW9ucygpO1xuICAgIHRoaXMuX2RpbWVuc2lvbnMubGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgdGhpcy5fZGltZW5zaW9ucy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgdGhpcy5fZGltZW5zaW9ucy5pbml0KCk7XG4gIH1cblxuICBnZXQgZGltZW5zaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9ucztcbiAgfVxufVxuXG5jbGFzcyBQaXRjaERpbWVuc2lvbnMge1xuICBfbGVuZ3RoOiBudW1iZXI7XG4gIF93aWR0aDogbnVtYmVyO1xuXG4gIHNldCBsZW5ndGgobGVuZ3RoOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgc3RhdGljIGNlbnRlcl9jaXJjbGVfcmFkaXVzID0gOS4xNTtcbiAgc3RhdGljIHBlbmFsdHlfYXJlYV9sZW5ndGggPSAxNi41O1xuICBzdGF0aWMgcGVuYWx0eV9hcmVhX3dpZHRoID0gNDAuMzI7XG4gIHN0YXRpYyBwZW5hbHR5X3Nwb3RfZGlzdGFuY2UgPSAxMTtcbiAgc3RhdGljIHNpeF95YXJkX2JveF9sZW5ndGggPSA1LjU7XG4gIHN0YXRpYyBzaXhfeWFyZF9ib3hfd2lkdGggPSAxOC4zMjtcbiAgc3RhdGljIGdvYWxfd2lkdGggPSA3LjMyO1xuICBzdGF0aWMgZ29hbF9oZWlnaHQgPSAyLjQ0O1xuICBzdGF0aWMgZ29hbF9kZXB0aCA9IDIuNDQ7XG4gIHN0YXRpYyBwZW5hbHR5X2FyY19yYWRpdXMgPSA5LjE1O1xuXG4gIHBlbmFsdHlfc3BvdF8xX2Nvb3JkczogQ29vcmRzO1xuICBwZW5hbHR5X3Nwb3RfMl9jb29yZHM6IENvb3JkcztcbiAga2lja29mZl9zcG90OiBDb29yZHM7XG4gIGdvYWxfMTogUmVjdGFuZ2xlO1xuICBnb2FsXzI6IFJlY3RhbmdsZTtcblxuICBpbml0KCkge1xuICAgIHRoaXMucGVuYWx0eV9zcG90XzFfY29vcmRzID0ge1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICB5OiBQaXRjaERpbWVuc2lvbnMucGVuYWx0eV9zcG90X2Rpc3RhbmNlLFxuICAgICAgejogMCxcbiAgICB9O1xuICAgIHRoaXMucGVuYWx0eV9zcG90XzJfY29vcmRzID0ge1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4gICAgICB5OiB0aGlzLmxlbmd0aCAtIFBpdGNoRGltZW5zaW9ucy5wZW5hbHR5X3Nwb3RfZGlzdGFuY2UsXG4gICAgICB6OiAwLFxuICAgIH07XG4gICAgdGhpcy5raWNrb2ZmX3Nwb3QgPSB7XG4gICAgICB4OiB0aGlzLmxlbmd0aCAvIDIsXG4gICAgICB5OiB0aGlzLndpZHRoIC8gMixcbiAgICAgIHo6IDAsXG4gICAgfTtcbiAgICB0aGlzLmdvYWxfMSA9IHtcbiAgICAgIHBvaW50XzE6IHtcbiAgICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSBQaXRjaERpbWVuc2lvbnMuZ29hbF93aWR0aCAvIDIsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDAsXG4gICAgICB9LFxuICAgICAgcG9pbnRfMjoge1xuICAgICAgICB4OiB0aGlzLndpZHRoIC8gMiArIFBpdGNoRGltZW5zaW9ucy5nb2FsX3dpZHRoIC8gMixcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogUGl0Y2hEaW1lbnNpb25zLmdvYWxfaGVpZ2h0LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuZ29hbF8yID0ge1xuICAgICAgcG9pbnRfMToge1xuICAgICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIFBpdGNoRGltZW5zaW9ucy5nb2FsX3dpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5sZW5ndGgsXG4gICAgICAgIHo6IDAsXG4gICAgICB9LFxuICAgICAgcG9pbnRfMjoge1xuICAgICAgICB4OiB0aGlzLndpZHRoIC8gMiArIFBpdGNoRGltZW5zaW9ucy5nb2FsX3dpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5sZW5ndGgsXG4gICAgICAgIHo6IFBpdGNoRGltZW5zaW9ucy5nb2FsX2hlaWdodCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19
