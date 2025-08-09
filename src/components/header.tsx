import * as React from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-secondary/70 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="text-base font-semibold">
          Samuel
        </a>
        <nav className="flex items-center gap-6 text-sm text-textSecondary">
          <a href="#skills">Skills</a>
          <a href="#projects">Projekte</a>
          <a href="#career">Werdegang</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
