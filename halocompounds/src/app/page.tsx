import Link from "next/link";
import { ArrowRight, FlaskConical, ShieldCheck, Snowflake, FileCheck2 } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import { getFeatured, categories } from "@/lib/products";
import { site } from "@/lib/site";

const trust = [
  { icon: FileCheck2, title: "Batch-linked COA", body: "Every lot ships with an HPLC certificate of analysis tied to its batch number." },
  { icon: ShieldCheck, title: "99%+ purity", body: "Third-party HPLC and mass-spec verification on every reference standard." },
  { icon: Snowflake, title: "Cold-chain handling", body: "Lyophilized, desiccated, and shipped to preserve peptide integrity." },
  { icon: FlaskConical, title: "Research-grade", body: "Analytical reference standards for in-vitro laboratory use only." },
];

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="halo-glow pointer-events-none absolute inset-x-0 top-0 h-80" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {site.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            {site.heroHeadline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{site.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/shop" size="lg">
              Browse catalog <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/coa" size="lg" variant="outline">
              View lab results
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-px md:grid-cols-4">
          {trust.map(({ icon: Icon, title, body }) => (
            <div key={title} className="px-6 py-8">
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
              <h3 className="mt-3 font-medium">{title}</h3>
              <p className="mt-1 text-sm text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl tracking-tight">Featured standards</h2>
            <p className="mt-2 text-muted">Most-requested reference compounds.</p>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-1 text-sm font-medium text-primary hover:gap-2 md:inline-flex"
          >
            All products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-border bg-accent">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-serif text-3xl tracking-tight">Browse by category</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/shop?category=${c.slug}`}
                className="rounded-xl border border-border bg-card px-5 py-6 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
              >
                <span className="font-medium">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <div className="halo-glow pointer-events-none absolute inset-x-0 top-0 h-40 opacity-50" />
          <h2 className="relative font-serif text-3xl md:text-4xl">
            Reference standards, without the guesswork.
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Browse the full catalog — every product is HPLC-verified and ships
            with a batch-linked certificate of analysis.
          </p>
          <div className="relative mt-7">
            <ButtonLink
              href="/shop"
              size="lg"
              variant="outline"
              className="border-white/30 bg-white text-primary hover:bg-white/90"
            >
              Shop all products <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
