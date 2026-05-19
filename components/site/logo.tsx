import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

export function Logo({ className, showText = true, size = "sm" }: LogoProps) {
  const iconSizes = {
    sm: { class: "h-7 w-7" },
    md: { class: "h-10 w-10" },
    lg: { class: "h-14 w-14" },
    xl: { class: "h-18 w-18" },
  };

  const currentSize = iconSizes[size];

  return (
    <Link href="/" className={cn("flex items-center gap-4 group", className)} aria-label="Acacia Labs Home">
      <div className={cn("relative flex items-center justify-center text-text-primary group-hover:text-accent-cyan transition-colors duration-300", currentSize.class)}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15,35 L85,35" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
          <path d="M25,50 L75,50" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
          <path d="M38,65 L62,65" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
          <path d="M50,35 L50,80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <path d="M50,50 L38,35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M50,50 L62,35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M50,65 L25,50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M50,65 L75,50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <circle cx="15" cy="35" r="5.5" className="fill-accent-cyan" />
          <circle cx="50" cy="35" r="5.5" className="fill-accent-cyan" />
          <circle cx="85" cy="35" r="5.5" className="fill-accent-cyan" />
          <circle cx="25" cy="50" r="5.5" className="fill-accent-cyan" />
          <circle cx="75" cy="50" r="5.5" className="fill-accent-cyan" />
          <circle cx="38" cy="65" r="5.5" className="fill-accent-cyan" />
          <circle cx="62" cy="65" r="5.5" className="fill-accent-cyan" />
          <circle cx="50" cy="80" r="7" className="fill-text-primary" />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none tracking-tight">
          <span className="text-[13px] font-bold tracking-[0.35em] uppercase text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
            ACACIA
          </span>
          <span className="text-[9px] font-bold tracking-[0.55em] uppercase text-text-secondary mt-[3px] group-hover:text-text-primary transition-colors duration-300">
            LABS
          </span>
        </div>
      )}
    </Link>
  );
}
