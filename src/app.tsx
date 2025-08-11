import { BackToTop } from "@/components/back-to-top";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Career } from "@/components/career";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Career />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
