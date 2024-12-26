import React from "react";
import "./Footer.css"; // Import the footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Logo Section */}
          <div className="footer-column">
            <div className="footer-logo">
              <a href="/">
                <img
                  src="/images/logo-icon.png"
                  alt="DD Holidays and Travels"
                  className="footer-logo-image"
                />
              </a>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="footer-column">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-menu">
              <li>
                <a href="/car-rental">Car Rental</a>
              </li>
              <li>
                <a href="/tempo-traveller">Tempo Traveller Rental</a>
              </li>
              <li>
                <a href="/tour-packages">Tour Packages</a>
              </li>
              <li>
                <a href="/bus-rental">Bus Rental</a>
              </li>
              <li>
                <a href="/corporate-booking">Corporate Booking</a>
              </li>
            </ul>
          </div>

          {/* Tour Packages Section */}
          <div className="footer-column">
            <h3 className="footer-title">Tour Packages</h3>
            <ul className="footer-menu">
              <li>
                <a href="/family-tour">Family Tour Package</a>
              </li>
              <li>
                <a href="/honeymoon-tour">Honeymoon Tour Package</a>
              </li>
              <li>
                <a href="/pilgrimage-tour">Pilgrimage Tour Package</a>
              </li>
              <li>
                <a href="/corporate-tour">Corporate Tour Package</a>
              </li>
              <li>
                <a href="/kerala-tour">Kerala Tour Package</a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="footer-column">
            <h3 className="footer-title">Contact Us</h3>
            <p>
              <i className="fa fa-mobile" aria-hidden="true"></i>{" "}
              <a href="tel:+919500996626">+9195009 96626</a>
            </p>
            <p>
              <i className="fa fa-whatsapp" aria-hidden="true"></i>{" "}
              <a
                href="https://wa.me/919500996626"
                target="_blank"
                rel="noopener noreferrer"
              >
                +9195009 96626
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Sub-Footer Section */}
      <div className="sub-footer">
        <p>
          Copyright © <strong>DD Holidays and Travels</strong> 2023 - All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
