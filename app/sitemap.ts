import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/** Absolute URL. `new URL` gives the root a trailing slash, matching the canonical URL. */
const abs = (path: string) => new URL(path, site.url).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  // Newest first.
  const posts = getAllPosts();

  return [
    { url: abs("/") },
    // The blog index only has content once a post is published.
    ...(posts.length
      ? [{ url: abs("/blog"), lastModified: posts[0].date }]
      : []),
    ...posts.map((post) => ({
      url: abs(`/blog/${post.slug}`),
      lastModified: post.date,
    })),
  ];
}
