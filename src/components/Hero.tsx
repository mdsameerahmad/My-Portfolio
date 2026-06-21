import { ArrowDownRight, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroVideo from "../assets/homeVdo.mp4";

const focusAreas = ["Flutter", "React", "Spring Boot", "UI/UX", "Firebase", "PostgreSQL"];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, -26]);

  return (
    <main ref={heroRef} className="hero-section section-pad">
      <div className="vertical-ghost">DEVELOPER</div>
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="section-kicker"><span></span> ready for launch - mission: app growth</div>
        <motion.h1 className="hero-title hero-title-reference" style={{ y: wordY }}>
          <span className="hero-we">I</span>
          <span>BUILD</span>
          <span>MOBILE</span>
          <span>APPS<em>.</em></span>
        </motion.h1>
        <p className="hero-lede reference-lede">
          <span className="dropcap">I</span> craft tailored digital solutions — mobile apps, web development and UI/UX — that turn ideas into launch-ready products.
        </p>
        <div className="hero-actions reference-actions">
          <a className="btn btn-primary" href="#projects">See selected work <ArrowUpRight size={17} /></a>
          <a className="btn btn-secondary" href="mailto:mohammadsameerahmad2005@gmail.com">Email me <Mail size={17} /></a>
        </div>
       
      </motion.div>

      <motion.div className="hero-visual hero-visual-reference" style={{ y: cardY }} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <div className="orb orb-green"></div>
        <div className="hero-card reference-card">
          <video src={heroVideo} autoPlay muted loop playsInline aria-label="Md Sameer Ahmad portfolio hero video" />
          <div className="hero-card-overlay reference-overlay">
            <span className="tiny-pill">5+ Live Projects</span>           
          </div>
        </div>
        <div className="floating-label label-one">2,000+ lines</div>
        <div className="floating-label label-two"> Real-World Project Experience</div>
        <div className="floating-label label-three">15+ Trusted Cleints</div>
      </motion.div>

      <div className="hero-bottom reference-bottom">
        <div className="skill-ticker">
          {focusAreas.map((area) => <span key={area}>{area}</span>)}
        </div>
        <a className="hero-wide-cta" href="#contact">
          <span>Let&apos;s transform your digital presence</span>
          <ArrowUpRight size={18} />
        </a>
        <div className="hero-info-card">
          <span>What I do</span>
          <p>Mobile apps, clean interfaces, and launch-ready product engineering.</p>
        </div>
        <a className="round-link" href="https://wa.me/919155649575" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <MessageCircle size={20} />
        </a>
        <a className="scroll-cue" href="#skills"><ArrowDownRight size={20} /> explore</a>
      </div>
    </main>
  );
}
