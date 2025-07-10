import React, { useState } from "react";
import "../External CSS/Contact.css";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll respond shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Let’s Connect</h2>
          <p>We’re here to help. Reach out with any questions about KuberPays.</p>
          <div className="contact-details">
            <p><strong>📞</strong> +1-647-619-0777</p>
            <p><strong>✉️</strong> info@kuberpays.com</p>
            <p><strong>📍</strong> New Delhi, India</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label><FaUser /> Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label><FaEnvelope /> Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label><FaCommentDots /> Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
