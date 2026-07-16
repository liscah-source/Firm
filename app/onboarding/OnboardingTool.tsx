"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ROLES,
  PHASES,
  TASKS,
  DOCUMENTS,
  FIRST_WEEK_SCHEDULE,
  CATEGORY_META,
  type Role,
} from "./data";

interface HireInfo {
  name: string;
  startDate: string;
  role: Role;
}

const STORAGE_PREFIX = "isaboke-onboarding:";

function progressKey(info: HireInfo) {
  return `${STORAGE_PREFIX}${info.role}:${info.name.trim().toLowerCase() || "unnamed"}`;
}

export default function OnboardingTool() {
  const [info, setInfo] = useState<HireInfo>({ name: "", startDate: "", role: "attorney" });
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  // Load saved info once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(`${STORAGE_PREFIX}info`);
      if (raw) setInfo({ ...{ name: "", startDate: "", role: "attorney" }, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Load the checklist for the current (role + name) whenever it changes.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(`${STORAGE_PREFIX}info`, JSON.stringify(info));
      const raw = localStorage.getItem(progressKey(info));
      setDone(raw ? JSON.parse(raw) : {});
    } catch {
      setDone({});
    }
  }, [info, hydrated]);

  function toggle(id: string) {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(progressKey(info), JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  function resetChecklist() {
    if (!confirm("Reset this new hire's checklist? This clears all checked items for this person.")) return;
    setDone({});
    try {
      localStorage.removeItem(progressKey(info));
    } catch {
      /* ignore */
    }
  }

  const roleTasks = useMemo(() => TASKS.filter((t) => t.roles.includes(info.role)), [info.role]);
  const roleDocs = useMemo(() => DOCUMENTS.filter((d) => d.roles.includes(info.role)), [info.role]);

  const completedCount = roleTasks.filter((t) => done[t.id]).length;
  const pct = roleTasks.length ? Math.round((completedCount / roleTasks.length) * 100) : 0;

  const roleMeta = ROLES.find((r) => r.id === info.role)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-[#0B5B7F] text-white">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <p className="text-blue-200 font-semibold tracking-wide text-sm mb-2">ISABOKE LAW</p>
          <h1 className="text-4xl font-bold mb-2">New Hire Onboarding</h1>
          <p className="text-blue-100 max-w-2xl">
            A guided checklist to bring new talent into the firm — compliant, equipped, and productive from
            day one. Progress saves in your browser.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* New hire setup */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">New hire name</span>
              <input
                type="text"
                value={info.name}
                onChange={(e) => setInfo((p) => ({ ...p, name: e.target.value }))}
                placeholder="e.g. Jordan Lee"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#4BA5C8] focus:outline-none focus:ring-2 focus:ring-[#4BA5C8]/30"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Start date</span>
              <input
                type="date"
                value={info.startDate}
                onChange={(e) => setInfo((p) => ({ ...p, startDate: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#4BA5C8] focus:outline-none focus:ring-2 focus:ring-[#4BA5C8]/30"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Role</span>
              <select
                value={info.role}
                onChange={(e) => setInfo((p) => ({ ...p, role: e.target.value as Role }))}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#4BA5C8] focus:outline-none focus:ring-2 focus:ring-[#4BA5C8]/30"
              >
                {ROLES.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.icon} {r.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            {roleMeta.icon} <span className="font-medium text-gray-700">{roleMeta.label}:</span> {roleMeta.blurb}
          </p>
        </section>

        {/* Progress */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">
              Onboarding progress{info.name ? ` — ${info.name}` : ""}
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">
                {completedCount}/{roleTasks.length} done
              </span>
              <button
                onClick={resetChecklist}
                className="text-sm text-gray-500 hover:text-red-600 underline underline-offset-2"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div
              className="h-3 bg-[#4BA5C8] rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-right text-sm font-semibold text-[#0B5B7F] mt-1">{pct}% complete</p>
        </section>

        {/* Checklist by phase */}
        {PHASES.map((phase) => {
          const phaseTasks = roleTasks.filter((t) => t.phase === phase);
          if (phaseTasks.length === 0) return null;
          const phaseDone = phaseTasks.filter((t) => done[t.id]).length;
          return (
            <section key={phase} className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{phase}</h3>
                <span className="text-sm text-gray-500">
                  {phaseDone}/{phaseTasks.length}
                </span>
              </div>
              <ul className="space-y-3">
                {phaseTasks.map((task) => {
                  const cat = CATEGORY_META[task.category];
                  const checked = !!done[task.id];
                  return (
                    <li key={task.id}>
                      <label
                        className={`flex gap-4 items-start bg-white rounded-xl border p-4 cursor-pointer transition-colors ${
                          checked ? "border-[#4BA5C8] bg-blue-50/40" : "border-gray-100 hover:border-gray-200"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(task.id)}
                          className="mt-1 h-5 w-5 shrink-0 accent-[#4BA5C8]"
                        />
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`font-semibold ${checked ? "text-gray-400 line-through" : "text-gray-900"}`}
                            >
                              {task.title}
                            </span>
                            <span
                              className="text-xs font-medium px-2 py-0.5 rounded-full text-white"
                              style={{ backgroundColor: cat.color }}
                            >
                              {cat.icon} {task.category}
                            </span>
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                              {task.owner}
                            </span>
                          </div>
                          <p className={`text-sm mt-1 ${checked ? "text-gray-400" : "text-gray-600"}`}>
                            {task.description}
                          </p>
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        {/* Documents */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Documents to collect</h3>
          <ul className="divide-y divide-gray-100">
            {roleDocs.map((doc) => (
              <li key={doc.id} className="py-3 flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-gray-900">{doc.name}</p>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 whitespace-nowrap">
                  {doc.owner}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* First week schedule */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">🗓️ First-week schedule</h3>
          <p className="text-sm text-gray-500 mb-4">A template — adjust times to fit the week.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FIRST_WEEK_SCHEDULE.map((day) => (
              <div key={day.label} className="rounded-xl border border-gray-100 p-4">
                <h4 className="font-bold text-[#0B5B7F] mb-3">{day.label}</h4>
                <ul className="space-y-3">
                  {day.blocks.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-xs font-semibold text-gray-500 w-12 shrink-0 pt-0.5">{b.time}</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{b.title}</p>
                        <p className="text-xs text-gray-500">{b.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <p className="text-xs text-gray-400 text-center pb-4">
          Progress is stored locally in this browser. Compliance and trust-accounting steps are general
          guidance — verify jurisdiction-specific rules with counsel.
        </p>
      </main>
    </div>
  );
}
