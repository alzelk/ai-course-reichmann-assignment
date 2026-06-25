(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.RouteWise = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const MODELS = {
    efficient: {
      id: "gpt-5.4-mini",
      label: "Efficient",
      vehicle: "Mini Cooper",
      inputPrice: 0.75,
      outputPrice: 4.5,
      description: "Fast, economical routing for routine and well-scoped work.",
    },
    balanced: {
      id: "gpt-5.4",
      label: "Balanced",
      vehicle: "Toyota Corolla",
      inputPrice: 2.5,
      outputPrice: 15,
      description: "Reliable general-purpose routing for nuanced professional work.",
    },
    frontier: {
      id: "gpt-5.5",
      label: "Frontier",
      vehicle: "Tractor / Ferrari",
      inputPrice: 5,
      outputPrice: 30,
      description: "Premium reasoning for high-stakes, ambiguous, or multi-step work.",
    },
  };

  const INTENTS = [
    ["Coding & technical", /\b(code|debug|function|api|sql|python|javascript|algorithm|architecture)\b/i],
    ["Analysis & strategy", /\b(analy[sz]e|strategy|forecast|scenario|recommend|trade-?off|market|investment)\b/i],
    ["Legal, financial, or compliance", /\b(contract|legal|regulation|compliance|financial|audit|tax|medical|diagnosis)\b/i],
    ["Creative generation", /\b(write|draft|story|campaign|slogan|creative|brainstorm)\b/i],
    ["Summarization & extraction", /\b(summarize|extract|classify|translate|rewrite|format)\b/i],
  ];

  const COMPLEXITY_TERMS = /\b(multi-step|compare|evaluate|optimi[sz]e|root cause|proof|derive|architecture|strategy|simulation|sensitivity|ambiguous)\b/gi;
  const HIGH_STAKES_TERMS = /\b(legal|contract|medical|diagnosis|financial advice|audit|compliance|security|privacy|personal data)\b/i;

  function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
  }

  function estimateInputTokens(prompt) {
    return Math.max(12, Math.ceil(prompt.trim().length / 4));
  }

  function detectIntent(prompt) {
    for (const [intent, pattern] of INTENTS) {
      if (pattern.test(prompt)) return intent;
    }
    return "General assistance";
  }

  function scoreComplexity(prompt, options) {
    let score = 18;
    const wordCount = prompt.trim().split(/\s+/).filter(Boolean).length;
    score += Math.min(24, Math.floor(wordCount / 12) * 4);
    score += Math.min(24, ((prompt.match(COMPLEXITY_TERMS) || []).length) * 6);
    if (prompt.includes("\n")) score += 5;
    if (options.needsTools) score += 10;
    if (options.needsVision) score += 12;
    if (Number(options.outputTokens) > 1200) score += 8;
    return clamp(score, 0, 100);
  }

  function scoreRisk(prompt, selectedRisk) {
    const base = { low: 18, medium: 48, high: 78 }[selectedRisk] || 18;
    return clamp(base + (HIGH_STAKES_TERMS.test(prompt) ? 18 : 0), 0, 100);
  }

  function calculateCost(model, inputTokens, outputTokens) {
    return ((inputTokens * model.inputPrice) + (outputTokens * model.outputPrice)) / 1_000_000;
  }

  function routeRequest(prompt, options = {}) {
    const normalized = {
      risk: options.risk || "low",
      latency: options.latency || "balanced",
      outputTokens: Number(options.outputTokens) || 500,
      needsTools: Boolean(options.needsTools),
      needsVision: Boolean(options.needsVision),
    };

    const inputTokens = estimateInputTokens(prompt);
    const complexity = scoreComplexity(prompt, normalized);
    const risk = scoreRisk(prompt, normalized.risk);
    const intent = detectIntent(prompt);
    const warnings = [];
    let tier = "efficient";

    if (complexity >= 68 || risk >= 75) {
      tier = "frontier";
    } else if (complexity >= 38 || risk >= 42 || normalized.needsTools || normalized.needsVision) {
      tier = "balanced";
    }

    if (normalized.latency === "fast" && tier === "balanced" && risk < 55 && complexity < 58) {
      tier = "efficient";
    }

    if (HIGH_STAKES_TERMS.test(prompt) || risk >= 75) {
      warnings.push("Human review and policy checks are required before acting on this output.");
    }
    if (normalized.needsVision) {
      warnings.push("Confirm that the selected production model supports the required image modality.");
    }
    if (normalized.needsTools) {
      warnings.push("Tool permissions must be scoped and logged in production.");
    }

    const selected = MODELS[tier];
    const baseline = MODELS.frontier;
    const selectedCost = calculateCost(selected, inputTokens, normalized.outputTokens);
    const baselineCost = calculateCost(baseline, inputTokens, normalized.outputTokens);
    const savingsPercent = baselineCost === 0 ? 0 : (1 - selectedCost / baselineCost) * 100;

    const rationale = [
      `${intent} intent`,
      `${complexity}/100 complexity`,
      `${risk}/100 risk`,
      normalized.latency === "fast" ? "latency prioritized" : "balanced latency",
      tier === "frontier" ? "premium reasoning threshold reached" : "quality threshold met at lower cost",
    ];

    return {
      intent,
      complexity,
      risk,
      tier,
      selected,
      inputTokens,
      outputTokens: normalized.outputTokens,
      selectedCost,
      baselineCost,
      savingsPercent,
      rationale,
      warnings,
    };
  }

  return { MODELS, calculateCost, detectIntent, estimateInputTokens, routeRequest, scoreComplexity, scoreRisk };
});
