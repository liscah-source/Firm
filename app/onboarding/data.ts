// Single source of truth for the new-hire onboarding program.
// Edit this file to change the checklist, documents, or first-week schedule.

export type Role = "attorney" | "paralegal" | "operations";

export type Category =
  | "Paperwork"
  | "IT & Access"
  | "Compliance & Ethics"
  | "Training"
  | "People & Culture"
  | "Role Ramp";

export type Owner = "New Hire" | "HR / Admin" | "Manager" | "IT";

export type Phase =
  | "Before Day 1"
  | "Day 1"
  | "Week 1"
  | "First 30 Days"
  | "30–90 Days";

export interface Task {
  id: string;
  title: string;
  description: string;
  category: Category;
  owner: Owner;
  phase: Phase;
  roles: Role[];
}

export interface OnboardingDoc {
  id: string;
  name: string;
  description: string;
  owner: Owner;
  roles: Role[];
}

export interface ScheduleBlock {
  time: string;
  title: string;
  detail: string;
}

export interface ScheduleDay {
  label: string;
  blocks: ScheduleBlock[];
}

export const ROLES: { id: Role; label: string; blurb: string; icon: string }[] = [
  {
    id: "attorney",
    label: "Attorney",
    blurb: "Associate or of-counsel handling client matters and appearing on the record.",
    icon: "⚖️",
  },
  {
    id: "paralegal",
    label: "Paralegal",
    blurb: "Supports matters, drafting, filings, and client intake under attorney supervision.",
    icon: "📑",
  },
  {
    id: "operations",
    label: "Operations / Admin",
    blurb: "Runs intake, billing, scheduling, and day-to-day firm operations.",
    icon: "🗂️",
  },
];

export const PHASES: Phase[] = [
  "Before Day 1",
  "Day 1",
  "Week 1",
  "First 30 Days",
  "30–90 Days",
];

export const CATEGORY_META: Record<Category, { color: string; icon: string }> = {
  Paperwork: { color: "#6B7280", icon: "📝" },
  "IT & Access": { color: "#2563EB", icon: "💻" },
  "Compliance & Ethics": { color: "#B91C1C", icon: "🛡️" },
  Training: { color: "#0B5B7F", icon: "🎓" },
  "People & Culture": { color: "#7C3AED", icon: "🤝" },
  "Role Ramp": { color: "#047857", icon: "🚀" },
};

// ---- The program ----------------------------------------------------------

export const TASKS: Task[] = [
  // Before Day 1
  {
    id: "offer-signed",
    title: "Signed offer letter on file",
    description: "Countersigned offer returned and saved to the personnel file.",
    category: "Paperwork",
    owner: "HR / Admin",
    phase: "Before Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "employment-agreement",
    title: "Employment agreement executed",
    description: "Employment/engagement terms, at-will status, and compensation acknowledged.",
    category: "Paperwork",
    owner: "New Hire",
    phase: "Before Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "confidentiality-ip",
    title: "Confidentiality, privilege & IP agreement",
    description:
      "Client confidentiality, attorney-client privilege handling, and assignment of work product signed before any access to client data.",
    category: "Compliance & Ethics",
    owner: "New Hire",
    phase: "Before Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "i9-w4",
    title: "I-9, W-4 & state tax forms",
    description: "Employment eligibility (I-9) verified and payroll tax forms completed.",
    category: "Paperwork",
    owner: "New Hire",
    phase: "Before Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "direct-deposit",
    title: "Direct deposit & benefits enrollment",
    description: "Banking details and benefits elections submitted to payroll.",
    category: "Paperwork",
    owner: "New Hire",
    phase: "Before Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "background-conflicts",
    title: "Background & conflicts pre-check",
    description:
      "Background check cleared and an initial conflicts screen run against the new hire's prior clients and employers.",
    category: "Compliance & Ethics",
    owner: "HR / Admin",
    phase: "Before Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "bar-verification",
    title: "Bar admission & good-standing verified",
    description:
      "License status confirmed with the state bar; jurisdictions of admission recorded. Flag any pending admissions or CLE gaps.",
    category: "Compliance & Ethics",
    owner: "HR / Admin",
    phase: "Before Day 1",
    roles: ["attorney"],
  },
  {
    id: "malpractice-add",
    title: "Added to malpractice coverage",
    description: "New attorney added to the firm's professional liability policy before taking on matters.",
    category: "Compliance & Ethics",
    owner: "HR / Admin",
    phase: "Before Day 1",
    roles: ["attorney"],
  },
  {
    id: "provision-accounts",
    title: "Provision email & core accounts",
    description: "Firm email, password manager, and MFA set up ahead of the start date.",
    category: "IT & Access",
    owner: "IT",
    phase: "Before Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "workspace-ready",
    title: "Workspace & equipment ready",
    description: "Laptop imaged, encrypted, and any physical workspace or remote kit shipped.",
    category: "IT & Access",
    owner: "IT",
    phase: "Before Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "welcome-email",
    title: "Welcome email + first-day logistics sent",
    description: "Start time, location/dial-in, dress code, parking, and point of contact sent to the new hire.",
    category: "People & Culture",
    owner: "HR / Admin",
    phase: "Before Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },

  // Day 1
  {
    id: "welcome-orientation",
    title: "Welcome & firm orientation",
    description: "Meet the principal, walk through the firm's mission, values, and how it serves clients.",
    category: "People & Culture",
    owner: "Manager",
    phase: "Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "it-login",
    title: "IT walkthrough & logins confirmed",
    description: "Sign in to email, calendar, VPN, and the password manager; confirm MFA works.",
    category: "IT & Access",
    owner: "IT",
    phase: "Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "handbook",
    title: "Read & acknowledge employee handbook",
    description: "Policies, PTO, remote-work, and technology-use acknowledged in writing.",
    category: "Paperwork",
    owner: "New Hire",
    phase: "Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "pms-access",
    title: "Practice management system access",
    description: "Access granted to the matter/case management and document system (e.g., Clio) with correct role permissions.",
    category: "IT & Access",
    owner: "IT",
    phase: "Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "team-intros",
    title: "Team introductions",
    description: "Meet everyone at the firm and learn who owns what. Assign an onboarding buddy.",
    category: "People & Culture",
    owner: "Manager",
    phase: "Day 1",
    roles: ["attorney", "paralegal", "operations"],
  },

  // Week 1
  {
    id: "confidentiality-training",
    title: "Confidentiality & privilege training",
    description: "How the firm handles privileged material, client secrets, secure communication, and document retention.",
    category: "Compliance & Ethics",
    owner: "Manager",
    phase: "Week 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "conflicts-process",
    title: "Conflicts-of-interest process training",
    description: "How to run a conflicts check before opening a matter and how to escalate a potential conflict.",
    category: "Compliance & Ethics",
    owner: "Manager",
    phase: "Week 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "time-billing",
    title: "Time entry & billing training",
    description: "Timekeeping standards, billing codes, retainer/credit tracking, and daily time-capture expectations.",
    category: "Training",
    owner: "Manager",
    phase: "Week 1",
    roles: ["attorney", "paralegal"],
  },
  {
    id: "trust-accounting",
    title: "Trust accounting / IOLTA overview",
    description: "Client trust-fund rules and firm procedures for any handling of client funds. Verify with counsel on jurisdiction-specific rules.",
    category: "Compliance & Ethics",
    owner: "Manager",
    phase: "Week 1",
    roles: ["attorney", "operations"],
  },
  {
    id: "efiling-access",
    title: "E-filing & court/USPTO access",
    description: "Set up e-filing credentials and, for IP work, confirm USPTO access for trademark matters.",
    category: "IT & Access",
    owner: "IT",
    phase: "Week 1",
    roles: ["attorney", "paralegal"],
  },
  {
    id: "intake-training",
    title: "Client intake & matter opening",
    description: "Walk the intake-to-engagement flow: consult, engagement letter, conflicts, matter setup, and package selection.",
    category: "Training",
    owner: "Manager",
    phase: "Week 1",
    roles: ["paralegal", "operations"],
  },
  {
    id: "templates-tour",
    title: "Template & knowledge library tour",
    description: "Where the firm's contract templates, formation docs, and playbooks live and how to use them.",
    category: "Training",
    owner: "Manager",
    phase: "Week 1",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "shadow",
    title: "Shadow a live matter or client call",
    description: "Sit in on a client call or matter to see how the firm delivers a Strategic package end-to-end.",
    category: "Role Ramp",
    owner: "Manager",
    phase: "Week 1",
    roles: ["attorney", "paralegal", "operations"],
  },

  // First 30 Days
  {
    id: "first-matter",
    title: "First matter / project assigned",
    description: "Own a first real deliverable with supervision and a clear review checkpoint.",
    category: "Role Ramp",
    owner: "Manager",
    phase: "First 30 Days",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "goals-30",
    title: "30-day goals set",
    description: "Manager and new hire agree on what good looks like at 30, 60, and 90 days — each tied to a firm outcome.",
    category: "Role Ramp",
    owner: "Manager",
    phase: "First 30 Days",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "cle-plan",
    title: "CLE / licensing plan confirmed",
    description: "Continuing legal education requirements and deadlines mapped for the year.",
    category: "Compliance & Ethics",
    owner: "HR / Admin",
    phase: "First 30 Days",
    roles: ["attorney"],
  },
  {
    id: "checkin-2wk",
    title: "Two-week check-in",
    description: "Short manager check-in: what's clear, what's confusing, what's blocked.",
    category: "People & Culture",
    owner: "Manager",
    phase: "First 30 Days",
    roles: ["attorney", "paralegal", "operations"],
  },

  // 30–90 Days
  {
    id: "checkin-30-60-90",
    title: "30 / 60 / 90-day reviews",
    description: "Structured feedback against the goals set in week one; adjust the ramp as needed.",
    category: "People & Culture",
    owner: "Manager",
    phase: "30–90 Days",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "full-caseload",
    title: "Ramp to full caseload / responsibilities",
    description: "Move from supervised work to owning matters or an operations area independently.",
    category: "Role Ramp",
    owner: "Manager",
    phase: "30–90 Days",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "onboarding-feedback",
    title: "Collect onboarding feedback",
    description: "Ask the new hire what worked and what to fix — feed it back into this checklist.",
    category: "People & Culture",
    owner: "HR / Admin",
    phase: "30–90 Days",
    roles: ["attorney", "paralegal", "operations"],
  },
];

export const DOCUMENTS: OnboardingDoc[] = [
  {
    id: "doc-offer",
    name: "Offer letter (countersigned)",
    description: "Role, start date, compensation, and at-will terms.",
    owner: "HR / Admin",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "doc-employment",
    name: "Employment agreement",
    description: "Full terms of employment and firm policies.",
    owner: "New Hire",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "doc-confidentiality",
    name: "Confidentiality, privilege & IP assignment",
    description: "Protects client confidentiality and assigns work product to the firm.",
    owner: "New Hire",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "doc-i9",
    name: "Form I-9 + supporting ID",
    description: "Employment eligibility verification.",
    owner: "New Hire",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "doc-w4",
    name: "Form W-4 & state withholding",
    description: "Federal and state payroll tax withholding.",
    owner: "New Hire",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "doc-handbook",
    name: "Employee handbook acknowledgment",
    description: "Signed acknowledgment of firm policies.",
    owner: "New Hire",
    roles: ["attorney", "paralegal", "operations"],
  },
  {
    id: "doc-bar",
    name: "Bar license & good-standing certificate",
    description: "Proof of admission for each practicing jurisdiction.",
    owner: "HR / Admin",
    roles: ["attorney"],
  },
  {
    id: "doc-direct-deposit",
    name: "Direct deposit authorization",
    description: "Banking details for payroll.",
    owner: "New Hire",
    roles: ["attorney", "paralegal", "operations"],
  },
];

export const FIRST_WEEK_SCHEDULE: ScheduleDay[] = [
  {
    label: "Day 1 — Welcome",
    blocks: [
      { time: "9:00", title: "Welcome & coffee with the principal", detail: "Mission, values, and how the firm serves clients." },
      { time: "10:00", title: "IT & accounts setup", detail: "Email, calendar, VPN, MFA, password manager." },
      { time: "11:30", title: "Paperwork & handbook", detail: "I-9/W-4, benefits, handbook acknowledgment." },
      { time: "12:30", title: "Team lunch", detail: "Meet the firm; assign an onboarding buddy." },
      { time: "2:00", title: "Practice management walkthrough", detail: "Matter/case system, documents, permissions." },
    ],
  },
  {
    label: "Day 2 — Ethics & confidentiality",
    blocks: [
      { time: "9:30", title: "Confidentiality & privilege training", detail: "Handling privileged material securely." },
      { time: "11:00", title: "Conflicts-of-interest process", detail: "Running a check before opening a matter." },
      { time: "2:00", title: "Template & knowledge library tour", detail: "Where the firm's playbooks and templates live." },
    ],
  },
  {
    label: "Day 3 — Systems & billing",
    blocks: [
      { time: "9:30", title: "Time entry & billing", detail: "Timekeeping standards and retainer/credit tracking." },
      { time: "11:00", title: "E-filing / court / USPTO access", detail: "Credentials for filings and trademark work." },
      { time: "2:00", title: "Client intake & matter opening", detail: "From consult to engagement letter to matter setup." },
    ],
  },
  {
    label: "Day 4 — Shadow",
    blocks: [
      { time: "10:00", title: "Shadow a client call or live matter", detail: "See a Strategic package delivered end-to-end." },
      { time: "2:00", title: "Debrief with buddy", detail: "Questions from the shadow session." },
    ],
  },
  {
    label: "Day 5 — First work & goals",
    blocks: [
      { time: "10:00", title: "First matter / project assigned", detail: "A real deliverable with a review checkpoint." },
      { time: "2:00", title: "Week-1 wrap & 30/60/90 goals", detail: "What good looks like, tied to firm outcomes." },
    ],
  },
];
