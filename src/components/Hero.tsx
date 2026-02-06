import heroImage from "figma:asset/3af4f29f5289be48b1e09dcd206f8d6811c3b883.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

function useTypingEffect(
  phrases: string[],
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenPhrases = 1000
) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const fullText = phrases[currentPhraseIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setIsDeleting(true);
        }
      }
    };

    const timeout = isDeleting ? deletingSpeed : typingSpeed;
    timer = setTimeout(handleTyping, currentText.length === phrases[currentPhraseIndex].length && !isDeleting ? delayBetweenPhrases : timeout);

    return () => clearTimeout(timer);
  }, [currentPhraseIndex, currentText, isDeleting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);

  return currentText;
}

export function Hero() {
  const { scrollY } = useScroll();

  // Moves image on scroll (0px → 120px right)
  const xMove = useTransform(scrollY, [0, 400], ["0%", "12%"]);

  const focusAreas = [
    "Software Developer",
    "Figma Designer",
    "Flutter Developer",
    "UI/UX Designer",
    "Java Developer",
    "Mobile App Developer",
  ];

  const animatedText = useTypingEffect(focusAreas);

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
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                lineHeight: "1.1",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                overflowWrap: "break-word",
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
                {animatedText}
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
            <motion.p
                className="text-white/90"
                style={{ 
                  fontSize: "1.5rem", 
                  lineHeight: "1.6", 
                  fontWeight: "400", 
                  fontFamily: "'Roboto Flex', sans-serif" 
                }}
              >
                {"From concept to deployment, I build stable, scalable applications with clean design and solid engineering."
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={word + i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: i * 0.05 + 0.5 }}
                      style={{ display: "inline-block", marginRight: "0.25em" }}
                    >
                      {word}
                    </motion.span>
                  ))}
              </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-6"
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #FF6A00 0%, #FF8C3A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block"
                }}
              >
                Md Sameer Ahmad
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
