export type SiteTheme = "light" | "dark";

const STORAGE_KEY = "ehyun-theme";

export function getStoredTheme(): SiteTheme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function applyTheme(theme: SiteTheme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage unavailable — theme just won't persist across reloads
  }
}

export const THEME_STORAGE_KEY = STORAGE_KEY;
