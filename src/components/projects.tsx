import * as React from "react";

export function Projects() {
  return (
    <section id="projects" className="bg-primary/10 py-12">
      <div className="container mx-auto grid gap-8 px-4">
        <h2 className="text-2xl font-semibold">Projekte</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.id} className="card-window">
              <div className="aspect-video w-full rounded-[10px] border border-white/60 bg-secondary" />
              <header className="mt-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-textSecondary">{p.description}</p>
              </header>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
}
const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "E‑Commerce Storefront",
    description:
      "Responsive Storefront mit Produktliste, Filtern und Warenkorb.",
  },
  {
    id: "p2",
    title: "SaaS Dashboard",
    description:
      "Analytics-Dashboard mit Diagrammen, Filtern und Einstellungen.",
  },
  {
    id: "p3",
    title: "Marketing Site",
    description: "SEO-freundliche Landingpages mit Blog und Kontaktformular.",
  },
  {
    id: "p4",
    title: "Portfolio Microsite",
    description: "Kleine, performante Microsite mit Fokus auf Typografie.",
  },
];
