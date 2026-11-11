import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing | Leo Hong",
  description: "Notes and write-ups by Leo Hong.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main id="main" className="page-column pb-12 pt-6 sm:pt-12">
        <h1 className="text-4xl font-semibold leading-[1.2] tracking-[-0.025em] sm:text-5xl">
          Notes and write-ups
        </h1>
        {posts.length === 0 ? (
          <p className="mt-10 text-lg text-muted-foreground">Nothing yet.</p>
        ) : (
          <ul className="mt-12 divide-y divide-border border-t border-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block py-8">
                  <time
                    dateTime={post.date}
                    className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {formatDate(post.date)}
                    {post.draft ? " · draft" : ""}
                  </time>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.015em] group-hover:text-link">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
