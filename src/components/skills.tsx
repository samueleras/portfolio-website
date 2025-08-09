import * as React from "react";
// Using Lottie JSON animation for blogging illustration
import testingTechAnimation from "../assets/Testing Tech - Colour.json";
import Lottie from "lottie-react";

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
    <section id="skills" className="bg-primary/10">
      <div className="container mx-auto grid items-center gap-10 px-4 py-12 md:grid-cols-2">
        {/* Left: minimal blogging SVG */}
        <div className="hidden justify-center md:flex">
          <Lottie
            animationData={testingTechAnimation}
            loop
            className="h-128 w-128 opacity-90"
          />
        </div>

        {/* Right: content indented to the right */}
        <div className="md:pl-16">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-[8px] border border-white/40 px-3 py-2 text-sm text-textSecondary"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
