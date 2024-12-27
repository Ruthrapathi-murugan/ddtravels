import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/images/download.jpg" alt="Logo" className="logo-img" />
          <h1 className="logo-text">DD Holidays And Travels</h1>
        </div>

        {/* Hamburger Menu (only visible on smaller screens) */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <NavLink 
                to="/" 
                className="nav-link" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/destinations" 
                className="nav-link" 
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/packages" 
                className="nav-link" 
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className="nav-link" 
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className="nav-link" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
