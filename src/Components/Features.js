import React from "react";
import { useEffect } from "react";
import "../External CSS/Features.css";
import {
  FaLock,
  FaRocket,
  FaChartLine,
  FaMobileAlt,
  FaUsers,
  FaCogs,
  FaWallet,
  FaHandshake,
} from "react-icons/fa";

const Features = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      cards.forEach((card, i) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="section-title">Why Choose KuberPays?</h2>
        <p className="section-subtitle">
          The complete toolkit to power your business transactions.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Secure Payments</h3>
            <p>End-to-end encryption ensures safe and secure transactions.</p>
          </div>

          <div className="feature-card">
            <FaRocket className="feature-icon" />
            <h3>Instant Settlements</h3>
            <p>Get your money in minutes, not days.</p>
          </div>

          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Analytics Dashboard</h3>
            <p>Track and analyze payment insights in real time.</p>
          </div>

          <div className="feature-card">
            <FaMobileAlt className="feature-icon" />
            <h3>Mobile Optimized</h3>
            <p>Seamless experience across all screen sizes and devices.</p>
          </div>

          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Customer Support</h3>
            <p>24/7 live chat and dedicated account management.</p>
          </div>

          <div className="feature-card">
            <FaCogs className="feature-icon" />
            <h3>Developer Friendly</h3>
            <p>RESTful APIs, SDKs, and clear documentation.</p>
          </div>

          <div className="feature-card">
            <FaWallet className="feature-icon" />
            <h3>Wallet & UPI</h3>
            <p>Accept payments via wallets, UPI, cards, and more.</p>
          </div>

          <div className="feature-card">
            <FaHandshake className="feature-icon" />
            <h3>Easy Onboarding</h3>
            <p>Start accepting payments within minutes with minimal paperwork.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;