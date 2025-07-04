import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../External CSS/AnimatedStats.css";

const stats = [
  { label: "Clients Served", value: 1200, suffix: "+" },
  { label: "Transactions / Day", value: 75000, suffix: "+" },
  { label: "Global Partners", value: 45, suffix: "+" },
  { label: "Uptime Guarantee", value: 99.99, suffix: "%" },
];

const AnimatedStats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = end / (duration / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = parseFloat(start.toFixed(stat.value < 100 ? 2 : 0));
          return newCounts;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="modern-stats-section">
      <h2 className="modern-stats-title">Powering Payment Innovation at Scale</h2>
      <p className="modern-stats-subtitle">
        Delivering fast, secure, and reliable infrastructure across industries.
      </p>

      <div className="modern-stats-container">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="modern-stat-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="modern-stat-value"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {counts[index]}
              {stat.suffix}
            </motion.div>
            <div className="modern-stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;
