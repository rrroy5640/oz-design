import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import brandingImage from "../assets/ozS4.jpg";
import webDevImage from "../assets/ozS1.jpg";
import videoProdImage from "../assets/ozS2.jpg";
import marketingImage from "../assets/ozS3.jpg";
import aboutHeaderImage from "../assets/ozback6.jpg";
import "./BookOnline.css";

const BookOnline = () => {
  const navigate = useNavigate();

  // Refs for parallax sections
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  // Hero parallax scroll
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Services section parallax
  const { scrollYProgress: servicesScrollProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });

  // Transform values for parallax effects
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "40%"]);
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(
    heroScrollProgress,
    [0, 0.5, 1],
    [1, 0.85, 0]
  );

  const servicesTitleY = useTransform(
    servicesScrollProgress,
    [0, 1],
    ["0px", "-40px"]
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleBooking = () => {
    navigate("/contact");
  };

  // Services data with detailed information
  const services = [
    {
      title: "Marketing & Advertising Consultation",
      duration: "1 Hour Session",
      image: brandingImage,
      description:
        "Elevate your brand's visibility with our comprehensive marketing consultation. We'll analyze your current strategy and provide actionable insights to maximize your ROI.",
      features: [
        "Market analysis and competitor research",
        "Social media strategy development",
        "SEO and content marketing planning",
        "Campaign optimization recommendations",
      ],
    },
    {
      title: "Brand Design Consultation",
      duration: "1 Hour Session",
      image: webDevImage,
      description:
        "Transform your brand identity with expert guidance. Our designers will help you create a memorable brand that resonates with your target audience.",
      features: [
        "Brand identity and visual direction",
        "Logo and typography recommendations",
        "Color palette and style guide",
        "Brand positioning strategies",
      ],
    },
    {
      title: "Web Development Consultation",
      duration: "1 Hour Session",
      image: videoProdImage,
      description:
        "Build a powerful digital presence with our web development expertise. We'll discuss your project requirements and outline the best technical approach.",
      features: [
        "Technology stack recommendations",
        "UX/UI design principles",
        "Website architecture planning",
        "Performance optimization strategies",
      ],
    },
    {
      title: "Video & Photography Consultation",
      duration: "1 Hour Session",
      image: marketingImage,
      description:
        "Bring your vision to life with professional video and photography guidance. We'll help you plan compelling visual content that tells your story.",
      features: [
        "Creative direction and concept development",
        "Production planning and logistics",
        "Equipment and technique recommendations",
        "Post-production workflow guidance",
      ],
    },
  ];

  return (
    <div className="book-online-page">
      {/* Hero Section with Parallax */}
      <header ref={heroRef} className="book-hero-section" role="banner">
        {/* Parallax Background */}
        <motion.div
          className="book-hero-background"
          style={{
            backgroundImage: `url(${aboutHeaderImage})`,
            y: heroY,
            scale: heroScale,
          }}
        />

        <div className="book-hero-overlay" aria-hidden="true"></div>

        {/* Parallax Content */}
        <motion.div
          className="book-hero-content"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            className="book-hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Book a Consultation
          </motion.h1>

          <motion.p
            className="book-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Schedule a one-on-one session with our expert team to discuss your
            project needs and explore creative solutions
          </motion.p>

          <motion.button
            className="book-hero-cta"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onClick={handleBooking}
            aria-label="Scroll to services to book consultation"
          >
            View Services
          </motion.button>
        </motion.div>
      </header>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        className="services-booking-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Container>
          {/* Floating Decorations */}
          <div className="floating-decoration decoration-circle-1"></div>
          <div className="floating-decoration decoration-circle-2"></div>

          <motion.h2
            className="services-booking-title"
            variants={fadeInUp}
            style={{ y: servicesTitleY }}
          >
            Our Consultation Services
          </motion.h2>

          <motion.p className="services-booking-subtitle" variants={fadeInUp}>
            Choose from our range of expert consultation sessions tailored to
            your specific needs. Each session is designed to provide maximum
            value and actionable insights.
          </motion.p>

          {services.map((service, index) => (
            <div key={index} className="service-item">
              <Card className="service-card">
                <Row className="g-0">
                  {/* Image Side - Alternating */}
                  <Col
                    lg={6}
                    md={12}
                    className={index % 2 === 0 ? "" : "order-lg-2"}
                  >
                    <motion.div
                      className="service-image-wrapper"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={index % 2 === 0 ? slideInLeft : slideInRight}
                    >
                      <img
                        src={service.image}
                        alt={`${service.title} consultation`}
                        className="service-image"
                        loading="lazy"
                      />
                      <div className="service-badge">{service.duration}</div>
                    </motion.div>
                  </Col>

                  {/* Content Side */}
                  <Col
                    lg={6}
                    md={12}
                    className={index % 2 === 0 ? "" : "order-lg-1"}
                  >
                    <motion.div
                      className="service-content"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={index % 2 === 0 ? slideInRight : slideInLeft}
                    >
                      <div className="service-number">{index + 1}</div>

                      <h3 className="service-title">{service.title}</h3>

                      <span className="service-duration">
                        {service.duration}
                      </span>

                      <p className="service-description">
                        {service.description}
                      </p>

                      <ul className="service-features">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      <button
                        className="service-cta-button"
                        onClick={handleBooking}
                        aria-label={`Request to book ${service.title}`}
                      >
                        Request to Book
                      </button>
                    </motion.div>
                  </Col>
                </Row>
              </Card>
            </div>
          ))}
        </Container>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="booking-cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Decorative Circles */}
        <div className="booking-cta-decoration cta-circle-1"></div>
        <div className="booking-cta-decoration cta-circle-2"></div>

        <Container>
          <div className="booking-cta-content">
            <motion.h2 className="booking-cta-title" variants={fadeInUp}>
              Ready to Get Started?
            </motion.h2>

            <motion.p className="booking-cta-text" variants={fadeInUp}>
              Don't wait to bring your vision to life. Book a consultation with
              our expert team today and take the first step towards achieving
              your goals. We're here to help you succeed.
            </motion.p>

            <motion.button
              className="booking-cta-button"
              variants={fadeInUp}
              onClick={handleBooking}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact us to book consultation"
            >
              Contact Us to Book
            </motion.button>
          </div>
        </Container>
      </motion.section>
    </div>
  );
};

export default BookOnline;
