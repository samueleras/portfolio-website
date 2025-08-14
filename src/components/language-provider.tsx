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
    "projects.ai_helpdesk.title": "AI-Integrated Helpdesk",
    "projects.ai_helpdesk.summary":
      "Web-App zur automatisierten Problemlösung oder Ticketgenerierung für höhere Helpdesk-Effizienz.",
    "projects.ai_helpdesk.description":
      "Dieses Bachelorprojekt beschreibt die Entwicklung einer KI-integrierten IT-Helpdesk-Webanwendung, die ein Large Language Model (LLM) und Retrieval Augmented Generation (RAG) innerhalb eines LLM-gesteuerten Workflows nutzt. Ziel war es, gängige Ineffizienzen traditioneller Helpdesk-Systeme zu beheben, wie etwa den zeitaufwendigen Umgang mit wiederkehrenden Problemen und den Mangel an Details in von Nutzern erstellten Tickets. Basierend auf einer umfassenden Literaturrecherche untersucht das Projekt, wie die Integration von KI-Automatisierungen die Effizienz eines Helpdesks steigern kann. Es wurde ein forschungsbasiertes Anwendungsdesign entwickelt und implementiert, welches ein LLM einsetzt, um die Arbeitslast zu reduzieren, die Ticketqualität zu verbessern und letztlich die Betriebskosten zu senken. Die Anwendung wurde nach einer hybriden Projektmanagementmethodik entwickelt, die Elemente aus Wasserfall und Agile kombiniert, um einen strukturierten Ansatz mit iterativem Testen und adaptiver Priorisierung zu ermöglichen. Das KI-System wurde mit den Python-Frameworks LangChain und LangGraph entwickelt, um einen benutzerdefinierten, zustandsbasierten Workflow zu erstellen, der ein lokal bereitgestelltes LLM nutzt und so dynamische Entscheidungsfindung und Antwortgenerierung ermöglicht. Um eine leistungsstarke und benutzerfreundliche Anwendung sicherzustellen, wurde React für das Frontend und FastAPI für das Backend eingesetzt, während Azure für die sichere Benutzer-Authentifizierung diente und die Ticketdaten in MySQL gespeichert wurden. Zusätzlich kam die Vektordatenbank Milvus zum Einsatz, um RAG-basiertes document retrieval und similarity search zu unterstützen. Das entwickelte System ermöglicht es den Nutzern, mit dem KI-Chatbot zu interagieren, um ihre Probleme zu lösen. Für nicht lösbare Probleme werden qualitativ hochwertige Tickets erstellt, die mit Lösungsvorschlägen und verlinkten ähnlichen Fällen angereichert sind. Eine gründliche Evaluierung und Testphase zeigte, dass die Anwendung ihr Hauptziel – die Steigerung der Helpdesk-Effizienz – erreicht hat. Darüber hinaus bietet sie eine sichere, reaktionsschnelle und benutzerfreundliche Erfahrung bei gleichzeitiger Wahrung hoher Wartungsfreundlichkeit und Anpassungsfähigkeit. Abschließend zeigt dieses Projekt die Machbarkeit und die Vorteile des Einsatzes von KI im IT-Service-Management auf. Es bietet eine skalierbare und anpassbare Lösung für Organisationen, um die Produktivität des Helpdesks zu steigern, die Arbeitslast zu verringern und die Kosteneffizienz zu erhöhen. Der Open-Source-Charakter des Systems bietet eine solide Grundlage für Weiterentwicklungen und zukünftige Forschung.",
    "projects.ai_helpdesk.sections.login.title": "Login & Authentifizierung",
    "projects.ai_helpdesk.sections.login.description":
      "Die Website verwendet Azure für die sichere Anmeldung und Benutzerverwaltung.",
    "projects.ai_helpdesk.sections.chat.title": "KI-Chat & Support",
    "projects.ai_helpdesk.sections.chat.description":
      "Der AI-Chatbot unterstützt Nutzer bei der Lösung von IT-Problemen, liefert automatische Antworten und erstellt bei Bedarf hochwertige, detaillierte Support-Tickets.",
    "projects.ai_helpdesk.sections.tickets.title": "Ticket-Details",
    "projects.ai_helpdesk.sections.tickets.description":
      "Die Ticket-Detailseite zeigt das qualitativ hochwertige, generierte Ticket mit detaillierter Fallbeschreibung und Lösungsvorschlägen. Zusätzlich werden ähnliche, bereits gelöste Tickets angezeigt. Techniker können das Ticket kommentieren oder dem Nutzer weitere Fragen stellen.",
    "projects.ai_helpdesk.sections.technician.title": "Techniker-Portal",
    "projects.ai_helpdesk.sections.technician.description":
      "Das Techniker-Portal ermöglicht das Zuweisen, Filtern, Suchen, Schließen und erneute Öffnen von Tickets.",
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

    // Project Detail section
    "projectDetail.technologies": "Verwendete Technologien",
    "projectDetail.description": "Projektbeschreibung",
    "projectDetail.gallery": "Bildergalerie",
    "projectDetail.back": "Zurück",
    "projectDetail.github": "GitHub",
    "projectDetail.liveDemo": "Live Demo",
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
    "projects.ai_helpdesk.title": "AI-Integrated Helpdesk",
    "projects.ai_helpdesk.summary":
      "Web app for automated problem solving or ticket generation to improve helpdesk efficiency.",
    "projects.ai_helpdesk.description":
      "This bachelor’s project presents the development of an AI-integrated IT Helpdesk Web Application, which leverages a Large Language Model (LLM) and Retrieval Augmented Generation (RAG) within an LLM-directed workflow. The aim was to address common inefficiencies in traditional helpdesk systems, such as the time-consuming handling of recurring issues and the lack of detail in user-written tickets. Based on an in-depth literature review, the project investigates how integrating AI automations can enhance helpdesk efficiency. A research-backed application design was created and implemented, leveraging an LLM to reduce workload, increase ticket quality and ultimately lower operational costs. The application was developed using a hybrid project management methodology, which combined Waterfall and Agile to provide a structured approach with iterative testing and adaptive prioritisation. The AI system was developed using the Python frameworks LangChain and LangGraph to build a custom state-driven workflow which leverages a locally deployed LLM to allow for dynamic decision-making and generation of responses. To ensure a performant and user-friendly application, the project employed React on the frontend and FastAPI on the backend, while utilising Azure for secure user authentication, and storing ticket data in MySQL. Additionally, the vector database Milvus was employed to support RAG-based document retrieval and similarity search. The developed system allows users to interact with the AI chatbot to resolve their issues. For unresolvable problems, high-quality tickets are generated, enriched with solution suggestions and linked similar cases. Thorough evaluation and testing showed that the application met its key objective of increasing helpdesk efficiency. Furthermore, it offers a secure, responsive, and user-friendly experience, while preserving high maintainability and customisability. In conclusion, this project demonstrates the feasibility and benefits of leveraging AI in IT Service Management. It provides a scalable and customisable solution for organisations to increase helpdesk productivity, reduce workload, and increase cost-effectiveness. The open-source nature of the system offers a solid foundation for further development and future research.",
    "projects.ai_helpdesk.sections.login.title": "Login & Authentication",
    "projects.ai_helpdesk.sections.login.description":
      "The website uses Azure for secure sign-in and user management.",
    "projects.ai_helpdesk.sections.chat.title": "AI Chat & Support",
    "projects.ai_helpdesk.sections.chat.description":
      "The AI chatbot assists users in resolving IT issues, provides automated responses, and generates high-quality, detailed support tickets when needed.",
    "projects.ai_helpdesk.sections.tickets.title": "Ticket Details",
    "projects.ai_helpdesk.sections.tickets.description":
      "The ticket detail page displays the high-quality, generated ticket with a detailed case description and solution suggestions. Similar previously resolved tickets are also shown. Technicians can comment on the ticket or ask the user additional questions.",
    "projects.ai_helpdesk.sections.technician.title": "Technician Portal",
    "projects.ai_helpdesk.sections.technician.description":
      "The technician portal allows assigning, filtering, searching, closing, and reopening tickets.",
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

    // Project Detail section
    "projectDetail.technologies": "Technologies Used",
    "projectDetail.description": "Project Description",
    "projectDetail.gallery": "Image Gallery",
    "projectDetail.back": "Back",
    "projectDetail.github": "GitHub",
    "projectDetail.liveDemo": "Live Demo",
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
