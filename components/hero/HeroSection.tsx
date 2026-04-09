import { Reveal } from "@/components/ui/Reveal";
import { TypeWriter } from "@/components/hero/TypeWriter";
import { HeroActions } from "@/components/hero/HeroActions";

export function HeroSection() {
  return (
    <section className="site-container min-h-[calc(100vh-4rem)] py-16 md:flex md:flex-col md:justify-center">
      <div className="max-w-4xl">
        <Reveal delay={80}>
          <h1
            className="text-[clamp(3.1rem,10vw,7rem)] font-black leading-[0.9] tracking-[-0.07em] text-[var(--fg)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mahir Malik
            <span className="text-[var(--fg-muted)]">.</span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-6 text-xl text-[var(--fg)] md:text-2xl">
            <TypeWriter />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="mt-6 text-[clamp(1.5rem,3.5vw,2.2rem)] font-normal leading-[1.3] tracking-[-0.02em] text-[var(--fg-muted)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Turning complex{" "}
            <strong className="font-semibold italic text-[var(--fg)]" style={{ fontFamily: "var(--font-serif)" }}>
              data
            </strong>
            {" & "}
            <strong className="font-semibold italic text-[var(--fg)]" style={{ fontFamily: "var(--font-serif)" }}>
              models
            </strong>
            {" "}into software people actually use.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--fg-muted)] md:text-lg">
            Machine learning systems, LLM pipelines, and agent-based workflows built around connecting data,
            models, and software into practical tools.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="glass-chip mono rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
              LLM Systems
            </span>
            <span className="glass-chip mono rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
              Agent Workflows
            </span>
            <span className="glass-chip mono rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
              Production AI
            </span>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <HeroActions />
        </Reveal>

        <Reveal delay={460}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <div className="glass-chip rounded-full px-4 py-2">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                Available for selected work
              </p>
            </div>
            <div className="glass-chip rounded-full px-4 py-2">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                Uttar Pradesh / India
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
