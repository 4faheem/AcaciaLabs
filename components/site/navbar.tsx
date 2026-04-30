"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { company, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
<header className="sticky top-0 z-50 mx-auto w-screen max-w-[95vw] rounded-b-2xl border-b border-white/5 bg-[#0a0a0a]/60 backdrop-blur-xl px-8 py-3 shadow-xl shadow-black/20 transition-all duration-300 hover:bg-[#0a0a0a]/80 hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white",
                  active && "text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
<div className="hidden items-center gap-4 lg:flex">
          <Link 
            href="https://e-manager.synclabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#8b5cf6] px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#7c3aed] hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]"
          >
            Use E-Manager
          </Link>
<Link 
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30"
          >
            Start a Project
          </Link>
        </div>
        {/* Mobile: Always visible Use E-Manager button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link 
            href="https://e-manager.synclabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#8b5cf6] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#7c3aed]"
          >
            Use E-Manager
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative flex h-4 w-4 flex-col justify-between">
              <span className={cn("block h-0.5 w-4 rounded-full bg-current transition", open && "translate-y-[7px] rotate-45")} />
              <span className={cn("block h-0.5 w-4 rounded-full bg-current transition", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-4 rounded-full bg-current transition", open && "-translate-y-[7px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>
      {open ? (
<div className="border-t border-white/10 bg-white/5 backdrop-blur-xl lg:hidden">
          <div className="px-8 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition duration-300 hover:bg-white/10",
                      active && "bg-white/10 text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link 
                  href="https://e-manager.synclabs.io" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)} 
                  className="inline-flex items-center justify-center rounded-lg bg-[#8b5cf6] px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#7c3aed] hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                >
                  Use E-Manager
                </Link>
<Link 
                  href="/contact" 
                  onClick={() => setOpen(false)} 
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

