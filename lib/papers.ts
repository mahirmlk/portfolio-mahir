export type PaperPreview = {
  slug: string;
  title: string;
  description: string;
  date: string;
  year: string;
  tags: string[];
  href: string;
  githubUrl?: string;
};

export const papersBaseUrl = "https://papers.mahirmalik.in";

export const paperPreviews: PaperPreview[] = [
  {
    slug: "linear-regression",
    title: "Linear Regression From Scratch",
    description:
      "A hands-on implementation of four regression models from the ground up using only NumPy, with regularization, coordinate descent, interactive visuals, and a real-world housing price prediction example.",
    date: "2026-01-01",
    year: "2026",
    tags: ["linear-regression", "supervised-learning", "numpy", "python"],
    href: `${papersBaseUrl}/papers/linear-regression`,
    githubUrl: "https://github.com/mahirmlk/linear-regression.git",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
