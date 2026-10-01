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
                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.12em] text-amber-700 animate-pulse">
                  Backend-ready
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

      <section className="section-pad bg-cloud">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What you can expect"
            title="A workplace shaped by client responsibility and learning."
            text="The careers section is designed to support employer branding now and structured vacancy publishing later."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Global exposure", "Work across international client environments."],
              ["Growth mindset", "Learn through real responsibilities and feedback."],
              ["Structured ownership", "Operate with clear expectations and handovers."],
              ["Career pathways", "Strong performance can lead to expanded responsibilities."]
            ].map(([a, b], i) => (
              <Reveal key={a} delay={i * 0.05}>
                <div className="group h-full rounded-2xl bg-white p-6 border border-slate-100 shadow-[0_1px_0_rgba(8,30,53,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/25 hover:shadow-soft cursor-default">
                  <h3 className="font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                    {a}
                  </h3>
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
