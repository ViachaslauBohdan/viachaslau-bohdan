export const site = {
  name: "Viachaslau Bohdan",
  shortName: "Viachaslau",
  role: "Senior software developer",
  location: "Zgorzała, Poland",
  email: "slawandr1@gmail.com",
  calendly: "https://calendly.com/slawandr1/30min",
  company: {
    name: "Slavaro Software",
    url: "https://slavaro-landing.vercel.app",
  },
  description:
    "Viachaslau Bohdan is a senior software developer who designs, builds, and ships production web products for founders, CTOs, and companies. Company work runs through Slavaro Software.",
} as const

export const nav = [
  { name: "Work", href: "/#work" },
  { name: "For CTOs", href: "/#ctos" },
  { name: "Services", href: "/#services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
] as const

export const work = [
  {
    title: "Ship the product",
    text: "Web applications, SaaS, customer portals, and internal tools — from a tight scope through architecture, build, and production launch.",
  },
  {
    title: "Finish what stalled",
    text: "Half-built MVPs, AI prototypes, and codebases that lost their developer. I get them stable enough for real users.",
  },
  {
    title: "Put AI where it saves work",
    text: "Document assistants, reporting, and workflow automation on top of systems a company already uses — not a demo that never leaves the notebook.",
  },
] as const

export const forCtos = [
  {
    title: "Senior capacity without a hiring cycle",
    text: "When the roadmap is larger than the team, I join as the engineer who owns a slice of delivery — scope, build, and handover.",
  },
  {
    title: "Decisions you can defend",
    text: "Architecture and trade-offs explained in the language of risk, cost, and what can wait. You stay in control of the product.",
  },
  {
    title: "Code your team can keep",
    text: "TypeScript, React, Node, PostgreSQL, AWS. Documented enough that your engineers are not stuck with a black box after I leave.",
  },
  {
    title: "Direct contact",
    text: "You talk to the person writing the software. No account manager, no junior passed off as a senior.",
  },
] as const

export const services = [
  {
    name: "Frontend engineering",
    text: "Production React, Next.js, Angular, and Vue applications. Architecture, design systems, and interfaces a team can keep shipping.",
  },
  {
    name: "Full-stack delivery",
    text: "Web products from scope through launch: TypeScript on the frontend, Node.js and NestJS on the backend, AWS and Docker in production.",
  },
  {
    name: "Agentic AI",
    text: "RAG pipelines, vector search, and LLM integrations (OpenAI, Claude) that take real work off a team — reporting, knowledge, and multi-step workflows.",
  },
  {
    name: "Operational automation",
    text: "Compliance dashboards, automated reports, and the manual handoffs between systems that a company still does by hand.",
  },
] as const

export const experience = [
  { company: "Klarna", detail: "Compliance platform and AI reporting automation" },
  { company: "SEKAI", detail: "Digital twin platforms and 3D web applications" },
  { company: "Haptiq", detail: "Enterprise AI and micro-frontend architecture" },
  { company: "Tenerifly", detail: "MVP built end to end from zero" },
] as const

export const stack = [
  "React",
  "Vue",
  "Angular",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "AWS",
  "Docker",
  "LLM APIs",
  "RAG",
] as const
