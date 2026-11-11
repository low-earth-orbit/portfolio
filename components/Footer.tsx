import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="page-width flex flex-wrap justify-between gap-x-6 gap-y-1 pb-12 pt-9 text-sm text-muted-foreground">
      <span>
        &copy; {new Date().getFullYear()} {site.name}
      </span>
      <span>
        {site.city}, {site.country}
      </span>
    </footer>
  );
}
