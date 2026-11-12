// Personal details and homepage copy. Keep facts in sync with the CV
// (LaTeX-CV/shared/info.tex and parts/cv.tex).

export const profile = {
  name: "Sandesh Subedi",
  firstName: "Sandesh",
  title: "Software Engineer",
  focus: "Full-Stack Development & LLM / AI Integration",
  location: "Pokhara, Nepal",
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
  intro:
    "I build web and mobile apps with React, Next.js, React Native and Node.js. These days I'm the project lead on an OSINT platform at AiGeeks, where I designed the architecture and wrote the Python pipeline that scrapes open-source data and hands it to an LLM to pull out entities.",
} as const;

export const mailtoUrl = `mailto:${profile.email}`;

export const about = [
  "I started building for the web in 2022, mostly freelance work for clients in Australia, Canada, Japan and here in Nepal. In 2025 I joined Nipuna Prabhidhik Sewa as a frontend developer, working on large accounting and CRM apps in React, and was promoted early.",
  "Since February 2026 I've worked remotely for AiGeeks, a company based in the UAE. I make the architecture calls for a multi-service app, wrote its scraping and classification pipeline, and mentor the interns on the team.",
  "I'm also finishing a B.Sc. in Computer Science and IT at Prithvi Narayan Campus. Outside of work I coordinate the research and innovation wing of our CSIT students' association, and over the 2025 winter I taught secondary school students about AI and staying safe online for the city's Youth Council.",
];
