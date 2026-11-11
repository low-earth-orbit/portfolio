import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Static export: only the slugs below exist.
export const dynamicParams = false;

// "output: export" fails the build if a dynamic route generates nothing, so
// while every post is still a draft we emit one placeholder slug that 404s.
const PLACEHOLDER = "_";

export function generateStaticParams() {
  const slugs = getAllPosts().map((post) => post.slug);
  return (slugs.length ? slugs : [PLACEHOLDER]).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === PLACEHOLDER) return {};
  const post = await getPost(slug);
  return {
    title: `${post.title} | ${site.name}`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      siteName: site.name,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  if (slug === PLACEHOLDER) notFound();
  const post = await getPost(slug);

  return (
    <>
      <Header />
      <main id="main" className="page-column pb-12 pt-6 sm:pt-12">
        <article>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            <Link href="/blog" className="link">
              ← Writing
            </Link>
          </p>
          <h1 className="mt-6 max-w-[24ch] text-4xl font-semibold leading-[1.2] tracking-[-0.025em] sm:text-5xl">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="mt-4 block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
          >
            {formatDate(post.date)}
            {post.draft ? " · draft" : ""}
          </time>
          <div
            className="prose mt-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
