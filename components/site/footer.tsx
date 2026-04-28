import Link from "next/link";

import { company, navItems, products } from "@/lib/site";

import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0818] text-white">
      <div className="section-shell grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xl text-sm leading-7 text-white/68">
            {company.positioning} Premium product thinking, AI-native systems, and software that helps ambitious teams move with clarity.
          </p>
          <a href={`mailto:${company.email}`} className="inline-flex text-sm font-medium text-[#00CEC9] transition hover:text-white">
            {company.email}
          </a>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Navigation</h2>
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/72 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Products</h2>
            <div className="mt-4 flex flex-col gap-3">
              {products.map((product) =>
                product.href.startsWith("http") ? (
                  <a key={product.slug} href={product.href} target="_blank" rel="noreferrer" className="text-sm text-white/72 transition hover:text-white">
                    {product.name}
                  </a>
                ) : (
                  <Link key={product.slug} href={product.href} className="text-sm text-white/72 transition hover:text-white">
                    {product.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="section-shell flex flex-col gap-3 border-t border-white/10 py-6 text-xs uppercase tracking-[0.18em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <span>{new Date().getFullYear()} {company.name}</span>
        <span>{company.domain}</span>
      </div>
    </footer>
  );
}
