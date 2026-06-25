# RouteWise AI

## The intelligent traffic controller for enterprise AI

**Reichman University · MBA Program · AI Intuition**  
**Final Project Report · June 21, 2026**

> **Core proposition:** Use the right model for every task—not the most expensive model for every task.

---

## 1. Executive Summary

Enterprises are adopting generative AI faster than they are developing the operational discipline to manage it. Many teams connect an application to one premium large language model and send every request to that model, regardless of whether the task is a simple classification, a routine rewrite, a complex strategic analysis, or a high-risk legal review. This approach is easy to implement, but it creates avoidable cost, unpredictable budgets, vendor dependence, and weak governance.

RouteWise AI is a hypothetical B2B software company that provides an intelligent middleware layer between users or enterprise applications and language-model providers. For each request, RouteWise evaluates intent, complexity, business risk, latency preference, context size, modality, tool requirements, and policy constraints. It then selects the lowest-cost approved model expected to satisfy a defined quality threshold. High-risk or uncertain requests are escalated to stronger models and, where appropriate, human review.

The product is explained through a vehicle analogy. Models are vehicles and tokens are fuel. A Mini Cooper is efficient for short routine trips. A Toyota Corolla is dependable for everyday professional work. A tractor is appropriate for heavy work, while a Ferrari offers premium performance when the task can use it. Yet a 2010 Corolla and a new Ferrari move at nearly the same speed when both are stuck in the same traffic. Likewise, a frontier model may produce little additional business value for a constrained task such as classification or extraction.

The working prototype included with this report accepts a prompt and business constraints, applies an explainable routing policy, recommends one of three current OpenAI model tiers, and estimates cost relative to an always-premium baseline. Four automated tests verify routine, balanced, high-stakes, and latency-sensitive routes.

In the representative enterprise case, a customer processes one million requests per month. Routing 60% of requests to an efficient model, 30% to a balanced model, and 10% to a frontier model reduces estimated monthly inference cost from **$18,650 to $9,440**, a **49.4% gross reduction**. After a $2,500 monthly RouteWise subscription and a $20,000 implementation cost, the customer earns an estimated **121% first-year ROI** and reaches payback in approximately **three months**.

RouteWise should initially target AI-intensive mid-market and enterprise customers with fragmented model usage, measurable API expenditure, and a need for governance. The recommended commercial model combines a platform subscription with gain-sharing or usage tiers. The strategic moat is not a static classifier; it is the customer-specific evaluation data, policy configuration, routing feedback, and cross-provider operating layer accumulated over time.

---

## 2. Company Background and Problem Definition

### 2.1 Company

RouteWise AI is a proposed enterprise software company in the AI infrastructure and FinOps category. Its customers are organizations that operate multiple generative-AI workflows across customer support, software development, knowledge management, marketing, finance, and internal productivity.

The buyer is typically a Chief Information Officer, Chief Technology Officer, Head of AI, platform-engineering leader, or FinOps executive. Daily users include developers, product teams, AI governance teams, and business-unit owners.

### 2.2 The Problem

The enterprise AI stack contains an economic mismatch: the model choice is often made once by a developer, while task difficulty varies on every request.

This creates six problems:

1. **Premium-model default.** Routine requests consume frontier-model capacity without receiving a proportional quality benefit.
2. **Weak cost allocation.** Spending is difficult to attribute by department, use case, workflow, or business outcome.
3. **Different service needs.** A short rewrite, a support response, a multimodal analysis, and a legal review require different reasoning depth, latency, context, and controls.
4. **Rapid market change.** Model catalogs, capabilities, context limits, and prices change frequently.
5. **Vendor lock-in.** Applications become coupled to one provider’s model names, APIs, prompts, and pricing structure.
6. **Quality and governance risk.** An optimization system that chooses a model solely on price can create errors, privacy exposure, or compliance failures.

Official pricing pages illustrate the economic spread. As of June 21, 2026, OpenAI listed standard text prices of $0.75 input and $4.50 output per million tokens for GPT-5.4 mini, $2.50 and $15 for GPT-5.4, and $5 and $30 for GPT-5.5. The output-token price of the frontier tier was therefore 6.7 times the mini tier. Anthropic and Google publish their own model-specific price schedules, reinforcing the need for a configurable rather than hard-coded routing layer.

### 2.3 Strategic Opportunity

RouteWise turns model selection from an application-level technical choice into a continuously optimized business control. The product can reduce inference expenditure, enforce policy, improve reliability through fallback routing, and give management a unified view of AI consumption.

The central business question is not “Which model is best?” It is:

> Which approved model is sufficient for this request, under these quality, risk, latency, and cost constraints?

---

## 3. Solution Overview and Vehicle Analogy

### 3.1 Product Promise

RouteWise operates as an intelligent traffic controller. Applications send one standardized request to RouteWise. RouteWise analyzes the request, applies policy and quality constraints, selects a route, calls the chosen provider, and records the result.

The proposed product has four modules:

- **Routing Gateway:** a unified API compatible with enterprise applications.
- **Policy Engine:** approved vendors, data residency, model restrictions, cost limits, and escalation rules.
- **Evaluation Engine:** offline benchmark tests and online quality feedback by use case.
- **Observability Console:** spend, quality, latency, failure, savings, and override reporting.

### 3.2 The Fleet

| Vehicle class | Prototype model | Best-fit work | Routing principle |
|---|---|---|---|
| Mini Cooper | GPT-5.4 mini | Classification, extraction, rewriting, short support answers | Choose when the task is bounded, low risk, and speed-sensitive |
| Toyota Corolla | GPT-5.4 | Professional writing, coding, analysis, and everyday business decisions | Choose when nuance matters but frontier reasoning is unnecessary |
| Tractor / Ferrari | GPT-5.5 | Complex multi-step reasoning, ambiguity, high-stakes review, heavy workloads | Choose when task difficulty or risk justifies premium capability |

The analogy does not claim that smaller models are always better or that frontier models are wasteful. A tractor is valuable when the load is heavy. A Ferrari is valuable when performance can be used. RouteWise’s role is to match capability to the job and provide evidence for that decision.

### 3.3 Value Proposition

RouteWise offers customers five sources of value:

- **Lower cost:** reduce unnecessary use of premium models.
- **Better governance:** apply routing, privacy, and approval policies before requests leave the organization.
- **Higher resilience:** fall back across models or providers during outages and rate limits.
- **Faster experimentation:** compare new models against customer-specific evaluations without rewriting applications.
- **Management visibility:** allocate AI spend and quality metrics by team and workflow.

---

## 4. Technical Architecture and Routing Logic

### 4.1 Request Flow

[[FLOWCHART:architecture]]

### 4.2 Decision Sequence

The production routing logic should follow a constraint-first sequence:

1. **Normalize the request.** Record the task, expected output, user, department, data classification, latency objective, and tool needs.
2. **Apply hard constraints.** Remove models that fail modality, context, security, data-residency, vendor, or availability requirements.
3. **Estimate difficulty.** Predict intent, complexity, ambiguity, domain, and required reasoning depth.
4. **Predict quality.** Use customer-specific evaluations to estimate whether each candidate will meet the service-level objective.
5. **Optimize expected cost.** Choose the least expensive candidate above the required quality threshold, including token, latency, retry, and failure costs.
6. **Escalate when uncertain.** Use a stronger model or human review for high-risk requests, low routing confidence, or failed validation.
7. **Learn from outcomes.** Store quality signals, user corrections, overrides, latency, and cost for future policy updates.

[[FLOWCHART:routing]]

An illustrative objective function is:

$$
\min_{m \in \mathcal{M}}
\left[
C_{\mathrm{tokens},m}+C_{\mathrm{retry},m}
+\lambda_L L_m+\lambda_E E_m
\right]
$$

subject to:

$$
\widehat{Q}_m \geq Q_{\min},
\qquad P_m=1,
\qquad R_{\mathrm{required}} \subseteq R_m
$$

Here, *m* is a candidate model, *Q-hat* is predicted quality, *P* indicates policy compliance, and *R* represents available capabilities.

### 4.3 Prototype Implementation

The browser prototype is intentionally transparent and API-free. It uses:

- Pattern matching to detect task intent.
- Prompt length and complexity terms to estimate difficulty.
- User-selected business risk and latency preference.
- Tool and image requirements as capability signals.
- Three model tiers with the official OpenAI price snapshot accessed June 21, 2026.
- Cost estimates based on input and expected output tokens.
- Warnings for high-stakes work, tool permissions, and modality checks.

This is a proof of concept, not a production router. A keyword heuristic cannot reliably predict model quality, hidden task complexity, provider availability, or regulatory suitability. A production system would replace or supplement heuristics with a trained classifier, semantic embeddings, use-case evaluations, confidence calibration, and live provider metadata.

### 4.4 Production Technology

A practical initial architecture would include:

- TypeScript or Python API gateway.
- PostgreSQL for tenant configuration and audit records.
- Redis for caching and rate controls.
- Encrypted secrets vault for provider credentials.
- OpenTelemetry-compatible traces.
- Configurable provider adapters.
- Evaluation datasets and scheduled benchmark jobs.
- Policy-as-code rules with version history.
- Private-cloud or virtual-private-cloud deployment for regulated customers.

---

## 5. Prototype Demonstration and Test Results

### 5.1 User Experience

The user enters a task and selects business risk, latency preference, expected output length, and whether the task requires tools or images. The interface displays:

- Detected intent.
- Complexity and risk scores.
- Recommended model and vehicle class.
- Routing rationale.
- Estimated selected-route cost.
- Estimated always-frontier cost.
- Estimated percentage savings.
- Governance warnings.

The prototype can be opened locally at `prototype/index.html`. No API key or network connection is required.

### 5.2 Test Results

| Test | Input summary | Expected route | Result |
|---|---|---|---|
| Routine extraction | Summarize an email in five bullets | Efficient / Mini Cooper | Passed |
| Business strategy | Compare market-entry strategies with assumptions | Balanced / Corolla | Passed |
| High-stakes review | Review contract, privacy, compliance, and security risks | Frontier / Tractor-Ferrari + warnings | Passed |
| Fast routine rewrite | Rewrite a paragraph in a friendlier tone | Efficient / Mini Cooper | Passed |

Automated result: **4 of 4 routing tests passed.**

### 5.3 Prototype Learning

The prototype demonstrates the economic logic and the importance of transparent routing explanations. It also reveals a key implementation lesson: route selection is easy to demonstrate but difficult to validate. The commercial product therefore depends on rigorous evaluation and governance, not merely a model-selection rule.

---

## 6. Business Model and Go-to-Market Strategy

### 6.1 Customer Segments

Priority segments:

1. Mid-market and enterprise software companies with measurable LLM API spend.
2. Financial-services, legal, healthcare, and professional-services organizations needing stronger governance.
3. AI-native companies that use multiple providers and need reliability or cost control.
4. Systems integrators and cloud consultancies that can embed RouteWise in transformation projects.

### 6.2 Pricing

Recommended pricing combines predictability and value sharing:

- **Pilot:** $15,000 for an eight-week evaluation, credited against implementation.
- **Platform:** $2,500–$15,000 per month based on request volume, environments, and governance features.
- **Implementation:** $20,000–$100,000 based on integrations and compliance requirements.
- **Optional gain share:** 10%–20% of independently verified savings above an agreed baseline.

The commercial contract should define a baseline carefully. Without this safeguard, customers may route only difficult traffic through RouteWise while keeping easy traffic elsewhere, creating adverse selection and making measured savings misleading.

### 6.3 Go-to-Market

The initial sales motion should be diagnostic rather than platform-led:

1. Import 30–60 days of anonymized usage logs.
2. Replay traffic through a shadow-routing simulation.
3. Quantify savings, quality changes, and policy gaps.
4. Run a limited production pilot with automatic fallback.
5. Expand across workflows after agreed service levels are met.

This “prove before migration” approach reduces perceived switching risk and gives the customer a finance-approved business case.

### 6.4 Competitive Positioning

RouteWise competes indirectly with provider-native model selection, API gateways, observability tools, AI FinOps dashboards, and internal platform teams.

Its differentiation is the combination of:

- Vendor-neutral routing.
- Customer-specific quality evaluations.
- Financial optimization tied to service-level constraints.
- Governance and auditability.
- Fast integration through a unified endpoint.

The strongest long-term moat is a customer’s accumulated routing dataset: which model performed acceptably for which request, under which policy and business outcome. This data improves optimization and increases switching costs without requiring ownership of a foundation model.

---

## 7. Financial Analysis

All values are management assumptions unless explicitly identified as provider prices. They are illustrative and must be validated in a pilot.

### 7.1 Representative Customer Assumptions

- One million requests per month.
- Mix: 60% routine, 30% balanced, 10% complex or high risk.
- Routine request: 700 input and 250 output tokens.
- Balanced request: 1,200 input and 600 output tokens.
- Complex request: 2,500 input and 1,200 output tokens.
- Baseline: every request uses GPT-5.5.
- RouteWise scenario: routine uses GPT-5.4 mini, balanced uses GPT-5.4, complex remains on GPT-5.5.
- Standard OpenAI prices accessed June 21, 2026; cached input, batch, tools, discounts, retries, taxes, and regional premiums are excluded.

### 7.2 Monthly Inference Cost

| Workload | Requests | Always GPT-5.5 | Routed cost | Monthly saving |
|---|---:|---:|---:|---:|
| Routine | 600,000 | $6,600 | $990 | $5,610 |
| Balanced | 300,000 | $7,200 | $3,600 | $3,600 |
| Complex / high risk | 100,000 | $4,850 | $4,850 | $0 |
| **Total** | **1,000,000** | **$18,650** | **$9,440** | **$9,210** |

Gross inference savings are **49.4%**, or **$110,520 per year**.

### 7.3 Customer ROI

| Item | Year 1 |
|---|---:|
| Gross inference savings | $110,520 |
| RouteWise subscription | ($30,000) |
| One-time implementation | ($20,000) |
| **Net Year-1 benefit** | **$60,520** |
| **ROI on RouteWise investment** | **121%** |
| **Payback period** | **Approximately 3 months** |

$$
\mathrm{ROI}_{1}=\frac{S_{\mathrm{annual}}-F_{\mathrm{subscription}}-I_{\mathrm{implementation}}}
{F_{\mathrm{subscription}}+I_{\mathrm{implementation}}}
=\frac{110{,}520-30{,}000-20{,}000}{50{,}000}=121.0\%
$$

$$
T_{\mathrm{payback}}=
\frac{I_{\mathrm{implementation}}}{S_{\mathrm{monthly}}-F_{\mathrm{monthly}}}
=\frac{20{,}000}{9{,}210-2{,}500}=2.98\ \mathrm{months}
$$

The calculation excludes potential value from outage resilience, engineering time, governance, and faster provider migration. It also excludes quality failures, which must be controlled through service-level thresholds and fallback.

### 7.4 RouteWise Three-Year Projection

| $ millions except customers | Year 1 | Year 2 | Year 3 |
|---|---:|---:|---:|
| Average customers | 20 | 75 | 180 |
| Revenue | 0.72 | 3.15 | 8.64 |
| Product and engineering | (0.60) | (0.90) | (1.40) |
| Sales and marketing | (0.30) | (0.85) | (2.00) |
| Cloud, security, and support | (0.12) | (0.35) | (0.90) |
| General and administrative | (0.18) | (0.40) | (0.80) |
| **EBITDA** | **(0.48)** | **0.65** | **3.54** |

Assumptions:

- Average annual revenue per customer rises from $36,000 to $48,000 as governance and enterprise features expand.
- Gross margin improves with scale because the customer usually pays provider inference costs directly.
- The company reaches operating break-even during Year 2.
- The projection excludes fundraising costs, taxes, stock compensation, and working-capital effects.

### 7.5 Year-3 Sensitivity

| Scenario | Customers | Average annual revenue | Revenue | Operating cost | EBITDA |
|---|---:|---:|---:|---:|---:|
| Conservative | 100 | $36,000 | $3.60M | $3.20M | $0.40M |
| Base | 180 | $48,000 | $8.64M | $5.10M | $3.54M |
| Upside | 280 | $54,000 | $15.12M | $7.60M | $7.52M |

The most sensitive variables are customer acquisition, verified savings, renewal, support burden, and the proportion of traffic that can safely move to lower-cost models.

---

## 8. Competitive Advantage and Strategic Impact

### 8.1 Customer Advantage

RouteWise creates a structural cost advantage only when savings persist without lowering business quality. This requires a closed loop between finance and model evaluation. The platform should report both “dollars saved” and “quality budget consumed.”

Strategically, the product gives customers:

- Purchasing leverage across providers.
- Reduced dependency on model-specific application code.
- A controlled path to adopt new models.
- Standardized governance across business units.
- Better forecasting and internal chargeback.

### 8.2 RouteWise Advantage

Provider-neutrality is valuable but not sufficient; gateways can be copied. Defensibility must come from:

- Customer-specific evaluation datasets.
- Historical routing and outcome data.
- Policy templates for regulated workflows.
- Integration depth in enterprise platforms.
- Trust earned through transparent decisions and auditability.

### 8.3 Key Performance Indicators

Management should track:

- Gross and net cost savings.
- Quality pass rate by use case.
- Escalation and override rate.
- Routing-confidence calibration.
- Latency and availability.
- Cost per successful task, not only cost per token.
- Customer renewal and expansion.
- Number of production workflows per customer.

---

## 9. Risks, Ethics, Privacy, and Governance

### 9.1 Principal Risks

| Risk | Business consequence | Mitigation |
|---|---|---|
| Under-routing | Lower-quality answer causes financial, legal, or customer harm | Use quality thresholds, confidence-based escalation, validation, and human review |
| Over-routing | Savings disappear because too much traffic remains on premium models | Tune policies using evaluations and transparent cost reporting |
| Model drift | Provider updates change quality or behavior | Pin versions where possible and run scheduled regression tests |
| Price volatility | Savings assumptions become outdated | Maintain live pricing configuration and contractually define baselines |
| Privacy and security | Sensitive prompts reach an unapproved provider or are exposed in logs | Data classification, encryption, minimal retention, provider allowlists, and tenant isolation |
| Prompt injection and excessive agency | Malicious content influences tools or downstream actions | Input isolation, output validation, least-privilege tools, and approval gates |
| Vendor dependency | Provider outage or commercial change disrupts service | Multi-provider adapters, fallback policies, and portability tests |
| User mistrust | Employees bypass routing or dispute model choices | Explain decisions, allow governed overrides, and publish service levels |
| Adverse selection | Customer sends only difficult traffic through the platform | Define traffic scope and baseline measurement in contracts |

### 9.2 Governance Framework

RouteWise should align governance to the NIST AI Risk Management Framework and its generative-AI profile. The operating model should cover:

- **Govern:** ownership, policies, approved providers, and accountability.
- **Map:** use-case context, affected stakeholders, data sensitivity, and harm scenarios.
- **Measure:** evaluations, red-team tests, quality, cost, latency, and confidence.
- **Manage:** escalation, incident response, model retirement, and corrective action.

OWASP guidance is also relevant. Prompt injection, sensitive information disclosure, insecure output handling, denial-of-service cost exposure, and excessive agency are directly applicable to an LLM gateway.

### 9.3 Ethical Principle

Cost optimization must never silently lower the standard of care for users. High-stakes use cases should be routed according to potential harm, not willingness to pay. The platform must expose when a response is automated, record material overrides, and avoid using sensitive personal attributes as hidden routing features.

---

## 10. Limitations and Next Steps

### 10.1 Current Limitations

- The prototype uses heuristic rules rather than a trained or evaluated router.
- Token counts are approximations.
- Only three OpenAI text tiers are priced in the demo.
- The prototype does not make live provider calls.
- It does not test actual response quality.
- It excludes cached-input discounts, batch processing, negotiated rates, retries, tool fees, regional pricing, and multimodal tokenization.
- Financial projections are illustrative management assumptions, not audited forecasts.

### 10.2 Development Roadmap

**Phase 1 — Shadow routing (0–3 months)**

- Connect customer logs without changing production responses.
- Build a use-case taxonomy and evaluation dataset.
- Compare routes, quality, latency, and potential savings.

**Phase 2 — Guarded production (3–6 months)**

- Route low-risk traffic with automatic fallback.
- Add provider capability and pricing configuration.
- Launch observability, cost allocation, and policy audit logs.

**Phase 3 — Enterprise platform (6–12 months)**

- Add multi-provider routing, private deployment, data-residency rules, and role-based controls.
- Introduce trained quality prediction and confidence calibration.
- Provide finance dashboards and savings verification.

**Phase 4 — Outcome optimization (12+ months)**

- Optimize for cost per successful business outcome.
- Add workflow-level routing, tool selection, and controlled agent execution.
- Build industry-specific policy and evaluation packs.

---

## 11. Conclusion

The generative-AI market is moving from experimentation toward operational discipline. As model choice expands, “always use the best model” becomes financially inefficient and strategically brittle. RouteWise AI addresses this problem by treating model selection as a dynamic, governed decision.

The prototype demonstrates the core mechanism: classify the request, apply risk and capability constraints, select an appropriate model tier, and make the economic trade-off visible. The representative analysis suggests that an enterprise with one million monthly requests could reduce inference cost by approximately 49.4% before platform fees while preserving the strongest model for the most difficult 10% of traffic.

The opportunity is attractive, but execution depends on trust. RouteWise must prove that savings do not come at the expense of quality, privacy, or accountability. If the company builds robust evaluations, transparent policies, and customer-specific routing data, it can become a valuable control layer in the enterprise AI stack.

---

## 12. References

1. OpenAI. “API Pricing.” Accessed June 21, 2026. https://openai.com/api/pricing/
2. Anthropic. “Pricing — Claude API Docs.” Accessed June 21, 2026. https://platform.claude.com/docs/en/about-claude/pricing
3. Google. “Gemini Developer API Pricing.” Accessed June 21, 2026. https://ai.google.dev/gemini-api/docs/pricing
4. National Institute of Standards and Technology. “AI Risk Management Framework.” Accessed June 21, 2026. https://www.nist.gov/itl/ai-risk-management-framework
5. NIST. “Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile.” July 2024. https://doi.org/10.6028/NIST.AI.600-1
6. OWASP Foundation. “Top 10 for Large Language Model Applications.” Accessed June 21, 2026. https://owasp.org/www-project-top-10-for-large-language-model-applications/

---

## 13. Appendices

### Appendix A — Prototype Files

- `prototype/index.html`: interactive user interface.
- `prototype/styles.css`: responsive visual design.
- `prototype/router.js`: intent, complexity, risk, route, and cost logic.
- `prototype/test-router.js`: automated routing tests.

### Appendix B — Cost Formula

$$
C_{\mathrm{request},m}
=\frac{T_{\mathrm{in}}P_{\mathrm{in},m}+T_{\mathrm{out}}P_{\mathrm{out},m}}
{10^{6}}
$$

$$
\mathrm{Savings}\%=
\left(1-\frac{C_{\mathrm{routed}}}{C_{\mathrm{frontier}}}\right)\times100
$$

### Appendix C — Academic Integrity and AI Assistance

This project was developed with AI assistance for research synthesis, writing, software prototyping, calculation support, and document production. The team remains responsible for reviewing the logic, validating assumptions, understanding the prototype, citing sources, and presenting the work in accordance with Reichman University’s academic-integrity requirements.
