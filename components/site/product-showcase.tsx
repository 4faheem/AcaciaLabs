import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/site";
import { cn, isExternalLink } from "@/lib/utils";

type ProductShowcaseProps = {
  product: Product;
  reverse?: boolean;
};

export function ProductShowcase({ product, reverse = false }: ProductShowcaseProps) {
  const badgeTone = product.accent === "electric" ? "border-[#6C5CE7]/20 bg-[#6C5CE7]/10 text-[#6C5CE7]" : "border-[#00CEC9]/20 bg-[#00CEC9]/10 text-[#008E8A]";
  const actionClass = product.status === "Coming soon" ? "button-light" : "button-primary";
  const action = isExternalLink(product.href) ? (
    <a href={product.href} target="_blank" rel="noreferrer" className={cn(actionClass, "w-fit")}>{product.cta}</a>
  ) : (
    <Link href={product.href} className={cn(actionClass, "w-fit")}>{product.cta}</Link>
  );
  return (
    <div className={cn("grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center", reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1")}>
      <div className="surface-card p-8 sm:p-10">
        <span className={cn("eyebrow", badgeTone)}>{product.status}</span>
        <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-[#1A1040] sm:text-5xl">{product.name}</h2>
        <p className="mt-4 text-lg text-[#1A1040]/82">{product.description}</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#1A1040]/66">{product.summary}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {product.features.map((feature) => (
            <div key={feature} className="rounded-2xl border border-[#1A1040]/10 bg-[#F8F7FF] p-4 text-sm leading-6 text-[#1A1040]/74">{feature}</div>
          ))}
        </div>
        <div className="mt-8">{action}</div>
      </div>
      <div className="relative overflow-hidden rounded-[2rem] border border-[#1A1040]/10 bg-[#F3F1FF] p-3 shadow-[0_20px_64px_rgba(26,16,64,0.12)] sm:p-4">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(108,92,231,0.22),transparent_60%)]" />
        <Image src={product.mockup} alt={`${product.name} product interface preview`} width={1280} height={880} className="relative rounded-[1.4rem] border border-[#1A1040]/10" priority={product.slug === "syncrai"} />
      </div>
    </div>
  );
}

