import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Technivex — Know Where Every Cloud Dollar Goes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f3f1",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 20% 20%, rgba(254,85,46,0.16), transparent 55%), radial-gradient(circle at 85% 80%, rgba(0,104,132,0.14), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={110}
          height={110}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            color: "#403e3f",
          }}
        >
          Technivex
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 16,
            fontSize: 24,
            color: "#726f70",
          }}
        >
          Know where every cloud dollar goes
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 6,
            background: "#fe552e",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
