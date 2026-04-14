"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { TechBadge } from "@/components/work/TechBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="card-hover group overflow-hidden rounded-[1.05rem] border border-[var(--border)] bg-[var(--bg-card)]"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <div className="relative border-b border-[var(--border)] bg-[linear-gradient(180deg,rgba(17,17,17,0.02)_0%,rgba(17,17,17,0.01)_100%)] p-3">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,17,17,0.045),transparent_58%)]" />
        <div className="relative overflow-hidden rounded-[0.75rem] border border-[var(--border)] bg-[var(--bg)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02)_0%,rgba(17,17,17,0.005)_100%)]" />
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={1400}
            height={900}
            className="h-[172px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.01] md:h-[204px]"
          />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-4">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
            {project.category}
          </p>
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
            {project.year}
          </p>
        </div>

        <h3 className="mt-2 text-[clamp(1.2rem,1.8vw,1.6rem)] font-semibold tracking-[-0.05em] text-[var(--fg)]">
          {project.title}
        </h3>
        <p className="mt-2.5 text-[0.9rem] leading-6 text-[var(--fg-muted)]">
          {project.description}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>

        <div className="mt-4.5 flex flex-wrap items-center gap-2 border-t border-[var(--border)] pt-3">
          <Link
            href={`/work/${project.slug}`}
            className="mono inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border-mid)] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--fg)] transition hover:border-[var(--border-hover)] sm:w-auto"
          >
            View details <ArrowUpRight size={14} />
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mono inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--fg-subtle)] transition hover:border-[var(--border-hover)] hover:text-[var(--fg)] sm:w-auto"
            >
              Source code <Github size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
