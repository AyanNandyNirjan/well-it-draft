import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="container-shell">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[34px] bg-ink px-6 py-12 text-white shadow-soft transition-all duration-500 hover:shadow-2xl sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute -right-10 -top-20 h-80 w-80 rounded-full bg-blue/30 blur-3xl animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-mint/15 blur-3xl pointer-events-none" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky/20 bg-sky/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[.18em] text-sky transition-colors duration-300 group-hover:border-sky/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  Ready when you are
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">
                  Build the team your business needs next.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Tell us the role, workflow and outcome. We’ll shape the staffing model around the way your business actually operates.
                </p>
              </div>
              <Link
                href="/contact"
                className="group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-sky hover:shadow-glow active:scale-95"
              >
                <span>Start a conversation</span>
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
