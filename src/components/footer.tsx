import * as React from "react";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="flex items-center justify-between text-sm text-textSecondary mb-6">
          <p>© {new Date().getFullYear()} Samuel Eras</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/samueleras"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.xing.com/profile/Samuel_Eras/"
              target="_blank"
              rel="noreferrer"
            >
              Xing
            </a>
          </div>
        </div>

        {/* Impressum */}
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-sm font-semibold text-textSecondary mb-4">
            Impressum
          </h3>
          <div className="text-xs text-textSecondary space-y-2">
            <p>Angaben gemäß § 5 DDG</p>
            <div className="space-y-1">
              <p className="font-medium">Samuel Eras</p>
              <p>Ahamstraße 21</p>
              <p>85570 Ottenhofen</p>
            </div>
            <div className="space-y-1">
              <p>Kontakt:</p>
              <p>Telefon: 0176-95277445</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:sa.eras@gmx.de" className="hover:underline">
                  sa.eras@gmx.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
