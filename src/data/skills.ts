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

// Awards and certifications, shown as a bento grid.
// Dates and issuers are taken from the certificates themselves.

export const hackathon = {
  title: "Yantra Hackathon",
  result: "Winner",
  detail: "36-hour hackathon at Pokhara Engineering College",
  date: "June 2024",
  image: "/images/certifications/hackathon.jpg",
};

export const hackerrank = {
  title: "HackerRank certified",
  detail: "Passed HackerRank's role and skill certification tests.",
  date: "Jan 2026",
  certificates: [
    { label: "Software Engineer", href: "/images/certifications/hackerrank-software-engineer.jpg" },
    { label: "Frontend Developer (React)", href: "/images/certifications/hackerrank-frontend-react.jpg" },
    { label: "Node (Basic)", href: "/images/certifications/hackerrank-node.jpg" },
  ],
};

export type RecognitionIcon = "phone" | "school" | "team" | "globe";

export const recognition: {
  title: string;
  issuer: string;
  description: string;
  date: string;
  icon: RecognitionIcon;
  wide?: boolean;
  href?: string;
}[] = [
  {
    title: "Token of Appreciation",
    issuer: "Association of CSIT Students",
    description: "For building the ACS App.",
    date: "2025",
    icon: "phone",
  },
  {
    title: "Letter of Appreciation",
    issuer: "Pokhara Youth Council",
    description: "For teaching school students AI basics and online safety.",
    date: "2026",
    icon: "school",
  },
  {
    title: "Certificate of Appreciation",
    issuer: "ACS Research, Development and Innovation",
    description: "For outstanding service as Tech Lead of the student tech team.",
    date: "2025",
    icon: "team",
    wide: true,
  },
  {
    title: "PNC-Muroran Research Workshop",
    issuer: "Prithvi Narayan Campus with Muroran Institute of Technology, Japan",
    description: "A week-long collaborative research workshop.",
    date: "Mar 2024",
    icon: "globe",
    wide: true,
    href: "/images/certifications/collaboration.jpg",
  },
];
