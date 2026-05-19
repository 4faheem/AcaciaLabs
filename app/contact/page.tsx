import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Initialize Deployment & Consultation | Acacia Labs Control Room",
  description: "Connect with our systems engineering team to request private access, assess operational pipelines, and initiate enterprise network integrations.",
  alternates: {
    canonical: `${company.url}/contact`,
  },
  openGraph: {
    title: "Initialize Deployment & Consultation | Acacia Labs Control Room",
    description: "Connect with our systems engineering team to request private access, assess operational pipelines, and initiate enterprise network integrations.",
    url: `${company.url}/contact`,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Initialize Deployment & Consultation - Acacia Labs Control Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Initialize Deployment & Consultation | Acacia Labs Control Room",
    description: "Connect with our systems engineering team to request private access, assess operational pipelines, and initiate enterprise network integrations.",
    images: ["/opengraph-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
