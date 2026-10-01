import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers at Well IT"
        title="Build your career through real international business exposure."
        text="Well IT publicly recruits for operational, business development, design, technical and support roles. This frontend is ready to connect to a jobs backend later."
      />

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Work with us"
              title="Curiosity, communication and ownership matter."
              text="Recent public hiring content emphasizes strong English, practical problem-solving, coachability, reliability and the confidence to work with international businesses."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Clear communication",
                "Accountability",
                "Continuous learning",
                "International exposure",
                "Team collaboration",
                "Practical problem-solving"
              ].map(x => (
                <span
                  key={x}
                  className="rounded-full bg-cloud px-4 py-2 text-xs font-bold text-slate-600 transition-all duration-200 hover:bg-blue/10 hover:text-blue hover:scale-105 cursor-default"
                >
                  {x}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="group rounded-[30px] border border-slate-100 bg-white p-7 shadow-[0_20px_60px_rgba(8,30,53,.06)] transition-all duration-300 hover:border-blue/20 hover:shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-[.15em] text-blue transition-transform duration-200 group-hover:scale-105">
                    Hiring updates
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                    Open roles are published on company channels.
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.12em] text-emerald-700 animate-pulse">
                  Actively Hiring
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Instead of hardcoding expired vacancies, the redesigned frontend keeps this section ready for an API-driven jobs list. Until the backend is connected, applicants can follow the official company pages for current openings.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://www.linkedin.com/company/wellitltd"
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn rounded-xl bg-ink px-5 py-3 text-center text-sm font-bold text-white transition-all duration-200 hover:bg-blue hover:shadow-glow hover:-translate-y-0.5 active:scale-95"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span>View LinkedIn</span>
                    <span className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                  </span>
                </a>
                <a
                  href="mailto:apply@wellit.info"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold text-slate-700 transition-all duration-200 hover:border-blue hover:text-blue hover:bg-blue/5 hover:-translate-y-0.5 active:scale-95"
                >
                  Email your CV
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visual 4-Step Hiring Journey */}
      <section className="section-pad bg-cloud/50 border-y border-slate-100">
        <div className="container-shell">
          <SectionHeading
            eyebrow="The hiring journey"
            title="A fast, transparent 4-stage talent process."
            text="We respect your time. From your initial application to day-one onboarding, here is how we evaluate and match talent."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                sla: "< 24 Hours",
                title: "Application Review",
                desc: "Our talent acquisition team thoroughly inspects your CV, skill background, and communicative clarity.",
                tag: "Fast Turnaround"
              },
              {
                step: "02",
                sla: "Day 2 – 3",
                title: "Skills & English Screen",
                desc: "A conversational technical session and practical case study assessing core problem-solving capability.",
                tag: "Technical Screen"
              },
              {
                step: "03",
                sla: "Day 4 – 5",
                title: "Client Panel Sync",
                desc: "Direct video interview with international hiring managers to assess workflow compatibility and cultural fit.",
                tag: "Direct Interview"
              },
              {
                step: "04",
                sla: "Week 2",
                title: "Offer & Day 1 Kit",
                desc: "Formal competitive contract, hardware setup stipend, and thorough operational orientation.",
                tag: "Day 1 Launch"
              }
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.06}>
                <div className="group flex h-full flex-col justify-between rounded-[24px] bg-white p-6 border border-slate-100 shadow-[0_1px_0_rgba(8,30,53,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/25 hover:shadow-soft cursor-default">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-blue/20 transition-colors duration-300 group-hover:text-blue">
                        {item.step}
                      </span>
                      <span className="rounded-full bg-blue/10 px-2.5 py-1 text-[10px] font-extrabold text-blue">
                        {item.sla}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-slate-400">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 hidden lg:flex items-center justify-between rounded-2xl bg-white p-4 border border-slate-100 text-xs font-semibold text-slate-500 shadow-2xs">
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue animate-pulse" /> 1. CV Review (&lt;24h)</span>
            <span className="text-slate-300">──────►</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky" /> 2. Practical Evaluation</span>
            <span className="text-slate-300">──────►</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-mint" /> 3. Direct Client Interview</span>
            <span className="text-slate-300">──────►</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> 4. Offer & Day 1 Onboarding</span>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What you can expect"
            title="A workplace shaped by client responsibility and learning."
            text="The careers section is designed to support employer branding now and structured vacancy publishing later."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Global exposure",
                "Work directly with enterprise clients across the US, UK, Australia, and Europe.",
                "US · UK · EU · AU"
              ],
              [
                "Growth & Upskilling",
                "Continuous access to professional certifications, language coaching, and tech labs.",
                "Sponsored Courses"
              ],
              [
                "Ergonomic Workplace",
                "Modern dual-display workstations, fiber-optic internet redundancy, and breakout zones.",
                "Modern Dhaka HQ"
              ],
              [
                "Structured Pathways",
                "Transparent bi-annual evaluations with merit-based career promotions and leadership tracks.",
                "Clear Merit Trajectory"
              ]
            ].map(([a, b, badge], i) => (
              <Reveal key={a} delay={i * 0.05}>
                <div className="group flex h-full flex-col justify-between rounded-2xl bg-cloud/50 p-6 border border-slate-100 shadow-[0_1px_0_rgba(8,30,53,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/25 hover:bg-white hover:shadow-soft cursor-default">
                  <div>
                    <span className="inline-block rounded-md bg-white px-2.5 py-1 text-[10px] font-bold text-slate-500 shadow-2xs border border-slate-100 group-hover:text-blue group-hover:border-blue/20">
                      {badge}
                    </span>
                    <h3 className="mt-4 font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                      {a}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-slate-600">
                      {b}
                    </p>
                  </div>
                  <div className="mt-4 h-1 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-full group-hover:bg-blue" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container-shell">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[32px] bg-ink px-7 py-12 text-white shadow-soft transition-all duration-500 hover:shadow-2xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
              <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full bg-blue/25 blur-3xl animate-pulse-slow pointer-events-none" />
              <div className="max-w-2xl relative">
                <span className="inline-block text-xs font-bold uppercase tracking-[.16em] text-sky transition-transform duration-200 group-hover:scale-105">
                  Talent network
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-.04em]">
                  Want to be considered for future opportunities?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  Send a concise CV and mention your primary skill area in the email subject.
                </p>
              </div>
              <a
                href="mailto:apply@wellit.info"
                className="group/btn relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-sky hover:shadow-glow active:scale-95 lg:mt-0"
              >
                <span>apply@wellit.info</span>
                <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
