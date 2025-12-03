import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
/>;

const font = Raleway({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Sandesh Subedi | Full-Stack Developer",
  description:
    "Portfolio of Sandesh Subedi, a full stack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Sandesh Subedi",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Sandesh Subedi | Full Stack Web Developer",
    description:
      "Explore projects and skills of Sandesh Subedi, specializing in React, Next.js, Node.js, and full stack web development.",
    url: "https://subedisandesh7.com.np",
    siteName: "Sandesh Subedi Portfolio",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  authors: [{ name: "Sandesh Subedi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
