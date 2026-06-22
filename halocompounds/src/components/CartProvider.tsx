"use client";

import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface CartItem {
  productSlug: string;
  name: string;
  size: string;
  sku: string;
  price: number; // cents
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (sku: string) => void;
  setQuantity: (sku: string, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
}

const STORAGE_KEY = "halo:cart:v1";

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // Hydration-safe: load persisted cart only on the client, after mount,
      // to avoid an SSR/client markup mismatch. The setState here is a
      // one-time sync from an external store, not a render-driven loop.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  // Persist on change (after initial hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage full / unavailable — non-fatal
    }
  }, [items, hydrated]);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.sku === item.sku);
        if (existing) {
          return prev.map((i) =>
            i.sku === item.sku ? { ...i, quantity: i.quantity + quantity } : i,
          );
        }
        return [...prev, { ...item, quantity }];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback((sku: string) => {
    setItems((prev) => prev.filter((i) => i.sku !== sku));
  }, []);

  const setQuantity = useCallback((sku: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.sku !== sku)
        : prev.map((i) => (i.sku === sku ? { ...i, quantity } : i)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const count = useMemo(
    () => items.reduce((n, i) => n + i.quantity, 0),
    [items],
  );
  const subtotal = useMemo(
    () => items.reduce((n, i) => n + i.price * i.quantity, 0),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isOpen,
      count,
      subtotal,
      addItem,
      removeItem,
      setQuantity,
      clear,
      open,
      close,
    }),
    [items, isOpen, count, subtotal, addItem, removeItem, setQuantity, clear, open, close],
  );

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart(): CartContextValue {
  const ctx = use(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
