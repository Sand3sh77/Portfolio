"use client";

import AboutMe from "@/components/aboutMe";
import { HeroSection } from "@/components/heroSection";
import MyProjects from "@/components/myProjects";
import { Vortex } from "@/components/ui/vortex";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const theme = useTheme();
  console.log(theme.theme);
  return (
    <main className="">
      <div className="w-full mx-auto rounded-md overflow-hidden bg-[#dee0e6d2] dark:bg-[#0C1222] ">
        <Vortex
          backgroundColor="transparent"
          rangeY={theme.theme == "light" ? 300 : 200}
          particleCount={theme.theme == "light" ? 500 : 100}
          baseHue={theme.theme == "light" ? 180 : 200}
          className="flex items-stretch flex-col justify-center px-12 py-4 w-full h-full"
        >
          <HeroSection />
        </Vortex>
        <AboutMe />
        <MyProjects />
      </div>
    </main>
  );
}
