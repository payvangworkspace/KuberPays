import React from "react";
import "../External CSS/PaymentGateway.css";

const PaymentGatewayInfo = () => {
  return (
    <div className="payment-info-section">
      <div className="payment-info-wrapper">
        {/* LEFT: Content */}
        <div className="payment-info-content">
          <h1 className="payment-info-title">Payment Gateway</h1>
          <p className="payment-info-description">
            Our integrated payment gateway ensures a smooth and secure transaction experience for both businesses and customers. Accept payments through various channels including Credit/Debit Cards, UPI, Net Banking, and Wallets.
          </p>

          <div className="payment-info-list">
            <div className="payment-info-item">
              <h3>🔒 Secure & Encrypted</h3>
              <p>All transactions are protected with end-to-end encryption and comply with global security standards like PCI-DSS.</p>
            </div>

            <div className="payment-info-item">
              <h3>⚡ Real-Time Processing</h3>
              <p>Experience instant payment authorization, fast settlements, and real-time updates.</p>
            </div>

            <div className="payment-info-item">
              <h3>🌍 Multiple Payment Methods</h3>
              <p>Support for all major cards, UPI, net banking, wallets, and even QR code scanning.</p>
            </div>

            <div className="payment-info-item">
              <h3>📊 Dashboard & Insights</h3>
              <p>Track transactions, view reports, and manage refunds via your merchant dashboard.</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="payment-info-image">
          <img
            src="/payment-gateway.jpg"
            alt="Payment Gateway Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayInfo;
