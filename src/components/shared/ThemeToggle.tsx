"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { getStoredTheme, applyTheme, SiteTheme } from "@/lib/theme";

export default function ThemeToggle({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const [theme, setThemeState] = useState<SiteTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(getStoredTheme());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next: SiteTheme = theme === "light" ? "dark" : "light";
    setThemeState(next);
    applyTheme(next);
  };

  if (variant === "mobile") {
    return (
      <button
        onClick={toggle}
        aria-label="Toggle light/dark mode"
        className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-ink-line text-paper/60 hover:text-signal-light hover:border-signal transition-colors"
      >
        {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark mode"
      className="w-9 h-9 flex items-center justify-center border border-ink-line text-paper/60 hover:text-signal-light hover:border-signal transition-colors"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
