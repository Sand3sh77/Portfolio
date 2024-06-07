import Image from "next/image";
import { HoverEffect } from "./ui/card-hover-effect";

const TechStack = () => {
  const projects = [
    {
      title: "Stripe",
      imageUrl: "/images/logos/xyx.png",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      imageUrl: "/images/logos/xyx.png",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      imageUrl: "/images/logos/xyx.png",
      link: "https://google.com",
    },
    {
      title: "Meta",
      imageUrl: "/images/logos/xyx.png",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      imageUrl: "/images/logos/xyx.png",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      imageUrl: "/images/logos/xyx.png",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-8 pt-10">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
          Tech Stack
        </h2>
        <p className="text-[#1a1919] dark:text-[#A0988C] text-xl tracking-wide">
          Some of my projects from the past few years as a web developer.
        </p>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
};

export default TechStack;
