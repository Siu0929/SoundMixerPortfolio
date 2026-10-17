"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Figma frames 1:60 + 1:2 — the studio wordmark sits flush left, a centered
// row of four nav links runs across the middle, and the right side carries a
// "Get in touch" CTA with the small Figma arrow icon trailing it.
const NAV_ITEMS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

function Arrow({ color = "#ffffff" }) {
  // The Figma-supplied 9.33px arrow glyph — a thin filled right arrow.
  return (
    <svg
      width="9.333"
      height="9.333"
      viewBox="0 0 9.333 9.333"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path
        d="M7.102 5.25H0V4.083h7.102L3.835 0.817 4.667 0l4.666 4.667-4.666 4.666-0.832-0.816L7.102 5.25V5.25"
        fill={color}
      />
    </svg>
  );
}

export default function TopNav({
  variant = "light", // "light" | "dark" — light for the Project Page, dark for the hero overlay
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isDark = variant === "dark";
  const ink = isDark ? "#ffffff" : "#0a0a0a";

  return (
    <>
      <header
        className="relative z-40 w-full"
        style={{
          padding: "10px",
        }}
      >
        <div
          className="relative flex items-center justify-between w-full"
          style={{
            paddingBottom: 24,
          }}
        >
          {/* STUDIO wordmark — Figma uses Nimbus Sans Bold 20px / -0.5px.
              Closest web substitute is Inter Bold 20px / -0.025em. */}
          <Link
            href="/"
            className="wordmark"
            style={{
              color: ink,
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: "-0.025em",
              lineHeight: "30px",
            }}
          >
            SYH STUDIO
          </Link>

          {/* Centered nav links — 24px gap, fixed pixel positioning similar
              to Figma (absolute center on desktop, hidden on mobile). */}
          <nav
            className="hidden md:flex items-center"
            style={{
              gap: 24,
              position: "absolute",
              left: "50%",
              top: 8,
              transform: "translateX(-50%)",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isDark ? "nav-link-dark" : "nav-link-light"}
                  style={{
                    color: ink,
                    opacity: active ? 1 : 0.85,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA — "GET IN TOUCH" with the small Figma arrow. */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex"
              style={{ gap: 4 }}
            >
              <span
                className={isDark ? "nav-link-dark" : "nav-link-light"}
                style={{ color: ink }}
              >
                Get in touch
              </span>
              <Arrow color={ink} />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center"
              style={{
                width: 40,
                height: 40,
                border: `1px solid ${isDark ? "rgba(255,255,255,0.5)" : "#0a0a0a"}`,
                color: ink,
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                {mobileOpen ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                ) : (
                  <path
                    d="M4 8h16M4 16h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        aria-hidden={!mobileOpen}
        className={`md:hidden fixed inset-0 z-30 transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#ffffff", color: "#0a0a0a" }}
      >
        <div
          className="flex flex-col"
          style={{ padding: "16px 10px", paddingTop: 80 }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="h-section"
              style={{
                padding: "16px 0",
                borderBottom: "1px solid #e6e6e6",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn mt-8 self-start"
          >
            Get in touch
            <svg viewBox="0 0 24 24" className="arrow" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}