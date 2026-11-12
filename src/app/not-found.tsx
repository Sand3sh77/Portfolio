import Link from "next/link";
import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center bg-[#dee0e6d2] dark:bg-[#0C1222]"
    >
      <Navbar />
      <p className="text-sm text-[#555] dark:text-[#A0988C]">404</p>
      <h1 className="text-3xl md:text-5xl font-bold text-[#1a1919] dark:text-[#F1EEEE]">
        This page doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="mt-2 font-bold text-[#1a1919] dark:text-[#F1EEEE] underline underline-offset-4 decoration-1 hover:text-sky-600 dark:hover:text-sky-400"
      >
        Back to the homepage
      </Link>
    </main>
  );
}
