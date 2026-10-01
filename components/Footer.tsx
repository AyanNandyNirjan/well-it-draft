import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div className="max-w-sm">
            <BrandLogo light />
            <p className="mt-6 text-sm leading-7 text-white/60">Dedicated offshore teams in Bangladesh for businesses that need reliable operations, specialist talent and scalable support.</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-white/70">
              <span className="rounded-full border border-white/10 px-3 py-1.5 transition-all duration-200 hover:border-sky/40 hover:bg-white/10 hover:text-white hover:scale-105 cursor-default">ISO 27001:2022</span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 transition-all duration-200 hover:border-sky/40 hover:bg-white/10 hover:text-white hover:scale-105 cursor-default">BIDA Registered</span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 transition-all duration-200 hover:border-sky/40 hover:bg-white/10 hover:text-white hover:scale-105 cursor-default">BASIS Member</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Company</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/55">
              <Link href="/about" className="inline-flex items-center gap-1 transition-all duration-200 hover:translate-x-1 hover:text-white">About</Link>
              <Link href="/careers" className="inline-flex items-center gap-1 transition-all duration-200 hover:translate-x-1 hover:text-white">Careers</Link>
              <Link href="/contact" className="inline-flex items-center gap-1 transition-all duration-200 hover:translate-x-1 hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Solutions</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/55">
              <Link href="/services" className="inline-flex items-center gap-1 transition-all duration-200 hover:translate-x-1 hover:text-white">Services</Link>
              <Link href="/industries" className="inline-flex items-center gap-1 transition-all duration-200 hover:translate-x-1 hover:text-white">Industries</Link>
              <Link href="/services#models" className="inline-flex items-center gap-1 transition-all duration-200 hover:translate-x-1 hover:text-white">Hiring models</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Head office</h3>
            <p className="mt-5 text-sm leading-6 text-white/55">Grassy Land, House-98, Dag No-964, Bastola, Graveyard Rd, Dhaka 1212, Bangladesh.</p>
            <a href="tel:+8801310367722" className="mt-4 block text-sm font-semibold text-white transition-all duration-200 hover:text-sky hover:translate-x-0.5">+880 1310-367722</a>
            <a href="mailto:contact@wellit.info" className="mt-2 block text-sm font-semibold text-white transition-all duration-200 hover:text-sky hover:translate-x-0.5">contact@wellit.info</a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Well IT & Consultancy Ltd. All rights reserved.</p>
          <p>Frontend redesign — backend-ready architecture.</p>
        </div>
      </div>
    </footer>
  );
}
