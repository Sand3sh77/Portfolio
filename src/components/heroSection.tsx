import Image from "next/image";
import { Button } from "./ui/moving-border";
import { mailtoUrl, profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative top-8 flex flex-col-reverse md:flex-row justify-center md:justify-between align-middle gap-8 md:gap-2 min-h-screen"
    >
      <div className="left-cont w-[100%] sm:w-[90%] md:w-[65%] mx-auto md:m-0 flex flex-col justify-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold tracking-wide mb-2 text-[#1a1919] dark:text-[#A0988C]">
          Hi, I&apos;m {profile.firstName}.
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          {profile.title}
        </h1>
        <p className="text-lg mt-6 md:mt-10 tracking-wide max-w-2xl leading-relaxed text-[#1a1919] dark:text-[#A0988C]">
          {profile.intro}
        </p>
        <div className="flex flex-wrap items-center gap-6 mt-8">
          <Button
            as="a"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="0.5rem"
            className="border-0 bg-[#FFFFFF] dark:bg-[#1E2637]"
          >
            <span className="text-[1.05rem] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
              Open Resume
            </span>
          </Button>
          <a
            href={mailtoUrl}
            className="text-[1.05rem] font-bold tracking-wide text-[#1a1919] dark:text-[#D6D5D4] underline underline-offset-4 decoration-1 hover:text-sky-600 dark:hover:text-sky-400"
          >
            Email me
          </a>
        </div>
      </div>
      <div className="right-cont flex flex-col justify-center items-center w-[50%] md:w-auto mx-auto md:h-auto">
        <div className="relative w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] xl:w-[25rem] xl:h-[25rem] rounded-full overflow-hidden border-4 border-[#1a1919] dark:border-gray-500">
          <Image
            src="/images/profile1.jpeg"
            alt="Portrait of Sandesh Subedi"
            fill
            priority
            sizes="(min-width: 1280px) 25rem, (min-width: 768px) 20rem, 15rem"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
