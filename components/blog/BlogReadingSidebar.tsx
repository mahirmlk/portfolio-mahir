"use client";

import { useEffect, useState } from "react";

type SectionLink = {
  id: string;
  label: string;
};

type BlogReadingSidebarProps = {
  sections: SectionLink[];
  readTime: string;
  category: string;
  tags: string[];
};

export function BlogReadingSidebar({
  sections,
  readTime,
  category,
  tags,
}: BlogReadingSidebarProps) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("blog-article-root");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = Math.max(article.scrollHeight - viewportHeight, 1);
      const consumed = Math.min(Math.max(-rect.top, 0), total);
      setProgress((consumed / total) * 100);
      const offsets = sections
        .map((section) => {
          const node = document.getElementById(section.id);
          if (!node) return null;
          return {
            id: section.id,
            distance: Math.abs(node.getBoundingClientRect().top - 160),
            top: node.getBoundingClientRect().top,
          };
        })
        .filter((item): item is { id: string; distance: number; top: number } => item !== null)
        .sort((a, b) => a.distance - b.distance);

      const current = offsets.find((item) => item.top <= window.innerHeight * 0.45) ?? offsets[0];
      if (current?.id) {
        setActiveId(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sections]);

  return (
    <aside className="sticky top-28 hidden h-fit lg:block">
      <div className="pl-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/40">
              Reading Progress
            </p>
            <p className="mt-2 text-sm text-white/78">{Math.round(progress)}% complete</p>
          </div>
          <div className="mt-1 h-20 w-px bg-white/10">
            <div
              className="w-px bg-white transition-[height] duration-300"
              style={{ height: `${Math.max(progress, 6)}%` }}
            />
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-6">
          <div className="space-y-4">
            <div>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/34">
                Read Time
              </p>
              <p className="mt-1 text-sm text-white/78">{readTime}</p>
            </div>
            <div>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/34">
                Topic
              </p>
              <p className="mt-1 text-sm text-white/78">{category}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-6">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/40">
            Topics
          </p>
          <nav className="mt-4 space-y-2">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center gap-3 py-1.5 text-sm transition ${
                    isActive
                      ? "text-white"
                      : "text-white/46 hover:text-white/82"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition ${
                      isActive ? "bg-white" : "bg-white/20"
                    }`}
                  />
                  <span>{section.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/8 pt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="mr-3 inline-block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-white/36"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
