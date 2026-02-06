import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ImpactNumbers } from "./components/ImpactNumbers";
import { Navbar } from "./components/Navbar";
import { PortfolioGrid } from "./components/PortfolioGrid";
import { Skills } from "./components/Skills";
import { Toaster } from "./components/ui/sonner";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";

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
      <About />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <Toaster />
    </div>
  );
}
