import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";

export function Header() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b backdrop-blur ${
        theme === "dark"
          ? "border-white/10 bg-secondary/70"
          : "border-gray-200/50 bg-white/70"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a
          href="#"
          className={`text-base font-semibold ${
            theme === "dark" ? "text-textPrimary" : "text-gray-900"
          }`}
        >
          Samuel
        </a>
        <nav
          className={`flex items-center gap-6 text-sm ${
            theme === "dark" ? "text-textSecondary" : "text-gray-600"
          }`}
        >
          <a href="#skills">{t("nav.skills")}</a>
          <a href="#projects">{t("nav.projects")}</a>
          <a href="#career">{t("nav.career")}</a>
          <a href="#contact">{t("nav.contact")}</a>
          <LanguageToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
