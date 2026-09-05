import { Reveal } from "@/components/ui/Reveal";

interface AboutSectionProps {
  standalone?: boolean;
}

export function AboutSection({ standalone = false }: AboutSectionProps) {
  return (
    <section id="about" className="site-container section-block">
      <Reveal>
        <p className="section-eyebrow">{standalone ? "Profile" : "About"}</p>
        {standalone ? (
          <h1 className="section-title">Building AI systems that retrieve, reason, and act.</h1>
        ) : (
          <h2 className="section-title">Building AI systems that retrieve, reason, and act.</h2>
        )}
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-7 max-w-[76rem] lg:mt-8">
          <p className="max-w-[70rem] text-[1.05rem] leading-8 text-[var(--fg-muted)] sm:text-[1.16rem] sm:leading-9">
            i build <span className="about-keyword">ai systems</span> that
            actually do something useful.{" "}
            <span className="about-keyword">models</span>,{" "}
            <span className="about-keyword">agents</span>,{" "}
            <span className="about-keyword">automations</span>, i work across
            the whole pipeline from training to{" "}
            <span className="about-keyword">production</span>. i spend my time
            making <span className="about-keyword">llms</span> work in the real
            world, not just in chat demos. full stack means i handle the messy
            parts too, from <span className="about-keyword">inference</span>{" "}
            pipelines and <span className="about-keyword">vector search</span>{" "}
            to the frontend people actually use. i do this because building
            things that learn and act on their own is just too much fun to
            stop. i like where research meets production, where things break
            in interesting ways and you learn fast. i break things, fix them
            faster, and ship before overthinking kills the idea.{" "}
            <span className="about-keyword">still learning</span>. still
            building. still convinced the best ai is the kind you don&apos;t
            even notice.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
