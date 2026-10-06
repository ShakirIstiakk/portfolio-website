export interface Project {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  year: string;
  role: string;
  services: string[];
  technologies: string[];
  liveUrl?: string;
  image: string;
  fullScreenshot?: string;
  featured: boolean;
  metricHighlight?: {
    value: string;
    label: string;
  };
  overview: {
    summary: string;
    timeline: string;
    deliverables: string[];
  };
  challenge: {
    statement: string;
    painPoints: string[];
  };
  strategy: {
    approach: string;
    pillars: { title: string; desc: string }[];
  };
  solution: {
    narrative: string;
    highlights: { title: string; desc: string }[];
  };
  results: {
    hasVerifiedData: boolean;
    metrics: { value: string; label: string; verifiedNote?: string }[];
    summary: string;
  };
  visualShowcase: {
    caption: string;
    mockupType: string;
  };
  finalOutcome: string;
}

export const projects: Project[] = [
  {
    slug: "1770-beach-accommodation",
    title: "1770 Beach Accommodation",
    tagline: "Luxury holiday accommodation booking experience engineered for speed and direct reservations.",
    client: "1770 Beach Holiday Homes",
    industry: "Luxury Hospitality & Holiday Rentals",
    year: "2024",
    role: "Lead Web Designer & WordPress Architect",
    services: [
      "Custom Web Design",
      "WordPress Engineering",
      "Custom CPT & Booking Architecture",
      "Speed Optimization & Technical SEO",
    ],
    technologies: [
      "WordPress",
      "Bricks Builder",
      "JetEngine",
      "Contact Form 7",
      "Rank Math",
    ],
    image: "/images/project-1770-beach.jpg",
    fullScreenshot: "/images/project-1770-beach-full.png",
    featured: true,
    metricHighlight: {
      value: "Up to 75%",
      label: "Loading-Speed Improvement",
    },
    overview: {
      summary:
        "1770 Beach Accommodation is a boutique holiday home provider in Seventeen Seventy, Queensland. They needed a distinct, editorial digital storefront that reflected their beachfront luxury properties while replacing slow third-party booking embed friction with an ultra-responsive custom inquiry and listing workflow.",
      timeline: "6 Weeks",
      deliverables: [
        "Editorial UI/UX Design System",
        "High-performance Bricks Builder Theme",
        "Custom JetEngine Property Database",
        "Direct Booking & Availability Inquiries",
        "Rank Math On-Page Schema Optimization",
      ],
    },
    challenge: {
      statement:
        "The previous website suffered from heavy bloated plugins, sluggish mobile load times, and an inflexible property catalog that failed to showcase the premium value of the beachfront homes. Guests were dropping off before completing booking inquiries.",
      painPoints: [
        "Slow mobile load times dampening booking intent from travelers on 4G/5G",
        "Lack of custom property filtering (bedrooms, beachfront view, pet-friendly)",
        "Disjointed guest booking inquiry workflow causing abandoned inquiries",
        "Weak local search visibility and missing structured accommodation schema",
      ],
    },
    strategy: {
      approach:
        "We bypassed heavy commercial multi-purpose themes in favor of a lean, custom Bricks Builder architecture paired with JetEngine custom post types. The goal: sub-second rendering, architectural typography, and frictionless inquiry pathways.",
      pillars: [
        {
          title: "Speed-First Foundation",
          desc: "Architected a lightweight DOM using Bricks Builder to achieve near-instantaneous page transitions.",
        },
        {
          title: "Structured Property Engine",
          desc: "Structured every listing through JetEngine dynamic fields for instant search, filtering, and rich meta previews.",
        },
        {
          title: "High-Intent Booking Funnel",
          desc: "Placed sticky reservation pickers with streamlined Contact Form 7 routing straight to booking managers.",
        },
      ],
    },
    solution: {
      narrative:
        "Constructed an editorial aesthetic inspired by high-end architectural monographs. Clean lines, warm ivory negative space, and large coastal photography invite visitors into an immersive holiday mindset, while custom JetEngine queries deliver immediate property listings without server lag.",
      highlights: [
        {
          title: "Custom Listing Architecture",
          desc: "Dynamic templates for villas, beachfront lodges, and retreat homes with real-time property specifications.",
        },
        {
          title: "Streamlined Booking UX",
          desc: "Frictionless inquiry forms tied to Contact Form 7 with automated notification loops and calendar pickers.",
        },
        {
          title: "Rank Math Accommodation SEO",
          desc: "Complete JSON-LD VacationRental schema implementation ensuring rich snippets in search results.",
        },
      ],
    },
    results: {
      hasVerifiedData: true,
      metrics: [
        {
          value: "Up to 75%",
          label: "Website Loading-Speed Improvement",
          verifiedNote: "Verified Core Web Vitals audit",
        },
        {
          value: "35%",
          label: "Bounce-Rate Reduction",
          verifiedNote: "Verified analytics comparison",
        },
        {
          value: "40%",
          label: "Higher Inquiries Conversion",
          verifiedNote: "Verified direct booking inquiry rate",
        },
      ],
      summary:
        "The re-engineered platform drastically decreased bounce rates and accelerated inquiry throughput, establishing 1770 Beach Accommodation as the premier direct booking destination for the region.",
    },
    visualShowcase: {
      caption: "1770 Beach Accommodation - Desktop & Villa Booking Showcase",
      mockupType: "Desktop Browser Mockup",
    },
    finalOutcome:
      "A fast, editorial hospitality platform that turns browsing travelers into booked guests without paying extortionate commission fees to third-party aggregators.",
  },
  {
    slug: "tidal-grow-ag",
    title: "Tidal Grow Ag",
    tagline: "Corporate agritech portal communicating biotechnology innovation with an intuitive product catalog.",
    client: "Tidal Grow Agriculture",
    industry: "Agricultural Science & Sustainable Bio-tech",
    year: "2024",
    role: "Web Designer & Front-End Developer",
    services: [
      "Corporate Web Design",
      "Elementor Pro Development",
      "Interactive Mega Menu Architecture",
      "B2B Lead Funnel Optimization",
    ],
    technologies: [
      "WordPress",
      "Elementor Pro",
      "Mega Menu",
      "Contact Form 7",
    ],
    image: "/images/project-tidal-grow.jpg",
    fullScreenshot: "/images/project-tidal-grow-full.png",
    featured: true,
    metricHighlight: {
      value: "Case Study Details",
      label: "Coming Soon",
    },
    overview: {
      summary:
        "Tidal Grow Ag develops next-generation crop nutrition and sustainable bio-fertilizers. They required a corporate web presence that balances scientific authority, agricultural scale, and clear product distribution pathways for growers and agronomy partners across North America.",
      timeline: "5 Weeks",
      deliverables: [
        "Corporate Agritech Design System",
        "Responsive Elementor Pro Implementation",
        "Custom Multi-Tier Mega Menu",
        "Product Spec Sheets & Technical Inquiries",
        "Mobile-Responsive Field Experience",
      ],
    },
    challenge: {
      statement:
        "Tidal Grow Ag had an extensive portfolio of microbial inoculants, plant nutrition products, and biostimulants that were difficult for commercial growers and distributors to browse on mobile devices while in the field.",
      painPoints: [
        "Dense technical formulations presented without clear categorization",
        "Ineffective navigation unable to guide diverse personas (farmers vs agronomists)",
        "Slow inquiry handoff between digital inquiries and regional sales reps",
      ],
    },
    strategy: {
      approach:
        "Designed a clear information hierarchy organized by crop challenges and product categories, anchored by an intuitive mega menu with instant category previews and direct contact touchpoints.",
      pillars: [
        {
          title: "Clear Hierarchy",
          desc: "Broke down complex biochemical benefits into scannable infographics and concise product summaries.",
        },
        {
          title: "Precision Mega Menu",
          desc: "Engineered a responsive mega menu allowing visitors to reach any formulation in two clicks.",
        },
        {
          title: "Field-Ready Mobile UX",
          desc: "Optimized typography and touch targets so agricultural consultants can easily read specs on handheld devices.",
        },
      ],
    },
    solution: {
      narrative:
        "Developed a fresh, modern aesthetic marrying lush environmental photography with corporate technical credibility. Custom Elementor templates ensure the internal marketing team can independently publish new field trials and product registrations.",
      highlights: [
        {
          title: "Dynamic Product Taxonomy",
          desc: "Categorized by Soil Health, Crop Protection, Plant Nutrition, and Adjuvants.",
        },
        {
          title: "Technical Spec Downloads",
          desc: "Integrated one-click PDF label and trial data access.",
        },
        {
          title: "Regional Inquiry Routing",
          desc: "Contact Form 7 forms dynamically routing inquiries to local territory sales directors.",
        },
      ],
    },
    results: {
      hasVerifiedData: false,
      metrics: [
        {
          value: "Case Study Details",
          label: "Coming Soon",
          verifiedNote: "Data verification in progress",
        },
      ],
      summary:
        "The project successfully elevated Tidal Grow Ag's scientific credibility and streamlined how commercial growers explore biotechnology solutions.",
    },
    visualShowcase: {
      caption: "Tidal Grow Ag - Agritech Portal & Mega Menu Navigation",
      mockupType: "Desktop Browser Showcase",
    },
    finalOutcome:
      "A clean, authority-driven digital flagship that equips agronomists, distributors, and farmers with instant product intelligence.",
  },
  {
    slug: "craft-king",
    title: "Craft King WooCommerce",
    tagline: "High-performance e-commerce storefront engineered for frictionless checkout and catalog browsing.",
    client: "Craft King Supplies",
    industry: "Craft Supplies & E-commerce Retail",
    year: "2023",
    role: "WooCommerce Developer & CRO Specialist",
    services: [
      "WooCommerce Architecture",
      "Bricks Builder Storefront",
      "Checkout Funnel Optimization",
      "Mobile UX & CRO",
    ],
    technologies: [
      "WordPress",
      "Bricks Builder",
      "WooCommerce",
    ],
    image: "/images/project-craft-king.jpg",
    fullScreenshot: "/images/project-craft-king-full.png",
    featured: true,
    metricHighlight: {
      value: "40%",
      label: "Higher Checkout Conversion",
    },
    overview: {
      summary:
        "Craft King is a high-volume retailer of creative supplies, knitting kits, paints, and specialty craft goods. They required a modern WooCommerce storefront built on Bricks Builder that eliminated checkout friction and scaled smoothly across thousands of product variations.",
      timeline: "7 Weeks",
      deliverables: [
        "Custom Bricks Builder WooCommerce Theme",
        "Single-Page Optimized Checkout",
        "Faceted Search and Filter System",
        "Mobile-First Product Grid & Quick Add-to-Cart",
        "Speed & Database Query Optimization",
      ],
    },
    challenge: {
      statement:
        "The existing store was bogged down by bloated plugins, slow page speeds during peak shopping seasons, and a multi-step checkout funnel that led to frequent cart abandonment.",
      painPoints: [
        "High shopping cart drop-off due to mandatory registration and slow checkout steps",
        "Catalog lag when filtering across brands, mediums, and price tiers",
        "Poor mobile tap ergonomics making mobile purchasing cumbersome",
      ],
    },
    strategy: {
      approach:
        "Rebuilt the entire front-end on Bricks Builder to drastically reduce stylesheet and JavaScript payloads, accompanied by a streamlined single-page checkout flow and sticky mobile purchase bars.",
      pillars: [
        {
          title: "Bricks Builder WooCommerce Engine",
          desc: "Eliminated bulky third-party builders to keep the store running at lightning speed.",
        },
        {
          title: "Conversion-Focused Checkout",
          desc: "Removed unneeded form fields, added guest checkout, and integrated trusted security badges.",
        },
        {
          title: "Predictive Search & Filtering",
          desc: "Implemented instant AJAX price ranges, category pills, and instant search bars.",
        },
      ],
    },
    solution: {
      narrative:
        "Delivered a vibrant yet organized shopping environment where products are hero. High-contrast typography and clear call-to-action buttons guide craft enthusiasts seamlessly from discovery to cart completion.",
      highlights: [
        {
          title: "Instant Cart Drawer",
          desc: "Slide-out cart drawer showing free shipping progress and one-click checkout.",
        },
        {
          title: "Variation Swatches",
          desc: "Instant color and quantity switching without full page reload delays.",
        },
        {
          title: "Speed-Tuned Assets",
          desc: "Automatic responsive image sizing and browser caching strategies.",
        },
      ],
    },
    results: {
      hasVerifiedData: true,
      metrics: [
        {
          value: "40%",
          label: "Higher Landing Page & Checkout Conversion",
          verifiedNote: "Verified post-launch e-commerce benchmark",
        },
        {
          value: "Up to 75%",
          label: "Storefront Loading-Speed Improvement",
          verifiedNote: "Verified mobile Core Web Vitals",
        },
        {
          value: "35%",
          label: "Lower Mobile Bounce Rate",
          verifiedNote: "Verified analytics comparison",
        },
      ],
      summary:
        "The transition to a custom Bricks-powered WooCommerce storefront created an effortless buying journey, substantially cutting cart drop-off.",
    },
    visualShowcase: {
      caption: "Craft King - High-Conversion WooCommerce Storefront & Catalog",
      mockupType: "E-Commerce Desktop Mockup",
    },
    finalOutcome:
      "A fast, modern e-commerce storefront that transforms craft hobbyists into loyal repeat customers.",
  },
  {
    slug: "nexvis-it",
    title: "Nexvis IT",
    tagline: "Enterprise B2B digital platform and high-intent lead generation engine for managed IT & cloud services.",
    client: "Nexvis IT Solutions",
    industry: "Enterprise IT Services & Managed Solutions",
    year: "2023",
    role: "Digital Marketing Expert & Web Strategist",
    services: [
      "B2B Digital Strategy",
      "Lead Generation Funnel",
      "Bricks Builder Web Development",
      "Paid Search & Conversion Architecture",
    ],
    technologies: [
      "WordPress",
      "Bricks Builder",
      "Contact Form 7",
      "Google Tag Manager",
      "Google Ads",
    ],
    image: "/images/project-nexvis-it.jpg",
    fullScreenshot: "/images/project-nexvis-it-full.png",
    featured: true,
    metricHighlight: {
      value: "Case Study Details",
      label: "Coming Soon",
    },
    overview: {
      summary:
        "Nexvis IT provides enterprise cloud migration, managed cybersecurity, and 24/7 IT infrastructure management. As the Digital Marketing Expert on the project, Shakir designed a high-intent consultation funnel and fast-loading web foundation tailored for CIOs and IT directors.",
      timeline: "6 Weeks",
      deliverables: [
        "B2B Enterprise Positioning & Value Proposition",
        "High-Speed Bricks Builder Platform",
        "Consultation Booking Funnel with CF7",
        "Google Ads Landing Page Matrix",
        "Analytics & High-Intent Conversion Tracking",
      ],
    },
    challenge: {
      statement:
        "Enterprise IT contracts require immense trust. The existing site did not clearly differentiate Nexvis's SLA guarantees and security compliance, resulting in low ad conversion rates and high customer acquisition costs.",
      painPoints: [
        "Unclear value proposition failing to convey enterprise-grade reliability",
        "Low consultation form completion from qualified decision makers",
        "Lack of conversion tracking between Google Ads campaigns and signed deals",
      ],
    },
    strategy: {
      approach:
        "Engineered a confident, dark-slate enterprise aesthetic that immediately showcases uptime metrics, SOC-2 readiness, and rapid response SLAs, backed by dedicated PPC landing pages.",
      pillars: [
        {
          title: "Proof-Driven Layouts",
          desc: "Positioned key trust metrics (99.99% uptime, 500M+ threats mitigated) above the fold.",
        },
        {
          title: "High-Intent Lead Routing",
          desc: "Segmented contact inquiries by company size and urgent IT needs for immediate SDR follow-up.",
        },
        {
          title: "Full-Funnel Tracking",
          desc: "Implemented GTM data layers to attribute every consultation request back to campaign keywords.",
        },
      ],
    },
    solution: {
      narrative:
        "Constructed a high-converting B2B experience that guides enterprise buyers through specific challenges: managed IT, cloud migration, and cybersecurity resilience.",
      highlights: [
        {
          title: "Dedicated Solution Silos",
          desc: "Tailored landing pages designed for high Quality Score in Google Ads.",
        },
        {
          title: "Frictionless Consultation Scheduler",
          desc: "Two-step qualification form capturing critical business requirements without overwhelm.",
        },
        {
          title: "Lightweight Bricks Implementation",
          desc: "Zero-bloat code providing instantaneous initial server response times.",
        },
      ],
    },
    results: {
      hasVerifiedData: false,
      metrics: [
        {
          value: "Case Study Details",
          label: "Coming Soon",
          verifiedNote: "Verified client reporting in preparation",
        },
      ],
      summary:
        "Elevated Nexvis IT from a generic service vendor to a trusted strategic enterprise partner, establishing a predictable lead generation engine.",
    },
    visualShowcase: {
      caption: "Nexvis IT - Enterprise Managed IT Services & Consultation Funnel",
      mockupType: "B2B Desktop Showcase",
    },
    finalOutcome:
      "A high-credibility digital asset that consistently captures high-value B2B IT contracts.",
  },
  {
    slug: "webdesignmob",
    title: "WebDesignMob",
    tagline: "Bold creative agency portfolio engineered with dynamic CPT showcases and fluid typography.",
    client: "WebDesignMob Studio",
    industry: "Creative Agency & Digital Production",
    year: "2024",
    role: "Senior WordPress Developer & UI Designer",
    services: [
      "Agency Brand UI/UX",
      "Bricks Builder Architecture",
      "JetEngine Dynamic Portfolios",
      "Interactive Micro-Interactions",
    ],
    technologies: [
      "WordPress",
      "Bricks Builder",
      "JetEngine",
      "Contact Form 7",
    ],
    image: "/images/project-webdesignmob.jpg",
    fullScreenshot: "/images/project-webdesignmob-full.png",
    featured: true,
    metricHighlight: {
      value: "Case Study Details",
      label: "Coming Soon",
    },
    overview: {
      summary:
        "WebDesignMob is a modern creative agency specializing in bold digital experiences for ambitious brands. They required a flagship portfolio site that demonstrates cutting-edge visual craft while being easily maintained through structured JetEngine custom post types.",
      timeline: "4 Weeks",
      deliverables: [
        "Dark Editorial Studio Aesthetics",
        "Dynamic JetEngine Portfolio System",
        "Interactive Project Sliders & Grid Switchers",
        "Direct Project Brief Ingestion Flow",
        "Ultra-lightweight DOM Architecture",
      ],
    },
    challenge: {
      statement:
        "Creative agency websites often compromise technical performance for visual flair. WebDesignMob wanted an Awwwards-worthy design that loaded in under one second and allowed the team to publish new case studies in minutes.",
      painPoints: [
        "Complex case study layouts requiring code edits for every new client release",
        "Heavy script animations that degraded mobile performance and stuttered on scroll",
        "Lack of interactive project categorization for diverse client industries",
      ],
    },
    strategy: {
      approach:
        "Combined Bricks Builder's clean CSS output with JetEngine's custom post type taxonomy. The result is a showcase that renders instantly without sluggish third-party animation libraries.",
      pillars: [
        {
          title: "Modular Case Study Engine",
          desc: "Engineered reusable JetEngine templates for fast case-study publishing.",
        },
        {
          title: "High-End Editorial Styling",
          desc: "Applied deep forest green hues, champagne gold borders, and typographic hierarchy.",
        },
        {
          title: "Frictionless Inquiry Flow",
          desc: "Built an interactive project brief estimator that pre-qualifies client leads.",
        },
      ],
    },
    solution: {
      narrative:
        "Built a striking, immersive digital portfolio that commands attention. High-impact headlines, subtle interactive card elevations, and clean project filtering showcase creative work at the highest standard.",
      highlights: [
        {
          title: "JetEngine Custom Taxonomies",
          desc: "Filter projects by Branding, UI/UX, Web Design, and E-commerce with zero reload.",
        },
        {
          title: "Interactive Case Study Previews",
          desc: "Curated hero cards with hover reveals and client testimonial snippets.",
        },
        {
          title: "Optimized Performance",
          desc: "Clean semantic markup achieving top performance scores.",
        },
      ],
    },
    results: {
      hasVerifiedData: false,
      metrics: [
        {
          value: "Case Study Details",
          label: "Coming Soon",
          verifiedNote: "Case study documentation underway",
        },
      ],
      summary:
        "Successfully repositioned WebDesignMob as a premium design partner capable of winning higher-tier client retainers.",
    },
    visualShowcase: {
      caption: "WebDesignMob - Agency Showcase & Dynamic Portfolio System",
      mockupType: "Agency Portfolio Showcase",
    },
    finalOutcome:
      "A stunning agency showcase that proves high aesthetics and lightning performance can coexist perfectly.",
  },
];

// Placeholder for upcoming client projects
export const upcomingProjects = [
  {
    title: "Upcoming Fintech CRO Architecture",
    industry: "Fintech & SaaS Growth",
    status: "In Active Development",
    technologies: ["WordPress", "Bricks Builder", "Custom CRO"],
  },
  {
    title: "Upcoming E-Commerce Scaled Catalog",
    industry: "Direct-to-Consumer Luxury",
    status: "Q2 2026 Pipeline",
    technologies: ["WooCommerce", "Performance SEO"],
  },
];
