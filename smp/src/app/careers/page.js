import TopNav from "../components/TopNav";
import Link from "next/link";

// Figma frame 1:419 — Careers page ("Visual identity for Paris fashion house
// Loewe"). Single hero project card with overview/metadata, then a black-
// and-white image showcase with mix-blend-saturation plates.

export const metadata = {
  title: "Careers — STUDIO",
  description:
    "Visual identity for Paris fashion house Loewe — STUDIO is an independent creative practice specializing in minimal identity, editorial design, and digital experiences.",
};

const PROJECT = {
  title: "Visual identity for Paris fashion house Loewe",
  overview: [
    "A comprehensive visual identity redesign for the renowned Parisian fashion house,",
    " Loewe. The objective was to modernize the brand's aesthetic while honoring its rich",
    " heritage in leather craftsmanship. The new system spans across digital platforms, print",
  ],
  client: "Loewe Paris",
  year: "2024",
  role: "Art Direction, Identity Design, Web Design",
};

const GALLERY = [
  { src: "/figma/careers-interior-1.png", kind: "full", label: "High-end modern interior" },
  { src: "/figma/careers-detail-1.png", kind: "pair", label: "Minimalist architectural detail" },
  { src: "/figma/careers-interior-2.png", kind: "pair", label: "Sophisticated interior space" },
  { src: "/figma/careers-exterior.png", kind: "full", label: "Modern exterior architecture" },
  { src: "/figma/careers-detail-2.png", kind: "pair", label: "Light and shadow interior detail" },
  { src: "/figma/careers-detail-3.png", kind: "pair", label: "Minimalist staircase design" },
];

export default function CareersPage() {
  return (
    <div
      className="relative w-full"
      style={{
        background: "#000000",
        color: "#ffffff",
      }}
    >
      {/* Hero — 800px tall, full-bleed editorial photograph with dark overlay
          and the Figma 1:419 headline. */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: 800 }}
      >
        <img
          src="/figma/careers-hero.png"
          alt={PROJECT.title}
          className="cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "rgba(0,0,0,0.4)",
          }}
        />
        <div
          className="absolute inset-0 flex items-center justify-start"
          style={{
            padding: "0 10px",
          }}
        >
          <h1
            className="font-sans"
            style={{
              color: "#ffffff",
              fontWeight: 600,
              fontSize: 40,
              lineHeight: "40px",
              letterSpacing: "-2px",
              maxWidth: "12ch",
            }}
          >
            Visual identity for Paris
            <br />
            fashion house Loewe
          </h1>
        </div>
      </section>

      {/* Nav overlay — sits at the very top over the hero. */}
      <div
        className="absolute left-0 right-0"
        style={{ top: 0 }}
      >
        <TopNav variant="dark" />
      </div>

      {/* Project overview + metadata — 12-col grid, 24px gap, 232px row
          height, 12px horizontal page padding, bg #f9f9f9. */}
      <section
        className="relative w-full"
        style={{
          background: "#f9f9f9",
          padding: "20px 10px 120px",
        }}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gap: "24px",
            gridAutoRows: "232px",
          }}
        >
          {/* Left column — Overview text + Read more button. */}
          <div
            className="flex flex-col items-start"
            style={{
              gridColumn: "1 / span 8",
              paddingBottom: 88,
              gap: 4,
            }}
          >
            <span
              className="font-sans"
              style={{
                color: "#0a0a0a",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
              }}
            >
              Overview
            </span>
            <div
              className="flex flex-col items-start"
              style={{ maxWidth: "656px" }}
            >
              <p
                className="font-sans"
                style={{
                  color: "#626263",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  margin: 0,
                }}
              >
                A comprehensive visual identity redesign for the renowned
                Parisian fashion house, Loewe. The objective was to modernize
                the brand's aesthetic while honoring its rich heritage in
                leather craftsmanship. The new system spans across digital
                platforms, print
              </p>
            </div>
            <div
              className="flex flex-col items-start"
              style={{ paddingTop: 16 }}
            >
              <Link
                href="#read-more"
                className="inline-flex items-center"
                style={{ gap: 4 }}
              >
                <span
                  className="font-sans"
                  style={{
                    color: "#0a0a0a",
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: "18px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Read more
                </span>
                <svg
                  width="8.167"
                  height="8.167"
                  viewBox="0 0 8.167 8.167"
                  fill="none"
                  aria-hidden="true"
                  style={{ display: "block" }}
                >
                  <path
                    d="M6.21 4.594H0V3.5h6.21L3.354.85 4.083 0l4.083 4.083L4.083 8.166 3.354 7.317l2.856-2.722V4.594z"
                    fill="#0a0a0a"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right column — Client / Year / Role metadata. */}
          <div
            className="flex flex-col items-start"
            style={{
              gridColumn: "9 / span 4",
              paddingLeft: 48,
              gap: 32,
            }}
          >
            {[
              { label: "Client", value: PROJECT.client },
              { label: "Year", value: PROJECT.year },
              { label: "Role", value: PROJECT.role },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-col items-start w-full"
                style={{ gap: 8 }}
              >
                <span
                  className="font-sans"
                  style={{
                    color: "#838484",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    textTransform: "uppercase",
                    width: "100%",
                  }}
                >
                  {row.label}
                </span>
                <span
                  className="font-sans"
                  style={{
                    color: "#0a0a0a",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    width: "100%",
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image showcase — full-bleed and two-column rows of black-and-white
          plates with mix-blend-saturation over a white base. */}
      <section
        className="relative w-full"
        style={{
          background: "#f9f9f9",
          padding: "0 10px 160px",
        }}
      >
        <div className="flex flex-col items-start" style={{ gap: 24 }}>
          {GALLERY.map((img, i) =>
            img.kind === "full" ? (
              <div
                key={img.src}
                className="relative w-full overflow-hidden"
                style={{ height: 800 }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="cover"
                  style={{ filter: "grayscale(100%) contrast(1.05)" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background: "#ffffff",
                    mixBlendMode: "saturation",
                  }}
                />
              </div>
            ) : null
          )}

          {/* Two-column row 1: interior-1 full is rendered above; the first
              "full" entry already covered it. We pair the remaining plates. */}
          <div
            className="flex items-start justify-center w-full"
            style={{ gap: 24 }}
          >
            <div
              className="relative flex-1 overflow-hidden"
              style={{ height: 800 }}
            >
              <img
                src={GALLERY[1].src}
                alt={GALLERY[1].label}
                className="cover"
                style={{ filter: "grayscale(100%) contrast(1.05)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: "#ffffff",
                  mixBlendMode: "saturation",
                }}
              />
            </div>
            <div
              className="relative flex-1 overflow-hidden"
              style={{ height: 800 }}
            >
              <img
                src={GALLERY[2].src}
                alt={GALLERY[2].label}
                className="cover"
                style={{ filter: "grayscale(100%) contrast(1.05)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: "#ffffff",
                  mixBlendMode: "saturation",
                }}
              />
            </div>
          </div>

          {/* Second full-scale image — exterior. The third entry is "full",
              so we render it here after the first pair. */}
          <div
            className="relative w-full overflow-hidden"
            style={{ height: 800 }}
          >
            <img
              src={GALLERY[3].src}
              alt={GALLERY[3].label}
              className="cover"
              style={{ filter: "grayscale(100%) contrast(1.05)" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: "#ffffff",
                mixBlendMode: "saturation",
              }}
            />
          </div>

          {/* Two-column row 2 */}
          <div
            className="flex items-start justify-center w-full"
            style={{ gap: 24 }}
          >
            <div
              className="relative flex-1 overflow-hidden"
              style={{ height: 800 }}
            >
              <img
                src={GALLERY[4].src}
                alt={GALLERY[4].label}
                className="cover"
                style={{ filter: "grayscale(100%) contrast(1.05)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: "#ffffff",
                  mixBlendMode: "saturation",
                }}
              />
            </div>
            <div
              className="relative flex-1 overflow-hidden"
              style={{ height: 800 }}
            >
              <img
                src={GALLERY[5].src}
                alt={GALLERY[5].label}
                className="cover"
                style={{ filter: "grayscale(100%) contrast(1.05)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: "#ffffff",
                  mixBlendMode: "saturation",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer — Figma 1:419 uses mix-blend-difference so the © text and
          social links stay legible regardless of the section beneath them. */}
      <footer
        className="relative w-full"
        style={{
          padding: "32px 10px 10px",
          color: "#ffffff",
          background: "#000000",
          mixBlendMode: "difference",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ width: "100%" }}
        >
          <p
            className="font-sans"
            style={{
              color: "#ffffff",
              fontWeight: 500,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            © 2026 STUDIO
          </p>
          <div
            className="flex items-start"
            style={{ gap: 24 }}
          >
            <Link
              href="#"
              className="font-sans"
              style={{
                color: "#ffffff",
                fontWeight: 500,
                fontSize: 10,
                lineHeight: "15px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="font-sans"
              style={{
                color: "#ffffff",
                fontWeight: 500,
                fontSize: 10,
                lineHeight: "15px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="font-sans"
              style={{
                color: "#ffffff",
                fontWeight: 500,
                fontSize: 10,
                lineHeight: "15px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}