import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-column py-24 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-6 text-4xl font-semibold leading-[1.2] tracking-[-0.025em] sm:text-5xl">
        Nothing here.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        That page doesn’t exist.{" "}
        <Link href="/" className="link">
          Back to the homepage
        </Link>
        .
      </p>
    </main>
  );
}
