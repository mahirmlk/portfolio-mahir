import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "meridian",
    title: "Meridian",
    category: "AI Infrastructure",
    description:
      "An intelligent AI chat router that auto-selects the best free model for each prompt, streams responses over SSE, and supports user-configured providers with Supabase-backed sessions and history.",
    features: [
      "Automatic prompt difficulty routing across free OpenRouter models",
      "Real-time streaming chat responses via Server-Sent Events",
      "Multi-provider support with custom keys and compatible API endpoints",
      "Guest mode with request limits and seamless fallback to user auth",
      "Supabase-backed authentication, sessions, and persistent chat history"
    ],
    metrics: [
      { label: "Providers", value: "10+" },
      { label: "Guest Limit", value: "20 reqs" },
      { label: "Streaming", value: "SSE" }
    ],
    year: 2026,
    tags: ["Next.js 16", "React 19", "FastAPI", "OpenRouter", "Supabase", "TypeScript"],
    image: "/assets/img/projects/screenshots/meridian.png",
    liveUrl: "https://meridian-router-chat.vercel.app/",
    githubUrl: "https://github.com/mahirmlk/meridian",
    featured: true
  },
  {
    slug: "treatment-effect-estimation",
    title: "Treatment Effect Estimation",
    category: "Machine Learning",
    description:
      "A causal inference pipeline for IHDP treatment-effect estimation, covering naive baselines, S/T/X-learners, manual DML, EconML estimators, policy analysis, and reproducible evaluation artifacts for ATE and CATE.",
    features: [
      "Reusable preprocessing pipeline for IHDP with aligned scaling and train/test splits",
      "ATE and CATE estimation with S-Learner, T-Learner, X-Learner, and propensity baselines",
      "Manual DML plus EconML LinearDML and CausalForestDML implementations",
      "Evaluation outputs for PEHE, ATE error, predictions, and summary metrics",
      "Interpretability and policy artifacts including SHAP-based analysis and policy curves"
    ],
    metrics: [
      { label: "Methods", value: "6+" },
      { label: "Dataset", value: "IHDP" },
      { label: "Outputs", value: "ATE/CATE" }
    ],
    year: 2026,
    tags: ["Python", "EconML", "DoWhy", "scikit-learn", "SHAP", "Pandas"],
    image: "/assets/img/projects/screenshots/treatment-effect-estimation.png",
    githubUrl: "https://github.com/mahirmlk/casual-ml-treamtment-effect",
    featured: true
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
