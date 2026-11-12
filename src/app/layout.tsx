import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/profile";

const title = `${profile.name} | ${profile.title}`;
const description =
  "Sandesh Subedi is a software engineer in Pokhara, Nepal. He leads an AI-powered OSINT platform at AiGeeks and builds web and mobile apps with React, Next.js, React Native and Node.js.";

const font = Raleway({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: [
    "Sandesh Subedi",
    "Software Engineer",
    "Project Lead",
    "Full Stack Developer",
    "LLM Integration",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/images/favicon.png" },
  // The Open Graph and Twitter images come from src/app/opengraph-image.tsx.
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Sandesh Subedi Portfolio",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  authors: [{ name: profile.name }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // next-themes sets the theme class on <html> before hydration.
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-[#1a1919] focus:shadow"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
