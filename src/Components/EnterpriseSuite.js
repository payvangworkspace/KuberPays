import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../External CSS/EnterpriseSuite.css";

const features = [
  "Global Payment Acceptance",
  "AI-powered Risk Monitoring",
  "Custom Payment Routing",
  "Seamless ERP Integration",
  "Automated Reconciliation",
  "Enterprise-grade Support",
];

const EnterpriseSuite = () => {
  const navigate = useNavigate();

  const redirectToContact = () => {
    navigate("/contact");
  };

  return (
    <section className="enterprise-modern-section">
      <div className="enterprise-modern-wrapper">
        {/* Image Side */}
        <motion.div
          className="enterprise-modern-image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/enterprise.png" alt="Enterprise" />
        </motion.div>

        {/* Content Side */}
        <motion.div
          className="enterprise-modern-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Built for Global Enterprises</h2>
          <p>
            Scale your business confidently with KivaPays' secure, intelligent, and
            integrated financial tools for modern enterprises.
          </p>
          <ul>
            {features.map((feature, idx) => (
              <li key={idx}>
                <CheckCircle size={20} /> {feature}
              </li>
            ))}
          </ul>
          <button onClick={redirectToContact}>Get Started</button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseSuite;