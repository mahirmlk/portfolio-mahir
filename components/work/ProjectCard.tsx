import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import type { Project } from "@/types";
import { ProjectPreview } from "@/components/work/ProjectPreview";
import { TechBadge } from "@/components/work/TechBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`card-hover group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--bg-card)] ${
        project.featured ? "" : "opacity-55 saturate-[0.9]"
      }`}
    >
      <div className="p-3 pb-0">
        <ProjectPreview
          project={project}
          className="w-full rounded-[0.9rem]"
          style={{ height: "clamp(190px, 20vw, 250px)" }}
        />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <div className="flex items-center justify-between gap-4">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
            {project.category}
          </p>
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
            {project.year}
          </p>
        </div>

        <h3 className="font-section mt-2 text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--fg)]">
          {project.title}
        </h3>
        <p className="mono-body mt-2.5 line-clamp-3 text-[0.82rem] leading-7 text-[var(--fg-muted)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-6">
          {!project.liveUrl && !project.githubUrl ? (
            <span className="mono inline-flex items-center rounded-full border border-dashed border-[var(--border-mid)] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
              Coming soon
            </span>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              title="Live preview"
              aria-label="Live preview"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-mid)] bg-[var(--nav-pill)] text-[var(--fg-muted)] transition hover:border-[var(--border-hover)] hover:text-[var(--fg)]"
            >
              <Globe size={13} strokeWidth={1.5} />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              title="Source code"
              aria-label="Source code"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-mid)] bg-[var(--nav-pill)] text-[var(--fg-muted)] transition hover:border-[var(--border-hover)] hover:text-[var(--fg)]"
            >
              <Github size={13} strokeWidth={1.5} />
            </a>
          ) : null}
          {project.liveUrl || project.githubUrl ? (
            <Link
              href={`/work/${project.slug}`}
              className="mono inline-flex items-center gap-1 px-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)] transition hover:text-[var(--fg)]"
            >
              Details
              <ArrowUpRight size={12} />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
