import Image from "next/image";
import { Button } from "./ui/moving-border";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col-reverse md:flex-row gap-16 md:gap-10 xl:gap-32 justify-center items-center px-6 md:px-12 dark:bg-grid-small-white/[0.2] bg-grid-small-[#0000]/[0.2]"
    >
      <div className="w-[100%] md:w-[60%]">
        <h2 className="text-2xl md:text-5xl font-bold tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          About Me
        </h2>
        <div className="flex flex-col gap-2 mt-4 md:mt-8 text-base md:text-lg lg:text-xl tracking-wide text-[#1d1c1c] dark:text-[#A0988C]">
          <div className="space-y-2">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-indigo-500 dark:text-sky-400">
                Sandesh Subedi
              </span>
              , a full-stack web and mobile developer from Pokhara, Nepal.
            </p>

            <div className="flex items-start gap-4">
              <span className="text-xl md:text-2xl lg:text-3xl text-[#FF5722] dark:text-[#FFC107]">
                🌟
              </span>
              <div>
                <p className="font-medium text-[#333] dark:text-[#D6D5D4]">
                  <strong>What I do:</strong>
                </p>
                <p className="text-[#555] dark:text-[#B8B8B8]">
                  I specialize in modern JavaScript frameworks like
                  <span className="font-medium text-indigo-500 dark:text-sky-400">
                    {" "}
                    React
                  </span>
                  ,
                  <span className="font-medium text-indigo-500 dark:text-sky-400">
                    {" "}
                    React Native
                  </span>
                  ,
                  <span className="font-medium text-indigo-500 dark:text-sky-400">
                    {" "}
                    Nest.js
                  </span>
                  ,
                  <span className="font-medium text-indigo-500 dark:text-sky-400">
                    {" "}
                    Prisma
                  </span>
                  , and
                  <span className="font-medium text-indigo-500 dark:text-sky-400">
                    {" "}
                    TypeScript
                  </span>
                  , delivering high-quality solutions tailored to your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl md:text-2xl lg:text-3xl text-[#FF5722] dark:text-[#FFC107]">
                🚀
              </span>
              <div>
                <p className="font-medium text-[#333] dark:text-[#D6D5D4]">
                  <strong>Why choose me?</strong>
                </p>
                <p className="text-[#555] dark:text-[#B8B8B8]">
                  I thrive on challenges, blending technical expertise with
                  creativity to build sleek UIs and solve complex problems
                  effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-xl md:text-2xl lg:text-3xl text-[#FF5722] dark:text-[#FFC107]">
                🤝
              </span>
              <div>
                <p className="font-medium text-[#333] dark:text-[#D6D5D4]">
                  <strong>Let&apos;s connect!</strong>
                </p>
                <p className="text-[#555] dark:text-[#B8B8B8]">
                  Ready to collaborate and build something extraordinary?
                  I&apos;m here to help.
                </p>
              </div>
            </div>
          </div>
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
      <div className="relative w-[12rem] h-[12rem] md:w-[18rem] md:h-[18rem] xl:w-[25rem] xl:h-[25rem] flex justify-center items-center text-[#FFFFFF]">
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
