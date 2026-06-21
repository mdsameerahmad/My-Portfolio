import { Award, Clock, Rocket, Users } from "lucide-react";
import { motion } from "motion/react";

export function ImpactNumbers() {
  const stats = [
    { icon: Rocket, number: "15+", label: "Production apps", detail: "Built, tested, and deployed" },
    { icon: Clock, number: "7 days", label: "Fast delivery", detail: "Focused sprint rhythm" },
    { icon: Users, number: "30+", label: "Collaborations", detail: "Clients, teams, and peers" },
    { icon: Award, number: "100%", label: "Quality focus", detail: "Clean handoff and support" },
  ];

  return (
    <section className="stats-strip">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            className="stat-cell"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Icon size={22} />
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
            <p>{stat.detail}</p>
          </motion.div>
        );
      })}
    </section>
  );
}
