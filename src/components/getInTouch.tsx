import Image from "next/image";
import { HoverEffect } from "./ui/card-hover-effect";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiTypescript } from "react-icons/si";
import { SocialLinks } from "./socialLinks";
import { Button } from "./ui/moving-border";
import { Boxes } from "./ui/background-boxes";

const GetInTouch = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-center items-center min-h-screen  px-8 pt-10 pb-4">
      <div className="absolute inset-0 w-full h-full bg-[#E4E5EA] dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes className="h-screen"/>
      <div className="z-50">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-3xl md:text-6xl md:leading-[3.5rem] font-bold tracking-wide">
            Get In Touch
          </h2>
          <p className="max-w-auto md:max-w-[70%] lg:max-w-[60%] m-auto text-[#1a1919] dark:text-[#A0988C] text-xl tracking-wide mt-5">
            I&apos;m always excited to collaborate on new projects or discuss
            innovative ideas. Whether you need a sleek design, a robust
            application, or anything in between, I&apos;m here to help. Let&apos;s work
            together to bring your vision to life!
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 mt-10">
          <a
            href="mailto:subedisandesh0123@gmail.com?subject=Project%20Inquiry&amp;body=Hi%20Sandesh,%0D%0A%0D%0AI&apos;d%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0AThanks!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              borderRadius="0.5rem"
              className="border-0 bg-[#FFFFFF] dark:bg-[#1E2637]"
            >
              <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent font-bold tracking-wide text-[1.05rem]">
                Say Hello
              </span>
            </Button>
          </a>
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
