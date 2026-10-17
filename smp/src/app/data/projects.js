// Project data shared across the studio site. Figma frames (1:60 "All
// Projects" hero and 1:2 "Project Page" grid) anchor the visual direction:
// an 8-column asymmetric grid with 200px rows, 10px gaps, and a single
// architectural hero image with luminosity overlay.

export const HERO_BG = "/figma/hero-bg.png";

export const ARROW_WHITE = "/figma/arrow-icon.svg";
export const ARROW_BLACK = "/figma/arrow-icon-2.svg";

// 9 grid cards — each entry matches a Figma "Project Card N" node in the
// grid. Names describe what the card represents visually.
export const GRID_CARDS = [
  { id: "card-fashion-1", src: "/figma/card-fashion-1.png", label: "High-fashion editorial photography" },
  { id: "card-auto-1", src: "/figma/card-auto-1.png", label: "Sleek modern automotive photography" },
  { id: "card-product-1", src: "/figma/card-product-1.png", label: "Minimalist product design photography" },
  { id: "card-product-2", src: "/figma/card-product-2.png", label: "Minimalist product design photography" },
  { id: "card-fashion-2", src: "/figma/card-fashion-2.png", label: "High-fashion editorial photography" },
  { id: "card-auto-2", src: "/figma/card-auto-2.png", label: "Sleek modern automotive photography" },
  { id: "card-auto-3", src: "/figma/card-auto-3.png", label: "Sleek modern automotive photography" },
  { id: "card-product-3", src: "/figma/card-product-3.png", label: "Minimalist product design photography" },
  { id: "card-fashion-3", src: "/figma/card-fashion-1.png", label: "High-fashion editorial photography" },
];

// Legacy project list — kept for the project detail pages.
export const PROJECTS = [
  {
    slug: "maison-identity",
    title: "Visual identity for a Paris fashion house",
    client: "Maison Atelier",
    year: "2024",
    role: "Art Direction, Identity Design, Web Design",
    category: "Fashion, Identity",
    cover: HERO_BG,
    gallery: [
      "/figma/card-fashion-1.png",
      "/figma/card-auto-1.png",
      "/figma/card-product-1.png",
      "/figma/hero-bg.png",
      "/figma/card-product-2.png",
      "/figma/card-fashion-2.png",
      "/figma/card-auto-2.png",
    ],
    overview:
      "A complete visual identity for a Paris-based fashion house. The new identity honors the house's craft heritage while introducing a contemporary digital language built for global retail, editorial, and runway.",
  },
  {
    slug: "marais-flagship",
    title: "Retail flagship for Marais atelier",
    client: "Atelier Marais",
    year: "2024",
    role: "Spatial Design, Branding",
    category: "Retail, Spatial",
    cover: "/figma/card-product-2.png",
    gallery: ["/figma/card-fashion-2.png", "/figma/card-auto-1.png"],
    overview:
      "A flagship concept for an independent atelier in the Marais, built around a single flexible fixture system that the in-house team can reconfigure each season.",
  },
  {
    slug: "index-quarterly",
    title: "Editorial system for Index Quarterly",
    client: "Index Quarterly",
    year: "2023",
    role: "Editorial Design, Typography",
    category: "Editorial, Print",
    cover: "/figma/card-product-1.png",
    gallery: ["/figma/card-auto-2.png", "/figma/card-product-3.png"],
    overview:
      "A modular editorial system for a quarterly publication on contemporary architecture and urbanism, anchored on a custom 12-column grid and three weights of a proprietary sans-serif.",
  },
  {
    slug: "northwind-rebrand",
    title: "Brand refresh for Northwind Mobility",
    client: "Northwind Mobility",
    year: "2023",
    role: "Brand Strategy, Identity",
    category: "Mobility, Identity",
    cover: "/figma/card-auto-3.png",
    gallery: ["/figma/card-auto-2.png", "/figma/card-auto-1.png"],
    overview:
      "A brand refresh for a North American EV company preparing to scale into European markets — a single mark, a single typeface, and a tone of voice the engineering team could own.",
  },
  {
    slug: "summit-platform",
    title: "Digital platform for the Summit Forum",
    client: "Summit Forum",
    year: "2022",
    role: "Product Design, Web Development",
    category: "Digital, Product",
    cover: "/figma/hero-bg.png",
    gallery: ["/figma/card-fashion-1.png", "/figma/card-product-1.png"],
    overview:
      "A digital platform for a private policy forum, designed to encourage slow reading and archival-grade search across five years of working papers.",
  },
  {
    slug: "atelier-monogram",
    title: "Monogram for Maison Atelier",
    client: "Maison Atelier",
    year: "2022",
    role: "Identity, Print",
    category: "Identity, Print",
    cover: "/figma/card-fashion-2.png",
    gallery: ["/figma/card-product-2.png", "/figma/card-product-3.png"],
    overview:
      "A bespoke monogram and stationery suite for a Paris-based atelier, drawn from the firm's archive of mid-century architectural marks.",
  },
  {
    slug: "harbor-residences",
    title: "Brand and signage for Harbor Residences",
    client: "Harbor Group",
    year: "2024",
    role: "Brand, Wayfinding",
    category: "Real Estate, Wayfinding",
    cover: "/figma/card-auto-1.png",
    gallery: ["/figma/card-fashion-1.png", "/figma/card-product-1.png"],
    overview:
      "A residential brand and exterior wayfinding program for a waterfront development, designed to feel considered from the sidewalk to the lobby.",
  },
  {
    slug: "field-notes",
    title: "Self-published monograph, Field Notes",
    client: "Self-published",
    year: "2021",
    role: "Editorial, Photography",
    category: "Editorial, Print",
    cover: "/figma/card-product-3.png",
    gallery: ["/figma/card-fashion-2.png", "/figma/card-auto-3.png"],
    overview:
      "A self-published monograph compiling two years of field photography from trips across the Mediterranean basin.",
  },
  {
    slug: "tableware-foundation",
    title: "Identity for Tableware Foundation",
    client: "Tableware Foundation",
    year: "2021",
    role: "Identity, Web",
    category: "Cultural, Identity",
    cover: "/figma/card-product-1.png",
    gallery: ["/figma/card-auto-2.png", "/figma/card-fashion-1.png"],
    overview:
      "An identity for a small foundation supporting independent ceramicists across Europe, designed to be inexpensive to print and easy to translate.",
  },
  {
    slug: "studio-os",
    title: "Studio OS — internal tooling",
    client: "Internal",
    year: "2023",
    role: "Product, Systems",
    category: "Internal, Product",
    cover: "/figma/card-auto-2.png",
    gallery: ["/figma/card-fashion-2.png", "/figma/card-product-3.png"],
    overview:
      "An internal project management system designed around the studio's actual workflow — proposal, kickoff, archive — instead of the workflow a generic SaaS imagined.",
  },
  {
    slug: "open-courts",
    title: "Open Courts — civic identity",
    client: "City of Porto",
    year: "2022",
    role: "Identity, Wayfinding",
    category: "Civic, Wayfinding",
    cover: "/figma/card-fashion-1.png",
    gallery: ["/figma/card-auto-1.png", "/figma/card-product-2.png"],
    overview:
      "A civic identity and wayfinding program for an open-streets initiative in Porto, designed to be friendly to first-time visitors and legible to long-time residents.",
  },
  {
    slug: "minor-figures",
    title: "Brand voice for Minor Figures",
    client: "Minor Figures",
    year: "2024",
    role: "Copy, Brand Voice",
    category: "Brand, Copy",
    cover: "/figma/card-product-2.png",
    gallery: ["/figma/card-fashion-2.png", "/figma/card-auto-3.png"],
    overview:
      "A complete brand voice for a specialty coffee company — across thirty-eight product pages, three newsletters, and one short film — built around a single editorial tone.",
  },
];