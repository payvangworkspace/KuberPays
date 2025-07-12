import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../External CSS/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Logging in with:", { email, password });
    alert("We Will Start this feature soon.")
  };

  return (
    <div className="kuber-login-container">
      <div className="kuber-login-box">
        <img
          src={`${process.env.PUBLIC_URL}/logo2.png`}
          alt="KuberPays Logo"
          className="kuber-logo"
        />
        <h2 className="kuber-heading">Welcome Back</h2>
        <p className="kuber-subheading">Login to your KuberPays account</p>
        <form onSubmit={handleSubmit}>
          <div className="kuber-input-group">
            <FaUser className="kuber-input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="kuber-input-group">
            <FaLock className="kuber-input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="kuber-login-btn">Login</button>
        </form>
        <p className="kuber-forgot">
          <a href="#">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
