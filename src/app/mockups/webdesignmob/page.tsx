import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star, Sparkles, Layers, ShieldCheck, Zap, Globe, MessageSquare, Send, ChevronRight } from "lucide-react";

export default function WebDesignMobMockupPage() {
  const steps = [
    { num: "01", title: "Consultation", desc: "Discover goals, audience & business vision" },
    { num: "02", title: "Strategy", desc: "UX wireframing, sitemap & information architecture" },
    { num: "03", title: "Design & Prototype", desc: "Bespoke high-fidelity UI/UX design in Figma" },
    { num: "04", title: "Development", desc: "Clean WordPress, Bricks & custom code architecture" },
    { num: "05", title: "Launch & Growth", desc: "SEO setup, analytics & ongoing conversion scaling" },
  ];

  const pricingPlans = [
    {
      tier: "STARTER PLAN",
      price: "$499",
      period: "/ month",
      desc: "Perfect for early startups & personal brands needing a high-converting digital landing page.",
      popular: false,
      features: [
        "Single High-Converting Landing Page",
        "Mobile & Tablet Responsive Design",
        "WordPress & Elementor / Bricks Build",
        "Contact Form 7 & Lead Ingestion",
        "Basic On-Page SEO Configuration",
        "1 Round of Design Revisions",
      ],
    },
    {
      tier: "GROWTH PLAN",
      price: "$999",
      period: "/ month",
      desc: "Our most popular package for growing businesses needing a multi-page authority website.",
      popular: true,
      features: [
        "Up to 5 Custom Tailored Pages",
        "Custom JetEngine CPT & Dynamic Postings",
        "Conversion Funnel & Lead Capture Form",
        "Speed & Core Web Vitals Optimization",
        "Google Analytics 4 & GTM Tracking",
        "30-Day Post-Launch Support",
      ],
    },
    {
      tier: "SCALE AGENCY",
      price: "$1,899",
      period: "/ month",
      desc: "Comprehensive digital infrastructure for high-growth enterprises and e-commerce stores.",
      popular: false,
      features: [
        "Up to 10 Bespoke Web Pages / Storefront",
        "Full WooCommerce / Advanced CPT Setup",
        "A/B Conversion Rate Optimization (CRO)",
        "Custom Animated Micro-Interactions",
        "Priority 24/7 Developer SLA",
        "Dedicated Growth Strategist Support",
      ],
    },
  ];

  const recentProjects = [
    { title: "Fintech SaaS Platform", category: "Web Design & Development", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
    { title: "Luxury Hospitality Retreat", category: "Branding & Booking Portal", img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80" },
    { title: "BioTech Research Hub", category: "Enterprise Portal & CPT", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-[#E2E8F0] font-sans antialiased selection:bg-[#3B82F6] selection:text-white">
      {/* 1. Top Navigation Bar */}
      <header className="border-b border-white/10 bg-[#070B14]/90 backdrop-blur-md sticky top-0 z-40 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2563EB] to-[#60A5FA] flex items-center justify-center font-black text-white text-base shadow-lg shadow-blue-500/20">
              W
            </div>
            <div className="flex items-center">
              <span className="font-extrabold text-xl tracking-tight text-white">
                WebDesignMob
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] ml-1.5 animate-pulse" />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-slate-300">
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#how-we-work" className="hover:text-blue-400 transition">How We Work</a>
            <a href="#pricing" className="text-blue-400">Installment Pricing</a>
            <a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a>
            <a href="#reviews" className="hover:text-blue-400 transition">Testimonials</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#070B14] font-extrabold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20">
              Book a Call
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 px-8 border-b border-white/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Full-Spectrum Digital Agency &amp; Conversion Growth</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Kick Off Your Brand <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Today with Authority
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              We design, develop and scale bespoke modern websites, high-converting digital landing pages and memorable brand systems that transform visitors into loyal clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-[#070B14] font-black text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2">
                <span>Start A Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-sm rounded-xl border border-white/15 transition">
                Explore Portfolio
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">99.8%</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-blue-400">40%+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Conversion Uplift</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F59E0B]">4.9★</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Client Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0F172A]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-black text-white">Book a Free Consultation</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Receive a customized project plan within 24h</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Alex Mitchell"
                    className="w-full bg-[#1E293B] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Work Email</label>
                  <input
                    type="email"
                    defaultValue="alex@modernscale.com"
                    className="w-full bg-[#1E293B] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Service Required</label>
                  <select className="w-full bg-[#1E293B] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-400">
                    <option>WordPress Development &amp; CRO</option>
                    <option>Brand Identity &amp; UI/UX</option>
                    <option>Complete E-commerce Overhaul</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Tell Us About Your Brand</label>
                  <textarea
                    rows={2}
                    defaultValue="Looking to scale our landing page conversions with a high-end WordPress architecture."
                    className="w-full bg-[#1E293B] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-400"
                  />
                </div>

                <button className="w-full py-3.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#070B14] font-black uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-amber-500/20 transition mt-2">
                  Submit Consultation Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "How We Work" 5-Step Process */}
      <section id="how-we-work" className="py-16 px-8 border-b border-white/10 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-superwide text-blue-400 font-bold block">
            HOW WE WORK
          </span>
          <h2 className="text-3xl font-black text-white mt-1">
            Our 5-Phase Collaborative Workflow
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Structured milestone execution guaranteeing transparent delivery with zero surprise delays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#0F172A] border border-white/10 rounded-xl p-5 hover:border-blue-500/40 transition-colors group"
            >
              <div className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                {s.num}
              </div>
              <h3 className="font-extrabold text-sm text-white group-hover:text-blue-300 transition-colors">
                {s.title}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "Flexible Monthly Installment Pricing Plans" */}
      <section id="pricing" className="py-20 px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-superwide text-[#F59E0B] font-bold block">
            TRANSPARENT VALUE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
            Our Flexible Monthly Installment Plans
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Invest in premium digital architecture without draining upfront capital reserves.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? "bg-[#0F172A] border-2 border-blue-500 shadow-2xl shadow-blue-500/10 lg:-translate-y-2"
                  : "bg-[#0B1120] border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] uppercase tracking-widest font-black px-4 py-1 rounded-full shadow">
                  Most Popular Choice
                </div>
              )}

              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                  {plan.tier}
                </span>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-semibold">{plan.period}</span>
                </div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="my-6 border-t border-white/10" />

                <ul className="space-y-3 text-xs text-slate-300">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10">
                <button
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Choose {plan.tier}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Recent Projects Showcase */}
      <section className="py-20 px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block">PORTFOLIO</span>
          <h2 className="text-3xl font-black text-white mt-1">Recent Projects We Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentProjects.map((p, idx) => (
            <div key={idx} className="bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs text-blue-400 font-semibold">{p.category}</span>
                <h3 className="text-lg font-bold text-white mt-1">{p.title}</h3>
                <button className="mt-4 text-xs font-bold uppercase tracking-wider text-[#F59E0B] flex items-center gap-1.5 hover:text-amber-400 transition">
                  <span>View Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[#05080F] text-slate-400 py-16 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <span className="font-extrabold text-2xl text-white block">WebDesignMob</span>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Bespoke web design, WordPress engineering, and high-converting marketing funnels for fast-growing brands.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>WordPress Architecture</li>
              <li>Brand Strategy &amp; UI/UX</li>
              <li>Conversion Rate Optimization</li>
              <li>Monthly Installments</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>About Studio</li>
              <li>Client Work</li>
              <li>Insights &amp; News</li>
              <li>Book Consultation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-3">Contact</h4>
            <p className="text-xs">hello@webdesignmob.com</p>
            <p className="text-xs mt-1">+1 (800) 555-0199</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-white/10 flex justify-between text-xs text-slate-500">
          <span>Copyright 2024 WebDesignMob Studio. All Rights Reserved.</span>
          <span>Designed &amp; Built for Maximum Conversion</span>
        </div>
      </footer>
    </div>
  );
}
