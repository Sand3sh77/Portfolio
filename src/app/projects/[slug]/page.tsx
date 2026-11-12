import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import { ProjectCover } from "@/components/projectCover";
import { mailtoUrl, profile } from "@/data/profile";
import { getProject, projects } from "@/data/projects";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  const title = `${project.title} | ${profile.name}`;
  return {
    title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description: project.tagline,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

const heading = "text-xl md:text-2xl font-bold text-[#1a1919] dark:text-[#F1EEEE]";
const body = "text-base md:text-lg leading-relaxed text-[#333] dark:text-[#B8B8B8]";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className={`mt-4 space-y-2 list-disc pl-5 ${body}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const phoneImages = project.images.filter((image) => image.kind === "phone");
  const webImages = project.images.filter((image) => image.kind === "web");

  return (
    <main className="min-h-screen bg-[#dee0e6d2] dark:bg-[#0C1222]">
      <Navbar />
      <article className="w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-20">
        <Link
          href="/#projects"
          className="text-sm text-[#333] dark:text-[#A0988C] underline underline-offset-4 decoration-1 hover:text-sky-600 dark:hover:text-sky-400"
        >
          Back to all projects
        </Link>

        <header className="mt-6">
          <p className="text-sm text-[#555] dark:text-[#A0988C]">
            {project.kind}, {project.period.toLowerCase()}
          </p>
          <h1 className="mt-2 pb-1 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            {project.title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl leading-relaxed text-[#1a1919] dark:text-[#D6D5D4]">
            {project.tagline}
          </p>
          <p className={`mt-6 ${body}`}>
            <span className="font-bold text-[#1a1919] dark:text-[#F1EEEE]">My role:</span>{" "}
            {project.role}
            {project.liveUrl && (
              <>
                <br />
                <span className="font-bold text-[#1a1919] dark:text-[#F1EEEE]">Live at:</span>{" "}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-1 hover:text-sky-600 dark:hover:text-sky-400"
                >
                  {project.liveLabel}
                </a>
              </>
            )}
          </p>
        </header>

        {project.cover && (
          <ProjectCover
            project={project}
            priority
            sizes="(min-width: 1024px) 56rem, 100vw"
            className="mt-10 rounded-xl border border-zinc-200 dark:border-[#1E2637]"
          />
        )}

        <section className="mt-12">
          <h2 className={heading}>Overview</h2>
          <div className={`mt-4 space-y-4 ${body}`}>
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className={heading}>What I did</h2>
          <Bullets items={project.responsibilities} />
        </section>

        {project.flow && (
          <section className="mt-12">
            <h2 className={heading}>{project.flowTitle ?? "How it works"}</h2>
            <ol className={`mt-4 space-y-2 list-decimal pl-5 ${body}`}>
              {project.flow.map((step) => (
                <li key={step.label}>
                  <span className="font-bold text-[#1a1919] dark:text-[#F1EEEE]">{step.label}:</span>{" "}
                  {step.detail}
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className="mt-12">
          <h2 className={heading}>Features</h2>
          <Bullets items={project.features} />
        </section>

        {phoneImages.length > 0 && (
          <section className="mt-12">
            <h2 className={heading}>Screens</h2>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {phoneImages.map((image) => (
                <li
                  key={image.src}
                  className="overflow-hidden rounded-xl border border-zinc-300 dark:border-[#1E2637]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={540}
                    height={1150}
                    sizes="(min-width: 640px) 16rem, 45vw"
                    className="h-auto w-full"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {webImages.length > 0 && (
          <section className="mt-12">
            <h2 className={heading}>Screens</h2>
            <ul className="mt-6 space-y-6">
              {webImages.map((image) => (
                <li
                  key={image.src}
                  className="overflow-hidden rounded-xl border border-zinc-300 dark:border-[#1E2637]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1366}
                    height={768}
                    sizes="(min-width: 1024px) 56rem, 100vw"
                    className="h-auto w-full"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12">
          <h2 className={heading}>Built with</h2>
          <p className={`mt-4 ${body}`}>{project.stack.join(", ")}</p>
        </section>

        {project.outcome && (
          <section className="mt-12">
            <h2 className={heading}>Outcome</h2>
            <p className={`mt-4 ${body}`}>{project.outcome}</p>
          </section>
        )}

        <footer className="mt-16 flex flex-col gap-4 border-t border-[#1a1919]/15 dark:border-gray-500/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className={body}>
            Questions about this one?{" "}
            <a
              href={mailtoUrl}
              className="underline underline-offset-4 decoration-1 hover:text-sky-600 dark:hover:text-sky-400"
            >
              Email me
            </a>
            .
          </p>
          <Link
            href={`/projects/${next.slug}`}
            className="font-bold text-[#1a1919] dark:text-[#F1EEEE] underline underline-offset-4 decoration-1 hover:text-sky-600 dark:hover:text-sky-400"
          >
            Next project: {next.title}
          </Link>
        </footer>
      </article>
    </main>
  );
}
