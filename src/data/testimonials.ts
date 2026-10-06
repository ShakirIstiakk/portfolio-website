/**
 * =========================================================================
 * TESTIMONIALS DATA
 *
 * NOTE FOR SHAKIR:
 * These testimonials are configured as high-fidelity editorial PLACEHOLDERS.
 * When real client quotes become available, simply update the fields below.
 * Flagged: [IS_PLACEHOLDER = true]
 * =========================================================================
 */

export interface Testimonial {
  id: string;
  isPlaceholder: boolean; // Explicit flag for placeholder tracking
  quote: string;
  clientName: string;
  role: string;
  company: string;
  projectRef: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    isPlaceholder: true, // [PLACEHOLDER - REPLACE WITH REAL CLIENT ENDORSEMENT]
    quote:
      "Shakir transformed our web presence from a slow, chaotic brochure into a high-converting digital engine. The new booking flow is effortless for our guests, and the site speed improvements were immediately evident in our direct revenue numbers.",
    clientName: "David Henderson",
    role: "Managing Director",
    company: "1770 Beach Holiday Properties",
    projectRef: "1770 Beach Accommodation",
    rating: 5,
  },
  {
    id: "testimonial-2",
    isPlaceholder: true, // [PLACEHOLDER - REPLACE WITH REAL CLIENT ENDORSEMENT]
    quote:
      "Working with Shakir is a breath of fresh air. He doesn't just write code or build pages—he looks at the business model, understands our audience, and engineers a funnel that actually converts visitors into commercial leads.",
    clientName: "Marcus Vance",
    role: "Head of Marketing & Growth",
    company: "Tidal Grow Bio-Tech",
    projectRef: "Tidal Grow Ag",
    rating: 5,
  },
  {
    id: "testimonial-3",
    isPlaceholder: true, // [PLACEHOLDER - REPLACE WITH REAL CLIENT ENDORSEMENT]
    quote:
      "Our checkout abandonment rate plunged within two weeks of launching our new Bricks-powered WooCommerce store. Shakir is that rare specialist who is equally brilliant at technical performance and conversion psychology.",
    clientName: "Sarah Lindqvist",
    role: "Founder & Creative Director",
    company: "Craft King Supplies",
    projectRef: "Craft King WooCommerce",
    rating: 5,
  },
];
