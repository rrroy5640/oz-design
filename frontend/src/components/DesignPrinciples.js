import React from "react";
import { motion } from "framer-motion";
import "./DesignPrinciples.css";

const DesignPrinciples = () => {
  const principles = [
    { name: "Balance", color: "#6a1b9a" },
    { name: "Contrast", color: "#5c6bc0" },
    { name: "Emphasis", color: "#ab47bc" },
    { name: "Movement", color: "#42a5f5" },
    { name: "Pattern", color: "#7e57c2" },
    { name: "Rhythm", color: "#5c6bc0" },
    { name: "Unity", color: "#8e24aa" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="principles-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {principles.map((principle, index) => (
        <motion.div
          key={principle.name}
          className="principle-badge"
          variants={item}
          whileHover={{
            scale: 1.15,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: `linear-gradient(135deg, ${principle.color}, ${principle.color}dd)`,
          }}
        >
          <span className="principle-name">{principle.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DesignPrinciples;
