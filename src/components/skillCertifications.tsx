import Image from "next/image";
import { FollowerPointerCard } from "./ui/following-pointer";
import { moreRecognition } from "@/data/skills";

interface BlogContent {
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  authorAvatar: string;
}

const blogContent: BlogContent[] = [
  {
    slug: "hackathon",
    author: "Free Students Union-PEC",
    date: "16th June, 2024",
    title: "Winner of Yantra Hackathon",
    description:
      "Provided by Free Students Union-Pokhara Engineering College after winning the 36 hour Yantra hackathon.",
    image: "/images/certifications/hackathon.jpg",
    authorAvatar: "/images/certifications/author/pec.png",
  },
  {
    slug: "hackerrank-software-engineer",
    author: "HackerRank",
    date: "4th January, 2026",
    title: "Software Engineer",
    description:
      "Passed HackerRank's Software Engineer role certification test.",
    image: "/images/certifications/hackerrank-software-engineer.jpg",
    authorAvatar: "/images/certifications/author/hackerrank.png",
  },
  {
    slug: "hackerrank-frontend-react",
    author: "HackerRank",
    date: "3rd January, 2026",
    title: "Frontend Developer (React)",
    description:
      "Passed HackerRank's Frontend Developer (React) role certification test.",
    image: "/images/certifications/hackerrank-frontend-react.jpg",
    authorAvatar: "/images/certifications/author/hackerrank.png",
  },
  {
    slug: "hackerrank-node",
    author: "HackerRank",
    date: "3rd January, 2026",
    title: "Node (Basic)",
    description: "Passed HackerRank's Node (Basic) skill certification test.",
    image: "/images/certifications/hackerrank-node.jpg",
    authorAvatar: "/images/certifications/author/hackerrank.png",
  },
  {
    slug: "remote-work-masterclass",
    author: "Remote Job Nepal",
    date: "12th September, 2026",
    title: "Remote Work Masterclass",
    description:
      "Attended the Remote Work Masterclass run by Remote Job Nepal with Khalti.",
    image: "/images/certifications/remote-work-masterclass.jpg",
    authorAvatar: "/images/certifications/author/remote-job-nepal.png",
  },
  {
    slug: "30dayschallenge",
    author: "Learning Utsav",
    date: "21st November, 2024",
    title: "30 Days Learning Challenge",
    description:
      "Provided by Learning Utsav after the succesful completion of the 30 days learning challenge.",
    image: "/images/certifications/30dayschallenge.png",
    authorAvatar: "/images/certifications/author/learning_utsav_logo.jpg",
  },
  {
    slug: "collaboration",
    author: "Prithivi Narayan Campus",
    date: "15th March, 2024",
    title: "PNC-Muroran Collaboration",
    description:
      "Provided by PNC after completion of academic collaboration with Muroran Institute of Technology, Japan.",
    image: "/images/certifications/collaboration.jpg",
    authorAvatar: "/images/certifications/author/pnc.png",
  },
  // {
  //   slug: "backend-php",
  //   author: "Association of CSIT Students",
  //   date: "23rd June, 2023",
  //   title: "Backend with PHP and Laravel",
  //   description:
  //     "Provided by Association of CSIT students-ACS after joining the Backend program with PHP and Laravel.",
  //   image: "/images/certifications/php.png",
  //   authorAvatar: "/images/certifications/author/acs.png",
  // },
  // {
  //   slug: "duolingo",
  //   author: "Duolingo",
  //   date: "29th Feb, 2024",
  //   title: "Duolingo English Proficiency Test",
  //   description:
  //     "Provided by Duolingo after passing the English proficiency test.",
  //   image: "/images/certifications/duolingo.png",
  //   authorAvatar: "/images/certifications/author/duolingo.png",
  // },
];

interface TitleComponentProps {
  title: string;
  avatar: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title, avatar }) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height={20}
      width={20}
      alt=""
      className="rounded-full border-2 border-white bg-white"
    />
    <p>{title}</p>
  </div>
);

const SkillCertifications: React.FC = () => {
  return (
    <section
      id="certificates"
      className="flex flex-col justify-center items-center min-h-screen max-w-5xl mx-auto p-8"
    >
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
          Awards &amp; Certifications
        </h2>
        <p className="text-[#1a1919] dark:text-[#A0988C] text-base md:text-xl tracking-wide">
          Certificates first, then the other recognition I&apos;ve received.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center lg:items-stretch gap-5 mt-8">
        {blogContent.map((item) => (
          <div
            key={item.slug}
            className="w-[20rem] md:w-[25rem] lg:w-[20rem] mx-auto"
          >
            <FollowerPointerCard
              title={
                <TitleComponent
                  title={item.author}
                  avatar={item.authorAvatar}
                />
              }
            >
              <div className="relative flex flex-col justify-between overflow-hidden h-full min-h-[24rem] rounded-2xl transition duration-200 group bg-white dark:bg-[#13182F] hover:shadow-xl border border-zinc-100 dark:border-none">
                <div className="w-full h-[12rem] bg-gray-100 dark:bg-[#13182F] rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 25rem, 20rem"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-2 text-lg text-zinc-700 dark:text-[#f1eeee]">
                    {item.title}
                  </h2>
                  <h2 className="font-normal my-2 text-sm text-zinc-500 dark:text-[#e7e3e3]">
                    {item.description}
                  </h2>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500 dark:text-[#d4d3d3]">
                      Received date : {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        ))}
      </div>

      <ul className="w-full mt-12 divide-y divide-[#1a1919]/15 dark:divide-gray-500/30 border-y border-[#1a1919]/15 dark:border-gray-500/30">
        {moreRecognition.map((item) => (
          <li key={item.text} className="grid gap-1 py-3 sm:grid-cols-[5rem_1fr] sm:gap-6">
            <span className="text-sm text-[#555] dark:text-[#A0988C]">{item.year}</span>
            <span className="leading-relaxed text-[#333] dark:text-[#B8B8B8]">{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillCertifications;
