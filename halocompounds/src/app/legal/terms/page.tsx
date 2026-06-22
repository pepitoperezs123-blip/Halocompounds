import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Halo Compounds website and the purchase of reference standards.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="June 2026">
      <p>
        These terms govern your use of the {site.name} website and your purchase
        of products from {site.legalName}. By using this site or placing an
        order, you agree to these terms.
      </p>
      <h2>Eligibility</h2>
      <p>
        You must be at least 21 years old and acquiring products for in-vitro
        research purposes. See our{" "}
        <a href="/legal/research-use-only" className="text-primary">
          Research Use Only policy
        </a>
        .
      </p>
      <h2>Orders &amp; pricing</h2>
      <p>
        All prices are in US dollars. We may correct pricing errors and cancel or
        refuse orders at our discretion. Title and risk of loss pass to you upon
        delivery to the carrier.
      </p>
      <h2>Shipping</h2>
      <p>
        Orders are processed on business days. Flat-rate domestic shipping
        applies, free on orders over $
        {(site.freeShippingThreshold / 100).toFixed(0)}. Delivery timelines are
        estimates, not guarantees.
      </p>
      <h2>Returns</h2>
      <p>
        Due to the nature of reference standards, products are non-returnable
        once shipped, except in the case of a verified defect or shipping error.
        Contact {site.supportEmail} within 7 days of delivery.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        Products are provided &ldquo;as is&rdquo; for research use. To the fullest
        extent permitted by law, {site.name} is not liable for any damages
        arising from the use or misuse of its products.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-primary">
          {site.supportEmail}
        </a>
        .
      </p>
    </LegalPage>
  );
}
