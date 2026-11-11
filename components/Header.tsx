import ThemeToggle from "@/components/ThemeToggle";
import { cardClass } from "@/components/Card";
import { site } from "@/lib/site";

const initials = site.name
  .split(" ")
  .map((word) => word[0])
  .join("");

export default function Header() {
  return (
    <header className="page-width flex items-center justify-between py-6 sm:py-7">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={cardClass(
            "inverse",
            "flex size-10 items-center justify-center rounded-xl text-[15px] font-bold",
          )}
        >
          {initials}
        </span>
        <span className="text-lg font-bold tracking-[-0.01em]">
          {site.name}
        </span>
      </div>
      <ThemeToggle />
    </header>
  );
}
