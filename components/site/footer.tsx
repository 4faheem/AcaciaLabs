import Link from "next/link";
import { company, navItems, products } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-glass-border bg-primary-bg text-text-primary overflow-hidden relative">
      {/* Control Center Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        
        {/* Core Institutional Identification */}
        <div className="space-y-6">
          <Logo size="sm" showText={true} />
          <p className="text-[11px] leading-relaxed text-text-secondary tracking-tight">
            Acacia Labs develops high-authority operational intelligence infrastructure and AI-native coordination systems engineered specifically for modern Sub-Saharan enterprise.
          </p>
          <div className="text-[9px] font-mono text-text-muted uppercase tracking-widest leading-loose">
            SECURE REF: AL-FOOT-009<br />
            STABLE_STATE_ALPHA_2.4
          </div>
        </div>

        {/* Systems Index */}
        <div className="space-y-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-cyan">Systems Grid</div>
          <nav className="flex flex-col gap-3">
            {products.map((product) => (
              <Link 
                key={product.slug} 
                href={product.href} 
                className="text-[11px] font-bold tracking-[0.1em] text-text-secondary transition-colors duration-300 hover:text-text-primary uppercase"
              >
                {product.name} — {product.status}
              </Link>
            ))}
          </nav>
        </div>

        {/* Navigation & Company Directories */}
        <div className="space-y-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-blue">Directory</div>
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-[11px] font-bold tracking-[0.1em] text-text-secondary transition-colors duration-300 hover:text-text-primary uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Systems Telemetry Panel (Control Center Feel) */}
        <div className="space-y-6 border border-glass-border bg-white/[0.01] p-6 rounded-sm">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-primary">Telemetry</div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-[9px] font-mono text-accent-cyan tracking-widest">ONLINE</span>
            </div>
          </div>
          
          <div className="space-y-3 font-mono text-[10px] text-text-secondary leading-relaxed">
            <div>
              <span className="text-text-muted">REGION: </span> EAST AFRICA
            </div>
            <div>
              <span className="text-text-muted">HQ NODE: </span> TANZANIA
            </div>

            <div>
              <span className="text-text-muted">Uptime SLA: </span> 99.998%
            </div>
          </div>
        </div>
      </div>

      {/* Under footer / System Status Bar */}
      <div className="border-t border-glass-border/40 py-6 bg-secondary-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[9px] font-mono text-text-muted tracking-widest uppercase">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Acacia Labs</span>
            <span className="h-[3px] w-[3px] rounded-full bg-white/20" />
            <span>Operational Infrastructure — East Africa</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Direct Access: <a href={`mailto:${company.email}`} className="text-text-secondary hover:text-text-primary transition-colors">{company.email}</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
