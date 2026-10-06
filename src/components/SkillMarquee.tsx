import React from "react";
import { skillMarqueeList, skillGroups } from "@/data/skills";

export function SkillMarquee() {
  return (
    <section className="py-20 bg-forest text-ivory overflow-hidden relative border-y border-forest-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-6 border-b border-ivory/15">
          <div>
            <span className="text-xs uppercase tracking-superwide font-bold text-gold block">
              TOOL STACK &amp; SPECIALIZATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-ivory tracking-tight mt-1">
              Curated Production Stack. No Guesswork.
            </h2>
          </div>
          <span className="text-xs text-ivory/60 font-mono">
            Enterprise Grade • Zero Bloat
          </span>
        </div>
      </div>

      {/* Infinite Typography Marquee */}
      <div className="relative w-full overflow-hidden py-4 border-y border-ivory/10 bg-forest-900/60">
        <div className="animate-marquee-track flex items-center whitespace-nowrap">
          {/* Double list for continuous seamless loop */}
          {[...skillMarqueeList, ...skillMarqueeList].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-6 mx-4 sm:mx-6 group cursor-default"
            >
              <span className="text-base sm:text-lg font-sans font-semibold tracking-tight text-ivory/80 group-hover:text-gold transition-colors">
                {skill}
              </span>
              <span className="text-gold/60 text-xs font-mono">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Editorial Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 border border-ivory/15 bg-forest-950/40 space-y-4"
            >
              <h3 className="text-sm font-sans font-bold uppercase tracking-wider text-gold border-b border-ivory/10 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="text-xs font-medium text-ivory/80 flex items-center gap-2 hover:text-ivory transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
