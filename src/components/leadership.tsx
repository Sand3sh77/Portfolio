import { leadership } from "@/data/skills";

const Leadership = () => {
  return (
    <section id="leadership" className="px-6 py-20 md:px-12 md:py-28">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
            Leadership &amp; Community
          </h2>
          <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
            What I do outside my day job.
          </p>
        </div>

        <ul className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2">
          {leadership.map((item) => (
            <li
              key={`${item.role}-${item.period}`}
              className="rounded-xl border border-zinc-200 dark:border-[#1E2637] bg-white dark:bg-[#13182F] p-5 md:p-6"
            >
              <p className="text-sm text-[#555] dark:text-[#A0988C]">{item.period}</p>
              <h3 className="mt-1 text-lg font-bold text-[#1a1919] dark:text-[#F1EEEE]">
                {item.role}
              </h3>
              <p className="text-sm md:text-base text-[#555] dark:text-[#B8B8B8]">{item.org}</p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-[#333] dark:text-[#B8B8B8]">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Leadership;
