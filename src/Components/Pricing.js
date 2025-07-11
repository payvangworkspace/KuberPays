import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../External CSS/Pricing.css'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

const pricingData = [
  {
    title: 'Startup',
    price: 'Free',
    setupFee: 'Setup Fees: Free',
    features: [
      'All Major Credit Cards (Domestic) - 2.00%',
      'Debit Cards (Domestic) - 2.00%',
      'Wallets (10+ options) - 2.00%',
      'Netbanking (40+ options) - 2.00%',
      'UPI - 2.00%',
      'American Express, JCB - 3.20%',
      'Settlement - T+2',
      'AMC - ₹2500',
    ],
  },
  {
    title: 'Premium',
    price: '₹20,000',
    setupFee: 'Setup Fees: ₹20,000',
    features: [
      'All Major Credit Cards (Domestic) - 1.90%',
      'Debit Cards (Domestic) - 1.50%',
      'Wallets (10+ options) - 1.90%',
      'Netbanking (40+ options) - 1.85%',
      'UPI - 1.25%',
      'American Express, JCB - 2.90%',
      'Settlement - T+1',
      'AMC - ₹2500',
    ],
  },
  {
    title: 'Enterprise',
    price: 'Write to Us',
    setupFee: 'Setup Fees: Contact Us',
    features: [
      'All Major Credit Cards (Domestic) - 1.85%',
      'Debit Cards (Domestic) - 1.25%',
      'Wallets (10+ options) - 1.85%',
      'Netbanking (40+ options) - 1.75%',
      'UPI - 1.00%',
      'American Express, JCB - 2.75%',
      'Settlement - Same Day',
      'AMC - ₹2500',
    ],
  },
];

const Pricing = () => {


  const navigate=useNavigate();



  function redirectToContact(){
    navigate("/contact")


  



  }



  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Flexible Pricing for Every Business</h2>
        <p className="section-subtitle">Choose a plan that scales with you.</p>
        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-price">{plan.price}</p>
              <p className="setup-fee">{plan.setupFee}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className="feature-icon" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-get-started" onClick={redirectToContact}>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
