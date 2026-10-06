export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Deep Discovery & Goal Alignment",
    tagline: "Understand the business, audience and goals.",
    description:
      "We unpack your business economics, current conversion leaks, ideal customer profile, and competitors. No assumptions—only clarity on what will drive revenue.",
    details: [
      "Target customer & buyer persona analysis",
      "Current website teardown & friction identification",
      "Commercial objectives & KPI benchmarks",
    ],
  },
  {
    number: "02",
    phase: "STRATEGIZE",
    title: "Conversion Architecture & UX Blueprint",
    tagline: "Create the right UX, content and conversion strategy.",
    description:
      "Structuring the information architecture and copywriting wireframe so every scroll depth deliberately nudges the visitor closer to an inquiry or transaction.",
    details: [
      "Information hierarchy & page wireframing",
      "Direct response copy guidance & CTA logic",
      "Technical stack roadmap (Bricks / Elementor / Headless)",
    ],
  },
  {
    number: "03",
    phase: "BUILD",
    title: "High-Craft Engineering & Responsive Build",
    tagline: "Design and develop a fast, responsive digital experience.",
    description:
      "Transforming strategy into an editorial, visually commanding website. Clean semantic markup, bespoke animations, and flawless mobile responsiveness.",
    details: [
      "Bespoke layout design & micro-interactions",
      "Dynamic custom post types & database modeling",
      "Zero unneeded dependencies or heavy bloat",
    ],
  },
  {
    number: "04",
    phase: "OPTIMIZE",
    title: "Speed, Technical SEO & Testing",
    tagline: "Improve performance, SEO and user experience.",
    description:
      "Tuning performance to hit 90+ Core Web Vitals, deploying structured schema data for Google and AI engines, and validating cross-device responsiveness.",
    details: [
      "Sub-second asset compression & caching",
      "Comprehensive on-page & JSON-LD schema",
      "Rigorous cross-browser QA & form testing",
    ],
  },
  {
    number: "05",
    phase: "GROW",
    title: "Data-Driven Marketing & Scale",
    tagline: "Use data and marketing to generate measurable business growth.",
    description:
      "Post-launch amplification through Google Ads, Meta campaigns, continuous conversion rate optimization, and actionable analytics intelligence.",
    details: [
      "Conversion tracking setup (GA4 & GTM)",
      "Targeted paid acquisition campaign launch",
      "Iterative CRO & landing page testing",
    ],
  },
];
