import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about ordering, shipping, and research-use-only reference standards.",
};

const faqs = [
  {
    q: "What does “research use only” mean?",
    a: "All products are analytical reference standards sold strictly for in-vitro laboratory research and development. They are not drugs, supplements, or consumer products, and are not intended for human or animal consumption.",
  },
  {
    q: "Do products ship with a certificate of analysis?",
    a: "Yes. Every lot includes an HPLC certificate of analysis tied to its batch number, with purity and mass-spec identity confirmation. You can preview representative COAs on the Lab Results page.",
  },
  {
    q: "How are the peptides shipped?",
    a: "Products ship lyophilized (freeze-dried) and desiccated, with a cold pack for transit to preserve integrity. Store at -20°C, desiccated, and protected from light on arrival.",
  },
  {
    q: "What is the purity of your standards?",
    a: "Reference standards are HPLC-verified at 99% or higher unless otherwise noted on the product page. The exact figure for your lot appears on its certificate of analysis.",
  },
  {
    q: "How much is shipping?",
    a: `Flat-rate domestic shipping, free on orders over $${(site.freeShippingThreshold / 100).toFixed(0)}. Orders are processed on business days.`,
  },
  {
    q: "How do I reconstitute a lyophilized peptide?",
    a: "Reconstitution is performed by the receiving laboratory according to its own protocols, typically with bacteriostatic or sterile water. We do not provide reconstitution or dosing guidance, as products are for in-vitro research only.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="font-serif text-4xl tracking-tight">Frequently asked questions</h1>
      <p className="mt-2 text-muted">
        Everything about ordering, shipping, and our research-use-only policy.
      </p>
      <div className="mt-8">
        <Accordion items={faqs.map((f) => ({ title: f.q, body: f.a }))} />
      </div>
    </div>
  );
}
