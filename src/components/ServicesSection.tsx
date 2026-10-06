"use client";

import React, { useState } from "react";
import { services } from "@/data/services";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

export function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(services[0].id);

  return (
    <section id="services" className="py-24 lg:py-32 bg-ivory-50 border-t border-forest/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-gold" />
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              WHAT I DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-ink tracking-tightest">
            Four Core Disciplines. One Singular Objective: Business Growth.
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            I don&apos;t build generic websites in a vacuum. Every service category is engineered to connect brand prestige, code performance, and predictable customer acquisition.
          </p>
        </div>

        {/* Minimal Editorial Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-ivory border border-forest/15 p-8 sm:p-10 flex flex-col justify-between editorial-card-hover group relative"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-forest group-hover:w-full group-hover:bg-gold transition-all duration-500" />

              <div className="space-y-6">
                {/* Number & Category Name */}
                <div className="flex items-start justify-between">
                  <span className="text-3xl font-sans font-extrabold text-forest/25 group-hover:text-forest transition-colors">
                    {service.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-gold-dark bg-gold/10 px-2.5 py-1">
                    STRATEGIC DISCIPLINE
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-forest tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-dark mt-1">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed mt-3">
                    {service.description}
                  </p>
                </div>

                {/* Scope items / Skills list */}
                <div className="pt-4 border-t border-forest/10 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-ink-muted block">
                    SPECIALIZED FOCUS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-ivory-100 border border-forest/15 px-3 py-1 font-medium text-forest group-hover:border-forest/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables checklist */}
                <div className="pt-4 border-t border-forest/10 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-ink-muted block">
                    KEY DELIVERABLES
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((deliv, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-ink flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-forest rounded-full flex-shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-8 mt-6 border-t border-forest/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-xs uppercase tracking-widest font-bold text-forest inline-flex items-center gap-1.5 group-hover:text-gold-dark transition-colors"
                >
                  <span>Discuss This Service</span>
                  <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
