import React from "react";
import { ArrowRight, Compass, Cpu, TrendingUp } from "lucide-react";

export function WhyWorkWithMe() {
  const points = [
    {
      number: "01",
      title: "DESIGN WITH PURPOSE",
      subtitle: "Clarity over decorative noise.",
      description:
        "Every layout decision, typography pairing, and spacing ratio is engineered to build authority and guide visitor psychology toward taking action.",
      icon: Compass,
      outcome: "Visitors immediately understand who you are and why they should choose you.",
    },
    {
      number: "02",
      title: "TECHNICAL + CREATIVE",
      subtitle: "The rare full-stack growth intersection.",
      description:
        "I don't just hand off static Figma files or configure bloated drag-and-drop templates. I architect clean, sub-second code bases aligned with real advertising and SEO campaigns.",
      icon: Cpu,
      outcome: "No finger-pointing between your designer, developer, and marketing agency.",
    },
    {
      number: "03",
      title: "RESULTS OVER VANITY",
      subtitle: "Impact measured in pipeline, not awards alone.",
      description:
        "A website that looks pretty but converts at 0.5% is a financial liability. We build digital assets specifically designed to maximize inquiries, transactions, and retention.",
      icon: TrendingUp,
      outcome: "Tangible business metrics: higher conversion rates and lower acquisition costs.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-ivory border-t border-forest/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-gold" />
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              THE VALUE PROPOSITION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-ink tracking-tightest leading-[1.1]">
            NOT JUST A WEBSITE.
            <br />
            <span className="text-forest font-serif italic font-normal">
              A BUSINESS ASSET.
            </span>
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            The traditional agency model separates design from engineering and marketing. Here is what happens when one specialized partner masters all three.
          </p>
        </div>

        {/* Editorial Three-Column Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="bg-ivory border border-forest/15 p-8 sm:p-10 flex flex-col justify-between editorial-card-hover group relative"
              >
                <div className="space-y-6">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-sans font-extrabold text-forest/25 group-hover:text-forest transition-colors">
                      {p.number}
                    </span>
                    <div className="w-10 h-10 border border-forest/15 flex items-center justify-center bg-ivory-50 group-hover:border-gold transition-colors">
                      <Icon className="w-4 h-4 text-forest group-hover:text-gold transition-colors" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-sans font-bold text-forest tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-gold-dark mt-1">
                      {p.subtitle}
                    </p>
                    <p className="text-sm text-ink-muted leading-relaxed mt-3">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-forest/10">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-ink-muted block mb-1">
                    COMMERCIAL IMPACT
                  </span>
                  <p className="text-xs font-medium text-forest leading-normal">
                    {p.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
