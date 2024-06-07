// "use client"

import { HoverEffect } from "./ui/card-hover-effect";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { Button } from "./ui/moving-border";

const Projects = [
  {
    title: "QuizHunt - Create,Share,Play",
    siteUrl: "",
    imageUrl: "/images/projects/quizhunthome.png",
    description:
      "Quizhunt is a quiz app where you can create, play and share quiz.",
  },
  {
    title: "SafeBook - Social Media",
    siteUrl: "https://safebook.vercel.app",
    imageUrl: "/images/projects/safebookhome.png",
    description:
      "Safebook is a social media site where you can post stories and experiences or chat with friends.",
  },
  {
    title: "Thrift Store - Ecommerce",
    siteUrl: "https://subedisandesh7.com.np",
    imageUrl: "/images/projects/thriftstorehome.png",
    description:
      "Thrift store is an ecommerce site where you can easily sell your unused clothes.",
  },
];

const MyProjects = () => {
  return (
    <div className="min-h-screen flex flex-col gap-7 justify-evenly items-center pt-16 px-14">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide mb-2">
          Projects I Have Built
        </h2>
        <p className="text-[#1a1919] dark:text-[#A0988C] text-xl tracking-wide">
          Some of my projects from past few years as a web developer.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Projects.map((project, index) => {
          return (
            <div className="" key={index}>
              <DirectionAwareHover imageUrl={project.imageUrl}>
                <div className="">
                  <button className="rounded py-2 px-4 hover:text-[#d4d4d6]">
                    Case Study
                  </button>
                  {project.siteUrl && (
                    <a href={project.siteUrl} target="_blank">
                      <button className="rounded py-2 px-4 hover:text-[#c2c2c5]">
                        Visit Site
                      </button>
                    </a>
                  )}
                </div>
              </DirectionAwareHover>
              <div className="mt-5">
                <h4 className="text-lg font-bold">{project.title}</h4>
                <p className="max-w-[90%]">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
