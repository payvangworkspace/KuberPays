import React from "react";
import { FaLock, FaBolt, FaGlobe, FaChartBar } from "react-icons/fa";
import "../External CSS/PaymentGateway.css";

const PaymentGatewayInfo = () => {
  return (
    <section className="payment-info-section">
      <div className="payment-info-wrapper">
        {/* LEFT: Text Content */}
        <div className="payment-info-content">
          <h1 className="payment-info-title">Secure & Scalable Payment Gateway</h1>
          <p className="payment-info-description">
            Seamlessly accept payments via Cards, UPI, Net Banking, and Wallets with industry-grade security and real-time processing. Empower your business with flexible, fast, and reliable payment infrastructure.
          </p>

          <div className="payment-info-list">
            <div className="payment-info-item">
              <div className="icon"><FaLock /></div>
              <div>
                <h3>Secure & Encrypted</h3>
                <p>End-to-end encryption with PCI-DSS compliance to ensure data protection.</p>
              </div>
            </div>

            <div className="payment-info-item">
              <div className="icon"><FaBolt /></div>
              <div>
                <h3>Real-Time Processing</h3>
                <p>Instant authorizations, faster settlements, and live transaction tracking.</p>
              </div>
            </div>

            <div className="payment-info-item">
              <div className="icon"><FaGlobe /></div>
              <div>
                <h3>Multiple Payment Methods</h3>
                <p>Support for Cards, UPI, Netbanking, Wallets, and QR-based payments.</p>
              </div>
            </div>

            <div className="payment-info-item">
              <div className="icon"><FaChartBar /></div>
              <div>
                <h3>Dashboard & Insights</h3>
                <p>Comprehensive reporting tools and refund management in a unified dashboard.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Illustration */}
        <div className="payment-info-image">
          <img
            src={`${process.env.PUBLIC_URL}/payment-gateway.jpg`}
            alt="Payment Gateway Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentGatewayInfo;
