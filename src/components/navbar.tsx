"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <section className="absolute top-0 w-full h-20 z-20 bg-[#f3f4f7c0] dark:bg-[#151932d2]">
      <div className="h-full w-[90%] m-auto flex justify-between items-center">
        <div className="flex gap-5">
          {/* <div>Burger</div> */}
          <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-lg md:text-2xl font-bold">
            {" { " + "dev.sandesh.com" + " } "}
          </div>
        </div>
        <div className="flex gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex justify-center items-center h-12 bg-[#dee0e6d2] text-[#1f1e1e] rounded  text-base font-semibold tracking-widest px-4 py-3 cursor-pointer dark:text-[#c2b7c5] dark:bg-[#1E2637] ">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
            <div className="bg-[#dee0e6d2] text-[#1f1e1e] rounded text-base font-semibold tracking-widest px-8 py-3 cursor-pointer dark:text-[#c2b7c5] dark:bg-[#1E2637] ">
              RESUME
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
