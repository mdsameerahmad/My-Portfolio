import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Clock, Users, Award } from "lucide-react";

import separatedImage from "@/assets/seperate.png";
import handshakeImage from "@/assets/shaked.png";

export function ImpactNumbers() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const separateOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const handshakeOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const imageShift = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  const stats = [
    { icon: Rocket, number: "15+", label: "Production Ready Apps", description: "Successfully deployed" },
    { icon: Clock, number: "7 Days", label: "Avg Delivery Time", description: "Fast delivery cycle" },
    { icon: Users, number: "30+", label: "Client Collaborations", description: "Successful project deals" },
    { icon: Award, number: "100%", label: "Client Satisfaction", description: "Guaranteed quality" },
  ];

  return (
    <div ref={sectionRef} className="relative w-full py-24 bg-black overflow-hidden">

      {/* Background images */}
      <motion.img
        src={separatedImage}
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        style={{ opacity: separateOpacity, x: imageShift }}
      />

      <motion.img
        src={handshakeImage}
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        style={{ opacity: handshakeOpacity, x: imageShift }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ✅ Updated Heading (Now same style as Hero Section) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
              lineHeight: "1.1",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            Impact in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8C3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Numbers
            </span>
          </h2>

          <p className="text-[#B3B3B3] text-xl">
            Proven track record of delivering exceptional results
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8
                           hover:bg-white/10 hover:border-[#FF6A00] transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-[#FF6A00]" />
                <h3 className="text-white text-4xl font-bold mt-4">{stat.number}</h3>
                <p className="text-white text-lg font-semibold mt-2">{stat.label}</p>
                <p className="text-[#B3B3B3] text-sm mt-1">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
