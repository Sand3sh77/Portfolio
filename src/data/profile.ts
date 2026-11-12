// Single source of truth for personal details and headline copy.
// Keep this in sync with the CV (LaTeX-CV/shared/info.tex and parts/cv.tex).

export const profile = {
  name: "Sandesh Subedi",
  title: "Software Engineer",
  focus: "Full-Stack Development & LLM / AI Integration",
  location: "Pokhara, Nepal",
  currentRole: "Project Lead at AiGeeks",
  siteUrl: "https://subedisandesh7.com.np",
  domain: "subedisandesh7.com.np",
  email: "subedisandesh0123@gmail.com",
  resumeUrl: "/files/Resume_Sandesh_Subedi.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/sandesh-subedi-58735b283",
    github: "https://github.com/Sand3sh77",
    facebook: "https://www.facebook.com/sandesh.subedi.3979/",
    instagram: "https://www.instagram.com/sand3sh77/",
    whatsapp:
      "https://wa.me/9779866048224?text=Hi%20there,%20I%27d%20like%20to%20discuss%20a%20project",
  },
  summary:
    "I build and ship web and mobile products with React, Next.js, React Native and Node.js. Right now I lead an AI-powered OSINT platform, where I designed the architecture and built the Python scraping and LLM-based entity analysis pipeline.",
} as const;

export const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Hello Sandesh"
)}`;

export const heroFacts = [
  { value: "3+ years", label: "shipping web and mobile products" },
  { value: "4 countries", label: "with freelance clients" },
  { value: "Winner", label: "Yantra Hackathon 2024" },
] as const;

export const aboutParagraphs = [
  "I'm a software engineer from Pokhara, Nepal, with 3+ years of experience building and shipping web and mobile products. Today I lead development of an AI-powered OSINT platform at AiGeeks. It collects open-source data and uses LLMs to extract and analyse entities.",
  "Before that I built large accounting and CRM applications at Nipuna Prabhidhik Sewa, and since 2022 I have delivered freelance projects for clients in Australia, Canada, Japan and Nepal. I enjoy owning features end to end, from the system design to the last production bug.",
  "Alongside work I'm completing a B.Sc. in Computer Science & IT at Tribhuvan University, where I coordinate the research and innovation wing of the Association of CSIT Students.",
] as const;

export type FocusIcon = "architecture" | "ai" | "product" | "leadership";

export const focusAreas: {
  icon: FocusIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: "architecture",
    title: "Architecture & system design",
    description:
      "I own the system design and architecture decisions for a multi-service application.",
  },
  {
    icon: "ai",
    title: "LLM & data pipelines",
    description:
      "I built the Python web-scraping and text-classification pipeline that feeds LLM-based entity extraction.",
  },
  {
    icon: "product",
    title: "Full-stack product delivery",
    description:
      "React, Next.js and React Native on the front, Node.js, NestJS and PostgreSQL behind it, shipped with Docker and CI/CD.",
  },
  {
    icon: "leadership",
    title: "Leading & mentoring",
    description:
      "I mentor the team's interns, review their code before it ships, and have led a student tech team.",
  },
];
