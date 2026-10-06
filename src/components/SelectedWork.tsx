"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Plus } from "lucide-react";
import { projects, upcomingProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function SelectedWork() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "bricks", label: "Bricks Builder" },
    { id: "elementor", label: "Elementor Pro" },
    { id: "cro", label: "CRO & E-Commerce" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "bricks") return p.technologies.includes("Bricks Builder");
    if (filter === "elementor") return p.technologies.includes("Elementor Pro");
    if (filter === "cro")
      return (
        p.technologies.includes("WooCommerce") ||
        p.role.includes("Marketing") ||
        p.role.includes("CRO")
      );
    return true;
  });

  return (
    <section id="work" className="py-24 lg:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-forest/15">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-gold" />
              <span className="text-xs uppercase tracking-superwide font-bold text-forest">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-ink tracking-tightest">
              Digital Experiences Built to Look Better, Perform Faster, and Convert Stronger.
            </h2>
            <p className="text-base text-ink-muted leading-relaxed">
              Every client project is treated as a strategic business asset. From high-speed custom WordPress architectures to high-converting eCommerce and B2B funnels.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-xs uppercase tracking-widest font-bold px-4 py-2 border transition-all ${
                  filter === cat.id
                    ? "bg-forest text-ivory border-forest"
                    : "bg-ivory border-forest/15 text-ink-muted hover:border-forest/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Project 1: 1770 Beach - Featured Large Card spanning 12 cols */}
          {filteredProjects[0] && (
            <ProjectCard
              project={filteredProjects[0]}
              layoutVariant="large"
              index={0}
            />
          )}

          {/* Project 2 & 3: 2-column asymmetric split */}
          {filteredProjects.slice(1, 3).map((proj, idx) => (
            <ProjectCard
              key={proj.slug}
              project={proj}
              layoutVariant="standard"
              index={idx + 1}
            />
          ))}

          {/* Project 4 & 5: remaining 2-column asymmetric split */}
          {filteredProjects.slice(3, 5).map((proj, idx) => (
            <ProjectCard
              key={proj.slug}
              project={proj}
              layoutVariant="standard"
              index={idx + 3}
            />
          ))}
        </div>

        {/* Future Projects Placeholder Section */}
        <div className="mt-16 pt-12 border-t border-forest/15">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-widest font-bold text-ink-muted flex items-center gap-2">
              <Plus className="w-3.5 h-3.5 text-gold" />
              UPCOMING CLIENT RELEASES
            </span>
            <span className="text-xs text-ink-muted font-mono">
              In Production
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((item, idx) => (
              <div
                key={idx}
                className="p-6 border border-dashed border-forest/20 bg-ivory-50/40 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-gold-dark font-semibold">
                      {item.industry}
                    </span>
                    <span className="text-[10px] font-bold text-forest bg-forest/5 px-2 py-0.5 border border-forest/10">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-sans font-bold text-forest mt-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ink-muted mt-1">
                    Case Study Documentation in Progress • Deployment scheduled for 2026
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-forest/10">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-ink-muted bg-ivory-200/40 px-2 py-0.5 border border-forest/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
