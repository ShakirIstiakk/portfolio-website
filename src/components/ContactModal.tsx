"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Mail, Check, ArrowRight, ExternalLink } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: "WordPress & Web Design",
    budget: "$2,000 - $5,000",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText("istiakzy@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format mailto link with entered details
    const subject = encodeURIComponent(
      `New Project Inquiry: ${formData.name} (${formData.service})`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nWebsite/Business: ${formData.website}\nService: ${formData.service}\nBudget Range: ${formData.budget}\n\nProject Scope:\n${formData.message}`
    );
    window.location.href = `mailto:istiakzy@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-forest-950/70 backdrop-blur-md transition-all duration-300"
    >
      <div
        className="relative w-full max-w-2xl bg-ivory rounded-none border border-forest/20 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-forest via-gold to-forest" />

        <div className="p-6 sm:p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6 pb-6 border-b border-forest/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
                START A CONVERSATION
              </span>
              <h2
                id="contact-modal-title"
                className="text-2xl sm:text-3xl font-sans font-bold text-forest tracking-tight mt-1"
              >
                Let&apos;s Build Your Next Digital Asset.
              </h2>
              <p className="text-sm text-ink-muted mt-1.5">
                Have a project in mind? Share the details below or email directly to{" "}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 font-semibold text-forest underline hover:text-gold transition-colors"
                >
                  istiakzy@gmail.com
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-forest" />
                  ) : (
                    <span className="text-xs text-gold">({copied ? "Copied!" : "Click to copy"})</span>
                  )}
                </button>
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 text-ink-muted hover:text-forest hover:bg-forest/5 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-forest text-gold flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-forest">
                Inquiry Prepared!
              </h3>
              <p className="text-sm text-ink-muted max-w-md mx-auto">
                Your email client is opening with pre-filled project specs. Alternatively, Shakir is directly reachable at{" "}
                <span className="font-semibold text-forest">istiakzy@gmail.com</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 bg-ivory-50 border border-forest/15 focus:border-forest focus:outline-none text-sm text-ink transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 bg-ivory-50 border border-forest/15 focus:border-forest focus:outline-none text-sm text-ink transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                    Website or Current URL
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    placeholder="https://yourbrand.com"
                    className="w-full px-4 py-2.5 bg-ivory-50 border border-forest/15 focus:border-forest focus:outline-none text-sm text-ink transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                    Core Objective
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-ivory-50 border border-forest/15 focus:border-forest focus:outline-none text-sm text-ink transition-colors"
                  >
                    <option value="WordPress & Web Design">
                      WordPress & Custom Web Design
                    </option>
                    <option value="CRO & Speed Optimization">
                      CRO & Page Speed Overhaul
                    </option>
                    <option value="WooCommerce E-Commerce">
                      WooCommerce Storefront
                    </option>
                    <option value="SEO & Search Growth">
                      Technical SEO & AI Search
                    </option>
                    <option value="Paid Marketing & Funnel">
                      Google / Meta Ads & Funnels
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                  Approximate Budget
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["$1,500 - $3,000", "$3,000 - $6,000", "$6,000+"].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setFormData({ ...formData, budget: tier })}
                      className={`py-2 px-3 text-xs font-medium border text-center transition-all ${
                        formData.budget === tier
                          ? "bg-forest text-ivory border-forest"
                          : "bg-ivory border-forest/15 text-ink-muted hover:border-forest/40"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
                  Project Brief & Timeline *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your current bottleneck, target launch date, and what success looks like for your business..."
                  className="w-full px-4 py-2.5 bg-ivory-50 border border-forest/15 focus:border-forest focus:outline-none text-sm text-ink transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-forest text-ivory font-sans text-xs uppercase tracking-widest font-semibold hover:bg-forest-800 transition-all group"
                >
                  Send Inquiry Now
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center sm:justify-end gap-3 text-xs text-ink-muted">
                  <span>Fast Response (Within 24h)</span>
                  <span>•</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-forest transition-colors"
                  >
                    LinkedIn
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
