"use client";

import AboutMe from "@/components/aboutMe";
import GetInTouch from "@/components/getInTouch";
import { HeroSection } from "@/components/heroSection";
import MyProjects from "@/components/myProjects";
import SkillCertifications from "@/components/skillCertifications";
import TechStack from "@/components/techStack";
import { Vortex } from "@/components/ui/vortex";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents mismatches by ensuring the component only renders on the client

  // console.log(resolvedTheme);

  return (
    <main className="">
      <div className="w-full mx-auto rounded-md overflow-hidden bg-[#dee0e6d2] dark:bg-[#0C1222]">
        <Vortex
          backgroundColor="transparent"
          rangeY={resolvedTheme == "light" ? 250 : 200}
          particleCount={resolvedTheme == "light" ? 150 : 100}
          baseHue={resolvedTheme == "light" ? 180 : 200}
          className="flex items-stretch flex-col justify-center px-12 py-4 w-full h-full"
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
