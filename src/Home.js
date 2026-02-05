import React, { useEffect, useState } from "react";
import { motion, AnimatePresence  } from "framer-motion"; 
import { useNavigate } from "react-router-dom";
import HomeButton from "./HomeButton";
import "./styles/Home.css";

const MotionHomeButton = motion(HomeButton);

const buttons = [
  { icon: "fa-solid fa-info", to: "/info", label: "INFO" },
  { icon: "fa-solid fa-play", to: "/portfolio", label: "PLAY" },
  { icon: "fa-solid fa-gear", to: "/configuration", label: "CONFIG" },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
};

const homeButtonVariants = {
  hidden: { opacity: 0, y: 0, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % buttons.length);
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? buttons.length - 1 : prev - 1
        );
      }

      if (e.key === "Enter") {
        navigate(buttons[activeIndex].to);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, navigate]);

  return (
  <motion.section
    className="h-screen flex flex-col items-center justify-center"
    id="menu"
    variants={sectionVariants}
    initial="hidden"
    animate="show"
  >
  <h3 className="absolute top-16 left-1/2 -translate-x-1/2 font-semibold z-50">
    Japhi&apos;s Portfolio
  </h3>
  <div className="flex flex-col items-center gap-14">
    
    {/* BOTONES */}
    <div className="flex flex-row items-center justify-center gap-32">
      {buttons.map((btn, index) => (
        <MotionHomeButton
          key={btn.to}
          icon={btn.icon}
          to={btn.to}
          variants={homeButtonVariants}
          className={index === activeIndex ? "active home-button" : "home-button"}
          layout={false}
          animate={{
            scale: index === activeIndex ? 1.4 : 1,
            opacity: index === activeIndex ? 1 : 0.6,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>

    {/* TEXTO */}
    <div className="h-10 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={buttons[activeIndex].label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="menu-label"
        >
          {buttons[activeIndex].label}
        </motion.div>
      </AnimatePresence>
    </div>

  </div>
  </motion.section>
  );
}

export default Home;
