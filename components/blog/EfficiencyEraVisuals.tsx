"use client";

import { useMemo, useState } from "react";
import { Gauge, Route, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const benchmarkBars = [
  { label: "GPT-4 Turbo", score: 86.4, cost: "highest", fit: "hard synthesis", tone: "bg-[#f2ece2]" },
  { label: "Llama 3 70B", score: 82, cost: "high", fit: "broad open deployment", tone: "bg-[#ddd6ca]" },
  { label: "Phi-3 Medium", score: 78, cost: "medium", fit: "general production tasks", tone: "bg-[#c8c1b4]" },
  { label: "Mixtral 8x7B", score: 70.6, cost: "sparse", fit: "MoE cost-performance", tone: "bg-[#b2aba0]" },
  { label: "Phi-3 Mini", score: 68.8, cost: "low", fit: "phone-class assistants", tone: "bg-[#98928b]" },
  { label: "Gemma 7B", score: 64.3, cost: "low", fit: "fast bounded jobs", tone: "bg-[#7d7973]" },
];

const scatterPoints = [
  { x: 12, y: 80, label: "2B", fit: "filters and extractors", cost: "tiny", color: "rgba(242,236,226,0.72)" },
  { x: 22, y: 58, label: "4B", fit: "on-device assistants", cost: "very low", color: "rgba(242,236,226,0.72)" },
  { x: 35, y: 50, label: "7B", fit: "fast RAG answers", cost: "low", color: "rgba(221,214,202,0.78)" },
  { x: 48, y: 32, label: "14B", fit: "balanced specialist", cost: "medium", color: "rgba(200,193,180,0.8)" },
  { x: 67, y: 22, label: "70B", fit: "broad open model", cost: "high", color: "rgba(178,171,160,0.82)" },
  { x: 90, y: 14, label: "1T+", fit: "frontier escalation", cost: "highest", color: "rgba(242,236,226,0.9)" },
];

const tokenDots = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  top: 14 + (index % 6) * 12,
  delay: (index % 10) * 0.16,
  size: index % 4 === 0 ? 7 : 5,
}));

export function EfficiencyHeroVisual() {
  return (
    <div className="space-y-6 border-l border-white/10 pl-6">
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "280x", label: "lower GPT-3.5-level query cost" },
          { value: "3.8B", label: "phone-class Phi-3 Mini" },
          { value: "2-bit", label: "on-device quantization frontier" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="border-l border-white/10 pl-3"
          >
            <p className="font-[var(--font-serif)] text-xl text-[#f2ece2]">{item.value}</p>
            <p className="mt-1 text-xs leading-5 text-white/44">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-3 border-t border-white/8 pt-5">
        {benchmarkBars.slice(0, 4).map((bar, index) => (
          <div key={bar.label}>
            <div className="mb-1 flex items-center justify-between text-[11px] text-white/56">
              <span className="font-[var(--font-mono)] uppercase tracking-[0.12em]">{bar.label}</span>
              <span>{bar.score}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${bar.score}%` }}
                transition={{ duration: 0.9, delay: 0.15 + index * 0.1, ease: "easeOut" }}
                className={`h-full rounded-full ${bar.tone}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EfficiencyBenchmarkBars() {
  const [active, setActive] = useState(benchmarkBars[2]);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
      <div className="space-y-3">
        {benchmarkBars.map((bar, index) => {
          const isActive = active.label === bar.label;
          return (
            <button
              key={bar.label}
              type="button"
              onClick={() => setActive(bar)}
              className={`grid w-full grid-cols-[124px_minmax(0,1fr)_48px] items-center gap-4 border-l px-3 py-2 text-left transition sm:grid-cols-[150px_minmax(0,1fr)_48px] ${
                isActive ? "border-white/70 bg-white/[0.055]" : "border-white/8 hover:border-white/22 hover:bg-white/[0.03]"
              }`}
            >
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-white/58 sm:text-[11px]">
                {bar.label}
              </p>
              <div className="h-3 overflow-hidden rounded-full bg-white/6">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.score}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className={`h-full rounded-full ${bar.tone}`}
                />
              </div>
              <p className="font-[var(--font-mono)] text-[11px] text-white/64">{bar.score}%</p>
            </button>
          );
        })}
      </div>

      <motion.div
        key={active.label}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-white/10 bg-white/[0.035] p-4"
      >
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/40">
          Selected model
        </p>
        <p className="mt-3 font-[var(--font-serif)] text-2xl text-[#f4efe7]">{active.label}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="border-t border-white/10 pt-3">
            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-white/34">Cost</p>
            <p className="mt-1 text-white/72">{active.cost}</p>
          </div>
          <div className="border-t border-white/10 pt-3">
            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-white/34">Best fit</p>
            <p className="mt-1 text-white/72">{active.fit}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function EfficiencyScatterField() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(scatterPoints[3]);

  return (
    <div className="relative h-[22rem] overflow-hidden border-y border-white/8 bg-white/[0.02]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-4 top-4 z-10">
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/38">
          Click a footprint
        </p>
        <p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/58">
          {active.label} models are strongest for {active.fit}; serving cost is {active.cost}.
        </p>
      </div>
      <div className="absolute bottom-4 left-4 z-10 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-white/30">
        Lower left: cheaper and faster
      </div>
      <svg viewBox="0 0 100 100" className="relative h-full w-full">
        <path
          d="M8 78 C 24 74, 33 61, 48 47 S 72 26, 92 16"
          fill="none"
          stroke="rgba(242,236,226,0.28)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        {scatterPoints.map((point, index) => (
          <g
            key={point.label}
            role="button"
            tabIndex={0}
            className="cursor-pointer"
            onClick={() => setActive(point)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setActive(point);
              }
            }}
          >
            <motion.circle
              cx={point.x}
              cy={point.y}
              r={active.label === point.label ? "3.2" : "2"}
              fill={point.color}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            />
            {!reduceMotion ? (
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="2"
                fill="transparent"
                stroke={point.color}
                strokeWidth="0.6"
                animate={{ r: [2, 4.7, 2], opacity: [0.75, 0.15, 0.75] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.18 }}
              />
            ) : null}
            <text
              x={point.x + 2.8}
              y={point.y - 2.5}
              fill={active.label === point.label ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.65)"}
              fontSize="3.4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {point.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function EfficiencyTradeoffSimulator() {
  const [complexity, setComplexity] = useState(42);
  const [threshold, setThreshold] = useState<"lean" | "balanced" | "strict">("balanced");
  const [latencyFirst, setLatencyFirst] = useState(true);
  const reduceMotion = useReducedMotion();

  const model = useMemo(() => {
    const strictness = threshold === "lean" ? -9 : threshold === "strict" ? 12 : 0;
    const smallShare = Math.max(18, Math.min(82, 86 - complexity * 0.72 - strictness * 0.6 + (latencyFirst ? 9 : 0)));
    const mediumShare = Math.max(12, Math.min(56, 72 - smallShare + complexity * 0.18));
    const frontierShare = Math.max(4, 100 - smallShare - mediumShare);
    const quality = Math.min(99, 72 + complexity * 0.16 + (threshold === "strict" ? 8 : threshold === "balanced" ? 4 : 0));
    const latency = Math.round(smallShare * 1.2 + mediumShare * 3.8 + frontierShare * 12);
    const cost = ((smallShare * 0.02 + mediumShare * 0.16 + frontierShare * 2.4) / 100).toFixed(2);

    return {
      cost,
      frontierShare: Math.round(frontierShare),
      latency,
      mediumShare: Math.round(mediumShare),
      quality: Math.round(quality),
      smallShare: Math.round(smallShare),
    };
  }, [complexity, latencyFirst, threshold]);

  const tiers = [
    {
      label: "Small model",
      share: model.smallShare,
      detail: "intent, rewrite, classify",
      icon: Zap,
      tone: "border-[#d9efe1]/24 bg-[#d9efe1]/[0.055]",
    },
    {
      label: "Medium model",
      share: model.mediumShare,
      detail: "grounded answers, tools",
      icon: Route,
      tone: "border-[#d7ddff]/22 bg-[#d7ddff]/[0.052]",
    },
    {
      label: "Frontier model",
      share: model.frontierShare,
      detail: "hard synthesis only",
      icon: Gauge,
      tone: "border-[#ffe0c2]/22 bg-[#ffe0c2]/[0.05]",
    },
  ];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/[0.025] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="grid gap-8 p-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-7">
        <div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/42">
                Live cascade
              </p>
              <h3 className="mt-3 font-[var(--font-heading)] text-[1.35rem] font-semibold leading-snug text-[#f4efe7]">
                Route requests by difficulty, not habit.
              </h3>
              <p className="mt-3 max-w-[28rem] text-sm leading-6 text-white/56">
                Change the controls and watch traffic, cost, latency, and quality rebalance.
              </p>
            </div>
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 sm:flex">
              <Route size={22} />
            </span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {[
              { label: "Fast chat", complexity: 24, threshold: "lean" as const, latencyFirst: true },
              { label: "Balanced", complexity: 42, threshold: "balanced" as const, latencyFirst: true },
              { label: "High risk", complexity: 76, threshold: "strict" as const, latencyFirst: false },
            ].map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => {
                  setComplexity(preset.complexity);
                  setThreshold(preset.threshold);
                  setLatencyFirst(preset.latencyFirst);
                }}
                className="border border-white/10 px-3 py-2 text-xs text-white/60 transition hover:border-white/28 hover:bg-white/6 hover:text-white"
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="flex items-center justify-between font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/44">
                Query complexity
                <span>{complexity}%</span>
              </span>
              <input
                type="range"
                min="10"
                max="90"
                value={complexity}
                onChange={(event) => setComplexity(Number(event.target.value))}
                className="mt-3 w-full accent-[#f2ece2]"
              />
            </label>

            <div>
              <p className="mb-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/44">
                Live traffic split
              </p>
              <div className="flex h-3 overflow-hidden rounded-full bg-white/8">
                <motion.span
                  animate={{ width: `${model.smallShare}%` }}
                  className="bg-[#d9efe1]/70"
                  transition={{ duration: 0.35 }}
                />
                <motion.span
                  animate={{ width: `${model.mediumShare}%` }}
                  className="bg-[#d7ddff]/62"
                  transition={{ duration: 0.35 }}
                />
                <motion.span
                  animate={{ width: `${model.frontierShare}%` }}
                  className="bg-[#ffe0c2]/68"
                  transition={{ duration: 0.35 }}
                />
              </div>
            </div>

            <div>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/44">
                Quality threshold
              </p>
              <div className="mt-3 grid grid-cols-3 border border-white/10 text-sm">
                {[
                  ["lean", "Lean"],
                  ["balanced", "Balanced"],
                  ["strict", "Strict"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setThreshold(value as typeof threshold)}
                    className={`px-3 py-2 transition ${
                      threshold === value ? "bg-white text-[#090b0f]" : "text-white/58 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-center justify-between gap-4 border border-white/10 px-4 py-3 text-sm text-white/66">
              <span>Prefer fast responses when quality is close</span>
              <input
                type="checkbox"
                checked={latencyFirst}
                onChange={(event) => setLatencyFirst(event.target.checked)}
                className="h-4 w-4 accent-[#f2ece2]"
              />
            </label>
          </div>
        </div>

        <div className="space-y-5">
          <div className="relative h-36 overflow-hidden border border-white/10 bg-[#090b0f]/60">
            <div className="absolute left-[18%] top-0 h-full w-px bg-white/10" />
            <div className="absolute left-[54%] top-0 h-full w-px bg-white/10" />
            <div className="absolute left-[82%] top-0 h-full w-px bg-white/10" />
            {tokenDots.map((dot) => (
              <motion.span
                key={dot.id}
                className="absolute rounded-full bg-[#f2ece2]/75 shadow-[0_0_18px_rgba(242,236,226,0.38)]"
                style={{ top: `${dot.top}%`, height: dot.size, width: dot.size }}
                initial={{ left: "-6%", opacity: 0 }}
                animate={
                  reduceMotion
                    ? { left: `${18 + (dot.id % 3) * 30}%`, opacity: 0.65 }
                    : { left: ["-6%", "20%", "55%", "84%", "106%"], opacity: [0, 0.9, 0.75, 0.55, 0] }
                }
                transition={{ duration: Math.max(2.4, 5.4 - complexity / 25), repeat: reduceMotion ? 0 : Infinity, delay: dot.delay, ease: "linear" }}
              />
            ))}
            <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-white/34">
              <span>small</span>
              <span>medium</span>
              <span>frontier</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.label}
                  animate={{ scale: tier.share > 45 ? 1.02 : 1 }}
                  className={`border p-4 ${tier.tone}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-white/44">
                      {tier.label}
                    </p>
                    <Icon size={15} className="text-white/44" />
                  </div>
                  <p className="mt-4 font-[var(--font-serif)] text-3xl leading-none text-white">{tier.share}%</p>
                  <p className="mt-2 text-xs leading-5 text-white/52">{tier.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {[
              ["Avg latency", `${model.latency}ms`],
              ["Cost / 1M", `$${model.cost}`],
              ["Frontier calls", `${model.frontierShare}%`],
              ["Quality", `${model.quality}%`],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-white/10 pt-3">
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-white/36">{label}</p>
                <p className="mt-2 font-[var(--font-serif)] text-2xl text-[#f4efe7]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function EfficiencyRoutingStack() {
  const reduceMotion = useReducedMotion();
  const [activeTier, setActiveTier] = useState(1);
  const tiers = [
    {
      title: "Tier 1",
      model: "Gemma / Phi / small domain model",
      detail: "cheap, local, or near-real-time work",
      signal: "Best when the request is structured, short, and easy to verify.",
      tone: "from-white/[0.08] to-white/[0.03] border-white/12",
    },
    {
      title: "Tier 2",
      model: "7B-14B specialist",
      detail: "the bulk of grounded production tasks",
      signal: "Best when retrieval, tools, or a domain prompt can narrow the problem.",
      tone: "from-white/[0.07] to-white/[0.025] border-white/12",
    },
    {
      title: "Tier 3",
      model: "Frontier model",
      detail: "broad synthesis and hard escalation",
      signal: "Best when ambiguity, novelty, or risk makes the cheaper answer unreliable.",
      tone: "from-white/[0.06] to-white/[0.02] border-white/12",
    },
  ];

  return (
    <div className="space-y-4">
      <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/36">
        Click a tier to inspect routing logic
      </p>
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {tiers.map((tier, index) => (
        <div key={tier.title} className="contents">
          <motion.button
            type="button"
            onClick={() => setActiveTier(index)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className={`relative border-l bg-gradient-to-b px-5 py-4 text-left transition ${tier.tone} ${
              activeTier === index ? "border-l-white bg-white/[0.055]" : "hover:bg-white/[0.035]"
            }`}
          >
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/48">
              {tier.title}
            </p>
            <h4 className="mt-3 font-[var(--font-serif)] text-[1.45rem] leading-tight text-white">
              {tier.model}
            </h4>
            <p className="mt-3 text-sm leading-6 text-white/64">{tier.detail}</p>
            {activeTier === index ? (
              <motion.div layoutId="tier-indicator" className="absolute bottom-0 left-0 h-px w-full bg-white/70" />
            ) : null}
          </motion.button>
          {index < tiers.length - 1 ? (
            <div className="hidden items-center justify-center lg:flex">
              <motion.div
                animate={reduceMotion ? undefined : { x: [0, 4, 0], opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.12 }}
                className="font-[var(--font-mono)] text-lg text-white/32"
              >
                →
              </motion.div>
            </div>
          ) : null}
        </div>
      ))}
      </div>
      <motion.div
        key={tiers[activeTier].title}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-l border-white/24 bg-white/[0.025] px-5 py-4"
      >
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/36">
          Routing signal
        </p>
        <p className="mt-2 text-sm leading-6 text-white/68">{tiers[activeTier].signal}</p>
      </motion.div>
    </div>
  );
}
