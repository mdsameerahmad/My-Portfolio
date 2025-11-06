import { motion } from "motion/react";
import { Shield, Zap, CheckCircle, MessageCircle, Code } from "lucide-react";
import bgImage from "../assets/bg.png"; // ✅ Update path based on your project structure

export function WhyWorkWithMe() {
  const reasons = [
    {
      icon: Shield,
      title: "Secure & Successful Solutions",
      description: "Building robust, production-ready applications with best security practices and industry standards to ensure your project's success."
    },
    {
      icon: Zap,
      title: "Fast Response & Delivery",
      description: "Quick turnaround time without compromising quality. I prioritize meeting deadlines and delivering projects on schedule."
    },
    {
      icon: CheckCircle,
      title: "On-Time Project Completion",
      description: "Committed to delivering within agreed timelines. Your deadlines are my priority, ensuring smooth project execution."
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Clear, honest, and regular updates throughout the project lifecycle. You'll always know the status of your project."
    },
    {
      icon: Code,
      title: "Clean Code & Best Practices",
      description: "Writing maintainable, scalable, and well-documented code following industry best practices for long-term success."
    }
  ];

  return (
    <div
      className="w-full py-24 bg-[#0A0A0A] relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: "1.2",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            Why{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8C3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Work With Me
            </span>
          </h2>
          <p
            className="text-[#B3B3B3] max-w-2xl mx-auto"
            style={{ fontSize: "1.25rem", lineHeight: "1.6" }}
          >
            Partnering for success with dedication, expertise, and reliability
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FF6A00] transition-all duration-300">
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center group-hover:bg-[#FF6A00] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#FF6A00] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white mb-3"
                    style={{ fontSize: "1.5rem", fontWeight: "700", lineHeight: "1.3", letterSpacing: "-0.01em" }}
                  >
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#B3B3B3]" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
