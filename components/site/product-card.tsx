import Link from "next/link";

import { Product } from "@/lib/site";
import { isExternalLink } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const accentClass = product.accent === "electric" ? "from-brand-cyan/15 to-brand-cyan/0" : "from-brand-teal/15 to-brand-teal/0";
  const hasProof = product.proof !== undefined;
  const content = (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-black/10 bg-white/95 p-7 shadow-[0_20px_64px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.3)] sm:p-8">
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${accentClass}`} />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className={`eyebrow border-black/10 bg-white text-black ${product.status === "LIVE PRODUCT" ? "ring-2 ring-green-500/30" : ""}`}>{product.status}</span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">Product</span>
        </div>
        <h2 className="mt-7 text-3xl font-semibold tracking-[-0.05em] text-black">{product.name}</h2>
        <p className="mt-3 text-lg text-black/80">{product.description}</p>
        <p className="mt-4 text-sm leading-7 text-black/60">{product.summary}</p>
        {/* Micro-proof realism elements */}
        {hasProof && product.proof && (
          <div className="mt-6 rounded-xl bg-black/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-black/50">Monthly Revenue</p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-black">{product.proof.revenue}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium uppercase tracking-wider text-black/50">Growth</p>
                <p className="mt-1 text-xl font-bold text-green-600">{product.proof.growth}</p>
              </div>
            </div>
            <p className="mt-3 border-t border-black/10 pt-3 text-xs italic text-black/60">{product.proof.insight}</p>
          </div>
        )}
        <ul className="mt-6 space-y-3">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-black/70">
              <span className={`mt-2 h-2 w-2 rounded-full ${product.accent === "electric" ? "bg-brand-cyan" : "bg-brand-teal"}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black transition group-hover:translate-x-1">
          <span>{product.cta}</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </article>
  );
  return isExternalLink(product.href) ? (
    <a href={product.href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <Link href={product.href}>{content}</Link>
  );
}

