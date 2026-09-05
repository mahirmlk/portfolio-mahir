export type PaperPreview = {
  slug: string;
  title: string;
  description: string;
  date: string;
  year: string;
  tags: string[];
  href: string;
  githubUrl?: string;
  featured?: boolean;
};

export const papersBaseUrl = "https://papers.mahirmalik.in";

export const paperPreviews: PaperPreview[] = [
  {
    slug: "gaussian-mixture-models",
    title: "Gaussian Mixture Models",
    description:
      "Soft clustering via expectation-maximization — points can belong to multiple groups at once. Covers covariance choices, numerical stability, initialization restarts, and held-out likelihood checks against sklearn.",
    date: "2026-01-01",
    year: "2026",
    tags: ["clustering", "expectation-maximization", "unsupervised-learning", "numpy"],
    href: `${papersBaseUrl}/papers/gaussian-mixture-models`,
    githubUrl: "https://github.com/mahirmlk/papers-implementations/tree/main/gaussian_mixture_model",
    featured: true,
  },
  {
    slug: "gradient-boosting-machine",
    title: "Gradient Boosting Machine",
    description:
      "What gradient boosting actually does — one shallow tree at a time, each fitting the errors the previous trees left behind.",
    date: "2026-01-01",
    year: "2026",
    tags: ["boosting", "trees", "ensemble-methods", "numpy"],
    href: `${papersBaseUrl}/papers/gradient-boosting-machine`,
  },
  {
    slug: "multi-layer-perceptron",
    title: "Multi-Layer Perceptron",
    description:
      "A basic neural network without any framework magic. Forward pass, backprop, weight updates — all written out in NumPy.",
    date: "2026-01-01",
    year: "2026",
    tags: ["neural-networks", "backpropagation", "numpy", "deep-learning"],
    href: `${papersBaseUrl}/papers/multi-layer-perceptron`,
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
