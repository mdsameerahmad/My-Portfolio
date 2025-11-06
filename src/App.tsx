import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ImpactNumbers } from "./components/ImpactNumbers";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { ClientLogos } from "./components/ClientLogos";
import { Skills } from "./components/Skills";
import { PortfolioGrid } from "./components/PortfolioGrid";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <ImpactNumbers />
      <WhyWorkWithMe />
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <PortfolioGrid />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <Toaster />
    </div>
  );
}
