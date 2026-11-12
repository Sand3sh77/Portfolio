// Skills, leadership roles and recognition. Keep in sync with the CV
// (LaTeX-CV/parts/cv.tex).

export const skillGroups: { group: string; items: string }[] = [
  { group: "Languages", items: "TypeScript, JavaScript, Python, SQL, C, C++" },
  {
    group: "Frontend",
    items:
      "React, Next.js, React Native, Redux Toolkit, Zustand, TanStack Query, React Hook Form, React Router, Tailwind CSS, shadcn/ui, HTML, CSS/SASS",
  },
  {
    group: "Backend",
    items: "Node.js, Express, NestJS, REST APIs, Socket.io, JWT and OAuth, Prisma, Zod",
  },
  {
    group: "Data and AI",
    items:
      "PostgreSQL, MongoDB, Redis, LLM integration, prompt design, web scraping and crawling, text classification, entity extraction",
  },
  {
    group: "Cloud and DevOps",
    items: "AWS (S3, Elastic Beanstalk), Docker, GitHub Actions, Vercel, Git and GitHub",
  },
  {
    group: "Practices",
    items: "System design, Agile and Scrum, unit testing with Jest, code review, Jira, Slack, Figma",
  },
];

export const leadership: {
  role: string;
  org: string;
  period: string;
  detail: string;
}[] = [
  {
    role: "Coordinator",
    org: "ACS Research, Development and Innovation",
    period: "2025 - Present",
    detail:
      "I coordinate the wing's research, development and innovation work for CSIT students at Prithvi Narayan Campus.",
  },
  {
    role: "Trainer, Digital Literacy Programme",
    org: "Pokhara Metropolitan City Youth Council",
    period: "Dec 2025 - Jan 2026",
    detail:
      "Ran sessions for secondary school students on the basics of AI, staying safe online and using technology responsibly.",
  },
  {
    role: "Student Ambassador, Season 2",
    org: "Fonepay",
    period: "2025",
    detail:
      "One of 150 student ambassadors for Fonepay's digital payments campaign. Also did their Marketing and Design Thinking Masterclass.",
  },
  {
    role: "Tech Lead",
    org: "ACS Research, Development and Innovation",
    period: "2024 - 2025",
    detail: "Led the technical team and the work on the ACS App and website.",
  },
];

// Shown as a plain list under the certificate cards.
export const moreRecognition: { year: string; text: string }[] = [
  {
    year: "2026",
    text: "Letter of Appreciation from the Pokhara Metropolitan City Youth Council for the digital literacy programme",
  },
  {
    year: "2025",
    text: "Token of Appreciation from the Association of CSIT Students for building the ACS App",
  },
  {
    year: "2025",
    text: "Certificate of Appreciation from ACS RDI for my time as Tech Lead",
  },
  { year: "2024", text: "What Is Generative AI?, LinkedIn Learning" },
];
