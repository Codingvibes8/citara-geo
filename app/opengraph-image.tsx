import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#06070a",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#c8ff3e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 40px -4px rgba(200,255,62,0.7)",
            }}
          >
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#06070a" strokeWidth="2.6" strokeLinecap="round">
              <path d="M17.5 7.5A7 7 0 1 0 17.5 16.5" />
              <circle cx="18.2" cy="12" r="1.6" fill="#06070a" stroke="none" />
            </svg>
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            citara
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            letterSpacing: "-0.03em",
          }}
        >
          AI SEO for Cosmetic Surgery
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            textAlign: "center",
            marginTop: "20px",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Get recommended by ChatGPT, Perplexity, Gemini & Google AI Overviews
        </div>

        {/* Gradient accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #c8ff3e 0%, #4be1ec 25%, #8b7bff 50%, #4be1ec 75%, #c8ff3e 100%)",
          }}
        />
      </div>
    ),
    size
  );
}
