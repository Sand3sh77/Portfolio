import React, { useRef } from "react";
import { Button } from "./ui/moving-border";
import Image from "next/image";

export function HeroSection() {
  const imageRef = useRef(null);
  const triggerRef = useRef(null);

  return (
    <section
      id="home"
      className="relative top-8 flex flex-col-reverse md:flex-row justify-center md:justify-between align-middle gap-8 md:gap-0 min-h-screen"
    >
      <div className="left-cont w-[100%] sm:w-[90%] md:w-[65%] mx-auto md:m-0 flex flex-col justify-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold tracking-wide mb-2 text-[#1a1919] dark:text-[#A0988C]">
          Frontend Engineer +
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-7xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          Full-Stack Developer
        </h1>
        <p className="text-lg mt-6 md:mt-10 tracking-wide text-[#1a1919] dark:text-[#A0988C]">
          Frontend Development using HTML, CSS, JS, TS, React, React Native
          and Nextjs.
          <br />
          Backend using Node, Express, SQL, MongoDB, PHP & Prisma ORM. I can
          assist in designing and building robust web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              borderRadius="0.5rem"
              className="border-0 bg-[#FFFFFF] dark:bg-[#1E2637]"
            >
              <span className="text-[1.05rem] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
                Open Resume
              </span>
            </Button>
          </a>
        </div>
      </div>
      <div
        className="right-cont flex flex-col justify-center items-center w-[50%] md:w-auto mx-auto md:h-auto"
        ref={imageRef}
      >
        <div className="relative w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] xl:w-[25rem] xl:h-[25rem] rounded-full overflow-hidden border-4 border-[#1a1919] dark:border-gray-500">
          <Image
            src="/images/cover_image.png"
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
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
