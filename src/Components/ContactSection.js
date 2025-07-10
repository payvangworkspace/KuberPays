import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../External CSS/ContactSection.css";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    info: "info@kuberpayment.com",
    subtitle: "Support 24/7",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    info: "+1-647-619-0777",
    subtitle: "Free Consultation",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    info: "Kuber Pays, 113 Lakeshore Rd, West, Suite-163, Mississauga ON L5H 1E9  Bifro House, Canada",
  },
];

const ContactSection = () => {
  return (
    <section className="contact-section">
      {contactDetails.map((item, index) => (
        <div className="contact-section__card" key={index}>
          <div className="contact-section__icon">{item.icon}</div>
          <div className="contact-section__info">
            <h3 className="contact-section__title">{item.title}</h3>
            <p className="contact-section__main">{item.info}</p>
            <p className="contact-section__subtitle">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContactSection;
