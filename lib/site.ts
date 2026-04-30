export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  name: string;
  slug: string;
  description: string;
  summary: string;
  status: string;
  href: string;
  cta: string;
  features: string[];
  mockup: string;
  accent: "electric" | "teal";
  proof?: {
    revenue: string;
    growth: string;
    insight: string;
  };
};

export const company = {
  name: "Sync Labs",
  ceo: "Fahim Kiama",
  coo: "Gwamaka Johas",
email: "kiamafahim@gmail.com",
  domain: "synclabs.io",
  url: "https://synclabs.io",
  headline: "Run your business without the guesswork.",
  subtext:
    "Sync Labs builds intelligent systems that show what's happening, what's next, and what to do — automatically.",
  positioning:
    "Sync Labs builds intelligent systems that run businesses — automatically.",
  promise: "From chaos to control — instantly.",
  vision: "Close the gap between human intent and execution.",
  mission: "Build intelligent systems that remove friction between ideas and results.",
  founderBio:
    "Building systems focused on execution, clarity, and real-world impact.",
  cooBio:
    "Operational discipline, rollout clarity, and systems that make growth easier to manage.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const products: Product[] = [
  {
    name: "E-Manager",
    slug: "e-manager",
    description: "Know your money. Control your business.",
    summary:
      "Track every shilling, understand your performance, and get clear daily actions to grow.",
    status: "LIVE PRODUCT",
    href: "https://e-manager.synclabs.io",
    cta: "Use E-Manager",
    features: [
      "Real-time financial tracking",
      "Profit visibility",
      "Daily action recommendations",
    ],
    mockup: "/mockups/salespro-dashboard.svg",
    accent: "teal",
    // Micro-proof elements
    proof: {
      revenue: "KSh 1.2M",
      growth: "+12%",
      insight: "Expenses increased 12% this week",
    },
  },
  {
    name: "syncrAI",
    slug: "syncrai",
    description: "Your business — running itself.",
    summary:
      "An AI system that connects your workflows, automates operations, and executes tasks across your business.",
    status: "COMING SOON",
    href: "/contact#project-brief",
    cta: "Request Early Access",
    features: [
      "Workflow automation",
      "Task orchestration",
      "AI execution layer",
    ],
    mockup: "/mockups/syncrai-dashboard.svg",
    accent: "electric",
  },
];

export const trustSegments = [
  {
    title: "Solo founders",
    description:
      "Make decisions faster with one clear view of what's happening.",
  },
  {
    title: "Growing teams",
    description:
      "Replace scattered tools with systems that keep work moving.",
  },
  {
    title: "African SMEs",
    description:
      "Built for businesses that need clarity, control, and room to grow.",
  },
];

export const values = [
  {
    title: "Clarity first",
    description:
      "If a business cannot see what's happening, it cannot improve what matters.",
  },
  {
    title: "Systems over patchwork",
    description:
      "We replace fragmented tools with one operating layer that holds the business together.",
  },
  {
    title: "Useful intelligence",
    description:
      "The goal is action, not noise. Software should tell you what to do next.",
  },
];

export const businessChallenges = [
  {
    title: "No real profit visibility",
    description:
      "Too many businesses are selling every day but still cannot see what they actually make.",
  },
  {
    title: "Operations live everywhere",
    description:
      "WhatsApp, spreadsheets, memory, and side notes create confusion instead of control.",
  },
  {
    title: "No clear next move",
    description:
      "When the system is weak, every decision takes too long and every problem costs more.",
  },
];

export const teamTracks = [
  {
    title: "Business Systems",
    description:
      "Map the business flow before building software around it.",
  },
  {
    title: "Execution Design",
    description:
      "Interfaces that reduce friction and keep work moving.",
  },
  {
    title: "Applied Intelligence",
    description:
      "Systems that surface insight, automate follow-through, and tighten control.",
  },
  {
    title: "Operations Infrastructure",
    description:
      "Production-ready infrastructure for teams that need dependable execution.",
  },
];

export const contactExpectations = [
  "A focused review of where your operations are leaking time, money, or visibility.",
  "A clear recommendation on the right system, scope, and rollout path.",
  "A practical next step toward more control across the business.",
];

export const siteKeywords = [
  "Sync Labs",
  "Syncr Labs",
  "AI business infrastructure",
  "business systems",
  "SME software Africa",
  "workflow automation",
  "operations software",
  "East Africa business tools",
];

