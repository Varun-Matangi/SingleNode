import { ImageResponse } from "next/og";

export const alt = "SingleNode Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          backgroundImage:
            "radial-gradient(ellipse 60% 55% at 50% 15%, rgba(168,255,62,0.16) 0%, rgba(0,0,0,0) 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#a8ff3e",
            }}
          />
          SingleNode<span style={{ color: "#a8ff3e" }}>.</span>Studio
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            maxWidth: 980,
          }}
        >
          Every system your business runs on. Built by one studio.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 28,
            color: "#a6a8a9",
          }}
        >
          Application Development · Web · Automation · Infrastructure
        </div>
      </div>
    ),
    { ...size }
  );
}
