import * as React from "react";
import Lottie from "lottie-react";
import buildProduct from "@/assets/Build Product Colored.json";
import mockup from "@/assets/mockup.png";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Projects() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();

  // Theme-specific gradient colors
  const gradientColors =
    theme === "dark"
      ? "bg-[radial-gradient(120%_120%_at_10%_-10%,#6b375d_0%,#2b2e4a_50%,#1b1f2a_100%)]"
      : "bg-[radial-gradient(120%_120%_at_10%_-10%,#e8d5f0_0%,#f8f9fa_50%,#e0a846_100%)]";

  return (
    <section
      id="projects"
      ref={elementRef}
      className={`min-h-[calc(100vh-4rem)] ${gradientColors} py-12`}
    >
      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] items-start gap-10 px-4">
        <div
          className={`flex items-center justify-between transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("projects.title")}
          </h2>
          <div className="hidden h-90 w-90 md:block">
            <Lottie animationData={buildProduct} loop className="h-90 w-90" />
          </div>
        </div>

        <div className="grid gap-20 mt-12">
          {PROJECTS.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={idx}
              theme={theme}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  theme: string;
  t: (key: string) => string;
}

function ProjectCard({ project, index, theme, t }: ProjectCardProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <article
      ref={elementRef}
      className={`grid items-center gap-6 md:grid-cols-2 transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : index % 2 === 0
          ? "opacity-0 -translate-x-20"
          : "opacity-0 translate-x-20"
      } ${
        "md:grid-cols-2 " +
        (index % 2 === 1 ? "" : "md:[&>div:first-child]:order-2")
      }`}
    >
      <div className="justify-self-center">
        <img
          src={mockup}
          alt={`${t(project.titleKey)} mockup`}
          className="w-[500px] max-w-full rounded-[10px] transition-transform duration-500 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <header className="justify-self-center text-center md:text-left mt-4">
        <h3
          className={`text-xl font-semibold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {t(project.titleKey)}
        </h3>
        <p
          className={theme === "dark" ? "text-textSecondary" : "text-gray-600"}
        >
          {t(project.descriptionKey)}
        </p>
      </header>
    </article>
  );
}

interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
}

const PROJECTS: Project[] = [
  {
    id: "p1",
    titleKey: "projects.ecommerce.title",
    descriptionKey: "projects.ecommerce.description",
  },
  {
    id: "p2",
    titleKey: "projects.saas.title",
    descriptionKey: "projects.saas.description",
  },
  {
    id: "p3",
    titleKey: "projects.marketing.title",
    descriptionKey: "projects.marketing.description",
  },
  {
    id: "p4",
    titleKey: "projects.portfolio.title",
    descriptionKey: "projects.portfolio.description",
  },
];
