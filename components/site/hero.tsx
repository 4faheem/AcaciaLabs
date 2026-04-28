import Link from "next/link";

import { company, products } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-backdrop relative overflow-hidden border-b border-white/10 text-white">
      <div className="soft-grid absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#6C5CE7]/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-[#00CEC9]/18 blur-3xl" />
      <div className="section-shell relative grid gap-16 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow border-white/15 bg-white/[0.06] text-[#00CEC9]">
            AI Business Infrastructure
          </span>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.075em] text-white sm:text-6xl lg:text-7xl">
            {company.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            {company.subtext}
          </p>
          <p className="mt-5 max-w-xl text-sm font-medium uppercase tracking-[0.22em] text-white/46">
            {company.promise}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className="button-primary">
              Explore Products
            </Link>
            <Link href="/contact#project-brief" className="button-secondary">
              Start a Project
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/72">
              Know real profit
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/72">
              Control daily operations
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/72">
              Built for East African SMEs
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="glass-surface relative overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-28 rounded-full bg-[#6C5CE7]/20 blur-3xl" />
            <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/70">
              Business Control Layer
            </div>

            <div className="mt-10 space-y-4">
              {[
                {
                  title: "See the money",
                  description:
                    "Track cash, profit, and business performance without second-guessing the numbers.",
                },
                {
                  title: "Run the work",
                  description:
                    "Turn scattered tasks, chats, and manual follow-up into one coordinated system.",
                },
                {
                  title: "Know the next move",
                  description:
                    "Get a clearer picture of what needs attention before small issues become expensive.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-white/64">
                        {item.description}
                      </p>
                    </div>
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00CEC9] shadow-[0_0_20px_rgba(0,206,201,0.8)]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                  Market
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  SMEs first
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                  Systems
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {products.length} product tracks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
