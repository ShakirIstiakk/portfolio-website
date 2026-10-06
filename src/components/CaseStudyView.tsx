"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  Zap,
  X,
} from "lucide-react";
import { Footer } from "./Footer";
import { ContactModal } from "./ContactModal";

interface CaseStudyViewProps {
  project: Project;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeViewTab, setActiveViewTab] = useState<"full" | "hero">(
    project.fullScreenshot ? "full" : "hero"
  );

  // Find next project in circular list
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="min-h-screen bg-ivory text-ink selection:bg-forest selection:text-ivory">
      {/* Sticky Editorial Header */}
      <nav className="sticky top-0 z-40 bg-ivory/90 backdrop-blur-md border-b border-forest/10 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-forest hover:text-gold-dark transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-gold group-hover:-translate-x-1 transition-transform" />
            <span>Back to Work</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-mono font-bold text-forest px-2.5 py-1 bg-forest/5 border border-forest/10"
            >
              SI.
            </Link>
            <button
              onClick={() => setIsContactOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-bold bg-forest text-ivory hover:bg-forest-800 transition-colors"
            >
              <span>Work With Me</span>
              <span className="text-gold">→</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Case Study Hero */}
      <header className="pt-16 sm:pt-20 pb-16 bg-ivory bg-editorial-grain border-b border-forest/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Tagline & Kicker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold text-forest bg-forest/5 px-2.5 py-1 border border-forest/10">
              CASE STUDY 0{currentIndex + 1}
            </span>
            <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
              {project.industry}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-forest tracking-tightest leading-[1.08] max-w-4xl">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-3xl mt-6">
            {project.tagline}
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-forest/15">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold block">
                CLIENT
              </span>
              <p className="text-sm font-bold text-forest mt-1">
                {project.client}
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold block">
                TIMELINE
              </span>
              <p className="text-sm font-bold text-forest mt-1">
                {project.overview.timeline} ({project.year})
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold block">
                MY ROLE
              </span>
              <p className="text-sm font-bold text-forest mt-1">{project.role}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold block">
                CORE STACK
              </span>
              <p className="text-sm font-bold text-forest mt-1 truncate">
                {project.technologies.slice(0, 3).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 06: Visual Showcase (With Full Website Screenshot Support & Interactive Browser) */}
      <section className="py-12 lg:py-20 bg-forest-950/5 border-b border-forest/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Top Toggle Tabs if full screenshot is available */}
          {project.fullScreenshot && (
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-forest/15">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest font-bold text-forest">
                  SELECT VIEW:
                </span>
                <div className="inline-flex border border-forest/20 p-1 bg-ivory">
                  <button
                    type="button"
                    onClick={() => setActiveViewTab("hero")}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      activeViewTab === "hero"
                        ? "bg-forest text-ivory"
                        : "text-ink-muted hover:text-forest"
                    }`}
                  >
                    4K Desktop UI (Ultra Sharp)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveViewTab("full")}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      activeViewTab === "full"
                        ? "bg-forest text-ivory"
                        : "text-ink-muted hover:text-forest"
                    }`}
                  >
                    Full Page Scrollable
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-forest bg-ivory border border-forest/20 px-3.5 py-1.5 hover:border-gold hover:text-gold-dark transition-colors"
                >
                  <span>Zoom Fullscreen HD</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold" />
                </button>
              </div>
            </div>
          )}

          {/* Full Screenshot Interactive Browser Frame */}
          {project.fullScreenshot && activeViewTab === "full" ? (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Scrollable Realistic Browser Mockup */}
                <div className="lg:col-span-7 bg-ivory border border-forest/25 shadow-2xl overflow-hidden">
                  {/* Browser Window Header */}
                  <div className="bg-[#1C2C26] px-4 py-3 flex items-center justify-between border-b border-forest/30 text-ivory">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                    </div>
                    <div className="bg-forest-900/90 text-ivory/70 text-[11px] font-mono px-4 py-1 border border-forest/50 rounded flex items-center gap-2 max-w-xs truncate">
                      <span className="text-gold text-[10px]">🔒</span>
                      <span>
                        {project.slug === "tidal-grow-ag"
                          ? "www.tidalgrowag.com"
                          : project.slug === "craft-king"
                          ? "craftking.com"
                          : project.slug === "nexvis-it"
                          ? "nexvis.com"
                          : project.slug === "webdesignmob"
                          ? "webdesignmob.com"
                          : "1770beachaccommodation.com.au"}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      className="text-gold hover:text-ivory text-xs font-mono font-bold"
                      title="Open Fullscreen Lightbox"
                    >
                      [+] Zoom
                    </button>
                  </div>

                  {/* Scrollable Viewport Frame */}
                  <div className="relative h-[680px] overflow-y-auto bg-[#1A1A1A] scroll-smooth p-2 group">
                    <div className="relative w-full flex justify-center bg-white shadow-inner">
                      <Image
                        src={project.fullScreenshot}
                        alt={`${project.title} - Authentic Live Full Page Website`}
                        width={1200}
                        height={6860}
                        priority
                        className="w-full h-auto object-contain cursor-zoom-in"
                        onClick={() => setIsLightboxOpen(true)}
                      />
                    </div>

                    {/* Floating Scroll Indicator Badge */}
                    <div className="sticky bottom-4 right-4 ml-auto w-max bg-forest/90 backdrop-blur-md text-ivory text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 border border-gold/40 shadow-lg pointer-events-none">
                      Scroll to inspect entire page ↓
                    </div>
                  </div>
                </div>

                {/* Right: Architectural Breakdown of the Live Screenshot */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-6 bg-ivory border border-forest/15 space-y-3">
                    <span className="text-[11px] uppercase tracking-superwide font-bold text-gold-dark block">
                      ARCHITECTURAL BREAKDOWN
                    </span>
                    <h3 className="text-xl font-sans font-bold text-forest">
                      What Shakir Built on This Page
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {project.slug === "tidal-grow-ag"
                        ? "This is the actual live website for Tidal Grow Ag. Engineered to balance corporate biotechnology credibility with an accessible product catalog for North American growers and agronomists."
                        : project.slug === "craft-king"
                        ? "This is the actual live WooCommerce storefront for Craft King. Engineered on Bricks Builder to deliver lightning-fast catalog navigation, product customizers, and frictionless checkout for wooden Montessori furniture."
                        : project.slug === "nexvis-it"
                        ? "This is the actual live agency platform for Nexvis IT. Engineered to communicate full-funnel digital capabilities, establish B2B enterprise trust, and capture high-intent inbound consultations."
                        : project.slug === "webdesignmob"
                        ? "This is the actual live agency platform for WebDesignMob. Engineered to present high-end digital design packages, flexible monthly installment pricing, and frictionless brief submissions."
                        : "This is the actual live website for 1770 Beach Accommodation. Every section was custom-engineered to eliminate third-party commission overhead and maximize direct booking conversions."}
                    </p>
                  </div>

                  {project.slug === "webdesignmob" ? (
                    <div className="space-y-2.5">
                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>1. &ldquo;Kick Off Your Brand Today&rdquo; &amp; Consultation Form</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Dark electric blue hero atmosphere with dual CTA: immediate &ldquo;Start A Project&rdquo; and an embedded direct &ldquo;Book a Free Consultation&rdquo; form.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>2. &ldquo;How We Work&rdquo; 5-Phase Collaborative Workflow</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Transparent structured cards: Consultation, Strategy, Design &amp; Prototype, Development, and Launch &amp; Growth.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>3. Flexible Monthly Installment Pricing Plans</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          3 dark membership tiers with blue accents and transparent feature breakdowns, lowering client adoption friction for growing brands.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>4. Diamond Value Matrix &amp; Brand Collateral Showcase</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Interactive 4-quadrant diamond diagram paired with physical brand stationery, stationery mockups, and responsive digital previews.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>5. Category Filters, Client Testimonials &amp; Studio Insights</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Multi-sector filters (Web Design, Graphic, Digital Marketing), live project showcases, client reviews, and creative blog insights.
                        </p>
                      </div>
                    </div>
                  ) : project.slug === "nexvis-it" ? (
                    <div className="space-y-2.5">
                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>1. &ldquo;Digital Marketing That Builds Brands&rdquo; Hero</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Modern digital agency hero with city skyline background, smartphone UI preview, and prominent &ldquo;Get a Proposal&rdquo; conversion action.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>2. &ldquo;Your Trusted Partner in Digital Excellence&rdquo;</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Team collaboration showcase highlighting experienced growth strategists, custom plans, and result-oriented delivery.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>3. 3x3 Specialized Service Capabilities Matrix</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Structured dark tiles covering Graphic Design, Web Development, UI/UX, SEO, Social Media, Content, Video, Paid Ads, and Lead Funnels.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>4. &ldquo;Proven Past Results&rdquo; Multi-Device Mockups</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Visual portfolio proofs featuring brand identity collateral and multi-screen responsive website applications.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>5. Sector Accordions, Insights Blog &amp; Consultation CTA</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Industry-specific marketing solutions, client reviews, marketing insights blog, and high-converting consultation booking forms.
                        </p>
                      </div>
                    </div>
                  ) : project.slug === "craft-king" ? (
                    <div className="space-y-2.5">
                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>1. Handcrafted Montessori Furniture Hero</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Warm natural nursery lifestyle photography featuring learning towers, climbing arches, and a direct &ldquo;Shop Now&rdquo; conversion hook.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>2. Trust &amp; Value Proposition Strip</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          4-pillar customer reassurance badges: Premium Quality, Affordable Pricing, SuperFast Delivery, and Value for Money.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>3. High-Speed Bricks Builder WooCommerce Catalog</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Responsive 4x2 product grid with instant price strikethroughs, variation badges, and AJAX &ldquo;Add to cart&rdquo; actions.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>4. Asymmetric Featured Category Collections</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Visual department silos for Climbing Arch, Learning Tower, Outdoor Lounger, and Kids Reading Table.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>5. Social Proof, Objections FAQ &amp; WhatsApp Flow</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Real parent testimonials, interactive FAQ accordions, and one-click WhatsApp customer support ordering.
                        </p>
                      </div>
                    </div>
                  ) : project.slug === "tidal-grow-ag" ? (
                    <div className="space-y-2.5">
                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>1. &ldquo;SCIENCE POWERED BY NATURE&rdquo; Hero Masthead</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Macro dewdrop botanical imagery paired with clean typography and international distribution trial announcement.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>2. Color-Coded Formulation Matrix (Products)</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Dynamic product catalog cards for GENMAX, SPECTRA, align N, CHROMA, and SEAPHOS with instant spec sheet downloads.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>3. &ldquo;EXPERIENCE TIDAL GROW AGRISCIENCE&rdquo;</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Crop health storytelling transition bridging laboratory biotechnology and field application yield gains.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>4. Industry Research &amp; &ldquo;Ag PhD Radio Show&rdquo;</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Structured scientific publications and broadcast media embeds validating crop trial efficacy.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>5. &ldquo;LET&apos;S GROW&rdquo; Agronomist Consultation Funnel</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          High-converting CF7 inquiry forms routing direct farm acreage and trial requests to territory sales directors.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>1. &ldquo;Book Direct and Save&rdquo; Hero Masthead</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          High-resolution sunset coastal background establishing instant luxury atmosphere with high-contrast typography.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>2. JetEngine &ldquo;Find and Reserve Your Home&rdquo; Grid</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Dynamic 3-column vacation home catalog with dynamic fields for bedrooms, bathrooms, guest capacity, and instant booking hooks.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>3. Integrated Guest Reviews &amp; Social Proof</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          &ldquo;What Our Guests Say&rdquo; review integration overcoming traveler booking hesitation.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>4. Management Authority &amp; Platform Badges</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          &ldquo;Professional Management. Proven Results.&rdquo; featuring the on-ground team and Airbnb, Booking.com, and Stayz partner badges.
                        </p>
                      </div>

                      <div className="p-4 bg-ivory border border-forest/15">
                        <div className="flex items-center gap-2 text-xs font-bold text-forest">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>5. Transparent Management Tiers &amp; FAQ</span>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-1">
                          Side-by-side management style comparisons and 5-step owner onboarding flow.
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="w-full py-3.5 bg-forest text-ivory text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-forest-800 transition-colors"
                  >
                    <span>Click to Zoom &amp; Inspect Full Image</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-forest-950 border border-forest/30 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.visualShowcase.caption}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center justify-between pt-4 text-xs text-ink-muted">
                <span>{project.visualShowcase.caption}</span>
                <span className="font-mono text-gold-dark font-semibold">
                  {project.visualShowcase.mockupType}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 space-y-24">
        {/* 01 — Overview */}
        <section className="space-y-6 pb-16 border-b border-forest/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-gold-dark">
              01 —
            </span>
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              OVERVIEW
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-forest">
            Executive Summary &amp; Scope
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            {project.overview.summary}
          </p>

          <div className="pt-6">
            <span className="text-xs uppercase tracking-widest font-bold text-forest block mb-3">
              KEY DELIVERABLES:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.overview.deliverables.map((deliv, idx) => (
                <li
                  key={idx}
                  className="p-3 bg-ivory-50 border border-forest/15 text-xs text-ink flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest flex-shrink-0" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 02 — The Challenge */}
        <section className="space-y-6 pb-16 border-b border-forest/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-gold-dark">
              02 —
            </span>
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              THE CHALLENGE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-forest">
            The Business Bottleneck
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            {project.challenge.statement}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {project.challenge.painPoints.map((pain, idx) => (
              <div
                key={idx}
                className="p-5 bg-ivory border border-forest/15 flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-forest mt-1.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-ink">{pain}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — The Strategy */}
        <section className="space-y-6 pb-16 border-b border-forest/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-gold-dark">
              03 —
            </span>
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              THE STRATEGY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-forest">
            The Architectural Approach
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            {project.strategy.approach}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {project.strategy.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-ivory-50 border border-forest/15 space-y-2"
              >
                <span className="text-xs font-mono font-bold text-gold-dark">
                  PILLAR 0{idx + 1}
                </span>
                <h4 className="text-sm font-sans font-bold text-forest">
                  {pillar.title}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 04 — The Solution */}
        <section className="space-y-6 pb-16 border-b border-forest/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-gold-dark">
              04 —
            </span>
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              THE SOLUTION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-forest">
            Design &amp; Engineering Implementation
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            {project.solution.narrative}
          </p>

          <div className="space-y-3 pt-4">
            {project.solution.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-ivory border border-forest/15 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
              >
                <div className="text-sm font-bold text-forest font-sans">
                  {item.title}
                </div>
                <div className="text-xs text-ink-muted max-w-lg">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — Results (Strict compliance with verified metrics rule) */}
        <section className="space-y-6 pb-16 border-b border-forest/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-gold-dark">
              05 —
            </span>
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              MEASURABLE RESULTS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-forest">
            Commercial Impact &amp; Metrics
          </h2>

          {project.results.hasVerifiedData ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {project.results.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-forest text-ivory border border-gold/30 space-y-2"
                >
                  <div className="text-3xl sm:text-4xl font-sans font-extrabold text-gold">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-ivory">{m.label}</div>
                  {m.verifiedNote && (
                    <div className="text-[10px] text-ivory/60 font-mono pt-1">
                      {m.verifiedNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 border border-dashed border-forest/25 bg-ivory-50/70 text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-gold-dark block">
                VERIFICATION STATUS
              </span>
              <p className="text-xl font-sans font-bold text-forest">
                Case Study Details Coming Soon
              </p>
              <p className="text-xs text-ink-muted max-w-md mx-auto">
                Verified client metrics are currently undergoing review in accordance with our transparent reporting standard.
              </p>
            </div>
          )}

          <p className="text-sm text-ink-muted pt-2">{project.results.summary}</p>
        </section>

        {/* 07 — Technology Stack */}
        <section className="space-y-6 pb-16 border-b border-forest/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-gold-dark">
              07 —
            </span>
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              TECHNOLOGY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-forest">
            Tech Stack Employed
          </h2>
          <div className="flex flex-wrap gap-3 pt-2">
            {project.technologies.map((t) => (
              <div
                key={t}
                className="px-4 py-2 bg-ivory border border-forest/20 text-xs font-bold text-forest uppercase tracking-wider shadow-sm"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* 08 — Final Outcome */}
        <section className="space-y-4 pb-16 border-b border-forest/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-gold-dark">
              08 —
            </span>
            <span className="text-xs uppercase tracking-superwide font-bold text-forest">
              FINAL OUTCOME
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-forest">
            Strategic Wrap-Up
          </h2>
          <p className="text-base sm:text-lg text-ink font-serif italic leading-relaxed border-l-2 border-gold pl-6 py-2">
            &ldquo;{project.finalOutcome}&rdquo;
          </p>
        </section>

        {/* 09 — Next Project & Back to Work */}
        <section className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-dark">
              09 — CONTINUED DISCOVERY
            </span>
            <Link
              href="/#work"
              className="text-xs uppercase tracking-widest font-bold text-forest underline hover:text-gold-dark transition-colors"
            >
              Back to Work
            </Link>
          </div>

          <div className="p-8 sm:p-10 bg-forest text-ivory border border-gold/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                NEXT CASE STUDY
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-ivory">
                {nextProject.title}
              </h3>
              <p className="text-xs text-ivory/70">{nextProject.industry}</p>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-ivory text-forest text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-forest-950 transition-all shadow-md"
            >
              <span>Explore Next Case Study</span>
              <ArrowRight className="w-4 h-4 text-forest-800" />
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* High-Resolution Fullscreen Lightbox Modal */}
      {isLightboxOpen && project.fullScreenshot && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col bg-forest-950/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-forest-900 border-b border-forest-800 text-ivory z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="text-xs uppercase tracking-widest font-bold text-ivory">
                  {project.title}
                </span>
              </div>
              <div className="inline-flex border border-forest-700 bg-forest-950 p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveViewTab("hero")}
                  className={`px-2.5 py-1 font-bold uppercase tracking-wider transition-colors ${
                    activeViewTab === "hero"
                      ? "bg-forest-700 text-ivory"
                      : "text-ivory/60 hover:text-ivory"
                  }`}
                >
                  4K Desktop UI
                </button>
                <button
                  type="button"
                  onClick={() => setActiveViewTab("full")}
                  className={`px-2.5 py-1 font-bold uppercase tracking-wider transition-colors ${
                    activeViewTab === "full"
                      ? "bg-forest-700 text-ivory"
                      : "text-ivory/60 hover:text-ivory"
                  }`}
                >
                  Full Page View
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={activeViewTab === "hero" ? project.image : project.fullScreenshot}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-gold hover:text-ivory underline hidden sm:inline"
              >
                Open Full File ↗
              </a>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 bg-forest-800 text-ivory hover:bg-gold hover:text-forest-950 transition-colors"
                aria-label="Close Fullscreen View"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Canvas */}
          <div
            className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center items-start"
            onClick={(e) => e.stopPropagation()}
          >
            {activeViewTab === "hero" ? (
              <div className="max-w-6xl w-full bg-[#1C2C26] shadow-2xl border border-forest/30 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} - 4K Desktop UI`}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto block"
                />
              </div>
            ) : (
              <div className="max-w-3xl w-full bg-white shadow-2xl border border-forest/30">
                <Image
                  src={project.fullScreenshot}
                  alt={`${project.title} - Full Page Website`}
                  width={1200}
                  height={6860}
                  priority
                  className="w-full h-auto block"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
