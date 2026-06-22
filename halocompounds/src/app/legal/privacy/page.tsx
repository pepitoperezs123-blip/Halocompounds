import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Halo Compounds collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        {site.legalName} (&ldquo;{site.name}&rdquo;) respects your privacy. This
        policy explains what we collect and how we use it.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect information you provide when placing an order or contacting us
        — such as name, email, shipping address, and order details — and basic
        analytics about how the site is used.
      </p>
      <h2>How we use it</h2>
      <p>
        We use your information to process orders, provide support, prevent
        fraud, and improve the site. We do not sell your personal information.
      </p>
      <h2>Analytics</h2>
      <p>
        We use privacy-conscious, aggregate analytics to understand site
        performance. These do not identify you individually.
      </p>
      <h2>Data retention</h2>
      <p>
        We retain order records as required for accounting and legal compliance,
        and otherwise only as long as needed for the purposes above.
      </p>
      <h2>Your choices</h2>
      <p>
        You may request access to or deletion of your personal information by
        emailing{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-primary">
          {site.supportEmail}
        </a>
        .
      </p>
    </LegalPage>
  );
}
