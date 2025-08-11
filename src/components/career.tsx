import * as React from "react";
import Lottie from "lottie-react";
import growthAnimation from "@/assets/growth.json";
import { useTheme } from "./theme-provider";

export function Career() {
  const { theme } = useTheme();

  return (
    <>
      <section id="career" className="bg-secondary">
        <div className="container mx-auto grid items-center gap-10 px-4 py-12 lg:grid-cols-2">
          {/* Left: content indented */}
          <div>
            <div className="md:pl-16">
              <h2
                className={`text-2xl font-semibold ${
                  theme === "dark" ? "text-textPrimary" : "text-gray-900"
                }`}
              >
                Berufserfahrung
              </h2>
              <ul className="mt-4 grid gap-4">
                {CAREER.map((item) => (
                  <li
                    key={item.when}
                    className={`rounded-[10px] border p-4 ${
                      theme === "dark"
                        ? "border-white/15"
                        : "border-gray-200 bg-white/50"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        theme === "dark"
                          ? "text-textSecondary"
                          : "text-gray-600"
                      }`}
                    >
                      {item.when}
                    </p>
                    <p
                      className={`font-semibold ${
                        theme === "dark" ? "text-textPrimary" : "text-gray-900"
                      }`}
                    >
                      {item.role} – {item.org}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-16 mt-8">
              <h2
                className={`text-2xl font-semibold ${
                  theme === "dark" ? "text-textPrimary" : "text-gray-900"
                }`}
              >
                Bildungsweg
              </h2>
              <ul className="mt-4 grid gap-4">
                {EDUCATION.map((item) => (
                  <li
                    key={item.when}
                    className={`rounded-[10px] border p-4 ${
                      theme === "dark"
                        ? "border-white/15"
                        : "border-gray-200 bg-white/50"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        theme === "dark"
                          ? "text-textSecondary"
                          : "text-gray-600"
                      }`}
                    >
                      {item.when}
                    </p>
                    <p
                      className={`font-semibold ${
                        theme === "dark" ? "text-textPrimary" : "text-gray-900"
                      }`}
                    >
                      {item.degree} – {item.org}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right: JSON animation */}
          <div className="hidden justify-center lg:flex">
            <Lottie
              animationData={growthAnimation}
              loop
              className="h-128 w-128"
            />
          </div>
        </div>
      </section>
    </>
  );
}

interface CareerItem {
  when: string;
  org: string;
  role: string;
}
const CAREER: CareerItem[] = [
  { when: "2024 – heute", org: "Freelance", role: "Webentwickler" },
  { when: "2022 – 2024", org: "Tech Co.", role: "Frontend Developer" },
  { when: "2020 – 2022", org: "Startup", role: "Junior Developer" },
];

interface EducationItem {
  when: string;
  org: string;
  degree: string;
}
const EDUCATION: EducationItem[] = [
  { when: "2018 – 2020", org: "FH Musterstadt", degree: "M.Sc. Informatik" },
  {
    when: "2015 – 2018",
    org: "Uni Beispiel",
    degree: "B.Sc. Medieninformatik",
  },
];
