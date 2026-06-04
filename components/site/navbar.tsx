"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        "w-[92%] max-w-[62rem] rounded-full",
        scrolled
          ? "bg-[#080808]/88 border border-white/[0.09] shadow-[0_2px_32px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-2xl py-2"
          : "bg-[#0c0c0c]/40 border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl py-3"
      )}
    >
      <div className="w-full px-5 md:px-7">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <Logo size="sm" showText={true} className="text-white" />

          {/* Center nav links */}
          <div className="hidden items-center lg:flex">
            {navLinks.map((item, i) => {
              const active = pathname === item.href;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-1.5 rounded-full transition-colors duration-200",
                      "text-[12.5px] font-medium",
                      active
                        ? "text-white"
                        : "text-white/55 hover:text-white/90"
                    )}
                    style={{ letterSpacing: "-0.005em" }}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.08]"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-6 py-2 text-white transition-all hover:bg-white/[0.06] active:scale-[0.97]"
              style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: "0.08em", transition: "all 220ms cubic-bezier(0.22,1,0.36,1)", textTransform: "uppercase" }}
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden cursor-pointer hover:bg-white/[0.08] transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative h-3 w-4">
              <span className={cn("absolute block h-[1.5px] w-4 bg-white/80 rounded-full transition-all duration-300", open ? "top-1 rotate-45" : "top-0")} />
              <span className={cn("absolute block h-[1.5px] w-4 bg-white/80 rounded-full transition-all duration-300", open ? "top-1 -rotate-45" : "top-2.5")} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-[115%] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/96 backdrop-blur-2xl lg:hidden mt-2 p-6 flex flex-col gap-5 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors",
                    pathname === item.href
                      ? "text-white bg-white/[0.06]"
                      : "text-white/55 hover:text-white hover:bg-white/[0.04]"
                  )}
                  style={{ letterSpacing: "-0.005em" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="h-px bg-white/[0.07]" />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="w-full text-center rounded-full border border-white/15 text-white py-3.5 text-[13px] font-semibold uppercase tracking-widest transition-all hover:bg-white/[0.06]"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
