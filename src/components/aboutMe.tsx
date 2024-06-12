import Image from "next/image";
import { Button } from "./ui/moving-border";

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col-reverse md:flex-row gap-16 md:gap-10 xl:gap-32 justify-center items-center px-6 md:px-12 dark:bg-grid-small-white/[0.2] bg-grid-small-[#0000]/[0.2]">
      <div className="w-[100%] md:w-[55%]">
        <h2 className="text-2xl md:text-5xl font-bold tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          About Me
        </h2>
        <div className="flex flex-col gap-4 mt-2 md:mt-6 text-sm md:text-lg lg:text-xl tracking-wide text-[#1d1c1c] dark:text-[#A0988C]">
          <p>
            👋 Hey there! I&apos;m Sandesh Subedi, a full-stack web designer and
            developer based in Pokhara, Nepal.
          </p>

          <p>
            I thrive on challenges and am always eager to learn new things.
            Whether it&apos;s a complex algorithm or a sleek UI, I&apos;m
            excited to tackle it head-on.
          </p>

          <p>
            What sets me apart is my commitment to understanding the unique
            challenges of each project and providing tailored technical
            expertise to overcome them.
          </p>

          <p>
            Feel free to reach out if you&apos;re ready to embark on a journey
            of innovation and excellence. Let&apos;s collaborate and build
            something extraordinary together.
          </p>

          <a
            href="https://www.linkedin.com/in/sandesh-subedi-58735b283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              borderRadius="0.5rem"
              className="border-0 bg-[#FFFFFF] dark:bg-[#1E2637]"
            >
              <span className="text-base md:text-[1.05rem] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
                Open LinkedIn
              </span>
            </Button>
          </a>
        </div>
      </div>
      <div className="relative w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem] xl:w-[30rem] xl:h-[25rem] flex justify-center items-center text-[#FFFFFF]">
        <Image
          src="/svg/undraw_website_u6x8.svg"
          alt="Cover Image"
          layout="fill"
          objectFit="contain"
          className=""
        />
      </div>
    </section>
  );
};

export default AboutMe;
