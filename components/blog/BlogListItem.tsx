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
      className="group grid gap-5 border-t border-white/10 py-6 transition hover:border-white/20 md:grid-cols-[150px_minmax(0,1fr)_120px]"
    >
      <div className="space-y-2">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/42">
          {formatDate(post.date)}
        </p>
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/32">
          {post.readTime}
        </p>
      </div>

      <div className="min-w-0">
        <h2 className="font-[var(--font-display)] text-[clamp(1.8rem,3vw,2.8rem)] font-black uppercase leading-[0.95] tracking-[-0.06em] text-[#f4efe7] transition group-hover:text-white">
          {post.title}
        </h2>
        <p className="mt-4 max-w-[48rem] text-base leading-8 text-white/60">{post.description}</p>
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
