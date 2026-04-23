import { Reveal } from "@/components/ui/Reveal";
import { AboutRoleFlip } from "@/components/sections/AboutRoleFlip";

interface AboutSectionProps {
  standalone?: boolean;
}

const aboutParagraphs = [
  "I like figuring out how modern AI systems actually work when you put them together, not just in theory but in real applications. I spend most of my time working across machine learning and AI stacks—especially LLMs, retrieval-augmented generation (RAG), vector databases, and agent-based architectures—where the goal is not just to generate outputs, but to create systems that can retrieve the right context, reason over it, and take meaningful actions.",
  "I approach projects from an engineering perspective: designing end-to-end pipelines that connect data, retrieval, and model behaviour into a coherent system. This includes building LLM pipelines, grounding responses through vector search, and developing agent workflows that can plan, break down tasks, and execute them reliably.",
  "Currently, the direction is toward agentic AI—systems that combine reasoning, memory, and tools to operate with a level of autonomy. Most of this understanding comes from hands-on work, building and refining projects that reflect how these systems are used in real-world scenarios."
];

export function AboutSection({ standalone = false }: AboutSectionProps) {
  return (
    <section id="about" className="site-container section-block">
      <Reveal>
        <p className="section-eyebrow">{standalone ? "Profile" : "About"}</p>
        <h2 className="section-title">Building AI systems that retrieve, reason, and act.</h2>
        <AboutRoleFlip />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-7 max-w-[76rem] lg:mt-8">
          <p className="max-w-[70rem] text-[1.05rem] leading-8 text-[var(--fg-muted)] sm:text-[1.16rem] sm:leading-9">
            {aboutParagraphs[0]}
          </p>

          <div className="mt-7 grid gap-7 lg:grid-cols-2 lg:gap-12">
            {aboutParagraphs.slice(1).map((paragraph) => (
              <p
                key={paragraph}
                className="text-[1rem] leading-8 text-[var(--fg-muted)] sm:text-[1.08rem] sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
