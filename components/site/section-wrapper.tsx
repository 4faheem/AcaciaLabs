import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  tone?: "light" | "muted" | "dark";
  children: ReactNode;
};

const toneClasses = {
  light: "bg-white text-[#1A1040]",
  muted: "bg-[#F8F7FF] text-[#1A1040]",
  dark: "text-white",
};

export function SectionWrapper({
  id,
  className,
  innerClassName,
  tone = "light",
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-28", toneClasses[tone], className)}>
      <div className={cn("section-shell", innerClassName)}>{children}</div>
    </section>
  );
}
