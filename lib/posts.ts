import fs from "node:fs";
import path from "node:path";

import rehypeShiki from "@shikijs/rehype";
import matter from "gray-matter";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const postsDir = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  /** Filename without `.md`; this is the URL: /blog/<slug>. */
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  description: string;
  /** Drafts show up in `next dev` but are left out of the production build. */
  draft: boolean;
};

export type Post = PostMeta & { html: string };

function toIsoDate(value: unknown, slug: string): string {
  // YAML parses an unquoted 2026-11-11 as a Date; a quoted one stays a string.
  const iso =
    value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    throw new Error(`${slug}.md: "date" must be YYYY-MM-DD, got "${iso}"`);
  }
  return iso;
}

function readPost(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  for (const key of ["title", "date", "description"] as const) {
    if (!data[key]) throw new Error(`${slug}.md: missing "${key}" in frontmatter`);
  }
  const meta: PostMeta = {
    slug,
    title: String(data.title),
    date: toIsoDate(data.date, slug),
    description: String(data.description),
    draft: data.draft === true,
  };
  return { meta, content };
}

/** All posts, newest first. */
export function getAllPosts(): PostMeta[] {
  const showDrafts = process.env.NODE_ENV !== "production";
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => readPost(file.slice(0, -3)).meta)
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug)
  // Highlighted at build time; both themes are emitted as CSS variables and
  // picked in globals.css, so there is no client-side JavaScript.
  .use(rehypeShiki, {
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
    fallbackLanguage: "text",
  })
  .use(rehypeStringify);

export async function getPost(slug: string): Promise<Post> {
  const { meta, content } = readPost(slug);
  const html = String(await processor.process(content));
  return { ...meta, html };
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
