import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/shop", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/coa", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/legal/research-use-only", priority: 0.3 },
    { path: "/legal/terms", priority: 0.3 },
    { path: "/legal/privacy", priority: 0.3 },
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      priority: p.priority,
    })),
    ...products.map((p) => ({
      url: `${site.url}/product/${p.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
