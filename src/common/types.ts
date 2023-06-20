import { PitchDimensions, Venue } from "../worker/place";

export type Coords = {
  x: number;
  y: number;
  z: number;
};

export type Rectangle = {
  point_1: Coords;
  point_2: Coords;
};

export type Line = {
  point_1: Coords;
  point_2: Coords;
};

function onLine(l1: Line, p: Coords) {
  if (
    p.x <= Math.max(l1.point_1.x, l1.point_2.x) &&
    p.x <= Math.min(l1.point_1.x, l1.point_2.x) &&
    p.y <= Math.max(l1.point_1.y, l1.point_2.y) &&
    p.y <= Math.min(l1.point_1.y, l1.point_2.y)
  ) {
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

export class Shape {
  _points: Coords[];

  constructor(points) {
    this._points = points;
  }

  addPoint(point: Coords) {
    this._points.push(point);
  }

  set points(points) {
    this._points = points;
  }

  get points() {
    return this._points;
  }
}

export class Polygon extends Shape {
  constructor(points: Coords[]) {
    if (points.length < 3) {
      throw new Error("Polygon must have at least 3 points");
    }
    super(points);
  }
  isInside(point: Coords) {
    let extreme: Coords = { x: 100000, y: point.y, z: 0 };
    let exline: Line = { point_1: point, point_2: extreme };
    let count = 0;
    let i = 0;
    do {
      let side: Line = {
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

export class PitchArea {
  _venue: Venue;
  length: number;
  width: number;

  constructor(venue: Venue, area: string, side: "left" | "right") {
    this.length = venue.length;
    this.width = venue.width;
    let coords: Coords[] | undefined;
    switch (area) {
      case "GOALKEEPER_AREA": {
        coords = this.gk_area(side);
      }
    }
  }

  set venue(venue: Venue) {
    this._venue = venue;
  }

  get venue() {
    return this._venue;
  }

  gk_area(side: "left" | "right") {
    let points: Coords[];
    if (side == "left") {
      points = [
        {
          x: 0,
          y: this.width / 2 + PitchDimensions.six_yard_box_width / 2 + 4,
          z: 0,
        },
        {
          x: PitchDimensions.six_yard_box_length + 4,
          y: this.width / 2 - PitchDimensions.six_yard_box_width / 2 - 4,
          z: 0,
        },
      ];
      return points;
    } else {
    }
  }

  // goalkeeper area : from the goal line to ten meters out
  /*GOALKEEPER_AREA = new PitchArea(
    {x: 0, this.venue.width / 2 + PitchDimensions.six_yard_box_width / 2 + 4, PitchDimensions.six_yard_box_length + 4, this.venue.width / 2 - PitchDimensions.six_yard_box_width / 2 - 4);
  // left back area : from the corner flag to the six yard box up to 3/4 of the half
  LB_AREA = new PitchArea(0, 0, PitchDimensions.six_yard_box_width, (this.venue.length / 2) * 3/4);
  // right back area : from the corner flag to the six yard box up to 3/4 of the half
  RB_AREA = new PitchArea(0, this.venue.width, PitchDimensions.six_yard_box_width, (this.venue.length / 2) * 3/4);
  // center back area: from the six yard box to halfway up the half and from a little outside the penalty box to the penalty spot
  CB_AREA = new PitchArea(PitchDimensions.six_yard_box_length, this.venue.width / 2, this.venue.length/4, (this.venue.width / 2) + PitchDimensions.penalty_area_width / 2 + 3);
  // defensive mid area: from the box to 3/4 of the half and 15m on either side of the center line
  DM_AREA = new PitchArea(PitchDimensions.penalty_area_length, this.venue.width / 2 + 15, (this.venue.length/2) * 3/4, (this.venue.width / 2) - 15);
  // left center mid area: from 5m inside the touchline to the center line and from a little outside the box to the center circle
  LCM_AREA = new PitchArea(PitchDimensions.penalty_area_length+5, 5, this.venue.length / 2, PitchDimensions.penalty_area_width / 2 + 3);*/
}

export const attribute_names = [
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

export const gk_attribute_names = [
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
