import * as React from "react";

type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined
);

// Translation dictionary
const translations = {
  de: {
    // Navigation
    "nav.skills": "Skills",
    "nav.projects": "Projekte",
    "nav.career": "Werdegang",
    "nav.contact": "Kontakt",

    // Hero section
    "hero.greeting": "Hi, I am",
    "hero.title": "Samuel",
    "hero.subtitle": "Full-Stack Developer",
    "hero.projectsButton": "Projekte ansehen",
    "hero.contactButton": "Kontakt",

    // Skills section
    "skills.title": "Skills",

    // Projects section
    "projects.title": "Projekte",
    "projects.ecommerce.title": "E‑Commerce Storefront",
    "projects.ecommerce.description":
      "Responsive Storefront mit Produktliste, Filtern und Warenkorb.",
    "projects.saas.title": "SaaS Dashboard",
    "projects.saas.description":
      "Analytics-Dashboard mit Diagrammen, Filtern und Einstellungen.",
    "projects.marketing.title": "Marketing Site",
    "projects.marketing.description":
      "SEO-freundliche Landingpages mit Blog und Kontaktformular.",
    "projects.portfolio.title": "Portfolio Microsite",
    "projects.portfolio.description":
      "Kleine, performante Microsite mit Fokus auf Typografie.",

    // Career section
    "career.experience.title": "Berufserfahrung",
    "career.education.title": "Bildungsweg",
    "career.systemadmin.role": "System Administrator",
    "career.systemadmin.org": "iinovis GmbH & Co. KG",
    "career.ausbildung.role":
      "Ausbildung zum Fachinformatiker für Systemintegration",
    "career.ausbildung.org": "KPMG IT-Service GmbH",
    "career.bsc.degree": "B.Sc. (Hons) Computer Science",
    "career.bsc.org": "Wrexham University",
    "career.techniker.degree":
      "Staatlich geprüfter Informatiktechniker & Fachhochschulreife",
    "career.techniker.org": "Technikerschule München",
    "career.fachinformatiker.degree": "Fachinformatiker für Systemintegration",
    "career.fachinformatiker.org":
      "Städtische Berufsschule für Informationstechnik München",

    // Contact section
    "contact.title": "Kontakt",
    "contact.description": "Schreib mir gern an",
  },
  en: {
    // Navigation
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.career": "Career",
    "nav.contact": "Contact",

    // Hero section
    "hero.greeting": "Hi, I am",
    "hero.title": "Samuel",
    "hero.subtitle": "Full-Stack Developer",
    "hero.projectsButton": "View Projects",
    "hero.contactButton": "Contact",

    // Skills section
    "skills.title": "Skills",

    // Projects section
    "projects.title": "Projects",
    "projects.ecommerce.title": "E‑Commerce Storefront",
    "projects.ecommerce.description":
      "Responsive storefront with product listing, filters and shopping cart.",
    "projects.saas.title": "SaaS Dashboard",
    "projects.saas.description":
      "Analytics dashboard with charts, filters and settings.",
    "projects.marketing.title": "Marketing Site",
    "projects.marketing.description":
      "SEO-friendly landing pages with blog and contact form.",
    "projects.portfolio.title": "Portfolio Microsite",
    "projects.portfolio.description":
      "Small, performant microsite with focus on typography.",

    // Career section
    "career.experience.title": "Work Experience",
    "career.education.title": "Education",
    "career.systemadmin.role": "System Administrator",
    "career.systemadmin.org": "iinovis GmbH & Co. KG",
    "career.ausbildung.role": "IT Specialist Training for System Integration",
    "career.ausbildung.org": "KPMG IT-Service GmbH",
    "career.bsc.degree": "B.Sc. (Hons) Computer Science",
    "career.bsc.org": "Wrexham University",
    "career.techniker.degree":
      "State-Certified IT Technician & Technical College Entrance Qualification",
    "career.techniker.org": "Technikerschule München",
    "career.fachinformatiker.degree": "IT Specialist for System Integration",
    "career.fachinformatiker.org":
      "Städtische Berufsschule für Informationstechnik München",

    // Contact section
    "contact.title": "Contact",
    "contact.description": "Feel free to write me at",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>(() => {
    // Check localStorage first, then default to German
    const saved = localStorage.getItem("language") as Language;
    return saved || "de";
  });

  React.useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
