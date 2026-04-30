import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";
import { BlogReadingSidebar } from "@/components/blog/BlogReadingSidebar";
import {
  EfficiencyBenchmarkBars,
  EfficiencyHeroVisual,
  EfficiencyRoutingStack,
  EfficiencyScatterField,
} from "@/components/blog/EfficiencyEraVisuals";

const sections = [
  { id: "thesis", label: "The Shift" },
  { id: "frontier", label: "Efficiency Frontier" },
  { id: "forces", label: "What Changed" },
  { id: "deployment", label: "Deployment Math" },
  { id: "routing", label: "Routing Patterns" },
  { id: "limits", label: "Where Scale Still Wins" },
  { id: "playbook", label: "Practical Playbook" },
  { id: "closing", label: "What Comes Next" },
];

const deploymentRows = [
  ["GPT-4 class", "~1T+", "highest", "$10+", "API only", "complex synthesis"],
  ["Llama 70B", "70B", "high", "$0.90", "A100/H100", "broad open deployment"],
  ["Phi-3 Medium", "14B", "strong", "$0.15", "single GPU", "general production work"],
  ["Mistral 7B", "7B", "solid", "$0.06", "consumer GPU", "low-latency assistants"],
  ["Gemma 2B", "2B", "limited but useful", "$0.01", "edge / CPU", "filters, mobile, drafts"],
];

export function EfficiencyEraArticle({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-[#090b0f] pt-24 text-[#eee8de] lg:pt-0">
      <section className="border-b border-white/8">
        <div className="mx-auto grid w-[min(1160px,calc(100vw-1.5rem))] gap-8 pb-10 pt-8 sm:px-6 lg:w-[min(1160px,calc(100vw-6rem))] lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-end lg:gap-12 lg:px-8 lg:pb-14 lg:pt-12">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/46 transition hover:text-white/82"
            >
              <ArrowLeft size={14} />
              Back to all writing
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/45 lg:mt-7">
              <span className="text-white/72">{post.category}</span>
              <span className="text-white/22">/</span>
              <span>{post.readTime}</span>
              <span className="text-white/22">/</span>
              <span>
                {new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
                  new Date(post.date)
                )}
              </span>
            </div>

            <h1 className="mt-5 max-w-[13ch] font-[var(--font-serif)] text-[clamp(2.45rem,13vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-[#f4efe7] lg:mt-6 lg:max-w-[12ch] lg:text-[clamp(2.9rem,6.8vw,5.4rem)] lg:leading-[0.98] lg:tracking-[-0.045em]">
              {post.title}
            </h1>

            <p className="mt-5 max-w-[42rem] text-[1rem] leading-7 text-white/68 lg:mt-6 lg:text-[1.05rem] lg:leading-8">{post.description}</p>

          <div className="mt-7 grid max-w-[40rem] gap-4 sm:grid-cols-3 lg:mt-8 lg:gap-3">
            {[
              { value: "smaller", label: "can be strategically better" },
              { value: "faster", label: "changes UX and routing design" },
              { value: "cheaper", label: "makes AI deployable at scale" },
            ].map((item) => (
              <div key={item.label} className="border-l border-white/10 pl-4">
                <p className="font-[var(--font-serif)] text-[1.45rem] leading-none text-[#f2ece2] lg:text-[1.65rem]">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/48">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

          <div className="hidden lg:block">
            <EfficiencyHeroVisual />
          </div>
        </div>
      </section>

      <div
        id="blog-article-root"
        className="mx-auto grid w-[min(1160px,calc(100vw-1.5rem))] gap-10 py-10 sm:px-6 lg:w-[min(1160px,calc(100vw-6rem))] lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 lg:px-8 lg:py-16"
      >
        <article className="min-w-0">
          <div className="border-t border-white/8 pt-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                ["96x", "smaller than GPT-3 scale", "A useful shift in capability no longer requires a similar jump in size."],
                ["120ms", "good-enough latency tier", "The difference between an interesting demo and a useful production primitive is often response time."],
                ["70-85%", "frontier traffic reduction", "Good cascades route most requests away from the most expensive models."],
              ].map(([value, title, body]) => (
                <div key={title} className="border-l border-white/10 pl-4">
                  <p className="font-[var(--font-serif)] text-[2.2rem] leading-none text-[#f2ece2]">{value}</p>
                  <p className="mt-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/42">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/58">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <section id="thesis" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                The Shift
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.3rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
                The story changed from “largest model wins” to “smallest model that clears the bar.”
              </h2>
              <div className="mt-6 space-y-6 text-[1.02rem] leading-8 text-white/68">
                <p>
                  The earlier era of language models rewarded one obvious move: scale everything.
                  More parameters, more data, more compute, more impressive demos. That strategy was
                  real, and it built the modern foundation of AI. But it also created a distorted
                  instinct inside teams: if performance matters, the answer must be a larger model.
                </p>
                <p>
                  The current reality is more disciplined. Small and medium models are no longer
                  interesting because they are cheap. They are interesting because they are often
                  <em className="mx-1 text-[#f4efe7]">sufficient</em>. Once a model is good enough
                  for classification, drafting, retrieval-grounded answering, or tool routing, the
                  business problem shifts. The winning system is not the one with the highest raw
                  benchmark. It is the one that lands inside latency budgets, infra limits, and
                  product constraints without collapsing quality.
                </p>
                <p>
                  That is what makes this an efficiency era rather than a miniaturization trend. The
                  gains are architectural, economic, and operational at the same time.
                </p>
                <p>
                  That distinction matters. A miniaturization story is mostly about shrinking the
                  same object. An efficiency story is about changing the decision criteria entirely.
                  Teams are no longer optimizing only for benchmark prestige. They are optimizing for
                  reliability under load, infrastructure overhead, privacy constraints, and the cost
                  of making AI available to every user interaction instead of only the expensive ones.
                </p>
              </div>
            </section>

            <section id="frontier" className="scroll-mt-28">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start">
                <div>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                    Efficiency Frontier
                  </p>
                  <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
                    Capability now bends around a frontier, not a straight line.
                  </h2>
                  <div className="mt-6 space-y-6 text-[1.02rem] leading-8 text-white/68">
                    <p>
                      The old intuition said capability rises with scale in a mostly predictable way.
                      That still matters at the frontier, but the applied landscape now looks more
                      jagged. Better data curation, better optimization, distillation, and better
                      routing mean smaller models can outperform larger ones that were trained less
                      carefully or deployed less thoughtfully.
                    </p>
                    <p>
                      The more useful mental model is an efficiency frontier: a moving boundary of
                      models that deliver the best quality for a given cost, latency, or hardware
                      footprint. Once you think in those terms, deployment becomes a portfolio design
                      problem rather than a single-model beauty contest.
                    </p>
                    <p>
                      This also changes how model comparisons should be read. A benchmark score in
                      isolation says very little about whether a system is good for your product. The
                      relevant comparison is score relative to cost, relative to response time, and
                      relative to the complexity of the task you actually need to serve.
                    </p>
                  </div>
                </div>
                <EfficiencyScatterField />
              </div>

              <div className="mt-8 border-t border-white/8 pt-6">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/42">
                  Benchmark signal
                </p>
                <div className="mt-6">
                  <EfficiencyBenchmarkBars />
                </div>
              </div>
            </section>

            <section id="forces" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                What Changed
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
                Four forces made smaller models meaningfully competitive.
              </h2>

              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Higher-quality data replaced indiscriminate scale",
                    body: "Teams stopped pretending every token had equal value. Curated, pedagogically dense, or task-focused corpora compress much more useful signal into the same training budget.",
                  },
                  {
                    title: "Distillation made frontier behavior transferable",
                    body: "Smaller models can inherit useful behavior from larger teachers. That does not make them magical, but it does make them much more efficient learners.",
                  },
                  {
                    title: "Quantization and inference engineering matured",
                    body: "Serving costs are now shaped as much by systems work as by model quality. Compression, kernel efficiency, batching, and memory layout all matter.",
                  },
                  {
                    title: "Routing architectures reduced the need for one model to do everything",
                    body: "Most production requests are not frontier-hard. Once teams route easy work to cheaper models, the economics shift fast.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="grid gap-4 border-t border-white/8 py-6 md:grid-cols-[64px_minmax(0,1fr)]">
                    <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/34">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-[var(--font-serif)] text-[1.45rem] leading-tight text-[#f4efe7]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[0.98rem] leading-8 text-white/62">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="mt-8 border-l-2 border-white/26 pl-6 font-[var(--font-serif)] text-[1.45rem] italic leading-[1.6] text-white/82">
                The strongest systems are not the ones with the most parameters on paper. They are
                the ones whose economics, latency, and failure modes make sense in production.
              </blockquote>

              <blockquote className="mt-8 border-l-2 border-white/26 pl-6 font-[var(--font-serif)] text-[1.45rem] italic leading-[1.6] text-white/82">
                The goal is no longer to ask what the biggest model can do. The goal is to ask what
                the smallest system can do reliably enough to ship.
              </blockquote>
            </section>

            <section id="deployment" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Deployment Math
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
                The quality gap is often smaller than the cost and latency gap.
              </h2>
              <div className="mt-6 space-y-6 text-[1.02rem] leading-8 text-white/68">
                <p>
                  This is where the conversation becomes practical. If a 14B model produces output
                  that is slightly worse than a frontier API but still within acceptable quality, the
                  trade becomes difficult to ignore. Lower serving cost means more queries. Lower
                  latency changes interface behavior. Local or private deployment changes governance.
                </p>
                <p>
                  In many teams, the real unlock is not “replace the largest model.” It is “reserve
                  the expensive model for the minority of requests that truly need it.”
                </p>
                <p>
                  This is also why small models keep becoming more strategically valuable. They let
                  teams experiment more aggressively, widen usage, and keep intelligence present in
                  places where an expensive API call would previously have been unjustifiable.
                </p>
              </div>

              <div className="mt-8 overflow-hidden border-y border-white/8">
                <div className="grid grid-cols-6 border-b border-white/8 px-6 py-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/40">
                  <span>Model</span>
                  <span>Size</span>
                  <span>Quality</span>
                  <span>Cost / 1M</span>
                  <span>Runs on</span>
                  <span>Best use</span>
                </div>
                {deploymentRows.map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-6 gap-4 border-b border-white/6 px-6 py-4 text-sm text-white/70 last:border-b-0"
                  >
                    {row.map((cell, index) => (
                      <span key={`${row[0]}-${index}`} className={index === 0 ? "text-white" : ""}>
                        {cell}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            <section id="routing" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Routing Patterns
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
                The most useful architecture is often a cascade, not a single model.
              </h2>
              <div className="mt-6 space-y-6 text-[1.02rem] leading-8 text-white/68">
                <p>
                  Production AI stacks rarely need one model to handle every request. A lightweight
                  model can classify intent, compress context, or reject obviously simple queries.
                  A medium model can handle the bulk of work. A frontier endpoint can remain available
                  for the small share of requests that need long-horizon reasoning or broad synthesis.
                </p>
                <p>
                  The result is not just lower cost. It is better product behavior. Fast answers feel
                  more interactive. Escalation becomes explicit. Observability improves because
                  routing decisions can be measured instead of guessed.
                </p>
                <p>
                  Good routing also enforces discipline. It forces teams to ask what kinds of work are
                  actually difficult, what quality thresholds matter, and where the expensive model is
                  creating real value instead of simply masking weak system design.
                </p>
              </div>

              <div className="mt-8">
                <EfficiencyRoutingStack />
              </div>
            </section>

            <section id="limits" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Where Scale Still Wins
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
                Larger models still matter when breadth, novelty, and long-horizon reasoning dominate.
              </h2>
              <div className="mt-6 space-y-6 text-[1.02rem] leading-8 text-white/68">
                <p>
                  None of this means large models stopped being useful. Frontier systems still hold a
                  meaningful edge in broad synthesis, difficult reasoning, and unfamiliar tasks where
                  a smaller model is more likely to collapse into shallow heuristics.
                </p>
                <p>
                  The more accurate claim is narrower: large models should no longer be the automatic
                  default for everything. They are still extremely valuable, but they are most useful
                  when deployed intentionally against hard problems rather than spread uniformly across
                  every request in the stack.
                </p>
                <p>
                  That distinction keeps teams honest. The question is not whether a large model is
                  better in the abstract. It is whether the additional cost and latency buy a material
                  improvement for the user journey being designed.
                </p>
              </div>
            </section>

            <section id="playbook" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Practical Playbook
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
                A stronger default for teams building with models right now.
              </h2>
              <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  "Start with the smallest model that might plausibly work.",
                  "Benchmark on your actual task before making architecture decisions.",
                  "Route cheap, obvious work away from expensive frontier calls.",
                  "Treat latency and observability as first-class product constraints.",
                  "Fine-tune or distill when narrow domain behavior matters more than generality.",
                  "Escalate to large models only when the measured gap is real.",
                  "Keep humans in the loop for high-cost or high-risk escalations.",
                  "Revisit routing thresholds as models and product behavior change.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-[0.98rem] leading-8 text-white/68">
                    <span className="mt-[0.95rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="closing" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                What Comes Next
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe7]">
                AI becomes infrastructure when it becomes cheap, legible, and routine.
              </h2>
              <div className="mt-6 space-y-6 text-[1.02rem] leading-8 text-white/68">
                <p>
                  The frontier will keep moving. There will still be reasons to train larger models,
                  and some work will continue to demand them. But the more transformative shift is
                  what happens as useful capability keeps flowing downward into smaller footprints.
                </p>
                <p>
                  That is how AI stops feeling like an occasional premium feature and starts behaving
                  like infrastructure: available in more products, embedded in more workflows, and
                  operated with more discipline. The race to scale created the spectacle. The race to
                  efficiency is what will make the technology durable.
                </p>
                <p>
                  Over time, this will likely become the default pattern across the industry. The
                  frontier keeps pushing outward, but the deployable center keeps moving downward. That
                  is the mechanism through which advanced capabilities become ordinary product building
                  blocks rather than rare demonstrations.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/48">
                  Key takeaway
                </p>
                <p className="mt-4 max-w-[58ch] font-[var(--font-serif)] text-[1.5rem] leading-[1.55] text-[#f6efe2]">
                  The practical question is no longer “what is the most capable model available?” It
                  is “what is the cheapest, fastest, smallest system that still does this job well
                  enough to trust?”
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16 border-t border-white/8 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/44 transition hover:text-white/82"
              >
                Explore all blogs <ArrowUpRight size={14} />
              </Link>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-white/42"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <BlogReadingSidebar
          sections={sections}
          readTime={post.readTime}
          category={post.category}
          tags={post.tags}
        />
      </div>
    </div>
  );
}
