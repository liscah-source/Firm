# DECISION LOG

Append-only record of decisions and dashboards. The CHRO tool reads this before every response and adds a new entry after each session, so prior numbers and choices carry forward.

Each entry uses this format:

```
## YYYY-MM-DD — <decision or dashboard>
- **Key numbers:** <figures with source tags per audit-rules.md>
- **Outcome:** <what was decided, shipped, or deferred>
```

---

<!-- New entries appended below, newest first. -->

## 2026-07-08 — Market Comp Benchmark dashboard (interactive HTML)
- **Market data grade:** ALL market P50 = DIRECTIONAL. Survey-grade (Radford/Mercer/WTW) not accessible (paywalled). Sources: Levels.fyi 2025, BLS OEWS May 2024 (SW dev median base $133,080), Tecronix 2025 US Tech Salary Guide, KORE1 2025-26 (VP eng placed base $268K; CTO $183-390K), Built In/Customer Success Collective (Sales & CS base).
- **Model (AI-INFERRED):** market P50 base = level spine × job-family factor (base-only); VP/C use spine directly. Spine: IC1 120K/IC2 140K/IC3 175K/IC4 205K/IC5 240K/M1 200K/M2 240K/M3 290K/VP 285K/C 400K. Factors: SWE/PM 1.00, Data 0.95, Design 0.86, Legal 1.12, Finance 0.82, Mktg/IT 0.80, People 0.74, CS 0.70, Sales 0.66.
- **Key results (base-weighted):** Overall +6.1% above market (compa 1.06). 24 employees flagged >10% below their family-level P50; $554K to lift them to P50 ($783K for all below-market). Above/At/Below = 86/18/48. VP runs +29% (n=4). Worst flags mostly Sales/Support base (commission excluded) — e.g., SDR -27%, IT Support -24%, Financial Analyst -23%.
- **Outcome:** Shipped Market Comp Benchmark Dashboard.html to project folder. Every market figure tagged DIRECTIONAL with source; prominent banner that this is not fundable without survey-grade validation and that Sales/CS base excludes variable comp. NEXT: swap in survey-grade P50 by (family, level) before any off-cycle remediation.

## 2026-07-08 — Employee Analytics dashboard (interactive HTML)
- **Key numbers (all USER-PROVIDED from Sample Employee Dataset.csv, n=152; averages/percentages AI-INFERRED):** Headcount 152. Avg base salary $172,586 (median $162,500). Avg tenure 2.6 yrs. Manager+Exec 18.4% (IC 124 / Mgr 20 / Exec 8). Offices: SF 79, Remote 23, Austin 19, NY 16, Denver 15. Employment type: FT 139, Contractor 12, PT 1. Avg salary by category — IC $150,089 / Manager $227,850 / Exec $383,125 (AI-INFERRED). Largest job family: Software Engineering (47).
- **Outcome:** Shipped self-contained interactive HTML (Chart.js CDN) to project folder: filters (office/level/family/type), 4 KPI tiles, headcount by office, salary histogram w/ median+mean lines, level breakdown, tenure bands, avg salary by level, employment-type donut, top-job-families table. Source tags inline per audit-rules.md. No market benchmark applied — flagged that comp-vs-market needs SURVEY-GRADE data (separate dashboard). company-profile.md still blank.
