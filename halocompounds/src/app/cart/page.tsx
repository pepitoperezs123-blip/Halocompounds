import type { Metadata } from "next";
import CartContent from "./CartContent";

export const metadata: Metadata = {
  title: "Cart",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-serif text-4xl tracking-tight">Your cart</h1>
      <CartContent />
    </div>
  );
}
