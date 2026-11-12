import { HoverEffect } from "./ui/card-hover-effect";
import { RiNextjsFill } from "react-icons/ri";
import { FaAws, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiDocker,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { skillGroups } from "@/data/skills";

const TechStack = () => {
  const projects = [
    {
      title: "Next.js",
      svg: <RiNextjsFill className="h-[3rem] w-[3rem]" />,
      hover: "#78d5d0",
    },
    {
      title: "React & React Native",
      svg: <FaReact className="h-[3rem] w-[3rem]" />,
      hover: "#60C7DE",
    },
    {
      title: "TypeScript",
      svg: <SiTypescript className="h-[3rem] w-[3rem]" />,
      hover: "#017acb",
    },
    {
      title: "Node.js",
      svg: <FaNodeJs className="h-[3rem] w-[3rem]" />,
      hover: "#8cc84b",
    },
    {
      title: "NestJS",
      svg: <SiNestjs className="h-[3rem] w-[3rem]" />,
      hover: "#E92853",
    },
    {
      title: "Python",
      svg: <SiPython className="h-[3rem] w-[3rem]" />,
      hover: "#3776AB",
    },
    {
      title: "PostgreSQL",
      svg: <SiPostgresql className="h-[3rem] w-[3rem]" />,
      hover: "#4169E1",
    },
    {
      title: "MongoDB",
      svg: <SiMongodb className="h-[3rem] w-[3rem]" />,
      hover: "#10AA50",
    },
    {
      title: "Redis",
      svg: <SiRedis className="h-[3rem] w-[3rem]" />,
      hover: "#DC382D",
    },
    {
      title: "Prisma",
      svg: <SiPrisma className="h-[3rem] w-[3rem]" />,
      hover: "#466391",
    },
    {
      title: "Docker",
      svg: <SiDocker className="h-[3rem] w-[3rem]" />,
      hover: "#2496ED",
    },
    {
      title: "AWS",
      svg: <FaAws className="h-[3rem] w-[3rem]" />,
      hover: "#FF9900",
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center min-h-screen max-w-5xl mx-auto p-4 md:p-8"
    >
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
          Tech Stack
        </h2>
        <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
          Some of the tools I use for software development.
        </p>
      </div>
      <div className="w-[90%]">
        <HoverEffect items={projects} />
      </div>

      <dl className="w-[90%] mt-10 divide-y divide-[#1a1919]/15 dark:divide-gray-500/30 border-y border-[#1a1919]/15 dark:border-gray-500/30">
        {skillGroups.map(({ group, items }) => (
          <div key={group} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="font-bold text-[#1a1919] dark:text-[#F1EEEE]">{group}</dt>
            <dd className="leading-relaxed text-[#333] dark:text-[#B8B8B8]">{items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default TechStack;
