import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} supplies HPLC-verified research peptide reference standards with batch-linked certificates of analysis.`,
};

const values = [
  {
    title: "Verification over claims",
    body: "Every lot is HPLC-tested and mass-spec confirmed. We publish the certificate of analysis tied to the exact batch you receive — no generic spec sheets.",
  },
  {
    title: "Integrity of the standard",
    body: "Peptides degrade when handled carelessly. We lyophilize, desiccate, and ship cold so the reference standard that reaches your bench matches the one we tested.",
  },
  {
    title: "Honest framing",
    body: "These are analytical reference standards for in-vitro research. We don't make therapeutic claims, and we don't pretend otherwise. Research use only, full stop.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="halo-glow pointer-events-none absolute inset-x-0 top-0 h-64" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            About {site.name}
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
            Reference standards, held to a standard.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            {site.name} supplies analytical-grade research peptides to labs that
            need to trust what&rsquo;s in the vial. We built the catalog around a
            single principle: every claim on this site should be backed by a
            document you can read.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h2 className="font-serif text-xl">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-accent">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="font-serif text-2xl">Our testing process</h2>
          <ol className="mt-6 space-y-5">
            {[
              ["Source", "We work with manufacturers who can supply synthesis records and reference data for each compound."],
              ["Verify", "Each incoming lot is independently HPLC-tested for purity and mass-spec confirmed for identity."],
              ["Document", "The chromatogram and result are packaged into a certificate of analysis tied to the batch number."],
              ["Preserve", "Vials are lyophilized, desiccated, and stored cold until they ship — with a cold pack for transit."],
            ].map(([step, body], i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium">{step}</h3>
                  <p className="text-sm text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="font-serif text-2xl">Questions about a compound?</h2>
        <p className="mt-2 text-muted">
          Reach the team at{" "}
          <a href={`mailto:${site.supportEmail}`} className="text-primary">
            {site.supportEmail}
          </a>
          .
        </p>
        <ButtonLink href="/shop" className="mt-6">
          Browse the catalog
        </ButtonLink>
      </section>
    </div>
  );
}
