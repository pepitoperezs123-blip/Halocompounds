import type { Metadata } from "next";
import { FileCheck2, Microscope, ShieldCheck } from "lucide-react";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lab Results",
  description: "Batch-linked certificates of analysis and our HPLC verification process.",
};

export default function CoaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="font-serif text-4xl tracking-tight">Lab results</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Every lot {site.name} ships is independently verified. Below is how we
        test, and the current purity profile for each reference standard. Your
        order&rsquo;s certificate of analysis is tied to its specific batch number.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { icon: Microscope, t: "HPLC purity", d: "Reverse-phase HPLC quantifies purity for every lot." },
          { icon: ShieldCheck, t: "Mass-spec identity", d: "Molecular weight confirmation verifies compound identity." },
          { icon: FileCheck2, t: "Batch-linked", d: "The COA references the exact lot number you receive." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-xl border border-border bg-card p-5">
            <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
            <h2 className="mt-3 font-medium">{t}</h2>
            <p className="mt-1 text-sm text-muted">{d}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-serif text-2xl">Current purity profile</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-accent text-left">
              <th className="px-4 py-3 font-medium">Compound</th>
              <th className="px-4 py-3 font-medium">CAS</th>
              <th className="px-4 py-3 font-medium">Purity (HPLC)</th>
              <th className="px-4 py-3 font-medium">Method</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id} className={i % 2 === 0 ? "bg-card" : "bg-accent/40"}>
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3 font-mono text-xs text-muted">
                  {p.cas ?? "—"}
                </td>
                <td className="px-4 py-3 font-mono text-success">{p.purity}</td>
                <td className="px-4 py-3 text-muted">HPLC / MS</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-muted">
        Purity figures are representative of recent lots. Request the certificate
        of analysis for a specific batch at{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-primary">
          {site.supportEmail}
        </a>
        .
      </p>
    </div>
  );
}
