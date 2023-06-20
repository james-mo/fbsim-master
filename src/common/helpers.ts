import { Coords, Rectangle } from './types';

export function insideRectangle(rect: Rectangle, point: Coords) {
  return (
    rect.point_1.x <= point.x &&
    rect.point_2.x >= point.x &&
    rect.point_1.y <= point.y &&
    rect.point_2.y >= point.y &&
    rect.point_1.z <= point.z &&
    rect.point_2.z >= point.z
  );
}

export function meters_to_px(meters: number, venue_length: number, length: number) {
  return (meters / venue_length) * length;
}

export function dist(a: Coords, b: Coords) {
  return Math.abs(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)));
}