import type { Metadata } from "next";
import { products } from "@/lib/products";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop research peptides",
  description:
    "Browse HPLC-verified research peptide reference standards. Batch-linked certificates of analysis on every lot.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="font-serif text-4xl tracking-tight">Research catalog</h1>
        <p className="mt-2 max-w-2xl text-muted">
          {products.length} analytical reference standards. All products are for
          in-vitro laboratory research use only.
        </p>
      </header>
      <ShopContent initialCategory={category ?? "all"} />
    </div>
  );
}
