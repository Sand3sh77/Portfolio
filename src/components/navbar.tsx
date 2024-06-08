"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-[#f3f4f7c0] dark:bg-[#151932d2]`}
    >
      <div className="h-full w-[90%] m-auto flex justify-between items-center">
        <div className="flex gap-5">
          <div className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            {" { " + "dev.sandesh.com" + " } "}
          </div>
        </div>
        <div className="flex gap-2 md:gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex justify-center items-center h-10 md:h-12 px-4 py-3 text-base font-semibold tracking-widest cursor-pointer rounded bg-[#dee0e6d2] text-[#1f1e1e] dark:bg-[#1E2637] dark:text-[#c2b7c5]">
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#dee0e6] text-[#1f1e1e] dark:bg-[#1E2637] dark:text-[#c2b7c5]"
            >
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="cursor-pointer hover:bg-[#a09d9d] dark:hover:bg-[#353333]"
              >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="cursor-pointer hover:bg-[#a09d9d] dark:hover:bg-[#353333]"
              >
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className="cursor-pointer hover:bg-[#a09d9d] dark:hover:bg-[#353333]"
              >
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
            <div className="px-5 py-2 text-base font-semibold tracking-widest cursor-pointer rounded bg-[#dee0e6d2] text-[#1f1e1e] dark:bg-[#1E2637] dark:text-[#c2b7c5] md:px-8 md:py-3">
              RESUME
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
