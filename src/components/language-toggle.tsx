import * as React from "react";
import { useLanguage } from "./language-provider";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:opacity-80 ${
        language === "de"
          ? "border-white/20 bg-white/10 text-textPrimary hover:bg-white/20"
          : "border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
      aria-label={`Switch to ${language === "de" ? "English" : "German"}`}
    >
      <span className="text-sm font-semibold">
        {language === "de" ? "EN" : "DE"}
      </span>
    </button>
  );
}
