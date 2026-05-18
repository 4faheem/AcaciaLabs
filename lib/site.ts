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
  problem: string;
  intelligenceLayer: string;
  coordinationValue: string;
  infrastructureRole: string;
  features: string[];
  mockup: string;
  accent: "electric" | "cyan" | "gold";
  metrics?: {
    label: string;
    value: string;
  }[];
  proof?: {
    revenue: string;
    growth: string;
    insight: string;
  };
};

export const company = {
  name: "Acacia Labs",
  ceo: "Fahim Kiama",
  coo: "Gwamaka Johas",
  email: "kiamafahim@gmail.com",
  location: "Tanzania",
  domain: "acacialabs.co.tz",
  url: "https://acacialabs.co.tz",
  headline: "Infrastructure for African Enterprise.",
  subtext: "Operational intelligence engineered for African commerce.",
  positioning: "Building intelligent operational systems for African business.",
  promise: "Built for real businesses operating in real conditions.",
  vision: "To define the operating layer of African enterprise.",
  mission: "To build the operational systems powering modern African business.",
  philosophy: "Acacia Labs builds operational systems that help African businesses coordinate workflows, improve visibility, and scale more efficiently.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const products: Product[] = [
  {
    name: "syncAI",
    slug: "syncai",
    description: "Workflow automation and operational coordination platform.",
    summary: "An intelligent platform that automates workflows, improves team coordination, and simplifies business operations.",
    status: "COMING SOON",
    href: "/systems#syncai",
    cta: "Request Systems Access",
    problem: "Manual workflows and disconnected operations that slow down business execution.",
    intelligenceLayer: "An automation system designed to streamline workflows and improve operational efficiency.",
    coordinationValue: "Connects workflows, communication, and operations into one coordinated system.",
    infrastructureRole: "Provides a centralized system for managing operational workflows.",
    features: [
      "Workflow automation",
      "Team coordination",
      "Real-time operational updates",
    ],
    mockup: "/mockups/syncrai-dashboard.svg",
    accent: "electric",
    metrics: [
      { label: "Processing Speed", value: "< 50ms" },
      { label: "Automation Index", value: "88.4%" },
    ]
  },
  {
    name: "E-Manager",
    slug: "e-manager",
    description: "Business operations and financial tracking platform.",
    summary: "Track transactions, monitor business performance, and improve operational visibility in real time.",
    status: "LIVE",
    href: "/systems#e-manager",
    cta: "Initialize Deployment",
    problem: "Poor financial visibility and disconnected transaction tracking across business operations.",
    intelligenceLayer: "Real-time financial tracking designed for African business environments.",
    coordinationValue: "Turns operational and financial data into actionable business insights.",
    infrastructureRole: "A centralized system for operational and financial management.",
    features: [
      "Financial tracking",
      "Operational visibility",
      "Business performance insights",
    ],
    mockup: "/mockups/salespro-dashboard.svg",
    accent: "cyan",
    metrics: [
      { label: "Active Workflows", value: "2.4k+" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
    proof: {
      revenue: "$1.2M+",
      growth: "+142%",
      insight: "Financial tracking node operating at 99.99% ledger accuracy across mobile networks."
    }
  },
];

export const operationalPrinciples = [
  {
    title: "Systems over hype",
    description: "We prioritize structural reliability and architectural integrity over ephemeral market trends.",
  },
  {
    title: "Precision execution",
    description: "Operational excellence is not an objective; it is a baseline requirement for every system we deploy.",
  },
  {
    title: "African reality first",
    description: "Our engineering begins with the unique structural requirements and operational constraints of the continent.",
  },
  {
    title: "Intelligence embedded everywhere",
    description: "Intelligent coordination is not an additive feature; it is the fundamental layer of modern enterprise.",
  },
  {
    title: "Operational clarity",
    description: "We transform fragmented data and disconnected workflows into unified strategic visibility.",
  },
  {
    title: "Design with authority",
    description: "Our interfaces communicate clarity, structural reliability, and institutional trust.",
  },
];

export const siteKeywords = [
  "Acacia Labs",
  "African AI Infrastructure",
  "Enterprise Software Africa",
  "Intelligent Automation",
  "East Africa Business Systems",
  "AI Operating System",
  "Operational Excellence",
  "Resilient Engineering",
];
