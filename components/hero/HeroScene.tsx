export function HeroScene() {
  return (
    <div className="relative mx-auto mt-12 grid w-full max-w-4xl gap-4 rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--bg-card)_96%,transparent),color-mix(in_srgb,var(--bg-raised)_92%,transparent))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.22),transparent_68%)] blur-2xl animate-float-orb" />
      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
          <div className="mono mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
            <span>Current Build</span>
            <span className="flex items-center gap-2 text-[var(--accent-green)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-green)] animate-pulse-dot" />
              Live
            </span>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                System Layer
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--fg-muted)]">
                Retrieval, evals, and agent orchestration designed as reliable product surfaces instead of demos.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                Delivery Layer
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--fg-muted)]">
                APIs, frontend workflows, and observability tuned for latency, trust, and iterative shipping.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
          <div className="mono mb-4 text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
            Delivery Snapshot
          </div>
          <div className="space-y-4">
            {[
              ["RAG systems", "Production retrieval, hybrid search, and evaluation loops"],
              ["AI product UX", "Interfaces that make model behavior legible and usable"],
              ["Realtime agents", "Tooling, streaming, and workflow orchestration"]
            ].map(([title, copy]) => (
              <div key={title} className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-sm font-medium text-[var(--fg)]">{title}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--fg-muted)]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
