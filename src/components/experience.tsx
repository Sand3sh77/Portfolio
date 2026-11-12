import { education, jobs } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20 md:px-12 md:py-28">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            Experience
          </h2>
          <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
            Where I&apos;ve worked so far.
          </p>
        </div>

        <ol className="mt-12 md:mt-16 border-l border-[#1a1919]/20 dark:border-gray-500/40">
          {jobs.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pl-6 md:pl-10 pb-12">
              <span
                aria-hidden
                className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-[#1a1919] dark:bg-[#A0988C]"
              />
              <p className="text-sm text-[#555] dark:text-[#A0988C]">
                {job.period}, {job.location}
              </p>
              <h3 className="mt-1 text-lg md:text-xl font-bold text-[#1a1919] dark:text-[#F1EEEE]">
                {job.role}{" "}
                <span className="font-normal text-[#555] dark:text-[#B8B8B8]">at {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-sm md:text-base leading-relaxed text-[#333] dark:text-[#B8B8B8]">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-[#555] dark:text-[#A0988C]">{job.stack}</p>
            </li>
          ))}
          <li className="relative pl-6 md:pl-10">
            <span
              aria-hidden
              className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-[#1a1919] dark:bg-[#A0988C]"
            />
            <p className="text-sm text-[#555] dark:text-[#A0988C]">{education.period}</p>
            <h3 className="mt-1 text-lg md:text-xl font-bold text-[#1a1919] dark:text-[#F1EEEE]">
              {education.degree}
            </h3>
            <p className="text-sm md:text-base text-[#333] dark:text-[#B8B8B8]">
              {education.school}. {education.detail}.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Experience;
