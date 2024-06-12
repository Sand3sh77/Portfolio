"use client";

import AboutMe from "@/components/aboutMe";
import GetInTouch from "@/components/getInTouch";
import { HeroSection } from "@/components/heroSection";
import MyProjects from "@/components/myProjects";
import Navbar from "@/components/navbar";
import SkillCertifications from "@/components/skillCertifications";
import TechStack from "@/components/techStack";
import { Vortex } from "@/components/ui/vortex";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <main className="">
      <div className="w-full mx-auto rounded-md overflow-hidden bg-[#dee0e6d2] dark:bg-[#0C1222]">
        <Navbar />
        <Vortex
          backgroundColor="transparent"
          rangeY={resolvedTheme == "light" ? 200 : 150}
          particleCount={resolvedTheme == "light" ? 100 : 80}
          baseHue={resolvedTheme == "light" ? 180 : 200}
          className="flex items-center flex-col justify-center px-6 py-2 md:px-12 md:py-4 gap-6 md:gap-10 xl:gap-20 w-full h-full"
        >
          <HeroSection />
        </Vortex>
        <AboutMe />
        <TechStack />
        <MyProjects />
        <SkillCertifications />
        <GetInTouch />
      </div>
    </main>
  );
}
