"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Copy, Check } from "lucide-react";

interface FinalCTAProps {
  onOpenContact?: () => void;
}

export function FinalCTA({ onOpenContact }: FinalCTAProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("istiakzy@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-forest text-ivory relative overflow-hidden">
      {/* Background Subtle Editorial Grid / Grain */}
      <div className="absolute inset-0 bg-dark-grain opacity-40 pointer-events-none" />

      {/* Decorative Gold Geometric Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-800 via-gold to-forest-800" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-forest-600/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-8">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 border border-gold/30 bg-forest-900/60 px-4 py-1.5">
          <span className="w-2 h-2 bg-gold" />
          <span className="text-xs uppercase tracking-superwide font-bold text-gold">
            NEXT STEPS • OPEN FOR Q2 / Q3 2026 ENGAGEMENTS
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-ivory tracking-tightest leading-[1.08] max-w-4xl mx-auto">
          READY TO BUILD SOMETHING{" "}
          <span className="text-gold font-serif italic font-normal">
            THAT ACTUALLY GROWS?
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-ivory/80 leading-relaxed max-w-2xl mx-auto font-light">
          Whether you need a high-converting website, a better WordPress experience, or a digital growth strategy — let&apos;s talk.
        </p>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-ivory text-forest text-xs uppercase tracking-widest font-extrabold hover:bg-gold hover:text-forest-950 transition-all group shadow-xl"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 text-forest-800 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 border border-gold/40 text-ivory text-xs uppercase tracking-widest font-extrabold hover:bg-gold/10 hover:border-gold transition-all group"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Direct Email Pill */}
        <div className="pt-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 bg-forest-900/80 border border-ivory/15 px-5 py-2.5 text-xs text-ivory/90">
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>Direct Email:</span>
            <a
              href="mailto:istiakzy@gmail.com"
              className="font-bold text-ivory hover:text-gold underline decoration-gold/40 transition-colors"
            >
              istiakzy@gmail.com
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy email address"
              className="ml-1 text-gold hover:text-ivory transition-colors"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-gold" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
