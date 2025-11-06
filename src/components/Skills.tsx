"use client";
import { motion } from "motion/react";
import {
  Code,
  Coffee,
  FileCode,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  Users,
  Lightbulb,
  Brain,
  Rocket,
  MessageSquare,
  Cloud,
  Figma,
  Palette,
  BookOpen,
  Globe,
  Cpu,
  Server,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages & Technologies",
      skills: [
        { name: "Java", icon: Coffee },
        { name: "Python", icon: Brain },
        { name: "JavaScript", icon: FileCode },
        { name: "Dart", icon: Code },
        { name: "C", icon: TerminalIcon },
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Palette },
        { name: "Bootstrap", icon: Layers },
        { name: "PostgreSQL", icon: Database },
      ],
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Flutter", icon: Rocket },
        { name: "Spring Boot", icon: LeafIcon },
        { name: "Firebase", icon: FlameIcon },
        { name: "Spring Framework", icon: LeafIcon },
        { name: "Figma", icon: Figma },
        { name: "VS Code", icon: Code },
        { name: "Android Studio", icon: SmartphoneIcon },
        { name: "React", icon: Zap },
        { name: "Next.js", icon: Server },
        { name: "Tailwind", icon: WindIcon },
        { name: "Amazon EC2", icon: Cloud },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Structures & Algorithms", icon: Layers },
        { name: "DBMS", icon: Database },
        { name: "API Integration", icon: Globe },
        { name: "Authentication & Authorization", icon: ShieldCheck },
        { name: "Real-Time Systems", icon: Cpu },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Strong Communication", icon: MessageSquare },
        { name: "Problem Solving", icon: Lightbulb },
        { name: "Fast Learner", icon: Rocket },
        { name: "Passionate About Tackling New Challenges", icon: BookOpen },
      ],
    },
  ];

  // ===== Custom SVG Icons =====
  function LeafIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6 2 3 8 3 8s3 6 9 6 9-6 9-6-3-6-9-6z" />
        <path d="M12 14v8" />
      </svg>
    );
  }

  function FlameIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C12 2 8 8 8 12a4 4 0 0 0 8 0c0-4-4-10-4-10z" />
      </svg>
    );
  }

  function WindIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8h12a2 2 0 1 0-2-2" />
        <path d="M2 12h15a2 2 0 1 1-2 2" />
        <path d="M5 16h10a2 2 0 1 0 2 2" />
      </svg>
    );
  }

  function SmartphoneIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    );
  }

  function TerminalIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path d="M4 17l6-6-6-6" />
        <path d="M12 19h8" />
      </svg>
    );
  }

  // ===== Component Render =====
  return (
    <div
      className="relative min-h-screen pt-32 pb-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/bg.png')", // ✅ Path from public folder
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1
            className="text-white mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: "1.2",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            My Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8C3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Expertise
            </span>
          </h1>
          <p
            className="text-[#B3B3B3] max-w-2xl mx-auto"
            style={{ fontSize: "1.25rem", lineHeight: "1.6" }}
          >
            A comprehensive overview of my technical and soft skills
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-white mb-8"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: "700",
                }}
              >
                {category.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#FF6A00] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <Icon className="w-10 h-10 text-white group-hover:text-[#FF6A00] transition-colors duration-300" />
                        <p className="text-white group-hover:text-[#FF6A00] transition-colors duration-300 text-sm font-semibold">
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
