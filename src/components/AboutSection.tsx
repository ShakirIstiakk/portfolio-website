import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export function AboutSection({ onOpenContact }: AboutSectionProps) {
  const coreCompetencies = [
    "WordPress Engineering",
    "Bricks Builder Architecture",
    "Conversion Rate Optimization (CRO)",
    "Technical & Semantic SEO",
    "Google & Meta Paid Advertising",
    "Lead Generation Architecture",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-ivory-50 border-t border-forest/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Top Headline Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-forest/15">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs uppercase tracking-superwide font-bold text-gold-dark block">
              THE PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-forest leading-[1.1] tracking-tightest">
              DESIGN ISN&apos;T JUST ABOUT LOOKING GOOD.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-ink leading-[1.1] tracking-tightest">
              IT&apos;S ABOUT MAKING THE BUSINESS WORK BETTER.
            </h2>
          </div>
        </div>

        {/* Biography & Credibility Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 items-start">
          {/* Left Column: Portrait Accent & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] bg-forest-900 border border-forest/30 overflow-hidden group">
              <Image
                src="/images/shakir-istiak-philosophy.jpg"
                alt="Shakir Istiak - Digital Consultant & Growth Strategist"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-ivory">
                <p className="text-xs font-mono text-gold uppercase tracking-wider">
                  Shakir Istiak
                </p>
                <p className="text-sm font-bold font-sans">
                  Digital Consultant &amp; WordPress Specialist
                </p>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-forest/15 bg-ivory">
                <div className="text-3xl font-extrabold text-forest">04+</div>
                <div className="text-xs text-ink-muted uppercase tracking-wider font-semibold mt-1">
                  Years Professional Experience
                </div>
              </div>
              <div className="p-4 border border-forest/15 bg-ivory">
                <div className="text-3xl font-extrabold text-forest">12+</div>
                <div className="text-xs text-ink-muted uppercase tracking-wider font-semibold mt-1">
                  Websites Delivered
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-ink leading-relaxed">
              <p className="font-medium text-forest text-xl">
                I help startups, small businesses and growing brands generate more leads, improve conversions and strengthen their online presence through strategic web design, WordPress development and performance-driven digital marketing.
              </p>
              <p className="text-ink-muted">
                Too many founders hire a designer who creates something pretty that fails to generate inquiries, or hire a programmer who builds a fast site with no marketing nuance. My practice is built at the intersection of both.
              </p>
              <p className="text-ink-muted">
                With 4+ years of hands-on experience delivering over 12 high-impact websites, I specialize in eliminating conversion friction, engineering lightning-speed WordPress systems (primarily on Bricks Builder), and running targeted acquisition campaigns that produce measurable ROI.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="pt-6 border-t border-forest/15">
              <span className="text-xs uppercase tracking-widest font-bold text-gold-dark block mb-3">
                AREAS OF EXPERTISE
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {coreCompetencies.map((comp) => (
                  <div
                    key={comp}
                    className="p-3 bg-ivory border border-forest/15 text-xs font-semibold text-forest flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-forest hover:text-gold-dark transition-colors py-2"
              >
                <span>Inquire About Consulting</span>
                <ArrowUpRight className="w-4 h-4 text-gold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
