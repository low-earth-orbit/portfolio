import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const tones = {
  surface: "tone-surface",
  blue: "tone-blue",
  peach: "tone-peach",
  inverse: "tone-inverse",
} as const;

export type Tone = keyof typeof tones;

/** Classes for a bento card. Works on any element: <section>, <a>, <div>. */
export function cardClass(tone: Tone = "surface", className?: string) {
  return cn("rounded-[28px] bg-tone-bg text-tone-fg", tones[tone], className);
}

/** Small uppercase label that sits at the top of a card. */
export function CardLabel({
  as: Tag = "h2",
  id,
  className,
  children,
}: {
  as?: "h2" | "p";
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "text-[13px] font-semibold uppercase tracking-[0.12em] text-tone-muted",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
