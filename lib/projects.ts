import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "agent-router",
    title: "Agent Router",
    category: "AI Infrastructure",
    description:
      "A split-stack chat routing application built with a Next.js dashboard and FastAPI backend, using LangGraph workflows to manage model selection, provider settings, local chat history, and OpenRouter-powered responses.",
    features: [
      "Next.js dashboard for chat, models, history, and provider controls",
      "FastAPI endpoints for health checks and routed chat requests",
      "LangGraph workflow layer for request orchestration and response shaping",
      "OpenRouter-backed model routing with shared-key or user-supplied provider setup",
      "Local-first settings and conversation history stored in the browser"
    ],
    metrics: [
      { label: "Stack", value: "Full-stack" },
      { label: "Flow", value: "LangGraph" },
      { label: "Storage", value: "Local-first" }
    ],
    year: 2026,
    tags: ["Next.js", "FastAPI", "LangGraph", "OpenRouter", "Tailwind CSS", "TypeScript"],
    image: "/assets/img/projects/screenshots/agent-router.svg",
    githubUrl: "https://github.com/mahirmlk/agent-router",
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
    image: "/assets/img/projects/screenshots/treatment-effect-estimation.svg",
    githubUrl: "https://github.com/mahirmlk/casual-ml-treamtment-effect",
    featured: true
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
