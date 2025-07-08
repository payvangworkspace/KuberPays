import React from "react";
import { Link } from "react-router-dom";
// import "../FeatureBanner.css"; 

const CommonBanner = ({title,imageUrl}) => {
  return (
    <div className="feature-banner" style={{


        
    }}>
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

const styles = `
.feature-banner {
    position: relative;
    width: 100%;
    height: 300px;
    background: url("../public/features.jpg") center/cover no-repeat;
  }
  
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }
  
  .feature-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .breadcrumb {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  
  .breadcrumb-link {
    color: #ffcc00;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }
  
  .breadcrumb-link:hover {
    color: white;
  }
  
  .breadcrumb-separator {
    margin: 0 10px;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .breadcrumb-current {
    color: rgba(255, 255, 255, 0.7);
  }
  
`;
document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);