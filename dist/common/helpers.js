"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meters_to_px = exports.insideRectangle = void 0;
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
