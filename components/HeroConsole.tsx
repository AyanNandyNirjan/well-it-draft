"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  Shield01Icon,
  Clock01Icon,
  GlobalIcon,
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

type PodKey = "tech" | "finance" | "support";

interface PodData {
  id: PodKey;
  label: string;
  iconTag: string;
  specialists: {
    initials: string;
    name: string;
    role: string;
    status: string;
    tools: string[];
    bg: string;
  }[];
  metrics: {
    label: string;
    value: string;
    sub: string;
    color: string;
  }[];
  sla: string;
  overlap: string;
}

const pods: PodData[] = [
  {
    id: "tech",
    label: "Tech & QA",
    iconTag: "Fullstack Pod",
    specialists: [
      {
        initials: "TR",
        name: "Tariq Rahman",
        role: "Senior Fullstack Engineer",
        status: "Active in GitHub PR Review",
        tools: ["React", "Node.js", "AWS", "Docker"],
        bg: "bg-blue text-white",
      },
      {
        initials: "FA",
        name: "Fahim Ahmed",
        role: "Cloud QA & Automation Lead",
        status: "18/18 E2E Suites Passing",
        tools: ["Playwright", "Jest", "CI/CD"],
        bg: "bg-emerald-600 text-white",
      },
    ],
    metrics: [
      { label: "Sprint Velocity", value: "98.4%", sub: "On target", color: "text-emerald-400" },
      { label: "Deployment SLA", value: "< 15m", sub: "Hotfix response", color: "text-sky" },
      { label: "Code Coverage", value: "94.2%", sub: "Rigorous QA", color: "text-blue-400" },
    ],
    sla: "99.9% Uptime Benchmark",
    overlap: "8 hrs/day US & UK Overlap",
  },
  {
    id: "finance",
    label: "FinOps & Audit",
    iconTag: "Finance Pod",
    specialists: [
      {
        initials: "NL",
        name: "Nadia Latif",
        role: "Senior FinOps Specialist",
        status: "Month-End Reconciliation Complete",
        tools: ["QuickBooks", "Xero", "GAAP", "Excel"],
        bg: "bg-sky-600 text-white",
      },
      {
        initials: "KH",
        name: "Kamran Hassan",
        role: "Payroll & Compliance Analyst",
        status: "Zero Discrepancy Audit",
        tools: ["Gusto", "Bill.com", "IFRS"],
        bg: "bg-teal-600 text-white",
      },
    ],
    metrics: [
      { label: "Audit Accuracy", value: "100%", sub: "Double verified", color: "text-emerald-400" },
      { label: "Close Cycle", value: "2 Days", sub: "Month-end speed", color: "text-sky" },
      { label: "Ledger Volume", value: "$4.2M+", sub: "Managed monthly", color: "text-teal-400" },
    ],
    sla: "GAAP & IFRS Compliant",
    overlap: "Continuous Shift Handoff",
  },
  {
    id: "support",
    label: "Customer Support",
    iconTag: "Support Pod",
    specialists: [
      {
        initials: "SK",
        name: "Sabrina Khan",
        role: "Customer Success Lead",
        status: "Avg First Response: 32s",
        tools: ["Zendesk", "HubSpot", "Slack"],
        bg: "bg-indigo-600 text-white",
      },
      {
        initials: "TS",
        name: "Tanvir Shafi",
        role: "Tier-2 Technical Specialist",
        status: "Resolving Escalations",
        tools: ["Intercom", "Jira", "Notion"],
        bg: "bg-amber-600 text-white",
      },
    ],
    metrics: [
      { label: "CSAT Score", value: "99.4%", sub: "Across 4,200+ tickets", color: "text-emerald-400" },
      { label: "First Response", value: "< 45s", sub: "Live chat speed", color: "text-sky" },
      { label: "Resolution Rate", value: "96.8%", sub: "Single touch", color: "text-amber-400" },
    ],
    sla: "24/7 Follow-the-Sun Coverage",
    overlap: "Full US EST/PST & AU AEST",
  },
];

export default function HeroConsole() {
  const [activeTab, setActiveTab] = useState<PodKey>("tech");
  const activePod = pods.find((p) => p.id === activeTab) || pods[0];

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      {/* Ambient background glow rings */}
      <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-blue/25 via-sky/15 to-gold/20 blur-2xl -z-10" />
      <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-blue/30 blur-3xl -z-10 pointer-events-none" />

      {/* Main Glass Console Card */}
      <div className="relative overflow-hidden rounded-[26px] sm:rounded-[30px] border border-white/15 bg-gradient-to-b from-[#13233D]/95 to-[#0B1528]/95 p-4 sm:p-6 lg:p-6 xl:p-7 text-white shadow-[0_25px_70px_rgba(0,0,0,0.65)] backdrop-blur-2xl transition-all duration-300 hover:border-white/25">
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#6894C7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none" />

        {/* Console Header Bar */}
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4 sm:pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[.18em] text-emerald-400">
                Live Delivery Cockpit
              </span>
            </div>
            <h3 className="mt-1 text-lg sm:text-xl font-black tracking-tight text-white">
              Global Operations Station
            </h3>
            <p className="text-xs text-white/55">
              Dhaka Delivery Hub ↔ US · UK · AU Clients
            </p>
          </div>

          {/* Timezone telemetry badge */}
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold text-white/80 self-start sm:self-auto shrink-0">
            <HugeiconsIcon icon={Clock01Icon} size={14} className="text-sky shrink-0" />
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px]">
              <span className="text-white font-bold">EST</span>
              <span className="text-white/40">·</span>
              <span className="text-white font-bold">GMT</span>
              <span className="text-white/40">·</span>
              <span className="text-mint font-bold">BST Active</span>
            </div>
          </div>
        </div>

        {/* Interactive Pod Selector Tabs */}
        <div className="relative mt-4 sm:mt-5">
          <p className="text-[10px] font-bold uppercase tracking-[.15em] text-white/40 mb-2">
            Select Live Operation Pod
          </p>
          <div className="grid grid-cols-3 gap-1 sm:gap-1.5 rounded-2xl bg-white/[0.06] p-1 border border-white/10">
            {pods.map((pod) => {
              const isActive = activeTab === pod.id;
              return (
                <button
                  key={pod.id}
                  type="button"
                  onClick={() => setActiveTab(pod.id)}
                  className={`relative rounded-xl py-1.5 sm:py-2 px-1 text-center text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive ? "text-white shadow-md" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pod-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue to-sky/90 shadow-glow"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 block truncate">{pod.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pod Content with Smooth AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePod.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="relative mt-4 sm:mt-5 space-y-3.5 sm:space-y-4"
          >
            {/* Specialists assigned to this Pod */}
            <div className="space-y-2 sm:space-y-2.5">
              {activePod.specialists.map((spec) => (
                <div
                  key={spec.name}
                  className="group/spec flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-3.5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span
                      className={`grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl font-bold text-xs shadow-sm ${spec.bg}`}
                    >
                      {spec.initials}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <p className="text-xs sm:text-sm font-bold text-white group-hover/spec:text-sky transition-colors truncate">
                          {spec.name}
                        </p>
                        <span className="text-[9px] sm:text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5 shrink-0">
                          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={11} color="currentColor" />
                          Verified
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-white/55 truncate">{spec.role}</p>
                      <p className="text-[9px] sm:text-[10px] text-mint font-medium mt-0.5 flex items-center gap-1 truncate">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint animate-pulse" />
                        <span className="truncate">{spec.status}</span>
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-wrap gap-1 max-w-[170px] justify-end shrink-0">
                    {spec.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/10 px-2 py-0.5 text-[9px] font-bold text-white/80 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-0.5">
              {activePod.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3 text-center transition-all duration-200 hover:bg-white/[0.07] hover:border-sky/30"
                >
                  <p className="text-[9px] sm:text-[10px] font-semibold text-white/50 truncate">{m.label}</p>
                  <p className={`mt-0.5 sm:mt-1 text-base sm:text-xl font-black tracking-tight ${m.color}`}>
                    {m.value}
                  </p>
                  <p className="text-[8px] sm:text-[9px] font-medium text-white/40 mt-0.5 truncate">{m.sub}</p>
                </div>
              ))}
            </div>

            {/* Operational SLA & Timezone Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs text-white/70 gap-2">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Shield01Icon} size={15} className="text-gold shrink-0" />
                <span className="font-semibold text-white/90">{activePod.sla}</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/60 text-[10px] sm:text-[11px]">
                <HugeiconsIcon icon={GlobalIcon} size={13} className="text-sky shrink-0" />
                <span>{activePod.overlap}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Quick Action */}
        <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-white/60">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span className="truncate">Dedicated Full-Time or Scalable Teams</span>
          </div>

          <Link
            href="/contact"
            className="group/cta inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-black text-ink transition-all duration-300 hover:bg-gold hover:text-ink hover:shadow-gold active:scale-95"
          >
            <span>Deploy Team</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={13}
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
