import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

export function Logo({ className, showText = true, size = "sm" }: LogoProps) {
  const iconSizes = {
    sm: "h-7 w-7",
    md: "h-10 w-10",
    lg: "h-14 w-14",
    xl: "h-18 w-18",
  };

  const sizeClass = iconSizes[size];

  return (
    <Link href="/" className={cn("flex items-center gap-4 group", className)} aria-label="Acacia Labs Home">
      <div className={cn("relative flex items-center justify-center transition-all duration-500 group-hover:scale-105", sizeClass)}>
        <svg 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full object-contain overflow-visible"
          aria-hidden="true"
        >
          {/* Symmetrical Geometric Acacia Tree Symbol */}
          {/* Wide flat canopy (network nodes/lines) */}
          <path d="M15,35 L85,35" stroke="currentColor" strokeWidth="7" strokeLinecap="round" className="text-text-primary transition-all duration-300 group-hover:text-accent-cyan" />
          <path d="M25,50 L75,50" stroke="currentColor" strokeWidth="7" strokeLinecap="round" className="text-text-primary transition-all duration-300 group-hover:text-accent-cyan" />
          <path d="M38,65 L62,65" stroke="currentColor" strokeWidth="7" strokeLinecap="round" className="text-text-primary transition-all duration-300 group-hover:text-accent-cyan" />
          {/* Trunk and branch connections */}
          <path d="M50,35 L50,80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-text-primary transition-all duration-300 group-hover:text-accent-cyan" />
          <path d="M50,50 L38,35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-text-primary transition-all duration-300 group-hover:text-accent-cyan" />
          <path d="M50,50 L62,35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-text-primary transition-all duration-300 group-hover:text-accent-cyan" />
          <path d="M50,65 L25,50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-text-primary transition-all duration-300 group-hover:text-accent-cyan" />
          <path d="M50,65 L75,50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-text-primary transition-all duration-300 group-hover:text-accent-cyan" />
          {/* Tech nodes (cyber dots) in glowing cyan */}
          <circle cx="15" cy="35" r="5.5" fill="#00D1FF" className="transition-all duration-300 group-hover:fill-text-primary group-hover:scale-[1.25] origin-[15px_35px]" />
          <circle cx="50" cy="35" r="5.5" fill="#00D1FF" className="transition-all duration-300 group-hover:fill-text-primary group-hover:scale-[1.25] origin-[50px_35px]" />
          <circle cx="85" cy="35" r="5.5" fill="#00D1FF" className="transition-all duration-300 group-hover:fill-text-primary group-hover:scale-[1.25] origin-[85px_35px]" />
          <circle cx="25" cy="50" r="5.5" fill="#00D1FF" className="transition-all duration-300 group-hover:fill-text-primary group-hover:scale-[1.25] origin-[25px_50px]" />
          <circle cx="75" cy="50" r="5.5" fill="#00D1FF" className="transition-all duration-300 group-hover:fill-text-primary group-hover:scale-[1.25] origin-[75px_50px]" />
          <circle cx="38" cy="65" r="5.5" fill="#00D1FF" className="transition-all duration-300 group-hover:fill-text-primary group-hover:scale-[1.25] origin-[38px_65px]" />
          <circle cx="62" cy="65" r="5.5" fill="#00D1FF" className="transition-all duration-300 group-hover:fill-text-primary group-hover:scale-[1.25] origin-[62px_65px]" />
          <circle cx="50" cy="80" r="7" fill="currentColor" className="text-text-primary transition-all duration-300 group-hover:text-accent-cyan" />
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
