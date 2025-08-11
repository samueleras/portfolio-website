import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";

export function Header() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b backdrop-blur ${
        theme === "dark"
          ? "border-white/10 bg-secondary/70"
          : "border-gray-200/50 bg-white/70"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left: Logo */}
        <a
          href="#"
          className={`text-base font-semibold ${
            theme === "dark" ? "text-textPrimary" : "text-gray-900"
          }`}
        >
          Samuel
        </a>

        {/* Right: Desktop Navigation + Toggles */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav
            className={`hidden sm:flex items-center gap-6 text-sm ${
              theme === "dark" ? "text-textSecondary" : "text-gray-600"
            }`}
          >
            <a href="#skills">{t("nav.skills")}</a>
            <a href="#projects">{t("nav.projects")}</a>
            <a href="#career">{t("nav.career")}</a>
            <a href="#contact">{t("nav.contact")}</a>
          </nav>

          {/* Toggles (always visible) */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Menu */}
          <HamburgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>
      </div>
    </header>
  );
}

// Hamburger Menu Component
interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

function HamburgerMenu({ isOpen, onToggle }: HamburgerMenuProps) {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Close menu when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onToggle();
    }
  };

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onToggle]);

  return (
    <div className="sm:hidden">
      {/* Hamburger Button */}
      <button
        onClick={onToggle}
        className={`flex h-8 w-8 items-center justify-center rounded-md border transition-colors ${
          theme === "dark"
            ? "border-white/20 bg-white/10 text-textPrimary hover:bg-white/20"
            : "border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        aria-label="Toggle navigation menu"
      >
        <div className="relative h-5 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 transform transition-all duration-300 ${
              theme === "dark" ? "bg-white" : "bg-gray-700"
            } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`absolute left-0 top-2 h-0.5 w-5 transform transition-all duration-300 ${
              theme === "dark" ? "bg-white" : "bg-gray-700"
            } ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute left-0 top-4 h-0.5 w-5 transform transition-all duration-300 ${
              theme === "dark" ? "bg-white" : "bg-gray-700"
            } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={`absolute right-0 top-16 h-screen w-64 border-l p-4 shadow-lg transition-transform duration-300 ${
            theme === "dark"
              ? "border-white/10 bg-secondary backdrop-blur"
              : "border-gray-200/50 bg-white backdrop-blur"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 mt-10 items-center">
            <a
              href="#skills"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                theme === "dark" ? "text-textSecondary" : "text-gray-600"
              }`}
              onClick={onToggle}
            >
              {t("nav.skills")}
            </a>
            <a
              href="#projects"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                theme === "dark" ? "text-textSecondary" : "text-gray-600"
              }`}
              onClick={onToggle}
            >
              {t("nav.projects")}
            </a>
            <a
              href="#career"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                theme === "dark" ? "text-textSecondary" : "text-gray-600"
              }`}
              onClick={onToggle}
            >
              {t("nav.career")}
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                theme === "dark" ? "text-textSecondary" : "text-gray-600"
              }`}
              onClick={onToggle}
            >
              {t("nav.contact")}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
