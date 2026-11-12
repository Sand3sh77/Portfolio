import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

// The project's cover screenshot. Only call this for projects that have one.
export function ProjectCover({
  project,
  className,
  sizes,
  priority,
}: {
  project: Project;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  if (!project.cover) return null;

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden bg-[#eceef2] dark:bg-[#1E2637]",
        className
      )}
    >
      <Image
        src={project.cover}
        alt={`${project.title} screenshot`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );
}

// For projects without screenshots: the steps of how the system works.
export function ProjectFlow({ project, className }: { project: Project; className?: string }) {
  if (!project.flow) return null;

  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 dark:border-[#1E2637] bg-white dark:bg-[#13182F] p-6 md:p-8",
        className
      )}
    >
      <p className="text-sm text-[#555] dark:text-[#A0988C]">
        {project.confidential ? "Confidential, so no screenshots. This is roughly how it works." : project.flowTitle}
      </p>
      <ol className="mt-6">
        {project.flow.map((step, index) => (
          <li key={step.label} className="relative flex gap-4 pb-5 last:pb-0">
            {index < project.flow!.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[15px] top-8 bottom-0 w-px bg-[#1a1919]/20 dark:bg-gray-500/40"
              />
            )}
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1a1919]/25 dark:border-gray-500/60 bg-[#eceef2] dark:bg-[#1E2637] text-sm font-bold text-[#1a1919] dark:text-[#F1EEEE]">
              {index + 1}
            </span>
            <div className="pt-1">
              <p className="font-bold leading-tight text-[#1a1919] dark:text-[#F1EEEE]">{step.label}</p>
              <p className="text-sm text-[#555] dark:text-[#B8B8B8]">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
