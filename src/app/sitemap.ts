import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${profile.siteUrl}/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
