"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import Logo from "@/components/Logo";
import { useCart } from "@/components/CartProvider";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/coa", label: "Lab Results" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={open}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-accent"
            aria-label={`Open cart, ${count} items`}
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={1.75} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-accent md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
