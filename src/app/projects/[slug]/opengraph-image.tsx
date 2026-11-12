import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { getProject } from "@/data/projects";

// The Node runtime build of next/og fails to prerender on Windows.
export const runtime = "edge";
export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ProjectOpengraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#0C1222",
          color: "#E6E8EE",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#A0988C" }}>
          {project ? `${project.kind}, ${project.period.toLowerCase()}` : "Project"}
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 80, fontWeight: 700, color: "#38bdf8" }}>
          {project?.title ?? "Project"}
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 36, maxWidth: 1000, lineHeight: 1.3 }}>
          {project?.tagline ?? ""}
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 28, color: "#A0988C" }}>
          {profile.name}, {profile.domain}
        </div>
      </div>
    ),
    size
  );
}
