import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaPython, FaGem, FaCodeBranch, FaJs, FaJava, FaAndroid, FaPhp } from "react-icons/fa";
import "../External CSS/IntegrationSection.css";

const techItems = [
  { name: "iOS", icon: <FaApple className="icon apple" />, color: "purple" },
  { name: "Python", icon: <FaPython className="icon python" />, color: "yellow" },
  { name: "Ruby", icon: <FaGem className="icon ruby" />, color: "green" },
  { name: "Webhooks", icon: <FaCodeBranch className="icon webhook" />, color: "blue" },
  { name: "Javascript", icon: <FaJs className="icon javascript" />, color: "indigo" },
  { name: "Java", icon: <FaJava className="icon java" />, color: "orange" },
  { name: "Android", icon: <FaAndroid className="icon android" />, color: "teal" },
  { name: "PHP", icon: <FaPhp className="icon php" />, color: "red" }
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
        <div className="dev-technology-icons">
          {techItems.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`dev-tech-item ${tech.color}`}
            >
              {tech.icon}
              <p className="dev-tech-name">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
