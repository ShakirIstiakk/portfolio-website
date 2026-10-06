"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  prefix?: string;
  suffix?: string;
  targetNum: number;
  label: string;
  sublabel: string;
}

export function ResultsStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      value: "04+",
      targetNum: 4,
      suffix: "+",
      label: "Years Experience",
      sublabel: "WordPress, CRO & Digital Growth",
    },
    {
      value: "12+",
      targetNum: 12,
      suffix: "+",
      label: "Websites Delivered",
      sublabel: "Bespoke & High-Converting Builds",
    },
    {
      value: "75%",
      targetNum: 75,
      suffix: "%",
      label: "Faster Website Performance",
      sublabel: "Core Web Vitals & Speed Tuning",
    },
    {
      value: "40%",
      targetNum: 40,
      suffix: "%",
      label: "Higher Landing Page Conversion",
      sublabel: "Tested UX & Inquiry Pathways",
    },
    {
      value: "35%",
      targetNum: 35,
      suffix: "%",
      label: "Lower Bounce Rate",
      sublabel: "Engaged Traffic & Mobile Retention",
    },
  ];

  return (
    <section
      id="trust-strip"
      ref={containerRef}
      className="relative border-y border-forest/15 bg-ivory-50/70 py-12 lg:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle Editorial Top Label */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-forest/10">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-gold-dark">
            PROVEN PERFORMANCE METRICS
          </span>
          <span className="text-[11px] uppercase tracking-widest text-ink-muted">
            VERIFIED OUTCOMES 2020–2026
          </span>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-forest/10">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`pt-6 lg:pt-0 ${
                idx !== 0 ? "lg:pl-6" : ""
              } flex flex-col justify-between group`}
            >
              <div>
                <div
                  className={`text-4xl sm:text-5xl lg:text-5xl font-sans font-extrabold text-forest tracking-tightest transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  {stat.value}
                </div>
                <h2 className="text-sm sm:text-base font-sans font-bold text-ink mt-2 leading-snug group-hover:text-forest transition-colors">
                  {stat.label}
                </h2>
              </div>
              <p className="text-xs text-ink-muted mt-2 leading-normal">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
