import * as React from "react";
import me from "../assets/me.png";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-white">
      {/* Left diagonal colored panel - only on lg+ */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div
          className="h-full w-[62%] bg-[radial-gradient(130%_140%_at_10%_125%,#6b375d_0%,#2b2e4a_50%,#1b1f2a_100%)]"
          style={{ clipPath: "polygon(0 0, 86% 0, 70% 100%, 0% 100%)" }}
        />
        {/* Right subtle white gradient */}
      </div>

      {/* Mobile layout */}
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 px-4 lg:hidden bg-[radial-gradient(130%_140%_at_10%_125%,#6b375d_0%,#2b2e4a_50%,#1b1f2a_100%)]">
        {/* Circular portrait image */}
        <div className="flex justify-center">
          <div className="aspect-square w-48 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl">
            <img
              src={me}
              alt="Samuel portrait"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="grid gap-4 text-center">
          <p className="text-lg text-white/80">Hi, I am</p>
          <h1 className="text-4xl font-extrabold leading-[1.1]">Samuel</h1>
          <p className="max-w-xl text-white/80">
            Front-end Developer / UI Designer
          </p>
          <div className="mt-2 flex gap-4 justify-center">
            <a href="#projects" className="btn-primary">
              Projekte ansehen
            </a>
            <a href="#contact" className="btn-primary">
              Kontakt
            </a>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="container relative mx-auto hidden min-h-[calc(100vh-4rem)] items-center gap-10 px-4 lg:grid lg:grid-cols-2">
        {/* Left copy */}
        <div className="z-10 grid gap-4 text-white">
          <p className="text-lg">Hi, I am</p>
          <h1 className="text-4xl font-extrabold leading-[1.1] md:text-6xl lg:text-7xl">
            Samuel
          </h1>
          <p className="max-w-xl text-white/80">
            Front-end Developer / UI Designer
          </p>
          <div className="mt-2 flex gap-4">
            <a href="#projects" className="btn-primary">
              Projekte ansehen
            </a>
            <a href="#contact" className="btn-primary">
              Kontakt
            </a>
          </div>
        </div>

        {/* Right: large portrait without circular frame */}
        <div className="z-0 flex items-end justify-center md:justify-end">
          <img
            src={me}
            alt="Samuel portrait"
            className="max-h-[100vh] w-auto select-none object-contain drop-shadow-xl"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
