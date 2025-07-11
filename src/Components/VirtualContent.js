import React from "react";
import "../External CSS/VirtualContent.css"; 
import { Link } from "react-router-dom";


const VirtualContent = () => {
    return (
      <div className="virtual-account-section">
        <h1 className="virtual-account-title">Smarter Transaction Banking with Virtual Accounts</h1>
        
        <div className="virtual-account-content">
          <p>
            The need for better control and visibility over their cash <strong>INFLOW</strong> and <strong>OUTFLOW</strong>—and 
            liquidity positions—has led corporates to seek smarter transaction banking alternatives like virtual accounts.
          </p>
  
          <p>
            These accounts are used to make and receive payments via <strong>NEFT, RTGS, IMPS</strong> on behalf of one physical account.
          </p>
  
          <p>
            Virtual accounts also offer corporates the ability to <strong>reconcile payments in real time</strong>. 
            <strong>Kuber Pays</strong> offers virtual accounts on demand to their corporate clients.
          </p>

          <div className="virtual-account-image">
          <img src={`${process.env.PUBLIC_URL}/about-us.jpg`} alt="Virtual Account Process" />
        </div>
  
          <ul className="virtual-account-benefits">
            <li>
              Corporates with multiple banking relationships, multiple accounts across different banks, 
              and a need to rationalize complex accounting structures can especially benefit from virtual accounts.
            </li>
            <li>
              They can virtually administer inter-company loans, calculate interest, increase cost efficiencies, 
              simplify cash and liquidity management, and increase straight-through processing (STP) rates in reconciliation.
            </li>
            <li>
              A <strong>Virtual Account Management (VAM)</strong> platform can help corporates create, manage, and monitor virtual accounts better.
            </li>
            <li>
              We offer benefits like a self-servicing <strong>VAM engine</strong>, a dashboard view to account information, and a sophisticated reporting module, 
              in addition to payments and liquidity management.
            </li>
            <li>
              VAM platforms can also complicate a bank’s ability to have a single comprehensive view of their customers.
            </li>
          </ul>
        </div>
        <div className="virtual-account-image">
        <img src={`${process.env.PUBLIC_URL}/Virtual-Accounts.jpg`} alt="VAM Dashboard" />
      </div>

      {/* <div className="signup-container">
      <Link to="/signup" className="signup-button">Sign Up Now</Link>
      </div>
       */}
      </div>
    );
  };

export default VirtualContent;
