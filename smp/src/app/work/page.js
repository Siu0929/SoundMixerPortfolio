import TopNav from "../components/TopNav";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";
import { GRID_CARDS } from "../data/projects";

// /work renders the same 9-card grid as /projects, but as a list of large
// editorial rows so the "List view" toggle in the Figma toggle has somewhere
// to land.
export const metadata = {
  title: "Work — STUDIO",
  description: "An editorial list view of recent projects from the studio.",
};

export default function WorkPage() {
  return (
    <>
      <TopNav variant="light" />

      <main
        className="flex-1 relative w-full"
        style={{ background: "#ffffff" }}
      >
        <section
          className="relative w-full"
          style={{ padding: "10px", paddingTop: 224 }}
        >
          <h1
            className="font-sans"
            style={{
              fontWeight: 600,
              fontSize: 48,
              lineHeight: "52.8px",
              letterSpacing: "-1.92px",
              color: "#0a0a0a",
            }}
          >
            All Projects (12)
          </h1>
        </section>

        <section
          className="relative w-full"
          style={{ padding: "40px 10px 80px" }}
        >
          <ul
            className="flex flex-col"
            style={{ borderTop: "1px solid #e6e6e6" }}
          >
            {GRID_CARDS.map((card, i) => (
              <li
                key={`${card.id}-${i}`}
                style={{ borderBottom: "1px solid #e6e6e6" }}
              >
                <Link
                  href={`/projects/${card.id.replace("card-", "")}`}
                  className="flex items-center justify-between hover:bg-[#fafafa] transition-colors"
                  style={{ padding: "32px 0" }}
                >
                  <div
                    className="flex items-center"
                    style={{ gap: 24 }}
                  >
                    <span
                      className="font-sans"
                      style={{
                        fontWeight: 500,
                        fontSize: 12,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#9a9a9a",
                        width: 32,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-sans"
                      style={{
                        fontWeight: 600,
                        fontSize: 22,
                        lineHeight: 1.2,
                        color: "#0a0a0a",
                      }}
                    >
                      {card.label}
                    </span>
                  </div>
                  <span
                    className="font-sans"
                    style={{
                      fontWeight: 500,
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#9a9a9a",
                    }}
                  >
                    2024
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

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