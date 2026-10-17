import TopNav from "../components/TopNav";
import Link from "next/link";

// Figma frame 1:155 — About page. Light editorial layout: ABOUT display
// heading, bio + abstract photo, four principles in an editorial table,
// an architectural plate, awards table, partner logos, and footer.

export const metadata = {
  title: "About — STUDIO",
  description:
    "A brand-focused creative director specializing in minimal identity, editorial design, and digital experiences.",
};

const PRINCIPLES = [
  {
    label: "Reduction",
    body:
      "Eliminating the superfluous to amplify the core message. Every element must justify its existence within the composition.",
  },
  {
    label: "Precision",
    body:
      "A rigorous attention to typographic detail, grid systems, and spacing. Precision is not just aesthetic; it's structural integrity.",
  },
  {
    label: "Permanence",
    body:
      "Designing beyond current trends. Creating visual languages that endure and mature gracefully over time.",
  },
  {
    label: "Context",
    body:
      "Understanding the environment in which the design lives. Form follows not just function, but the cultural and physical context of the user.",
  },
];

const AWARDS = [
  { label: "AIGA Design Award", body: "2024" },
  { label: "Cannes Lions Gold", body: "2023" },
  { label: "ADC Annual Award", body: "2023" },
];

const PARTNERS = [
  ["APPLE", "GOOGLE", "NIKE", "SAMSUNG", "SONY"],
  ["IBM", "TESLA", "AMAZON", "MICROSOFT", "META"],
];

const MUTE = "#5e5e5e";
const INK = "#0a0a0a";
const LINE = "#cfc4c5";

function EditorialTable({ rows, dense = false }) {
  // Reusable horizontal-bordered table — matches the Figma 1:155 rows:
  // 4-column grid, label in col 1, body in cols 3–4, border-top with
  // #cfc4c5, last row also carries a border-bottom.
  return (
    <div className="flex flex-col items-start w-full">
      {rows.map((row, i) => {
        const isLast = i === rows.length - 1;
        return (
          <div
            key={row.label}
            className="w-full grid"
            style={{
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "16px",
              borderTop: `1px solid ${LINE}`,
              borderBottom: isLast ? `1px solid ${LINE}` : "none",
              padding: `${dense ? "5px" : "5px"} 0 ${dense ? 48 : 96}px`,
            }}
          >
            <div
              className="flex flex-col items-start"
              style={{ gridColumn: "1 / span 1" }}
            >
              <span
                className="font-sans"
                style={{
                  color: MUTE,
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: dense ? "28.8px" : "28.8px",
                  paddingBottom: dense ? "0.8px" : "24.19px",
                }}
              >
                {row.label}
              </span>
            </div>
            <div
              className="flex flex-col items-start"
              style={{ gridColumn: "3 / span 2" }}
            >
              <span
                className="font-sans"
                style={{
                  color: MUTE,
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "26.1px",
                  paddingBottom: dense ? "0.8px" : 0,
                }}
              >
                {row.body}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div
      className="relative w-full"
      style={{ background: "#ffffff", color: INK }}
    >
      <TopNav variant="light" />

      {/* Main content — Figma 1:155 — TopNav sits above in normal flow,
          the inner wrapper's 160px top padding provides the offset the
          design calls for. */}
      <main className="relative w-full">
        <div
          className="flex flex-col items-start w-full"
          style={{
            padding: "160px 10px 80px",
            gap: 120,
          }}
        >
          {/* ABOUT display heading */}
          <div
            className="flex flex-col items-start w-full"
            style={{ paddingBottom: 160 }}
          >
            <h1
              className="font-sans w-full"
              style={{
                color: INK,
                fontWeight: 400,
                fontSize: 120,
                lineHeight: "120px",
                letterSpacing: "-3px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              ABOUT
            </h1>
          </div>

          {/* Hero section — bio on the left, abstract architectural image
              filling the right 44% with a 4:5 aspect ratio. */}
          <section
            className="relative w-full"
            style={{ height: 781.25 }}
          >
            <div
              className="absolute flex flex-col items-start"
              style={{
                left: 0,
                right: 635,
                top: 0,
                paddingRight: 80,
              }}
            >
              <div
                className="flex flex-col items-start w-full"
                style={{ maxWidth: 672 }}
              >
                <p
                  className="font-sans"
                  style={{
                    color: MUTE,
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: "26.1px",
                    margin: 0,
                  }}
                >
                  I believe in the power of reduction. By stripping away the
                  unnecessary, we create space for the essential message to
                  resonate clearly. My approach combines Swiss modernist
                  principles with contemporary digital execution, resulting in
                  work that is both timeless and highly functional.
                </p>
              </div>
            </div>
            <div
              className="absolute overflow-hidden"
              style={{
                left: 635,
                right: 0,
                top: 0,
                aspectRatio: "4 / 5",
                background: "#e2e2e2",
              }}
            >
              <img
                src="/figma/about-architectural.png"
                alt="Architectural abstraction"
                className="cover"
              />
            </div>
          </section>

          {/* Principles / Values section */}
          <section className="flex flex-col items-start w-full">
            <div
              className="flex flex-col items-start w-full"
              style={{ paddingBottom: 64, gap: "22.795px" }}
            >
              <span
                className="font-sans w-full"
                style={{
                  color: MUTE,
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "14px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                PRINCIPLES
              </span>
              <h2
                className="font-sans"
                style={{
                  color: INK,
                  fontWeight: 600,
                  fontSize: 48,
                  lineHeight: "52.8px",
                  letterSpacing: "-1.92px",
                  maxWidth: "896px",
                  margin: 0,
                }}
              >
                A brand-focused creative director
                <br />
                specializing in minimal identity, editorial
                <br />
                design, and digital experiences.
              </h2>
            </div>
            <EditorialTable rows={PRINCIPLES} />
          </section>

          {/* Architectural detail image — bg #e2e2e2, 540px tall. */}
          <section
            className="w-full overflow-hidden"
            style={{
              background: "#e2e2e2",
              height: 540,
            }}
          >
            <img
              src="/figma/about-detail.png"
              alt="Minimalist architectural detail"
              className="cover"
            />
          </section>

          {/* Awards section */}
          <section className="flex flex-col items-start w-full">
            <div
              className="flex flex-col items-start w-full"
              style={{ paddingBottom: 64 }}
            >
              <span
                className="font-sans w-full"
                style={{
                  color: MUTE,
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "14px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                AWARDS
              </span>
            </div>
            <EditorialTable rows={AWARDS} dense />
          </section>

          {/* Partners section — 5-column grid of square tiles with the brand
              name centered in muted text, opacity 0.5. */}
          <section className="flex flex-col items-start w-full">
            <div
              className="flex flex-col items-start w-full"
              style={{ paddingBottom: 64 }}
            >
              <span
                className="font-sans w-full"
                style={{
                  color: MUTE,
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: "14px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                PARTNERS
              </span>
            </div>
            <div
              className="grid w-full"
              style={{
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                gap: 16,
              }}
            >
              {PARTNERS.flat().map((name) => (
                <div
                  key={name}
                  className="relative aspect-square flex items-center justify-center"
                  style={{
                    border: `1px solid ${LINE}`,
                    opacity: 0.5,
                    padding: 1,
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background: "#ffffff",
                      mixBlendMode: "saturation",
                    }}
                  />
                  <span
                    className="relative font-sans"
                    style={{
                      color: MUTE,
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "24px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer — Figma 1:251 sticks the footer to the bottom of the canvas.
          On our flow layout it sits at the natural end of the document. */}
      <footer
        className="w-full"
        style={{
          background: "#ffffff",
          padding: "32px 40px 10px",
        }}
      >
        <div className="flex items-center justify-between">
          <p
            className="font-sans"
            style={{
              color: MUTE,
              fontWeight: 400,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            © 2026 STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center" style={{ gap: 24 }}>
            <Link
              href="#"
              className="font-sans"
              style={{
                color: MUTE,
                fontWeight: 400,
                fontSize: 10,
                lineHeight: "15px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              INSTAGRAM
            </Link>
            <Link
              href="#"
              className="font-sans"
              style={{
                color: MUTE,
                fontWeight: 400,
                fontSize: 10,
                lineHeight: "15px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              LINKEDIN
            </Link>
            <Link
              href="#"
              className="font-sans"
              style={{
                color: MUTE,
                fontWeight: 400,
                fontSize: 10,
                lineHeight: "15px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              TWITTER
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}