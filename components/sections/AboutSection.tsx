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

      <div className="mt-10 grid gap-8 lg:mt-12 lg:gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.95fr)] lg:items-start">
        <Reveal className="space-y-5" delay={80}>
          <p className="section-copy">
            Work focuses on the engineering side of modern AI systems: machine learning models, LLM
            pipelines, retrieval systems, and agent workflows. The scope includes building the
            surrounding infrastructure required to run these systems reliably: data pipelines,
            model integration, evaluation processes, and backend services that support real
            applications.
          </p>
          <p className="section-copy">
            The work is centered on turning machine learning ideas into systems that can actually
            be shipped, tested, and trusted. That means focusing as much on integration,
            evaluation, and operational reliability as on the models themselves.
          </p>

          <div className="pt-4">
            <p className="section-eyebrow">
              Education &amp; Background
            </p>
            <div className="mt-4 space-y-5">
              <p className="section-copy">
                BSc in Mathematics &amp; Science, not CS, but the probability and linear algebra
                ended up mattering more than I expected.
              </p>
              <p className="section-copy">
                Got serious about ML in 2024. Built my first model, got into agents and LangGraph,
                and it stopped feeling like learning and started feeling like building. Everything
                since has been self-taught and project-driven.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="flex items-start justify-center lg:justify-end">
          <Image
            src="/assets/ascii-art-clean.png"
            alt="ASCII art portrait"
            width={530}
            height={624}
            priority={standalone}
            className="h-auto w-full max-w-[22rem] object-contain opacity-90 mix-blend-multiply contrast-[1.08] sm:max-w-[25rem] lg:max-w-[30rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
