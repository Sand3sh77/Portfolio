import AboutMe from "@/components/aboutMe";
import Experience from "@/components/experience";
import GetInTouch from "@/components/getInTouch";
import Leadership from "@/components/leadership";
import { HeroBackground } from "@/components/heroBackground";
import { HeroSection } from "@/components/heroSection";
import MyProjects from "@/components/myProjects";
import Navbar from "@/components/navbar";
import SkillCertifications from "@/components/skillCertifications";
import TechStack from "@/components/techStack";
import { StructuredData } from "@/components/structuredData";
import { profile } from "@/data/profile";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/images/profile1.jpeg`,
  jobTitle: profile.title,
  worksFor: { "@type": "Organization", name: "AiGeeks" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pokhara",
    addressCountry: "NP",
  },
  email: `mailto:${profile.email}`,
  sameAs: [profile.social.github, profile.social.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "Python",
    "LLM integration",
    "System design",
  ],
};

export default function Home() {
  return (
    <main id="main">
      <StructuredData data={person} />
      <div className="w-full mx-auto rounded-md overflow-hidden bg-[#dee0e6d2] dark:bg-[#0C1222]">
        <Navbar />
        <HeroBackground>
          <HeroSection />
        </HeroBackground>
        <AboutMe />
        <Experience />
        <TechStack />
        <MyProjects />
        <Leadership />
        <SkillCertifications />
        <GetInTouch />
      </div>
    </main>
  );
}
