import { motion } from "motion/react";

export function Skills() {
  const serviceRows = [
    { no: "01", type: "Mobile", title: "Flutter App Development", meta: "Dart - Firebase - APIs", detail: "Cross-platform mobile apps with polished UI and practical architecture." },
    { no: "02", type: "Web", title: "React Interfaces", meta: "React - Next.js - Tailwind", detail: "Responsive frontend experiences with clean component structure." },
    { no: "03", type: "Backend", title: "Spring Boot Systems", meta: "Java - REST - Auth", detail: "Secure APIs, server-side logic, and database-connected workflows." },
    { no: "04", type: "Data", title: "Database & Cloud", meta: "PostgreSQL - Firebase - EC2", detail: "Reliable data models, hosting, and deployment-ready foundations." },
    { no: "05", type: "Design", title: "UI/UX & Figma", meta: "Wireframes - Prototypes - Design systems", detail: "Interfaces that are easy to understand, scan, and ship." },
    { no: "06", type: "Core", title: "Problem Solving", meta: "DSA - DBMS - API integration", detail: "Strong fundamentals for building features that stay maintainable." },
  ];

  const tools = ["Java", "Python", "JavaScript", "Dart", "C", "HTML", "CSS", "Bootstrap", "PostgreSQL", "Flutter", "Spring Boot", "Firebase", "Figma", "VS Code", "Android Studio", "React", "Next.js", "Tailwind", "Amazon EC2"];

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
