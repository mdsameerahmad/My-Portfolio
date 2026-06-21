import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Work", id: "projects" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    window.scrollTo({ top: section.offsetTop - 88, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-wrap">
      <button className="brand-mark" onClick={() => scrollToSection("home")}>
        <span className="brand-main">sameer.</span>
        <span className="brand-sub">portfolio system</span>
      </button>

      <div className="nav-pill">
        <div className="nav-inner">
          <div className="desktop-menu">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <button className="mobile-toggle" onClick={() => setIsMenuOpen((value) => !value)} aria-label="Toggle navigation">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <a
            href="https://wa.me/919155649575?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Hire Me <ArrowUpRight size={14} />
          </a>
        </div>

        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mobile-link ${activeSection === item.id ? "is-active" : ""}`}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
