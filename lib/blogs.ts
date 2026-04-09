export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  layout: "feature" | "standard";
  body?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "efficiency-era-of-ai",
    title: "The Efficiency Era of AI",
    description:
      "Why raw parameter count is no longer the main story, and how small, disciplined models are reshaping deployment economics.",
    excerpt:
      "The interesting shift in AI is not just bigger frontier models. It is the growing ability of smaller models to match useful performance with dramatically lower latency, cost, and infrastructure burden.",
    date: "2026-04-09",
    readTime: "14 min read",
    category: "AI Systems",
    tags: ["LLMs", "Model Serving", "Efficiency", "Deployment"],
    featured: true,
    layout: "feature",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
