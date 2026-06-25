# RouteWise AI Final Project

RouteWise AI is a working proof of concept for a middleware layer that routes each prompt to the lowest-cost language model expected to satisfy its quality, risk, latency, and modality requirements.

## Deliverables

- `RouteWise_AI_Final_Report.pdf` — final written submission
- `RouteWise_AI_Final_Report.md` — editable report source
- `instructions.md` — AI-optimized project brief
- `prototype/index.html` — interactive browser demo
- `prototype/router.js` — routing and cost logic
- `prototype/test-router.js` — automated routing tests

## Run the Prototype

Open `prototype/index.html` in a browser. The prototype is intentionally API-free and runs as a transparent simulation.

## Run Tests

```bash
node prototype/test-router.js
```

## Important Limitations

The prototype uses explainable heuristics, not a trained production router. Live deployment would require model evaluations, policy controls, capability and price configuration, provider integrations, audit logs, monitoring, and human review for high-stakes use cases.
