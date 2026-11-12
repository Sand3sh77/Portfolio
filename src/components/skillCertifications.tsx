import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { certificates, moreRecognition, type Certificate } from "@/data/skills";

function Issuer({ certificate }: { certificate: Certificate }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#555] dark:text-[#A0988C]">
      <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-[#1E2637] bg-white">
        <Image src={certificate.issuerLogo} alt="" fill sizes="24px" className="object-contain" />
      </span>
      <span className="truncate">{certificate.issuer}</span>
      <span className="ml-auto shrink-0">{certificate.date}</span>
    </div>
  );
}

function Thumbnail({ certificate, sizes }: { certificate: Certificate; sizes: string }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={certificate.image}
        alt={`${certificate.title} certificate`}
        fill
        sizes={sizes}
        className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </div>
  );
}

const cardClass =
  "group overflow-hidden rounded-2xl border border-zinc-200 dark:border-[#1E2637] bg-white dark:bg-[#13182F] transition-colors hover:border-[#1a1919]/40 dark:hover:border-gray-500";
const thumbBg = "bg-[#eceef2] dark:bg-[#1E2637]";

const SkillCertifications: React.FC = () => {
  const featured = certificates.filter((item) => item.featured);
  const rest = certificates.filter((item) => !item.featured);

  return (
    <section id="certificates" className="px-6 py-20 md:px-12 md:py-28">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
            Awards &amp; Certifications
          </h2>
          <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
            Click any certificate to see it full size.
          </p>
        </div>

        {featured.map((item) => (
          <a
            key={item.title}
            href={item.image}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardClass} mt-12 md:mt-16 grid md:grid-cols-[1.3fr_1fr]`}
          >
            <div className={`${thumbBg} aspect-[16/11] p-5 md:p-8`}>
              <Thumbnail certificate={item} sizes="(min-width: 768px) 40rem, 100vw" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
              <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                {item.type}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1919] dark:text-[#F1EEEE]">
                {item.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#333] dark:text-[#B8B8B8]">
                {item.featured}
              </p>
              <Issuer certificate={item} />
              <span className="inline-flex items-center gap-1 text-sm font-bold text-[#1a1919] dark:text-[#F1EEEE]">
                View certificate
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <li key={item.title}>
              <a
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} flex h-full flex-col`}
              >
                <div className={`${thumbBg} aspect-[4/3] p-5`}>
                  <Thumbnail
                    certificate={item}
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-5">
                  <p className="text-sm text-[#555] dark:text-[#A0988C]">
                    {item.type}
                  </p>
                  <h3 className="text-lg font-bold leading-snug text-[#1a1919] dark:text-[#F1EEEE]">
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-4">
                    <Issuer certificate={item} />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <h3 className="text-lg font-bold text-[#1a1919] dark:text-[#F1EEEE]">
            Other recognition
          </h3>
          <ul className="mt-4 divide-y divide-[#1a1919]/15 dark:divide-gray-500/30 border-y border-[#1a1919]/15 dark:border-gray-500/30">
            {moreRecognition.map((item) => (
              <li key={item.text} className="grid gap-1 py-3 sm:grid-cols-[5rem_1fr] sm:gap-6">
                <span className="text-sm text-[#555] dark:text-[#A0988C]">{item.year}</span>
                <span className="leading-relaxed text-[#333] dark:text-[#B8B8B8]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillCertifications;
