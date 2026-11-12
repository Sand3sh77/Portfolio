import { ArrowUpRight } from "lucide-react";
import { awards, certifications, type Recognition } from "@/data/skills";

function RecognitionList({ title, items }: { title: string; items: Recognition[] }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#1a1919] dark:text-[#F1EEEE]">{title}</h3>
      <ul className="mt-4 divide-y divide-[#1a1919]/15 dark:divide-gray-500/30 border-y border-[#1a1919]/15 dark:border-gray-500/30">
        {items.map((item) => (
          <li key={item.title} className="flex items-baseline justify-between gap-4 py-4">
            <div>
              {item.image ? (
                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-1 font-bold text-[#1a1919] dark:text-[#F1EEEE] hover:underline underline-offset-4 decoration-1"
                >
                  {item.title}
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 self-center text-[#555] dark:text-[#A0988C]" />
                  <span className="sr-only">(view certificate)</span>
                </a>
              ) : (
                <p className="font-bold text-[#1a1919] dark:text-[#F1EEEE]">{item.title}</p>
              )}
              <p className="text-sm text-[#555] dark:text-[#B8B8B8]">
                {item.issuer}
                {item.note && `. ${item.note}`}
              </p>
            </div>
            <span className="shrink-0 text-sm text-[#555] dark:text-[#A0988C]">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SkillCertifications: React.FC = () => {
  return (
    <section id="certificates" className="px-6 py-20 md:px-12 md:py-28">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
            Awards &amp; Certifications
          </h2>
          <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
            Titles with an arrow open the certificate.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <RecognitionList title="Awards" items={awards} />
          <RecognitionList title="Certifications" items={certifications} />
        </div>
      </div>
    </section>
  );
};

export default SkillCertifications;
