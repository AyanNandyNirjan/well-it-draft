import Link from "next/link";

export default function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3 transition-transform duration-200 active:scale-95" aria-label="Well IT home">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-blue to-sky shadow-glow transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_0_25px_rgba(22,119,255,0.45)]">
        <span className="absolute inset-[1px] rounded-[11px] border border-white/30" />
        <span className="text-sm font-black tracking-[-0.08em] text-white">WI</span>
      </span>
      <span className="leading-none">
        <span className={`block text-[17px] font-extrabold tracking-[-0.02em] transition-colors duration-200 ${light ? "text-white group-hover:text-sky" : "text-ink group-hover:text-blue"}`}>Well IT</span>
        <span className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${light ? "text-white/55 group-hover:text-white/80" : "text-slate-400 group-hover:text-slate-600"}`}>& Consultancy Ltd</span>
      </span>
    </Link>
  );
}
