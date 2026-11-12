import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { earlierWork, projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCover, ProjectFlow } from "./projectCover";

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-20 md:px-12 md:py-28 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
            Projects
          </h2>
          <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
            A few things I&apos;ve built, and what I did on each.
          </p>
        </div>

        <ol className="mt-14 md:mt-20 space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const href = `/projects/${project.slug}`;
            const flip = index % 2 === 1;

            return (
              <li
                key={project.slug}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <Link
                  href={href}
                  aria-label={`${project.title} case study`}
                  className={cn("group block", flip && "md:order-2")}
                >
                  {project.cover ? (
                    <ProjectCover
                      project={project}
                      sizes="(min-width: 768px) 34rem, 100vw"
                      className="rounded-2xl border border-zinc-200 dark:border-[#1E2637] shadow-sm"
                    />
                  ) : (
                    <ProjectFlow project={project} className="transition-colors group-hover:border-[#1a1919]/40 dark:group-hover:border-gray-500" />
                  )}
                </Link>

                <div>
                  <p className="text-sm text-[#555] dark:text-[#A0988C]">
                    {project.kind}, {project.period.toLowerCase()}
                  </p>
                  <h3 className="mt-3 text-2xl md:text-4xl font-bold text-[#1a1919] dark:text-[#F1EEEE]">
                    <Link href={href} className="hover:underline underline-offset-4 decoration-2">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base md:text-lg leading-relaxed text-[#333] dark:text-[#B8B8B8]">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-sm md:text-base text-[#333] dark:text-[#B8B8B8]">
                    <span className="font-bold text-[#1a1919] dark:text-[#F1EEEE]">Role:</span>{" "}
                    {project.role}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-[#1a1919]/15 dark:border-gray-500/40 px-2.5 py-1 text-xs md:text-sm text-[#333] dark:text-[#D6D5D4]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 rounded-lg bg-[#1a1919] dark:bg-[#F1EEEE] px-4 py-2.5 text-sm font-bold text-white dark:text-[#0C1222] transition-opacity hover:opacity-85"
                    >
                      Read case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 text-sm font-bold text-[#1a1919] dark:text-[#F1EEEE] underline underline-offset-4 decoration-1"
                      >
                        Live site
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-20">
          <h3 className="text-lg font-bold text-[#1a1919] dark:text-[#F1EEEE]">
            Older projects
          </h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {earlierWork.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-zinc-200 dark:border-[#1E2637] bg-white dark:bg-[#13182F] p-3"
              >
                <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="7rem"
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-sm text-[#333] dark:text-[#B8B8B8]">
                  <span className="font-bold text-[#1a1919] dark:text-[#F1EEEE]">{item.title}.</span>{" "}
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
