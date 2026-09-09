export type SiteLang = "en" | "ko";

const COOKIE_NAME = "googtrans";

function setCookie(value: string) {
  const host = window.location.hostname;
  // Set on current path/host
  document.cookie = `${COOKIE_NAME}=${value}; path=/`;
  // Also set on bare domain (Google sometimes reads the dotted-domain cookie)
  document.cookie = `${COOKIE_NAME}=${value}; path=/; domain=${host}`;
  const parts = host.split(".");
  if (parts.length > 2) {
    const rootDomain = "." + parts.slice(-2).join(".");
    document.cookie = `${COOKIE_NAME}=${value}; path=/; domain=${rootDomain}`;
  }
}

export function getCurrentLang(): SiteLang {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
  return match && match[1] === "ko" ? "ko" : "en";
}

export function setLang(lang: SiteLang) {
  if (lang === "ko") {
    setCookie("/en/ko");
  } else {
    setCookie("/en/en");
  }
  window.location.reload();
}
