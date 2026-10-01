"use client";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setLoading(true);
    await new Promise(r => setTimeout(r, 650));
    setLoading(false); toast.success("Thanks — the frontend form is ready for backend integration.");
    (e.currentTarget as HTMLFormElement).reset();
  };
  return (
    <form onSubmit={submit} className={`grid gap-4 transition-all duration-300 ${compact ? "" : "rounded-[28px] bg-white p-6 shadow-soft hover:shadow-2xl sm:p-8"}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Your name"
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all duration-200 hover:border-slate-300 focus:border-blue focus:ring-4 focus:ring-blue/10"
        />
        <input
          required
          type="email"
          placeholder="Work email"
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all duration-200 hover:border-slate-300 focus:border-blue focus:ring-4 focus:ring-blue/10"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          placeholder="Company"
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all duration-200 hover:border-slate-300 focus:border-blue focus:ring-4 focus:ring-blue/10"
        />
        <select
          defaultValue=""
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all duration-200 hover:border-slate-300 focus:border-blue focus:ring-4 focus:ring-blue/10 cursor-pointer"
        >
          <option value="" disabled>What do you need?</option>
          <option>Dedicated talent</option>
          <option>Managed team</option>
          <option>Project-based support</option>
          <option>Career enquiry</option>
        </select>
      </div>
      <textarea
        required
        rows={compact ? 4 : 5}
        placeholder="Tell us about the role, workload or team you want to build..."
        className="resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm outline-none transition-all duration-200 hover:border-slate-300 focus:border-blue focus:ring-4 focus:ring-blue/10"
      />
      <button
        type="submit"
        disabled={loading}
        className="group h-12 rounded-xl bg-ink px-6 text-sm font-bold text-white transition-all duration-200 hover:bg-blue hover:shadow-glow hover:-translate-y-0.5 active:scale-98 disabled:opacity-60 disabled:hover:translate-y-0 cursor-pointer"
      >
        <span className="inline-flex items-center gap-2">
          <span>{loading ? "Sending..." : "Send enquiry"}</span>
          {!loading && <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>}
        </span>
      </button>
    </form>
  );
}
