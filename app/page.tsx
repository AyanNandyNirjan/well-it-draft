import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserIcon, Settings01Icon, Home01Icon, SearchIcon, Notification03Icon } from "@hugeicons/core-free-icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import VideoSpotlight from "@/components/VideoSpotlight";
import HeroConsole from "@/components/HeroConsole";
import { ServiceMiniVisual } from "@/components/ServiceVisuals";
import { insights, industries, process, services, testimonials } from "@/lib/site-data";

const IconBadge = ({ icon }: { icon: any }) => (
  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue/10 text-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-blue group-hover:text-white group-hover:shadow-glow">
    <HugeiconsIcon icon={icon} size={22} color="currentColor" strokeWidth={1.7} />
  </span>
);
const icons = [UserIcon, Settings01Icon, Home01Icon, SearchIcon, Notification03Icon, UserIcon];

export default function Home() {
  return (
    <main>
      <section className="hero-noise relative flex min-h-screen min-h-[100dvh] flex-col justify-center overflow-hidden bg-ink pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-20 lg:pb-8 text-white">
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-blue/25 blur-3xl animate-pulse-slow pointer-events-none"/>
        <div className="absolute right-0 top-10 h-[430px] w-[430px] rounded-full bg-sky/10 blur-3xl pointer-events-none"/>
        <div className="container-shell relative my-auto grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-10 xl:gap-14 py-4 sm:py-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-3.5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[.16em] text-sky transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-105 cursor-default">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse"/>
              Dedicated offshore teams in Bangladesh
            </div>
            <h1 className="mt-5 sm:mt-7 max-w-3xl text-3xl font-black tracking-[-0.055em] xs:text-4xl sm:text-5xl lg:text-[50px] xl:text-[62px] 2xl:text-[70px] leading-[1.05]">
              Build a capable team <span className="gradient-text">without slowing down.</span>
            </h1>
            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-7 sm:leading-8 text-white/65">
              Well IT helps businesses build dedicated remote teams across operations, customer service, finance, IT, marketing and specialized support — with sourcing, onboarding and ongoing coordination handled for you.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-sky hover:shadow-glow active:scale-95 text-center"
              >
                <span>Hire dedicated talent</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 active:scale-95 text-center"
              >
                Explore solutions
              </Link>
            </div>
            <div className="mt-7 sm:mt-9 flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2.5 border-t border-white/10 pt-5 sm:pt-6 text-[11px] sm:text-xs font-semibold text-white/45">
              <span className="transition-colors duration-200 hover:text-white/80 cursor-default">US · UK · EU · AU clients</span>
              <span className="transition-colors duration-200 hover:text-white/80 cursor-default">Flexible staffing models</span>
              <span className="transition-colors duration-200 hover:text-white/80 cursor-default">Structured onboarding</span>
            </div>
          </Reveal>
          <Reveal delay={.12} className="relative mx-auto w-full max-w-[620px]">
            <HeroConsole />
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-b border-slate-100 bg-white py-5">
        <div className="marquee-track flex w-max gap-3 pr-3">
          {[...industries.slice(0,8),...industries.slice(0,8)].map((x,i)=>(
            <span
              key={i}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 transition-all duration-200 hover:border-blue/40 hover:bg-blue/5 hover:text-blue hover:scale-105 cursor-default"
            >
              {x}
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How it works"
            title="A clear process from requirement to reliable delivery."
            text="Outsourcing works best when the role, workflow and expectations are explicit. Our process is designed around that clarity."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.07}>
                <div className="group h-full rounded-[24px] border border-slate-100 bg-cloud/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:border-blue/20 hover:shadow-soft cursor-default">
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-xs font-black tracking-[.15em] text-blue transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
                      {p.step}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-blue/30 transition-all duration-300 group-hover:bg-blue group-hover:scale-125" />
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold tracking-[-.03em] transition-colors duration-200 group-hover:text-blue">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 hidden lg:flex items-center justify-between rounded-2xl bg-cloud/70 p-4 border border-slate-100 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue" /> Day 1: Role Blueprint</span>
            <span className="text-slate-300">──────►</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky" /> Day 3-5: Top Candidates</span>
            <span className="text-slate-300">──────►</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-mint" /> Day 7: Direct Interview</span>
            <span className="text-slate-300">──────►</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Week 2: Kickoff & SLA Tracking</span>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we offer"
              title="Staffing support across the functions that keep business moving."
              text="Start with one specialist or build a multidisciplinary team. The model is flexible by design."
            />
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-blue transition-colors duration-200 hover:text-sky"
            >
              <span>View all solutions</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-[26px] bg-white p-6 shadow-[0_1px_0_rgba(8,30,53,.06)] border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-blue/20 hover:shadow-soft">
                  <IconBadge icon={icons[i]} />
                  <span className="mt-7 inline-block text-[10px] font-black uppercase tracking-[.15em] text-slate-400 transition-colors group-hover:text-blue">
                    {s.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-extrabold tracking-[-.03em] transition-colors duration-200 group-hover:text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {s.text}
                  </p>
                  <ServiceMiniVisual type={i} />
                  <div className="mt-6 h-px bg-slate-100 transition-colors group-hover:bg-blue/15" />
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue opacity-70 transition-all duration-200 group-hover:opacity-100">
                    <span>Explore capability</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[32px] bg-ink p-7 text-white shadow-soft transition-all duration-500 hover:shadow-2xl sm:p-10">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue/25 blur-3xl animate-pulse-slow pointer-events-none" />
              <p className="relative text-xs font-bold uppercase tracking-[.16em] text-sky">
                Built for operational confidence
              </p>
              <h3 className="relative mt-4 text-3xl font-extrabold tracking-[-.04em]">
                The team behind your team.
              </h3>
              <p className="relative mt-4 text-sm leading-7 text-white/60">
                Well IT’s current public positioning focuses on dedicated offshore professionals who become part of the client’s everyday workflow — not a generic task queue.
              </p>
              <div className="relative mt-8 grid grid-cols-2 gap-3">
                {["Efficient recruitment", "Flexible engagement", "Transparent communication", "Long-term support"].map(x => (
                  <div
                    key={x}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold transition-all duration-200 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 cursor-default"
                  >
                    {x}
                  </div>
                ))}
              </div>
              <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/15 shadow-xl">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/global-operations.jpg"
                    alt="Well IT Global Remote Operations Center"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-black/20" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-white">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                      Dhaka Operations Hub ↔ US · UK · EU · AU
                    </span>
                    <span className="rounded-full bg-white/15 px-2.5 py-0.5 backdrop-blur-md text-[10px] uppercase tracking-wider text-sky">
                      Live Network
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Why Well IT"
              title="Scale without turning hiring into a second full-time job."
              text="We handle sourcing, screening, onboarding structure and ongoing support so your leaders can spend more time running the business."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Global talent access", "Connect with professionals across business and technical functions."],
                ["Lower operating friction", "Reduce recruitment overhead and keep team capacity flexible."],
                ["Workflow integration", "Build around the tools, hours and standards you already use."],
                ["Dedicated account support", "Keep communication, expectations and performance visible."]
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="group rounded-2xl border border-slate-100 p-5 bg-white/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/25 hover:shadow-md hover:bg-white cursor-default"
                >
                  <p className="font-extrabold transition-colors duration-200 group-hover:text-blue">{a}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="models" className="section-pad bg-cloud">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Flexible engagement"
            title="Choose the model that matches the work."
            text="The best staffing model depends on continuity, scope and how much management you want Well IT to carry."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              ["Full-time dedicated talent", "A long-term professional working closely with your business, systems and priorities.", "Best for ongoing roles"],
              ["Project-based teams", "Specialists assigned to a defined scope, outcome or delivery window.", "Best for clear deliverables"],
              ["Managed team solutions", "A coordinated team with ongoing oversight and operational support built in.", "Best for scale"]
            ].map(([a, b, c], i) => (
              <Reveal key={a} delay={i * 0.07}>
                <div
                  className={`group h-full rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-2.5 cursor-default ${
                    i === 1
                      ? "bg-ink text-white shadow-soft hover:shadow-[0_24px_70px_rgba(22,119,255,0.22)]"
                      : "bg-white card-border hover:shadow-soft hover:border-blue/20"
                  }`}
                >
                  <span className={`inline-block text-[10px] font-black uppercase tracking-[.16em] transition-transform duration-200 group-hover:scale-105 ${i === 1 ? "text-sky" : "text-blue"}`}>
                    {c}
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-[-.04em]">
                    {a}
                  </h3>
                  <p className={`mt-4 text-sm leading-7 ${i === 1 ? "text-white/60" : "text-slate-600"}`}>
                    {b}
                  </p>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 ${
                      i === 1 ? "text-white hover:text-sky" : "text-blue hover:text-sky"
                    }`}
                  >
                    <span>Discuss this model</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Client perspective"
            title="Trusted for reliability, communication and integration."
            text="A strong offshore engagement should feel increasingly less like outsourcing and more like a dependable extension of the team."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-slate-100 bg-white p-7 sm:p-8 shadow-[0_10px_40px_rgba(8,30,53,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/30 hover:shadow-soft cursor-default">
                  {/* Subtle top ambient indicator */}
                  <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-blue to-sky opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-full" />

                  <div>
                    {/* Header: Client Avatar + Info + Rating */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-100 shadow-sm ring-2 ring-slate-100 group-hover:ring-blue/30 transition-all duration-300">
                          <Image
                            src={t.image}
                            alt={t.name}
                            fill
                            sizes="64px"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute bottom-1 right-1 grid h-4 w-4 place-items-center rounded-full bg-blue text-[9px] font-black text-white shadow-xs">
                            ✓
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                            {t.name}
                          </h4>
                          <p className="mt-0.5 text-xs font-semibold text-slate-500">
                            {t.role} · <span className="font-bold text-ink">{t.company}</span>
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-slate-400">
                            <span>{t.flag}</span>
                            <span>{t.location}</span>
                          </p>
                        </div>
                      </div>

                      <div className="rounded-full bg-amber-50/80 px-2.5 py-1 border border-amber-200/50 text-[10px] font-black text-amber-600 flex items-center gap-1 shrink-0">
                        <span>★</span>
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* Quote text */}
                    <blockquote className="mt-6 text-[14px] leading-7 text-slate-600 italic">
                      “{t.quote}”
                    </blockquote>
                  </div>

                  {/* Impact & Outcome Pill Footer */}
                  <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[.15em] text-slate-400">
                        Operational Impact
                      </p>
                      <p className="text-xs font-bold text-blue mt-0.5">
                        {t.highlight}
                      </p>
                    </div>
                    <span className="rounded-lg bg-cloud px-2.5 py-1 text-[10px] font-bold text-slate-600 border border-slate-100">
                      {t.impact}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-noise relative overflow-hidden bg-ink py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue/20 blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-sky/15 blur-3xl pointer-events-none" />
        <div className="container-shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[.18em] text-sky transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-105 cursor-default">
                <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
                Featured Video
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-4xl lg:text-[46px] lg:leading-[1.08]">
                Inside Well IT: <span className="gradient-text">How We Approach Success</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                Practical thinking on operational discipline, accountability, and what it takes to build remote teams that consistently win.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 sm:mt-14">
            <Reveal delay={0.12}>
              <VideoSpotlight
                videoId="PGDYL1R33nA"
                title="Don't do this if you want to lose"
                thumbnailUrl="/images/video-thumbnail.jpg"
                channelName="Well IT & Consultancy Ltd"
                channelUrl="https://www.youtube.com/@Wellit2022"
              />
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            <Reveal delay={0.18}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center sm:text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:bg-white/10 hover:shadow-lg cursor-default">
                <p className="text-xs font-bold uppercase tracking-[.15em] text-sky transition-transform duration-200 group-hover:scale-105">01. Clarity</p>
                <p className="mt-2 text-sm font-bold text-white">Define before delegating</p>
                <p className="mt-1 text-xs text-white/55">Remove ambiguity in scopes, handoffs, and success metrics.</p>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center sm:text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:bg-white/10 hover:shadow-lg cursor-default">
                <p className="text-xs font-bold uppercase tracking-[.15em] text-sky transition-transform duration-200 group-hover:scale-105">02. Ownership</p>
                <p className="mt-2 text-sm font-bold text-white">Proactive accountability</p>
                <p className="mt-1 text-xs text-white/55">Professionals integrated into real workflows, not passive tickets.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center sm:text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:bg-white/10 hover:shadow-lg cursor-default">
                <p className="text-xs font-bold uppercase tracking-[.15em] text-sky transition-transform duration-200 group-hover:scale-105">03. Continuity</p>
                <p className="mt-2 text-sm font-bold text-white">Long-term alignment</p>
                <p className="mt-1 text-xs text-white/55">Structured check-ins and operational cadence that scales.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Ideas from Well IT"
              title="Practical thinking for better remote operations."
              text="Themes reflected in Well IT’s recent public company content — redesigned here as editorial cards for the new site."
            />
            <a
              href="https://www.linkedin.com/company/wellitltd"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-blue transition-colors duration-200 hover:text-sky"
            >
              <span>Follow company updates</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {insights.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.07}>
                <article className="group h-full rounded-[26px] bg-white p-7 border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-blue/20 hover:shadow-soft cursor-default">
                  <span className="text-[10px] font-black uppercase tracking-[.16em] text-blue transition-colors duration-200 group-hover:text-sky">
                    {a.category}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold tracking-[-.03em] transition-colors duration-200 group-hover:text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {a.text}
                  </p>
                  <p className="mt-7 inline-flex items-center gap-1 text-xs font-bold text-slate-400 transition-all duration-200 group-hover:text-blue">
                    <span>Read perspective</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
