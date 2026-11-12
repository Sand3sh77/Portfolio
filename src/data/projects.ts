// Project case studies. Facts come from the CV (LaTeX-CV/parts/cv.tex) and
// from the apps themselves. Do not add numbers or claims that are not true.

export type ProjectImage = {
  src: string;
  alt: string;
  kind: "web" | "phone";
};

export type FlowStep = {
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  kind: "Work" | "Community" | "Side project";
  tagline: string;
  role: string;
  period: string;
  cover?: string;
  liveUrl?: string;
  liveLabel?: string;
  confidential?: boolean;
  overview: string[];
  responsibilities: string[];
  flowTitle?: string;
  flow?: FlowStep[];
  features: string[];
  stack: string[];
  outcome?: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "osint-platform",
    title: "AI-powered OSINT platform",
    kind: "Work",
    tagline:
      "Collects open-source data and uses LLMs to extract and analyse the entities in it.",
    role: "Project Lead",
    period: "Since 2026",
    confidential: true,
    overview: [
      "Open-source information is spread across many sites and formats. This platform collects it and turns it into structured entities that can be analysed.",
      "I lead the project at AiGeeks. The product is confidential, so I can't show screens or talk about clients here. What I can describe is my part in it and the rough shape of the system.",
    ],
    responsibilities: [
      "Lead development of the platform.",
      "Make the system design and architecture decisions for the multi-service app.",
      "Built the Python scraping and text-classification pipeline that feeds the analysis layer.",
      "Mentor the team's interns and review their code before it ships.",
    ],
    flowTitle: "Roughly how data moves through it",
    flow: [
      { label: "Open sources", detail: "Public web data" },
      { label: "Collection", detail: "Python scraping and crawling" },
      { label: "Classification", detail: "Text classification" },
      { label: "Extraction", detail: "LLM-based entity extraction" },
      { label: "Analysis", detail: "Entities ready to work with" },
    ],
    features: [
      "Collects open-source data by scraping and crawling.",
      "Classifies the collected text.",
      "Uses an LLM to extract and analyse entities.",
      "Runs as several services rather than one app.",
    ],
    stack: [
      "Python",
      "LLM integration",
      "Prompt design",
      "Web scraping",
      "Text classification",
      "Entity extraction",
    ],
    images: [],
  },
  {
    slug: "acs-app",
    title: "ACS App",
    kind: "Community",
    tagline:
      "Notices, events and study materials for CSIT students at Prithvi Narayan Campus, in one app.",
    role: "Lead Developer",
    period: "Since 2024",
    cover: "/images/projects/acs-cover.jpg",
    overview: [
      "The ACS App puts notices, event updates and semester-wise study materials in one place for BSc CSIT students at Prithvi Narayan Campus. It belongs to the Association of CSIT Students (ACS).",
      "I built it as lead developer while I was Tech Lead of the association's Research, Development and Innovation wing.",
    ],
    responsibilities: [
      "Built the app in React Native and TypeScript.",
      "Led the technical team as Tech Lead of ACS RDI.",
    ],
    features: [
      "Notices and event updates from the association.",
      "Study materials sorted by semester and subject, with chapters and question banks.",
      "Admin accounts that can post notices and upload materials from inside the app.",
      "Sign-in, profile editing, and a feedback and queries form.",
    ],
    stack: ["React Native", "TypeScript"],
    outcome:
      "The Association of CSIT Students gave me a Token of Appreciation for it in 2025.",
    images: [
      {
        src: "/images/projects/acs-home.jpg",
        alt: "ACS App home screen with Notices, Study Materials, Events, About Us and Feedback tiles",
        kind: "phone",
      },
      {
        src: "/images/projects/acs-question-banks.jpg",
        alt: "ACS App subject screen showing the Question Banks tab with a downloadable paper",
        kind: "phone",
      },
      {
        src: "/images/projects/acs-add-material.jpg",
        alt: "ACS App form for an admin to add study material",
        kind: "phone",
      },
    ],
  },
  {
    slug: "quizhunt",
    title: "QuizHunt",
    kind: "Side project",
    tagline: "A place to make quizzes, play other people's and share them.",
    role: "Full-stack developer",
    period: "Since 2024",
    cover: "/images/projects/quizhunthome.png",
    liveUrl: "https://quiz-hunt.vercel.app",
    liveLabel: "quiz-hunt.vercel.app",
    overview: [
      "QuizHunt lets anyone create a quiz, play quizzes other people made and share them. I built the React front end and the Node.js back end.",
      "It's live on the web and published on the Google Play Store.",
    ],
    responsibilities: [
      "Built the React front end.",
      "Built the Node.js back end and its API.",
      "Added real-time chat with Socket.io and Google sign-in.",
      "Published the app on the Google Play Store.",
    ],
    flowTitle: "How the pieces fit together",
    flow: [
      { label: "React client", detail: "Make, play and share quizzes" },
      { label: "Google sign-in", detail: "Authentication" },
      { label: "Node.js API", detail: "Quizzes and users" },
      { label: "Socket.io", detail: "Real-time chat" },
    ],
    features: [
      "Make, play and share quizzes.",
      "Google sign-in.",
      "Real-time chat with Socket.io.",
      "Dark mode.",
    ],
    stack: ["React", "Node.js", "Socket.io", "Google OAuth", "Vercel"],
    outcome: "Live on the web and on the Google Play Store.",
    images: [
      {
        src: "/images/projects/quizhunthome.png",
        alt: "QuizHunt home page with featured quizzes",
        kind: "web",
      },
      {
        src: "/images/projects/quizhuntcreatequiz.png",
        alt: "QuizHunt create-quiz screen",
        kind: "web",
      },
      {
        src: "/images/projects/quizhuntquiz.png",
        alt: "QuizHunt quiz being played",
        kind: "web",
      },
    ],
  },
  {
    slug: "exam-management-system",
    title: "Exam Management System",
    kind: "Side project",
    tagline: "Keeps faculty data, exams and results in one app.",
    role: "Full-stack developer",
    period: "Since 2024",
    overview: [
      "The Exam Management System handles faculty data, exams and results in one application.",
      "I also set up its delivery pipeline myself: a containerised backend and automatic deploys.",
    ],
    responsibilities: [
      "Built the app in Next.js and TypeScript.",
      "Modelled the data in PostgreSQL with Prisma.",
      "Containerised the backend with Docker.",
      "Set up CI/CD with GitHub Actions and Vercel.",
    ],
    flowTitle: "How it's built and shipped",
    flow: [
      { label: "Next.js app", detail: "TypeScript front end on Vercel" },
      { label: "Backend", detail: "Runs in Docker" },
      { label: "Prisma", detail: "Typed data access" },
      { label: "PostgreSQL", detail: "Faculty, exams and results" },
    ],
    features: [
      "Faculty records.",
      "Exam management.",
      "Results.",
      "Deploys through CI/CD.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "GitHub Actions",
      "Vercel",
    ],
    images: [],
  },
];

export const earlierWork = [
  {
    title: "SafeBook",
    description: "A social app for posting stories and chatting with friends.",
    image: "/images/projects/safebookhome.png",
  },
  {
    title: "Thrift Store",
    description: "An online shop for selling second-hand clothes.",
    image: "/images/projects/thriftstorehome.png",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
