"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rand_in_range = exports.in_range = exports.dist = exports.meters_to_px = exports.insideRectangle = void 0;
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
    return Math.abs(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)));
}
exports.dist = dist;
function in_range(a, range) {
    return a >= range[0] && a <= range[1];
}
exports.in_range = in_range;
function rand_in_range(a, b) {
    return Math.random() * (b - a) + a;
}
exports.rand_in_range = rand_in_range;
