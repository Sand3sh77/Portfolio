import { about } from "@/data/profile";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-[70vh] flex items-center px-6 py-20 md:px-12 dark:bg-grid-small-white/[0.2] bg-grid-small-[#0000]/[0.2]"
    >
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          About Me
        </h2>
        <div className="mt-6 md:mt-8 space-y-5 text-base md:text-lg leading-relaxed text-[#333] dark:text-[#B8B8B8]">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
