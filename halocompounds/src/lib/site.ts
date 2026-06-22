/**
 * Single source of truth for brand-specific values. Swap these to rebrand.
 */
export const site = {
  name: "Halo Compounds",
  shortName: "Halo",
  domain: "halocompounds.com",
  url: "https://halocompounds.com",
  tagline: "Research-grade peptides, independently verified.",
  heroHeadline: "Reference standards you can trust.",
  heroSub:
    "Analytical-grade research peptides — HPLC-tested, batch-linked certificates of analysis, and cold-chain handling. For laboratory research use only.",
  supportEmail: "support@halocompounds.com",
  supportPhone: "(888) 555-0142",
  address: {
    line1: "1209 Orange Street, Suite 200",
    city: "Wilmington",
    region: "DE",
    postal: "19801",
    country: "US",
  },
  legalName: "Halo Compounds LLC",
  // Free shipping threshold and flat rate (display only — no live checkout)
  freeShippingThreshold: 200_00,
  flatShipping: 12_99,
} as const;

export type Site = typeof site;
