import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProduct, products, categoryName, fromPrice } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { site } from "@/lib/site";
import ProductCard from "@/components/ProductCard";
import AddToCart from "./AddToCart";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: { title: `${product.name} | ${site.name}`, description: product.description },
  };
}

const specRows = (p: NonNullable<ReturnType<typeof getProduct>>) =>
  [
    ["CAS number", p.cas],
    ["Molecular weight", p.molecularWeight],
    ["Sequence", p.sequence],
    ["Purity (HPLC)", p.purity],
    ["Form", p.form],
    ["Appearance", p.appearance],
    ["Storage", p.storage],
  ].filter(([, v]) => Boolean(v)) as [string, string][];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.variants[0]?.sku,
    category: categoryName(product.category),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: (fromPrice(product) / 100).toFixed(2),
      offerCount: product.variants.length,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Link
        href="/shop"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Back to catalog
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        {/* Visual */}
        <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl border border-border bg-accent lg:h-[28rem]">
          <div className="halo-glow absolute inset-0" />
          <svg viewBox="0 0 64 64" className="relative h-40 w-40" aria-hidden="true">
            <circle cx="32" cy="32" r="24" fill="none" stroke="var(--halo)" strokeWidth="1.5" opacity="0.6" />
            <rect x="25" y="12" width="14" height="40" rx="7" fill="var(--card)" stroke="var(--primary)" strokeWidth="2" />
            <rect x="25" y="32" width="14" height="20" fill="var(--primary)" opacity="0.12" />
            <rect x="23" y="9" width="18" height="6" rx="2" fill="var(--primary)" />
          </svg>
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-halo px-3 py-1 text-xs font-semibold uppercase tracking-wide text-halo-foreground">
              {product.badge}
            </span>
          )}
        </div>

        {/* Details */}
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {categoryName(product.category)}
          </p>
          <h1 className="mt-1 font-serif text-4xl tracking-tight">{product.name}</h1>
          <p className="mt-3 text-muted">{product.longDescription}</p>

          <div className="mt-6">
            <AddToCart product={product} />
          </div>

          <p className="mt-4 text-xs text-muted">
            Free US shipping on orders over {formatPrice(site.freeShippingThreshold)}.
            Ships lyophilized with a batch-linked certificate of analysis.
          </p>

          {/* Spec table */}
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <tbody>
                {specRows(product).map(([label, value], i) => (
                  <tr
                    key={label}
                    className={i % 2 === 0 ? "bg-card" : "bg-accent/40"}
                  >
                    <th className="w-44 px-4 py-3 text-left font-medium text-muted">
                      {label}
                    </th>
                    <td className="px-4 py-3 font-mono text-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RUO notice */}
      <div className="mt-10 rounded-xl border border-halo/40 bg-halo/5 px-5 py-4 text-sm text-foreground">
        <strong className="font-mono text-xs uppercase tracking-wide text-halo">
          Research use only —
        </strong>{" "}
        This product is sold strictly as an analytical reference standard for
        in-vitro laboratory research. Not for human or animal consumption.
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-2xl tracking-tight">Related standards</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
