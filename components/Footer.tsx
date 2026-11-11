import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="page-column border-t border-border py-10 text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} {site.name} · {site.city},{" "}
      {site.country}
    </footer>
  );
}
