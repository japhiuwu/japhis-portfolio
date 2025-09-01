import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Info.css";
import { Link } from "react-router-dom";

const sections = [
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "languages", label: "Lenguajes" },
  { id: "frameworks", label: "Frameworks y Librerías" },
  { id: "tech", label: "Tecnologías y Herramientas" },
  { id: "contact", label: "Contáctame" },
  { id: "hobbies", label: "Hobbies" },
];

const contentData = {
  about: <p>Aquí va tu descripción personal...</p>,
  skills: <p>Lista de habilidades principales...</p>,
  languages: <p>Lenguajes de programación...</p>,
  frameworks: <p>Frameworks y librerías que usas...</p>,
  tech: <p>Tecnologías y herramientas...</p>,
  contact: <p>Formulario o enlaces de contacto...</p>,
  hobbies: <p>Tus hobbies...</p>,
  learning: <p>Lo que estás aprendiendo actualmente...</p>,
};

export default function Info() {
  const [selected, setSelected] = useState("about");

  return (
    <div className="flex row h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-80 bg-gray-800 py-4 flex flex-col justify-between h-full">
        <section>

          <div className="flex items-center px-4 mb-1">
            <img 
              src="https://images.genius.com/1c02cb407997ac92aa935c165a5d09c6.1000x1000x1.png" 
              alt="Profile picture" 
              className="w-20 h-auto rounded-full"
            />
            <div className="pl-3">
              <p className="text-lg font-bold tracking-wide text-left">Iker Maradiaga</p>
              <p className="text-sm tracking-wide text-left">ikermaradiaga08@gmail.com</p>
            </div>
          </div>

          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setSelected(section.id)}
              className={`w-full text-2xl tracking-wide text-left p-3 px-4 transition-colors ${
                selected === section.id
                    ? "bg-gray-700 font-bold border-l-4 border-purple-500"
                    : "hover:bg-gray-700"
              }`}
            >
              {section.label}
            </button>
          ))}
        </section>

      <Link to="/home" className="text-base justify-center tracking-wide font-semibold py-5 flex items-center transition-transform duration-200 transform hover:scale-105">
        <button>
          <i className="fa-solid fa-arrow-left mr-3"></i>Menú
        </button>
      </Link>

      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl font-bold mb-4">
              {sections.find((s) => s.id === selected)?.label}
            </h1>
            {contentData[selected]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
