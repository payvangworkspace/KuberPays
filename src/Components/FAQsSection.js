import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../External CSS/FAQsSection.css';


const faqData = [
  { question: 'What documents are required for onboarding?',
    answer: (
      <>
      <p style={{padding:"0px"}}>As part of the customer onboarding process, the following documents will have to be submitted.</p>
      <ul style={{padding:"15px"}}>
        <li>Certificate of Incorporation</li>
        <li>Memorandum & Articles of Association</li>
        <li>Registered Office Address Proof such as Utility Bill or Bank Statement</li>
        <li>Operating License</li>
        <li>Valid Photo ID for Directors such as Passport</li>
        <li>Director Residential Address Proof Such as Utility Bill or Bank</li>
      </ul>
      </>
    ),
  },
  { question: 'How long does it take to provide settlements?', answer: '7 to 14 days depending on the merchant business types' },
  { question: 'Do merchants get access to their own portal?', answer: 'Merchants have access to their own portal, and they can transfer settlement funds to their own account once they are cleared.' },
  { question: 'What percentage commission do you charge?', answer: 'This depends on your business type, geographic location, and other various factors. Please contact the sales team through the website for more information.' },
  { question: 'How does the integration happen?', answer: 'We will provide documentation and API details to your IT team and we will assist you until you are fully operational.' },
  { question: 'Are any businesses and product restricted?',
    answer: (
      <ul style={{padding:"15px"}}>
        <li>Pharmaceuticals or illegal drugs</li>
        <li>Explicit content</li>
        <li>Unauthorized Forex trading</li>
      </ul>
    ),
  },
];

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-content">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{item.question}</h3>
                  <span className="faq-icon">{activeIndex === index ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
                <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`} >{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-image">
          <img src={`${process.env.PUBLIC_URL}/image.png`} alt="FAQ Illustration" />
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
