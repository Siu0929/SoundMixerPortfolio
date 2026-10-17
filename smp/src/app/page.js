import TopNav from "./components/TopNav";
import SiteFooter from "./components/SiteFooter";
import Link from "next/link";
import { HERO_BG } from "./data/projects";

// Figma frame 1:60 — "All Projects" hero. The hero image fills the entire
// viewport from edge to edge; the TopNav and footer overlay on top of it.
export const metadata = {
  title: "STUDIO — All Projects",
  description:
    "An independent creative practice specializing in minimal identity, editorial design, and digital experiences.",
};

export default function HomePage() {
  return (
    <div
      className="relative w-full"
      style={{
        minHeight: "100vh",
        background: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Hero image — absolute fill of the viewport. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        style={{ background: "#000000" }}
      >
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "125%",
            top: "-12.5%",
            left: 0,
          }}
        />
        {/* Figma 1:60 overlay — black with mix-blend-mode:luminosity at
            60% opacity desaturates the architectural image underneath. */}
        <div
          className="absolute inset-0"
          style={{
            background: "#000000",
            mixBlendMode: "luminosity",
            opacity: 0.6,
          }}
        />
      </div>

      {/* Nav overlay — sits on top of the hero image. */}
      <div className="relative z-30">
        <TopNav variant="dark" />
      </div>

      {/* Hero content — vertically centered with Figma's 224px top padding. */}
      <main className="relative z-10 w-full">
        <section
          className="relative w-full flex flex-col items-start justify-center"
          style={{
            padding: "224px 64px 80px",
            minHeight: "calc(100vh - 160px)",
          }}
        >
          <h1
            className="font-sans"
            style={{
              color: "#ffffff",
              fontWeight: 500,
              fontSize: 80,
              letterSpacing: "-3.2px",
              lineHeight: "88px",
              whiteSpace: "nowrap",
            }}
          >
            All Projects (12)
          </h1>

          <div style={{ paddingTop: 48 }}>
            <Link href="/projects" className="btn-hero">
              <span>View projects</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer overlay — pinned at the bottom of the viewport. */}
      <div
        className="absolute left-0 right-0 bottom-0 z-20"
      >
        <SiteFooter
          variant="dark"
          year="2026"
          brand="STUDIO"
          copyRight="© 2026 STUDIO"
        />
      </div>
    </div>
  );
}