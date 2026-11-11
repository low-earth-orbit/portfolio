# Leo Hong — personal website

A small, static site built with [Next.js](https://nextjs.org) (App
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
  layout.tsx          Geist fonts, metadata, theme script, skip link
  page.tsx            Home page: the sections, in order
  globals.css         Design tokens (light/dark), base styles, blog typography
  not-found.tsx       404 page
  blog/               Writing index, post pages and RSS feed
components/
  Header.tsx          Name, section links, Writing link, theme toggle
  Hero.tsx            Intro at the top of the home page
  Section.tsx         Hairline divider + small heading, used for each section
  ExternalLink.tsx    Link that opens in a new tab, with an arrow
  Footer.tsx
  ThemeToggle.tsx     Light/dark switch (client component)
  ui/button.tsx       shadcn/ui button (used by the theme toggle)
lib/
  site.ts             ALL the copy and links: edit your content here
  posts.ts            Reads Markdown posts from content/posts
content/posts/        One Markdown file per blog post
```

To change what the site says, edit `lib/site.ts`. To change the order or
headings of the home page sections, edit `app/page.tsx`.

## Design

A single reading column (about 720px) on warm off-white paper, with near-black
type and one muted blue accent. Sections are separated by thin dividers rather
than cards. Type is Geist throughout, with Geist Mono for small labels.

Colours are CSS variables in `app/globals.css`, exposed to Tailwind through
`@theme`: use `text-muted-foreground`, `border-border`, `text-link` and so on.
Secondary text is set to meet WCAG AA (4.5:1) on the background.

## Theming

Dark mode is a `.dark` class on `<html>`. The theme **follows the system by
default** and tracks OS changes live. The header button overrides it; pressing
it again to land back on the OS setting clears the override. An inline script
in `layout.tsx` applies the theme before first paint, so there is no flash. The
only thing stored in `localStorage` is an explicit `light` or `dark` choice.

## Motion

None on the home page: no scroll animations and no loading transitions. Anchor
links scroll smoothly, and smooth scrolling is turned off under
`prefers-reduced-motion`.

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
