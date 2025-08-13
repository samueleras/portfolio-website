import * as React from "react";
// Using Lottie JSON animation for blogging illustration
import testingTechAnimation from "../assets/Testing Tech - Colour.json";
import Lottie from "lottie-react";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";

export function Skills() {
  const { theme } = useTheme();
  const { t } = useLanguage();

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
      className={`${theme === "dark" ? "bg-primary/10" : "bg-primary/5"}`}
    >
      <div className="container mx-auto grid items-center gap-10 px-4 py-12 md:grid-cols-2">
        {/* Left: minimal blogging SVG */}
        <div className="hidden justify-center md:flex">
          <Lottie
            animationData={testingTechAnimation}
            loop
            className="h-128 w-128 opacity-90"
          />
        </div>

        {/* Right: content indented to the right */}
        <div className="md:pl-16">
          <h2
            className={`text-2xl font-semibold ${
              theme === "dark" ? "text-textPrimary" : "text-gray-900"
            }`}
          >
            {t("skills.title")}
          </h2>

          {/* Frameworks */}
          <div className="mt-6">
            <h3
              className={`text-lg font-medium mb-3 ${
                theme === "dark" ? "text-textPrimary" : "text-gray-900"
              }`}
            >
              Frameworks
            </h3>
            <ul className="flex flex-wrap gap-3">
              {frameworks.map((skill) => (
                <li
                  key={skill}
                  className={`rounded-[8px] border px-3 py-2 text-sm ${
                    theme === "dark"
                      ? "border-white/40 text-textSecondary"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h3
              className={`text-lg font-medium mb-3 ${
                theme === "dark" ? "text-textPrimary" : "text-gray-900"
              }`}
            >
              Languages
            </h3>
            <ul className="flex flex-wrap gap-3">
              {languages.map((skill) => (
                <li
                  key={skill}
                  className={`rounded-[8px] border px-3 py-2 text-sm ${
                    theme === "dark"
                      ? "border-white/40 text-textSecondary"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Misc */}
          <div className="mt-6">
            <h3
              className={`text-lg font-medium mb-3 ${
                theme === "dark" ? "text-textPrimary" : "text-gray-900"
              }`}
            >
              Tools & Misc
            </h3>
            <ul className="flex flex-wrap gap-3">
              {misc.map((skill) => (
                <li
                  key={skill}
                  className={`rounded-[8px] border px-3 py-2 text-sm ${
                    theme === "dark"
                      ? "border-white/40 text-textSecondary"
                      : "border-gray-300 text-gray-600"
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
