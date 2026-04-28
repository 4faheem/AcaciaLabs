import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Sync Labs home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* 8 dots arranged in a flower / hexagonal pattern */}
        {/* Center ring - 6 dots */}
        <circle cx="16" cy="6" r="2.5" fill="white" />
        <circle cx="24.66" cy="11" r="2.5" fill="white" />
        <circle cx="24.66" cy="21" r="2.5" fill="white" />
        <circle cx="16" cy="26" r="2.5" fill="white" />
        <circle cx="7.34" cy="21" r="2.5" fill="white" />
        <circle cx="7.34" cy="11" r="2.5" fill="white" />
        {/* Outer top and bottom */}
        <circle cx="16" cy="16" r="2.5" fill="white" opacity="0" />
        <circle cx="16" cy="1" r="2" fill="white" />
        <circle cx="16" cy="31" r="2" fill="white" />
      </svg>
      <span className="text-sm font-semibold tracking-wide text-white">
        Sync Labs
      </span>
    </Link>
  );
}

