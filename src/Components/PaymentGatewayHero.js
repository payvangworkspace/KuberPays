import React from "react";
import "../External CSS/PaymentGatewayHero.css"

const PaymentGatewayHero = () => {
  return (
    <div className="payment-hero">
      <div className="hero-content">
        <h1 className="hero-title">Powerful & Secure Payment Gateway</h1>
        <p className="hero-subtitle">
          Accept online payments with speed, flexibility, and security — globally or locally.
        </p>
        <div className="hero-btn-parent">
        <button className="hero-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayHero;
