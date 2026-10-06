export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  deliverables: string[];
}

export const services: ServiceCategory[] = [
  {
    id: "web-dev",
    number: "01",
    title: "WEB DESIGN & DEVELOPMENT",
    tagline: "High-performance digital experiences built for brand prestige and speed.",
    description:
      "Crafting bespoke websites that load under a second, look like bespoke editorial pieces, and provide effortless editing workflows for long-term scalability.",
    items: [
      "WordPress Engineering",
      "Bricks Builder Architecture",
      "Elementor Pro Systems",
      "Webflow Experiences",
      "WooCommerce Storefronts",
      "High-Converting Landing Pages",
    ],
    deliverables: [
      "Pixel-perfect responsive builds",
      "Zero-bloat custom code structure",
      "Custom CPT & dynamic content models",
      "Sub-second Core Web Vitals optimization",
    ],
  },
  {
    id: "conversion-ux",
    number: "02",
    title: "CONVERSION & UX",
    tagline: "Turning passive web traffic into high-intent inbound inquiries.",
    description:
      "Systematic user experience audits and conversion rate optimization that eliminate user confusion, reduce bounce rates, and guide visitors straight into booking and buying.",
    items: [
      "UI/UX Strategic Optimization",
      "Conversion Rate Optimization (CRO)",
      "Landing Page Teardowns & Redesign",
      "Mobile-First Interaction Design",
      "User Experience & Wireframing",
    ],
    deliverables: [
      "Heuristic user journey audits",
      "Frictionless checkout & inquiry flows",
      "Visual hierarchy redesign",
      "Conversion copy & CTA positioning",
    ],
  },
  {
    id: "seo-search",
    number: "03",
    title: "SEO & SEARCH",
    tagline: "Dominating traditional and AI-driven search engine visibility.",
    description:
      "Building search-engine-native architectures that earn top rankings on Google and authoritative citations across emerging AI discovery engines (ChatGPT, Perplexity, Gemini).",
    items: [
      "Technical SEO Architecture",
      "On-Page & Keyword Optimization",
      "Semantic SEO & Entity Graphing",
      "JSON-LD Schema Markup",
      "AEO (Answer Engine Optimization)",
      "GEO & AI Search Optimization",
    ],
    deliverables: [
      "Crawlability & indexing audits",
      "Rich snippet schema deployment",
      "Entity-based semantic topic clusters",
      "AI engine discoverability formatting",
    ],
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "DIGITAL MARKETING",
    tagline: "Predictable customer acquisition funnels powered by paid traffic.",
    description:
      "Aligning targeted advertising campaigns directly with high-converting landing pages so every dollar spent generates measurable pipeline growth.",
    items: [
      "Google Ads Search & Performance Max",
      "Facebook & Meta Ads Retargeting",
      "B2B & High-Ticket Lead Generation",
      "Omnichannel Campaign Strategy",
      "Performance Marketing & Analytics",
    ],
    deliverables: [
      "Ad copy & creative alignment",
      "End-to-end conversion tracking (GTM)",
      "CAC reduction & landing page testing",
      "Actionable monthly attribution reporting",
    ],
  },
];
