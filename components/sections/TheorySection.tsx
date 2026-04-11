"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { theoryImplementations } from "@/lib/theory";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function TheorySection() {
  const item = theoryImplementations[0];

  if (!item) {
    return null;
  }

  return (
    <section id="theory" className="site-container section-block">
      <Reveal>
        <div className="space-y-8">
          <div>
            <p className="section-eyebrow">Theory to Implementation</p>
            <h2 className="section-title">
              Papers, methods, and core ideas rebuilt as readable systems work.
            </h2>
            <p className="section-copy mt-5">
              A running set of implementation notes that turns equations and model ideas into code,
              validation, and practical intuition.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-8">
        <div className="max-w-[760px]">
          <Link
            href={`/theory/${item.slug}`}
            className="group block border-t border-[var(--border)] py-5 transition duration-300 hover:border-[var(--border-hover)]"
          >
            <div className="flex flex-wrap items-center gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
              <span>{formatDate(item.date)}</span>
              <span className="opacity-40">/</span>
              <span>{item.readTime}</span>
              <span className="opacity-40">/</span>
              <span>{item.topic}</span>
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-[var(--font-display)] text-[1.9rem] font-black uppercase leading-[0.94] tracking-[-0.06em] text-[var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[38rem] text-sm leading-7 text-[var(--fg-muted)]">
                  {item.excerpt}
                </p>
              </div>

              <span className="mt-1 inline-flex shrink-0 items-center gap-2 text-[var(--fg-muted)] transition group-hover:text-[var(--fg)]">
                <span className="mono text-[10px] uppercase tracking-[0.16em]">Open</span>
                <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
