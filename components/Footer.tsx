import { content, site } from "@/lib/site";

/** Words in the contact line that become links. */
const contactLinks: Record<string, string> = {
  LinkedIn: site.links.linkedin,
  GitHub: site.links.github,
};

export default function Footer() {
  return (
    <footer className="page-width flex flex-col gap-4 pb-12 pt-9 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between md:gap-12">
      <p className="max-w-xl text-pretty text-base">
        {content.contact.split(/(LinkedIn|GitHub)/).map((part, i) =>
          contactLinks[part] ? (
            <a
              key={i}
              href={contactLinks[part]}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-foreground"
            >
              {part}
            </a>
          ) : (
            part
          ),
        )}
      </p>
      <span className="shrink-0">
        &copy; {new Date().getFullYear()} {site.name}
      </span>
    </footer>
  );
}
