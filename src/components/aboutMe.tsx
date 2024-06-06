import { StaticWebsiteSVG } from "../../public/svg/svg";
import { Button } from "./ui/moving-border";

const AboutMe = () => {
  return (
    <div className="h-screen flex justify-between items-center dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] px-12">
      <div className="w-[55%]">
        <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-5xl font-bold tracking-wide mb-2">
          About Me
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          <p className="text-[#A0988C] text-xl tracking-wide">
            👋 Hey there! I’m Sandesh Subedi, a full-stack web designer and
            developer based in Pokhara, Nepal.
          </p>

          <p className="text-[#A0988C] text-xl tracking-wide">
            I thrive on challenges and am always eager to learn new things.
            Whether it’s a complex algorithm or a sleek UI, I’m excited to
            tackle it head-on.
          </p>

          <p className="text-[#A0988C] text-xl tracking-wide">
            What sets me apart is my commitment to understanding the unique
            challenges of each project and providing tailored technical
            expertise to overcome them.
          </p>

          <p className="text-[#A0988C] text-xl tracking-wide">
            Feel free to reach out if you're ready to embark on a journey of
            innovation and excellence. Let's collaborate and build something
            extraordinary together.
          </p>

          <a
            href="https://www.linkedin.com/in/sandesh-subedi-58735b283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button borderRadius="0.5rem">
              <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent font-bold tracking-wide text-[1.05rem]">
                Open LinkedIn
              </span>
            </Button>
          </a>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="">
          <StaticWebsiteSVG />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
