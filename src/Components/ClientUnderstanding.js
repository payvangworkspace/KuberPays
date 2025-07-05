import React from "react";
import { useNavigate } from "react-router-dom";

const ClientUnderstanding = () => {
  const navigate=useNavigate();
const redirectToAbout=()=>{
navigate("/about")
}


  
  return (
    <section className="client-section">
      <div className="client-container">
        <div className="client-text">
          <h2 className="client-title">Understanding Our Clients</h2>
          <p className="client-description">
            We recognize the unique needs of our clients, delivering innovative payment solutions that streamline complex transactions.
            Our commitment to excellence ensures we remain at the forefront of the ever-evolving payments landscape.
            By staying ahead, we empower our clients with a competitive advantage in their industries.
          </p>
          <p className="client-description">
            Backed by cutting-edge security and seamless technology, we provide a robust platform that enhances your business operations and ensures maximum efficiency.
          </p>
          <button className="client-button" onClick={redirectToAbout}>Learn More</button>
        </div>
        <div className="client-image">
          <img src="/home-facility-bg.png" alt="Client engaging with technology" />
        </div>
      </div>
    </section>
  );
};

export default ClientUnderstanding;

// CSS (Separate file: ClientUnderstanding.css)
const styles = `
.client-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  transition: all 0.3s ease-in-out;
}

.client-container {
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.client-text {
  flex: 1;
  text-align: left;
}

.client-title {
  font-size: 3rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.client-description {
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 1.2rem;
}

.client-button {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  padding: 14px 24px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 91, 187, 0.3);
}

.client-button:hover {
  background: linear-gradient(135deg, #0056b3, #003d82);
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 91, 187, 0.4);
}

.client-image img {
  width: 100%;
  max-width: 550px;
  border-radius: 15px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
}

.client-image img:hover {
  transform: scale(1.03);
}

@media (max-width: 900px) {
  .client-container {
    flex-direction: column;
    text-align: center;
  }

  .client-text {
    text-align: center;
  }

  .client-button {
    display: inline-block;
  }
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
