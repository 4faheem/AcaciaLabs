import type { Metadata } from "next";
import { company } from "@/lib/site";
import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  title: "Engineering Journal & Operational Briefings | Acacia Labs",
  description: "Technical strategist insights, systems engineering logs, and operations telemetry from Acacia Labs.",
  alternates: {
    canonical: `${company.url}/blog`,
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
