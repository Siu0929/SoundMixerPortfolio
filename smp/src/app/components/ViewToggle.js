import Link from "next/link";

// Figma frame 1:2 — the toggle reads "GRID | LIST VIEW" in Inter Medium 14px,
// with the divider pipe in #4c4546 (var(--color-mute-divider)).
export default function ViewToggle({
  active = "grid",
  basePath = "/work",
}) {
  const ink = "#0a0a0a";
  const mute = "#9a9a9a";
  const divider = "#4c4546";
  return (
    <div
      className="flex items-center"
      style={{ gap: 16 }}
    >
      <Link
        href={basePath}
        aria-current={active === "grid" ? "page" : undefined}
        className="nav-link-light"
        style={{
          color: active === "grid" ? ink : mute,
        }}
      >
        Grid
      </Link>
      <span
        aria-hidden="true"
        style={{
          color: divider,
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "14px",
        }}
      >
        |
      </span>
      <Link
        href={`${basePath}/list`}
        aria-current={active === "list" ? "page" : undefined}
        className="nav-link-light"
        style={{
          color: active === "list" ? ink : mute,
        }}
      >
        List view
      </Link>
    </div>
  );
}