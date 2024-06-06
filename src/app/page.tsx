"use client";

import AboutMe from "@/components/aboutMe";
import { HeroSection } from "@/components/heroSection";
import { Vortex } from "@/components/ui/vortex";
export default function Home() {
  return (
    <main className="">
      <div className="w-full mx-auto rounded-md  overflow-hidden bg-[#0C1222] px-12">
        <Vortex
          backgroundColor="transparent"
          rangeY={200}
          particleCount={100}
          baseHue={200}
          className="flex items-stretch flex-col justify-center  py-4 w-full h-full"
        >
          <HeroSection />
        </Vortex>
        <AboutMe />
      </div>
    </main>
  );
}
