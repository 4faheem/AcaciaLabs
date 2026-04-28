import Link from "next/link";

import { Product } from "@/lib/site";
import { isExternalLink } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const accentClass = product.accent === "electric" ? "from-[#6C5CE7]/15 to-[#6C5CE7]/0" : "from-[#00CEC9]/15 to-[#00CEC9]/0";
  const content = (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-[#1A1040]/10 bg-white p-7 shadow-[0_20px_64px_rgba(26,16,64,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(26,16,64,0.16)] sm:p-8">
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${accentClass}`} />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="eyebrow border-[#1A1040]/10 bg-[#F8F7FF] text-[#1A1040]">{product.status}</span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A84AD]">Product</span>
        </div>
        <h2 className="mt-7 text-3xl font-semibold tracking-[-0.05em] text-[#1A1040]">{product.name}</h2>
        <p className="mt-3 text-lg text-[#1A1040]/80">{product.description}</p>
        <p className="mt-4 text-sm leading-7 text-[#1A1040]/66">{product.summary}</p>
        <ul className="mt-6 space-y-3">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-[#1A1040]/74">
              <span className={`mt-2 h-2 w-2 rounded-full ${product.accent === "electric" ? "bg-[#6C5CE7]" : "bg-[#00CEC9]"}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1A1040] transition group-hover:translate-x-1">
          <span>{product.cta}</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </article>
  );
  return isExternalLink(product.href) ? <a href={product.href} target="_blank" rel="noreferrer">{content}</a> : <Link href={product.href}>{content}</Link>;
}
