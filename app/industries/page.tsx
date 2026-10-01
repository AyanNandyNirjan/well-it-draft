import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { industries } from "@/lib/site-data";

export const metadata = { title: "Industries" };

const descriptions: Record<string, string> = {
  "Administrative Services": "Executive support, coordination, documentation and routine business administration.",
  "Education": "eLearning support, course administration and education-focused operations.",
  "Finance & Accounting": "Bookkeeping, payroll support, reconciliations and reporting assistance.",
  "Healthcare": "Medical administration, patient support and process coordination.",
  "Information Technology": "Development, QA, technical support and IT operations.",
  "Marketing & Advertising": "SEO, content, digital marketing and campaign support.",
  "Real Estate": "CRM management, listing support, lead handling and property administration.",
  "Sales & Business Development": "Lead research, outreach, CRM support and meeting coordination.",
  "Telecommunications": "Customer engagement, service support and operational coordination.",
  "Travel & Hospitality": "Reservation support, guest services, staffing coordination and administration.",
  "Media & Entertainment": "Creative production, editing and content operations.",
  "Human Resources": "Recruitment support, onboarding and HR administration."
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
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((x, i) => (
              <Reveal key={x} delay={(i % 6) * 0.035}>
                <div className="group h-full rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_1px_0_rgba(8,30,53,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/25 hover:shadow-soft cursor-default">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue/10 text-sm font-black text-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-blue group-hover:text-white group-hover:shadow-glow">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                    {x}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {descriptions[x]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="How we adapt"
              title="Start with the workflow, not the job title."
              text="Two companies can hire the same role and expect completely different outcomes. We start by understanding tools, tasks, service levels, handoffs and how success will be measured."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="group rounded-[30px] bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-2xl">
              <div className="space-y-5">
                {[
                  ["01", "Define workload"],
                  ["02", "Map required capability"],
                  ["03", "Match communication & hours"],
                  ["04", "Agree ownership & reporting"]
                ].map(([n, t]) => (
                  <div
                    key={n}
                    className="group/step flex items-center gap-4 border-b border-slate-100 pb-5 last:border-0 last:pb-0 transition-colors cursor-default"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-xs font-black text-white transition-all duration-200 group-hover/step:scale-110 group-hover/step:bg-blue group-hover/step:shadow-glow">
                      {n}
                    </span>
                    <p className="font-extrabold text-ink transition-colors duration-200 group-hover/step:text-blue">
                      {t}
                    </p>
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
