import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};

export function Logo({ className, showText = true, size = "sm" }: LogoProps) {
  const iconSizes = {
    sm: { px: 28, class: "h-7 w-7" },
    md: { px: 40, class: "h-10 w-10" },
    lg: { px: 56, class: "h-14 w-14" },
    xl: { px: 72, class: "h-18 w-18" },
  };

  const currentSize = iconSizes[size];

  return (
    <Link href="/" className={cn("flex items-center gap-4 group", className)} aria-label="Acacia Labs Home">
      <div className="relative flex items-center justify-center">
        <Image
          src="/acacia-logo.png"
          alt="Acacia Labs Official Logo"
          width={currentSize.px}
          height={currentSize.px}
          className={cn(currentSize.class, "object-contain transition-opacity duration-300 group-hover:opacity-90")}
          priority
        />
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none tracking-tight">
          <span className="text-[13px] font-bold tracking-[0.35em] uppercase text-text-primary">
            ACACIA
          </span>
          <span className="text-[9px] font-bold tracking-[0.55em] uppercase text-text-secondary mt-[3px]">
            LABS
          </span>
        </div>
      )}
    </Link>
  );
}
