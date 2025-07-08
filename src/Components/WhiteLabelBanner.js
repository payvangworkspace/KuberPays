import React from "react";
import { Link } from "react-router-dom";
import "../External CSS/InvoiceBanner.css"; 

export const WhiteLabelBanner = () => {
  return (
   <div className="invoice-banner">
       <div className="overlay">
         <h1 className="feature-title">White Label Solutions</h1>
         <nav className="breadcrumb">
           <Link to="/" className="breadcrumb-link">Home</Link>
           <span className="breadcrumb-separator">|</span>
           <span className="breadcrumb-current">White Label Solutions</span>
         </nav>
       </div>
     </div>
  )
}