import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

// The project's cover image. Projects without screenshots show the steps
// of how the system works instead.
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
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden bg-[#eceef2] dark:bg-[#1E2637]",
        className
      )}
    >
      {project.cover ? (
        <Image
          src={project.cover}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
          <p className="text-xs uppercase tracking-wider text-[#555] dark:text-[#A0988C]">
            {project.confidential ? "Confidential, no screenshots" : "No screenshots yet"}
          </p>
          {project.flow && (
            <ol className="space-y-1">
              {project.flow.map((step, index) => (
                <li key={step.label} className="flex gap-3 text-sm md:text-base text-[#333] dark:text-[#D6D5D4]">
                  <span className="w-4 text-[#555] dark:text-[#A0988C]">{index + 1}</span>
                  {step.label}
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}
