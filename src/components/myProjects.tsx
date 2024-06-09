// "use client"

import { HoverEffect } from "./ui/card-hover-effect";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { Button } from "./ui/moving-border";

const Projects = [
  {
    title: "Thrift Store - Ecommerce",
    siteUrl: "https://subedisandesh7.com.np",
    codeUrl: "",
    imageUrl: "/images/projects/thriftstorehome.png",
    description:
      "Thrift store is an ecommerce site where you can easily sell your unused clothes.",
  },
  {
    title: "QuizHunt - Create,Share,Play",
    siteUrl: "",
    codeUrl: "",
    imageUrl: "/images/projects/quizhunthome.png",
    description:
      "Quizhunt is a quiz app where you can create, play and share quiz.",
  },
  {
    title: "SafeBook - Social Media",
    siteUrl: "https://safebook.vercel.app",
    imageUrl: "/images/projects/safebookhome.png",
    codeUrl: "https://github.com/Sand3sh77/SocialMediaApp",
    description:
      "Safebook is a site where you can post stories and experiences or chat with friends.",
  },
];

const MyProjects = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 md:gap-10 lg:gap-16 xl:gap-26 justify-center items-center py-4 px-7 md:py-8 md:px-14 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] pb-4">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-4xl md:leading-[3.5rem] font-bold tracking-wide mb-2">
          Projects I Have Built
        </h2>
        <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
          Some of my projects from past few years as a web developer.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 pb-4">
        {Projects.map((project, index) => {
          return (
            <div className="max-w-[80%] md:max-w-[70%] lg:max-w-[25%]" key={index}>
              <DirectionAwareHover
                imageUrl={project.imageUrl}
                codeUrl={project.codeUrl}
              >
                <div className="">
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank">
                      <button className="rounded py-2 px-4 hover:text-[#c2c2c5]">
                        Visit Code
                      </button>
                    </a>
                  )}
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
                <span className="line-clamp-2">{project.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
