import * as React from "react";

export function Contact() {
  return (
    <section id="contact" className="bg-secondary py-16">
      <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Kontakt</h2>
          <p className="text-textSecondary">
            Schreib mir gern an{" "}
            <a href="mailto:samuel@example.com">samuel@example.com</a>
          </p>
        </div>
        <div
          className="aspect-square rounded-full border-2 border-white/50"
          aria-hidden
        />
      </div>
    </section>
  );
}
