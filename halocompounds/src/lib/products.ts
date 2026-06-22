/**
 * Product catalog as a typed TypeScript file. No database required — the
 * catalog is small, version-controlled, and statically rendered. To add a
 * SKU, append an object below and the shop grid, product pages, sitemap, and
 * JSON-LD all pick it up automatically.
 *
 * All products are research-use-only (RUO) analytical reference standards.
 */

export interface ProductVariant {
  size: string;
  /** Price in integer cents. */
  price: number;
  sku: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  /** One-line summary used on cards and meta descriptions. */
  description: string;
  /** Long-form research-context copy for the product page. */
  longDescription: string;
  variants: ProductVariant[];
  purity: string;
  cas?: string;
  molecularWeight?: string;
  sequence?: string;
  form: string;
  storage: string;
  appearance: string;
  featured?: boolean;
  badge?: string;
  tags?: string[];
}

export const categories = [
  { slug: "tissue-repair", name: "Tissue & Recovery" },
  { slug: "metabolic", name: "Metabolic" },
  { slug: "growth-factors", name: "Growth Factors" },
  { slug: "cognitive", name: "Cognitive" },
  { slug: "longevity", name: "Longevity" },
] as const;

export const products: Product[] = [
  {
    id: "bpc-157",
    name: "BPC-157",
    slug: "bpc-157",
    category: "tissue-repair",
    description: "Pentadecapeptide reference standard. 99%+ HPLC purity.",
    longDescription:
      "BPC-157 is a synthetic pentadecapeptide derived from a sequence found in human gastric juice. Widely used as a reference standard in in-vitro studies of cellular repair pathways and angiogenesis signaling. Supplied lyophilized for reconstitution in bacteriostatic water by the receiving laboratory.",
    variants: [
      { size: "5 mg", price: 39_99, sku: "HC-BPC-5" },
      { size: "10 mg", price: 64_99, sku: "HC-BPC-10" },
    ],
    purity: "99.4%",
    cas: "137525-51-0",
    molecularWeight: "1419.5 g/mol",
    sequence: "GEPPPGKPADDAGLV",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated, protected from light",
    appearance: "White to off-white powder",
    featured: true,
    badge: "Best seller",
    tags: ["repair", "angiogenesis"],
  },
  {
    id: "tb-500",
    name: "TB-500 (Thymosin β4 Fragment)",
    slug: "tb-500",
    category: "tissue-repair",
    description: "Actin-binding peptide fragment. Batch-linked COA.",
    longDescription:
      "TB-500 is the synthetic fragment of Thymosin Beta-4 corresponding to the actin-binding domain. Used in laboratory models examining cell migration and cytoskeletal dynamics. Each lot ships with an HPLC chromatogram and mass-spec confirmation.",
    variants: [
      { size: "5 mg", price: 44_99, sku: "HC-TB5-5" },
      { size: "10 mg", price: 74_99, sku: "HC-TB5-10" },
    ],
    purity: "99.1%",
    cas: "885340-08-9",
    molecularWeight: "889.0 g/mol",
    sequence: "LKKTETQ",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    appearance: "White powder",
    featured: true,
    tags: ["repair", "cytoskeleton"],
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu (Copper Peptide)",
    slug: "ghk-cu",
    category: "tissue-repair",
    description: "Copper-bound tripeptide. Deep blue lyophilizate.",
    longDescription:
      "GHK-Cu is a naturally occurring copper-binding tripeptide studied for its role in extracellular matrix remodeling and as a reference in dermal fibroblast assays. Supplied as the characteristic deep-blue copper complex.",
    variants: [
      { size: "50 mg", price: 34_99, sku: "HC-GHK-50" },
      { size: "100 mg", price: 54_99, sku: "HC-GHK-100" },
    ],
    purity: "99.0%",
    cas: "89030-95-5",
    molecularWeight: "403.9 g/mol",
    sequence: "GHK-Cu",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated, protected from light",
    appearance: "Deep blue powder",
    tags: ["repair", "matrix"],
  },
  {
    id: "semaglutide-ruo",
    name: "Semaglutide (RUO)",
    slug: "semaglutide-ruo",
    category: "metabolic",
    description: "GLP-1 receptor agonist reference standard.",
    longDescription:
      "Semaglutide is a GLP-1 receptor agonist analog used as an analytical reference standard in metabolic and incretin-pathway research. Not a drug product — supplied for in-vitro laboratory characterization only.",
    variants: [
      { size: "5 mg", price: 119_99, sku: "HC-SEM-5" },
      { size: "10 mg", price: 199_99, sku: "HC-SEM-10" },
    ],
    purity: "99.5%",
    cas: "910463-68-2",
    molecularWeight: "4113.6 g/mol",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    appearance: "White powder",
    featured: true,
    badge: "High demand",
    tags: ["glp-1", "metabolic"],
  },
  {
    id: "tirzepatide-ruo",
    name: "Tirzepatide (RUO)",
    slug: "tirzepatide-ruo",
    category: "metabolic",
    description: "Dual GIP/GLP-1 agonist reference standard.",
    longDescription:
      "Tirzepatide is a dual GIP and GLP-1 receptor agonist supplied as a reference standard for incretin co-agonism research. For laboratory use only.",
    variants: [
      { size: "5 mg", price: 139_99, sku: "HC-TIR-5" },
      { size: "10 mg", price: 239_99, sku: "HC-TIR-10" },
    ],
    purity: "99.3%",
    cas: "2023788-19-2",
    molecularWeight: "4813.5 g/mol",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    appearance: "White powder",
    tags: ["glp-1", "gip", "metabolic"],
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    slug: "tesamorelin",
    category: "growth-factors",
    description: "GHRH analog reference standard. 99%+ purity.",
    longDescription:
      "Tesamorelin is a stabilized analog of growth-hormone-releasing hormone (GHRH) used in research on the somatotropic axis. Supplied lyophilized with a per-lot certificate of analysis.",
    variants: [
      { size: "5 mg", price: 89_99, sku: "HC-TES-5" },
      { size: "10 mg", price: 149_99, sku: "HC-TES-10" },
    ],
    purity: "99.2%",
    cas: "218949-48-5",
    molecularWeight: "5135.9 g/mol",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    appearance: "White powder",
    tags: ["ghrh", "growth"],
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    slug: "ipamorelin",
    category: "growth-factors",
    description: "Selective GH secretagogue pentapeptide.",
    longDescription:
      "Ipamorelin is a selective growth-hormone secretagogue pentapeptide commonly used as a reference compound in ghrelin-receptor research. Lyophilized and shipped cold.",
    variants: [
      { size: "5 mg", price: 42_99, sku: "HC-IPA-5" },
      { size: "10 mg", price: 69_99, sku: "HC-IPA-10" },
    ],
    purity: "99.3%",
    cas: "170851-70-4",
    molecularWeight: "711.9 g/mol",
    sequence: "Aib-His-D-2-Nal-D-Phe-Lys-NH2",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    appearance: "White powder",
    tags: ["secretagogue", "growth"],
  },
  {
    id: "cjc-1295-dac",
    name: "CJC-1295 with DAC",
    slug: "cjc-1295-dac",
    category: "growth-factors",
    description: "Long-acting GHRH analog with drug affinity complex.",
    longDescription:
      "CJC-1295 with DAC is a GHRH analog engineered with a drug affinity complex for extended half-life in laboratory pharmacokinetic models. Reference standard, research use only.",
    variants: [
      { size: "2 mg", price: 49_99, sku: "HC-CJC-2" },
      { size: "5 mg", price: 99_99, sku: "HC-CJC-5" },
    ],
    purity: "99.0%",
    cas: "863288-34-0",
    molecularWeight: "3647.2 g/mol",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    appearance: "White powder",
    tags: ["ghrh", "growth"],
  },
  {
    id: "selank",
    name: "Selank",
    slug: "selank",
    category: "cognitive",
    description: "Heptapeptide anxiolytic reference standard.",
    longDescription:
      "Selank is a synthetic heptapeptide analog of tuftsin studied in models of neuropeptide signaling. Supplied as a reference standard for in-vitro work.",
    variants: [
      { size: "5 mg", price: 39_99, sku: "HC-SEL-5" },
      { size: "10 mg", price: 64_99, sku: "HC-SEL-10" },
    ],
    purity: "99.1%",
    cas: "129954-34-3",
    molecularWeight: "751.9 g/mol",
    sequence: "TKPRPGP",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    appearance: "White powder",
    tags: ["neuropeptide", "cognitive"],
  },
  {
    id: "semax",
    name: "Semax",
    slug: "semax",
    category: "cognitive",
    description: "ACTH(4-10) analog heptapeptide.",
    longDescription:
      "Semax is a synthetic analog of a fragment of ACTH(4-10) used in neuroprotection and BDNF-pathway research. Reference standard, research use only.",
    variants: [
      { size: "5 mg", price: 41_99, sku: "HC-SMX-5" },
      { size: "10 mg", price: 67_99, sku: "HC-SMX-10" },
    ],
    purity: "99.2%",
    cas: "80714-61-0",
    molecularWeight: "813.9 g/mol",
    sequence: "MEHFPGP",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    appearance: "White powder",
    tags: ["neuropeptide", "cognitive"],
  },
  {
    id: "epitalon",
    name: "Epitalon",
    slug: "epitalon",
    category: "longevity",
    description: "Tetrapeptide telomerase research standard.",
    longDescription:
      "Epitalon (Epithalon) is a synthetic tetrapeptide used in laboratory research on telomere biology and pineal signaling. Supplied lyophilized with a per-lot COA.",
    variants: [
      { size: "10 mg", price: 36_99, sku: "HC-EPI-10" },
      { size: "20 mg", price: 59_99, sku: "HC-EPI-20" },
    ],
    purity: "99.3%",
    cas: "307297-39-8",
    molecularWeight: "390.3 g/mol",
    sequence: "AEDG",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated",
    appearance: "White powder",
    tags: ["telomere", "longevity"],
  },
  {
    id: "nad-plus",
    name: "NAD+",
    slug: "nad-plus",
    category: "longevity",
    description: "Nicotinamide adenine dinucleotide, research grade.",
    longDescription:
      "NAD+ is a coenzyme central to cellular redox metabolism, supplied as a research-grade reference for in-vitro mitochondrial and sirtuin studies. High purity, shipped cold.",
    variants: [
      { size: "100 mg", price: 54_99, sku: "HC-NAD-100" },
      { size: "500 mg", price: 199_99, sku: "HC-NAD-500" },
    ],
    purity: "99.0%",
    cas: "53-84-9",
    molecularWeight: "663.4 g/mol",
    form: "Lyophilized powder",
    storage: "-20°C, desiccated, protected from light",
    appearance: "White to off-white powder",
    tags: ["coenzyme", "longevity"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeatured(): Product[] {
  return products.filter((p) => p.featured);
}

export function categoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}

/** Lowest variant price in cents — used for "from $X" on cards. */
export function fromPrice(p: Product): number {
  return Math.min(...p.variants.map((v) => v.price));
}
