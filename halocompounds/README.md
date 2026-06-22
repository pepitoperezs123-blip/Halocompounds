# Halo Compounds

A storefront for research-use-only (RUO) peptide reference standards. Built with
Next.js 16 (App Router) + React 19 + Tailwind CSS v4, designed to deploy to Vercel
with **zero external services** — so it builds clean and updates in real time on
every `git push`.

> **Research use only.** All products are analytical reference standards for
> in-vitro laboratory research. Not for human or animal consumption.

## Stack

| Layer | Choice |
|------|--------|
| Framework | Next.js 16, App Router, Node runtime |
| UI | React 19, Tailwind CSS v4, lucide-react |
| State | React Context + localStorage (cart) |
| Data | Typed catalog in `src/lib/products.ts` (no DB) |
| Hosting | Vercel |

There is **no database, auth, or payment integration** — checkout is intentionally
stubbed. This keeps the build dependency-free and instantly deployable. Wire in a
real checkout (Stripe, etc.) when ready.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project structure

```
src/
  app/
    page.tsx                 # homepage
    shop/                    # catalog (server page + client filter/sort)
    product/[slug]/          # product detail (static, JSON-LD) + add-to-cart
    cart/                    # full cart page
    about/ faq/ coa/         # content pages
    legal/                   # RUO, terms, privacy
    robots.ts  sitemap.ts
  components/                # Header, Footer, CartDrawer, AgeGate, etc.
  lib/
    products.ts              # the catalog — edit here to add SKUs
    site.ts                  # brand name, contact, shipping rules
    utils.ts
```

## Common edits

- **Add a product** → append to `products` in `src/lib/products.ts`.
- **Change brand name / contact / shipping** → `src/lib/site.ts`.
- **Recolor** → CSS custom properties in `src/app/globals.css`.

## Deploy to Vercel

This repo is a standard Next.js app. Import it in Vercel (or `vercel link` + `vercel`),
keep the defaults, and every push to the connected branch ships automatically.
No environment variables are required for the storefront to build.
