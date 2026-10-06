import React from "react";
import { processSteps } from "@/data/process";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-ivory relative border-t border-forest/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-gold" />
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              THE METHODOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-ink tracking-tightest">
            FROM IDEA TO IMPACT.
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            A battle-tested 5-phase delivery framework that eliminates guesswork, avoids bloated delays, and delivers measurable commercial outcomes.
          </p>
        </div>

        {/* Editorial Process Steps */}
        <div className="space-y-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-ivory border border-forest/15 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-gold hover:bg-ivory-50/70 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Step Number & Phase */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between items-baseline lg:items-start gap-2">
                  <span className="text-4xl sm:text-5xl font-sans font-extrabold text-forest/30 group-hover:text-forest transition-colors">
                    {step.number}
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-widest font-bold text-gold-dark block">
                      PHASE {step.number}
                    </span>
                    <h3 className="text-lg font-sans font-bold text-forest tracking-tight mt-0.5">
                      {step.phase}
                    </h3>
                  </div>
                </div>

                {/* Narrative & Description */}
                <div className="lg:col-span-5 space-y-2">
                  <h4 className="text-lg sm:text-xl font-sans font-bold text-ink">
                    {step.title}
                  </h4>
                  <p className="text-xs font-semibold text-forest">
                    {step.tagline}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                {/* Key Execution Pillars */}
                <div className="lg:col-span-4 pt-4 lg:pt-0 lg:border-l border-forest/10 lg:pl-8 space-y-2.5">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-ink-muted block">
                    PHASE CHECKPOINTS
                  </span>
                  <ul className="space-y-1.5">
                    {step.details.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs text-ink flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
