"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

const nav = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Careers", "/careers"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-2.5 sm:top-5 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-6xl pointer-events-auto">
        {/* Floating Island Capsule - Frosted Glass Light Mode */}
        <div
          className={`flex h-[60px] sm:h-[68px] items-center justify-between rounded-full px-4 sm:px-7 transition-all duration-300 backdrop-blur-xl backdrop-saturate-150 bg-white/85 border text-ink ${
            scrolled
              ? "border-slate-200/90 shadow-[0_16px_45px_rgba(7,17,31,0.14),inset_0_1px_1px_rgba(255,255,255,0.95)]"
              : "border-slate-200/80 shadow-[0_12px_36px_rgba(7,17,31,0.10),inset_0_1px_1px_rgba(255,255,255,0.95)]"
          }`}
        >
          {/* Logo in light mode */}
          <BrandLogo light={false} />

          {/* Central Dock Pill Navigation - Main Website Color (Deep Brand Navy) */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full p-1 border bg-[#0B1528] border-[#2C4975]/40 shadow-[0_4px_18px_rgba(11,21,40,0.25),inset_0_1px_1px_rgba(255,255,255,0.12)]">
            {nav.map(([label, href]) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 active:scale-95 ${
                    active
                      ? "text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {/* Floating active pill highlight */}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2C4975] to-[#3a6096] border border-white/20 shadow-[0_2px_10px_rgba(44,73,117,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:contact@wellit.info"
              className="rounded-full px-3.5 py-2 text-xs font-bold text-slate-700 transition-all duration-200 hover:text-blue active:scale-95"
            >
              Email us
            </a>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1C365C] via-blue to-[#386094] px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_18px_rgba(44,73,117,0.32)] transition-all duration-300 hover:brightness-115 hover:scale-[1.03] active:scale-95"
            >
              <span>Build your team</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setOpen(v => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-100/90 text-ink transition-all duration-200 hover:bg-slate-200 active:scale-95 lg:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-ink transition-all duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-4 bg-ink transition-all duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-0.5 w-4 bg-ink transition-all duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Glass Card - Always Light Mode */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 max-h-[calc(100dvh-85px)] overflow-y-auto rounded-[28px] border border-slate-200/90 bg-white/90 p-4 text-ink shadow-2xl backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {nav.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-200 ${
                      pathname === href
                        ? "bg-[#0B1528] text-white shadow-sm"
                        : "text-slate-700 hover:bg-slate-100 hover:text-ink"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <div className="mt-2 pt-2 border-t border-slate-100 flex flex-col gap-2">
                  <Link
                    href="/contact"
                    className="rounded-2xl bg-gradient-to-r from-[#1C365C] via-blue to-[#386094] py-3 text-center text-sm font-bold text-white shadow-md transition-all duration-200 hover:brightness-110 active:scale-98"
                  >
                    Build your team →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
