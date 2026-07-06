import { Match } from "./game";
import { PitchDimensions, Venue } from "./place";
import { meters_to_px } from "../common/helpers";

// Everything DOM/canvas-touching that used to live directly on Match.
// MatchRenderer only reads a Match — it never mutates simulation state —
// so the same Match can be driven headlessly (see simulate_headless.ts)
// with no renderer involved at all.
export class MatchRenderer {
  match: Match;
  background!: OffscreenCanvas;
  backgroundCtx!: ImageBitmapRenderingContext;
  bitmap!: ImageBitmap;
  foreground!: HTMLCanvasElement;

  constructor(match: Match) {
    this.match = match;
  }

  attach() {
    this.background = new OffscreenCanvas(900, 900);
    draw_pitch(this.background, this.match.venue);
    this.bitmap = this.background.transferToImageBitmap();
    let pitch = document.querySelector("#pitch") as HTMLCanvasElement;
    pitch.height = this.background.height;
    pitch.width = this.background.width;
    this.backgroundCtx = pitch.getContext(
      "bitmaprenderer"
    ) as ImageBitmapRenderingContext;
    this.backgroundCtx.transferFromImageBitmap(this.bitmap);

    this.foreground = document.createElement("canvas");
    this.foreground.id = "foreground";
    this.foreground.width = 900;
    this.foreground.height = this.background.height;
    pitch.insertAdjacentElement("afterend", this.foreground);

    this.update_ui();
  }

  update_ui() {
    const clock: HTMLDivElement | null = document.querySelector("#clock");
    if (clock) {
      clock.innerHTML = this.match.fmt_seconds(this.match.time);
    }
    const score: HTMLDivElement | null = document.querySelector("#score");
    if (score) {
      score.innerHTML = `${this.match.home.name} ${this.match.home_goals} - ${this.match.away_goals} ${this.match.away.name}`;
    }
  }

  draw_agents() {
    let ctx = this.foreground?.getContext("2d");
    if (this.foreground) {
      ctx?.clearRect(0, 0, this.foreground.width, this.foreground.height);
      this.draw_ball();
      this.draw_players();
      this.update_ui();
    }
  }

  draw_ball() {
    let ctx = this.foreground?.getContext("2d");
    if (this.foreground && ctx) {

      const pitchOffset = 50;
      let length = this.background.width - 2 * pitchOffset;
      let width = this.background.height - 2 * pitchOffset;

      // the simulation snaps ball_pos exactly onto the carrier's own
      // coordinates while they have it (correct for gameplay — that's
      // what "possession" means physically), but drawn at the identical
      // pixel as the player it's completely hidden underneath their
      // marker, so there's no way to tell who has the ball just by
      // looking. Offset the *rendered* position a little way ahead of
      // the carrier in their direction of travel — purely visual, the
      // underlying ball_pos used for game logic is untouched.
      let ball_x = this.match.ball_pos.x;
      let ball_y = this.match.ball_pos.y;
      let carrier = this.match.player_possession;
      if (carrier) {
        let speed = Math.sqrt(carrier.dx * carrier.dx + carrier.dy * carrier.dy);
        let offset_m = 0.8;
        if (speed > 0.0005) {
          ball_x += (carrier.dx / speed) * offset_m;
          ball_y += (carrier.dy / speed) * offset_m;
        } else {
          ball_x += offset_m;
        }
      }

      let x = (ball_x / this.match.venue.length) * length + pitchOffset;
      let y = (ball_y / this.match.venue.width) * width + pitchOffset;

      // if z is larger than the radius should be larger
      let radius = 3.4;
      if (this.match.ball_pos.z > 0) {
        radius += this.match.ball_pos.z * 2;
      }

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(x, y, radius - 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  draw_players() {
    let ctx = this.foreground?.getContext("2d");
    if (this.foreground && ctx) {

      const pitchOffset = 50;
      let length = this.background.width - 2 * pitchOffset;
      let width = this.background.height - 2 * pitchOffset;
      this.match.home.playersOnPitch.forEach((player) => {
        let x = (player.loc.x / this.match.venue.length) * length + pitchOffset;
        let y = (player.loc.y / this.match.venue.width) * width + pitchOffset;
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x, y, 4.4, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(x, y, 3.4, 0, 2 * Math.PI);
        ctx.fill();
      });
      this.match.away.playersOnPitch.forEach((player) => {
        let x = (player.loc.x / this.match.venue.length) * length + pitchOffset;
        let y = (player.loc.y / this.match.venue.width) * width + pitchOffset;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
      });
    }
  }
}

export function draw_pitch(canvas: OffscreenCanvas, venue: Venue) {
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
