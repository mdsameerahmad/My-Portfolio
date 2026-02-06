import { Download } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import bgImage from "../assets/bg.png";
import cvFile from "../assets/cv.pdf";
import { Button } from "./ui/button";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yRight = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div 
      id="about" 
      ref={containerRef} 
      className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for consistency with other sections */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Title */}
          <motion.div
            style={{ y: yLeft }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.02em" }}
            >
              About Me
            </h2>
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#FF6A00",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "1rem",
                display: "block"
              }}
            >
              Md Sameer Ahmad
            </span>
            <h3 
              className="mt-4"
              style={{ 
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)", 
                lineHeight: "1.3", 
                fontWeight: "700",
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8C3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              3rd Year ECE Student & Aspiring Developer
            </h3>
          </motion.div>

          {/* Right side - Description and CTA */}
          <motion.div
            style={{ y: yRight }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p 
              className="text-[#B3B3B3]"
              style={{ fontSize: "1.125rem", lineHeight: "1.8", fontWeight: "400", fontFamily: "'Roboto Flex', sans-serif" }}
            >
              I am a passionate Electronics and Communication Engineering student currently in my 3rd year. My journey in technology has been driven by a curiosity to understand how things work and a desire to build impactful digital solutions.
            </p>
            <p 
              className="text-[#B3B3B3]"
              style={{ fontSize: "1.125rem", lineHeight: "1.8", fontWeight: "400", fontFamily: "'Roboto Flex', sans-serif" }}
            >
              With over 1 year of experience working on various freelance projects and live applications, I've developed a strong foundation in software development and UI/UX design. I specialize in creating stable, scalable applications that bridge the gap between complex engineering and user-friendly design.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href={cvFile} download="Md_Sameer_Ahmad_CV.pdf">
                <Button 
                  className="bg-[#FF6A00] hover:bg-[#FF8C3A] text-white border-none px-8 py-6"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
