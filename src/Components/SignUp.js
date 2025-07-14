import { useState } from "react";
import Swal from "sweetalert2";
import "../External CSS/Signup.css";
import { useNavigate } from "react-router-dom";
// import libphonenumber from "libphonenumber-js";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    panSsn: "",
    website: "",
    gstVat: "",
  });

  const [errors, setErrors] = useState({ confirmPassword: "" });
  const navigate = useNavigate();

  const validatePasswordMatch = () => {
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match!" }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      return true;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      setFormData((prevData) => ({ ...prevData, username: e.target.value }));
    }

    if (e.target.name === "confirmPassword") {
      validatePasswordMatch();
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === "confirmPassword") {
      validatePasswordMatch();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePasswordMatch()) {
      Swal.fire({ icon: "error", title: "Error", text: "Passwords do not match!" });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      text: "Welcome to KuberPays!",
      confirmButtonText: "Proceed",
    }).then(() => {
      console.log("Form submitted:", formData);
   
    });
  };

  return (
    <div className="register-container">
      <div className="register-image"></div>
      <div className="register-form-container">
        <div className="register-card">
          <h2 className="register-header">Welcome To Kuber Pays</h2>
          <p className="register-subtext">Open your Kuber Pays account now</p>
          <form onSubmit={handleSubmit} className="register-form">
            <input type="text" name="name" placeholder="Full Name*" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="International Phone Number*" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="company" placeholder="Company Name*" value={formData.company} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address (Used as Username)*" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password*" value={formData.password} onChange={handleChange} required />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.confirmPassword ? "input-error" : ""}
              required
            />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            <input type="text" name="businessName" placeholder="Business Name*" value={formData.businessName} onChange={handleChange} required disabled={errors.confirmPassword} />
            <input type="text" name="panSsn" placeholder="PAN / SSN (8-15 Characters)*" value={formData.panSsn} onChange={handleChange} required disabled={errors.confirmPassword} />
            <input type="text" name="gstVat" placeholder="GST / VAT (10-20 Characters)*" value={formData.gstVat} onChange={handleChange} required disabled={errors.confirmPassword} />
            <input type="url" name="website" placeholder="Website (Optional)" value={formData.website} onChange={handleChange} disabled={errors.confirmPassword} />
            <button type="submit" className="register-button" disabled={errors.confirmPassword}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
