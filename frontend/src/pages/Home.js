import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import DesignPrinciples from "../components/DesignPrinciples";
import ServiceCard from "../components/ServiceCard";
import { LearnMoreButton } from "../assets/LearnMoreButton.js";
import "./Home.css";

// Import images
import brandingImage from "../assets/oz1.jpg";
import webDevImage from "../assets/oz2.jpg";
import videoProdImage from "../assets/oz3.jpg";
import marketingImage from "../assets/oz4.jpg";
import headerImage from "../assets/ozback3.jpg";
import companyImage from "../assets/oz5.jpg";

const Home = () => {
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
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(
    heroScrollProgress,
    [0, 0.5, 1],
    [1, 0.8, 0]
  );
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 1.1]);

  const servicesTitleY = useTransform(
    servicesScrollProgress,
    [0, 1],
    ["0px", "-50px"]
  );

  // Pre-create parallax transforms for service cards
  const serviceCard0Y = useTransform(servicesScrollProgress, [0, 1], [0, -20]);
  const serviceCard1Y = useTransform(servicesScrollProgress, [0, 1], [0, -30]);
  const serviceCard2Y = useTransform(servicesScrollProgress, [0, 1], [0, -20]);
  const serviceCard3Y = useTransform(servicesScrollProgress, [0, 1], [0, -30]);

  const cardYTransforms = [
    serviceCard0Y,
    serviceCard1Y,
    serviceCard2Y,
    serviceCard3Y,
  ];

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

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Services data
  const services = [
    {
      title: "Branding & Identity Design",
      img: brandingImage,
      desc: "A strong brand is more than just a logo—it's a strategic asset that drives business growth. Our expert team creates memorable, consistent, and impactful branding strategies that help businesses stand out.",
    },
    {
      title: "Web Development & Digital Experiences",
      img: webDevImage,
      desc: "Your website is your digital storefront. We design and develop visually appealing, high-performance websites that engage users and drive conversions.",
    },
    {
      title: "Video & Photography Production",
      img: videoProdImage,
      desc: "Visual storytelling is key to brand success. Our professional video and photography team creates high-quality, customized content to enhance your brand's presence.",
    },
    {
      title: "Marketing & Advertising",
      img: marketingImage,
      desc: "As a full-service marketing agency, we craft custom digital marketing campaigns to increase visibility, drive engagement, and boost conversions through SEO, social media, and online advertising.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Parallax */}
      <header ref={heroRef} className="hero-section" role="banner">
        {/* Parallax Background */}
        <motion.div
          className="hero-background"
          style={{
            backgroundImage: `url(${headerImage})`,
            y: heroY,
            scale: heroScale,
          }}
        />

        <div className="hero-overlay" aria-hidden="true"></div>

        {/* Parallax Content */}
        <motion.div className="hero-content" style={{ opacity: heroOpacity }}>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Welcome to OZ Design Group
          </motion.h1>

          <motion.p className="hero-subtitle" animate={pulseAnimation}>
            Innovative & Creative Design Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <LearnMoreButton />
          </motion.div>
        </motion.div>
      </header>

      {/* Company Section */}
      <section className="company-section">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="company-card">
              <Row className="g-0">
                {/* Left side content */}
                <Col lg={6} md={12} className="d-flex align-items-center">
                  <div className="company-content">
                    <h2 className="company-title">
                      OZ Design Group – Crafting Unique Identities
                    </h2>
                    <p className="company-description">
                      OZ Design Group is a multi-disciplinary, independently
                      owned design studio specializing in branding, digital
                      experiences, web development, marketing, and visual
                      storytelling.
                    </p>
                    <p className="company-description">
                      We help businesses craft their unique identity through
                      compelling design, strategic marketing, and cutting-edge
                      web solutions. Explore our core design principles below!
                    </p>

                    <div className="design-principles-section">
                      <h3 className="design-principles-title">
                        Design Principles:
                      </h3>
                      <DesignPrinciples />
                    </div>
                  </div>
                </Col>

                {/* Right side image */}
                <Col lg={6} md={12}>
                  <div className="company-image-wrapper">
                    <img
                      src={companyImage}
                      alt="OZ Design Group creative workspace showcasing our design philosophy"
                      className="company-image"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Services Section with Parallax */}
      <motion.section
        ref={servicesRef}
        className="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <Container>
          <motion.h2
            className="services-title"
            variants={fadeInUp}
            style={{ y: servicesTitleY }}
          >
            Our Services
          </motion.h2>

          <Row>
            {services.map((service, index) => (
              <Col xs={12} sm={6} lg={6} xl={3} key={index}>
                <motion.div
                  variants={fadeInUp}
                  style={{ y: cardYTransforms[index] }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>
    </div>
  );
};

export default Home;
