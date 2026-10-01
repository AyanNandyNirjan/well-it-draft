export default function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="eyebrow transition-all duration-300 hover:border-blue/30 hover:bg-blue/10 hover:scale-105 cursor-default">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.045em] text-ink sm:text-4xl lg:text-[46px] lg:leading-[1.08]">{title}</h2>
      {text && <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>}
    </div>
  );
}
