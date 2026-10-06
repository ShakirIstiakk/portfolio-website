import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  layoutVariant?: "large" | "standard" | "compact";
  index: number;
}

export function ProjectCard({ project, layoutVariant = "standard", index }: ProjectCardProps) {
  const isLarge = layoutVariant === "large";

  return (
    <article
      className={`group relative flex flex-col bg-ivory border border-forest/15 editorial-card-hover overflow-hidden ${
        isLarge ? "lg:col-span-12" : "lg:col-span-6"
      }`}
    >
      {/* Editorial Header / Metadata Row */}
      <div className="p-6 sm:p-8 border-b border-forest/10 flex flex-wrap items-center justify-between gap-4 bg-ivory-50/50">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-forest bg-forest/5 px-2.5 py-1 border border-forest/10">
            0{index + 1}
          </span>
          <div>
            <span className="text-[11px] uppercase tracking-widest text-gold-dark font-semibold">
              {project.industry}
            </span>
            <p className="text-xs text-ink-muted">Role: {project.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {project.fullScreenshot && (
            <span className="text-[10px] uppercase tracking-wider font-bold text-forest bg-gold/20 border border-gold/40 px-2.5 py-1">
              Live Build Featured
            </span>
          )}

          {project.metricHighlight && (
            <div className="flex items-center gap-2 bg-forest/5 border border-forest/15 px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-xs font-bold text-forest">
                {project.metricHighlight.value}
              </span>
              <span className="text-[11px] text-ink-muted">
                {project.metricHighlight.label}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Main Visual Image Area */}
      <Link
        href={`/work/${project.slug}`}
        className={`relative w-full overflow-hidden bg-forest-950 block ${
          isLarge ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} - ${project.tagline}`}
          fill
          sizes={isLarge ? "100vw" : "(max-width: 1024px) 100vw, 50vw"}
          className="object-cover object-top filter transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-forest-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-ivory text-forest px-4 py-2 text-xs uppercase tracking-widest font-bold shadow-lg flex items-center gap-2">
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </div>
        </div>
      </Link>

      {/* Project Narrative & Technologies */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl font-sans font-bold text-forest tracking-tight group-hover:text-gold-dark transition-colors">
              <Link href={`/work/${project.slug}`}>{project.title}</Link>
            </h3>
            <Link
              href={`/work/${project.slug}`}
              className="p-2 border border-forest/15 text-forest group-hover:bg-forest group-hover:text-ivory group-hover:border-forest transition-colors flex-shrink-0"
              aria-label={`View case study for ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-forest/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium text-ink-muted bg-ivory-200/50 border border-forest/10 px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-forest group-hover:text-gold-dark transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
