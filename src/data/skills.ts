export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillMarqueeList: string[] = [
  "WordPress",
  "Bricks Builder",
  "Elementor Pro",
  "WooCommerce",
  "Webflow",
  "Gutenberg",
  "JetEngine",
  "Rank Math",
  "Yoast SEO",
  "Google Ads",
  "Meta Ads",
  "Google Analytics 4",
  "Google Tag Manager",
  "Google Search Console",
  "Semrush",
  "Ahrefs",
  "Screaming Frog",
  "Conversion Rate Optimization (CRO)",
  "Technical SEO",
  "Performance Engineering",
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Development & CMS",
    skills: [
      "WordPress Core",
      "Bricks Builder",
      "Elementor Pro",
      "WooCommerce",
      "Webflow",
      "Gutenberg Blocks",
      "JetEngine Dynamic CPT",
    ],
  },
  {
    category: "Search & Visibility",
    skills: [
      "Technical SEO",
      "Rank Math Pro",
      "Yoast SEO",
      "Google Search Console",
      "Semrush",
      "Ahrefs",
      "Screaming Frog SEO Spider",
      "Schema & Entity SEO",
    ],
  },
  {
    category: "Marketing & Analytics",
    skills: [
      "Google Ads (Search & PMax)",
      "Meta Ads (Facebook & Instagram)",
      "Google Analytics 4 (GA4)",
      "Google Tag Manager (GTM)",
      "Lead Generation Funnels",
      "Conversion Rate Optimization (CRO)",
    ],
  },
];
