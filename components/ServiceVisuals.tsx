export function ServiceMiniVisual({ type }: { type: number }) {
  switch (type) {
    case 0: // Admin Support
      return (
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3 font-mono text-[11px] text-slate-600 transition-all duration-300 group-hover:border-blue/20 group-hover:bg-white group-hover:shadow-sm">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5 font-sans font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-blue" />
              Calendar & Inbox
            </span>
            <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-bold text-emerald-600">Zero Unread</span>
          </div>
          <div className="mt-2 space-y-1.5 font-sans">
            <div className="flex items-center justify-between rounded-lg bg-white p-2 border border-slate-100 shadow-2xs">
              <span className="font-semibold text-ink text-xs">Executive Sync</span>
              <span className="text-slate-400 text-[10px]">10:00 AM EST</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white/70 p-1.5 text-slate-500 text-[10px]">
              <span>Board Deck Briefing</span>
              <span className="text-emerald-600 font-bold">Confirmed ✓</span>
            </div>
          </div>
        </div>
      );

    case 1: // Back Office & Data
      return (
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3 font-mono text-[11px] text-slate-600 transition-all duration-300 group-hover:border-blue/20 group-hover:bg-white group-hover:shadow-sm">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5 font-sans font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-sky" />
              CRM Sync Pipeline
            </span>
            <span className="rounded bg-blue/10 px-1.5 py-0.5 font-bold text-blue">99.9% Clean</span>
          </div>
          <div className="mt-2 space-y-1.5 font-sans">
            <div className="flex items-center justify-between rounded-lg bg-white p-2 border border-slate-100 shadow-2xs">
              <span className="font-semibold text-ink text-xs">Database Hygiene</span>
              <span className="text-blue font-bold text-[10px]">14,280 Rows</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue to-sky w-[94%]" />
            </div>
          </div>
        </div>
      );

    case 2: // Customer Service
      return (
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3 font-mono text-[11px] text-slate-600 transition-all duration-300 group-hover:border-blue/20 group-hover:bg-white group-hover:shadow-sm">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5 font-sans font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Helpdesk
            </span>
            <span className="font-bold text-slate-500">CSAT 99.4%</span>
          </div>
          <div className="mt-2 space-y-1.5 font-sans">
            <div className="rounded-lg bg-white p-2 border border-slate-100 shadow-2xs">
              <p className="text-[10px] text-slate-400">Avg. Response Time</p>
              <div className="flex items-baseline justify-between mt-0.5">
                <span className="text-sm font-extrabold text-ink">&lt; 45 Seconds</span>
                <span className="text-[10px] font-bold text-emerald-600">Top 1% Tier</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 3: // Finance & Accounting
      return (
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3 font-mono text-[11px] text-slate-600 transition-all duration-300 group-hover:border-blue/20 group-hover:bg-white group-hover:shadow-sm">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5 font-sans font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-mint" />
              Monthly Ledger
            </span>
            <span className="font-bold text-emerald-600">Reconciled ✓</span>
          </div>
          <div className="mt-2 space-y-1.5 font-sans">
            <div className="flex items-center justify-between rounded-lg bg-white p-2 border border-slate-100 shadow-2xs">
              <div>
                <p className="text-[10px] text-slate-400">Audit Status</p>
                <p className="font-extrabold text-ink text-xs">GAAP Compliant</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                0 Discrepancy
              </span>
            </div>
          </div>
        </div>
      );

    case 4: // IT & Software Engineering
      return (
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3 font-mono text-[11px] text-slate-600 transition-all duration-300 group-hover:border-blue/20 group-hover:bg-white group-hover:shadow-sm">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5 font-sans font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-blue" />
              CI/CD Pipeline
            </span>
            <span className="font-bold text-emerald-600">Passing</span>
          </div>
          <div className="mt-2 space-y-1 font-mono text-[10px]">
            <div className="rounded-lg bg-ink p-2 text-white/90">
              <p className="text-emerald-400">✓ git push origin main</p>
              <p className="text-white/60 text-[9px]">Build: 48 tests passed in 1.4s</p>
            </div>
          </div>
        </div>
      );

    case 5: // Marketing & Growth
    default:
      return (
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3 font-mono text-[11px] text-slate-600 transition-all duration-300 group-hover:border-blue/20 group-hover:bg-white group-hover:shadow-sm">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5 font-sans font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-sky" />
              Growth Performance
            </span>
            <span className="font-bold text-blue">+142% YoY</span>
          </div>
          <div className="mt-2 space-y-1.5 font-sans">
            <div className="flex items-center justify-between rounded-lg bg-white p-2 border border-slate-100 shadow-2xs">
              <span className="font-semibold text-ink text-xs">Qualified Pipeline</span>
              <span className="text-emerald-600 font-bold text-[10px]">High Intent</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue via-sky to-mint w-[86%]" />
            </div>
          </div>
        </div>
      );
  }
}
