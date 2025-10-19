import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar
      className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="navbar-brand-custom d-flex align-items-center"
        >
          <img
            src={`${process.env.PUBLIC_URL}/OzLogo-2.png`}
            alt="OZ Design Logo"
            width="140"
            height="40"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="navbar-toggler-custom"
        />

        <Navbar.Collapse id="navbar-nav" className="navbar-collapse-custom">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link-custom ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link-custom ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`nav-link-custom ${isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/book-online"
              className={`nav-link-custom ${
                isActive("/book-online") ? "active" : ""
              }`}
            >
              Book Online
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/faq"
              className={`nav-link-custom ${isActive("/faq") ? "active" : ""}`}
            >
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
