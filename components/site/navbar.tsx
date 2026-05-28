"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        "w-[90%] max-w-5xl rounded-full border border-glass-border/40 bg-[#050505]/45 backdrop-blur-xl shadow-2xl shadow-black/50",
        scrolled 
          ? "py-2 bg-[#050505]/65 border-glass-border/60" 
          : "py-3.5 bg-[#050505]/30"
      )}
    >
      <div className="w-full px-6 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo - fully integrated */}
          <Logo size="sm" showText={true} className="text-text-primary" />
          
          {/* Navigation Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-5 py-2 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300",
                    active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active && (
                    <motion.div 
                      layoutId="nav-active-indicator"
                      className="absolute bottom-0 left-5 right-5 h-[1.5px] bg-accent-cyan"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link 
              href="/contact"
              className="inline-flex h-9 items-center justify-center border border-glass-border bg-white/[0.02] px-6 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-text-primary backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-glass-border-hover active:scale-[0.98]"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border bg-white/[0.02] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="relative h-3 w-4">
              <span className={cn(
                "absolute block h-[1px] w-4 bg-text-primary transition-all duration-300",
                open ? "top-1 rotate-45" : "top-0"
              )} />
              <span className={cn(
                "absolute block h-[1px] w-4 bg-text-primary transition-all duration-300",
                open ? "top-1 -rotate-45" : "top-2"
              )} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-[120%] overflow-hidden bg-primary-bg/95 backdrop-blur-2xl border border-glass-border rounded-2xl lg:hidden mt-2 p-6 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-xs font-bold tracking-[0.2em] uppercase py-2 transition-colors",
                    pathname === item.href ? "text-accent-cyan" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="h-[1px] bg-glass-border" />
            <Link 
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary text-center w-full py-4 rounded-full"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
