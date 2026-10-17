import TopNav from "../../components/TopNav";
import SiteFooter from "../../components/SiteFooter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, GRID_CARDS } from "../../data/projects";

// Map every grid card (e.g. "card-fashion-1") to one of the legacy
// PROJECTS slugs so each link has a real destination.
const CARD_TO_SLUG = {
  "fashion-1": "maison-identity",
  "auto-1": "northwind-rebrand",
  "product-1": "index-quarterly",
  "product-2": "marais-flagship",
  "fashion-2": "atelier-monogram",
  "auto-2": "tableware-foundation",
  "auto-3": "open-courts",
  "product-3": "field-notes",
};

export async function generateStaticParams() {
  const slugs = new Set(Object.values(CARD_TO_SLUG));
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project — STUDIO" };
  return {
    title: `${project.title} — STUDIO`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const gallery = project.gallery;

  return (
    <>
      <TopNav variant="light" />

      <main
        className="flex-1 relative w-full"
        style={{ background: "#ffffff" }}
      >
        {/* Hero */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: "min(86vh, 800px)" }}
        >
          <img src={gallery[0]} alt={project.title} className="cover" />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          <div
            className="absolute inset-0 flex items-end"
            style={{ padding: "clamp(40px, 6vh, 80px) 10px" }}
          >
            <h1
              className="font-sans"
              style={{
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 56px)",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                maxWidth: "22ch",
              }}
            >
              {project.title}
            </h1>
          </div>
        </section>

        {/* Overview */}
        <section
          className="relative w-full"
          style={{ padding: "clamp(40px, 5vw, 64px) 10px" }}
        >
          <div className="grid grid-cols-12 gap-x-12 gap-y-8">
            <div className="col-span-12 md:col-span-7">
              <p className="label-mute" style={{ marginBottom: 12 }}>
                Overview
              </p>
              <p
                className="body"
                style={{ fontSize: 16, lineHeight: 1.6, maxWidth: "60ch" }}
              >
                {project.overview}
              </p>
              <div style={{ marginTop: 32 }}>
                <Link href="/projects" className="btn-outline">
                  <span>Back to projects</span>
                  <svg viewBox="0 0 24 24" className="arrow" aria-hidden="true">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-8">
              <div>
                <p className="label-mute" style={{ marginBottom: 8 }}>
                  Client
                </p>
                <p
                  className="font-sans"
                  style={{ fontWeight: 500, fontSize: 18 }}
                >
                  {project.client}
                </p>
              </div>
              <div>
                <p className="label-mute" style={{ marginBottom: 8 }}>
                  Year
                </p>
                <p
                  className="font-sans"
                  style={{ fontWeight: 500, fontSize: 18 }}
                >
                  {project.year}
                </p>
              </div>
              <div>
                <p className="label-mute" style={{ marginBottom: 8 }}>
                  Role
                </p>
                <p
                  className="font-sans"
                  style={{ fontWeight: 500, fontSize: 18 }}
                >
                  {project.role}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image showcase */}
        <section className="relative w-full">
          {[1, 2, 3, 4, 5, 6].map((idx) => {
            const img = gallery[idx];
            if (!img) return null;
            const isWide = idx % 3 === 1;
            return (
              <div
                key={idx}
                style={{ padding: "0 10px 24px" }}
              >
                <img
                  src={img}
                  alt={`${project.title} — still ${idx}`}
                  className="cover"
                  style={{
                    aspectRatio: isWide ? "1260 / 800" : "618 / 800",
                  }}
                />
              </div>
            );
          })}
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