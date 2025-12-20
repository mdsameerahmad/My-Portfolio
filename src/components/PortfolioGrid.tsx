import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

import chatBotImg from "@/assets/chatbot.png";
import ecommImg from "@/assets/ecomm.png";
import madarsaImg from "@/assets/madarsa.png";
import mlmImg from "@/assets/mlm.png";
import referImg from "@/assets/refer.png";
import weatherImg from "@/assets/weather.png";

export function PortfolioGrid() {
  const projects = [
    {
      id: 1,
      title: "Flutter X SpringBoot",
      category: "AI-Integrated Multi-Vendor E-Commerce App",
      image: ecommImg,
      websiteLink: "https://github.com/mdsameerahmad/E-commerce-App/tree/main",
      githubLink: "https://github.com/mdsameerahmad/E-commerce-App/tree/main"
    },
    {
      id: 2,
      title: "Next.js X SpringBoot",
      category: "Referral & Rewards Web App",
      image: referImg,
      websiteLink: "https://gramflix.in/",
      githubLink: "https://github.com/mdsadiqueshakeel/gramflix/tree/master"
    },
    {
      id: 3,
      title: "React X Bootstrap",
      category: "Organizational Portfolio Website",
      image: madarsaImg,
      websiteLink: "https://www.madarsaarabia.in/",
      githubLink: "https://github.com/mdsameerahmad/MADARSA-ARABIA"
    },
    {
      id: 4,
      title: "React X Node.js",
      category: "Full-Stack Multi-Level Marketing (MLM) Web Platform",
      image: mlmImg,
      websiteLink: "https://growthaffinitymarketing.com/",
      githubLink: "https://github.com/mdsadiqueshakeel/MLM-System"
    },
    {
      id: 5,
      title: "Java X Twillio",
      category: "WhatsApp Chatbot",
      image: chatBotImg,
      websiteLink: "https://github.com/mdsameerahmad/ChatBot",
      githubLink: "https://github.com/mdsameerahmad/ChatBot"
    },
    {
      id: 6,
      title: "Flutter X External Api",
      category: "Weather App",
      image: weatherImg,
      websiteLink: "https://github.com/mdsameerahmad/Weather_App",
      githubLink: "https://github.com/mdsameerahmad/Weather_App"
    }
  ];

  return (
    <div 
      className="w-full py-24 pt-32 bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/bg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.02em" }}
          >
            Project Works
          </h2>
          <p className="text-[#B3B3B3]" style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
            A curated collection of projects showcasing my development skills
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A] shadow-2xl">

                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-[#FF6A00] mb-2" style={{ fontSize: "0.875rem", fontWeight: "600", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {project.category}
                  </p>
                  <h3 className="text-white mb-4" style={{ fontSize: "1.5rem", fontWeight: "700", lineHeight: "1.3" }}>
                    {project.title}
                  </h3>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 bg-[#FF6A00] hover:bg-[#FF8C3A] text-white rounded-lg transition-colors"
                      style={{ fontSize: "0.875rem", fontWeight: "600" }}
                    >
                      <ExternalLink size={16} />
                      Website
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20"
                      style={{ fontSize: "0.875rem", fontWeight: "600" }}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
