import React from "react";
import "../External CSS/AboutUs.css";
import aboutImg from "../assets/about-kuberpays.png"; // Replace with your actual image path

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="About KuberPays" />
        </div>
        <div className="about-content">
          <h2>About KuberPays</h2>
          <p>
            At KuberPays, we are building the future of digital payments — fast,
            secure, and scalable. Our mission is to empower businesses and
            individuals with seamless transaction experiences that drive growth
            and trust.
          </p>
          <p>
            With a focus on cutting-edge technology and compliance, KuberPays
            ensures your transactions are always protected. From startups to
            enterprises, we help you move money confidently, every time.
          </p>
          <a href="#contact" className="about-btn">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
