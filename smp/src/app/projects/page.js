import TopNav from "../components/TopNav";
import SiteFooter from "../components/SiteFooter";
import ViewToggle from "../components/ViewToggle";
import Link from "next/link";
import { GRID_CARDS } from "../data/projects";

// Figma frame 1:2 — "Project Page". White background, 48px Inter Semi Bold
// title with a GRID | LIST VIEW toggle, then an 8-column asymmetric grid with
// 200px row height and 10px gaps.
//
//   Row A: card1 [cols 1–4, rows 1–3]
//   Row A: card2 [cols 5–6, rows 1–2]
//   Row A: card3 [cols 7–8, rows 1–3]
//   Row B: card4 [cols 5–6, rows 3–4]
//   Row C: card5 [cols 1–4, rows 4–6]
//   Row C: card6 [cols 7–8, rows 4–6]
//   Row D: card7 [cols 5–6, rows 5–6]
//   Row E: card8 [cols 1–2, rows 7–8]
//   Row E: card9 [cols 3–6, rows 7–8]

export const metadata = {
  title: "Projects — STUDIO",
  description:
    "A complete index of projects — fashion, automotive, product, and editorial work from the studio.",
};

// Each grid slot mirrors the Figma `grid-column` / `grid-row` placement.
const SLOTS = [
  { id: "card-fashion-1", col: "1 / span 4", row: "1 / span 3" },
  { id: "card-auto-1",    col: "5 / span 2", row: "1 / span 2" },
  { id: "card-product-1", col: "7 / span 2", row: "1 / span 3" },
  { id: "card-product-2", col: "5 / span 2", row: "3 / span 2" },
  { id: "card-fashion-2", col: "1 / span 4", row: "4 / span 3" },
  { id: "card-auto-2",    col: "7 / span 2", row: "4 / span 3" },
  { id: "card-auto-3",    col: "5 / span 2", row: "5 / span 2" },
  { id: "card-product-3", col: "1 / span 2", row: "7 / span 2" },
  { id: "card-fashion-1", col: "3 / span 4", row: "7 / span 2" },
];

export default function ProjectsPage() {
  return (
    <>
      <TopNav variant="light" />

      <main
        className="flex-1 relative w-full"
        style={{
          background: "#ffffff",
        }}
      >
        {/* Section header — Figma 1:2: 48px Inter Semi Bold title with the
            GRID | LIST VIEW toggle on the right. */}
        <section
          className="relative w-full"
          style={{
            padding: "10px",
            paddingTop: 224,
          }}
        >
          <div
            className="flex items-end justify-between w-full"
            style={{ paddingBottom: 10 }}
          >
            <h1
              className="font-sans"
              style={{
                fontWeight: 600,
                fontSize: 48,
                lineHeight: "52.8px",
                letterSpacing: "-1.92px",
                color: "#0a0a0a",
                whiteSpace: "nowrap",
              }}
            >
              All Projects (12)
            </h1>
            <ViewToggle active="grid" basePath="/projects" />
          </div>
        </section>

        {/* 8-col grid — 200px rows × 10px gaps, mirror of Figma 1:2. */}
        <section
          className="relative w-full"
          style={{ padding: "10px" }}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
              gridAutoRows: "200px",
              gap: "10px",
              width: "100%",
            }}
          >
            {SLOTS.map((slot, i) => {
              const card = GRID_CARDS[i];
              return (
                <Link
                  key={`${slot.id}-${i}`}
                  href={`/projects/${card.id.replace("card-", "")}`}
                  aria-label={card.label}
                  className="relative overflow-hidden"
                  style={{
                    gridColumn: slot.col,
                    gridRow: slot.row,
                    background: "#0a0a0a",
                  }}
                >
                  <img
                    src={card.src}
                    alt={card.label}
                    className="cover"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Footer — Figma 1:2 puts the footer 1976.8px from the top of the
            2033.8px tall canvas. We let it flow naturally at the bottom of
            the page. */}
        <SiteFooter
          variant="light"
          year="2026"
          brand="STUDIO"
          copyRight="© 2026 STUDIO"
        />
      </main>
    </>
  );
}