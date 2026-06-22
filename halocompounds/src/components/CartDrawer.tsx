"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { Button } from "@/components/Button";
import { formatPrice } from "@/lib/utils";
import { site } from "@/lib/site";

export default function CartDrawer() {
  const { isOpen, close, items, subtotal, setQuantity, removeItem } = useCart();

  const remaining = site.freeShippingThreshold - subtotal;

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-serif text-lg">Your cart</h2>
          <button
            onClick={close}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingCart className="h-10 w-10 text-border-strong" strokeWidth={1.5} />
            <p className="text-muted">Your cart is empty.</p>
            <Button variant="outline" onClick={close}>
              Continue browsing
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {remaining > 0 ? (
                <p className="mb-4 rounded-lg bg-accent px-3 py-2 text-xs text-muted">
                  Add <strong>{formatPrice(remaining)}</strong> more for free US
                  shipping.
                </p>
              ) : (
                <p className="mb-4 rounded-lg bg-success/10 px-3 py-2 text-xs font-medium text-success">
                  You&rsquo;ve unlocked free US shipping.
                </p>
              )}

              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.sku} className="flex gap-3">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-border bg-card font-mono text-[10px] text-muted-foreground">
                      {item.size}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium leading-tight">
                            {item.name}
                          </p>
                          <p className="font-mono text-xs text-muted-foreground">
                            {item.sku}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.sku)}
                          className="text-muted-foreground hover:text-destructive"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-lg border border-border">
                          <button
                            onClick={() => setQuantity(item.sku, item.quantity - 1)}
                            className="inline-flex h-8 w-8 items-center justify-center hover:bg-accent"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">
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
                        <span className="text-sm font-medium tabular-nums">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border px-5 py-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-muted">Subtotal</span>
                <span className="text-lg font-semibold tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <Button
                size="lg"
                className="w-full"
                onClick={() => alert("Checkout is not wired up in this demo build.")}
              >
                Checkout
              </Button>
              <Link
                href="/cart"
                onClick={close}
                className="mt-2 block text-center text-xs text-muted hover:text-primary"
              >
                View full cart
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
