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
  previewImage?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  body?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "efficiency-era-of-ai",
    title: "Why Efficient Models Are Winning",
    description:
      "Why raw parameter count is no longer the main story, and how efficient models, routing, compression, and compound systems are reshaping AI deployment.",
    excerpt:
      "The interesting shift in AI is not just bigger frontier models. It is the growing ability of smaller models and better systems to deliver useful performance with lower latency, cost, memory pressure, and infrastructure burden.",
    date: "2026-04-09",
    readTime: "18 min read",
    category: "AI Systems",
    tags: ["LLMs", "Model Serving", "Efficiency", "Routing"],
    featured: true,
    layout: "feature",
    previewImage: {
      url: "/assets/img/blog/efficiency-era-preview.png",
      width: 1672,
      height: 941,
      alt: "Preview graphic for Why Efficient Models Are Winning",
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
