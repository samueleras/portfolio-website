import * as React from "react";

export function Career() {
  return (
    <section id="career" className="container mx-auto grid gap-6 px-4 py-12">
      <h2 className="text-2xl font-semibold">Werdegang</h2>
      <ul className="grid gap-4">
        {CAREER.map((item) => (
          <li
            key={item.when}
            className="rounded-[10px] border border-white/15 p-4"
          >
            <p className="text-sm text-textSecondary">{item.when}</p>
            <p className="font-semibold">
              {item.role} – {item.org}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

interface CareerItem {
  when: string;
  org: string;
  role: string;
}
const CAREER: CareerItem[] = [
  { when: "2024 – heute", org: "Freelance", role: "Webentwickler" },
  { when: "2022 – 2024", org: "Tech Co.", role: "Frontend Developer" },
  { when: "2020 – 2022", org: "Startup", role: "Junior Developer" },
];
