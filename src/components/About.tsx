import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function About() {
  return (
    <div className="w-full py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.02em" }}
            >
              Behind the Designs
            </h2>
            <h3 
              className="mt-4"
              style={{ 
                fontSize: "clamp(2rem, 4vw, 3rem)", 
                lineHeight: "1.3", 
                fontWeight: "700",
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8C3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Shaping Experiences That Make Life Simpler
            </h3>
          </motion.div>

          {/* Right side - Description and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p 
              className="text-[#B3B3B3]"
              style={{ fontSize: "1.125rem", lineHeight: "1.8", fontWeight: "400" }}
            >
              I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems. With over a decade of experience, I've helped brands transform their digital presence through thoughtful design and strategic thinking.
            </p>
            <p 
              className="text-[#B3B3B3]"
              style={{ fontSize: "1.125rem", lineHeight: "1.8", fontWeight: "400" }}
            >
              My approach combines user research, visual design, and iterative testing to create products that not only look beautiful but work seamlessly for the people who use them every day.
            </p>
            <Button 
              className="mt-8 bg-[#FF6A00] hover:bg-[#FF8C3A] text-white border-none px-8 py-6"
              style={{ fontSize: "1rem", fontWeight: "600" }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
