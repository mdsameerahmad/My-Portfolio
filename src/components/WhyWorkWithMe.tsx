import { CheckCircle, Code, MessageCircle, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";

export function WhyWorkWithMe() {
  const reasons = [
    { icon: Shield, title: "Secure, stable builds", description: "Production-minded development with authentication, API, database, and deployment decisions handled carefully." },
    { icon: Zap, title: "Fast response rhythm", description: "Clear updates, quick iteration, and practical delivery without turning the work into noise." },
    { icon: CheckCircle, title: "On-time project completion", description: "I plan features around realistic milestones so the final product is usable, testable, and shipped." },
    { icon: MessageCircle, title: "Transparent communication", description: "You know what is being built, what changed, and what needs a decision before it becomes a problem." },
    { icon: Code, title: "Clean code habits", description: "Readable components, maintainable APIs, and UI details that are polished enough to represent the project well." },
  ];

  return (
    <section className="editorial-section section-pad">
      <div className="section-heading split-heading">
        <div>
          <div className="section-kicker"><span> 02</span> why work with me</div>
          <h2>Built the way serious projects <em>actually ship.</em></h2>
        </div>
        <p>Dedicated development, UI sensibility, and reliable communication across the full product cycle.</p>
      </div>

      <div className="reason-list">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.article
              className="reason-row"
              key={reason.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <span className="row-index">0{index + 1}</span>
              <Icon className="row-icon" size={24} />
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
