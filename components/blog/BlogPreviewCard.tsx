"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function BlogPreviewCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block aspect-square rounded-[1.1rem] border border-[var(--border)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--bg-card)_96%,transparent),color-mix(in_srgb,var(--bg-raised)_92%,transparent))] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[0_28px_70px_rgba(17,17,17,0.08)]"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
            {formatDate(post.date)}
          </span>
          <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
            {post.readTime}
          </span>
        </div>

        <div className="mt-8">
          <h3 className="font-[var(--font-display)] text-[2.55rem] font-black uppercase leading-[0.94] tracking-[-0.06em] text-[var(--fg)]">
            {post.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-[var(--fg-muted)]">{post.description}</p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <p className="max-w-[28ch] text-sm leading-7 text-[var(--fg-subtle)]">{post.excerpt}</p>
          <span className="inline-flex shrink-0 items-center gap-2 text-[var(--fg-muted)] transition group-hover:text-[var(--fg)]">
            <span className="mono text-[11px] uppercase tracking-[0.16em]">Read</span>
            <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}
