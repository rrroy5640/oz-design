import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutHeaderImage from "../assets/ozback1.jpg";
import ourBrandImage from "../assets/ozback2.jpg";
import "./About.css";

const About = () => {
  // Refs for parallax sections
  const heroRef = useRef(null);
  const brandRef = useRef(null);
  const whyUsRef = useRef(null);

  // Hero parallax scroll
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Brand section parallax
  const { scrollYProgress: brandScrollProgress } = useScroll({
    target: brandRef,
    offset: ["start end", "end start"],
  });

  // Why Us section parallax
  const { scrollYProgress: whyUsScrollProgress } = useScroll({
    target: whyUsRef,
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

  const brandImageY = useTransform(brandScrollProgress, [0, 1], ["0%", "25%"]);
  const brandImageScale = useTransform(
    brandScrollProgress,
    [0, 0.5, 1],
    [0.95, 1, 1.05]
  );

  const whyUsTitleY = useTransform(
    whyUsScrollProgress,
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Why Us data
  const whyUsData = [
    {
      title: "Creative Excellence",
      text: "At Oz Design Group, our team of innovative designers crafts unique and visually captivating solutions that ensure your brand stands out in today's competitive market.",
    },
    {
      title: "All-in-One Solutions",
      text: "We offer comprehensive services, from brand development and design to digital marketing strategies, providing a seamless, end-to-end experience for your business.",
    },
    {
      title: "Client-Focused Service",
      text: "Your success is our top priority. We invest time in understanding your business, industry, and audience, customizing our solutions to meet your needs and deliver outstanding results.",
    },
    {
      title: "Cutting-Edge Innovation",
      text: "Stay ahead with Oz Design Group's commitment to innovation and adaptability. We embrace the latest trends and technologies to keep your brand at the forefront of your industry.",
    },
    {
      title: "Clear Communication",
      text: "With Oz Design Group, you'll experience clear and open communication at every stage of the process, ensuring you're always informed and involved in key decisions.",
    },
    {
      title: "Ongoing Support",
      text: "Our dedicated team provides continuous support, building a long-term partnership that focuses on the sustained growth and success of your brand.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section with Parallax */}
      <header ref={heroRef} className="about-hero-section" role="banner">
        {/* Parallax Background */}
        <motion.div
          className="about-hero-background"
          style={{
            backgroundImage: `url(${aboutHeaderImage})`,
            y: heroY,
            scale: heroScale,
          }}
        />

        <div className="about-hero-overlay" aria-hidden="true"></div>

        {/* Parallax Content */}
        <motion.div
          className="about-hero-content"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            className="about-hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            About OZ Design Group
          </motion.h1>

          <motion.p
            className="about-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Crafting Unique Identities Through Innovation and Creativity
          </motion.p>
        </motion.div>
      </header>

      {/* Our Brand Section with Parallax */}
      <section ref={brandRef} className="our-brand-section">
        <Container>
          {/* Floating Decorations */}
          <div className="floating-decoration decoration-circle-1"></div>
          <div className="floating-decoration decoration-circle-2"></div>

          <Card className="brand-card">
            <Card.Body className="p-0">
              <Row className="g-0 align-items-center">
                {/* Left side image with Parallax */}
                <Col lg={6} md={12}>
                  <motion.div
                    className="brand-image-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInLeft}
                  >
                    <motion.img
                      src={ourBrandImage}
                      alt="Our Brand - OZ Design Group workspace"
                      className="brand-image"
                      style={{
                        y: brandImageY,
                        scale: brandImageScale,
                      }}
                      loading="lazy"
                    />
                  </motion.div>
                </Col>

                {/* Right side content */}
                <Col lg={6} md={12}>
                  <motion.div
                    className="brand-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInRight}
                  >
                    <h2 className="brand-title">Our Brand</h2>
                    <p className="brand-text">
                      The surest way to cope with change is to stay true to
                      yourself. We have always been an unusual combination of
                      business acumen and amazing creativity, right brain and
                      left brain thinking, rule makers and rule breakers. This
                      is exactly the kind of combination our clients need right
                      now, and it is achieved by design.
                    </p>
                    <p className="brand-text">
                      OZ Design offers modern brand consulting and brand
                      experiences. We want every employee to feel their greatest
                      creation - our culture - every day that we are at work.
                      Our staff and designers will provide a supportive service
                      to all our clients, helping them to design in a way that
                      complements their corporate vision and values.
                    </p>
                    <p className="brand-text">
                      We all live in a world transformed by technology, climate
                      change, and pandemics. We are facing some of the greatest
                      challenges in history. But we know who we are, where we
                      come from, and what we are here to do. We are committed to
                      gender equality and racial equality.
                    </p>
                  </motion.div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Why Us Section with Parallax */}
      <motion.section
        ref={whyUsRef}
        className="why-us-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <Container>
          <motion.h2
            className="why-us-title"
            variants={fadeInUp}
            style={{ y: whyUsTitleY }}
          >
            Why Choose Us
          </motion.h2>

          <Row>
            {whyUsData.map((item, index) => (
              <Col xs={12} sm={6} lg={4} key={index} className="mb-4">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ height: "100%" }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }}
                    style={{ position: "relative", height: "100%" }}
                  >
                    <Card className="why-us-card text-center p-4">
                      <Card.Body>
                        <Card.Title className="fw-bold mb-3">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-muted">
                          {item.text}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>
    </div>
  );
};

export default About;
