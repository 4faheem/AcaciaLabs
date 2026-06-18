import Link from "next/link";
import { Logo } from "./logo";

const footerCols = [
  {
    heading: "Product",
    color: "text-accent-blue",
    links: [
      { label: "E-Manager", href: "/products/e-manager" },
      { label: "Pricing", href: "/contact" },
      { label: "Start Free Trial", href: "/contact" },
      { label: "Book a Demo", href: "/contact" },
    ],
  },
  {
    heading: "Company",
    color: "text-accent-cyan",
    links: [
      { label: "About", href: "/about" },
      { label: "Founder", href: "/founder" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Support",
    color: "text-accent-indigo",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/legal" },
      { label: "Terms of Service", href: "/legal" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="border-t border-glass-border text-text-primary overflow-hidden relative"
      style={{ background: "#000005" }}
    >
      <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.25) 50%, transparent)" }} />

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5 relative z-10">
        {/* Brand column */}
        <div className="lg:col-span-2 space-y-6">
          <Logo size="sm" showText={true} />
          <p className="text-[12px] leading-relaxed text-text-secondary tracking-tight max-w-[240px]">
            Run your entire business from one screen. E-Manager is the all-in-one platform for Tanzanian businesses.
          </p>
          <div className="terminal-text text-[9px] text-text-muted uppercase tracking-widest leading-loose">
            DAR ES SALAAM, TANZANIA<br />
            EST. 2024
          </div>
          {/* Social links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/fahim-kiama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/4faheem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://x.com/acacialabs_tz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {footerCols.map(col => (
          <div key={col.heading} className="space-y-5">
            <div className={`text-[10px] font-bold uppercase tracking-[0.3em] ${col.color}`}>
              {col.heading}
            </div>
            <nav className="flex flex-col gap-3">
              {col.links.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium tracking-wide text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-glass-border/40 py-6 bg-[#010308]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[9px] terminal-text text-text-muted tracking-widest uppercase">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Acacia Labs</span>
            <span className="h-[3px] w-[3px] rounded-full bg-white/20" />
            <span>Run your entire business from one screen.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/legal" className="hover:text-text-primary transition-colors">Privacy</Link>
            <span className="h-[3px] w-[3px] rounded-full bg-white/20" />
            <Link href="/legal" className="hover:text-text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
