"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import type { Project } from "@/types";
import { TechBadge } from "@/components/work/TechBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const highlights = project.features.slice(0, 3);

  return (
    <MagicCard
      className="group"
      gradientColor="var(--bg-elevated)"
      gradientSize={350}
      gradientOpacity={0.6}
    >
      <div className="relative p-3">
        <div className="relative overflow-hidden rounded-[0.85rem] border border-[var(--border)] bg-[var(--bg)]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={1400}
            height={900}
            className="h-[176px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.015] md:h-[212px]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/18 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full bg-[color-mix(in_srgb,var(--bg-card)_82%,transparent)] px-3 py-1.5 backdrop-blur-md">
            <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--fg)]">
              {project.category}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[clamp(1.28rem,1.8vw,1.7rem)] font-semibold leading-tight tracking-[-0.055em] text-[var(--fg)]">
            {project.title}
          </h3>
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
            {project.year}
          </p>
        </div>
        <p className="mt-3 text-[0.92rem] leading-6 text-[var(--fg-muted)]">
          {project.description}
        </p>

        <div className="mt-4 grid grid-cols-3 border-y border-[var(--border)] py-3">
          {project.metrics.map((metric) => (
            <div key={`${project.slug}-${metric.label}`} className="min-w-0 px-2 first:pl-0 last:pr-0">
              <p className="mono truncate text-[9px] uppercase tracking-[0.15em] text-[var(--fg-subtle)]">
                {metric.label}
              </p>
              <p className="mt-1 truncate text-[0.9rem] font-semibold tracking-[-0.03em] text-[var(--fg)]">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="mono inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
            Project highlights
          </p>
          <ul className="mt-3 space-y-2.5">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-subtle)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <Link
            href={`/work/${project.slug}`}
            className="mono inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--fg)] px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] text-[var(--bg)] transition hover:opacity-90 sm:w-auto"
          >
            View details <ArrowUpRight size={14} />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mono inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border-mid)] px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)] transition hover:border-[var(--border-hover)] hover:text-[var(--fg)] sm:w-auto"
            >
              Live preview <Globe size={14} />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mono inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border-mid)] px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)] transition hover:border-[var(--border-hover)] hover:text-[var(--fg)] sm:w-auto"
            >
              Source code <Github size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </MagicCard>
  );
}
