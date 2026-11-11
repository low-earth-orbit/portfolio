import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/lib/site";

const navClass =
  "text-muted-foreground transition-colors hover:text-foreground";

/** Section links use "/#id" so they also work from the blog pages. */
export default function Header() {
  return (
    <header className="page-column flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6 sm:py-9">
      <Link href="/" className="font-semibold tracking-[-0.01em]">
        {site.name}
      </Link>
      <nav
        aria-label="Main"
        className="flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-2 text-sm sm:w-auto sm:justify-end sm:gap-x-5 sm:text-[15px]"
      >
        <Link href="/blog" className={navClass}>
          Writing
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
