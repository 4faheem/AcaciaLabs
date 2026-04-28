import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero-backdrop flex min-h-[70vh] items-center justify-center text-white">
      <div className="section-shell text-center">
        <span className="eyebrow border-white/15 bg-white/[0.06] text-[#00CEC9]">404</span>
        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl">This page does not exist.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68">The route may have moved, or the link may be outdated. Head back to the main Sync Labs site.</p>
        <div className="mt-8 flex justify-center">
          <Link href="/" className="button-primary">Return home</Link>
        </div>
      </div>
    </section>
  );
}

