"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  const papers = paperPreviews;

  if (papers.length === 0) {
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
        <div className="max-w-[820px]">
          <div className="border-t border-[var(--border)]">
            {papers.map((paper) => (
              <Link
                key={paper.slug}
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-[var(--border)] py-5 transition duration-300 hover:border-[var(--border-hover)]"
              >
                <div className="flex flex-wrap items-center gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
                  <span>{formatDate(paper.date)}</span>
                  <span className="opacity-40">/</span>
                  <span>{paper.year}</span>
                  <span className="opacity-40">/</span>
                  <span>{paper.tags[0]}</span>
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-[var(--font-display)] text-[1.55rem] font-black uppercase leading-[0.94] tracking-[-0.06em] text-[var(--fg)] sm:text-[1.9rem]">
                      {paper.title}
                    </h3>
                    <p className="mt-3 max-w-[42rem] text-sm leading-7 text-[var(--fg-muted)]">
                      {paper.description}
                    </p>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-2 text-[var(--fg-muted)] transition group-hover:text-[var(--fg)] sm:mt-1">
                    <span className="mono text-[10px] uppercase tracking-[0.16em]">Open</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href={papersBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
          >
            <span className="mono text-[10px] uppercase tracking-[0.16em]">Show more papers</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
