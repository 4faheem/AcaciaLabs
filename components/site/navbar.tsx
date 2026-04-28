"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.04] bg-transparent transition-colors duration-300">
      <div className="section-shell flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
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

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
          >
            Contact sales
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#3b82f6] px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#2563eb] hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/5 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative flex h-4 w-4 flex-col justify-between">
            <span
              className={cn(
                "block h-0.5 w-4 rounded-full bg-current transition",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-4 rounded-full bg-current transition",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-4 rounded-full bg-current transition",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <div className="border-t border-white/[0.04] bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white",
                    active && "bg-white/5 text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                Login
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                Contact sales
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-lg bg-[#3b82f6] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#2563eb]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

