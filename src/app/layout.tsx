import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shakiristiak.fyi"),
  title: {
    default: "Shakir Istiak — Web Designer, WordPress Developer & Digital Growth Specialist",
    template: "%s | Shakir Istiak",
  },
  description:
    "Helping coaches, founders, and growing brands turn better websites into better business. Specialized in bespoke WordPress development, Bricks Builder, CRO, Technical SEO, and high-performance digital marketing.",
  keywords: [
    "Shakir Istiak",
    "WordPress Developer",
    "Web Designer",
    "Bricks Builder Specialist",
    "Conversion Rate Optimization",
    "CRO Consultant",
    "Digital Marketing Specialist",
    "Technical SEO",
    "Elementor Pro Developer",
    "High-converting landing pages",
  ],
  authors: [{ name: "Shakir Istiak", url: "https://shakiristiak.fyi" }],
  creator: "Shakir Istiak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shakiristiak.fyi",
    title: "Shakir Istiak — Web Designer, WordPress Developer & Digital Growth Specialist",
    description:
      "Helping coaches, founders, and growing brands turn better websites into better business with bespoke WordPress engineering, CRO, and performance marketing.",
    siteName: "Shakir Istiak Portfolio",
    images: [
      {
        url: "/images/shakir-istiak.jpg",
        width: 1200,
        height: 630,
        alt: "Shakir Istiak — Digital Consultant & WordPress Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakir Istiak — Web Designer, WordPress Developer & Digital Growth Specialist",
    description:
      "Turning better websites into better business. 4+ Years Experience • 12+ Websites Delivered • WordPress, CRO & Growth.",
    images: ["/images/shakir-istiak.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shakir Istiak",
    jobTitle: "Web Designer & WordPress Developer & Digital Marketing Specialist",
    url: "https://shakiristiak.fyi",
    email: "istiakzy@gmail.com",
    image: "https://shakiristiak.fyi/images/shakir-istiak.jpg",
    description:
      "Web Designer, WordPress Developer & Digital Marketing Specialist helping startups, small businesses and growing brands generate leads, improve conversions and build stronger online presence.",
    knowsAbout: [
      "WordPress Development",
      "Bricks Builder",
      "Elementor Pro",
      "WooCommerce",
      "Conversion Rate Optimization",
      "Technical SEO",
      "Google Ads",
      "Digital Marketing",
    ],
    sameAs: ["https://linkedin.com/in/shakiristiak"],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ivory text-ink font-body antialiased selection:bg-forest selection:text-ivory">
        {children}
      </body>
    </html>
  );
}
