import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0D392C",
          50: "#E7EFEB",
          100: "#C4DBD2",
          200: "#9EC4B5",
          300: "#74AC97",
          400: "#4D8F78",
          500: "#1E644F",
          600: "#144D3C",
          700: "#0D392C",
          800: "#09281F",
          900: "#051813",
          950: "#030E0B",
        },
        ivory: {
          DEFAULT: "#F7F5EF",
          50: "#FDFAF5",
          100: "#F7F5EF",
          200: "#EFECE1",
          300: "#E4DFCFAF",
          400: "#D3CCB6",
          500: "#B9AF93",
        },
        gold: {
          DEFAULT: "#C8A96B",
          light: "#DFC793",
          dark: "#A38445",
          muted: "rgba(200, 169, 107, 0.15)",
        },
        ink: {
          DEFAULT: "#111B17",
          muted: "#4A5A53",
          subtle: "#7E9088",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.18em",
        superwide: "0.25em",
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-slow": "marquee 55s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
