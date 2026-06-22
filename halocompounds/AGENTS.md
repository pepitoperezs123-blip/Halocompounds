# This is NOT the Next.js you know

This project uses Next.js 16 (App Router). APIs, conventions, and file structure
may differ from older training data. Notable points already applied in this repo:

- `params` and `searchParams` in pages are **async** (`Promise`) — always `await` them.
- Metadata is exported from **server components** only. Client components that need
  state are split into a sibling `*Content.tsx` / `*Client.tsx`.
- React 19: `ref` is a regular prop; context is read with `use()` (no `forwardRef`,
  no `useContext` needed).

Read the relevant guide in `node_modules/next/dist/docs/` before changing routing,
metadata, or data-fetching code. Heed deprecation notices.

## Project shape

- Storefront for **Halo Compounds** — research-use-only peptide reference standards.
- Self-contained: **no database, auth, or payment provider**. The catalog lives in
  `src/lib/products.ts`; brand values in `src/lib/site.ts`. Cart is client-side
  (React Context + localStorage). Checkout is intentionally stubbed.
- Design tokens in `src/app/globals.css`. Three-font system: DM Serif Display
  (headings), Outfit (body/UI), DM Mono (specs/badges).

To add a product: append to `products` in `src/lib/products.ts`.
To rebrand: edit `src/lib/site.ts` and the color tokens in `globals.css`.
