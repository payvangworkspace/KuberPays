import React from "react";
import "../External CSS/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Power Your Payments with KuberPays</h1>
          <p>
            A modern, secure, and seamless payment experience tailored for businesses of all sizes. Accept, manage, and grow — all in one place.
          </p>
          <a href="#features" className="cta-button">Get Started</a>
        </div>

        <div className="hero-image">
          <img src="./hero.jpg" alt="KuberPays Dashboard" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
