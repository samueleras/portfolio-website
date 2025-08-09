import * as React from "react";

export function Skills() {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "REST/GraphQL",
    "Accessibility",
  ];
  return (
    <section id="skills" className="container mx-auto grid gap-6 px-4 py-12">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <li
            key={s}
            className="rounded-[8px] border border-white/40 px-3 py-2 text-sm text-textSecondary"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
