import TopNav from "../components/TopNav";
import Link from "next/link";

// Figma frame 7:72 — Contact / Get in touch page.
// Full-bleed black canvas with a centered uppercase manifesto heading, a
// square portrait plate (mix-blend-saturation), a small uppercase tagline
// underneath, and a dark footer pinned to the bottom. The page intentionally
// uses placeholder Lorem-style copy so the studio can swap in real contact
// copy when ready — match the typography, do not the prose.

export const metadata = {
  title: "Contact — STUDIO",
  description:
    "Get in touch with STUDIO — an independent creative practice specializing in minimal identity, editorial design, and digital experiences.",
};

const HEADING_LINES = [
  "LOREM IPSUM DOLOR SIT",
  "AMET, CONSECTETUR",
  "ADIPISCING ELIT, SED DO",
  "EIUSMOD TEMPOR",
  "INCIDIDUNT UT LABORE ET",
  "DOLORE MAGNA ALIQUA. UT",
  "ENIM AD MINIM VENIAM",
  "CRAFT, , QUIS NOSTRUD.",
];

const TAGLINE_LINES = [
  "CRAFTING DIGITAL LEGACIES THROUGH RELENTLESS",
  "PURSUIT OF EXCELLENCE AND COLLABORATIVE SPIRIT.",
  "EVERY PIXEL SERVES A PURPOSE, EVERY INTERACTION",
  "TELLS A STORY.",
];

const SOCIAL_LINKS = [
  { label: "INSTAGRAM", href: "#" },
  { label: "LINKEDIN", href: "#" },
  { label: "TWITTER", href: "#" },
];

export default function ContactPage() {
  return (
    <div
      className="flex flex-col items-start justify-between relative w-full min-h-screen"
      style={{ background: "#000000", color: "#ffffff" }}
    >
      {/* Main content — Figma 7:73 wraps the manifesto and image sections
          with padding 80px (sides) / 160px (vertical) and a 1920px ceiling. */}
      <main
        className="relative w-full"
        style={{
          padding: "160px 80px",
        }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: 1920 }}>
          {/* Manifesto section — gap 96px between heading and image block.
              Figma 7:74 stacks the heading and the image / caption block
              inside a column with 96px between them. */}
          <section
            className="flex flex-col items-center w-full"
            style={{ gap: 96 }}
          >
            {/* Heading 1 — Figma 7:75 / 7:76: max-width 1400px, Inter Bold
                76.8px, line-height 69.12px, letter-spacing -2.304px,
                uppercase, white, centered. */}
            <div
              className="flex flex-col items-center w-full"
              style={{ maxWidth: 1400 }}
            >
              <h1
                className="font-sans text-center uppercase"
                style={{
                  fontWeight: 700,
                  fontSize: "76.8px",
                  lineHeight: "69.12px",
                  letterSpacing: "-2.304px",
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                {HEADING_LINES.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            {/* Image & detail — Figma 7:77. max-width 400px, gap 32px
                between the square plate and the tagline caption. */}
            <div
              className="flex flex-col items-center"
              style={{
                maxWidth: 400,
                width: 400,
                gap: 32,
              }}
            >
              {/* Image container — Figma 7:78. Square plate, bg #111 with
                  a 1px rgba(255,255,255,0.05) border and 33px inner
                  padding. Inside, the portrait uses mix-blend-saturation
                  over a white layer, exactly like the careers plate. */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "1 / 1",
                  background: "#111111",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  padding: 33,
                }}
              >
                {/* Portrait — Figma 7:79. flex: 1 0 0, h-full, opacity 0.9,
                    positioned to fill the 33px-padded interior of the
                    container. */}
                <div
                  className="relative w-full h-full"
                  style={{ opacity: 0.9 }}
                >
                  <img
                    src="/figma/contact-portrait.png"
                    alt="Studio portrait"
                    className="cover"
                  />
                </div>

                {/* Saturation overlay — covers the full plate so the
                    underlying image renders with desaturated tones,
                    matching the careers-page treatment. */}
                <div
                  aria-hidden="true"
                  className="absolute"
                  style={{
                    inset: 0,
                    background: "#ffffff",
                    mixBlendMode: "saturation",
                  }}
                />
              </div>

              {/* Caption — Figma 7:80 / 7:81. Inter Regular 10px,
                  rgba(255,255,255,0.7), tracking 2px, line-height 18px,
                  uppercase, centered. */}
              <div className="flex flex-col items-center w-full">
                <p
                  className="font-sans text-center uppercase"
                  style={{
                    fontWeight: 400,
                    fontSize: 10,
                    lineHeight: "18px",
                    letterSpacing: "2px",
                    color: "rgba(255, 255, 255, 0.7)",
                    margin: 0,
                  }}
                >
                  {TAGLINE_LINES.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer — Figma 7:82. Black bg with a 1px top divider line in
          rgba(255,255,255,0.1), padding 33px top / 10px bottom / 10px
          sides. Three groups: STUDIO wordmark (left), social links
          (centred), copyright (right). */}
      <footer
        className="relative w-full"
        style={{
          background: "#000000",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "33px 10px 10px",
        }}
      >
        <div className="flex items-center justify-between w-full">
          {/* STUDIO wordmark — Figma 7:83 / 7:84. */}
          <div className="flex flex-col items-start">
            <span
              className="font-sans uppercase"
              style={{
                fontWeight: 700,
                fontSize: 10,
                lineHeight: "15px",
                letterSpacing: "1px",
                color: "#ffffff",
              }}
            >
              STUDIO
            </span>
          </div>

          {/* Social links — Figma 7:87. Centered cluster of three text
              links in rgba(255,255,255,0.6). */}
          <div
            className="flex items-center"
            style={{
              gap: 32,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {SOCIAL_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="font-sans uppercase"
                style={{
                  fontWeight: 500,
                  fontSize: 10,
                  lineHeight: "15px",
                  letterSpacing: "1.5px",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Copyright — Figma 7:85 / 7:86. Inter Medium 10px,
              rgba(255,255,255,0.6), tracking 1.5px. */}
          <div className="flex flex-col items-start">
            <span
              className="font-sans uppercase"
              style={{
                fontWeight: 500,
                fontSize: 10,
                lineHeight: "15px",
                letterSpacing: "1.5px",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              © STUDIO MMXXIV
            </span>
          </div>
        </div>
      </footer>

      {/* Nav overlay — Figma 7:94. Sits at the very top over the page
          content (it overlays the 160px top padding). */}
      <div
        className="absolute left-0 right-0"
        style={{ top: 0, zIndex: 30 }}
      >
        <TopNav variant="dark" />
      </div>
    </div>
  );
}
