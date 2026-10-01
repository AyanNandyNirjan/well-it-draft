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
        text="Share the role, workload, business function or delivery challenge. This frontend form is ready to connect to your backend/API later."
      />

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[30px] bg-ink p-8 text-white shadow-soft transition-all duration-500 hover:shadow-2xl">
              <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-blue/20 blur-3xl animate-pulse-slow pointer-events-none" />
              <div className="relative">
                <span className="inline-block text-xs font-black uppercase tracking-[.16em] text-sky transition-transform duration-200 group-hover:scale-105">
                  Head office
                </span>
                <h2 className="mt-4 text-2xl font-extrabold">
                  Well IT & Consultancy Ltd
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/60">
                  Grassy Land, House-98, Dag No-964, Bastola, Graveyard Rd, Dhaka 1212, Bangladesh.
                </p>
                <div className="mt-8 border-t border-white/10 pt-6 space-y-3">
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
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:bg-white/10 cursor-default">
                  <p className="text-xs font-bold uppercase tracking-[.15em] text-sky">
                    Business hours
                  </p>
                  <p className="mt-3 text-sm text-white/80 font-medium">
                    Monday–Friday · 06:00–23:00
                  </p>
                  <p className="mt-1 text-sm text-white/45 font-medium">
                    Saturday–Sunday · Closed
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
