import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";
import { BlogReadingSidebar } from "@/components/blog/BlogReadingSidebar";
import {
  EfficiencyBenchmarkBars,
  EfficiencyHeroVisual,
  EfficiencyRoutingStack,
  EfficiencyScatterField,
  EfficiencyTradeoffSimulator,
} from "@/components/blog/EfficiencyEraVisuals";

const sections = [
  { id: "thesis", label: "The Shift" },
  { id: "frontier", label: "Efficiency Frontier" },
  { id: "small-models", label: "Small Models" },
  { id: "systems", label: "Systems Win" },
  { id: "deployment", label: "Deployment Math" },
  { id: "routing", label: "Routing Patterns" },
  { id: "limits", label: "Where Scale Still Wins" },
  { id: "playbook", label: "Practical Playbook" },
  { id: "sources", label: "Research Signals" },
  { id: "closing", label: "What Comes Next" },
];

const deploymentRows = [
  ["Frontier API", "largest", "highest breadth", "$2-$15+", "cloud", "novel synthesis, hard reasoning"],
  ["MoE model", "sparse active", "strong", "$0.40-$1.20", "GPU cluster", "broad tasks with lower active compute"],
  ["14B specialist", "medium", "strong in-domain", "$0.10-$0.35", "single GPU", "product assistants, RAG, tools"],
  ["3B-8B SLM", "small", "good enough", "$0.01-$0.08", "edge / small GPU", "rewrite, classify, summarize"],
  ["Tiny guard model", "<2B", "narrow", "near-zero", "CPU / device", "routing, filters, checks"],
];

const sourceLinks = [
  {
    label: "Stanford AI Index 2025",
    href: "https://hai.stanford.edu/ai-index/2025-ai-index-report/research-and-development",
    note: "inference costs, hardware price-performance, energy efficiency",
  },
  {
    label: "Microsoft Phi-3 Technical Report",
    href: "https://www.microsoft.com/en-us/research/publication/phi-3-technical-report-a-highly-capable-language-model-locally-on-your-phone/",
    note: "3.8B model positioned for phone-class deployment",
  },
  {
    label: "Apple Intelligence Foundation Models",
    href: "https://machinelearning.apple.com/research/apple-intelligence-foundation-language-models",
    note: "on-device model design, quantization, KV-cache sharing",
  },
  {
    label: "Berkeley BAIR on compound AI systems",
    href: "https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/",
    note: "systems built from models, tools, retrieval, and control logic",
  },
  {
    label: "RouteLLM",
    href: "https://sky.cs.berkeley.edu/project/routellm/",
    note: "routing weaker and stronger models by prompt difficulty",
  },
  {
    label: "QLoRA",
    href: "https://huggingface.co/papers/2305.14314",
    note: "4-bit quantized fine-tuning as a practical compression milestone",
  },
];

const proseClass = "max-w-[66ch] space-y-6 text-[1.03rem] leading-[1.82] text-white/74";
const h2Class =
  "mt-4 max-w-[24ch] font-[var(--font-heading)] text-[clamp(1.55rem,2.15vw,2.35rem)] font-semibold leading-[1.16] tracking-normal text-[#f4efe7]";

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

            <h1 className="mt-5 max-w-[13ch] font-[var(--font-serif)] text-[clamp(2.45rem,13vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.025em] text-[#f4efe7] lg:mt-6 lg:max-w-[12ch] lg:text-[clamp(2.9rem,6.8vw,5.4rem)] lg:leading-[0.98]">
              {post.title}
            </h1>

            <p className="mt-5 max-w-[44rem] font-[var(--font-sans)] text-[1.05rem] leading-8 text-white/72 lg:mt-6 lg:text-[1.12rem]">
              {post.description}
            </p>

            <div className="mt-7 grid max-w-[42rem] gap-4 sm:grid-cols-3 lg:mt-8 lg:gap-3">
              {[
                { value: "smaller", label: "wins when the task is bounded" },
                { value: "faster", label: "changes interface behavior" },
                { value: "cheaper", label: "turns AI into infrastructure" },
              ].map((item) => (
                <div key={item.label} className="border-l border-white/10 pl-4">
                  <p className="font-[var(--font-serif)] text-[1.45rem] leading-none text-[#f2ece2] lg:text-[1.65rem]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/52">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 lg:hidden">
              <EfficiencyHeroVisual />
            </div>
          </div>

          <div className="hidden lg:block">
            <EfficiencyHeroVisual />
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-[min(1160px,calc(100vw-1.5rem))] gap-10 py-10 sm:px-6 lg:w-[min(1160px,calc(100vw-6rem))] lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 lg:px-8 lg:py-16">
        <article id="blog-article-root" className="min-w-0">
          <div className="border-t border-white/8 pt-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                ["280x", "lower query cost", "Stanford's 2025 AI Index reports a steep drop for GPT-3.5-level model querying between late 2022 and late 2024."],
                ["3B-8B", "product-grade footprint", "Small models now cover high-volume jobs like classification, rewriting, summarization, and routing."],
                ["system", "beats model", "Retrieval, tools, routers, and verifiers often matter more than one model's raw parameter count."],
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

          <div className="mt-10 space-y-12">
            <section id="thesis" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                The Shift
              </p>
              <h2 className={h2Class}>The story changed from biggest model wins to best system wins.</h2>
              <div className={`mt-6 ${proseClass}`}>
                <p>
                  The first phase of modern language models rewarded a simple move: scale everything.
                  More parameters, more data, more accelerator hours, more impressive benchmark jumps.
                  That phase was real. It gave the industry the frontier systems that made generative
                  AI useful in the first place.
                </p>
                <p>
                  But production work is judged by a different scorecard. A model inside a product has
                  to answer quickly, stay inside a budget, fit a privacy boundary, recover from failure,
                  and justify every expensive escalation. Once the output is good enough for the task,
                  the winning question becomes sharper: what is the smallest, fastest, cheapest system
                  that can do this reliably?
                </p>
                <p>
                  That is why efficient models are winning. Not because large models stopped mattering,
                  and not because benchmarks are irrelevant. They are winning because most user requests
                  are bounded. A support classifier, draft rewriter, code search helper, personal
                  summarizer, or retrieval-grounded answer does not always need a frontier model. It
                  needs enough intelligence wrapped in the right system.
                </p>
              </div>
            </section>

            <section id="frontier" className="scroll-mt-28">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start">
                <div>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                    Efficiency Frontier
                  </p>
                  <h2 className={h2Class}>Capability now bends around a frontier, not a straight line.</h2>
                  <div className={`mt-6 ${proseClass}`}>
                    <p>
                      The old intuition said capability rises mostly with model size. That is still
                      directionally true at the frontier, but it is no longer enough to explain what
                      ships. Better data curation, synthetic data, distillation, sparse activation,
                      quantization, and serving systems all move the quality-per-dollar curve.
                    </p>
                    <p>
                      The better mental model is an efficiency frontier: the set of models and systems
                      that give the best quality for a target cost, latency, memory footprint, or
                      governance constraint. A 70B model can be the right answer for one workflow, while
                      a 7B specialist or 3B on-device model is the correct answer for another.
                    </p>
                    <p>
                      This turns model selection into portfolio design. You do not pick one model and
                      hope it fits every request. You decide which work is easy, which work is valuable,
                      which work is risky, and where the expensive model changes the user outcome.
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

            <section id="small-models" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Small Models
              </p>
              <h2 className={h2Class}>Small language models are becoming product-grade primitives.</h2>
              <div className={`mt-6 ${proseClass}`}>
                <p>
                  The important shift is not that small models suddenly became universal reasoners.
                  They did not. The shift is that carefully trained small models became strong enough
                  for the high-volume middle of product work. Microsoft describes Phi-3 Mini as a 3.8B
                  parameter model designed to be capable enough for phone-class deployment. Apple
                  describes an on-device foundation model around 3B parameters optimized for Apple
                  silicon. These are not research curiosities. They are deployment strategies.
                </p>
                <p>
                  Small models win when the task has shape: summarize this notification, rewrite this
                  paragraph, classify this ticket, extract these fields, choose the next tool, or judge
                  whether a retrieval answer is grounded. In those settings, the product can provide
                  context and constraints that a general model would otherwise have to infer.
                </p>
                <p>
                  The best small-model deployments are honest about scope. They do not pretend a 3B
                  model should replace the frontier everywhere. They put it where speed, privacy,
                  offline behavior, and zero or near-zero marginal cloud cost change the product.
                </p>
              </div>
            </section>

            <section id="systems" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Systems Win
              </p>
              <h2 className={h2Class}>The winning unit is the compound system, not the isolated model.</h2>
              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Sparse activation changes the compute story",
                    body: "Mixture-of-Experts models can expose broad capacity while activating only part of the network per token. The important idea is not just bigger total parameter counts. It is routing compute to the experts that matter for a prompt.",
                  },
                  {
                    title: "Distillation transfers useful behavior downward",
                    body: "A smaller student can learn from a larger teacher, especially when the target behavior is narrow. That makes small models more useful in domains where consistency matters more than general breadth.",
                  },
                  {
                    title: "Quantization makes memory a design variable",
                    body: "Lower precision can reduce memory pressure enough to change what hardware can run the model. QLoRA made 4-bit fine-tuning part of the mainstream toolkit, and newer deployment stacks keep pushing that idea into serving.",
                  },
                  {
                    title: "Inference bottlenecks are often memory bottlenecks",
                    body: "For long context and high concurrency, KV cache size, memory bandwidth, batching, and attention I/O can dominate the user experience. Serving engineering is now product engineering.",
                  },
                  {
                    title: "Retrieval and tools give small models leverage",
                    body: "A smaller model with fresh retrieval, narrow tools, validation, and clear prompts can beat a larger standalone model on the task the user actually cares about.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="grid gap-4 border-t border-white/8 py-6 md:grid-cols-[64px_minmax(0,1fr)]">
                    <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/34">
                      0{index + 1}
                    </span>
                    <div className="max-w-[68ch]">
                      <h3 className="font-[var(--font-serif)] text-[1.45rem] leading-tight text-[#f4efe7]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[1rem] leading-8 text-white/66">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-l-2 border-white/26 pl-6">
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/38">
                  Principle
                </p>
                <p className="mt-3 max-w-[52ch] font-[var(--font-serif)] text-[1.55rem] italic leading-[1.55] text-white/84">
                  The model is only one component. The system decides when it is used, what context it
                  sees, how its answer is checked, and when a stronger model should take over.
                </p>
              </div>
            </section>

            <section id="deployment" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Deployment Math
              </p>
              <h2 className={h2Class}>The quality gap is often smaller than the cost and latency gap.</h2>
              <div className={`mt-6 ${proseClass}`}>
                <p>
                  Stanford's 2025 AI Index reports that querying a model at roughly GPT-3.5-level MMLU
                  performance fell from $20 per million tokens in November 2022 to $0.07 by October
                  2024. That drop matters because it changes the shape of software. AI can move from
                  occasional premium action to routine infrastructure.
                </p>
                <p>
                  But lower prices do not remove the need for architecture. If a smaller model handles
                  70 percent of requests with acceptable quality, the frontier model becomes more
                  valuable, not less. It is reserved for the cases where it actually changes the
                  outcome. That is how teams get better cost, lower latency, and more predictable
                  operations without giving up hard-case performance.
                </p>
              </div>

              <div className="mt-8 overflow-x-auto border-y border-white/8">
                <div className="min-w-[820px]">
                  <div className="grid grid-cols-6 border-b border-white/8 px-6 py-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/40">
                    <span>Type</span>
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
              </div>
            </section>

            <section id="routing" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Routing Patterns
              </p>
              <h2 className={h2Class}>The most useful architecture is a cascade, not one default model.</h2>
              <div className={`mt-6 ${proseClass}`}>
                <p>
                  Most production requests are not equally difficult. A lightweight model can classify
                  intent, compress context, reject bad inputs, or answer easy cases. A medium model can
                  handle the bulk of grounded work. A frontier endpoint can remain available for
                  requests that need broad synthesis, unfamiliar reasoning, or high-stakes review.
                </p>
                <p>
                  Good routing makes escalation explicit. It gives teams a place to measure where
                  quality fails, where latency hurts, and where the expensive model is worth it. It also
                  prevents the common mistake of using a powerful model to hide a weak product system.
                </p>
              </div>

              <div className="mt-8">
                <EfficiencyTradeoffSimulator />
              </div>
              <div className="mt-8">
                <EfficiencyRoutingStack />
              </div>
            </section>

            <section id="limits" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Where Scale Still Wins
              </p>
              <h2 className={h2Class}>Larger models still matter when breadth and novelty dominate.</h2>
              <div className={`mt-6 ${proseClass}`}>
                <p>
                  Efficiency is not an argument against frontier models. Large models still hold a
                  meaningful advantage in broad synthesis, unfamiliar tasks, long-horizon reasoning,
                  multimodal depth, and cases where the cost of a bad answer is high.
                </p>
                <p>
                  The more accurate claim is narrower: large models should no longer be the automatic
                  default for everything. They are strategic assets. They should be used where their
                  extra capability is visible to the user or materially reduces risk.
                </p>
                <p>
                  That distinction keeps teams honest. The question is not whether a large model is
                  better in the abstract. It is whether the added cost, latency, and operational
                  complexity buy a measurable improvement in this workflow.
                </p>
              </div>
            </section>

            <section id="playbook" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Practical Playbook
              </p>
              <h2 className={h2Class}>A stronger default for teams building with models now.</h2>
              <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  "Start with the smallest model that might plausibly work.",
                  "Benchmark on your real task, not only public leaderboards.",
                  "Separate easy, medium, and hard requests before picking a model.",
                  "Treat latency, memory, and observability as product constraints.",
                  "Use retrieval and tools before asking the model to memorize everything.",
                  "Distill or fine-tune when narrow behavior matters more than breadth.",
                  "Quantize and batch only after you know the quality floor.",
                  "Escalate to frontier models when the measured gap is real.",
                  "Log routing decisions so cost and failure modes are visible.",
                  "Revisit thresholds because the efficient frontier keeps moving.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-[1rem] leading-8 text-white/68">
                    <span className="mt-[0.95rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="sources" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                Research Signals
              </p>
              <h2 className={h2Class}>The trend is visible across reports, model releases, and systems papers.</h2>
              <div className="mt-8 grid gap-4">
                {sourceLinks.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid gap-3 border-t border-white/8 py-5 transition hover:border-white/20 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_auto]"
                  >
                    <span className="font-[var(--font-serif)] text-[1.35rem] leading-tight text-[#f4efe7]">
                      {source.label}
                    </span>
                    <span className="text-sm leading-6 text-white/58">{source.note}</span>
                    <ArrowUpRight size={17} className="text-white/34 transition group-hover:text-white/70" />
                  </a>
                ))}
              </div>
            </section>

            <section id="closing" className="scroll-mt-28">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/38">
                What Comes Next
              </p>
              <h2 className={h2Class}>AI becomes infrastructure when it becomes cheap, legible, and routine.</h2>
              <div className={`mt-6 ${proseClass}`}>
                <p>
                  The frontier will keep moving. There will still be reasons to train and use larger
                  models. But the more transformative shift is what happens as useful capability keeps
                  flowing downward into smaller footprints.
                </p>
                <p>
                  That is how AI stops being an occasional premium feature and starts behaving like
                  infrastructure: present in more workflows, available on more devices, routed through
                  clearer systems, and operated with more discipline. The race to scale created the
                  spectacle. The race to efficiency is what makes the technology durable.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/48">
                  Key takeaway
                </p>
                <p className="mt-4 max-w-[58ch] font-[var(--font-serif)] text-[1.5rem] leading-[1.55] text-[#f6efe2]">
                  The practical question is no longer what is the most capable model available. It is
                  what is the cheapest, fastest, smallest system that still does this job well enough
                  to trust.
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
