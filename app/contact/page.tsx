import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need the team to own."
        text="Share the role, workload, business function or delivery challenge. Our operations leadership reviews every inquiry within 4 hours."
      />

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <div className="group relative overflow-hidden rounded-[30px] bg-ink p-8 text-white shadow-soft transition-all duration-500 hover:shadow-2xl">
                <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-blue/20 blur-3xl animate-pulse-slow pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-xs font-black uppercase tracking-[.16em] text-sky transition-transform duration-200 group-hover:scale-105">
                      Head office
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Hub Active · GMT+6
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-extrabold">
                    Well IT & Consultancy Ltd
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Grassy Land, House-98, Dag No-964, Bastola, Graveyard Rd, Dhaka 1212, Bangladesh.
                  </p>
                  
                  <div className="mt-6 border-t border-white/10 pt-5 space-y-3">
                    <a
                      href="tel:+8801310367722"
                      className="group/link flex items-center gap-2 text-sm font-bold text-white transition-all duration-200 hover:text-sky hover:translate-x-1"
                    >
                      <span>+880 1310-367722</span>
                      <span className="text-xs opacity-0 transition-opacity duration-200 group-hover/link:opacity-100">↗</span>
                    </a>
                    <a
                      href="mailto:contact@wellit.info"
                      className="group/link flex items-center gap-2 text-sm font-bold text-white transition-all duration-200 hover:text-sky hover:translate-x-1"
                    >
                      <span>contact@wellit.info</span>
                      <span className="text-xs opacity-0 transition-opacity duration-200 group-hover/link:opacity-100">↗</span>
                    </a>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:bg-white/10 cursor-default">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-bold uppercase tracking-[.15em] text-sky">
                        Operational Coverage
                      </p>
                      <span className="text-[10px] text-mint font-semibold">Continuous Shifts</span>
                    </div>
                    <p className="mt-2 text-xs text-white/80 font-medium">
                      Monday – Friday · 06:00 – 23:00 (BST)
                    </p>
                    <p className="mt-1 text-[11px] text-white/45 font-medium">
                      24/7 dedicated enterprise coverage available upon SOW.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Timezone Alignment Visual Card */}
            <Reveal delay={0.06}>
              <div className="rounded-[24px] border border-slate-100 bg-cloud/50 p-6 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Global Synchronized Shifts</span>
                  <span className="rounded-full bg-blue/10 px-2 py-0.5 text-[10px] font-black text-blue">Zero Latency</span>
                </div>
                <div className="mt-4 grid gap-2.5">
                  {[
                    ["US East & West", "EST / PST shifts aligned to your core business hours"],
                    ["United Kingdom & EU", "GMT & CET morning-to-evening coverage"],
                    ["Australia & APAC", "AEST overlap for real-time daily collaboration"]
                  ].map(([region, desc]) => (
                    <div key={region} className="rounded-xl bg-white p-3 border border-slate-100/80">
                      <p className="text-xs font-bold text-ink">{region}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <ContactForm />
              
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-cloud/60 px-5 py-3.5 border border-slate-100 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="text-emerald-500 font-bold">✓</span> Mutual NDA available
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="text-emerald-500 font-bold">✓</span> &lt; 4 hour response time
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="text-emerald-500 font-bold">✓</span> No long-term lock-in
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
