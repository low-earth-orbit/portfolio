import type { CSSProperties } from "react";
import {
  IconArrowUpRight,
  IconBallTennis,
  IconBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrush,
  IconFlame,
  IconMapPin,
  IconMountain,
  type Icon,
} from "@tabler/icons-react";

import BentoGrid from "@/components/BentoGrid";
import { CardLabel, cardClass } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { content, site, type OffHoursItem } from "@/lib/site";

/** Decorative topographic rings for the location card. */
function Contours() {
  return (
    <svg
      viewBox="0 0 400 380"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      // Fades toward the bottom-left so the rings never run through the text.
      className="absolute inset-0 size-full mask-[radial-gradient(circle_at_78%_22%,#000_0%,transparent_72%)]"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
        transform="rotate(-20 300 130)"
      >
        {[
          [46, 32],
          [96, 68],
          [148, 104],
          [204, 142],
          [264, 184],
          [330, 228],
        ].map(([rx, ry], i) => (
          <ellipse
            key={rx}
            cx="300"
            cy="130"
            rx={rx}
            ry={ry}
            // Each ring breathes slightly out of step with its neighbour.
            className="ring-pulse"
            style={{ animationDelay: `${i * -1.2}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

const offHoursIcons: Record<OffHoursItem["icon"], Icon> = {
  reading: IconBook,
  finance: IconFlame,
  hiking: IconMountain,
  tennis: IconBallTennis,
  calligraphy: IconBrush,
};

const linkTile =
  "group flex min-h-[88px] flex-1 items-center justify-between gap-4 px-7 text-[22px] font-bold transition-transform hover:-translate-y-0.5";

const arrow =
  "transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5";

/** Small things inside a card that nudge up when hovered. */
const lift = "transition duration-200 hover:-translate-y-0.5 hover:bg-tone-fg/15";

export default function Bento() {
  return (
    <BentoGrid className="bento grid grid-cols-1 gap-4 md:grid-cols-12">
      {/* Intro */}
      <section
        aria-label="Introduction"
        className={cardClass(
          "surface",
          "flex flex-col justify-between gap-10 p-6 sm:p-9 md:col-span-12 lg:col-span-7 lg:min-h-100",
        )}
      >
        <CardLabel as="p">{content.role}</CardLabel>
        <div>
          <h1 className="text-[64px] font-bold leading-[0.95] tracking-tighter sm:text-[88px] lg:text-[104px]">
            <span className="block">Hi, I’m</span>
            Leo.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg text-tone-muted sm:text-xl">
            {content.intro}
          </p>
        </div>
      </section>

      {/* Location */}
      <section
        aria-label="Location"
        className={cardClass(
          "blue",
          "relative flex flex-col justify-between gap-10 overflow-hidden p-6 sm:p-9 md:col-span-6 lg:col-span-5 lg:min-h-100",
        )}
      >
        <Contours />
        <CardLabel as="p" className="relative flex items-center gap-1.5">
          <IconMapPin aria-hidden size={16} />
          {content.headings.location}
        </CardLabel>
        <p className="relative text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px]">
          {site.city},
          <br />
          {site.country}
        </p>
      </section>

      {/* Stack */}
      <section
        aria-labelledby="stack-title"
        className={cardClass(
          "surface",
          "p-6 sm:p-8 md:col-span-6 lg:col-span-5 lg:min-h-64",
        )}
      >
        <CardLabel id="stack-title">{content.headings.stack}</CardLabel>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {content.stack.map((item) => (
            <li
              key={item}
              className={`rounded-full bg-tone-fg/10 px-4 py-2 text-base font-semibold ${lift}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Learning */}
      <section
        aria-labelledby="learning-title"
        className={cardClass(
          "mint",
          "flex flex-col justify-between gap-8 p-6 sm:p-8 md:col-span-6 lg:col-span-3 lg:min-h-64",
        )}
      >
        <CardLabel id="learning-title">{content.headings.learning}</CardLabel>
        <ul className="flex flex-col gap-2.5 text-2xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-[26px]">
          {content.learning.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Links */}
      <div className="flex flex-col gap-4 md:col-span-6 lg:col-span-4">
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass("peach", linkTile)}
        >
          <span className="flex items-center gap-3.5">
            <IconBrandLinkedin aria-hidden size={28} />
            LinkedIn
          </span>
          <IconArrowUpRight aria-hidden size={22} className={arrow} />
        </a>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass("inverse", linkTile)}
        >
          <span className="flex items-center gap-3.5">
            <IconBrandGithub aria-hidden size={28} />
            GitHub
          </span>
          <IconArrowUpRight aria-hidden size={22} className={arrow} />
        </a>
      </div>

      {/* Route: the dots and connectors draw in when it scrolls into view. */}
      <section
        aria-labelledby="route-title"
        data-reveal
        className={cardClass(
          "surface",
          "flex flex-col justify-between gap-8 p-6 sm:p-8 md:col-span-12 lg:col-span-8 lg:min-h-72",
        )}
      >
        <CardLabel id="route-title">{content.headings.route}</CardLabel>
        <ol className="lg:grid lg:grid-cols-5 lg:gap-4">
          {content.route.map((step, i) => (
            <li
              key={step}
              className="flex gap-4 lg:block"
              style={{ "--i": i } as CSSProperties}
            >
              {/* marker: vertical on small screens, horizontal on large */}
              <div className="flex flex-col items-center lg:mb-5 lg:flex-row">
                <span className="route-dot mt-1 size-3.5 shrink-0 rounded-full bg-dot lg:mt-0" />
                {i < content.route.length - 1 && (
                  <span className="route-line min-h-6 w-0.5 flex-1 bg-tone-fg/15 lg:h-0.5 lg:w-auto lg:min-h-0" />
                )}
              </div>
              <p className="pb-6 text-base font-semibold leading-snug lg:pb-0">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Off hours */}
      <section
        aria-labelledby="off-hours-title"
        className={cardClass(
          "lilac",
          "flex flex-col justify-between gap-8 p-6 sm:p-8 md:col-span-12 lg:col-span-4 lg:min-h-72",
        )}
      >
        <CardLabel id="off-hours-title">{content.headings.offHours}</CardLabel>
        <div className="space-y-2.5">
          {/* Interests with something to say get a tile; the rest are pills. */}
          <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {content.offHours
              .filter((item) => item.detail)
              .map((item) => {
                const ItemIcon = offHoursIcons[item.icon];
                return (
                  <li
                    key={item.label}
                    className={`flex items-start gap-3 rounded-[18px] bg-tone-fg/10 px-4 py-3.5 ${lift}`}
                  >
                    <ItemIcon
                      aria-hidden
                      size={22}
                      className="mt-[3px] shrink-0"
                    />
                    <div>
                      <span className="block text-lg font-bold sm:text-xl">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-tone-muted">
                        {item.detail}
                      </span>
                    </div>
                  </li>
                );
              })}
          </ul>
          <ul className="flex flex-wrap gap-2.5">
            {content.offHours
              .filter((item) => !item.detail)
              .map((item) => {
                const ItemIcon = offHoursIcons[item.icon];
                return (
                  <li
                    key={item.label}
                    className={`flex items-center gap-2 rounded-full bg-tone-fg/10 px-4 py-2.5 text-base font-bold ${lift}`}
                  >
                    <ItemIcon aria-hidden size={18} />
                    {item.label}
                  </li>
                );
              })}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section
        aria-labelledby="contact-title"
        className={cardClass(
          "inverse",
          "flex flex-col gap-8 p-6 sm:p-8 md:col-span-12 md:flex-row md:items-center md:justify-between md:gap-12 md:px-12 md:py-11",
        )}
      >
        <div className="max-w-2xl">
          <h2
            id="contact-title"
            className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-[44px]"
          >
            {content.headings.contact}
          </h2>
          <p className="mt-3 text-pretty text-lg text-tone-muted">
            {content.contact}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:flex-col lg:flex-row">
          <Button
            asChild
            size="lg"
            className="min-w-36 bg-tone-fg text-tone-bg hover:bg-tone-fg/90"
          >
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-36 border-[1.5px] border-tone-fg bg-transparent text-tone-fg hover:bg-tone-fg/10 hover:text-tone-fg"
          >
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>
    </BentoGrid>
  );
}
