import Image from "next/image";
import { HoverEffect } from "./ui/card-hover-effect";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
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
      title: "React",
      svg: <FaReact className="h-[3rem] w-[3rem]" />,
      hover: "#60C7DE",
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
      title: "NodeJS",
      svg: <FaNodeJs className="h-[3rem] w-[3rem]" />,
      hover: "#8cc84b",
    },
    {
      title: "C++",
      svg: <SiCplusplus className="h-[3rem] w-[3rem]" />,
      hover: "#5c8dbc",
    },
    {
      title: "Figma",
      svg: <FaFigma className="h-[3rem] w-[3rem]" />,
      hover: "",
    },
  ];

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-8 pt-10">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
          Tech Stack
        </h2>
        <p className="text-[#1a1919] dark:text-[#A0988C] text-xl tracking-wide">
          Some of the tools I use for website design and development.
        </p>
      </div>
      <div className="w-[90%] m-auto">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default TechStack;
