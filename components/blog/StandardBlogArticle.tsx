import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";

export function StandardBlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="site-container section-block max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--fg-subtle)] transition hover:text-[var(--fg)]"
      >
        <ArrowLeft size={14} />
        Back to all blogs
      </Link>

      <div className="mt-8 flex flex-wrap gap-2">
        <span className="mono rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
          {post.category}
        </span>
        <span className="mono rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
          {post.readTime}
        </span>
      </div>

      <p className="section-eyebrow mt-10">Blog</p>
      <h1 className="section-title">{post.title}</h1>
      <p className="section-copy mt-5">{post.description}</p>

      <div className="prose-article mt-12">
        {post.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </article>
  );
}
