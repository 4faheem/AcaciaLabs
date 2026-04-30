"use client";

import Link from "next/link";
import { company, navItems } from "@/lib/site";

export default function MobileLanding() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#080808] via-slate-950 to-black text-white overflow-hidden">
      {/* Atmospheric light leaks */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-80 h-80 bg-gradient-radial from-brand-cyan/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-radial from-brand-teal/15 via-transparent to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-radial from-slate-400/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      {/* Grainy texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 mix-blend-overlay">
        <div className="noise-bg" />
      </div>

      {/* Seamless navbar - no top padding */}
      <header className="relative z-50 px-6 pt-4 pb-6 backdrop-blur-xl bg-[#080808]/90 border-b border-white/5 shadow-2xl shadow-black/50">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/syncLabs-logo.png" alt="Sync Labs" className="h-10 w-10 rounded-xl shadow-lg" />
              <span className="text-xl font-bold tracking-tight">Sync Labs</span>
            </Link>
            
            <Link 
              href="/products" 
              className="px-6 py-3 bg-brand-cyan text-black font-semibold text-sm rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Explore Products
            </Link>
          </div>
          
          {/* Collapsed menu for mobile */}
          <nav className="mt-4 flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 px-3 py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero content */}
      <main className="relative z-10 pt-0 px-6 pb-20">
        <div className="max-w-sm mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent drop-shadow-2xl">
            Run your business without the guesswork
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-md mx-auto">
            Sync Labs builds intelligent systems that show what's happening, what's next, and what to do — automatically.
          </p>

          {/* CTA */}
          <Link 
            href="/contact" 
            className="inline-flex px-8 py-4 bg-brand-cyan text-black font-semibold text-lg rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-3xl hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300 mx-auto block w-full max-w-xs"
          >
            Start Building
          </Link>

          {/* Features grid */}
          <div className="grid gap-6 mt-20">
            {[
              {
                icon: "💰",
                title: "Real Profit Visibility",
                desc: "Track cash flow and performance without second-guessing numbers"
              },
              {
                icon: "⚡",
                title: "Automated Operations", 
                desc: "Replace manual chaos with coordinated intelligent systems"
              },
              {
                icon: "🎯",
                title: "Clear Next Actions",
                desc: "Get precise recommendations on what needs attention now"
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx global>{`
        .noise-bg {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #000 100%, transparent 0),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.1) 100%, transparent 0),
            radial-gradient(1px 1px at 90px 40px, #000 100%, transparent 0),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.05) 100%, transparent 0);
          background-size: 200px 100px;
          animation: noise 20s infinite linear;
          opacity: 0.3;
        }
        
        @keyframes noise {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5px, 5px); }
          20% { transform: translate(-10px, 15px); }
          30% { transform: translate(5px, -10px); }
          40% { transform: translate(-5px, 5px); }
          50% { transform: translate(-10px, 10px); }
          60% { transform: translate(15px, -5px); }
          70% { transform: translate(5px, 10px); }
          80% { transform: translate(-15px, -10px); }
          90% { transform: translate(10px, 5px); }
          100% { transform: translate(5px, -5px); }
        }
      `}</style>
    </div>
  );
}

