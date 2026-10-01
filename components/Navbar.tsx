"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

const nav = [
  ["About", "/about"], ["Services", "/services"], ["Industries", "/industries"], ["Careers", "/careers"], ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-[0_8px_35px_rgba(7,17,31,.08)] backdrop-blur-xl" : "bg-white/70 backdrop-blur-md"}`}>
      <div className="container-shell flex h-[76px] items-center justify-between">
        <BrandLogo />
        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                pathname === href
                  ? "text-blue bg-blue/5"
                  : "text-slate-600 hover:text-blue hover:bg-slate-100/80 active:scale-95"
              }`}
            >
              {label}
              {pathname === href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-blue"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:contact@wellit.info"
            className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-blue active:scale-95"
          >
            Email us
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue hover:shadow-glow active:scale-95"
          >
            <span>Build your team</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
        <button
          onClick={() => setOpen(v => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-ink transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-ink transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="container-shell flex flex-col gap-1 py-4">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    pathname === href
                      ? "bg-blue/10 text-blue font-bold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-blue active:scale-98"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-xl bg-ink px-4 py-3.5 text-center text-sm font-bold text-white transition-all duration-200 hover:bg-blue hover:shadow-glow active:scale-98"
              >
                Build your team →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
