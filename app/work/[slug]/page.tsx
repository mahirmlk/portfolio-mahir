import { promises as fs } from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TechBadge } from "@/components/work/TechBadge";
import { getProjectBySlug, projects } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

type Block =
  | { type: "heading"; value: string }
  | { type: "paragraph"; value: string }
  | { type: "list"; items: string[] };

async function readProjectContent(slug: string) {
  const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`);

  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return "";
  }
}

function parseBlocks(raw: string): Block[] {
  const lines = raw.split(/\r?\n/);
  const contentLines: string[] = [];
  let inFrontmatter = false;

  lines.forEach((line, index) => {
    if (line.trim() === "---" && index === 0) {
      inFrontmatter = true;
      return;
    }
    if (line.trim() === "---" && inFrontmatter) {
      inFrontmatter = false;
      return;
    }
    if (!inFrontmatter) {
      contentLines.push(line);
    }
  });

  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", value: paragraph.join(" ").trim() });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "list", items: [...list] });
      list = [];
    }
  };

  contentLines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", value: trimmed.slice(3) });
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.slice(2));
      return;
    }

    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();
  return blocks;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = await readProjectContent(slug);
  const blocks = parseBlocks(content);

  return (
    <article className="site-container section-block">
      <Link
        href="/work"
        className="glass-chip mono inline-flex rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
      >
        Back to archive
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="section-eyebrow">Case Study / {project.year}</p>
          <h1 className="section-title">{project.title}</h1>
          <p className="section-copy mt-5">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TechBadge key={tag}>{tag}</TechBadge>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mono rounded-md border border-[var(--border-mid)] px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-[var(--fg-muted)] transition hover:border-[var(--border-hover)] hover:text-[var(--fg)]"
              >
                Live project
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mono rounded-md border border-[var(--border-mid)] px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-[var(--fg-muted)] transition hover:border-[var(--border-hover)] hover:text-[var(--fg)]"
              >
                Source code
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative min-h-72 overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--bg-card)] shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
          <Image src={project.image} alt={`${project.title} screenshot`} fill className="object-cover" />
        </div>
      </div>

      <div className="mt-10 rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-7">
        <div className="flex items-end justify-between gap-4 border-b border-[var(--border)] pb-4">
          <div>
            <p className="section-eyebrow">Project Features</p>
            <h2 className="mt-3 text-[1.5rem] font-semibold tracking-[-0.04em] text-[var(--fg)]">
              What this case study includes
            </h2>
          </div>
          <p className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--fg-subtle)]">
            {String(project.features.length).padStart(2, "0")} features
          </p>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="rounded-[1rem] border border-[var(--border)] bg-white px-4 py-3 text-sm leading-7 text-[var(--fg-muted)]"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="prose-article mt-14 max-w-3xl">
        {blocks.length ? (
          blocks.map((block, index) => {
            if (block.type === "heading") {
              return <h2 key={`${block.value}-${index}`}>{block.value}</h2>;
            }
            if (block.type === "list") {
              return (
                <ul key={`list-${index}`}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={`${block.value}-${index}`}>{block.value}</p>;
          })
        ) : (
          <p>
            The case study content for this project lives in <code>content/projects/{project.slug}.mdx</code>{" "}
            and can be expanded with richer narrative detail.
          </p>
        )}
      </div>
    </article>
  );
}
