import Link from "next/link";

import { CardLabel, cardClass } from "@/components/Card";

export default function NotFound() {
  return (
    <main className="page-width py-16 sm:py-24">
      <div className={cardClass("surface", "p-8 sm:p-12")}>
        <CardLabel as="p">404</CardLabel>
        <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-7xl">
          Nothing here.
        </h1>
        <p className="mt-6 text-lg text-tone-muted">
          That page doesn’t exist.{" "}
          <Link href="/" className="link text-tone-fg">
            Back to the homepage
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
