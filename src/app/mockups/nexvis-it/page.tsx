import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star, Sparkles, Globe, Code, Palette, Search, Share2, FileText, Video, Users, TrendingUp, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

export default function NexvisITMockupPage() {
  const services = [
    { title: "Website Design", desc: "User-centric editorial layouts, modern wireframes & design systems.", icon: Palette },
    { title: "WordPress Development", desc: "High-performance Bricks Builder & custom PHP/CPT architecture.", icon: Code },
    { title: "UI/UX Architecture", desc: "Interactive Figma prototypes engineered for frictionless conversions.", icon: Sparkles },
    { title: "Search Engine Optimization", desc: "On-page technical SEO, schema structured data & keyword dominance.", icon: Search },
    { title: "Social Media Marketing", desc: "Strategic multi-channel paid ad campaigns & audience growth.", icon: Share2 },
    { title: "Content Writing & Strategy", desc: "High-intent conversion copywriting & editorial thought leadership.", icon: FileText },
    { title: "Video Production", desc: "Compelling brand storytelling, motion graphics & social video ads.", icon: Video },
    { title: "Influencer Marketing", desc: "Targeted creator partnerships that build enterprise trust & buzz.", icon: Users },
    { title: "Conversion Optimization", desc: "Data-driven CRO audits, heatmap tracking & checkout refinement.", icon: TrendingUp },
  ];

  const clientReviews = [
    { name: "David Sterling", role: "CEO, NexaCorp Enterprise", review: "Nexvis IT completely rebuilt our web presence and modernized our ad funnels. Organic leads grew by 180% within four months.", stars: 5 },
    { name: "Sarah Jenkins", role: "Marketing Director, CloudScale", review: "Their technical execution in WordPress and conversion optimization is unmatched. Flawless communication and fast turnaround.", stars: 5 },
    { name: "Marcus Vance", role: "Founder, BioHealth Innovations", review: "The team delivered an enterprise-grade digital flagship that immediately positioned us as a market leader. Highly recommended.", stars: 5 },
  ];

  const blogPosts = [
    { title: "Maximizing B2B Conversion Rates Through Structured Information Architecture", tag: "CRO Strategy", date: "Oct 2024", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
    { title: "Why Modern High-Growth Brands Are Migrating to Clean WordPress Architecture", tag: "Development", date: "Sep 2024", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
    { title: "The 2025 Blueprint for Dominating Organic Search in Competitive Niches", tag: "SEO & Growth", date: "Aug 2024", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#0D9488] selection:text-white">
      {/* 1. Top Navigation Bar */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tighter text-[#0D9488]">
              nexvis<span className="text-[#0F766E]">.it</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-slate-600">
            <a href="#services" className="hover:text-[#0D9488] transition">Services</a>
            <a href="#about" className="hover:text-[#0D9488] transition">About Us</a>
            <a href="#portfolio" className="hover:text-[#0D9488] transition">Past Results</a>
            <a href="#testimonials" className="hover:text-[#0D9488] transition">Reviews</a>
            <a href="#insights" className="hover:text-[#0D9488] transition">Insights</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-teal-500/20 flex items-center gap-2">
              <span>Get a Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-teal-50/30 to-[#F8FAFC] pt-16 pb-24 px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-300 text-teal-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Full-Service B2B Digital Marketing Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Digital Marketing That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#0284C7] to-[#2563EB]">
                Builds Brands &amp; Drives Growth
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              We engineer bespoke digital solutions that align high-performance web development, brand strategy, and paid acquisition to deliver measurable ROI.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-[#0D9488] hover:bg-[#0F766E] text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-teal-600/20 transition-all flex items-center gap-2">
                <span>Start Your Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition">
                Explore Our Portfolio
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>99.8% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>150+ Digital Builds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>Data-Driven ROI</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                alt="Digital Marketing Leader"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#0D9488] font-bold">Live Lead Funnel</span>
                    <p className="text-xs font-black text-slate-800">+42% Growth In 90 Days</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-[#0D9488] flex items-center justify-center font-bold text-xs">
                    ↑
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Blue Mission Banner */}
      <section className="bg-gradient-to-r from-[#0F766E] to-[#0284C7] text-white py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold text-teal-200 block mb-1">
              OUR CORE MISSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black leading-snug">
              Turn your digital footprint into an automated engine for high-value client acquisition.
            </h2>
          </div>
          <button className="px-6 py-3.5 bg-white text-[#0F766E] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-slate-100 transition shrink-0">
            Schedule Discovery Call
          </button>
        </div>
      </section>

      {/* 4. "Your Trusted Partner in Digital Excellence" */}
      <section id="about" className="py-20 px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
              alt="Nexvis Digital Strategy Team"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#0D9488] font-bold block">
              COLLABORATION THAT DELIVERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Your Trusted Partner in Digital Excellence
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We bridge the gap between creative visual craftsmanship and cold, analytical performance marketing. Every design choice is backed by real user engagement telemetry.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Enterprise SLA & Dedicated Senior Growth Manager",
                "Full-Stack WordPress, Bricks Builder & Custom PHP Architecture",
                "Conversion Funnels Engineered for B2B High-Ticket Contracts",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3x3 Specialized Services Capabilities Matrix */}
      <section id="services" className="bg-[#0B132B] text-white py-24 px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-superwide text-[#14B8A6] font-bold block">
              SERVICES MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">
              From Web &amp; Marketing — Moving The Needle Across Every Channel
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Holistic digital engineering designed to scale brand awareness, user trust, and inbound lead volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1C2541] border border-slate-700/60 rounded-2xl p-7 hover:border-teal-400/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-[#14B8A6] flex items-center justify-center mb-5 group-hover:bg-[#14B8A6] group-hover:text-[#0B132B] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-white group-hover:text-teal-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-teal-400 font-bold">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. "Proven Past Real Results" */}
      <section id="portfolio" className="py-20 px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#0D9488] font-bold block">CASE STUDIES</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">Proven Past Real Results</h2>
          <p className="text-xs text-slate-500 mt-2">Explore how we helped growing businesses achieve market leadership.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
              alt="Brand Identity Collateral"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold text-[#0D9488] uppercase tracking-wider">Enterprise Brand Overhaul</span>
            <h3 className="text-2xl font-black text-slate-900">Nexvis Multi-Device Corporate Identity &amp; Portal</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete design system including stationery collateral, responsive web templates, and an automated lead intake workflow that decreased response time from 24h to 15 minutes.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-2xl font-black text-[#0D9488]">+140%</span>
                <span className="text-[11px] text-slate-500 block font-semibold">Form Submissions</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-2xl font-black text-slate-900">0.8s</span>
                <span className="text-[11px] text-slate-500 block font-semibold">Page Load Speed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section id="testimonials" className="bg-slate-50 py-20 px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-[#0D9488] font-bold block">TESTIMONIALS</span>
            <h2 className="text-3xl font-black text-slate-900 mt-1">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientReviews.map((r, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#F59E0B] mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    &ldquo;{r.review}&rdquo;
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <h4 className="font-black text-sm text-slate-900">{r.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Latest Marketing Insights Blog */}
      <section id="insights" className="py-20 px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#0D9488] font-bold block">INSIGHTS &amp; STRATEGY</span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">Latest Marketing News &amp; Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span className="text-[#0D9488] font-bold uppercase">{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-extrabold text-sm text-slate-900 leading-snug group-hover:text-[#0D9488] transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Final CTA Banner */}
      <section className="bg-gradient-to-r from-[#0F766E] to-[#0284C7] text-white py-16 px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            Ready to Scale Your Digital Impact?
          </h2>
          <p className="text-sm text-teal-100 max-w-xl mx-auto">
            Book a complimentary strategy consultation with our senior digital architects today.
          </p>
          <button className="px-8 py-4 bg-white text-[#0F766E] font-black text-xs uppercase tracking-wider rounded-xl shadow-xl hover:bg-slate-100 transition">
            Book Discovery Session Now
          </button>
        </div>
      </section>

      {/* 10. Dark Agency Footer */}
      <footer className="bg-[#0A101D] text-slate-400 py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <span className="font-black text-2xl tracking-tight text-white block">
              nexvis<span className="text-[#0D9488]">.it</span>
            </span>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Full-service digital agency engineering modern websites, brand identities and high-converting marketing funnels.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-teal-400 mb-3">Capabilities</h4>
            <ul className="space-y-2 text-xs">
              <li>Web Development</li>
              <li>Brand Identity</li>
              <li>Search Engine Optimization</li>
              <li>Paid Ads &amp; Social Media</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-teal-400 mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>About Agency</li>
              <li>Past Case Studies</li>
              <li>Marketing Insights</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-teal-400 mb-3">Contact</h4>
            <p className="text-xs">contact@nexvis.com</p>
            <p className="text-xs mt-1">+1 (888) 555-0144</p>
            <p className="text-xs mt-1">Enterprise B2B Solutions</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-800 flex justify-between text-xs text-slate-500">
          <span>Copyright 2024 Nexvis IT. All Rights Reserved.</span>
          <span>Engineered for Maximum Conversion</span>
        </div>
      </footer>
    </div>
  );
}
