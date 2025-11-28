"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navigation from "./navigation";

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
      className={`fixed top-0 left-0 w-full z-50 h-16 md:h-20 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-[#f3f4f7c0] dark:bg-[#151932d2]`}
    >
      <div className="h-full w-[96%] sm:w-[90%] m-auto flex justify-between items-center">
        <div className="flex gap-2 sm:gap-5 justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex justify-center items-center h-[2.3rem] md:h-[2.8rem] p-3 text-xl font-semibold tracking-widest cursor-pointer rounded bg-[#dee0e6d2] text-[#1f1e1e] dark:bg-[#1E2637] dark:text-[#c2b7c5]">
                <RxHamburgerMenu className="h-[1rem] w-[1rem] md:h-[1.5rem] md:w-[1.5rem]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-[#dee0e6] text-[#1f1e1e] dark:bg-[#1E2637] dark:text-[#c2b7c5]"
            >
              <Navigation />
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="text-sm md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            {" { " + "subedisandesh7.com.np" + " } "}
          </div>
        </div>
        <div className="flex gap-2 md:gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex justify-center items-center h-[2.3rem] md:h-[2.8rem] px-3 md:px-4 py-3 text-base font-semibold tracking-widest cursor-pointer rounded bg-[#dee0e6d2] text-[#1f1e1e] dark:bg-[#1E2637] dark:text-[#c2b7c5]">
                <Sun className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
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
          <a href="/files/resume_new.pdf" target="_blank" rel="noopener noreferrer">
            <div className="px-2 py-2 text-sm md:font-semibold tracking-wide md:tracking-widest cursor-pointer rounded bg-[#dee0e6d2] text-[#1f1e1e] dark:bg-[#1E2637] dark:text-[#c2b7c5] md:px-8 md:py-3">
              RESUME
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
