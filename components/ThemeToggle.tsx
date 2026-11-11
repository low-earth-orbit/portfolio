"use client";

import { useEffect } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

type Theme = "system" | "light" | "dark";

// Keep the storage key and attribute names in sync with the inline script in
// app/layout.tsx, which applies the theme before first paint (no flash).
const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const dark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia(DARK_QUERY).matches);
  root.classList.toggle("dark", dark);
  root.dataset.theme = theme;
}

function toggleTheme() {
  const next = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";
  // Landing back on what the OS already says means "follow the system" again,
  // so this one button can still undo an override.
  const matchesSystem =
    (next === "dark") === window.matchMedia(DARK_QUERY).matches;
  try {
    if (matchesSystem) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage blocked: the choice just won't persist.
  }
  applyTheme(matchesSystem ? "system" : next);
}

/**
 * Light/dark switch. Follows the visitor's OS setting until they press it, and
 * keeps following it live while they haven't.
 */
export default function ThemeToggle() {
  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    const onChange = () => {
      if (document.documentElement.dataset.theme === "system") {
        applyTheme("system");
      }
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      onClick={toggleTheme}
      className="bg-card"
    >
      {/* Both icons are always rendered; CSS picks one from the `.dark` class
          that the inline script sets before paint, so there is no flash or
          hydration mismatch. */}
      <span className="relative size-5">
        <IconMoon
          aria-hidden
          className="absolute inset-0 size-5 transition duration-300 dark:-rotate-90 dark:scale-0 dark:opacity-0"
        />
        <IconSun
          aria-hidden
          className="absolute inset-0 size-5 rotate-90 scale-0 opacity-0 transition duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100"
        />
      </span>
    </Button>
  );
}
