import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/moving-border";
import { heroFacts, profile } from "@/data/profile";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10 md:gap-8 min-h-screen w-full max-w-7xl mx-auto pt-24 pb-10 md:pt-28"
    >
      <div className="w-full md:w-[62%] flex flex-col">
        <p className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/40 bg-white/70 dark:bg-[#13182F]/80 px-3 py-1.5 text-sm font-semibold text-[#1a1919] dark:text-[#D6D5D4]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {profile.currentRole}
        </p>

        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1a1919] dark:text-[#F1EEEE]">
          {profile.name}
        </h1>
        <p
          className={`mt-2 pb-1 text-2xl sm:text-3xl lg:text-5xl font-bold ${gradientText}`}
        >
          {profile.title}
        </p>
        <p className="mt-2 text-base sm:text-lg lg:text-xl font-semibold tracking-wide text-[#333] dark:text-[#A0988C]">
          {profile.focus}
        </p>

        <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#333] dark:text-[#B8B8B8]">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            as="a"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="0.5rem"
            containerClassName="h-12 w-40 md:h-14 md:w-44"
            className="border-0 bg-[#FFFFFF] dark:bg-[#1E2637]"
          >
            <span
              className={`text-[1.05rem] font-bold tracking-wide ${gradientText}`}
            >
              View Resume
            </span>
          </Button>
          <a
            href="#getintouch"
            className="group inline-flex h-12 md:h-14 items-center gap-2 rounded-lg border border-[#1a1919]/30 dark:border-gray-500/60 px-5 font-bold tracking-wide text-[#1a1919] dark:text-[#D6D5D4] transition-colors hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex items-center gap-4 text-[#1a1919] dark:text-[#A0988C]">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-sky-500"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-sky-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-4 max-w-2xl border-t border-[#1a1919]/15 dark:border-gray-500/30 pt-6">
          {heroFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col-reverse justify-end">
              <dt className="text-xs sm:text-sm text-[#555] dark:text-[#A0988C]">
                {fact.label}
              </dt>
              <dd className="text-lg sm:text-2xl font-bold text-[#1a1919] dark:text-[#F1EEEE]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full p-1 bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500">
          <div className="relative w-[12rem] h-[12rem] md:w-[18rem] md:h-[18rem] xl:w-[22rem] xl:h-[22rem] rounded-full overflow-hidden border-4 border-[#dee0e6] dark:border-[#0C1222]">
            <Image
              src="/images/profile1.jpeg"
              alt="Portrait of Sandesh Subedi"
              fill
              priority
              sizes="(min-width: 1280px) 22rem, (min-width: 768px) 18rem, 12rem"
              className="object-cover"
            />
          </div>
        </div>
        <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#333] dark:text-[#A0988C]">
          <MapPin className="h-4 w-4" />
          {profile.location} · works remotely
        </p>
      </div>
    </section>
  );
}
