import React from 'react';
import '../External CSS/PrivacyPolicy.css';


const PrivacyPolicy = () => {
  return (
    <section className="privacy-wrapper">
      <div className="privacy-card">
        <h1 className="privacy-title">Privacy Policy</h1>

        <p><strong>KuberPays Canada</strong> ensures that your privacy is protected and secured. We use your personal data only as outlined in this policy.</p>

        <div className="privacy-section">
          <h2>Information We Collect</h2>
          <ul>
            <li>Name, designation, and contact information (including email, business details)</li>
            <li>Demographic data (postcode, preferences, interests)</li>
            <li>Relevant application information</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>Why We Collect Your Information</h2>
          <div className="privacy-grid">
            <div className="privacy-box">
              <h3>Personalized Experience</h3>
              <p>Helps us tailor our platform based on user behavior and feedback.</p>
            </div>
            <div className="privacy-box">
              <h3>Customer Support</h3>
              <p>Ensures timely responses to your inquiries and support needs.</p>
            </div>
            <div className="privacy-box">
              <h3>Application Processing</h3>
              <p>Used to evaluate your business profile for service eligibility.</p>
            </div>
            <div className="privacy-box">
              <h3>Marketing & Promotions</h3>
              <p>Allows us to send relevant offers, newsletters, and updates.</p>
            </div>
            <div className="privacy-box">
              <h3>Email Updates</h3>
              <p>Stay informed on product changes, company news, and alerts.</p>
            </div>
          </div>
        </div>

        <div className="privacy-section">
          <h2>Security & Data Storage</h2>
          <p>Your data is protected using <strong>256-bit SSL encryption</strong>. We also rely on third-party verification to safeguard against fraud.</p>
        </div>

        <div className="privacy-section">
          <h2>Cookies</h2>
          <p>Cookies improve your experience. You can accept or decline cookies at any time in your browser settings.</p>
        </div>

        <div className="privacy-section">
          <h2>Third-Party Links</h2>
          <p>We do not control or take responsibility for external site content or privacy policies.</p>
        </div>

        <div className="privacy-section">
          <h2>Updating Your Info</h2>
          <p>Need to change your personal or business details? Please reach out through our contact page to update your records.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
