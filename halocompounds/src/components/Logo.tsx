import Link from "next/link";
import { site } from "@/lib/site";

/** Wordmark with a small "halo" ring glyph. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${site.name} home`}
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
          <circle
            cx="14"
            cy="14"
            r="10"
            fill="none"
            stroke="var(--halo)"
            strokeWidth="2.5"
          />
          <circle cx="14" cy="14" r="3.5" fill="var(--primary)" />
        </svg>
      </span>
      <span
        className={`font-serif text-xl tracking-tight ${
          light ? "text-footer-fg" : "text-foreground"
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
