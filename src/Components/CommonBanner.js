import React from "react";
import { Link } from "react-router-dom";
import "../External CSS/CommonBanner.css"; 

const CommonBanner = ({title,imageUrl}) => {

  return (
    <div className="feature-banner" style={{background:`url(${imageUrl}) center/cover no-repeat`}}>
      <div className="overlay">
        <h1 className="feature-title">{title}</h1>
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">{title}</span>
        </nav>
      </div>
    </div>
  );
};

export default CommonBanner;