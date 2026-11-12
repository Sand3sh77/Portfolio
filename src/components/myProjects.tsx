import Image from "next/image";
import Link from "next/link";
import { earlierWork, projects } from "@/data/projects";
import { ProjectCover } from "./projectCover";

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
            A few things I&apos;ve built. Click one for the details.
          </p>
        </div>

        <ul className="mt-12 md:mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-[#1E2637] bg-white dark:bg-[#13182F] transition-colors hover:border-[#1a1919]/40 dark:hover:border-gray-500"
              >
                <ProjectCover
                  project={project}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-sm text-[#555] dark:text-[#A0988C]">
                    {project.kind}, {project.period.toLowerCase()}
                  </p>
                  <h3 className="mt-1 text-xl md:text-2xl font-bold text-[#1a1919] dark:text-[#F1EEEE] group-hover:underline underline-offset-4 decoration-1">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-[#333] dark:text-[#B8B8B8]">
                    {project.tagline}
                  </p>
                  <p className="mt-auto pt-4 text-sm text-[#555] dark:text-[#A0988C]">
                    {project.stack.slice(0, 4).join(", ")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14">
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
