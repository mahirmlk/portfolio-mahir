"use client";

import { motion } from "framer-motion";

const benchmarkBars = [
  { label: "GPT-4 Turbo", score: 86.4, tone: "bg-[#f2ece2]" },
  { label: "Llama 3 70B", score: 82, tone: "bg-[#ddd6ca]" },
  { label: "Phi-3 Medium", score: 78, tone: "bg-[#c8c1b4]" },
  { label: "Mixtral 8x7B", score: 70.6, tone: "bg-[#b2aba0]" },
  { label: "Phi-3 Mini", score: 68.8, tone: "bg-[#98928b]" },
  { label: "Gemma 7B", score: 64.3, tone: "bg-[#7d7973]" },
];

const scatterPoints = [
  { x: 12, y: 80, label: "2B", color: "rgba(242,236,226,0.72)" },
  { x: 22, y: 58, label: "4B", color: "rgba(242,236,226,0.72)" },
  { x: 35, y: 50, label: "7B", color: "rgba(221,214,202,0.78)" },
  { x: 48, y: 32, label: "14B", color: "rgba(200,193,180,0.8)" },
  { x: 67, y: 22, label: "70B", color: "rgba(178,171,160,0.82)" },
  { x: 90, y: 14, label: "1T+", color: "rgba(242,236,226,0.9)" },
];

export function EfficiencyHeroVisual() {
  return (
    <div className="space-y-6 border-l border-white/10 pl-6">
      <div className="grid grid-cols-3 gap-4">
          {[
            { value: "10x-100x", label: "cheaper serving" },
            { value: "sub-150ms", label: "usable latency" },
            { value: "edge-ready", label: "smaller footprints" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border-l border-white/10 pl-3"
            >
              <p className="font-[var(--font-serif)] text-xl text-[#f2ece2]">{item.value}</p>
              <p className="mt-1 text-xs text-white/44">{item.label}</p>
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
  return (
    <div className="space-y-4">
      {benchmarkBars.map((bar, index) => (
        <div key={bar.label} className="grid grid-cols-[140px_minmax(0,1fr)_48px] items-center gap-4">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-white/46">
            {bar.label}
          </p>
          <div className="h-3 overflow-hidden rounded-full bg-white/6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${bar.score}%` }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: index * 0.08 }}
              className={`h-full rounded-full ${bar.tone}`}
            />
          </div>
          <p className="font-[var(--font-mono)] text-[11px] text-white/64">{bar.score}%</p>
        </div>
      ))}
    </div>
  );
}

export function EfficiencyScatterField() {
  return (
    <div className="relative h-[22rem] overflow-hidden border-y border-white/8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <svg viewBox="0 0 100 100" className="relative h-full w-full">
        <path
          d="M8 78 C 24 74, 33 61, 48 47 S 72 26, 92 16"
          fill="none"
          stroke="rgba(242,236,226,0.28)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        {scatterPoints.map((point, index) => (
          <g key={point.label}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="2"
              fill={point.color}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            />
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
            <text
              x={point.x + 2.8}
              y={point.y - 2.5}
              fill="rgba(255,255,255,0.65)"
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

export function EfficiencyRoutingStack() {
  const tiers = [
    {
      title: "Tier 1",
      model: "Gemma 2B / Phi-3 Mini",
      detail: "~70% of queries · fastest path",
      tone: "from-white/[0.08] to-white/[0.03] border-white/12",
    },
    {
      title: "Tier 2",
      model: "Mistral 7B / Phi-3 Medium",
      detail: "~25% of queries · balanced reasoning",
      tone: "from-white/[0.07] to-white/[0.025] border-white/12",
    },
    {
      title: "Tier 3",
      model: "Frontier APIs",
      detail: "~5% of queries · hardest cases only",
      tone: "from-white/[0.06] to-white/[0.02] border-white/12",
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {tiers.map((tier, index) => (
        <div key={tier.title} className="contents">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className={`border-l bg-gradient-to-b px-5 py-2 ${tier.tone}`}
          >
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/48">
              {tier.title}
            </p>
            <h4 className="mt-3 font-[var(--font-serif)] text-[1.45rem] leading-tight text-white">
              {tier.model}
            </h4>
            <p className="mt-3 text-sm leading-6 text-white/64">{tier.detail}</p>
          </motion.div>
          {index < tiers.length - 1 ? (
            <div className="hidden items-center justify-center lg:flex">
              <motion.div
                animate={{ x: [0, 4, 0], opacity: [0.45, 1, 0.45] }}
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
  );
}
