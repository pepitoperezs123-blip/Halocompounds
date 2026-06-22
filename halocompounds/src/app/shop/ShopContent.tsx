"use client";

import { useMemo, useState } from "react";
import { categories, fromPrice, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

type Sort = "featured" | "price-asc" | "price-desc" | "name";

const sorts: { value: Sort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name", label: "Name A–Z" },
];

export default function ShopContent({
  initialCategory,
}: {
  initialCategory: string;
}) {
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<Sort>("featured");

  const filtered = useMemo(() => {
    const list = products.filter(
      (p) => category === "all" || p.category === category,
    );
    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => fromPrice(a) - fromPrice(b));
        break;
      case "price-desc":
        sorted.sort((a, b) => fromPrice(b) - fromPrice(a));
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }
    return sorted;
  }, [category, sort]);

  const tabs = [{ slug: "all", name: "All" }, ...categories];

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.slug}
              onClick={() => setCategory(t.slug)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                category === t.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted hover:border-border-strong hover:text-foreground",
              )}
            >
              {t.name}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-muted">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-lg border border-border bg-card px-3 py-1.5 text-foreground focus:border-primary focus:outline-none"
          >
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-muted">
          No products in this category yet.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
