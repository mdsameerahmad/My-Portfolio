import { motion, useScroll, useTransform } from "motion/react";
import { Badge } from "./ui/badge";
import heroImage from "figma:asset/3af4f29f5289be48b1e09dcd206f8d6811c3b883.png";

export function Hero() {
  const { scrollY } = useScroll();

  // Moves image on scroll (0px → 120px right)
  const xMove = useTransform(scrollY, [0, 400], ["0%", "12%"]);

  const focusAreas = [
    "#1 Full Stack Developer",
    "#2 Flutter Developer",
    "#3 UI/UX Designer",
    "#4 Spring Boot Backend Developer",
    "#5 React Native Mobile App Developer",
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">

      {/* ✅ Scroll Animated Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full flex items-center justify-center bg-black overflow-hidden">
          <motion.img
            src={heroImage}
            alt="Background portrait"
            className="h-full object-contain"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ x: xMove }} // 👈 Scroll controlled motion
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 106, 0, 0.2) 0%, rgba(10, 10, 10, 0.7) 40%, rgba(10, 10, 10, 0.85) 70%, #0A0A0A 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-white mb-8"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                lineHeight: "1.1",
                fontWeight: "700",
                letterSpacing: "-0.02em",
              }}
            >
              Hey, I'm a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6A00 0%, #FF8C3A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Software Developer
              </span>
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Badge className="px-4 py-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                    {area}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-12"
          >
            <p
              className="text-white/90"
              style={{ fontSize: "1.5rem", lineHeight: "1.6", fontWeight: "400" }}
            >
              From concept to deployment, I build stable, scalable applications with clean design and solid engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
