import React from 'react';
import '../External CSS/Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-left">
          <img className="logo logo-footer" src={`${process.env.PUBLIC_URL}/logo2.png`} />
          {/* <p>Swift Code: <strong>KUBERPAYMENT</strong></p> */}
        <div className="footer-para-left">
          <p>
            <FaMapMarkerAlt className="icon" /> Kuber Pays, 113 Lakeshore Rd, West, Suite-163,<br />
             Mississauga ON L5H 1E9  Bifro House, Canada
          </p>
          <p className='phone-contact' onClick={() => (window.location.href = "tel:+1-647-619-0777")}><FaPhoneAlt className="icon"  /> +1-647-619-0777</p>
          <p className='phone-contact' onClick={() => (window.location.href = "mailto:info@kuberpayment.com")}><FaEnvelope className="icon" /> info@kuberpayment.com</p>
        </div>
        </div>

        <div className="footer-right">
          <p className="copyright">
            Copyright © 2025 Kuberpays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
