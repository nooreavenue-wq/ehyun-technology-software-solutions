"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { getCurrentLang, setLang, SiteLang } from "@/lib/language";

export default function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const [lang, setLangState] = useState<SiteLang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLangState(getCurrentLang());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSwitch = (next: SiteLang) => {
    if (next === lang) return;
    setLang(next);
  };

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2 notranslate" translate="no">
        <Languages size={15} className="text-paper/40" />
        {(["en", "ko"] as SiteLang[]).map((l) => (
          <button
            key={l}
            onClick={() => handleSwitch(l)}
            className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
              lang === l ? "border-signal text-signal-light bg-signal/10" : "border-ink-line text-paper/50"
            }`}
          >
            {l === "en" ? "English" : "한국어"}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 border border-ink-line notranslate" translate="no">
      {(["en", "ko"] as SiteLang[]).map((l) => (
        <button
          key={l}
          onClick={() => handleSwitch(l)}
          className={`px-2.5 py-1.5 text-[11px] font-semibold tracking-wide transition-colors ${
            lang === l ? "bg-[#000030] text-white" : "text-paper/50 hover:text-paper"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
