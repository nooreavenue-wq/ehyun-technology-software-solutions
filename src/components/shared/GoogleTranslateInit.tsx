"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (options: Record<string, unknown>, elementId: string): unknown;
          InlineLayout: { SIMPLE: unknown };
        };
      };
    };
  }
}

export default function GoogleTranslateInit() {
  useEffect(() => {
    // --- Force-hide Google's translate banner/UI ---
    // Google's script repeatedly re-applies inline styles to the banner iframe and
    // <body>/<html> (to push content down for the banner). Plain CSS can't reliably win
    // against inline styles it sets *after* our stylesheet loads, so we watch the DOM and
    // forcibly overwrite those inline styles the moment Google sets them.
    const forceHideGoogleUI = () => {
      const banner = document.querySelector<HTMLElement>("iframe.goog-te-banner-frame");
      if (banner) {
        banner.style.setProperty("display", "none", "important");
        banner.style.setProperty("visibility", "hidden", "important");
        banner.style.setProperty("height", "0px", "important");
      }
      document.body.style.setProperty("top", "0px", "important");
      document.body.style.setProperty("position", "static", "important");
      document.documentElement.style.setProperty("margin-top", "0px", "important");
    };

    forceHideGoogleUI();
    const observer = new MutationObserver(forceHideGoogleUI);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
      childList: true,
      subtree: true,
    });
    // Extra safety net for the first couple of seconds while Google's script boots up.
    const interval = window.setInterval(forceHideGoogleUI, 200);
    const stopInterval = window.setTimeout(() => window.clearInterval(interval), 4000);

    // --- Load Google's translate engine ---
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (!window.google) return;
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "ko",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      window.clearTimeout(stopInterval);
    };
  }, []);

  return <div id="google_translate_element" className="hidden" aria-hidden="true" />;
}
