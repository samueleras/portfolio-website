import * as React from "react";
import Lottie from "lottie-react";
import buildProduct from "@/assets/Build Product Colored.json";
import mockup from "@/assets/mockup.png";

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-4rem)] bg-[radial-gradient(120%_120%_at_10%_-10%,#6b375d_0%,#2b2e4a_50%,#1b1f2a_100%)] py-12"
    >
      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] items-start gap-10 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Projekte</h2>
          <div className="hidden h-90 w-90 md:block">
            <Lottie animationData={buildProduct} loop className="h-90 w-90" />
          </div>
        </div>

        <div className="grid gap-20 mt-12">
          {PROJECTS.map((p, idx) => (
            <article
              key={p.id}
              className={
                "grid items-center gap-6 md:grid-cols-2 " +
                (idx % 2 === 1 ? "" : "md:[&>div:first-child]:order-2")
              }
            >
              <div className="justify-self-center">
                <img
                  src={mockup}
                  alt={`${p.title} mockup`}
                  className="w-[500px] max-w-full rounded-[10px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <header className="justify-self-center text-center md:text-left mt-4">
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
