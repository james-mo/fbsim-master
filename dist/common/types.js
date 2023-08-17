"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gk_attribute_names = exports.attribute_names = exports.PitchArea = exports.Polygon = exports.Shape = void 0;
const place_1 = require("../worker/place");
function onLine(l1, p) {
    if (p.x <= Math.max(l1.point_1.x, l1.point_2.x) &&
        p.x <= Math.min(l1.point_1.x, l1.point_2.x) &&
        p.y <= Math.max(l1.point_1.y, l1.point_2.y) &&
        p.y <= Math.min(l1.point_1.y, l1.point_2.y)) {
        return true;
    }
    return false;
}
function direction(a, b, c) {
    let val = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);
    if (val == 0) {
        return 0;
    }
    return val > 0 ? 1 : 2;
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
            throw new Error("Polygon must have at least 3 points");
        }
        super(points);
    }
    isInside(point) {
        let extreme = { x: 100000, y: point.y, z: 0 };
        let exline = { point_1: point, point_2: extreme };
        let count = 0;
        let i = 0;
        do {
            let side = {
                point_1: this.points[i],
                point_2: this.points[(i + 1) % this.points.length],
            };
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
    constructor(venue) {
        this.length = venue.length;
        this.width = venue.width;
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
                    z: 0,
                },
                {
                    x: place_1.PitchDimensions.six_yard_box_length + 4,
                    y: this.width / 2 - place_1.PitchDimensions.six_yard_box_width / 2 - 4,
                    z: 0,
                },
            ];
            return points;
        }
        else {
        }
    }
}
exports.PitchArea = PitchArea;
exports.attribute_names = [
    "pace",
    "acceleration",
    "agility",
    "aggression",
    "balance",
    "dribbling",
    "technique",
    "finishing",
    "passing",
    "vision",
    "tackling",
    "heading",
    "strength",
    "stamina",
    "positioning",
    "movement",
    "decisions",
    "flair",
    "natural_fitness",
    "work_rate",
    "determination",
    "leadership",
    "teamwork",
    "jumping",
    "reactions",
];
exports.gk_attribute_names = [
    "handling",
    "reactions",
    "one_on_ones",
    "rushing_out",
    "communication",
    "eccentricity",
    "throwing",
    "kicking",
    "vision",
    "positioning",
    "pace",
    "acceleration",
    "strength",
    "jumping",
    "stamina",
    "natural_fitness",
    "determination",
    "work_rate",
    "leadership",
    "teamwork",
];
