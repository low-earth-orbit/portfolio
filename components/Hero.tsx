import ExternalLink from "@/components/ExternalLink";
import { content, site } from "@/lib/site";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-12 pt-10 sm:pb-16 sm:pt-20">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {content.role} · {site.city}, {site.country}
      </p>
      <h1
        id="hero-title"
        className="mt-6 text-4xl font-semibold leading-[1.2] tracking-[-0.025em] sm:text-5xl"
      >
        Hi, I’m Leo.
      </h1>
      <p className="mt-6 text-lg leading-[1.7] text-foreground/85 sm:text-xl">
        {content.intro}
      </p>
      <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium">
        <ExternalLink href={site.links.linkedin}>LinkedIn</ExternalLink>
        <ExternalLink href={site.links.github}>GitHub</ExternalLink>
      </p>
    </section>
  );
}
