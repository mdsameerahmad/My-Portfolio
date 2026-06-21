import { motion } from "motion/react";

export function Skills() {
  const serviceRows = [
    { no: "01", type: "Mobile", title: "Flutter App Development", meta: "Dart - Firebase - APIs", detail: "Cross-platform mobile apps with polished UI and practical architecture." },
    { no: "02", type: "Web", title: "React Interfaces", meta: "React - Next.js - Tailwind", detail: "Responsive frontend experiences with clean component structure." },
    { no: "03", type: "Backend", title: "Spring Boot Systems", meta: "Java - REST - Auth", detail: "Secure APIs, server-side logic, and database-connected workflows." },
    { no: "04", type: "AI/ML", title: "Machine Learning Solutions", meta: "Python - Scikit-Learn - Pandas", detail: "Data analysis, predictive models, anomaly detection, and intelligent decision systems." },
    { no: "05", type: "LLM", title: "Generative AI & RAG", meta: "LangChain - Gemini - FAISS", detail: "Building AI assistants, Retrieval-Augmented Generation pipelines, and knowledge-based chat systems." },
    { no: "06", type: "Automation", title: "AI Agents & Workflow Automation", meta: "Agents - APIs - Integrations", detail: "Automating business workflows, intelligent task execution, and multi-step AI agent systems." },
    { no: "07", type: "Cloud", title: "Database & Cloud", meta: "PostgreSQL - Firebase - AWS EC2", detail: "Reliable data models, scalable deployments, and cloud-hosted applications." },
    { no: "08", type: "Design", title: "UI/UX & Figma", meta: "Wireframes - Prototypes - Design Systems", detail: "Interfaces that are easy to understand, scan, and ship." },
  ];

  const tools = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "Dart",
    "C",
    "HTML",
    "CSS",
    "Bootstrap",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Flutter",
    "Spring Boot",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "AWS EC2",
    "Docker",
    "Git",
    "Figma",
    "VS Code",
    "Android Studio",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "PyTorch",
    "LangChain",
    "RAG",
    "LLMs",
    "Gemini API",
    "OpenAI API",
    "FAISS",
    "Vector Databases",
    "AI Agents",
    "Workflow Automation",
  ];

  return (
    <section className="skills-section section-pad">
      <div className="section-heading split-heading">
        <div>
          <div className="section-kicker"><span> 03</span> skills and stack</div>
          <h2>Development skills shaped around <em>real builds.</em></h2>
        </div>
        <p>A practical stack for mobile apps, web interfaces, backend APIs, UI design, and deployment.</p>
      </div>

      <div className="service-board">
        {serviceRows.map((row, index) => (
          <motion.article
            className="service-row"
            data-orb={index % 2 === 0 ? "sage" : "gold"}
            key={row.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
          >
            <span>{row.no} - {row.type}</span>
            <h3>{row.title}</h3>
            <p>{row.meta}</p>
            <small>{row.detail}</small>
          </motion.article>
        ))}
      </div>

      <div className="tool-cloud" aria-label="Technology list">
        {tools.map((tool) => <span key={tool}>{tool}</span>)}
      </div>
    </section>
  );
}
