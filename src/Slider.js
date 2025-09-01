import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles/Slider.css";
import { motion } from "framer-motion";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 4 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 3, slidesToSlide: 3 },
  mobile: { breakpoint: { max: 767, min: 464 }, items: 2, slidesToSlide: 1 },
};

const Slider = ({ setSelectedIndex, Projects }) => {
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
      >
        {Projects.map((project, index) => (
          <motion.div
            className="slider"
            key={index}
            onClick={() => setSelectedIndex(index)}
            initial={{ opacity: 0, y: 20 }}
            animate={loadedImages[index] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              onLoad={() =>
                setLoadedImages((prev) => ({ ...prev, [index]: true }))
              }
            />
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
