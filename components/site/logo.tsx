 import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
};

export function Logo({ tone = "light" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Sync Labs home">
      <Image
        src="/syncLabs-logo.png"
        alt="Sync Labs logo"
        width={48}
        height={48}
        className="h-12 w-12 rounded-2xl object-contain"
        priority
      />
      <span
        className={cn(
          "text-sm font-semibold uppercase tracking-[0.24em]",
          tone === "light" ? "text-white" : "text-[#1A1040]"
        )}
      >
        SYNC LABS
      </span>
    </Link>
  );
}

