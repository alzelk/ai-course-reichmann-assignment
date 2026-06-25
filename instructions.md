# AI-Optimized Final Project Brief

## Role

Act as a cross-functional team consisting of:

- An AI product strategist
- An LLM systems architect
- A full-stack prototype developer
- A management consultant
- A financial analyst
- A professional business writer

## Objective

Complete the Reichman University MBA “AI Intuition” final project described in `Final Project Instructions.pdf`.

Create a credible business proposal and a working prototype for an AI middleware product that sits between a user or enterprise application and multiple large language models. The middleware must infer each request’s intent, complexity, risk, latency sensitivity, context size, and required modality, then route the request to the lowest-cost model that is expected to satisfy the required quality and policy constraints.

## Product Concept

Use the working product name **RouteWise AI**.

The core promise is:

> Use the right model for every task—not the most expensive model for every task.

Explain the concept through a vehicle-and-fuel analogy:

- Models are vehicles.
- Tokens and inference costs are fuel.
- A small, fast model is a Mini Cooper: efficient for short, routine trips.
- A balanced general model is a Toyota Corolla: dependable for everyday work.
- A deep-reasoning model is a tractor: slower and more expensive, but appropriate for heavy work.
- A frontier model is a Ferrari: powerful, premium, and unnecessary when ordinary traffic limits the practical advantage.
- The key insight is that a 2010 Corolla and a new Ferrari can reach the same destination at nearly the same time when both are stuck in the same traffic. Likewise, many routine prompts receive no meaningful business benefit from a frontier model.

Keep the analogy memorable but professional. Do not imply that expensive models are always wasteful; emphasize fit-for-purpose routing and measurable service levels.

## Company and Business Problem

Define RouteWise AI as a hypothetical B2B software company serving organizations that use multiple generative-AI applications or APIs.

Address these customer pain points:

1. Teams default to one premium model for nearly every request.
2. AI spending is difficult to forecast or allocate by department and use case.
3. Different tasks need different levels of reasoning, latency, context, modality, and safety.
4. Model catalogs and prices change quickly.
5. Vendor lock-in makes optimization and governance harder.
6. Poor routing can reduce quality, create compliance risk, or erase expected savings.

## Required Technical Solution

Build a working browser-based prototype that:

1. Accepts a user prompt.
2. Lets the user specify business risk, latency preference, expected output length, and whether tools or images are needed.
3. Detects intent and estimates complexity using transparent heuristics.
4. Routes the request among at least three model tiers:
   - Efficient / “Mini Cooper”
   - Balanced / “Corolla”
   - Frontier / “Tractor-Ferrari”
5. Displays:
   - Detected intent
   - Complexity and risk scores
   - Selected model and vehicle class
   - Routing rationale
   - Estimated selected-model cost
   - Estimated premium-model baseline cost
   - Estimated savings percentage
   - Escalation or governance warnings
6. Includes representative example prompts and automated tests for the routing logic.
7. Runs locally without requiring an API key. Clearly label estimated model outputs and costs as a routing simulation.

## Routing Principles

The prototype must prioritize quality constraints before cost:

1. Apply hard constraints for safety, modality, context, approved vendors, and data residency.
2. Identify candidate models that can satisfy those constraints.
3. Predict task difficulty and expected quality.
4. Select the cheapest candidate above the quality threshold.
5. Escalate to a stronger model when confidence is low or risk is high.
6. Log the decision and allow administrators to override it.

Avoid claiming that a keyword classifier is production-ready. Present it as an explainable proof of concept and describe how a production version would use trained routing models, offline evaluations, online feedback, and policy controls.

## Business Analysis Requirements

Include:

- Customer segments and buyer personas
- Value proposition
- Competitive positioning
- Revenue model and suggested pricing
- Development, implementation, and maintenance costs
- Three-year financial projection
- ROI and break-even analysis for a representative enterprise customer
- Sensitivity analysis for conservative, base, and upside scenarios
- Market-entry strategy
- Key risks: routing errors, model drift, privacy, security, vendor dependency, user adoption, and adverse selection
- Mitigations and governance controls

State every financial assumption explicitly. Distinguish sourced facts from team assumptions. Use current official model prices only as an illustrative snapshot and note the access date.

## Required Written Deliverable

Create a polished PDF report with this structure:

1. Executive Summary
2. Company Background and Problem Definition
3. Solution Overview and Vehicle Analogy
4. Technical Architecture and Routing Logic
5. Prototype Demonstration and Test Results
6. Business Model and Go-to-Market Strategy
7. Financial Analysis
8. Competitive Advantage and Strategic Impact
9. Risks, Ethics, Privacy, and Governance
10. Limitations and Next Steps
11. Conclusion
12. References
13. Appendices

Include at least:

- One architecture flow diagram
- One model-tier comparison table
- One prototype test-results table
- One three-year financial table
- One customer ROI or break-even table
- One sensitivity analysis

## Evidence and Quality Standards

- Cite official provider documentation for model pricing and capabilities.
- Cite all external frameworks and benchmarks.
- Date all volatile pricing information.
- Do not invent market-size statistics.
- Clearly label estimates, assumptions, and simulated results.
- Ensure the prototype, calculations, tables, and narrative use the same assumptions.
- Use concise MBA-level writing with clear headings and professional visuals.
- Acknowledge AI assistance in accordance with the academic-integrity requirement.

## Final Output Files

Produce:

- `RouteWise_AI_Final_Report.pdf`
- `RouteWise_AI_Final_Report.md`
- `prototype/index.html`
- `prototype/styles.css`
- `prototype/router.js`
- `prototype/test-router.js`
- `README.md`

Before completion:

1. Run the routing tests.
2. Verify every required report section exists.
3. Verify financial calculations are internally consistent.
4. Render and visually inspect the PDF.
5. Confirm the prototype can be opened and used locally.
