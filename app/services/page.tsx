import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { services } from "@/lib/site-data";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we offer"
        title="Remote staffing solutions for the work your business depends on."
        text="From administrative support and customer service to finance, IT and growth functions, Well IT can help you assemble the right capability around your operation."
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Core capabilities"
            title="One partner, multiple business functions."
            text="Each engagement can start small and expand as your processes, workload and growth plans change."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-[26px] border border-slate-100 bg-white p-7 shadow-[0_1px_0_rgba(8,30,53,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/20 hover:shadow-soft cursor-default">
                  <span className="inline-block text-[10px] font-black uppercase tracking-[.16em] text-blue transition-all duration-200 group-hover:scale-105 group-hover:text-sky">
                    {s.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-[-.04em] text-ink transition-colors duration-200 group-hover:text-blue">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {s.text}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {(i === 0
                      ? ["Scheduling", "Documentation", "Coordination"]
                      : i === 1
                      ? ["Data entry", "CRM", "Reporting"]
                      : i === 2
                      ? ["Email", "Chat", "Helpdesk"]
                      : i === 3
                      ? ["Bookkeeping", "Payroll", "Reconciliation"]
                      : i === 4
                      ? ["Development", "QA", "IT support"]
                      : ["SEO", "Content", "Lead research"]
                    ).map(x => (
                      <span
                        key={x}
                        className="rounded-full bg-cloud px-3 py-1.5 text-[11px] font-bold text-slate-500 transition-all duration-200 hover:bg-blue/10 hover:text-blue hover:scale-105 cursor-default"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="models" className="section-pad bg-cloud">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Engagement models"
            title="Structure the team around how the work gets done."
            text="There is no single outsourcing model that fits every role. Choose continuity, defined scope or managed delivery."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              [
                "Full-Time Dedicated Talent",
                "Long-term professionals working as a consistent extension of your team."
              ],
              [
                "Project-Based Teams",
                "Specialists focused on a specific project, deliverable or period of demand."
              ],
              [
                "Managed Team Solutions",
                "A coordinated delivery model with ongoing oversight and support."
              ]
            ].map(([a, b], i) => (
              <Reveal key={a} delay={i * 0.07}>
                <div className="group h-full rounded-[26px] bg-white p-7 border border-transparent shadow-[0_1px_0_rgba(8,30,53,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/20 hover:shadow-soft cursor-default">
                  <span className="text-4xl font-black text-blue/15 transition-colors duration-300 group-hover:text-blue/35">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                    {a}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Built for integration"
              title="Your tools. Your standards. Your communication rhythm."
              text="Remote staffing works when professionals become comfortable with the way your business already runs. The engagement is designed around your systems, processes and expectations — not the other way around."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="group rounded-[30px] bg-ink p-8 text-white shadow-soft transition-all duration-500 hover:shadow-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Role definition",
                  "Tool & access setup",
                  "Escalation rules",
                  "Check-in cadence",
                  "Quality expectations",
                  "Performance visibility"
                ].map(x => (
                  <div
                    key={x}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold transition-all duration-200 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 cursor-default"
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
