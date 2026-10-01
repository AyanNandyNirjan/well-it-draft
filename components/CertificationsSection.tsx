import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface CertificationItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  logo: string;
  logoAlt: string;
  highlights: string[];
  footerTag: string;
}

const certifications: CertificationItem[] = [
  {
    id: "iso",
    badge: "Information Security",
    badgeColor: "border-blue/20 bg-blue/10 text-blue",
    title: "ISO 27001:2022",
    subtitle: "Information Security Management System",
    tagline: "Committed to Security",
    description: "Enterprise-grade data security protocols, strict access governance, and client IP protection across every remote pod.",
    logo: "/images/certifications/iso-27001.png",
    logoAlt: "ISO 27001:2022 Certified Logo",
    highlights: [
      "International ISMS Gold Standard",
      "Strict data confidentiality & NDAs",
      "Independent third-party audited"
    ],
    footerTag: "Global Security Standard"
  },
  {
    id: "bida",
    badge: "Regulatory Compliance",
    badgeColor: "border-amber-500/25 bg-amber-500/10 text-amber-900",
    title: "BIDA Registered",
    subtitle: "Bangladesh Investment Development Authority",
    tagline: "Statutory Compliance",
    description: "Officially registered under the Prime Minister's Office, guaranteeing full foreign investment transparency, statutory compliance, and legal peace of mind.",
    logo: "/images/certifications/bida.png",
    logoAlt: "Bangladesh Investment Development Authority (BIDA) Logo",
    highlights: [
      "Prime Minister's Office oversight",
      "Compliant international contract governance",
      "Audited fiscal & legal transparency"
    ],
    footerTag: "Government Chartered Entity"
  },
  {
    id: "basis",
    badge: "Industry Standing",
    badgeColor: "border-emerald-600/25 bg-emerald-600/10 text-emerald-900",
    title: "BASIS Member",
    subtitle: "Bangladesh Association of Software & Information Services",
    tagline: "Business Excellence",
    description: "Proud member of the apex national software and IT services association, dedicated to ethical talent practices, global standards, and tech innovation.",
    logo: "/images/certifications/basis.png",
    logoAlt: "BASIS Bangladesh Association of Software & Information Services Logo",
    highlights: [
      "National IT apex association member",
      "Ethical talent sourcing & fair pay charter",
      "World-class technology delivery benchmark"
    ],
    footerTag: "National Apex Body Member"
  }
];

export default function CertificationsSection({ background = "cloud" }: { background?: "white" | "cloud" }) {
  const bgClass = background === "white" ? "bg-white" : "bg-cloud/60";

  return (
    <section className={`section-pad relative overflow-hidden ${bgClass} border-y border-slate-100`}>
      {/* Ambient background glows */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="container-shell relative">
        <SectionHeading
          eyebrow="Certifications & Compliance"
          title="Certified Standards That Build Business Confidence."
          text="When partnering with an offshore team, enterprise data security, statutory legality, and apex industry accreditation are non-negotiable. Well IT is structured to give global organizations total confidence."
          align="center"
        />

        <div className="mt-12 sm:mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(11,21,40,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue/35 hover:shadow-soft">
                {/* Top ambient color bar on hover */}
                <div className="absolute inset-x-8 top-0 h-1 bg-gradient-to-r from-blue via-sky to-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-full" />

                <div>
                  {/* Eyebrow badge + Tagline */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 italic">
                      — {item.tagline} —
                    </span>
                  </div>

                  {/* Logo Display Showcase */}
                  <div className="mt-6 flex h-24 w-full items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 group-hover:bg-white group-hover:border-blue/20 group-hover:shadow-xs">
                    <div className="relative h-14 w-full max-w-[220px]">
                      <Image
                        src={item.logo}
                        alt={item.logoAlt}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Titles */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-extrabold text-ink transition-colors duration-200 group-hover:text-blue">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  {/* Key Assurance Highlights */}
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-blue/10 text-[10px] font-bold text-blue">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-500">Official Standing</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cloud px-3 py-1 font-bold text-ink border border-slate-200/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item.footerTag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global Compliance Summary Bar */}
        <div className="mt-10 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue font-black text-lg">
              🛡️
            </span>
            <div>
              <p className="text-sm font-extrabold text-ink">
                Enterprise Trust & Compliance Assurance
              </p>
              <p className="text-xs text-slate-500">
                All client engagements operate under strict non-disclosure agreements, data security protocols, and international service level agreements.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-xs font-bold text-slate-600">
            <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1">
              ✓ Fully Audited & Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
