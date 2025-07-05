import React, { useState } from "react";
import "../External CSS/RequestCallback.css";

const RequestCallback = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send to backend API or service
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="callback-section">
      <div className="callback-container">
        <div className="callback-text">
          <h2>Request a Callback</h2>
          <p>
            Have questions or need assistance? Leave your details and our experts will call you back
            at your convenience.
          </p>
        </div>

        <form className="callback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message (Optional)"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </section>
  );
};

export default RequestCallback;
