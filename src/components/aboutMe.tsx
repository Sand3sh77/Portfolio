import { BrainCircuit, Layers, Users, Workflow } from "lucide-react";
import { aboutParagraphs, focusAreas, type FocusIcon } from "@/data/profile";

const icons: Record<FocusIcon, typeof Workflow> = {
  architecture: Workflow,
  ai: BrainCircuit,
  product: Layers,
  leadership: Users,
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20 md:px-12 dark:bg-grid-small-white/[0.2] bg-grid-small-[#0000]/[0.2]"
    >
      <div className="w-full max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <h2 className="text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            About Me
          </h2>
          <div className="mt-6 md:mt-8 space-y-5 text-base md:text-lg leading-relaxed text-[#333] dark:text-[#B8B8B8]">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map(({ icon, title, description }) => {
            const Icon = icons[icon];
            return (
              <li
                key={title}
                className="rounded-2xl border border-zinc-200 dark:border-[#1E2637] bg-white dark:bg-[#13182F] p-5 transition-colors hover:border-sky-500 dark:hover:border-sky-500"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#1a1919] dark:text-[#F1EEEE]">
                  {title}
                </h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-[#555] dark:text-[#B8B8B8]">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
