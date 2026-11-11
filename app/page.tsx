import ExternalLink from "@/components/ExternalLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { content, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="page-column">
        <Hero />

        <Section id="projects" title={content.headings.projects}>
          <ul className="space-y-6">
            {content.projects.map((project) => (
              <li key={project.url}>
                <ExternalLink
                  href={project.url}
                  className="text-xl font-medium"
                >
                  {project.name}
                </ExternalLink>
                <p className="mt-1 text-[15px] text-muted-foreground">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="interests" title={content.headings.learning}>
          <p>{content.learning.join(" · ")}</p>
        </Section>

        <Section id="technology" title={content.headings.stack}>
          <p>{content.stack.join(" · ")}</p>
        </Section>

        <Section id="hobbies" title={content.headings.hobbies}>
          <p>{content.hobbies}</p>
        </Section>

        <Section id="contact" title={content.headings.contact}>
          <p>{content.contact}</p>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium">
            <ExternalLink href={site.links.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={site.links.github}>GitHub</ExternalLink>
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
