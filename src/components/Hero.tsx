"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 flex flex-col justify-between bg-ivory bg-editorial-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Conversion Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-gold" />
              <span className="text-xs sm:text-sm uppercase tracking-superwide font-bold text-forest">
                Web Design. WordPress. Digital Growth.
              </span>
            </div>

            {/* Main Statement */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-sans font-extrabold text-ink leading-[1.08] tracking-tightest">
                Helping Coaches &amp; Founders{" "}
                <span className="text-forest underline decoration-gold/50 decoration-2 underline-offset-4 font-serif italic font-normal">
                  Turn Better Websites
                </span>{" "}
                Into Better Business.
              </h1>
            </div>

            {/* Supporting Subhead */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl font-normal">
              Web Designer, WordPress Developer &amp; Digital Marketing Specialist helping startups, small businesses and growing brands generate leads, improve conversions and build stronger online presence.
            </p>

            {/* CTAs & Credibility */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-forest text-ivory text-xs uppercase tracking-widest font-bold hover:bg-forest-800 transition-all group shadow-sm"
              >
                <span>View My Work</span>
                <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-forest/30 text-forest text-xs uppercase tracking-widest font-bold hover:border-forest hover:bg-forest/5 transition-all group"
              >
                <span>Let&apos;s Talk</span>
                <span className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </button>
            </div>

            {/* Credibility Line */}
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-ink-muted">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="font-semibold text-forest">4+ Years Experience</span>
              <span className="text-forest/30">•</span>
              <span className="font-semibold text-forest">12+ Websites Delivered</span>
              <span className="text-forest/30">•</span>
              <span className="text-ink-muted">Tailored Conversion Systems</span>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle Green Architectural Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-forest/20 pointer-events-none translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/5] bg-forest-900 overflow-hidden border border-forest/30 shadow-xl group">
                <Image
                  src="/images/shakir-istiak-hero.jpg"
                  alt="Shakir Istiak - Web Designer, WordPress Developer & Digital Growth Consultant"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette & editorial gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-transparent to-transparent pointer-events-none" />

                {/* Corner Gold Accent Line */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold pointer-events-none" />

                {/* Small Floating Label */}
                <div className="absolute top-4 left-4 bg-ivory/95 backdrop-blur-sm border border-forest/20 px-3 py-1.5 text-[11px] font-semibold text-forest uppercase tracking-widest shadow-md">
                  Shakir Istiak
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-ivory/90 backdrop-blur-md border border-forest/15 p-3 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gold-dark font-bold">
                        CONSULTANT &amp; DEVELOPER
                      </p>
                      <p className="text-xs font-bold text-forest mt-0.5">
                        WordPress • Bricks • CRO Strategy
                      </p>
                    </div>
                    <span className="text-xs text-forest font-serif italic">
                      Est. 2020
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="w-full pt-4 flex justify-center items-center">
        <a
          href="#trust-strip"
          aria-label="Scroll to explore"
          className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-ink-muted hover:text-forest transition-colors py-2 px-4"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-gold group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
