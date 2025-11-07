import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact Me", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <span 
              className="text-white"
              style={{ fontSize: "1.5rem", fontWeight: "700", letterSpacing: "-0.02em" }}
            >
              Portfolio
              <span style={{ color: "#FF6A00" }}>.</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 transition-colors ${
                  activeSection === item.id ? "text-[#FF6A00]" : "text-white hover:text-[#FF6A00]"
                }`}
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6A00]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Hire Me Button */}
            <motion.a
              href="https://wa.me/919155649575?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20impressed%20with%20your%20work.%20I%20would%20love%20to%20collaborate%20and%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="px-6 py-2.5 bg-[#FF6A00] hover:bg-[#FF8C3A] text-white rounded-lg transition-all duration-300 hover:scale-105"
              style={{ fontSize: "1rem", fontWeight: "600" }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  activeSection === item.id ? "text-[#FF6A00]" : "text-white hover:text-[#FF6A00]"
                }`}
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Hire Me Button */}
            <a
              href="https://wa.me/919155649575?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20impressed%20with%20your%20work.%20I%20would%20love%20to%20collaborate%20and%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-3 bg-[#FF6A00] hover:bg-[#FF8C3A] text-white rounded-lg transition-colors text-center"
              style={{ fontSize: "1rem", fontWeight: "600" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
