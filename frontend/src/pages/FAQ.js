import React, { useRef } from "react";
import { Container, Accordion } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/ozback5.webp";
import "./FAQ.css";

const FAQ = () => {
  const navigate = useNavigate();

  // Refs for parallax sections
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Hero parallax scroll
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Content section parallax
  const { scrollYProgress: contentScrollProgress } = useScroll({
    target: contentRef,
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

  const contentTitleY = useTransform(
    contentScrollProgress,
    [0, 1],
    ["0px", "-30px"]
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
        staggerChildren: 0.1,
      },
    },
  };

  const handleContact = () => {
    navigate("/contact");
  };

  // FAQ Categories
  const categories = [
    "General",
    "Services",
    "Branding",
    "Web Development",
    "Marketing",
  ];

  // FAQ Data with categories
  const faqs = [
    {
      category: "General",
      question: "What services does OZ Design Group offer?",
      answer: (
        <>
          <p>We specialize in four main areas:</p>
          <p>
            <strong>Branding & Identity Design:</strong> Creating memorable and
            impactful brand strategies.
          </p>
          <p>
            <strong>Web Development & Digital Experiences:</strong> Designing
            high-performance websites that engage users.
          </p>
          <p>
            <strong>Video & Photography Production:</strong> Providing custom
            visual content to enhance brand presence.
          </p>
          <p>
            <strong>Marketing & Advertising:</strong> Crafting custom campaigns
            through SEO, social media, and online advertising.
          </p>
        </>
      ),
    },
    {
      category: "Branding",
      question: "How do you approach branding and identity design?",
      answer:
        "Our approach goes beyond just designing a logo. We create a comprehensive brand strategy that reflects your business's values, connects with your audience, and helps you stand out in the market.",
    },
    {
      category: "Web Development",
      question: "Can you help with improving our existing website?",
      answer:
        "Absolutely! We specialize in redesigning and optimizing websites to ensure they are visually appealing, user-friendly, and effective in driving conversions. Whether it's performance optimization, mobile responsiveness, or a fresh design, we've got you covered.",
    },
    {
      category: "Services",
      question:
        "How do you create content for video and photography production?",
      answer:
        "Our expert team works closely with you to understand your brand's message and goals. From there, we produce high-quality, customized video and photography content that resonates with your target audience and enhances your brand's storytelling.",
    },
    {
      category: "General",
      question: "What types of businesses do you work with?",
      answer:
        "We work with businesses of all sizes, from startups to established brands, across a variety of industries. Whether you're looking to build your brand from the ground up or improve your existing marketing strategies, we tailor our services to meet your unique needs.",
    },
    {
      category: "Marketing",
      question: "How can marketing and advertising help my business?",
      answer:
        "Through tailored digital marketing strategies, we boost your online visibility, increase engagement, and drive conversions. Our team leverages SEO, social media marketing, and online advertising to create campaigns that work for your business goals.",
    },
    {
      category: "General",
      question:
        "Why should I choose OZ Design Group over other design agencies?",
      answer:
        "At OZ Design Group, we combine expert consulting with innovative design solutions. Our commitment to inclusivity, sustainability, and future-ready designs ensures that we not only meet your current needs but also set you up for long-term success.",
    },
    {
      category: "Services",
      question: "How do we get started with a project?",
      answer:
        "Getting started is easy! Simply reach out to us through our contact page, and we'll schedule a consultation to understand your needs and how we can help bring your vision to life.",
    },
    {
      category: "General",
      question:
        "What makes OZ Design Group different from other design studios?",
      answer:
        "We take a holistic approach to design, blending creativity with strategy to ensure that each project is not only visually appealing but also strategically sound. We are passionate about helping businesses craft unique identities that resonate with their audiences.",
    },
  ];

  return (
    <div className="faq-page">
      {/* Hero Section with Parallax */}
      <header ref={heroRef} className="faq-hero-section" role="banner">
        {/* Parallax Background */}
        <motion.div
          className="faq-hero-background"
          style={{
            backgroundImage: `url(${bgImage})`,
            y: heroY,
            scale: heroScale,
          }}
        />

        <div className="faq-hero-overlay" aria-hidden="true"></div>

        {/* Parallax Content */}
        <motion.div
          className="faq-hero-content"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            className="faq-hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            className="faq-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Find answers to common questions about our services, process, and
            how we can help your business grow
          </motion.p>
        </motion.div>
      </header>

      {/* FAQ Content Section */}
      <motion.section
        ref={contentRef}
        className="faq-content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Container>
          {/* Floating Decorations */}
          <div className="floating-decoration decoration-circle-1"></div>
          <div className="floating-decoration decoration-circle-2"></div>

          {/* Intro */}
          <motion.div className="faq-intro" variants={fadeInUp}>
            <h2 className="faq-intro-title">How Can We Help You?</h2>
            <p className="faq-intro-text">
              Browse through our most commonly asked questions below. Can't find
              what you're looking for? Feel free to contact us directly.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="faq-categories"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.span
                key={index}
                className="faq-category-badge"
                variants={fadeInUp}
              >
                {category}
              </motion.span>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            className="faq-accordion-wrapper"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Accordion className="faq-accordion">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Accordion.Item
                    eventKey={index.toString()}
                    className="faq-accordion-item"
                  >
                    <Accordion.Header className="faq-accordion-header">
                      <div style={{ width: "100%" }}>
                        <span className="faq-category-tag">{faq.category}</span>
                        <div>{faq.question}</div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="faq-accordion-body">
                      {typeof faq.answer === "string" ? (
                        <p>{faq.answer}</p>
                      ) : (
                        faq.answer
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </Container>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="faq-cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Container>
          <div className="faq-cta-card">
            {/* Decorative Circles */}
            <div className="faq-cta-decoration cta-circle-1"></div>
            <div className="faq-cta-decoration cta-circle-2"></div>

            <div className="faq-cta-content">
              <motion.h2 className="faq-cta-title" variants={fadeInUp}>
                Still Have Questions?
              </motion.h2>

              <motion.p className="faq-cta-text" variants={fadeInUp}>
                Our team is here to help! Contact us directly and we'll be happy
                to answer any questions you may have about our services,
                process, or how we can help your business succeed.
              </motion.p>

              <motion.button
                className="faq-cta-button"
                variants={fadeInUp}
                onClick={handleContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact us for more information"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </Container>
      </motion.section>
    </div>
  );
};

export default FAQ;
