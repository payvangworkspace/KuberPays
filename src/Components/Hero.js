import React from "react";
import "../External CSS/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Power Your Payments with KuberPays</h1>
          <p>
            A modern, secure, and seamless payment experience tailored for businesses of all sizes. Accept, manage, and grow — all in one place.
          </p>
          <Link to="/contact" className="cta-button">Get Started</Link>
        </div>

        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/hero.jpg`} alt="KuberPays Dashboard" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
