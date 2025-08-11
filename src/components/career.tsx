import * as React from "react";
import Lottie from "lottie-react";
import growthAnimation from "@/assets/growth.json";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";

export function Career() {
  const { theme } = useTheme();
  const { t } = useLanguage();

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
                {t("career.experience.title")}
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
                      {t(item.roleKey)} – {t(item.orgKey)}
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
                {t("career.education.title")}
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
                      {t(item.degreeKey)} – {t(item.orgKey)}
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
  orgKey: string;
  roleKey: string;
}

const CAREER: CareerItem[] = [
  {
    when: "2024 – heute",
    orgKey: "career.freelance.org",
    roleKey: "career.freelance.role",
  },
  {
    when: "2022 – 2024",
    orgKey: "career.tech.org",
    roleKey: "career.tech.role",
  },
  {
    when: "2020 – 2022",
    orgKey: "career.startup.org",
    roleKey: "career.startup.role",
  },
];

interface EducationItem {
  when: string;
  orgKey: string;
  degreeKey: string;
}

const EDUCATION: EducationItem[] = [
  {
    when: "2018 – 2020",
    orgKey: "career.master.org",
    degreeKey: "career.master.degree",
  },
  {
    when: "2015 – 2018",
    orgKey: "career.bachelor.org",
    degreeKey: "career.bachelor.degree",
  },
];
