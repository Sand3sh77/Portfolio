import Image from "next/image";
import { FollowerPointerCard } from "./ui/following-pointer";

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
    slug: "collaboration",
    author: "Prithivi Narayan Campus",
    date: "15th March, 2024",
    title: "PNC-Muroran Collaboration",
    description:
      "This is provided by PNC after copletion of acsdameic collboration with Muroran Institute of Technology, Japan.",
    image: "/images/certifications/collaboration.jpg",
    authorAvatar: "/images/certifications/author/pnc.png",
  },
  {
    slug: "backend-php",
    author: "Association of CSIT Students",
    date: "23rd June, 2023",
    title: "Backend with PHP and Laravel",
    description:
      "This is provided by Association of CSIT students-ACS after joining the Backend program with PHP and Laravel.",
    image: "/images/certifications/php.png",
    authorAvatar: "/images/certifications/author/acs.png",
  },
  {
    slug: "duolingo",
    author: "Duolingo",
    date: "29th Feb, 2024",
    title: "Duolingo English Proficiency Practice",
    description:
      "This is provided by Duolingo website after giving a one-hour English proficiency test.",
    image: "/images/certifications/duolingo.png",
    authorAvatar: "/images/certifications/author/duolingo.png",
  },
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
      alt="thumbnail"
      className="rounded-full border-2 border-white bg-white"
    />
    <p>{title}</p>
  </div>
);

const SkillCertifications: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-5xl mx-auto p-8">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-2xl md:text-5xl md:leading-[3.5rem] font-bold tracking-wide">
          Skill Certifications
        </h2>
        <p className="text-[#1a1919] dark:text-[#A0988C] text-xl tracking-wide">
          Some of the skill certifications I received.
        </p>
      </div>
      <div className="flex justify-evenly items-center gap-5 mt-8">
        {blogContent.map((item) => (
          <div key={item.slug} className="w-80 mx-auto">
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
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
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
    </div>
  );
};

export default SkillCertifications;
