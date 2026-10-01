import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-cloud pt-[76px]">
      <div className="absolute inset-0 soft-grid opacity-60" />
      <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-blue/15 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-sky/15 blur-3xl pointer-events-none" />
      <div className="container-shell relative py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-4xl">
          <span className="eyebrow transition-all duration-300 hover:border-blue/30 hover:bg-blue/10 hover:scale-105 cursor-default">{eyebrow}</span>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.055em] text-ink sm:text-5xl lg:text-[66px] lg:leading-[1.03]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
