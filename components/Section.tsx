import type { ReactNode } from "react";

/** One part of the home page: a hairline divider, a small heading, then content. */
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-border py-12 sm:py-16"
    >
      <h2
        id={`${id}-title`}
        className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground"
      >
        {title}
      </h2>
      <div className="mt-5 text-[17px] leading-[1.7]">{children}</div>
    </section>
  );
}
