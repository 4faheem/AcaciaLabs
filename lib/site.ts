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
};

export const company = {
  name: "Sync Labs",
  ceo: "Fahim Kiama",
  coo: "Gwamaka Johas",
  email: "hello@synclabs.io",
  domain: "synclabs.io",
  url: "https://synclabs.io",
  headline: "Run your business without the guesswork.",
  subtext:
    "Sync Labs builds intelligent systems that show you what’s happening, what’s next, and what to do — automatically.",
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
  { label: "Enterprise", href: "/" },
  { label: "Pricing", href: "/products" },
  { label: "Customers", href: "/about" },
  { label: "Resources", href: "/contact" },
];

export const products: Product[] = [
  {
    name: "syncrAI",
    slug: "syncrai",
    description: "Your work, intelligently organized.",
    summary:
      "An AI system that automates workflows, coordinates tasks, and executes operations across your business.",
    status: "Coming soon",
    href: "/contact#project-brief",
    cta: "Join the waitlist",
    features: [
      "Workflow automation",
      "Task orchestration",
      "AI-driven execution",
    ],
    mockup: "/mockups/syncrai-dashboard.svg",
    accent: "electric",
  },
  {
    name: "E-Manager",
    slug: "e-manager",
    description: "Know your numbers. Grow your business.",
    summary:
      "A simple, powerful system that tracks your money, shows your performance, and tells you what to do next.",
    status: "Live",
    href: "https://e-manager.synclabs.io",
    cta: "Visit Product",
    features: [
      "Financial tracking",
      "Smart insights",
      "Daily action recommendations",
    ],
    mockup: "/mockups/salespro-dashboard.svg",
    accent: "teal",
  },
];

export const trustSegments = [
  {
    title: "Solo founders",
    description:
      "Make decisions faster with one clear view of what is happening.",
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
      "If a business cannot see what is happening, it cannot improve what matters.",
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
