import { Match, Team, PlayerOnPitch } from "./game";
import { create_demo_match } from "./setup";
import { dist } from "../common/helpers";

const match = create_demo_match("Home", "Away");
match.initialize(new Map([["extra_time", false], ["penalties", false]]));
match.do_kickoff(false);
match.started = true;

let ticksLogged = 0;
let lastCarrier: PlayerOnPitch | null = null;
let maxTicks = 60 * 60 * 3; // 3 sim minutes max

function nearestOppDist(carrier: PlayerOnPitch, m: Match): number {
  const oppTeam = carrier.team == m.home ? m.away : m.home;
  return Math.min(
    ...oppTeam.playersOnPitch
      .filter((p) => p.position.name != "Goalkeeper")
      .map((p) => dist(p.loc, carrier.loc))
  );
}

for (let i = 0; i < maxTicks; i++) {
  match.tick();

  const carrier = match.player_possession;
  if (carrier && carrier !== lastCarrier) {
    console.log(`\n--- NEW CARRIER: ${carrier.name} (${carrier.team.name}) at t=${match.time.toFixed(2)} loc=(${carrier.loc.x.toFixed(1)},${carrier.loc.y.toFixed(1)}) ---`);
    lastCarrier = carrier;
  }
  if (!carrier) {
    lastCarrier = null;
  }

  if (match.ticks === 0 && carrier) {
    const nd = nearestOppDist(carrier, match);
    console.log(
      `t=${match.time.toFixed(2)} carrier=${carrier.name} loc=(${carrier.loc.x.toFixed(1)},${carrier.loc.y.toFixed(1)}) ` +
      `commit=${carrier.dribble_commit_ticks} nearestOppDist=${nd.toFixed(2)} pressure=${carrier.calculate_pressure(carrier.team == match.home ? match.away : match.home).toFixed(3)}`
    );
    ticksLogged++;
  }

  if (match.home_goals + match.away_goals > 0) {
    console.log(`\nGOAL at t=${match.time.toFixed(2)}! Score: ${match.home_goals}-${match.away_goals}`);
    break;
  }
}

console.log(`\nDone after ${ticksLogged} decide-cycles, sim time ${match.time.toFixed(1)}s.`);
