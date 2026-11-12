import { profile } from "@/data/profile";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-base md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
        {" { " + profile.domain + " } "}
      </div>
    </div>
  );
};

export default Loading;
