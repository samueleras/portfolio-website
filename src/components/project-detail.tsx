import * as React from "react";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ProjectDetailProps {
  project: ProjectDetail;
  onClose: () => void;
}

interface ProjectDetail {
  id: string;
  titleKey: string;
  summaryKey: string;
  descriptionKey: string;
  technologies: string[];
  images: string[];
  imageSections?: {
    titleKey: string;
    descriptionKey?: string;
    images: string[];
  }[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  // Theme-specific gradient colors
  const gradientColors =
    theme === "dark"
      ? "bg-[radial-gradient(120%_120%_at_10%_-10%,#6b375d_0%,#2b2e4a_50%,#1b1f2a_100%)]"
      : "bg-[radial-gradient(120%_120%_at_10%_-10%,#e8d5f0_0%,#f8f9fa_50%,#e0a846_100%)]";

  const handleImageClick = (image: string) => {
    // Only open fullscreen on md screens and larger
    if (window.innerWidth >= 768) {
      setSelectedImage(image);
    }
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative min-h-screen">
        <div className={`min-h-screen ${gradientColors} py-8`}>
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={onClose}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {t("projectDetail.back")}
              </button>
            </div>

            {/* Project Content */}
            <div ref={elementRef} className="container mx-auto">
              {/* Title */}
              <div
                className={`mb-8 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                }`}
              >
                <h1
                  className={`text-4xl md:text-5xl font-bold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t(project.titleKey)}
                </h1>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-textSecondary" : "text-gray-600"
                  }`}
                >
                  {t(project.summaryKey)}
                </p>
              </div>

              {/* Technologies */}
              <div
                className={`mb-8 transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                }`}
              >
                <h2
                  className={`text-xl font-semibold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t("projectDetail.technologies")}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className={`rounded-lg px-3 py-2 text-sm transition-all duration-500 delay-${
                        300 + index * 100
                      } ${
                        theme === "dark"
                          ? "bg-white/10 text-textSecondary border border-white/20"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      } ${
                        isVisible
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-75"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Long Description */}
              <div
                className={`mb-8 transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                }`}
              >
                <h2
                  className={`text-xl font-semibold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t("projectDetail.description")}
                </h2>
                <div
                  className={`prose prose-lg max-w-none ${
                    theme === "dark" ? "prose-invert" : ""
                  }`}
                >
                  <p
                    className={`leading-relaxed ${
                      theme === "dark" ? "text-textSecondary" : "text-gray-600"
                    }`}
                  >
                    {t(project.descriptionKey)}
                  </p>
                </div>
              </div>

              {/* Links */}
              {(project.githubUrl || project.liveUrl) && (
                <div
                  className={`mb-8 transition-all duration-1000 delay-600 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-10"
                  }`}
                >
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 transition-colors ${
                          theme === "dark"
                            ? "bg-white/10 text-white hover:bg-white/20"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {t("projectDetail.github")}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 transition-colors ${
                          theme === "dark"
                            ? "bg-primary text-white hover:bg-primary/80"
                            : "bg-primary text-white hover:bg-primary/80"
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        {t("projectDetail.liveDemo")}
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Image Gallery */}
              {project.images.length > 0 && (
                <div
                  className={`transition-all duration-1000 delay-800 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-10"
                  }`}
                >
                  <h2
                    className={`text-xl font-semibold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("projectDetail.gallery")}
                  </h2>

                  {/* Use custom sections if available, otherwise fallback to auto-grouping */}
                  {project.imageSections
                    ? // Custom sections
                      project.imageSections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          {/* Section Title */}
                          <h3
                            className={`text-lg font-medium mb-2 ${
                              theme === "dark"
                                ? "text-textSecondary"
                                : "text-gray-600"
                            }`}
                          >
                            {t(section.titleKey)}
                          </h3>

                          {/* Section Description */}
                          {section.descriptionKey && (
                            <p
                              className={`text-sm mb-4 ${
                                theme === "dark"
                                  ? "text-textSecondary/80"
                                  : "text-gray-500"
                              }`}
                            >
                              {t(section.descriptionKey)}
                            </p>
                          )}

                          {/* Image Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {section.images.map((image, imageIndex) => (
                              <div
                                key={imageIndex}
                                className={`rounded-lg transition-all duration-500 delay-${
                                  900 + (sectionIndex * 10 + imageIndex) * 100
                                } ${
                                  isVisible
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-75"
                                }`}
                              >
                                <img
                                  src={image}
                                  alt={`${t(project.titleKey)} ${t(
                                    section.titleKey
                                  )} ${imageIndex + 1}`}
                                  className="w-full h-96 xl:h-[28rem] 2xl:h-[32rem] object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  loading="lazy"
                                  onClick={() => handleImageClick(image)}
                                />
                              </div>
                            ))}
                          </div>

                          {/* Divider (except after last section) */}
                          {sectionIndex <
                            (project.imageSections?.length || 0) - 1 && (
                            <div
                              className={`h-px mb-8 ${
                                theme === "dark" ? "bg-white/20" : "bg-gray-300"
                              }`}
                            />
                          )}
                        </div>
                      ))
                    : // Fallback: Auto-group images in pairs
                      Array.from(
                        { length: Math.ceil(project.images.length / 2) },
                        (_, sectionIndex) => (
                          <div key={sectionIndex}>
                            {/* Section Title */}
                            <h3
                              className={`text-lg font-medium mb-4 ${
                                theme === "dark"
                                  ? "text-textSecondary"
                                  : "text-gray-600"
                              }`}
                            >
                              {sectionIndex === 0
                                ? "Hauptansichten"
                                : `Ansicht ${sectionIndex + 1}`}
                            </h3>

                            {/* Image Pair */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                              {project.images
                                .slice(sectionIndex * 2, sectionIndex * 2 + 2)
                                .map((image, imageIndex) => (
                                  <div
                                    key={sectionIndex * 2 + imageIndex}
                                    className={`rounded-lg transition-all duration-500 delay-${
                                      900 +
                                      (sectionIndex * 2 + imageIndex) * 100
                                    } ${
                                      isVisible
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-75"
                                    }`}
                                  >
                                    <img
                                      src={image}
                                      alt={`${t(project.titleKey)} screenshot ${
                                        sectionIndex * 2 + imageIndex + 1
                                      }`}
                                      className="w-full h-96 xl:h-[28rem] 2xl:h-[32rem] object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                                      loading="lazy"
                                      onClick={() => handleImageClick(image)}
                                    />
                                  </div>
                                ))}
                            </div>

                            {/* Divider (except after last section) */}
                            {sectionIndex <
                              Math.ceil(project.images.length / 2) - 1 && (
                              <div
                                className={`h-px mb-8 ${
                                  theme === "dark"
                                    ? "bg-white/20"
                                    : "bg-gray-300"
                                }`}
                              />
                            )}
                          </div>
                        )
                      )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90">
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <button
              onClick={closeFullscreen}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen view"
              className="h-[80vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
