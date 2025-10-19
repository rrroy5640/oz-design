import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import contactImage from "../assets/ozback4.jpg";
import "./Contact.css";

const Contact = () => {
  // Refs for parallax sections
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const imageRef = useRef(null);

  // Hero parallax scroll
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Info section parallax
  const { scrollYProgress: infoScrollProgress } = useScroll({
    target: infoRef,
    offset: ["start end", "end start"],
  });

  // Image section parallax
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Transform values for parallax effects
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "35%"]);
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(
    heroScrollProgress,
    [0, 0.5, 1],
    [1, 0.85, 0]
  );

  const infoTitleY = useTransform(infoScrollProgress, [0, 1], ["0px", "-30px"]);

  const contactImageY = useTransform(
    imageScrollProgress,
    [0, 1],
    ["0%", "20%"]
  );
  const contactImageScale = useTransform(
    imageScrollProgress,
    [0, 0.5, 1],
    [0.95, 1, 1.05]
  );

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Locations data
  const locations = [
    {
      city: "Sydney",
      address: "Level 6, 8 Help Street, Chatswood NSW 2067",
      icon: "🏢",
    },
    {
      city: "Melbourne",
      address: "Level 8, 699 Collins Street, Docklands VIC 3008",
      icon: "🏙️",
    },
    {
      city: "Brisbane",
      address: "Level 1, 7 Clunies Ross Court, Eight Miles Plains QLD 4113",
      icon: "🌆",
    },
    {
      city: "Hobart",
      address: "Level 5, 24 Davey Street, Hobart TAS 7000",
      icon: "🏛️",
    },
  ];

  // Contact methods data
  const contactMethods = [
    {
      title: "Call Us",
      icon: "📞",
      text: "Speak directly with our team",
      link: "tel:1300175598",
      linkText: "130 017 5598",
    },
    {
      title: "Email Us",
      icon: "📧",
      text: "Send us your inquiries",
      link: "mailto:admin@ozdesigngroup.com.au",
      linkText: "Send Email",
    },
    {
      title: "Visit Us",
      icon: "📍",
      text: "Come to our office",
      link: "#locations",
      linkText: "View Locations",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section with Parallax */}
      <header ref={heroRef} className="contact-hero-section" role="banner">
        {/* Parallax Background */}
        <motion.div
          className="contact-hero-background"
          style={{
            backgroundImage: `url(${contactImage})`,
            y: heroY,
            scale: heroScale,
          }}
        />

        <div className="contact-hero-overlay" aria-hidden="true"></div>

        {/* Parallax Content */}
        <motion.div
          className="contact-hero-content"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            className="contact-hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Get In Touch
          </motion.h1>

          <motion.p
            className="contact-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let's discuss how we can help bring your vision to life. Our team is
            ready to assist you every step of the way.
          </motion.p>
        </motion.div>
      </header>

      {/* Contact Info Section */}
      <motion.section
        ref={infoRef}
        className="contact-info-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <Container>
          {/* Floating Decorations */}
          <div className="floating-decoration decoration-circle-1"></div>
          <div className="floating-decoration decoration-circle-2"></div>

          <motion.h2
            className="contact-section-title"
            variants={fadeInUp}
            style={{ y: infoTitleY }}
            id="locations"
          >
            Our Locations
          </motion.h2>

          <Row className="location-cards-wrapper">
            {locations.map((location, index) => (
              <Col xs={12} sm={6} md={6} lg={3} key={index}>
                <motion.div
                  variants={fadeInUp}
                  className="location-card-wrapper"
                >
                  <Card className="location-card">
                    <Card.Body className="location-card-body">
                      <div className="location-icon">{location.icon}</div>
                      <h3 className="location-city">{location.city}</h3>
                      <p className="location-address">{location.address}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      {/* Contact Methods Section */}
      <motion.section
        className="contact-methods-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <Container>
          <motion.h2 className="contact-section-title" variants={fadeInUp}>
            How to Reach Us
          </motion.h2>

          <Row>
            {contactMethods.map((method, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card className="contact-method-card">
                    <Card.Body className="contact-method-card-body">
                      <div className="contact-method-icon">{method.icon}</div>
                      <h3 className="contact-method-title">{method.title}</h3>
                      <p className="contact-method-text">{method.text}</p>
                      <a
                        href={method.link}
                        className="contact-method-link"
                        aria-label={`${method.title} - ${method.linkText}`}
                      >
                        {method.linkText}
                      </a>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      {/* Image with CTA Section */}
      <section ref={imageRef} className="contact-image-section">
        <Container>
          <Card className="contact-image-card">
            <Row className="g-0">
              {/* Left side image with Parallax */}
              <Col lg={6} md={12}>
                <motion.div
                  className="contact-image-wrapper"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.img
                    src={contactImage}
                    alt="OZ Design Group office environment"
                    className="contact-image"
                    style={{
                      y: contactImageY,
                      scale: contactImageScale,
                    }}
                    loading="lazy"
                  />
                </motion.div>
              </Col>

              {/* Right side content */}
              <Col lg={6} md={12}>
                <motion.div
                  className="contact-cta-content"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="contact-cta-title">
                    Ready to Start Your Project?
                  </h2>
                  <p className="contact-cta-text">
                    Whether you need branding, web development, marketing, or
                    creative services, our expert team is here to help. Contact
                    us today to discuss your project and discover how we can
                    transform your vision into reality.
                  </p>
                  <a
                    href="mailto:admin@ozdesigngroup.com.au"
                    className="contact-cta-button"
                    aria-label="Send us an email"
                  >
                    Start a Conversation
                  </a>
                </motion.div>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
