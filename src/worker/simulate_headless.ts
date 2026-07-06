import { Match } from "./game";
import { create_demo_match } from "./setup";

// Runs N matches with no rendering and no wall-clock pacing — proof the
// engine is actually decoupled from the browser/canvas, and the only
// practical way to eyeball whether its output distribution is plausible.
// Usage: ts-node src/worker/simulate_headless.ts [n]

const n = parseInt(process.argv[2] ?? "1", 10);

type MatchResult = ReturnType<Match["get_summary"]>;

const results: MatchResult[] = [];
const started = Date.now();

for (let i = 0; i < n; i++) {
  const match = create_demo_match("Barcelona", "Real Madrid");
  match.simulate();
  const summary = match.get_summary();
  results.push(summary);

  if (n <= 5) {
    console.log(
      `Match ${i + 1}: Barcelona ${summary.home_goals} - ${summary.away_goals} Real Madrid` +
      ` | shots ${summary.home.shots}/${summary.away.shots}` +
      ` | on target ${summary.home.shots_on_target}/${summary.away.shots_on_target}` +
      ` | passes ${summary.home.passes_completed}/${summary.home.passes_attempted}` +
      ` vs ${summary.away.passes_completed}/${summary.away.passes_attempted}` +
      ` | saves ${summary.home.saves}/${summary.away.saves}`
    );
  }
}

const elapsed_s = (Date.now() - started) / 1000;

function avg(values: number[]) {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

const total_goals = results.map((r) => r.home_goals + r.away_goals);
const total_shots = results.map((r) => r.home.shots + r.away.shots);
const total_shots_on_target = results.map((r) => r.home.shots_on_target + r.away.shots_on_target);
const total_saves = results.map((r) => r.home.saves + r.away.saves);
const pass_completion = results.map((r) =>
  (r.home.passes_completed + r.away.passes_completed) /
  (r.home.passes_attempted + r.away.passes_attempted)
);

console.log("");
console.log(`Simulated ${n} match${n === 1 ? "" : "es"} in ${elapsed_s.toFixed(2)}s` +
  ` (${(elapsed_s / n).toFixed(3)}s/match)`);
console.log(`Goals/match:        avg ${avg(total_goals).toFixed(2)}` +
  `, min ${Math.min(...total_goals)}, max ${Math.max(...total_goals)}`);
console.log(`Shots/match:        avg ${avg(total_shots).toFixed(2)}` +
  `, min ${Math.min(...total_shots)}, max ${Math.max(...total_shots)}`);
console.log(`Shots on target:    avg ${avg(total_shots_on_target).toFixed(2)}`);
console.log(`Saves/match:        avg ${avg(total_saves).toFixed(2)}`);
console.log(`Pass completion:    avg ${(avg(pass_completion) * 100).toFixed(1)}%` +
  `, min ${(Math.min(...pass_completion) * 100).toFixed(1)}%` +
  `, max ${(Math.max(...pass_completion) * 100).toFixed(1)}%`);
