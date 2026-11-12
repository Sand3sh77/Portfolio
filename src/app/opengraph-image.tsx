import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

// The Node runtime build of next/og fails to prerender on Windows.
export const runtime = "edge";
export const alt = `${profile.name} | ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 44, color: "#38bdf8" }}>
          {profile.title}
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 30 }}>
          {profile.focus}
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 30, color: "#A0988C" }}>
          {profile.domain}
        </div>
      </div>
    ),
    size
  );
}
