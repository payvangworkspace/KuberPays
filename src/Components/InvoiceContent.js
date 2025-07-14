import React from "react";
import "../External CSS/Invoicingcontent.css"; 
import { Link } from "react-router-dom";


const InvoicingContent = () => {
  return (
    <>
    <div className="invoicing-section">
      <h1 className="invoicing-title">GST Invoicing Software for All Businesses</h1>
      
      <div className="invoicing-content">
        <p>
          <strong>Kuber Pays</strong> offers online invoicing software that helps you create professional invoices, 
          automatically send payment reminders, and get paid faster online. 
          Send and manage invoices from anywhere, anytime, and accept payments online.
        </p>

        <h3>Workflow Automation</h3>
        <p>
          Automate tedious recurring tasks, from invoicing workflows to payment reminders. 
          Sit back while <strong>Kuber Pays Invoice</strong> takes care of them automatically.
        </p>

        <h3>Easy Collaboration</h3>
        <p>
          Don't waste time with lengthy emails — communicate with your clients in real time. 
          Make deals, discuss prices, and negotiate terms and conditions all in one place - 
          the Client Portal of <strong>kuberpays.com</strong>.
        </p>
      </div>

      <div className="invoicing-image">
        <img src={`${process.env.PUBLIC_URL}/invoicing.jpg`} alt="Invoicing Process" />
      </div>
      {/* <div className="signup-container">
      <Link to="/signup" className="signup-button">Sign Up Now</Link>
      </div> */}
    </div>
     <div className="signup-container">
      <Link to="/signup" className="signup-button">Sign Up Now</Link>
      </div>
</>
  );
};

export default InvoicingContent;
