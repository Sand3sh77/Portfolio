import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Globe,
  GraduationCap,
  Smartphone,
  Trophy,
  Users,
} from "lucide-react";
import {
  hackathon,
  hackerrank,
  recognition,
  type RecognitionIcon,
} from "@/data/skills";
import { cn } from "@/lib/utils";

const icons: Record<RecognitionIcon, typeof Trophy> = {
  phone: Smartphone,
  school: GraduationCap,
  team: Users,
  globe: Globe,
};

const tile =
  "rounded-2xl border border-zinc-200 dark:border-[#1E2637] bg-white dark:bg-[#13182F]";
const muted = "text-[#555] dark:text-[#A0988C]";
const heading = "text-[#1a1919] dark:text-[#F1EEEE]";

const SkillCertifications: React.FC = () => {
  return (
    <section id="certificates" className="px-6 py-20 md:px-12 md:py-28">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
            Awards &amp; Certifications
          </h2>
          <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
            A few things I&apos;m proud of.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(13rem,auto)]">
          {/* Hackathon win: the certificate photo fills the tile. */}
          <a
            href={hackathon.image}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-h-[22rem] overflow-hidden rounded-2xl md:col-span-2 lg:row-span-2"
          >
            <Image
              src={hackathon.image}
              alt="Yantra Hackathon winner certificate"
              fill
              sizes="(min-width: 1024px) 36rem, (min-width: 768px) 90vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* Solid at the bottom so the text never sits on the certificate's own text. */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222] from-40% via-[#0C1222]/85 via-60% to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-black">
                <Trophy aria-hidden className="h-4 w-4" />
                {hackathon.result}
              </span>
              <p className="mt-4 text-3xl md:text-4xl font-bold">{hackathon.title}</p>
              <p className="mt-2 text-base md:text-lg text-white/85">
                {hackathon.detail}, {hackathon.date}.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold underline underline-offset-4 decoration-white/50 group-hover:decoration-white">
                View certificate
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </span>
            </div>
          </a>

          {/* HackerRank: one tile, a badge per certificate. */}
          <div className={cn(tile, "flex flex-col p-6 md:col-span-2")}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={cn("text-sm", muted)}>HackerRank, {hackerrank.date}</p>
                <h3 className={cn("mt-1 text-xl font-bold", heading)}>{hackerrank.title}</h3>
              </div>
              <BadgeCheck aria-hidden className="h-8 w-8 shrink-0 text-emerald-500" />
            </div>
            <p className={cn("mt-2 text-sm md:text-base", muted)}>{hackerrank.detail}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-5">
              {hackerrank.certificates.map((cert) => (
                <li key={cert.href}>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-sm font-bold text-emerald-800 dark:text-emerald-300 transition-colors hover:bg-emerald-500/20"
                  >
                    {cert.label}
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {recognition.map((item) => {
            const Icon = icons[item.icon];
            const body = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#eceef2] dark:bg-[#1E2637]">
                    <Icon aria-hidden className={cn("h-5 w-5", heading)} />
                  </span>
                  <span className={cn("text-sm", muted)}>{item.date}</span>
                </div>
                <h3 className={cn("mt-5 text-lg font-bold leading-snug", heading)}>
                  {item.title}
                </h3>
                <p className={cn("mt-1 text-sm", muted)}>{item.issuer}</p>
                <p className="mt-2 text-sm md:text-base text-[#333] dark:text-[#B8B8B8]">
                  {item.description}
                </p>
                {item.href && (
                  <span className={cn("mt-auto pt-4 inline-flex items-center gap-1 text-sm font-bold underline underline-offset-4 decoration-1", heading)}>
                    View certificate
                    <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </span>
                )}
              </>
            );
            const className = cn(
              tile,
              "flex flex-col p-6",
              item.wide && "lg:col-span-2",
              item.href && "transition-colors hover:border-[#1a1919]/40 dark:hover:border-gray-500"
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {body}
              </a>
            ) : (
              <div key={item.title} className={className}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillCertifications;
