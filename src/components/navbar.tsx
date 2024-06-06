import Link from "next/link";

const Navbar = () => {
  return (
    <section className="absolute top-0 w-full h-20 bg-[#151932d2] z-20">
      <div className="h-full w-[90%] m-auto flex justify-between items-center">
        <div className="flex gap-5">
          {/* <div>Burger</div> */}
          <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... bg-clip-text text-transparent text-lg md:text-2xl font-bold">
            {" { " + "dev.sandesh.com" + " } "}
          </div>
        </div>
        <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="bg-[#1E2637] rounded text-[#c2b7c5] text-base font-semibold tracking-widest px-7 py-3 cursor-pointer">
            RESUME
          </div>
        </a>
      </div>
    </section>
  );
};

export default Navbar;
