import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";

import aiImg from "@/assets/ai.png";
import chatBotImg from "@/assets/chatbot.png";
import madarsaImg from "@/assets/madarsa.png";
import mlmImg from "@/assets/mlm.png";
import referImg from "@/assets/refer.png";
import weatherImg from "@/assets/weather.png";

export function PortfolioGrid() {
  const projects = [
    {
      title: "AI Decision Intelligence",
      stack: "Flutter x Python",
      industry: "AI product - analytics",
      metric: "Live",
      image: aiImg,
      websiteLink: "https://ai-decision-app-frontend.web.app/",
      githubLink: "https://github.com/mdsameerahmad/AI-Decision-Intelligence",
      description: "A decision-support platform that turns data into readable product insights and forecasts.",
    },
    {
      title: "Referral & Rewards Web App",
      stack: "Next.js x Spring Boot",
      industry: "Rewards - product growth",
      metric: "Web app",
      image: referImg,
      websiteLink: "https://gramflix.in/",
      githubLink: "https://github.com/mdsadiqueshakeel/gramflix/tree/master",
      description: "A referral flow built for signups, rewards, and user engagement across a growth loop.",
    },
    {
      title: "Madarsa Arabia",
      stack: "React x Bootstrap",
      industry: "Organization - education",
      metric: "Portfolio",
      image: madarsaImg,
      websiteLink: "https://www.madarsaarabia.in/",
      githubLink: "https://github.com/mdsameerahmad/MADARSA-ARABIA",
      description: "A responsive organization website presenting mission, programs, and donation touchpoints.",
    },
    {
      title: "MLM Web Platform",
      stack: "React x Node.js",
      industry: "Business - network platform",
      metric: "Full stack",
      image: mlmImg,
      websiteLink: "https://growthaffinitymarketing.com/",
      githubLink: "https://github.com/mdsadiqueshakeel/MLM-System",
      description: "A multi-level marketing platform with user flows, earnings logic, and web dashboards.",
    },
    {
      title: "WhatsApp Chatbot",
      stack: "Java x Twilio",
      industry: "Automation - messaging",
      metric: "Bot",
      image: chatBotImg,
      websiteLink: "https://github.com/mdsameerahmad/ChatBot",
      githubLink: "https://github.com/mdsameerahmad/ChatBot",
      description: "A chatbot experiment using Twilio messaging workflows for automated conversation handling.",
    },
   
  ];

  const [featured, second, third, ...rest] = projects;

  return (
    <section className="work-section section-pad">
      <div className="section-heading">
        <div className="section-kicker"><span> 04</span> selected work</div>
        <h2>Projects I have built into <em>usable products.</em></h2>
        <p>Selected builds across mobile apps, web platforms, automation, APIs, and real-world client use cases.</p>
      </div>

      <motion.article className="featured-case" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="featured-image"><img src={featured.image} alt={featured.title} /></div>
        <div className="featured-copy">
          <div className="project-meta">{featured.industry}</div>
          <h3>{featured.title}<span>.</span></h3>
          <div className="case-stats"><strong>{featured.metric}</strong><span>{featured.stack}</span></div>
          <p>{featured.description}</p>
          <div className="project-actions">
            <a href={featured.websiteLink} target="_blank" rel="noopener noreferrer">Website <ArrowUpRight size={16} /></a>
            <a href={featured.githubLink} target="_blank" rel="noopener noreferrer">GitHub <Github size={16} /></a>
          </div>
        </div>
      </motion.article>

      <div className="case-grid">
        {[second, third, ...rest].map((project, index) => (
          <motion.article
            className="case-card"
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="case-card-body">
              <span>{project.industry}</span>
              <h3>{project.title}</h3>
              <p>{project.stack}</p>
              <div className="mini-actions">
                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">Open <ArrowUpRight size={15} /></a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Code <Github size={15} /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
