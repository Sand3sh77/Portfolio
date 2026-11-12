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

export type Recognition = {
  title: string;
  issuer: string;
  date: string;
  note?: string;
  // Path to the certificate image, when there is one to show.
  image?: string;
};

// Newest first. Dates and issuers are taken from the certificates themselves.
export const awards: Recognition[] = [
  {
    title: "Letter of Appreciation",
    issuer: "Pokhara Metropolitan City Youth Council",
    date: "2026",
    note: "For the digital literacy programme",
  },
  {
    title: "Token of Appreciation",
    issuer: "Association of CSIT Students",
    date: "2025",
    note: "For building the ACS App",
  },
  {
    title: "Certificate of Appreciation",
    issuer: "ACS Research, Development and Innovation",
    date: "2025",
    note: "For my time as Tech Lead",
  },
  {
    title: "Winner, Yantra Hackathon",
    issuer: "Pokhara Engineering College",
    date: "Jun 2024",
    note: "36-hour hackathon",
    image: "/images/certifications/hackathon.jpg",
  },
];

export const certifications: Recognition[] = [
  {
    title: "Remote Work Masterclass",
    issuer: "Remote Job Nepal",
    date: "Sep 2026",
    image: "/images/certifications/remote-work-masterclass.jpg",
  },
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    date: "Jan 2026",
    image: "/images/certifications/hackerrank-software-engineer.jpg",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Jan 2026",
    image: "/images/certifications/hackerrank-frontend-react.jpg",
  },
  {
    title: "Node (Basic)",
    issuer: "HackerRank",
    date: "Jan 2026",
    image: "/images/certifications/hackerrank-node.jpg",
  },
  {
    title: "30 Days Learning Challenge",
    issuer: "Learning Utsav",
    date: "Nov 2024",
    image: "/images/certifications/30dayschallenge.png",
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    date: "2024",
  },
  {
    title: "PNC-Muroran Collaborative Research Workshop",
    issuer: "Prithvi Narayan Campus",
    date: "Mar 2024",
    image: "/images/certifications/collaboration.jpg",
  },
];
