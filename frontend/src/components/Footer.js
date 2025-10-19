import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const locations = [
    {
      city: "Sydney",
      address: "Level 6, 8 Help Street, Chatswood NSW 2067",
    },
    {
      city: "Melbourne",
      address: "Level 8, 699 Collins Street, Docklands VIC 3008",
    },
    {
      city: "Brisbane",
      address: "Level 1, 7 Clunies Ross Court, Eight Miles Plains QLD 4113",
    },
    {
      city: "Hobart",
      address: "Level 5, 24 Davey Street, Hobart TAS 7000",
    },
  ];

  return (
    <footer className="footer-custom">
      {/* Decorative Circles */}
      <div className="footer-decoration footer-circle-1"></div>
      <div className="footer-decoration footer-circle-2"></div>

      <Container className="footer-content">
        <Row>
          {/* Company Info */}
          <Col lg={4} md={6} className="mb-4">
            <h3 className="footer-title">OZ Design Group</h3>
            <p className="footer-subtitle">
              Crafting Unique Identities Through Innovation and Creativity
            </p>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book-online" className="footer-link">
                  Book Online
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6} className="mb-4">
            <h4 className="footer-section-title">Contact Us</h4>
            <ul className="footer-contact-info">
              <li>
                <span>Phone:</span>
                <a href="tel:1300175598">130 017 5598</a>
              </li>
              <li>
                <span>Email:</span>
                <a href="mailto:admin@ozdesigngroup.com.au">
                  admin@ozdesigngroup.com.au
                </a>
              </li>
            </ul>
          </Col>

          {/* Locations */}
          <Col lg={3} md={6} className="mb-4">
            <h4 className="footer-section-title">Our Offices</h4>
            {locations.map((location, index) => (
              <div key={index} className="footer-location">
                <div className="footer-location-name">{location.city}</div>
                <div className="footer-location-address">
                  {location.address}
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} OZ Design Group. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
