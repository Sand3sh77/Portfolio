import Image from "next/image";
import { HoverEffect } from "./ui/card-hover-effect";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaReact,
  FaFigma,
  FaNodeJs,
  FaCreativeCommonsPdAlt,
} from "react-icons/fa";
import { SiMongodb, SiNestjs, SiPrisma } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiTypescript } from "react-icons/si";

const TechStack = () => {
  const projects = [
    {
      title: "Next.js",
      svg: <RiNextjsFill className="h-[3rem] w-[3rem]" />,
      hover: "#78d5d0",
    },
    {
      title: "React & ReactNative",
      svg: <FaReact className="h-[3rem] w-[3rem]" />,
      hover: "#60C7DE",
    },
    {
      title: "Nest.js",
      svg: <SiNestjs className="h-[3rem] w-[3rem]" />,
      hover: "#E92853",
    },
    {
      title: "Javascript",
      svg: <IoLogoJavascript className="h-[3rem] w-[3rem]" />,
      hover: "#ebd744",
    },
    {
      title: "Typescript",
      svg: <SiTypescript className="h-[3rem] w-[3rem]" />,
      hover: "#017acb",
    },
    {
      title: "NodeJS",
      svg: <FaNodeJs className="h-[3rem] w-[3rem]" />,
      hover: "#8cc84b",
    },
    {
      title: "MySql",
      svg: <GrMysql className="h-[3rem] w-[3rem]" />,
      hover: "rgb(0,84,107)",
    },
    {
      title: "MongoDB",
      svg: <SiMongodb className="h-[3rem] w-[3rem]" />,
      hover: "#10AA50",
    },
    {
      title: "Prisma",
      svg: <SiPrisma className="h-[3rem] w-[3rem]" />,
      hover: "#466391",
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
          Some of the tools I use for web and mobile development.
        </p>
      </div>
      <div className="w-[90%]">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default TechStack;
