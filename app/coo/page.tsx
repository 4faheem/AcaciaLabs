import type { Metadata } from "next";
import { company } from "@/lib/site";
import { PersonSchema } from "@/components/seo/SchemaMarkup";
import { COOClient } from "./COOClient";

export const metadata: Metadata = {
  title: "Gwamaka Johas | Chief Operating Officer, Acacia Labs",
  description: "Designing systems, workflows, and operational foundations that turn strategy into repeatable execution at scale.",
  alternates: {
    canonical: `${company.url}/coo`,
  },
  openGraph: {
    title: "Gwamaka Johas | Chief Operating Officer, Acacia Labs",
    description: "Transforming strategy into repeatable execution.",
    url: `${company.url}/coo`,
    siteName: company.name,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gwamaka Johas | Chief Operating Officer, Acacia Labs",
    description: "Transforming strategy into repeatable execution.",
  },
};

export default function Page() {
  return (
    <>
      <PersonSchema
        name="Gwamaka Johas"
        role="Chief Operating Officer, Acacia Labs"
        bio="Transforming strategy into repeatable execution. Designs the systems, workflows, and operational foundations that enable sustainable scale at Acacia Labs."
        url={`${company.url}/coo`}
      />
      <COOClient />
    </>
  );
}
