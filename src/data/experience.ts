// Work history and education. Keep in sync with the CV (LaTeX-CV/parts/cv.tex).

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
  tags: string[];
};

export const jobs: Job[] = [
  {
    role: "Software Engineer (Project Lead)",
    company: "AiGeeks",
    period: "Feb 2026 – Present",
    location: "United Arab Emirates · Remote",
    current: true,
    highlights: [
      "Lead development of an AI-powered OSINT platform that collects open-source data and uses LLMs to extract and analyse entities.",
      "Built the Python web-scraping and text-classification pipeline that feeds the analysis layer.",
      "Own system design and architecture decisions for the multi-service application.",
      "Mentor the team's interns and review their code before it ships.",
    ],
    tags: ["Python", "LLM integration", "Web scraping", "System design", "Mentoring"],
  },
  {
    role: "Frontend Developer",
    company: "Nipuna Prabhidhik Sewa",
    period: "Jan 2025 – Oct 2025",
    location: "Pokhara, Nepal",
    current: false,
    highlights: [
      "Built and maintained large Accounting and CRM web applications in React and Tailwind CSS.",
      "Delivered features in Agile sprints with backend developers and designers, matching Figma designs pixel-accurately.",
      "Wrote Jest unit tests, reviewed code and fixed production bugs.",
      "Promoted to Junior Frontend Developer early for strong performance.",
    ],
    tags: ["React", "Tailwind CSS", "Jest", "Figma", "Agile"],
  },
  {
    role: "Full-Stack Web & Mobile Developer",
    company: "Freelance",
    period: "Jan 2022 – Present",
    location: "Remote · clients in Australia, Canada, Japan and Nepal",
    current: true,
    highlights: [
      "Delivered full-stack web and mobile projects for clients and students across four countries.",
      "Built the official website for the Association of CSIT Students (ACS), Prithvi Narayan Campus.",
      "Ran several projects in parallel, tracking work in Jira and coordinating with clients over Slack.",
    ],
    tags: ["Full-stack web", "Mobile", "Client delivery", "Jira"],
  },
];

export const education = {
  degree: "B.Sc. Computer Science & Information Technology",
  school: "Tribhuvan University · Prithvi Narayan Campus, Pokhara",
  period: "2022 – Expected 2027",
  detail: "GPA 3.45 / 4.0 across semesters I–VI",
};
