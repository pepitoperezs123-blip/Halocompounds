"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { Button, ButtonLink } from "@/components/Button";
import { formatPrice } from "@/lib/utils";
import { site } from "@/lib/site";

export default function CartContent() {
  const { items, subtotal, setQuantity, removeItem, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-border bg-card px-6 py-16 text-center">
        <p className="text-muted">Your cart is empty.</p>
        <ButtonLink href="/shop" className="mt-4">
          Browse the catalog
        </ButtonLink>
      </div>
    );
  }

  const shipping =
    subtotal >= site.freeShippingThreshold ? 0 : site.flatShipping;

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_20rem]">
      <div className="overflow-hidden rounded-xl border border-border">
        {items.map((item) => (
          <div
            key={item.sku}
            className="flex items-center gap-4 border-b border-border bg-card p-4 last:border-b-0"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-border bg-accent font-mono text-[10px] text-muted-foreground">
              {item.size}
            </div>
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{item.sku}</p>
            </div>
            <div className="inline-flex items-center rounded-lg border border-border">
              <button
                onClick={() => setQuantity(item.sku, item.quantity - 1)}
                className="inline-flex h-8 w-8 items-center justify-center hover:bg-accent"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-9 text-center text-sm tabular-nums">
                {item.quantity}
              </span>
              <button
                onClick={() => setQuantity(item.sku, item.quantity + 1)}
                className="inline-flex h-8 w-8 items-center justify-center hover:bg-accent"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
            <span className="w-20 text-right text-sm font-medium tabular-nums">
              {formatPrice(item.price * item.quantity)}
            </span>
            <button
              onClick={() => removeItem(item.sku)}
              className="text-muted-foreground hover:text-destructive"
              aria-label={`Remove ${item.name}`}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <aside className="h-fit rounded-xl border border-border bg-card p-5">
        <h2 className="font-serif text-lg">Order summary</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted">Subtotal</dt>
            <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted">Shipping</dt>
            <dd className="tabular-nums">
              {shipping === 0 ? "Free" : formatPrice(shipping)}
            </dd>
          </div>
          <div className="mt-2 flex justify-between border-t border-border pt-3 text-base font-semibold">
            <dt>Total</dt>
            <dd className="tabular-nums">{formatPrice(subtotal + shipping)}</dd>
          </div>
        </dl>
        <Button
          size="lg"
          className="mt-5 w-full"
          onClick={() => alert("Checkout is not wired up in this demo build.")}
        >
          Proceed to checkout
        </Button>
        <button
          onClick={clear}
          className="mt-3 w-full text-center text-xs text-muted hover:text-destructive"
        >
          Clear cart
        </button>
        <Link
          href="/shop"
          className="mt-2 block text-center text-xs text-muted hover:text-primary"
        >
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
