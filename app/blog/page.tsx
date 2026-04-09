import type { Metadata } from "next";
import { blogPosts } from "@/lib/blogs";
import { BlogListItem } from "@/components/blog/BlogListItem";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Writing on AI systems, retrieval reliability, deployment tradeoffs, and product-minded engineering.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#090b0f] pb-24 pt-10 text-[#eee8de]">
      <section className="border-b border-white/8">
        <div className="mx-auto w-[min(1240px,calc(100vw-2rem))] px-2 pb-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/42">
                Blog Index
              </p>
              <div className="text-right">
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/36">
                  written by
                </p>
                <p className="mt-2 font-[var(--font-serif)] text-[1.35rem] font-semibold text-[#f4efe7]">
                  Mahir Malik
                </p>
              </div>
            </div>

            <div>
              <h1 className="mt-2 max-w-[9ch] font-[var(--font-display)] text-[clamp(3.8rem,9vw,7.3rem)] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[#f4efe7]">
                Systems essays with weight.
              </h1>
              <p className="mt-8 max-w-[44rem] text-[1.08rem] leading-9 text-white/66">
                Long-form writing on LLM deployment, retrieval systems, evaluation discipline, and
                product decisions around AI. Less trend-chasing, more engineering signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 w-[min(1100px,calc(100vw-3rem))] px-2">
        <div className="border-b border-white/10 pb-6">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/42">
            Table of Contents
          </p>
          <h2 className="mt-4 font-[var(--font-serif)] text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.96] tracking-[-0.05em] text-[#f4efe7]">
            Writing
          </h2>
        </div>

        <div className="mt-4">
          {blogPosts.map((post) => (
            <BlogListItem key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
