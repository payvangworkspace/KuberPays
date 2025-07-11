import React, { useState } from "react";
import Swal from "sweetalert2";  // Import SweetAlert2
import "../External CSS/ContactForm.css";

const ContactForm = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle change of form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to validate form and call onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form (check if all fields are filled)
    const { name, email, phone, subject, message } = formData;
    if (name && email && phone && subject && message) {
      onFormComplete();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all the required fields.",
        confirmButtonColor: "#1E88E5", // Customize button color
      });
    }
  };

  // Function to be called when form is completely filled and valid
  const onFormComplete = () => {
    // SweetAlert for success
    Swal.fire({
      icon: "success",
      title: "Thank you for your message!",
      text: "We will get back to you shortly.",
      confirmButtonText: "Close",
      confirmButtonColor: "#1E88E5", // Customize button color
    }).then(() => {
      // Clear the form fields after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    });

    // Here you can add logic to send data to a server if needed
    console.log("Form submitted successfully!");
  };

  return (
    <div className="contact-container">
      <div id="contact-card">
        {/* Left Illustration */}
        <div className="illustration">
          <img
            src="/contact-comment.png"
            alt="Illustration"
            className="illustration-img"
          />
        </div>

        {/* Right Form Section */}
        <div className="form-section">
          <h2 className="form-title">Leave A Message</h2>
          <p className="form-description">
            Drop us a note if you have questions about our services, or if you
            want to partner with us.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name*"
                className="input-field"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="Email*"
                className="input-field"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Phone*"
                className="input-field"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Subject*"
                className="input-field"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              placeholder="Your Message*"
              className="input-field textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className="submit-button">
              Send A Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;