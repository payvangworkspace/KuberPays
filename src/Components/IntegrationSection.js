import React from "react";
import { motion } from "framer-motion";
import {
  FaApple,
  FaPython,
  FaGem,
  FaCodeBranch,
  FaJsSquare,
  FaJava,
  FaAndroid,
  FaPhp
} from "react-icons/fa";
import "../External CSS/IntegrationSection.css";

const techItems = [
  { name: "iOS", icon: <FaApple />, color: "#000000" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Ruby", icon: <FaGem />, color: "#CC342D" },
  { name: "Webhooks", icon: <FaCodeBranch />, color: "#6c757d" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4" }
];

const IntegrationSection = () => {
  return (
    <div className="dev-integration-container">
      <div className="dev-integration-card">
        <div className="dev-integration-content">
          <h2 className="dev-title">Simplistic Integration Ever</h2>
          <p className="dev-description">
            Integrating payments with KuberPays is seamless with well-documented SDKs, RESTful APIs, and plugins for all major platforms and languages.
          </p>
          <p className="dev-sub-heading">Complete integration with…</p>
          <ul className="dev-integration-list">
            <li>Client libraries /APIs for PHP, Python, JAVA, NODE.Js, .NET</li>
            <li>Web Checkout: JS</li>
            <li>Mobile SDKs: iOS / Android</li>
            <li>Shopping Cart plugins: Prestashop, OpenCart, WooCommerce, Magento</li>
            <li>Hybrid Apps: Cordova</li>
          </ul>
          <p className="dev-final-note">
            Comprehensive Documentation, reference apps, and more… Integrate your site in real-time and start payment collection instantly.
          </p>
        </div>
        <div className="dev-tech-icon-parent">
        <div className="dev-technology-icons">
          {techItems.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="dev-tech-item"
              style={{ color: tech.color }}
            >
              <div className="dev-icon">{tech.icon}</div>
              <p className="dev-tech-name">{tech.name}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
