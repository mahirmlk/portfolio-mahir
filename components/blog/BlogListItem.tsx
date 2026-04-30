"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function BlogListItem({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid gap-4 border-t border-white/10 py-5 transition hover:border-white/20 md:grid-cols-[150px_minmax(0,1fr)_120px] md:gap-5 md:py-6"
    >
      <div className="flex flex-wrap gap-x-4 gap-y-1 md:block md:space-y-2">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/42">
          {formatDate(post.date)}
        </p>
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/32">
          {post.readTime}
        </p>
      </div>

      <div className="min-w-0">
        <h2 className="font-[var(--font-display)] text-[clamp(1.55rem,8vw,2.25rem)] font-black uppercase leading-[1] tracking-[-0.045em] text-[#f4efe7] transition group-hover:text-white md:text-[clamp(1.8rem,3vw,2.8rem)] md:leading-[0.95] md:tracking-[-0.06em]">
          {post.title}
        </h2>
        <p className="mt-3 max-w-[48rem] text-[0.95rem] leading-7 text-white/60 md:mt-4 md:text-base md:leading-8">{post.description}</p>
      </div>

      <div className="flex items-start md:justify-end">
        <span className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/42 transition group-hover:text-white/84">
          Open
          <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
}
