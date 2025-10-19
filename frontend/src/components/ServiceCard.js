import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container" onClick={handleFlip}>
      <motion.div
        className="flip-card"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="flip-card-front">
          <div
            className="service-image-backdrop"
            style={{ backgroundImage: `url(${service.img})` }}
          >
            <div className="service-overlay"></div>
          </div>
          <div className="service-front-content">
            <h3 className="service-title">{service.title}</h3>
            <p className="flip-hint">Click to learn more</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <div className="service-back-content">
            <h3 className="back-title">{service.title}</h3>
            <p className="service-description">{service.desc}</p>
            <p className="flip-hint-back">Click to flip back</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
