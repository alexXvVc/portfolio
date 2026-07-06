import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#0b0a1f",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 24,
            height: 18,
            background: "#c6ff00",
            transform: "skewX(-12deg)",
          }}
        />
        <span
          style={{
            position: "relative",
            fontSize: 20,
            fontWeight: 900,
            color: "#0b0a1f",
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size },
  );
}
