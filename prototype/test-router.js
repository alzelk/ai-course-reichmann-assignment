const assert = require("node:assert/strict");
const { routeRequest } = require("./router.js");

const routine = routeRequest("Summarize this email in five bullets.", {
  risk: "low",
  outputTokens: 250,
});
assert.equal(routine.tier, "efficient");
assert.ok(routine.savingsPercent > 70);

const strategy = routeRequest(
  "Compare three market-entry strategies and recommend one using explicit assumptions and trade-offs.",
  { risk: "medium", outputTokens: 600 }
);
assert.equal(strategy.tier, "balanced");

const highStakes = routeRequest(
  "Review this enterprise contract for legal, privacy, compliance, and security risks before signature.",
  { risk: "high", outputTokens: 1500, needsTools: true }
);
assert.equal(highStakes.tier, "frontier");
assert.ok(highStakes.warnings.length >= 2);

const fastRoutine = routeRequest("Rewrite this paragraph in a friendlier tone.", {
  risk: "low",
  latency: "fast",
  outputTokens: 250,
});
assert.equal(fastRoutine.tier, "efficient");

console.log("RouteWise router tests passed: 4/4");
