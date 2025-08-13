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
    "projects.ecommerce.title": "AI-Integrated Helpdesk",
    "projects.ecommerce.summary":
      "Web-App zur automatisierten Problemlösung oder Ticketgenerierung für höhere Helpdesk-Effizienz.",
    "projects.ecommerce.description":
      "Ein fortschrittliches Helpdesk-System, das künstliche Intelligenz nutzt, um Support-Anfragen automatisch zu bearbeiten. Die Anwendung kann einfache Probleme selbstständig lösen oder bei komplexeren Fällen automatisch Tickets erstellen. Das System integriert sich nahtlos in bestehende Helpdesk-Workflows und verbessert die Effizienz erheblich.",
    "projects.saas.title": "DreamCars - Car Shop",
    "projects.saas.summary":
      "Responsive Auto-Shop-Plattform mit modernem UI und umfangreichen Filter- und Suchfunktionen.",
    "projects.saas.description":
      "Eine moderne E-Commerce-Plattform für Automobile mit responsivem Design und umfangreichen Filtermöglichkeiten. Benutzer können nach Marke, Modell, Preis und anderen Kriterien suchen. Die Plattform bietet eine intuitive Benutzeroberfläche mit detaillierten Produktbeschreibungen und Bildergalerien.",
    "projects.marketing.title": "Traveling Salesman Problem Solver",
    "projects.marketing.summary":
      "Anwendung zur Lösung des Traveling-Salesperson-Problems mittels Christofides Algorithmus.",
    "projects.marketing.description":
      "Eine Python-Anwendung, die den Christofides-Algorithmus implementiert, um das klassische Traveling Salesman Problem zu lösen. Der Algorithmus findet eine optimale Route für einen Verkäufer, der alle Städte genau einmal besuchen und zum Ausgangspunkt zurückkehren muss. Die Anwendung visualisiert die Ergebnisse und bietet verschiedene Eingabeformate.",
    "projects.portfolio.title": "Digital Cookbook",
    "projects.portfolio.summary":
      "Web-App zum Erstellen, Speichern und Bewerten eigener Rezepte sowie zum Suchen nach Rezepten anderer.",
    "projects.portfolio.description":
      "Eine interaktive Web-Anwendung, die es Benutzern ermöglicht, ihre eigenen Rezepte zu erstellen, zu speichern und zu bewerten. Das System bietet eine umfangreiche Suchfunktion, um Rezepte anderer Benutzer zu finden. Benutzer können Rezepte nach Zutaten, Schwierigkeitsgrad und Bewertungen filtern.",

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
    "contact.description": "Für Anfragen erreichen Sie mich unter",
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
    "projects.ecommerce.title": "AI-Integrated Helpdesk",
    "projects.ecommerce.summary":
      "Web app for automated problem solving or ticket generation to improve helpdesk efficiency.",
    "projects.ecommerce.description":
      "An advanced helpdesk system that uses artificial intelligence to automatically process support requests. The application can solve simple problems independently or automatically create tickets for more complex cases. The system seamlessly integrates into existing helpdesk workflows and significantly improves efficiency.",
    "projects.saas.title": "DreamCars - Car Shop",
    "projects.saas.summary":
      "Responsive car shop platform with modern UI and extensive filter and search functions.",
    "projects.saas.description":
      "A modern E-Commerce platform for automobiles with responsive design and extensive filtering options. Users can search by brand, model, price, and other criteria. The platform offers an intuitive user interface with detailed product descriptions and image galleries.",
    "projects.marketing.title": "Traveling Salesman Problem Solver",
    "projects.marketing.summary":
      "Application for solving the Traveling Salesperson Problem using the Christofides algorithm.",
    "projects.marketing.description":
      "A Python application that implements the Christofides algorithm to solve the classic Traveling Salesman Problem. The algorithm finds an optimal route for a salesman who must visit all cities exactly once and return to the starting point. The application visualizes the results and offers different input formats.",
    "projects.portfolio.title": "Digital Cookbook",
    "projects.portfolio.summary":
      "Web app for creating, storing, and rating your own recipes, as well as searching for recipes from others.",
    "projects.portfolio.description":
      "An interactive web application that allows users to create, store, and rate their own recipes, as well as search for recipes from other users. The system offers a comprehensive search function to find recipes from other users. Users can filter recipes by ingredients, difficulty, and ratings.",

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
    "contact.description": "Feel free to contact me at",
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
