import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/mdsameerahmad" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/mdsameerahmad/" },
    { name: "Email", icon: Mail, url: "mailto:mohammadsameerahmad2005@gmail.com" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/919155649575" }
  ];

  return (
    <footer className="w-full py-16 bg-black border-t border-white/10" style={{ backgroundImage: "url('/src/assets/bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* CTA Text */}
          <div className="space-y-4">
            <h3 
              className="text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.02em" }}
            >
              Let's Create Something Amazing
            </h3>
            <p className="text-[#B3B3B3]" style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>
              Open for new opportunities and collaborations
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF6A00] hover:border-[#FF6A00] transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-8" />

          {/* Copyright */}
          <p className="text-[#B3B3B3]" style={{ fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} Md Sameer Ahmad Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
