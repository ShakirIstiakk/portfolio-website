import React from "react";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-50 border-t border-forest/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-forest/15">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-gold" />
              <span className="text-xs uppercase tracking-superwide font-bold text-forest">
                CLIENT PERSPECTIVES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-ink tracking-tightest">
              Trusted by Ambitious Founders &amp; Operators.
            </h2>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-mono text-ink-muted bg-ivory border border-forest/10 px-3 py-1">
              Endorsements &amp; Case Study Feedback
            </span>
          </div>
        </div>

        {/* Editorial Non-Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory border border-forest/15 p-8 sm:p-10 flex flex-col justify-between editorial-card-hover group relative"
            >
              {/* Subtle Placeholder Indicator Tag for Easy Code Maintenance */}
              {t.isPlaceholder && (
                <div className="sr-only">
                  {/* Internal marker: Placeholder testimonial awaiting updated client video quote */}
                  [STATUS: PLACEHOLDER_TEMPLATE]
                </div>
              )}

              <div className="space-y-6">
                <Quote className="w-8 h-8 text-gold/60 group-hover:text-gold transition-colors" />

                <blockquote className="text-sm sm:text-base text-ink leading-relaxed font-serif italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 mt-8 border-t border-forest/10">
                <p className="text-base font-sans font-bold text-forest">
                  {t.clientName}
                </p>
                <p className="text-xs text-ink-muted mt-0.5">
                  {t.role}, <span className="font-semibold text-forest/90">{t.company}</span>
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gold-dark font-semibold">
                  <span>Project:</span>
                  <span className="underline decoration-gold/40">{t.projectRef}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
