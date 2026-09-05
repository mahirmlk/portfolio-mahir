"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { paperPreviews, papersBaseUrl } from "@/lib/papers";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function TheorySection() {
  const featured = paperPreviews.find((paper) => paper.featured) ?? paperPreviews[0];
  const glimpses = paperPreviews.filter((paper) => paper !== featured);

  if (!featured) {
    return null;
  }

  return (
    <section id="theory" className="site-container section-block">
      <Reveal>
        <div className="space-y-8">
          <div>
            <p className="section-eyebrow">Theory to Implementation</p>
            <h2 className="section-title">
              Papers, methods, and core ideas rebuilt on a dedicated implementation site.
            </h2>
            <p className="section-copy mt-5">
              Latest previews from my paper implementation archive, with full writeups, code, and
              visuals hosted on the separate papers site.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-8">
        <div className="max-w-[640px] space-y-4">
          <article className="apple-glass group rounded-[1.1rem] p-5 transition duration-300 hover:-translate-y-1">
            <a href={featured.href} target="_blank" rel="noopener noreferrer" className="block">
                <h3 className="font-feature text-[1.05rem] font-normal leading-[1.05] tracking-[-0.01em] text-[var(--fg)] transition group-hover:opacity-90 sm:text-[1.25rem]">
                {featured.title}
              </h3>
            </a>
            <p className="mono-body mt-2.5 max-w-[42rem] text-[0.8rem] leading-7 text-[var(--fg-muted)]">
              {featured.description}
            </p>

            <div className="mt-4 flex items-center justify-end gap-2">
              <div className="flex items-center gap-2">
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open paper"
                  aria-label="Open paper"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-mid)] bg-[var(--nav-pill)] text-[var(--fg-muted)] transition hover:border-[var(--border-hover)] hover:text-[var(--fg)]"
                >
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </a>
                {featured.githubUrl ? (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Source code"
                    aria-label="Source code"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-mid)] bg-[var(--nav-pill)] text-[var(--fg-muted)] transition hover:border-[var(--border-hover)] hover:text-[var(--fg)]"
                  >
                    <Github size={13} strokeWidth={1.5} />
                  </a>
                ) : null}
              </div>
            </div>
          </article>

          {glimpses.length ? (
            <div className="space-y-3 [mask-image:linear-gradient(180deg,black_55%,transparent_100%)]">
              {glimpses.map((paper, index) => (
                <Link
                  key={paper.slug}
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between gap-4 rounded-[1.25rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-card)_80%,transparent)] px-5 py-4 transition duration-300 hover:border-[var(--border-hover)] ${
                    index === 0 ? "opacity-70" : "opacity-40"
                  }`}
                >
                  <div className="min-w-0">
                    <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                      {formatDate(paper.date)} / {paper.tags[0]}
                    </p>
                    <h4 className="font-feature mt-1.5 truncate text-[1.05rem] font-normal tracking-[-0.01em] text-[var(--fg)]">
                      {paper.title}
                    </h4>
                    <p className="mono-body mt-1 truncate text-[0.78rem] text-[var(--fg-muted)]">
                      {paper.description}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-[var(--fg-muted)] transition group-hover:text-[var(--fg)]">
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          ) : null}

          <Link
            href={papersBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
          >
            <span className="mono text-[10px] uppercase tracking-[0.16em]">Show more papers</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
