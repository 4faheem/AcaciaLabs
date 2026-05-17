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
  domain: "acacialabs.io",
  url: "https://acacialabs.io",
  headline: "Infrastructure for African Enterprise.",
  subtext: "Operational intelligence engineered for African commerce.",
  positioning: "An operational intelligence infrastructure company building AI-native systems for African enterprise.",
  promise: "Built for real businesses operating in real conditions.",
  vision: "To define the operating layer of African enterprise.",
  mission: "To engineer the future operating systems of African enterprise.",
  philosophy: "Acacia Labs is building AI-native operational systems designed for the realities of African commerce — transforming fragmented execution into scalable infrastructure.",
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
    description: "Intelligent orchestration and workflow automation layer.",
    summary: "A neural business system that automates workflows, coordinates cross-functional tasks, and executes operations at machine speed.",
    status: "BETA ACCESS",
    href: "/systems#syncai",
    cta: "Request Systems Access",
    problem: "Fragmented processes, manual operational handoffs, and coordination lag that limits execution speed.",
    intelligenceLayer: "A distributed neural task routing and workflow execution engine built for Sub-Saharan operations.",
    coordinationValue: "Syncs sales pipelines, supply chain updates, and customer communications into a singular automated loop.",
    infrastructureRole: "Acts as the central business automation layer to eliminate operational guesswork.",
    features: [
      "Neural workflow orchestration",
      "Distributed execution routing",
      "Real-time task synchronization",
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
    description: "Operational control and financial intelligence for enterprise scale.",
    summary: "Track every transaction, map real-time profitability architecture, and receive predictive strategic recommendations.",
    status: "SYSTEM ACTIVE",
    href: "/systems#e-manager",
    cta: "Initialize Deployment",
    problem: "Unseen cash-flow leaks, transaction fragmentation across mobile networks, and lack of real-time profitability models.",
    intelligenceLayer: "Deep transaction tracing engine integrated directly with local financial pipelines and carrier channels.",
    coordinationValue: "Transforms raw ledger transactions into actionable financial alerts and clear profitability pathways.",
    infrastructureRole: "The primary operational control ledger and financial intelligence operating layer.",
    features: [
      "Real-time profit tracking",
      "Carrier network integrations",
      "Actionable intelligence alerts",
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
    description: "Neural coordination is not an additive feature; it is the fundamental layer of modern enterprise.",
  },
  {
    title: "Operational clarity",
    description: "We transform fragmented data and disconnected workflows into unified strategic visibility.",
  },
  {
    title: "Design with authority",
    description: "Our interfaces communicate technical dominance, structural reliability, and institutional trust.",
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
