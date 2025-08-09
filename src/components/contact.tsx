import * as React from "react";
import Lottie from "lottie-react";
import chatbot from "@/assets/chatbot.json";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[radial-gradient(140%_110%_at_0%_50%,#6b375d_0%,#2b2e4a_50%,#1b1f2a_100%)] py-16"
    >
      <div className="container mx-auto grid items-center gap-20 px-4 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Lottie animationData={chatbot} loop className="h-128 w-128" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Kontakt</h2>
          <p className="text-textSecondary">
            Schreib mir gern an{" "}
            <a href="mailto:sa.eras@gmx.de">sa.eras@gmx.de</a>
          </p>
        </div>
      </div>
    </section>
  );
}
