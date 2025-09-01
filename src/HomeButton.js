import React from "react";
import "./styles/HomeButton.css";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

export default function HomeButton({ icon, className, to, ...motionProps }) {
  return (
    <Link to={to}>
      <motion.button id="home-button" className={className} href="/portfolio" {...motionProps} 
        whileHover={{ scale: 1.2 }}
        onHoverStart={event => {}}
        onHoverEnd={event => {}}>
        <i className={icon}></i>
      </motion.button>
    </Link>
  );
}
