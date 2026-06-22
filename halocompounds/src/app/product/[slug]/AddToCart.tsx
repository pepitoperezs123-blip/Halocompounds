"use client";

import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";
import { Button } from "@/components/Button";
import { formatPrice, cn } from "@/lib/utils";

export default function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [variantIndex, setVariantIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const variant = product.variants[variantIndex];

  function handleAdd() {
    addItem({
      productSlug: product.slug,
      name: product.name,
      size: variant.size,
      sku: variant.sku,
      price: variant.price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div>
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-serif text-3xl">{formatPrice(variant.price)}</span>
        <span className="font-mono text-xs text-success">{product.purity} pure</span>
      </div>

      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
        Size
      </p>
      <div className="flex flex-wrap gap-2">
        {product.variants.map((v, i) => (
          <button
            key={v.sku}
            onClick={() => setVariantIndex(i)}
            className={cn(
              "rounded-lg border px-4 py-2 text-sm transition-colors",
              i === variantIndex
                ? "border-primary bg-primary/5 text-primary"
                : "border-border bg-card text-foreground hover:border-border-strong",
            )}
          >
            <span className="font-medium">{v.size}</span>
            <span className="ml-2 text-muted">{formatPrice(v.price)}</span>
          </button>
        ))}
      </div>

      <Button size="lg" className="mt-5 w-full sm:w-auto" onClick={handleAdd}>
        {added ? (
          <>
            <Check className="h-4 w-4" /> Added to cart
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4" /> Add to cart
          </>
        )}
      </Button>
    </div>
  );
}
