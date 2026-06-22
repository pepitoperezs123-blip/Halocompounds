import Link from "next/link";
import { type Product, categoryName, fromPrice } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lg"
    >
      {/* Visual: a vial-style placeholder with a halo ring */}
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-accent">
        <div className="halo-glow absolute inset-0" />
        <svg viewBox="0 0 64 64" className="relative h-20 w-20" aria-hidden="true">
          <circle cx="32" cy="32" r="22" fill="none" stroke="var(--halo)" strokeWidth="2" opacity="0.6" />
          <rect x="26" y="14" width="12" height="36" rx="6" fill="var(--card)" stroke="var(--primary)" strokeWidth="2" />
          <rect x="26" y="30" width="12" height="20" rx="0" fill="var(--primary)" opacity="0.12" />
          <rect x="24" y="11" width="16" height="6" rx="2" fill="var(--primary)" />
        </svg>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-halo px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-halo-foreground">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {categoryName(product.category)}
        </p>
        <h3 className="mt-1 font-serif text-lg leading-tight text-foreground transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-muted">
            from{" "}
            <strong className="text-foreground">
              {formatPrice(fromPrice(product))}
            </strong>
          </span>
          <span className="font-mono text-[11px] text-success">
            {product.purity} pure
          </span>
        </div>
      </div>
    </Link>
  );
}
