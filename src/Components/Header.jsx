import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="top-header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/images/download.jpg" alt="Logo" className="logo-img" />
          <h1 className="logo-text" style={{color:"white"}}> DD Holidays And Travels</h1>
        </div>

        {/* Navigation Links */}
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/destinations" className="nav-link">
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink to="/packages" className="nav-link">
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
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
