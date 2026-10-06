"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/85 backdrop-blur-md border-b border-forest/10 py-3.5 shadow-sm"
            : "bg-transparent py-5 sm:py-7 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity"
            aria-label="Shakir Istiak - Home"
          >
            <div className="w-9 h-9 border border-forest/30 flex items-center justify-center bg-forest text-ivory font-sans font-bold text-sm tracking-wider group-hover:border-gold transition-colors">
              SI.
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-forest leading-none">
                Shakir Istiak
              </span>
              <span className="text-[10px] uppercase tracking-widest text-ink-muted font-medium mt-1">
                Design • WP • Growth
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-ink-muted hover:text-forest transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans uppercase tracking-widest font-bold bg-forest text-ivory hover:bg-forest-800 border border-forest transition-all group"
            >
              <span>Let&apos;s Work Together</span>
              <span className="text-gold group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-forest border border-forest/20 hover:bg-forest/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-ivory flex flex-col justify-between pt-24 pb-8 px-6 sm:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
              NAVIGATION
            </span>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-sans font-bold text-forest tracking-tight hover:text-gold transition-colors flex items-center justify-between py-1 border-b border-forest/10"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-gold" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-forest/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact?.();
              }}
              className="w-full py-4 bg-forest text-ivory text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-forest-800 transition-colors"
            >
              <span>Let&apos;s Work Together</span>
              <span className="text-gold">→</span>
            </button>
            <div className="text-center text-xs text-ink-muted">
              Direct: istiakzy@gmail.com
            </div>
          </div>
        </div>
      )}
    </>
  );
}
