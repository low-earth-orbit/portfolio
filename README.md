# Leo Hong — personal website

A small, static one-page site built with [Next.js](https://nextjs.org) (App
Router), [React](https://react.dev) and [Tailwind CSS](https://tailwindcss.com),
with a few [shadcn/ui](https://ui.shadcn.com)-style primitives. Published to
GitHub Pages at <https://leohong.dev>.

## Getting started

Requires Node 20.9+ (CI uses the version in `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static export to ./out
npx serve out    # preview the exported site
```

## Where things live

```
app/
  layout.tsx          DM Sans font, metadata, theme script, skip link
  page.tsx            Page composition (header, bento grid, footer)
  globals.css         Design tokens (light/dark), card tones, base styles
  not-found.tsx       404 page
components/
  Bento.tsx           The card grid and its responsive layout
  BentoGrid.tsx       Grid wrapper: reveals the timeline on scroll (client component)
  Card.tsx            cardClass() + CardLabel: shared bento card styling
  Header.tsx          Monogram, name, theme toggle
  Footer.tsx
  ThemeToggle.tsx     Light/dark switch (client component)
  ui/button.tsx       shadcn/ui button
lib/
  site.ts             ALL the copy and links: edit your content here
  utils.ts            cn() class helper
```

To change what the site says, edit `lib/site.ts`; you shouldn't need to touch
the layout. To add or reorder cards, edit `components/Bento.tsx`.

## Design

A bento grid: a 12-column layout on desktop, two-up on tablets, a single column
on phones (the five-step route becomes a vertical timeline).

Each card has a *tone* (`surface`, `blue`, `peach`, `mint`, `lilac`, `inverse`,
defined in `app/globals.css`). A tone sets `--tone-bg`, `--tone-fg` and
`--tone-muted`, so anything inside a card can use `text-tone-muted` or
`bg-tone-fg/10` and recolour with it, in both themes. Every text pairing meets
WCAG AA contrast.

## Theming

Page colours are CSS variables in `app/globals.css`, exposed to Tailwind through
`@theme`. Dark mode is a `.dark` class on `<html>`.

The theme **follows the system by default** and tracks OS changes live. The
header button overrides it; pressing it again to land back on the OS setting
clears the override. An inline script in `layout.tsx` applies the theme before
first paint, so there is no flash. The only thing stored in `localStorage` is an
explicit `light` or `dark` choice.

## Motion

CSS-first and small. Cards rise in one after another on load, the contour rings
on the location card breathe, and the "Road to tech" timeline draws itself the
first time it scrolls into view (`BentoGrid.tsx` sets `data-in` through an
`IntersectionObserver`). Everything is disabled under `prefers-reduced-motion`.

To add another shadcn component: `npx shadcn@latest add <component>`
(configured in `components.json`).

## Deployment

- Pull requests to `main` run lint and build: `.github/workflows/ci.yml`.
- Pushes to `main` build and publish to GitHub Pages:
  `.github/workflows/nextjs.yml`. `next.config.ts` sets `output: "export"`; the
  site is served from the custom domain root, so no `basePath` is needed.
- Node version for both workflows comes from `.nvmrc`.

## Notes

- TypeScript is pinned to 6.0 (`~6.0.3`) because `typescript-eslint` doesn't
  support TypeScript 7 yet. Move to 7 once it does.
