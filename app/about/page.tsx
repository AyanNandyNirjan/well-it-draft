import PageHero from "@/components/PageHero";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Who we are"
        title="A staffing partner built around clarity, capability and long-term collaboration."
        text="Well IT & Consultancy Ltd helps businesses access skilled remote professionals across operational, customer-facing and specialist functions."
      />

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Our mission"
              title="Make global talent easier to access and easier to integrate."
              text="The goal is simple: help organizations grow by connecting them with professionals who can contribute meaningfully inside real business workflows."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-[26px] bg-ink p-7 text-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default">
                <span className="inline-block text-xs font-bold uppercase tracking-[.16em] text-sky transition-transform duration-200 group-hover:scale-105">
                  Mission
                </span>
                <p className="mt-4 text-xl font-extrabold leading-8 transition-colors duration-200 group-hover:text-sky">
                  Deliver qualified remote talent, operational support and measurable business value.
                </p>
              </div>
              <div className="group rounded-[26px] bg-cloud p-7 border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-blue/25 hover:bg-white hover:shadow-soft cursor-default">
                <span className="inline-block text-xs font-bold uppercase tracking-[.16em] text-blue transition-transform duration-200 group-hover:scale-105">
                  Vision
                </span>
                <p className="mt-4 text-xl font-extrabold leading-8 text-ink transition-colors duration-200 group-hover:text-blue">
                  Become a trusted global staffing partner recognized for quality, service and sustainable solutions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="container-shell">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-ink shadow-soft">
              <div className="relative aspect-[21/9] min-h-[360px] w-full overflow-hidden">
                <Image
                  src="/images/dhaka-workplace.jpg"
                  alt="Well IT Technology Office and Collaboration Space in Dhaka"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-black/20" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-sky backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
                      Dhaka Delivery Hub
                    </span>
                    <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-tight">
                      A modern environment built for high-performing teams.
                    </h3>
                    <p className="mt-2 text-sm text-white/75 sm:text-base leading-relaxed">
                      Equipped with high-speed redundancy, enterprise security protocols, ergonomic workstations, and collaborative meeting suites.
                    </p>
                  </div>
                </div>

                <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 rounded-full border border-white/20 bg-ink/75 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  ISO 27001 Certified Facility
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100 bg-white sm:grid-cols-4">
                {[
                  ["500+", "Vetted talent pool"],
                  ["4 Continents", "Client operations served"],
                  ["99.2%", "Staff retention rate"],
                  ["< 7 Days", "Average role placement"]
                ].map(([stat, label]) => (
                  <div key={label} className="group/stat p-5 text-center transition-all duration-200 hover:bg-cloud/50">
                    <p className="text-2xl font-black text-ink transition-transform duration-200 group-hover/stat:scale-105 group-hover/stat:text-blue sm:text-3xl">{stat}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What defines us"
            title="A practical approach to remote team building."
            text="Good staffing is not only about finding a resume. It is about matching capability, expectations, working style and ownership."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Access", "Global talent across diverse business functions."],
              ["Flexibility", "Full-time, project-based and managed team models."],
              ["Accountability", "Clear onboarding, check-ins and communication rhythms."],
              ["Continuity", "Long-term relationships designed around reliable delivery."]
            ].map(([a, b], i) => (
              <Reveal key={a} delay={i * 0.05}>
                <div className="group h-full rounded-2xl bg-white p-6 border border-slate-100 shadow-[0_1px_0_rgba(8,30,53,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/25 hover:shadow-soft cursor-default">
                  <p className="text-lg font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                    {a}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="group rounded-[30px] bg-gradient-to-br from-blue to-[#0a5fd8] p-8 text-white shadow-soft transition-all duration-300 hover:shadow-glow lg:sticky lg:top-28">
              <span className="inline-block text-xs font-bold uppercase tracking-[.16em] text-white/70 transition-transform duration-200 group-hover:scale-105">
                For businesses
              </span>
              <h3 className="mt-4 text-3xl font-extrabold tracking-[-.04em]">
                Build capability without traditional hiring friction.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/80">
                Access skilled professionals, improve team capacity and scale operations while Well IT supports sourcing, onboarding and engagement structure.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="group rounded-[30px] border border-slate-100 bg-white p-8 transition-all duration-300 hover:border-blue/20 hover:shadow-soft">
              <span className="inline-block text-xs font-bold uppercase tracking-[.16em] text-blue transition-transform duration-200 group-hover:scale-105">
                For professionals
              </span>
              <h3 className="mt-4 text-3xl font-extrabold tracking-[-.04em] text-ink transition-colors duration-200 group-hover:text-blue">
                Build a career through international exposure.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Well IT’s public career messaging emphasizes communication, accountability, learning and the opportunity to work with international business environments.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Meaningful client work",
                  "Global collaboration",
                  "Continuous learning",
                  "Long-term development"
                ].map(x => (
                  <div
                    key={x}
                    className="rounded-xl bg-cloud px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-200 hover:bg-blue/10 hover:text-blue hover:scale-105 cursor-default"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  );
}
