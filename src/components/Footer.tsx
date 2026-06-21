import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/mdsameerahmad" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/mdsameerahmad/" },
    { name: "Email", icon: Mail, url: "mailto:mohammadsameerahmad2005@gmail.com" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/919155649575" },
  ];

  return (
    <footer className="footer-section">
      <motion.div className="footer-top" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div>
          <div className="section-kicker"><span></span> end of transmission</div>
          <h2>LET'S <em>build</em> something worth launching.</h2>
          <p>Open for freelance work, internships, collaborations, and product-minded development projects.</p>
        </div>
        <div className="footer-socials">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}><Icon size={19} /></a>;
          })}
        </div>
      </motion.div>
      <div className="footer-bottom">
        <span>ï¿½ {new Date().getFullYear()} Md Sameer Ahmad</span>
        <span>portfolio system - built with React</span>
      </div>
      <div className="footer-ghost">SAMEER</div>
    </footer>
  );
}
