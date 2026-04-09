import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { TheoryImplementation } from "@/lib/theory";

function FitComparisonVisual() {
  return (
    <svg viewBox="0 0 520 220" className="h-auto w-full">
      <defs>
        <linearGradient id="fit-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(244,239,231,0.75)" />
          <stop offset="100%" stopColor="rgba(244,239,231,1)" />
        </linearGradient>
      </defs>

      {Array.from({ length: 6 }).map((_, index) => (
        <line
          key={`h-${index}`}
          x1="0"
          y1={20 + index * 36}
          x2="520"
          y2={20 + index * 36}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 7 }).map((_, index) => (
        <line
          key={`v-${index}`}
          x1={40 + index * 70}
          y1="0"
          x2={40 + index * 70}
          y2="220"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      ))}

      {[48, 80, 112, 138, 170, 196, 228, 245, 280, 308, 336, 372, 404, 460].map((x, index) => {
        const y = 180 - index * 10 + (index % 3) * 8;
        return <circle key={x} cx={x} cy={y} r="4.5" fill="rgba(255,255,255,0.28)" />;
      })}

      <path
        d="M24 188 C 110 145, 200 112, 300 72 S 430 28, 496 12"
        fill="none"
        stroke="url(#fit-line)"
        strokeWidth="3"
      />
      <path
        d="M24 188 C 110 145, 200 112, 300 72 S 430 28, 496 12"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeDasharray="8 7"
        strokeWidth="2"
      />
    </svg>
  );
}

function LossConvergenceVisual() {
  return (
    <svg viewBox="0 0 520 220" className="h-auto w-full">
      {Array.from({ length: 6 }).map((_, index) => (
        <line
          key={`loss-h-${index}`}
          x1="0"
          y1={18 + index * 38}
          x2="520"
          y2={18 + index * 38}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}

      <path
        d="M20 18 C 26 80, 34 132, 48 160 S 88 180, 180 182 L 500 184"
        fill="none"
        stroke="rgba(244,239,231,1)"
        strokeWidth="3"
      />
      <line
        x1="20"
        y1="170"
        x2="500"
        y2="170"
        stroke="rgba(255,255,255,0.38)"
        strokeDasharray="8 8"
        strokeWidth="2"
      />
      <text
        x="28"
        y="28"
        fill="rgba(255,255,255,0.5)"
        fontSize="11"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        start
      </text>
      <text
        x="396"
        y="164"
        fill="rgba(255,255,255,0.5)"
        fontSize="11"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        final test mse
      </text>
    </svg>
  );
}

export function LinearRegressionTheoryArticle({ item }: { item: TheoryImplementation }) {
  return (
    <div className="min-h-screen bg-[#090b0f] text-[#eee8de]">
      <section className="border-b border-white/8">
        <div className="mx-auto w-[min(1160px,calc(100vw-5rem))] px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <Link
            href="/#theory"
            className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/46 transition hover:text-white/82"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/45">
            <span className="text-white/72">{item.topic}</span>
            <span className="text-white/22">/</span>
            <span>{item.readTime}</span>
            <span className="text-white/22">/</span>
            <span>
              {new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
                new Date(item.date)
              )}
            </span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Theory to Implementation
              </p>
              <h1 className="mt-4 max-w-[11ch] font-[var(--font-serif)] text-[clamp(3.2rem,8vw,6.4rem)] leading-[0.92] tracking-[-0.06em] text-[#f4efe7]">
                {item.title}
              </h1>
              <p className="mt-7 max-w-[44rem] text-[1.1rem] leading-9 text-white/68">
                {item.subtitle}
              </p>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/38">
                repository
              </p>
              <a
                href={item.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-white/76 transition hover:text-white"
              >
                {item.repository}
                <ArrowUpRight size={14} />
              </a>
              <p className="mt-4 text-sm leading-7 text-white/52">{item.excerpt}</p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/8 pt-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {item.metrics.map((metric) => (
                <div key={metric.label} className="border-l border-white/10 pl-4">
                  <p className="font-[var(--font-serif)] text-[2rem] leading-none text-[#f2ece2]">
                    {metric.value}
                  </p>
                  <p className="mt-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/42">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/58">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-[min(1160px,calc(100vw-5rem))] px-4 py-16 sm:px-6 lg:px-8">
        <article className="max-w-[820px]">
          <section id="explanation">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
              Explanation
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
              The implementation keeps the math visible instead of hiding it behind abstractions.
            </h2>
            <div className="mt-6 space-y-6 text-[1.02rem] leading-8 text-white/68">
              {item.explanation.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 border-t border-white/8">
              {item.implementationSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-4 border-b border-white/8 py-6 md:grid-cols-[64px_minmax(0,1fr)]"
                >
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/34">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-[var(--font-serif)] text-[1.4rem] leading-tight text-[#f4efe7]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-8 text-white/62">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="results" className="mt-16">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
              Results
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
              The from-scratch model lands exactly on the same validation metrics as the baselines.
            </h2>
            <div className="mt-6 space-y-6 text-[1.02rem] leading-8 text-white/68">
              <p>
                The repo evaluates three paths on the same synthetic regression setup: gradient
                descent, a closed-form solve, and scikit-learn. All three produce an identical
                validation MSE of <span className="text-[#f4efe7]">{item.results[0].mse}</span> and
                an R² of <span className="text-[#f4efe7]">{item.results[0].r2}</span>. That is the
                strongest signal in the project because it confirms that the custom implementation is
                not approximately correct, but numerically aligned with a trusted reference.
              </p>
              <p>
                The gradient-descent run also behaves cleanly during optimization. Training loss
                starts at <span className="text-[#f4efe7]">{item.convergence.startLoss}</span>, drops
                to <span className="text-[#f4efe7]">{item.convergence.lossAt100}</span> by iteration
                100, and finishes at <span className="text-[#f4efe7]">{item.convergence.finalTrainLoss}</span>.
                The held-out test MSE settles at{" "}
                <span className="text-[#f4efe7]">{item.convergence.finalTestMse}</span>, which lines
                up with the saved convergence plot in the repository.
              </p>
            </div>

            <div className="mt-10 border-y border-white/8">
              <div className="grid grid-cols-[minmax(0,1.2fr)_120px_120px_minmax(0,1.4fr)] gap-4 border-b border-white/8 px-1 py-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/40">
                <span>Method</span>
                <span>MSE</span>
                <span>R²</span>
                <span>Reading</span>
              </div>
              {item.results.map((result) => (
                <div
                  key={result.method}
                  className="grid grid-cols-[minmax(0,1.2fr)_120px_120px_minmax(0,1.4fr)] gap-4 border-b border-white/6 px-1 py-5 text-sm text-white/70 last:border-b-0"
                >
                  <span className="text-white">{result.method}</span>
                  <span>{result.mse}</span>
                  <span>{result.r2}</span>
                  <span>{result.note}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/38">
                  Fit comparison
                </p>
                <div className="mt-4 border-t border-white/8 pt-4">
                  <FitComparisonVisual />
                </div>
                <p className="mt-3 text-sm leading-7 text-white/52">
                  The learned regression line from the custom gradient-descent model overlaps the
                  scikit-learn baseline, with test points distributed tightly around the same trend.
                </p>
              </div>

              <div>
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/38">
                  Loss convergence
                </p>
                <div className="mt-4 border-t border-white/8 pt-4">
                  <LossConvergenceVisual />
                </div>
                <p className="mt-3 text-sm leading-7 text-white/52">
                  Most of the optimization progress happens early. The curve collapses quickly and
                  then flattens, which is exactly what a well-conditioned convex objective should do.
                </p>
              </div>
            </div>
          </section>

          <section id="intuition" className="mt-16">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
              Intuition
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
              The value of the project is not the algorithm alone, but what it teaches about learning systems.
            </h2>
            <div className="mt-6 space-y-6 text-[1.02rem] leading-8 text-white/68">
              {item.intuition.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/48">
                Core takeaway
              </p>
              <p className="mt-4 max-w-[58ch] font-[var(--font-serif)] text-[1.45rem] leading-[1.55] text-[#f6efe2]">
                Rebuilding a simple model from scratch is useful because it forces the whole learning
                process into view. Once the mechanics are visible here, larger model training loops
                become much less mysterious.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
