import * as React from "react";
import Lottie from "lottie-react";
import buildProduct from "@/assets/Build Product Colored.json";
import mockup from "@/assets/mockup.png";
import helpdesk_login_mobile from "@/assets/helpdesk_login_mobile.webp";
import helpdesk_login_pc from "@/assets/helpdesk_login_pc.webp";
import helpdesk_ticket_pc from "@/assets/helpdesk_ticket_pc.webp";
import helpdesk_ticket_mobile from "@/assets/helpdesk_ticket_mobile.webp";
import helpdesk_technicianportal_pc from "@/assets/helpdesk_technicianportal_pc.webp";
import helpdesk_technicianportal_mobile from "@/assets/helpdesk_technicianportal_mobile.webp";
import helpdesk_ai_chat_pc from "@/assets/helpdesk_ai_chat_pc.webp";
import helpdesk_ai_chat_mobile from "@/assets/helpdesk_ai_chat_mobile.webp";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ProjectDetail } from "./project-detail";

export function Projects() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectDetail | null>(null);

  // Theme-specific gradient colors
  const gradientColors =
    theme === "dark"
      ? "bg-[radial-gradient(120%_120%_at_10%_-10%,#6b375d_0%,#2b2e4a_50%,#1b1f2a_100%)]"
      : "bg-[radial-gradient(120%_120%_at_10%_-10%,#e8d5f0_0%,#f8f9fa_50%,#e0a846_100%)]";

  const handleProjectClick = (project: ProjectDetail) => {
    setSelectedProject(project);
    // Add to browser history so back button works
    window.history.pushState(
      { project: project.id },
      "",
      `#project-${project.id}`
    );
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    // Remove the project from browser history
    window.history.back();
  };

  // Handle browser back button
  React.useEffect(() => {
    const handlePopState = () => {
      setSelectedProject(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
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
                onClick={() => handleProjectClick(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseProject} />
      )}
    </>
  );
}

interface ProjectCardProps {
  project: ProjectDetail;
  index: number;
  theme: string;
  t: (key: string) => string;
  onClick: () => void;
}

function ProjectCard({ project, index, theme, t, onClick }: ProjectCardProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <article
      ref={elementRef}
      className={`grid items-center gap-6 md:grid-cols-2 transition-all duration-1000 cursor-pointer ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } ${
        "md:grid-cols-2 " +
        (index % 2 === 1 ? "" : "md:[&>div:first-child]:order-2")
      }`}
      onClick={onClick}
    >
      <div className="justify-self-center">
        <img
          src={project.mockup}
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
          {t(project.summaryKey)}
        </p>
      </header>
    </article>
  );
}

interface ProjectDetail {
  id: string;
  titleKey: string;
  summaryKey: string;
  descriptionKey: string;
  technologies: string[];
  mockup: string;
  images: string[];
  imageSections?: { title: string; description?: string; images: string[] }[];
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: ProjectDetail[] = [
  {
    id: "p1",
    titleKey: "projects.ai_helpdesk.title",
    summaryKey: "projects.ai_helpdesk.summary",
    descriptionKey: "projects.ai_helpdesk.description",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Python",
    ],
    mockup: helpdesk_login_mobile,
    images: [
      helpdesk_login_pc,
      helpdesk_login_mobile,
      helpdesk_ai_chat_pc,
      helpdesk_ai_chat_mobile,
      helpdesk_ticket_pc,
      helpdesk_ticket_mobile,
      helpdesk_technicianportal_pc,
      helpdesk_technicianportal_mobile,
    ],
    imageSections: [
      {
        title: "Login & Authentifizierung",
        description:
          "Sichere Anmeldung mit JWT-Token und Rollenverwaltung für Benutzer und Techniker",
        images: [helpdesk_login_pc, helpdesk_login_mobile],
      },
      {
        title: "KI-Chat & Support",
        description:
          "Intelligenter Chatbot mit LangChain-Integration für automatische Ticket-Erstellung und Support",
        images: [helpdesk_ai_chat_pc, helpdesk_ai_chat_mobile],
      },
      {
        title: "Ticket-Management",
        description:
          "Umfassendes Ticket-System mit Status-Tracking, Priorisierung und Kategorisierung",
        images: [helpdesk_ticket_pc, helpdesk_ticket_mobile],
      },
      {
        title: "Techniker-Portal",
        description:
          "Spezialisierte Oberfläche für Techniker mit erweiterten Funktionen und Ticket-Zuweisung",
        images: [
          helpdesk_technicianportal_pc,
          helpdesk_technicianportal_mobile,
        ],
      },
    ],
    githubUrl: "https://github.com/samueleras/ai-helpdesk-bachelors-project",
  },
  {
    id: "p2",
    titleKey: "projects.saas.title",
    summaryKey: "projects.saas.summary",
    descriptionKey: "projects.saas.description",
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
    mockup: mockup,
    images: [mockup, mockup],
    githubUrl: "https://github.com/samueleras/dreamcars",
    liveUrl: "https://dreamcars-demo.com",
  },
  {
    id: "p3",
    titleKey: "projects.marketing.title",
    summaryKey: "projects.marketing.summary",
    descriptionKey: "projects.marketing.description",
    technologies: ["Python", "NumPy", "Matplotlib", "Tkinter"],
    mockup: mockup,
    images: [mockup],
    githubUrl: "https://github.com/samueleras/tsp-solver",
  },
  {
    id: "p4",
    titleKey: "projects.portfolio.title",
    summaryKey: "projects.portfolio.summary",
    descriptionKey: "projects.portfolio.description",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    mockup: mockup,
    images: [mockup, mockup, mockup, mockup],
    githubUrl: "https://github.com/samueleras/digital-cookbook",
    liveUrl: "https://digital-cookbook-demo.com",
  },
];
