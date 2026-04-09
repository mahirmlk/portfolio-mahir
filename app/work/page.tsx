import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects archive for Mahir Malik, including AI infrastructure and causal ML work."
};

export default function WorkPage() {
  return (
    <section className="site-container section-block">
      <Reveal>
        <p className="section-eyebrow">Work Archive</p>
        <h1 className="section-title">Repository-backed systems and applied ML work.</h1>
        <p className="section-copy mt-5">
          The archive now focuses on real project repos instead of placeholder demos, with work
          spanning chat infrastructure and causal inference pipelines.
        </p>
      </Reveal>

      <Reveal className="mt-10" delay={100}>
        <ProjectGrid projects={[...projects].sort((a, b) => b.year - a.year)} />
      </Reveal>
    </section>
  );
}
