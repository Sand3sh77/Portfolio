"use client";

import { useTheme } from "next-themes";
import { Vortex } from "@/components/ui/vortex";

// Client wrapper so the page itself can stay a server component.
export function HeroBackground({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <Vortex
      backgroundColor="transparent"
      rangeY={isLight ? 200 : 150}
      particleCount={isLight ? 100 : 80}
      baseHue={isLight ? 180 : 200}
      className="flex items-center flex-col justify-center px-6 py-2 md:px-12 md:py-4 gap-6 md:gap-10 xl:gap-20 w-full h-full"
    >
      {children}
    </Vortex>
  );
}
