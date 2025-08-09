import * as React from "react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-8 px-4 md:grid-cols-2">
        <div className="grid gap-4">
          <h1
            className="text-4xl font-bold md:text-5xl"
            style={{ color: "#F4E1F7" }}
          >
            Webentwickler
          </h1>
          <p className="max-w-xl text-textSecondary">
            Ich baue moderne, schnelle und zugängliche Web‑Erlebnisse mit React,
            TypeScript und einer sauberen Architektur.
          </p>
          <div className="flex gap-3">
            <a className="btn-primary" href="#projects">
              Projekte ansehen
            </a>
            <a className="btn-primary" href="#contact">
              Kontakt
            </a>
          </div>
        </div>
        <div
          className="rounded-[10px] border border-white/30 bg-gradient-to-br from-secondary to-primary p-8"
          aria-hidden
        >
          <div className="aspect-video rounded-[10px] border border-white/60" />
        </div>
      </div>
    </section>
  );
}
