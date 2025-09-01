import React from "react";
import { motion } from "framer-motion"; 
import HomeButton from "./HomeButton";
import "./styles/Home.css";

const MotionHomeButton = motion(HomeButton);

const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
};

const homeButtonVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};



function Home() {
  return (
    <motion.section
      className="flex flex-row gap-10 overflow-x-hidden h-screen"
      id="menu"
      variants={sectionVariants}
      initial="hidden"
      animate="show"
    >
      <MotionHomeButton icon="fa-solid fa-info" to="/info" variants={homeButtonVariants}/>
      <MotionHomeButton icon="fa-solid fa-play" to="/portfolio" variants={homeButtonVariants}/>
      <MotionHomeButton icon="fa-solid fa-gear" to="/configuration" variants={homeButtonVariants}/>
    </motion.section>
  );
}

export default Home;
