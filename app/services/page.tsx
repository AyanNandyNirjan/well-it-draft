import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { ServiceMiniVisual } from "@/components/ServiceVisuals";
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
                <div className="group flex h-full flex-col justify-between rounded-[26px] border border-slate-100 bg-white p-7 shadow-[0_1px_0_rgba(8,30,53,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/20 hover:shadow-soft cursor-default">
                  <div>
                    <span className="inline-block text-[10px] font-black uppercase tracking-[.16em] text-blue transition-all duration-200 group-hover:scale-105 group-hover:text-sky">
                      {s.tag}
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold tracking-[-.04em] text-ink transition-colors duration-200 group-hover:text-blue">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {s.text}
                    </p>
                    
                    {/* Visual UI Mockup for Service */}
                    <ServiceMiniVisual type={i} />
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
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
                "Long-term professionals working as a consistent extension of your team.",
                ["40 hrs / week", "Direct daily sync", "Dedicated Slack/Teams"]
              ],
              [
                "Project-Based Teams",
                "Specialists focused on a specific project, deliverable or period of demand.",
                ["Milestone SOW", "Sprint cadence", "Scalable capacity"]
              ],
              [
                "Managed Team Solutions",
                "A coordinated delivery model with ongoing oversight and support.",
                ["Team lead oversight", "SLA monitoring", "Weekly QA audits"]
              ]
            ].map(([a, b, tags], i) => (
              <Reveal key={a as string} delay={i * 0.07}>
                <div className="group flex h-full flex-col justify-between rounded-[26px] bg-white p-7 border border-transparent shadow-[0_1px_0_rgba(8,30,53,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/20 hover:shadow-soft cursor-default">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-blue/15 transition-colors duration-300 group-hover:text-blue/35">
                        0{i + 1}
                      </span>
                      <span className="rounded-full bg-blue/5 px-2.5 py-1 text-[10px] font-bold text-blue">
                        {(tags as string[])[0]}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                      {a as string}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {b as string}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                    {(tags as string[]).slice(1).map(tag => (
                      <span key={tag} className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Built for integration"
                title="Your tools. Your standards. Your communication rhythm."
                text="Remote staffing works when professionals become comfortable with the way your business already runs. The engagement is designed around your systems, processes and expectations — not the other way around."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Role definition", "Standardized job scorecards"],
                  ["Tool & access setup", "SSO, VPN & permission audits"],
                  ["Escalation rules", "Clear issue escalation channels"],
                  ["Check-in cadence", "Daily standups & weekly reviews"],
                  ["Quality expectations", "SLA metrics & benchmark logs"],
                  ["Performance visibility", "Transparent sprint tracking"]
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-200 hover:border-blue/20 hover:bg-white hover:shadow-xs cursor-default"
                  >
                    <p className="text-xs font-bold text-ink">{title}</p>
                    <p className="mt-1 text-[11px] text-slate-500">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-ink p-3 shadow-xl transition-all duration-500 hover:shadow-2xl">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[22px]">
                <Image
                  src="/images/operations-dashboard.jpg"
                  alt="Well IT Operations and SLA Tracking Dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                
                {/* Live Tracking Overlay Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full bg-ink/80 px-3 py-1.5 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Operations Tracking</span>
                  </div>
                  <span className="rounded-full bg-blue/90 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur-md">
                    99.8% SLA
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-ink/80 p-4 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Tool Agnostic Delivery</span>
                    <span className="text-mint font-bold">100% Integrated</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Works natively inside Slack, Microsoft Teams, Jira, Asana, Zendesk & HubSpot.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  );
}
