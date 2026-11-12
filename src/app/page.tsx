import AboutMe from "@/components/aboutMe";
import Experience from "@/components/experience";
import GetInTouch from "@/components/getInTouch";
import { HeroBackground } from "@/components/heroBackground";
import { HeroSection } from "@/components/heroSection";
import MyProjects from "@/components/myProjects";
import Navbar from "@/components/navbar";
import SkillCertifications from "@/components/skillCertifications";
import TechStack from "@/components/techStack";

export default function Home() {
  return (
    <main>
      <div className="w-full mx-auto rounded-md overflow-hidden bg-[#dee0e6d2] dark:bg-[#0C1222]">
        <Navbar />
        <HeroBackground>
          <HeroSection />
        </HeroBackground>
        <AboutMe />
        <Experience />
        <TechStack />
        <MyProjects />
        <SkillCertifications />
        <GetInTouch />
      </div>
    </main>
  );
}
