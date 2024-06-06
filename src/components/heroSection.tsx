import React from "react";
import { Vortex } from "./ui/vortex";
import { Button } from "./ui/moving-border";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="h-screen relative top-8 flex justify-between align-middle">
      <div className="left-cont w-[65%] flex flex-col justify-center">
        <h2 className="text-[#1a1919] dark:text-[#A0988C] text-2xl md:text-5xl font-bold tracking-wide mb-2">
          Frontend Designer +
        </h2>
        <h1 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-3xl md:text-7xl font-bold">
          Full-Stack Developer
        </h1>
        <p className="text-[#1a1919] dark:text-[#A0988C] text-xl mt-10 tracking-wide">
          Frontend Development using HTML, CSS, JavaScript, TypeScript, React,
          and Nextjs.
          <br />
          Backend using Node, Express, SQL,MongoDB PHP & Prisma ORM. I can
          assist in designing and building robust web applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 ">
          <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              borderRadius="0.5rem"
              className="border-0 bg-[#FFFFFF] dark:bg-[#1E2637]"
            >
              <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent font-bold tracking-wide text-[1.05rem]">
                Open Resume
              </span>
            </Button>
          </a>
        </div>
      </div>
      <div className="right-cont flex flex-col justify-center">
        <div className="rounded-full overflow-hidden border-4 border-[#1a1919] dark:border-gray-500">
          <Image
            src="/images/cover_image.png"
            alt="Cover Image"
            width={350}
            height={350}
            className="rounded-full"
          />
        </div>
        {/* <div className="rounded-[2rem] overflow-hidden border-4 border-gray-500">
          <Image
            src="/images/cover_image1.png"
            alt="Cover Image"
            width={300}
            height={150}
            className=""
          />
        </div> */}
      </div>
    </section>
  );
}
