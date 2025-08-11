import * as React from "react";
import Lottie from "lottie-react";
import chatbot from "@/assets/chatbot.json";
import { useTheme } from "./theme-provider";

export function Contact() {
  const { theme } = useTheme();

  // Theme-specific gradient colors
  const gradientColors =
    theme === "dark"
      ? "bg-[radial-gradient(140%_110%_at_0%_50%,#6b375d_0%,#2b2e4a_50%,#1b1f2a_100%)]"
      : "bg-[radial-gradient(140%_110%_at_0%_50%,#e8d5f0_0%,#f8f9fa_50%,#ffffff_100%)]";

  return (
    <section id="contact" className={`${gradientColors} py-16`}>
      <div className="container mx-auto grid items-center gap-20 px-4 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Lottie animationData={chatbot} loop className="h-128 w-128" />
        </div>
        <div>
          <h2
            className={`text-2xl font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Kontakt
          </h2>
          <p
            className={
              theme === "dark" ? "text-textSecondary" : "text-gray-600"
            }
          >
            Schreib mir gern an{" "}
            <a
              href="mailto:sa.eras@gmx.de"
              className="text-primary hover:underline"
            >
              sa.eras@gmx.de
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
