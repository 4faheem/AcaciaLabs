import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/site";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { PageIntro } from "@/components/site/page-intro";
import { PersonSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Fahim Kiama | Founder & CEO, Acacia Labs",
  description: "Executive profile, engineering philosophy, and operational systems vision of Fahim Kiama, CEO & Founder of Acacia Labs.",
  alternates: {
    canonical: `${company.url}/founder`,
  },
  openGraph: {
    title: "Fahim Kiama | Founder & CEO, Acacia Labs",
    description: "Executive profile, engineering philosophy, and operational systems vision of Fahim Kiama, CEO & Founder of Acacia Labs.",
    url: `${company.url}/founder`,
    siteName: company.name,
    type: "profile",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Fahim Kiama - Acacia Labs Founder & CEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahim Kiama | Founder & CEO, Acacia Labs",
    description: "Executive profile, engineering philosophy, and operational systems vision of Fahim Kiama, CEO & Founder of Acacia Labs.",
    images: ["/opengraph-image.png"],
  },
};

export default function FounderPage() {
  const bio = "Acacia Labs is built to solve fragmented systems, manual workflows, and disconnected communication across Africa through practical software architecture and AI-assisted workflows.";

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden">
      <PersonSchema 
        name={company.ceo} 
        role="Founder & CEO" 
        bio={bio}
        url={`${company.url}/founder`}
      />
      
      <PageIntro 
        eyebrow="EXECUTIVE LEADERSHIP" 
        title="Fahim Kiama" 
        description="Founder & Chief Executive Officer // Technical Systems Architect"
      />
      
      <SectionWrapper>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16 mt-16 items-start">
          {/* Main Biography and Philosophy */}
          <div className="space-y-12">
            <section className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-tight text-text-primary border-b border-glass-border pb-3">
                01 // Systems Foundation
              </h2>
              <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
                <p className="font-semibold text-text-primary text-base">
                  Acacia Labs was founded on a simple observation:
                </p>
                <p>
                  Many businesses across Africa still operate with fragmented systems, manual workflows, disconnected communication, and operational inefficiencies that quietly slow growth every day.
                </p>
                <p>
                  While global software platforms are often designed around assumptions of stable infrastructure, large enterprise budgets, and highly digitized environments, many African businesses operate under very different realities:
                </p>
                
                <ul className="grid sm:grid-cols-2 gap-3 pl-0 list-none my-6">
                  {[
                    "mobile-first operations",
                    "inconsistent connectivity",
                    "fragmented workflows",
                    "scaling inefficiencies",
                    "operational overhead",
                    "limited access to integrated digital systems"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-text-primary bg-white/[0.01] border border-glass-border p-3 rounded-sm">
                      <span className="h-1.5 w-1.5 bg-accent-cyan rounded-full animate-pulse" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  Acacia Labs exists to build software infrastructure that reflects those realities directly.
                </p>
                <p>
                  The company focuses on creating intelligent operational systems that help organizations streamline management, improve coordination, reduce inefficiency, and scale more effectively through practical software architecture and AI-assisted workflows.
                </p>
                <p>
                  Rather than pursuing technology for hype, the focus is on systems that improve execution.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-tight text-text-primary border-b border-glass-border pb-3">
                02 // Systems & Focus
              </h2>
              <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
                <p>
                  This philosophy shapes every product developed under Acacia Labs, including:
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 pl-0 list-none my-6">
                  {[
                    "E-Manager",
                    "SyncAI",
                    "enterprise productivity systems",
                    "AI-assisted workflow infrastructure",
                    "SME operational platforms"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-text-primary bg-white/[0.01] border border-glass-border p-3 rounded-sm">
                      <span className="h-1.5 w-1.5 bg-accent-blue rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  The long-term vision is not simply to create applications, but to contribute toward a stronger digital operating layer for African businesses and institutions.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-tight text-text-primary border-b border-glass-border pb-3">
                03 // Core Drivers & Belief
              </h2>
              <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
                <p>
                  At its core, Acacia Labs is driven by:
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 pl-0 list-none my-6">
                  {[
                    "systems thinking",
                    "operational clarity",
                    "scalable software architecture",
                    "practical AI implementation",
                    "long-term infrastructure building"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-text-primary bg-white/[0.01] border border-glass-border p-3 rounded-sm">
                      <span className="h-1.5 w-1.5 bg-accent-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border border-accent-blue/20 bg-accent-blue/[0.01] p-6 rounded-sm my-6 space-y-3">
                  <span className="text-[9px] font-mono text-accent-cyan tracking-widest uppercase">The Belief</span>
                  <p className="text-base text-text-primary font-medium leading-relaxed italic">
                    "Technology becomes most valuable when it reduces friction, improves coordination, and enables people and organizations to operate more effectively at scale."
                  </p>
                  <p className="text-[10px] font-mono text-text-secondary">
                    Acacia Labs is being built with that principle at the center.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Telemetry and Sidebar Info */}
          <div className="space-y-8">
            <div className="border border-glass-border bg-glass-bg p-8 rounded-sm space-y-6 shadow-xl">
              <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase pb-2 border-b border-glass-border/40">
                Node Identity & Alignment
              </div>
              <div className="space-y-4 text-xs font-mono text-text-secondary">
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider">Title</span>
                  <span className="text-text-primary font-bold">Founder & CEO</span>
                </div>
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider">Key Alignments</span>
                  <span className="text-text-primary">AI Infrastructure, System Architecture, Operational Sovereignty</span>
                </div>
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider">HQ Node Location</span>
                  <span className="text-text-primary">Dar es Salaam, Tanzania</span>
                </div>
                <div>
                  <span className="text-text-muted block text-[9px] uppercase tracking-wider">Enterprise Inquiries</span>
                  <a href={`mailto:${company.email}`} className="text-accent-cyan hover:underline">{company.email}</a>
                </div>
              </div>
              <div className="pt-4 border-t border-glass-border/40">
                <Link href="/contact" className="btn-primary w-full text-center py-2 text-[10px] font-mono tracking-widest uppercase">
                  Initiate Strategic Briefing
                </Link>
              </div>
            </div>

            <div className="border border-glass-border/60 p-6 rounded-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">Institutional Core</h3>
              <p className="text-xs leading-relaxed text-text-secondary">
                "Our engineering begins with the unique structural requirements and operational constraints of the continent. We do not adapt Western systems; we build from the ground up."
              </p>
              <div className="text-[9px] font-mono text-text-muted">— Fahim Kiama, CEO</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
