import type { Metadata } from "next";
import { company } from "@/lib/site";
import { PersonSchema } from "@/components/seo/SchemaMarkup";
import { FounderClient } from "./FounderClient";

export const metadata: Metadata = {
  title: "Fahim Kiama | Founder & CEO, Acacia Labs",
  description: "Building intelligence infrastructure for African enterprise. Founder and CEO of Acacia Labs — focused on operational systems, enterprise architecture, and AI-native execution platforms.",
  alternates: {
    canonical: `${company.url}/founder`,
  },
  openGraph: {
    title: "Fahim Kiama | Founder & CEO, Acacia Labs",
    description: "Building intelligence infrastructure for African enterprise.",
    url: `${company.url}/founder`,
    siteName: company.name,
    type: "profile",
    images: [
      {
        url: "/ceo-portrait.png",
        width: 1200,
        height: 1500,
        alt: "Fahim Kiama, Founder & CEO of Acacia Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahim Kiama | Founder & CEO, Acacia Labs",
    description: "Building intelligence infrastructure for African enterprise.",
    images: ["/ceo-portrait.png"],
  },
};

export default function Page() {
  return (
    <>
      <PersonSchema
        name="Fahim Kiama"
        role="Founder & CEO, Acacia Labs"
        bio="Building intelligence infrastructure for African enterprise. Focused on operational systems, enterprise architecture, and AI-native execution platforms."
        url={`${company.url}/founder`}
      />
      <FounderClient />
    </>
  );
}
