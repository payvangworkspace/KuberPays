import React, { useState, useEffect } from "react";
import "../External CSS/Navbar.css";
import { FaChevronDown, FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMenu(null);
  };

  const redirectSubMenu = (index, redirectLink) => {
    navigate(menuItems[index].links[redirectLink]);
    setIsMobileMenuOpen(false);
  };

  const redirectHome = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    {
      title: "Products",
      submenu: ["Payment Gateway", "Invoices", "Virtual Account","White Label Solution"],
      links: ["/payment-gateway", "/invoices", "/virtual-account","/white-label"],
    },
    { title: "Resources", submenu: ["Solutions & Features", "FAQ's", "Pricing","Terms & Conditions"], link: "/services" },
    {
      title: "Company",
      submenu: [
        "About Us",
        "Contact Us",
      ],
      links: [
        "/industries",
        "/finance",
        "/capital-market",
        "/enterprise-tech",
        "/manufacturing",
        "/healthcare",
        "/higher-education",
        "/logistics",
      ],
    },
   
    { title: "Developers", submenu: [], link: "/developers" },
  ];

  return (
    <motion.nav className="navbar enhanced-navbar" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="navbar-left">
        <img
          src={`${process.env.PUBLIC_URL}/logo2.png`}
          alt="Kuberpays Logo"
          className="navbar-logo"
          onClick={redirectHome}
        />
      </div>

      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="navbar-item"
            onMouseEnter={() => !isMobileMenuOpen && item.submenu.length && setActiveMenu(idx)}
            onMouseLeave={() => !isMobileMenuOpen && setActiveMenu(null)}
          >
            {item.submenu.length > 0 ? (
              <span
                className="navbar-link"
                onClick={() => isMobileMenuOpen && setActiveMenu(activeMenu === idx ? null : idx)}
              >
                {item.title} <FaChevronDown className="dropdown-icon" />
              </span>
            ) : (
              <Link
                to={item.link}
                className="navbar-link direct-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            )}

            <AnimatePresence>
              {item.submenu.length > 0 && activeMenu === idx && (
                <motion.ul
                  className="dropdown-menu show"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {item.submenu.map((option, subIdx) => (
                    <li
                      key={subIdx}
                      className="dropdown-item"
                      onClick={() => redirectSubMenu(idx, subIdx)}
                    >
                      {option}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      <motion.div className="navbar-right" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <div className="contact-info">
          <span className="phone-contact" onClick={() => (window.location.href = "tel:+447700098523")}><FaPhoneAlt className="icon" />+44 7700 098523</span>
          <span  onClick={() => (window.location.href = "mailto:info@unibanque.com")}><FaEnvelope className="icon" /> info@unibanque.com</span>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
