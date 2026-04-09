import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface AboutSectionProps {
  standalone?: boolean;
}

export function AboutSection({ standalone = false }: AboutSectionProps) {
  return (
    <section id="about" className="site-container section-block">
      <Reveal>
        <p className="section-eyebrow">{standalone ? "Profile" : "About"}</p>
        <h2 className="section-title">From models to working systems.</h2>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.95fr)] lg:items-start">
        <Reveal className="space-y-5" delay={80}>
          <p className="section-copy">
            Work focuses on the engineering side of modern AI systems: machine learning models, LLM
            pipelines, retrieval systems, and agent workflows. The scope includes building the
            surrounding infrastructure required to run these systems reliably: data pipelines,
            model integration, evaluation processes, and backend services that support real
            applications.
          </p>
          <p className="section-copy">
            The work sits at the intersection of machine learning engineering and software
            development, where models become part of larger systems rather than standalone
            experiments. Emphasis is placed on building systems that are maintainable, observable,
            and capable of operating under real workloads.
          </p>
          <p className="section-copy">
            The direction remains consistent: turning models and data into usable software. That
            includes treating data quality, prompt design, system latency, and interface behavior
            as core engineering concerns rather than secondary details.
          </p>
          <p className="section-copy">
            Recent efforts focus on retrieval-augmented systems, tool-using agents, structured
            evaluation of model behavior, and experimentation with workflows where language models
            interact with external tools, APIs, and data sources.
          </p>
        </Reveal>

        <Reveal delay={140} className="flex items-start justify-center lg:justify-end">
          <Image
            src="/assets/ascii-art-clean.png"
            alt="ASCII art portrait"
            width={530}
            height={624}
            priority={standalone}
            className="h-auto w-full max-w-[28rem] object-contain opacity-90 mix-blend-multiply contrast-[1.08] lg:max-w-[30rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
