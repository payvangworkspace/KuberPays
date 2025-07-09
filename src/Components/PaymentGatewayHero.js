import React from "react";
import "../External CSS/PaymentGatewayHero.css";
import { Link } from "react-router-dom";

const PaymentGatewayHero = () => {
  return (
    <div className="payment-hero-kb">
      <div className="hero-content-kb">
        <h1 className="hero-title-kb">Powerful & Secure Payment Gateway</h1>
        <p className="hero-subtitle-kb">
          Accept online payments with speed, flexibility, and security — globally or locally.
        </p>
        <div className="hero-btn-parent-kb">
          <Link to="/contact"className="hero-btn-kb"style={{textDecoration:"none"}}>Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayHero;
