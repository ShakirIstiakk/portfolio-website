import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const footerLinks = [
    { label: "Home", href: "/#hero" },
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Approach", href: "/#approach" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-forest-950 text-ivory py-16 border-t border-ivory/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-ivory/10 items-start">
          {/* Logo & Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center bg-forest text-ivory font-sans font-bold text-sm tracking-wider">
                SI.
              </div>
              <span className="font-sans font-bold text-lg text-ivory">
                Shakir Istiak
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ivory/70 max-w-md">
              Web Designer • WordPress Developer • Digital Marketing Specialist
            </p>
            <p className="text-xs text-ivory/50">
              Direct Inquiries:{" "}
              <a
                href="mailto:istiakzy@gmail.com"
                className="text-gold hover:underline"
              >
                istiakzy@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-superwide font-bold text-gold block">
              SITEMAP
            </span>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-superwide font-bold text-gold block">
              CONNECT
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-ivory/70 hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-gold" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:istiakzy@gmail.com"
                  className="text-xs text-ivory/70 hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  <span>istiakzy@gmail.com</span>
                  <ArrowUpRight className="w-3 h-3 text-gold" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <div>© 2026 Shakir Istiak. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="hover:text-ivory/80 cursor-default">
              Bespoke Digital Consulting
            </span>
            <span>•</span>
            <span className="hover:text-ivory/80 cursor-default">
              WordPress &amp; Performance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
