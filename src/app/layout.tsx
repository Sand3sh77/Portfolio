import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const font = Raleway({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  metadataBase: new URL("https://subedisandesh7.com.np"),
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
  alternates: { canonical: "/" },
  icons: { icon: "/images/favicon.png" },
  // The Open Graph and Twitter images come from src/app/opengraph-image.tsx.
  openGraph: {
    title: "Sandesh Subedi | Full Stack Web Developer",
    description:
      "Explore projects and skills of Sandesh Subedi, specializing in React, Next.js, Node.js, and full stack web development.",
    url: "/",
    siteName: "Sandesh Subedi Portfolio",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  authors: [{ name: "Sandesh Subedi" }],
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
