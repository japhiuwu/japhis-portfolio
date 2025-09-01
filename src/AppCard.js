import React, { useState } from "react";
import "./styles/AppCard.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function AppCard({ selectedIndex, Projects }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="info-section">
      <div className="container">
        <AnimatePresence mode="wait">
          {/* El key es importante para que AnimatePresence detecte el cambio */}
          <motion.article
            key={selectedIndex}
            className="info-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
          >
            <h3 id="project-title">{Projects[selectedIndex].title}</h3>
            <div id="text">
              <p id="info" className="text-xl">{Projects[selectedIndex].description}</p>
              <div className="technologies">
                {Projects[selectedIndex].technologies.map((technology, index) => (
                  <motion.img
                    key={index}
                    className="technology"
                    src={technology}
                    alt={technology}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  />
                ))}
              </div>
              <ul id="list">
                {Projects[selectedIndex].keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="links">
              {Projects[selectedIndex].website && (
                <Link
                  to={Projects[selectedIndex].website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="web"></button>
                </Link>
              )}
              {Projects[selectedIndex].github && (
                <Link
                  to={Projects[selectedIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="github"></button>
                </Link>
              )}
            </div>
          </motion.article>

          {/* Imagen principal con animación */}
          <motion.img
            key={`img-${selectedIndex}`} // clave diferente para que también se anime
            src={Projects[selectedIndex].images[0]}
            alt="Captura de"
            id="cover"
            onLoad={() => setImgLoaded(true)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AppCard;
