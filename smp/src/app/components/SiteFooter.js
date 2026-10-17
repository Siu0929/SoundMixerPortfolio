import Link from "next/link";

// Figma frames 1:60 + 1:2 — the footer is a single horizontal row with the
// copyright on the left and three social links on the right. Color and
// background invert based on the page theme.
export default function SiteFooter({
  variant = "light", // "light" | "dark"
  year = "2026",
  brand = "STUDIO",
  copyRight = `© ${year} ${brand}`,
  links = [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
}) {
  const isDark = variant === "dark";
  const ink = isDark ? "#ffffff" : "#0a0a0a";

  return (
    <footer
      className="relative w-full"
      style={{
        padding: "32px 10px 10px",
        color: ink,
        background: isDark ? "#000000" : "#ffffff",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ width: "100%" }}
      >
        <p
          className="footer-copy"
          style={{ color: ink, margin: 0 }}
        >
          {copyRight}
        </p>
        <div
          className="flex items-start"
          style={{ gap: 24 }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="footer-copy"
              style={{ color: ink }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}