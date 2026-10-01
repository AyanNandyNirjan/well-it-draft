import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { industries } from "@/lib/site-data";

export const metadata = { title: "Industries" };

const industryData: Record<string, { desc: string; tags: string[]; compliance: string }> = {
  "Administrative Services": {
    desc: "Executive support, coordination, documentation and routine business administration.",
    tags: ["Executive Support", "G-Suite & M365", "Calendar Handoff"],
    compliance: "Strict Confidentiality"
  },
  "Education": {
    desc: "eLearning support, course administration and education-focused operations.",
    tags: ["eLearning Ops", "Canvas & Blackboard", "Student Support"],
    compliance: "FERPA Aware"
  },
  "Finance & Accounting": {
    desc: "Bookkeeping, payroll support, reconciliations and reporting assistance.",
    tags: ["QuickBooks & Xero", "Bank Reconciliation", "Payroll Ops"],
    compliance: "GAAP / IFRS Aligned"
  },
  "Healthcare": {
    desc: "Medical administration, patient support and process coordination.",
    tags: ["EHR / EMR Admin", "Patient Scheduling", "Claims Intake"],
    compliance: "HIPAA Compliant Protocols"
  },
  "Information Technology": {
    desc: "Development, QA, technical support and IT operations.",
    tags: ["Fullstack Dev", "Git / CI-CD", "Incident Response"],
    compliance: "SOC2 Aligned Practices"
  },
  "Marketing & Advertising": {
    desc: "SEO, content, digital marketing and campaign support.",
    tags: ["HubSpot & GA4", "SEO Content Ops", "Growth Pipelines"],
    compliance: "Brand Safety Guaranteed"
  },
  "Real Estate": {
    desc: "CRM management, listing support, lead handling and property administration.",
    tags: ["AppFolio & Buildium", "MLS Management", "Lease Audits"],
    compliance: "MLS Protocol Adherence"
  },
  "Sales & Business Development": {
    desc: "Lead research, outreach, CRM support and meeting coordination.",
    tags: ["Salesforce & Apollo", "Lead Qualification", "Pipeline Hygiene"],
    compliance: "CAN-SPAM & GDPR Compliant"
  },
  "Telecommunications": {
    desc: "Customer engagement, service support and operational coordination.",
    tags: ["Zendesk & VoIP", "Tier 1-2 Resolution", "24/7 Coverage"],
    compliance: "99.9% SLA Commitment"
  },
  "Travel & Hospitality": {
    desc: "Reservation support, guest services, staffing coordination and administration.",
    tags: ["GDS Portals", "Guest Concierge", "Multi-Timezone"],
    compliance: "PCI-DSS Data Safe"
  },
  "Media & Entertainment": {
    desc: "Creative production, editing and content operations.",
    tags: ["Adobe Creative Suite", "Asset Ingestion & QC", "Digital Delivery"],
    compliance: "Strict IP Protection"
  },
  "Human Resources": {
    desc: "Recruitment support, onboarding and HR administration.",
    tags: ["Workday & BambooHR", "ATS Screening", "Onboarding Ops"],
    compliance: "EEOC Aligned Standards"
  }
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries we serve"
        title="Specialized support for the way different industries actually operate."
        text="Every sector has its own workflows, customer expectations and operational pressure. Well IT’s staffing model adapts around those realities."
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Industry expertise"
            title="Talent solutions across a broad business landscape."
            text="The frontend is structured so industry-specific landing pages and backend-driven content can be added later without redesigning the site."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((x, i) => {
              const data = industryData[x] || {
                desc: "Specialized remote staffing tailored to your vertical.",
                tags: ["Dedicated Team", "Direct Sync", "SLA Tracked"],
                compliance: "Enterprise Standards"
              };
              return (
                <Reveal key={x} delay={(i % 6) * 0.035}>
                  <div className="group flex h-full flex-col justify-between rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_1px_0_rgba(8,30,53,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/25 hover:shadow-soft cursor-default">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue/10 text-sm font-black text-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-blue group-hover:text-white group-hover:shadow-glow">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-500 border border-slate-100 group-hover:border-blue/20 group-hover:text-blue">
                          {data.compliance}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                        {x}
                      </h3>
                      <p className="mt-3 text-xs leading-6 text-slate-600">
                        {data.desc}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4 flex flex-wrap gap-1.5">
                      {data.tags.map(tag => (
                        <span
                          key={tag}
                          className="rounded-md bg-cloud px-2.5 py-1 text-[10px] font-bold text-slate-600 transition-colors group-hover:bg-blue/10 group-hover:text-blue"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="How we adapt"
              title="Start with the workflow, not the job title."
              text="Two companies can hire the same role and expect completely different outcomes. We start by understanding tools, tasks, service levels, handoffs and how success will be measured."
            />
            <div className="mt-8 space-y-4">
              {[
                ["01", "Define workload & tooling", "Identify software, access protocols, and day-to-day deliverables."],
                ["02", "Map required capabilities", "Pinpoint domain experience, language fluency, and skill seniority."],
                ["03", "Match communication & hours", "Align shifts to your active hours with zero latency in daily standups."],
                ["04", "Agree on ownership & reporting", "Set transparent KPI dashboards, weekly audits, and escalation paths."]
              ].map(([n, t, d]) => (
                <div
                  key={n}
                  className="group/step flex items-start gap-4 rounded-2xl bg-white p-4 border border-slate-100 shadow-2xs transition-all duration-200 hover:border-blue/20 hover:shadow-soft cursor-default"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-black text-white transition-all duration-200 group-hover/step:scale-105 group-hover/step:bg-blue group-hover/step:shadow-glow">
                    {n}
                  </span>
                  <div>
                    <p className="font-extrabold text-sm text-ink transition-colors duration-200 group-hover/step:text-blue">
                      {t}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="group rounded-[30px] bg-ink p-8 text-white shadow-soft transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-blue/20 blur-3xl animate-pulse-slow pointer-events-none" />
              <div className="relative">
                <span className="text-[10px] font-black uppercase tracking-[.18em] text-sky">
                  Enterprise Governance Shield
                </span>
                <h3 className="mt-3 text-2xl font-extrabold">
                  Security, compliance and process rigor by default.
                </h3>
                <p className="mt-3 text-xs leading-6 text-white/60">
                  Every remote engagement operates under institutional security benchmarks tailored to the compliance constraints of your industry.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Data Privacy", "Rigorous non-disclosure agreements & GDPR compliance"],
                    ["Encrypted Workstations", "Hardened endpoint protection & dedicated corporate VPN"],
                    ["Access Governance", "Least-privilege RBAC with passwordless SSO setup"],
                    ["SLA Reliability", "Continuous monitoring & proactive management oversight"]
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:bg-white/10"
                    >
                      <p className="text-xs font-bold text-mint">✓ {title}</p>
                      <p className="mt-1 text-[11px] text-white/70 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between rounded-xl bg-white/10 p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white">Direct Auditing & Monitoring</span>
                  </div>
                  <span className="text-[11px] font-extrabold text-sky uppercase tracking-wider">
                    Always On
                  </span>
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
