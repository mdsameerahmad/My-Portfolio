import { ArrowUpRight, FileUser } from "lucide-react";
import { motion } from "motion/react";
import cvFile from "../assets/resume.pdf";

export function About() {
  const timeline = [
    { year: "2024", title: "Foundation", text: "Built strong fundamentals in Java, programming logic, DBMS, and web basics." },
    { year: "2025", title: "Live projects", text: "Started shipping freelance and real-world apps with React, Flutter, Firebase, and APIs." },
    { year: "2026", title: "Product polish", text: "Focused on UI/UX, scalable project structure, and reliable deployment workflows." },
  ];

  return (
    <section id="about" className="about-section section-pad">
      <div className="about-grid">
        <motion.div className="about-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-kicker"><span> 05</span> about</div>
          <h2>Final year ECE student and aspiring <em>developer.</em></h2>
          <a className="btn btn-primary" href={cvFile} target="_blank" rel="noopener noreferrer">
            View CV <FileUser size={17} />
          </a>
        </motion.div>

        <motion.div className="about-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
          <p>
            I am Md Sameer Ahmad, a passionate Electronics and Communication Engineering student currently in my final year. My journey in technology is driven by curiosity, practical problem solving, and a desire to build useful digital solutions.
          </p>
          <p>
            With over 1 year of experience working on freelance projects and live applications, I have developed a strong foundation in software development and UI/UX design. I specialize in creating stable, scalable applications that connect clean engineering with user-friendly design.
          </p>
          <div className="timeline-list">
            {timeline.map((item) => (
              <article key={item.year}>
                <span>{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
