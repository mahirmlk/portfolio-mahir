import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "ai-startup",
    role: "AI Engineer",
    company: "AI Startup",
    period: "Jan 2024 - Present",
    location: "Remote",
    bullets: [
      "Designed and deployed production RAG pipelines using LangChain, Pinecone, and GPT-class models for enterprise semantic search.",
      "Built multi-agent orchestration systems capable of tool use, task decomposition, and guarded self-reflection loops.",
      "Reduced inference latency by 40% through prompt caching, request batching, and quantization-aware serving strategies.",
      "Developed a FastAPI microservice layer that exposed AI capabilities as versioned APIs for product and partner teams.",
      "Established automated evaluation workflows to measure accuracy, faithfulness, and hallucination rate before release."
    ],
    stack: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "Docker", "AWS"],
    url: "https://example.com"
  },
  {
    id: "research-lab",
    role: "ML Research Engineer",
    company: "Research Lab",
    period: "Jun 2022 - Dec 2023",
    location: "On-site",
    bullets: [
      "Fine-tuned transformer models for classification and extractive QA workloads on domain-specific datasets.",
      "Contributed to published research on efficient attention mechanisms for long-context language models.",
      "Built data preprocessing and annotation pipelines handling tens of millions of training samples.",
      "Implemented mixed-precision training loops and gradient checkpointing on constrained GPU budgets."
    ],
    stack: ["PyTorch", "HuggingFace", "Python", "CUDA", "Weights & Biases", "PEFT"]
  },
  {
    id: "techcorp",
    role: "Software Engineer - ML Platform",
    company: "TechCorp",
    period: "Aug 2021 - May 2022",
    location: "Hybrid",
    bullets: [
      "Built internal ML feature stores and dataset versioning tools used across multiple product teams.",
      "Automated model retraining pipelines with Airflow, cutting manual redeployment effort substantially.",
      "Developed a Next.js dashboard for monitoring model drift and live inference metrics across environments."
    ],
    stack: ["Python", "Airflow", "Next.js", "PostgreSQL", "Docker", "GCP"]
  },
  {
    id: "freelance",
    role: "Freelance AI Consultant",
    company: "Self-employed",
    period: "2020 - Present",
    location: "Remote",
    bullets: [
      "Delivered AI-powered products including chatbots, document intelligence tools, and recommendation systems for clients.",
      "Advised early-stage startups on model selection, evaluation design, and responsible deployment practices.",
      "Built full-stack AI applications with Next.js frontends and Python backends deployed on Vercel and AWS."
    ],
    stack: ["Python", "OpenAI", "Next.js", "Supabase", "Tailwind", "Vercel"]
  }
];
