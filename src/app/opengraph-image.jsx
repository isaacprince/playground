import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Prince Isaac — Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const neueMachinaBold = await readFile(
    join(process.cwd(), "src/fonts/NeueMachinaUltrabold.otf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0B0B0C",
          color: "#F5F5F4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#FF6600",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 28, color: "#9A9A9A" }}>
            Product Designer · Worldwide
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <span
            style={{
              fontFamily: "Neue Machina",
              fontSize: 92,
              lineHeight: 1.05,
              color: "#F5F5F4",
            }}
          >
            Prince Isaac
          </span>
          <span
            style={{
              fontSize: 34,
              color: "#F5F5F4",
              opacity: 0.85,
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Product design that balances delight with business outcomes.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{ width: 40, height: 3, backgroundColor: "#FF6600", display: "flex" }}
          />
          <span style={{ fontSize: 26, color: "#9A9A9A" }}>princeisaac.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Neue Machina",
          data: neueMachinaBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
