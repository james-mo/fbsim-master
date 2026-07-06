import { create_demo_match } from "./setup";
import { MatchRenderer } from "./renderer";
import { DateTime } from "luxon";

const start_date = DateTime.local(2022, 7, 1);
const match = create_demo_match("Barcelona", "Real Madrid");

let date_text = document.querySelector("#date-text");
if (date_text) {
  date_text.innerHTML = start_date.toLocaleString(DateTime.DATE_FULL);
}

const renderer = new MatchRenderer(match);

async function play_animated() {
  match.initialize(
    new Map<string, boolean>([
      ["extra_time", false],
      ["penalties", false],
    ])
  );
  renderer.attach();

  while (true) {
    let now = DateTime.now();
    if (!match.tick_match()) {
      break;
    }
    renderer.draw_agents();
    let elapsed = DateTime.now().diff(now).milliseconds;
    if (elapsed < 1000 / 60) {
      await new Promise((resolve) => setTimeout(resolve, 1000 / 60 - elapsed));
    }
  }
}

play_animated();
