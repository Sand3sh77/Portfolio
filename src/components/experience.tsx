import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { education, jobs } from "@/data/experience";
import { Reveal } from "./ui/reveal";

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20 md:px-12 md:py-28">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            Experience
          </h2>
          <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
            Where I have worked and what I was responsible for.
          </p>
        </div>

        <ol className="relative mt-12 md:mt-16 ml-2 md:ml-4 border-l-2 border-[#1a1919]/15 dark:border-gray-500/30">
          {jobs.map((job, index) => (
            <li key={`${job.company}-${job.period}`} className="relative pl-6 md:pl-10 pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[9px] top-6 h-4 w-4 rounded-full border-2 border-[#dee0e6] dark:border-[#0C1222] bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500"
              />
              <Reveal delay={index * 0.05}>
                <article className="rounded-2xl border border-zinc-200 dark:border-[#1E2637] bg-white dark:bg-[#13182F] p-5 md:p-7 transition-colors hover:border-sky-500 dark:hover:border-sky-500">
                  <header className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#1a1919] dark:text-[#F1EEEE]">
                        {job.role}
                      </h3>
                      <p className="mt-1 flex flex-wrap items-center gap-2 font-semibold text-sky-600 dark:text-sky-400">
                        {job.company}
                        {job.current && (
                          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                            Current
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-[#555] dark:text-[#A0988C] md:items-end md:text-right md:max-w-[45%]">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4 shrink-0" />
                        {job.period}
                      </span>
                      <span className="inline-flex items-start gap-1.5">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                        {job.location}
                      </span>
                    </div>
                  </header>

                  <ul className="mt-5 space-y-2 list-disc pl-5 marker:text-sky-500 text-sm md:text-base leading-relaxed text-[#333] dark:text-[#B8B8B8]">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-sky-500/10 px-2.5 py-1 text-xs md:text-sm font-semibold text-sky-700 dark:text-sky-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-12">
          <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 dark:border-[#1E2637] bg-white dark:bg-[#13182F] p-5 md:flex-row md:items-center md:p-7">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#555] dark:text-[#A0988C]">
                Education
              </p>
              <h3 className="mt-1 text-lg font-bold text-[#1a1919] dark:text-[#F1EEEE]">
                {education.degree}
              </h3>
              <p className="text-sm md:text-base text-[#333] dark:text-[#B8B8B8]">
                {education.school}
              </p>
            </div>
            <div className="text-sm text-[#555] dark:text-[#A0988C] md:text-right">
              <p className="font-semibold">{education.period}</p>
              <p>{education.detail}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
