import * as React from "react";
// Using Lottie JSON animation for blogging illustration
import testingTechAnimation from "../assets/Testing Tech - Colour.json";
import Lottie from "lottie-react";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Skills() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();

  const frameworks = [
    "React",
    "Express.js",
    "FastAPI",
    "LangChain / LangGraph",
  ];

  const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "SQL",
  ];

  const misc = ["Git", "Docker"];

  return (
    <section
      id="skills"
      ref={elementRef}
      className={`${theme === "dark" ? "bg-primary/10" : "bg-primary/5"}`}
    >
      <div className="container mx-auto grid items-center gap-10 px-4 py-12 md:grid-cols-2">
        {/* Left: minimal blogging SVG */}
        <div
          className={`hidden justify-center md:flex transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Lottie
            animationData={testingTechAnimation}
            loop
            className="h-128 w-128 opacity-90"
          />
        </div>

        {/* Right: content indented to the right */}
        <div
          className={`md:pl-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              theme === "dark" ? "text-textPrimary" : "text-gray-900"
            }`}
          >
            {t("skills.title")}
          </h2>

          {/* Frameworks */}
          <div
            className={`mt-6 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3
              className={`text-lg font-medium mb-3 ${
                theme === "dark" ? "text-textPrimary" : "text-gray-900"
              }`}
            >
              Frameworks
            </h3>
            <ul className="flex flex-wrap gap-3">
              {frameworks.map((skill, index) => (
                <li
                  key={skill}
                  className={`rounded-[8px] border px-3 py-2 text-sm transition-all duration-500 delay-${
                    600 + index * 100
                  } ${
                    theme === "dark"
                      ? "border-white/40 text-textSecondary"
                      : "border-gray-300 text-gray-600"
                  } ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div
            className={`mt-6 transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3
              className={`text-lg font-medium mb-3 ${
                theme === "dark" ? "text-textPrimary" : "text-gray-900"
              }`}
            >
              Languages
            </h3>
            <ul className="flex flex-wrap gap-3">
              {languages.map((skill, index) => (
                <li
                  key={skill}
                  className={`rounded-[8px] border px-3 py-2 text-sm transition-all duration-500 delay-${
                    800 + index * 100
                  } ${
                    theme === "dark"
                      ? "border-white/40 text-textSecondary"
                      : "border-gray-300 text-gray-600"
                  } ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Misc */}
          <div
            className={`mt-6 transition-all duration-700 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3
              className={`text-lg font-medium mb-3 ${
                theme === "dark" ? "text-textPrimary" : "text-gray-900"
              }`}
            >
              Tools & Misc
            </h3>
            <ul className="flex flex-wrap gap-3">
              {misc.map((skill, index) => (
                <li
                  key={skill}
                  className={`rounded-[8px] border px-3 py-2 text-sm transition-all duration-500 delay-${
                    1000 + index * 100
                  } ${
                    theme === "dark"
                      ? "border-white/40 text-textSecondary"
                      : "border-gray-300 text-gray-600"
                  } ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
