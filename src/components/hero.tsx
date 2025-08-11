import * as React from "react";
import me from "../assets/me.webp";
import deskLamp from "@/assets/lampe.png";
import deskLampAus from "@/assets/lampeAus.png";
import lightBeam from "@/assets/light-beam.svg";
import { useTheme } from "./theme-provider";

export function Hero() {
  const [isLampOn, setIsLampOn] = React.useState(true);
  const { theme } = useTheme();

  const toggleLamp = () => {
    setIsLampOn(!isLampOn);
  };

  // Theme-specific gradient colors
  const gradientColors =
    theme === "dark"
      ? "bg-[radial-gradient(130%_140%_at_10%_125%,#6b375d_0%,#2b2e4a_50%,#1b1f2a_100%)]"
      : "bg-[radial-gradient(130%_140%_at_10%_125%,#e8d5f0_0%,#f8f9fa_50%,#ffffff_100%)]";

  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-white">
      {/* Mobile layout */}
      <div
        className={`relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 px-4 xl:hidden ${gradientColors}`}
      >
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
          <p
            className={`text-lg ${
              theme === "dark" ? "text-white/80" : "text-gray-700/80"
            }`}
          >
            Hi, I am
          </p>
          <h1
            className={`text-4xl font-extrabold leading-[1.1] ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Samuel
          </h1>
          <p
            className={`max-w-xl ${
              theme === "dark" ? "text-white/80" : "text-gray-700/80"
            }`}
          >
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
      <div
        className={`relative hidden min-h-[calc(100vh-4rem)] px-4 xl:flex ${gradientColors}`}
      >
        {/* Desk lamp - positioned to maintain visual balance */}
        <div className="absolute right-64 bottom-0 overflow-visible">
          <img
            src={isLampOn ? deskLamp : deskLampAus}
            alt="Desk lamp"
            className="drop-shadow-lg cursor-pointer transition-opacity hover:opacity-80"
            style={{
              height: "120vh",
              width: "auto",
              objectFit: "contain",
              maxWidth: "none",
            }}
            onClick={toggleLamp}
          />
        </div>

        {/* Content box - horizontally centered */}
        <div className="flex gap-10 relative ml-10">
          <div className="flex items-center justify-center gap-10">
            {/* Left: circular portrait image */}
            <div className="flex justify-center">
              <div className="aspect-square w-64 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl">
                <img
                  src={me}
                  alt="Samuel portrait"
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
            {/* Right: text content */}
            <div
              className={`grid gap-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                Hi, I am
              </p>
              <h1
                className={`text-4xl font-extrabold leading-[1.1] md:text-6xl lg:text-7xl ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Samuel
              </h1>
              <p
                className={`max-w-xl ${
                  theme === "dark" ? "text-white/80" : "text-gray-700/80"
                }`}
              >
                Front-end Developer / UI Designer
              </p>
              <div className="mt-2 flex gap-4">
                <a href="#projects" className="btn-primary whitespace-nowrap">
                  Projekte ansehen
                </a>
                <a href="#contact" className="btn-primary whitespace-nowrap">
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
