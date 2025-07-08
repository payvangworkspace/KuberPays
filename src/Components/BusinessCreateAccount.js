import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BusinessCreateAccount = () => {
  const navigate=useNavigate()

  const redirectToSignUp=()=>{
    navigate("/signup")

  }

  return (
    <section className="business-create-section">
      <div className="business-create-container">
        <h2 className="business-create-title">Join 493+ Businesses Today!</h2>
        <p className="business-create-subtitle">
          Start your journey with KivaPays and unlock seamless payment solutions.
        </p>
        <button className="business-create-button" onClick={redirectToSignUp}>
          <FaUserPlus className="button-icon" /> Create Your Account
        </button>
      </div>
    </section>
  );
};

export default BusinessCreateAccount;

// CSS (Separate file: BusinessCreateAccount.css)
const styles = `
.business-create-section {
  background: linear-gradient(135deg, #1e1e1e, #3a3a3a);
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  color: white;
}

.business-create-container {
  max-width: 800px;
}

.business-create-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #f8f8f8;
}

.business-create-subtitle {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: #bfbfbf;
}

.business-create-button {
  background: #ff7f50;
  color: #fff;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.business-create-button:hover {
  background: #ff6347;
  transform: translateY(-3px);
}

.button-icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .business-create-title {
    font-size: 2.5rem;
  }
  .business-create-subtitle {
    font-size: 1.2rem;
  }
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
