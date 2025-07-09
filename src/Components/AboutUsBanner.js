import React from "react";
import "../External CSS/PaymentGatewayHero.css";
import { Link } from "react-router-dom";

const AboutUsHero = () => {
  return (
    <div className="payment-hero-kb">
      <div className="hero-content-kb">
        <h1 className="hero-title-kb">Who We Are</h1>
        <p className="hero-subtitle-kb">
          We are a team of passionate innovators dedicated to building secure, scalable, and user-friendly digital solutions for businesses across the globe.
        </p>
        <div className="hero-btn-parent-kb">
          <Link to="/contact" className="hero-btn-kb" style={{textDecoration:"none"}}>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
