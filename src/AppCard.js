import "./styles/AppCard.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const technologies = [
  {
    title: "React",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
  },
  {
    title: "Tailwind CSS",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
  },
  {
    title: "WIX",
    url: "https://companieslogo.com/img/orig/WIX.D-9b5f1d10.png?t=1720244494"
  },
  {
    title: "C#",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png"
  },
  {
    title: "SQLite",
    url: "https://www.aprendexojo.com/wp-content/uploads/2018/03/Sqlite.png"
  },
  {
    title: "Power Automate",
    url: "https://cdn.sanity.io/images/n1bn8kr3/production/ddf9e78ab06e6909dddf6b97b375dc8df3838005-642x512.png?w=1920&fm=webp&q=100&fit=clip&auto=format"
  },
  {
    title: "Microsoft 365",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/931px-Microsoft_365_%282022%29.svg.png"
  },  
  {
    title: "Bookings",
    url: "https://brandlogo.org/wp-content/uploads/2025/05/Microsoft-Bookings-Icon-2024.png.webp"
  },  
  {
    title: "Microsoft Entra ID",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Microsoft_Entra_ID_color_icon.svg/2048px-Microsoft_Entra_ID_color_icon.svg.png"
  },  
  {
    title: "HTML 5",
    url: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png"
  },
  {
    title: "CSS",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817"
  },
  {
    title: "MongoDB",
    url: "https://images.icon-icons.com/2699/PNG/512/mongodb_logo_icon_170943.png"
  },
  {
    title: "JavaScript",
    url: "https://freesvg.org/img/1486641506.png"
  },
  {
    title: "NextJS",
    url: "https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png"
  },
  {
    title: "Firebase",
    url: "https://brandlogos.net/wp-content/uploads/2025/03/firebase_icon-logo_brandlogos.net_tcvck.png"
  },
  {
    title: "Azure",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"
  },
  {
    title: "Python",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png"
  },
]


function AppCard({ selectedIndex, Projects }) {

  return (
    <section className="info-section">
        <AnimatePresence mode="wait">
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
              <p id="info" className="text-lg">{Projects[selectedIndex].description}</p>
              <div className="technologies">
                {Projects[selectedIndex].technologies.map((technology, index) => (
                  <motion.div
                    className="relative group"
                    initial="hidden"
                    whileHover="show"
                  >
                    <motion.img
                      key={index}
                      className="technology"
                      src={technologies.find(t => t.title === technology)?.url}
                      alt={technology}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    />

                    <motion.span
                      variants={{
                        hidden: { opacity: 0, y: 6 },
                        show: { opacity: 1, y: 0 }
                      }}
                      className="absolute -bottom-2 -left-2
                                text-sm rounded bg-black/80 text-white text-center
                                whitespace-nowrap pointer-events-none"
                    >
                      {technology}
                    </motion.span>
                  </motion.div>
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
    </section>
  );
}

export default AppCard;
