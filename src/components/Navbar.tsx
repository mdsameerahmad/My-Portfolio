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
    { name: "About", id: "about" },
    { name: "Contact Me", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth"
    });

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glassy navbar background */}
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => scrollToSection("home")}
              className="cursor-pointer"
            >
              <span className="text-white text-xl font-bold tracking-tight">
                Portfolio<span className="text-[#FF6A00]">.</span>
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 font-semibold transition-colors ${
                    activeSection === item.id
                      ? "text-[#FF6A00]"
                      : "text-white hover:text-[#FF6A00]"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6A00]"
                    />
                  )}
                </motion.button>
              ))}

              <a
                href="https://wa.me/919155649575?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#FF6A00] hover:bg-[#FF8C3A] text-white rounded-lg font-semibold transition-all hover:scale-105"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Glass Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="
                md:hidden
                mt-3
                rounded-2xl
                backdrop-blur-2xl
                bg-black/60
                border border-white/10
                shadow-2xl shadow-black/40
                py-4
                space-y-2
              "
            >
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full px-4 py-3 rounded-lg font-semibold transition-colors ${
                    activeSection === item.id
                      ? "text-[#FF6A00] bg-white/5"
                      : "text-white hover:bg-white/5 hover:text-[#FF6A00]"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <a
                href="https://wa.me/919155649575?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="
                  block w-full
                  px-4 py-3
                  bg-[#FF6A00]
                  hover:bg-[#FF8C3A]
                  text-white
                  rounded-xl
                  text-center
                  font-semibold
                  shadow-lg shadow-black/30
                  transition-all
                "
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}
