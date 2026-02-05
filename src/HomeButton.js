import React from "react";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

export default function HomeButton({ icon, className, to, ...motionProps }) {
  return (
    <Link to={to}>
      <motion.button className={"home-button " + className} href="/portfolio" {...motionProps}>
        <i className={icon}></i>
      </motion.button>
    </Link>
  );
}
