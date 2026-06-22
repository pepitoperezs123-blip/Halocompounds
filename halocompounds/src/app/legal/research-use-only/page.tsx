import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research Use Only Policy",
  description: "Halo Compounds research-use-only policy and terms of use for laboratory reference standards.",
};

export default function RuoPage() {
  return (
    <LegalPage title="Research Use Only" updated="June 2026">
      <p>
        All products offered by {site.legalName} (&ldquo;{site.name}&rdquo;) are
        sold exclusively as analytical reference standards for in-vitro
        laboratory research and development purposes.
      </p>
      <h2>Not for consumption</h2>
      <p>
        <strong>
          Products are not drugs, foods, cosmetics, or dietary supplements.
        </strong>{" "}
        They are not intended to diagnose, treat, cure, or prevent any disease,
        and are not for human or veterinary use. Nothing on this site should be
        construed as medical advice or a therapeutic claim.
      </p>
      <h2>Buyer responsibility</h2>
      <p>
        By purchasing, you represent that you are a qualified researcher or
        institution acquiring these materials for legitimate research, that you
        are at least 21 years of age, and that you will handle, store, and
        dispose of them in accordance with all applicable laws, regulations, and
        institutional safety protocols.
      </p>
      <h2>Handling</h2>
      <p>
        Reference standards may be biologically active and should be handled
        only by trained personnel using appropriate laboratory practices and
        personal protective equipment.
      </p>
      <h2>Compliance</h2>
      <p>
        You are solely responsible for ensuring that your purchase and use comply
        with the laws of your jurisdiction. {site.name} reserves the right to
        refuse or cancel any order.
      </p>
    </LegalPage>
  );
}
