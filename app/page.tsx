import type { Metadata } from "next";
import HomeSections from "./home-sections";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acacia Labs | AI-Powered Operational Infrastructure",
  description: "An AI-powered operational infrastructure and business systems company focused on solving real workflow, automation, and analytics challenges for East African businesses.",
  alternates: {
    canonical: company.url,
  },
  openGraph: {
    title: "Acacia Labs | AI-Powered Operational Infrastructure",
    description: "An AI-powered operational infrastructure and business systems company focused on solving real workflow, automation, and analytics challenges for East African businesses.",
    url: company.url,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Acacia Labs - AI-Powered Operational Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acacia Labs | AI-Powered Operational Infrastructure",
    description: "An AI-powered operational infrastructure and business systems company focused on solving real workflow, automation, and analytics challenges for East African businesses.",
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Acacia Labs",
    "alternateName": "Acacia Labs East Africa",
    "url": company.url,
    "description": "An AI-powered operational infrastructure and business systems company focused on solving real workflow, automation, and analytics challenges for East African businesses.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${company.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeSections />
    </>
  );
}
