import { Coords, Rectangle } from "./types";

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

export function meters_to_px(
  meters: number,
  venue_length: number,
  length: number
) {
  return (meters / venue_length) * length;
}

export function dist(a: Coords, b: Coords) {
  return Math.abs(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)));
}

export function in_range(a: number, range: [number, number]) {
  return a >= range[0] && a <= range[1];
}

export function rand_in_range(a: number, b: number) {
  return Math.random() * (b - a) + a;
}