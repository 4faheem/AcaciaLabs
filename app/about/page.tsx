import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Institutional Strategy & Engineering Principles | Acacia Labs",
  description: "Discover our systems-over-hype engineering principles, leadership architecture, and mission to build the foundational operational layers powering modern African enterprise.",
  alternates: {
    canonical: `${company.url}/about`,
  },
  openGraph: {
    title: "Institutional Strategy & Engineering Principles | Acacia Labs",
    description: "Discover our systems-over-hype engineering principles, leadership architecture, and mission to build the foundational operational layers powering modern African enterprise.",
    url: `${company.url}/about`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Institutional Strategy & Engineering Principles - Acacia Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Institutional Strategy & Engineering Principles | Acacia Labs",
    description: "Discover our systems-over-hype engineering principles, leadership architecture, and mission to build the foundational operational layers powering modern African enterprise.",
    images: ["/opengraph-image.png"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
