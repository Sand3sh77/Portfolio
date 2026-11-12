// Work history and education. Keep in sync with the CV (LaTeX-CV/parts/cv.tex).

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string;
};

export const jobs: Job[] = [
  {
    role: "Software Engineer, Project Lead",
    company: "AiGeeks",
    period: "Feb 2026 - Present",
    location: "UAE, remote",
    highlights: [
      "Lead development of an AI-powered OSINT platform that collects open-source data and uses LLMs to extract and analyse entities.",
      "Built the Python scraping and text-classification pipeline that feeds the analysis layer.",
      "Make the system design and architecture calls for the multi-service app.",
      "Mentor the team's interns and review their code before it ships.",
    ],
    stack: "Python, LLMs, web scraping, text classification",
  },
  {
    role: "Frontend Developer",
    company: "Nipuna Prabhidhik Sewa",
    period: "Jan 2025 - Oct 2025",
    location: "Pokhara, Nepal",
    highlights: [
      "Built and maintained large accounting and CRM web apps.",
      "Shipped features in Agile sprints with backend developers and designers, matching Figma designs closely.",
      "Wrote Jest unit tests, reviewed code and fixed production bugs.",
      "Promoted early for strong performance.",
    ],
    stack: "React, Tailwind CSS, Jest, Figma",
  },
  {
    role: "Full-Stack Web and Mobile Developer",
    company: "Freelance",
    period: "Jan 2022 - Present",
    location: "Remote",
    highlights: [
      "Delivered web and mobile projects for clients in Australia, Canada, Japan and Nepal.",
      "Built the official website for the Association of CSIT Students at Prithvi Narayan Campus.",
      "Ran several projects at once, tracking work in Jira and talking to clients over Slack.",
    ],
    stack: "React, Next.js, React Native, Node.js",
  },
];

export const education = {
  degree: "B.Sc. Computer Science and Information Technology",
  school: "Tribhuvan University, Prithvi Narayan Campus",
  period: "2022 - 2027 (expected)",
  detail: "GPA 3.45 / 4.0 over semesters I to VI",
};
