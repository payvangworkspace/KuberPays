import React from "react";
import "../External CSS/Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Flexible Pricing for Every Business</h2>
        <p className="section-subtitle">Choose a plan that scales with you.</p>

        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="pricing-card">
            <h3>Starter</h3>
            <p className="price">₹0<span>/month</span></p>
            <ul>
              <li>Upto ₹50K/month in payments</li>
              <li>Basic dashboard access</li>
              <li>Email support</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>

          {/* Business Plan */}
          <div className="pricing-card popular">
            <div className="badge">Most Popular</div>
            <h3>Business</h3>
            <p className="price">₹999<span>/month</span></p>
            <ul>
              <li>Upto ₹5L/month in payments</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>UPI & Wallets</li>
            </ul>
            <button className="pricing-btn">Start Now</button>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <ul>
              <li>Unlimited payments</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
              <li>24/7 Support</li>
            </ul>
            <button className="pricing-btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
