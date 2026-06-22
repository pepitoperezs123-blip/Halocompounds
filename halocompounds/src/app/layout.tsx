import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, DM_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import SiteChrome from "@/components/SiteChrome";
import AgeGate from "@/components/AgeGate";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.heroSub,
  metadataBase: new URL(site.url),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.heroSub,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.tagline,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description:
    "Supplier of analytical-grade biochemical reference standards for in-vitro laboratory research. Research use only. Not for human or animal consumption.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: site.supportEmail,
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${outfit.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <CartProvider>
          <AgeGate />
          <SiteChrome>{children}</SiteChrome>
        </CartProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
