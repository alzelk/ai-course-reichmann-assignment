# Chat Summary Log — RouteWise AI Final Project

Date: 2026-06-25  
Workspace: `/Users/alz/ai-course-reichman`

## Initial Request

The user asked to read `instructions.md`, refine the instructions so they are optimized for AI use, and solve the assignment described in `Final Project Instructions.pdf`.

## Assignment Requirements Identified

The PDF required an MBA final project for the “AI Intuition” course, including:

- A selected company or hypothetical company.
- A business problem or opportunity addressed by AI.
- A working prototype.
- A written PDF report with executive summary, company background, technical solution, prototype demo, business analysis, conclusion, next steps, references, and appendices.
- Business analysis including value proposition, costs, market impact, competitive advantage, risks, and financial or strategic analysis.

## Project Concept Created

The project was developed as **RouteWise AI**, a B2B middleware layer that sits between users or enterprise applications and multiple LLMs.

Core idea:

> Use the right model for every task—not the most expensive model for every task.

The product analyzes each request by intent, complexity, business risk, latency preference, expected output length, tool requirements, and image requirements. It then routes the request to the lowest-cost model tier expected to meet the quality and governance threshold.

The concept uses a vehicle-and-fuel analogy:

- Models are vehicles.
- Tokens and inference costs are fuel.
- Mini Cooper = efficient model for routine tasks.
- Toyota Corolla = balanced model for everyday professional work.
- Tractor / Ferrari = frontier model for heavy, ambiguous, or high-risk work.
- A key line used in the report: a 2010 Corolla and a new Ferrari can move at the same speed when both are stuck in traffic, just as many simple prompts do not benefit meaningfully from premium frontier models.

## Files Created or Updated

- `instructions.md` — rewritten as an AI-optimized final project brief.
- `RouteWise_AI_Final_Report.md` — editable written report source.
- `RouteWise_AI_Final_Report.pdf` — final polished PDF report.
- `prototype/index.html` — interactive browser prototype.
- `prototype/styles.css` — prototype visual styling.
- `prototype/router.js` — intent, complexity, risk, model-routing, and cost-estimation logic.
- `prototype/test-router.js` — automated prototype tests.
- `README.md` — usage instructions and deliverable overview.
- `build_report.py` — reproducible PDF builder.

## Prototype Summary

The prototype runs locally without an API key and simulates model routing. It allows a user to:

- Enter a prompt.
- Select business risk.
- Select latency preference.
- Select expected output length.
- Mark whether tools/live data or image understanding are required.

It displays:

- Detected intent.
- Complexity score.
- Risk score.
- Selected model tier and vehicle analogy.
- Routing rationale.
- Estimated selected-route cost.
- Estimated always-frontier baseline cost.
- Estimated savings percentage.
- Governance warnings.

The prototype includes example prompts for routine extraction, business strategy, and high-stakes review.

## Validation Performed

The prototype tests were run successfully:

```bash
node prototype/test-router.js
```

Expected result:

```text
RouteWise router tests passed: 4/4
```

The PDF was generated and rendered to page images for visual QA. The pages were inspected for layout, tables, diagrams, formula rendering, spacing, and clipping.

## PDF Adjustments Made

After the first PDF version, the user requested:

- Use LaTeX for calculations.
- Use a fitting format for flowcharts.

The report was updated to include:

- LaTeX-rendered equations for optimization, request cost, savings, ROI, and payback.
- A vector architecture flowchart.
- A vector routing-decision flowchart.

The user then reported two visual issues:

1. The yellow strategic-question box after section 2.3 overlapped the previous sentence.
2. The optimization formula before section 4.3 looked broken.

Fixes applied:

- Increased spacing around the yellow callout box.
- Split the optimization formula into two clean equations:
  - Objective function.
  - Subject-to constraints.
- Regenerated and visually verified the affected pages.

## Financial Model Summary

Representative enterprise case:

- 1,000,000 requests per month.
- 60% routine requests routed to efficient tier.
- 30% balanced requests routed to balanced tier.
- 10% complex/high-risk requests remain on frontier tier.

Estimated monthly inference cost:

- Always-frontier baseline: `$18,650`
- Routed cost: `$9,440`
- Monthly saving: `$9,210`
- Gross inference-cost reduction: `49.4%`

Customer ROI:

- Annual gross savings: `$110,520`
- RouteWise subscription: `$30,000`
- One-time implementation: `$20,000`
- Net Year-1 benefit: `$60,520`
- ROI: `121%`
- Payback: about `3 months`

## How to Showcase the Prototype

Run a local server from the project directory:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/prototype/
```

Suggested demo flow:

1. Routine extraction prompt → Mini Cooper / efficient model.
2. Business strategy prompt → Corolla / balanced model.
3. High-risk contract review prompt → frontier model plus human-review warning.

Recommended explanation:

> This is an explainable routing simulation. It demonstrates the decision logic and economics without making paid API calls. A production version would use live provider APIs, evaluation datasets, and policy controls.

## Hebrew One-Paragraph Explanation Provided

RouteWise AI היא פלטפורמת תיווך חכמה בין המשתמש לבין מודלי בינה מלאכותית, שמנתחת כל בקשה לפי מטרתה, מורכבותה, רמת הסיכון, דרישות המהירות והיכולות הנדרשות, ולאחר מכן מפנה אותה למודל הזול ביותר שמסוגל לספק את רמת האיכות הרצויה. הרעיון מוסבר באמצעות אנלוגיה לעולם הרכב: משימות פשוטות מתאימות ל״מיני קופר״ חסכונית, משימות מקצועיות שגרתיות ל״טויוטה קורולה״ אמינה, ומשימות מורכבות או רגישות ל״טרקטור״ או ״פרארי״ חזקים ויקרים יותר. כך הארגון אינו משתמש במודל היקר ביותר לכל משימה, מצמצם עלויות שימוש, שומר על איכות התוצאות ומשפר את הבקרה, האבטחה והגמישות בבחירת ספקי AI.

