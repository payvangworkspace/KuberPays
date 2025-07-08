import React from "react";
import { Link } from "react-router-dom";
import "../External CSS/InvoiceBanner.css"; 

export const InvoiceBanner = () => {
  return (
   <div className="invoice-banner">
       <div className="overlay">
         <h1 className="feature-title">Invoicing</h1>
         <nav className="breadcrumb">
           <Link to="/" className="breadcrumb-link">Home</Link>
           <span className="breadcrumb-separator">|</span>
           <span className="breadcrumb-current">Invoicing</span>
         </nav>
       </div>
     </div>
  )
}