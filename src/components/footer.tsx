import * as React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-8 text-sm text-textSecondary">
        <p>© {new Date().getFullYear()} Samuel</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
