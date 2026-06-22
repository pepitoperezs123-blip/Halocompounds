import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All products" },
      { href: "/shop?category=metabolic", label: "Metabolic" },
      { href: "/shop?category=tissue-repair", label: "Tissue & Recovery" },
      { href: "/shop?category=growth-factors", label: "Growth Factors" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/coa", label: "Lab Results" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/research-use-only", label: "Research Use Only" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/privacy", label: "Privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-footer-bg text-footer-fg">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm text-footer-muted">
              {site.tagline} Every lot ships with a batch-linked certificate of
              analysis.
            </p>
            <p className="mt-4 text-xs text-footer-muted">
              {site.supportEmail}
              <br />
              {site.address.line1}, {site.address.city}, {site.address.region}{" "}
              {site.address.postal}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-footer-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-footer-fg/90 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-footer-muted">
          <p className="mb-2 font-medium uppercase tracking-wide">
            Research use only
          </p>
          <p className="max-w-3xl leading-relaxed">
            All products are sold strictly for in-vitro laboratory research and
            development. Products are not drugs, foods, cosmetics, or dietary
            supplements and are not intended to diagnose, treat, cure, or prevent
            any disease. Not for human or veterinary use.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
