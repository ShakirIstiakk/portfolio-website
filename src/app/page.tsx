"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ResultsStrip } from "@/components/ResultsStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillMarquee } from "@/components/SkillMarquee";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <main className="min-h-screen bg-ivory text-ink relative selection:bg-forest selection:text-ivory">
      {/* Sticky Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* 01: Hero Section */}
      <Hero onOpenContact={handleOpenContact} />

      {/* 02: Results / Trust Strip */}
      <ResultsStrip />

      {/* 03: Selected Work (Asymmetric grid + case study links) */}
      <SelectedWork />

      {/* 04: Services ("WHAT I DO") */}
      <ServicesSection onOpenContact={handleOpenContact} />

      {/* 05: My Approach ("FROM IDEA TO IMPACT.") */}
      <ProcessSection />

      {/* 06: About Section (Split Screen Editorial) */}
      <AboutSection onOpenContact={handleOpenContact} />

      {/* 07: Expertise / Tool Stack */}
      <SkillMarquee />

      {/* 08: Why Work With Me ("NOT JUST A WEBSITE. A BUSINESS ASSET.") */}
      <WhyWorkWithMe />

      {/* 09: Testimonials */}
      <Testimonials />

      {/* 10: Final CTA (Dramatic Dark Green #0D392C) */}
      <FinalCTA onOpenContact={handleOpenContact} />

      {/* 11: Footer */}
      <Footer />

      {/* Contact Inquiry Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </main>
  );
}
