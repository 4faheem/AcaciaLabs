"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/site";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const isComingSoon = product.status.includes("IN DEVELOPMENT") || product.status.includes("BETA");
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className={cn(
        "absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500",
        product.accent === "electric" ? "bg-secondary-glow" : "bg-accent-glow"
      )} />
      
      <div className="glass-card h-full p-8 flex flex-col relative overflow-hidden border-white/10 group-hover:border-white/20">
        {/* Status Indicator */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className={cn(
              "h-2 w-2 rounded-full",
              isComingSoon ? "bg-amber-500" : "bg-accent-glow animate-pulse shadow-[0_0_8px_#00CEC9]"
            )} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary">
              {product.status}
            </span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
            SYSTEM MOD-0{product.slug.length % 9}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-glow transition-colors">
          {product.name}
        </h3>
        
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Operational Metrics Preview */}
        {product.metrics && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {product.metrics.map((metric) => (
              <div key={metric.label} className="bg-white/5 border border-white/5 rounded-xl p-3">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{metric.label}</div>
                <div className="text-lg font-bold text-white">{metric.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <Link 
            href={product.href}
            className="text-sm font-bold text-white hover:text-accent-glow transition-colors flex items-center gap-2"
          >
            {product.cta}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40 group-hover:text-accent-glow transition-colors">
                <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
