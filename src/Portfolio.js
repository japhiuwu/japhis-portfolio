import React, { useState } from "react";
import AppCard from "./AppCard";
import Slider from "./Slider";
import "./styles/Portfolio.css";


const Projects = [
  {
  title: "WHERE'S WALDO?",
  shortName: "WHERE'S WALDO?",
  description: "Juego interactivo de Where's Waldo? donde los usuarios deben localizar al persoaje principal oculto en escenarios detallados. Combinando diseño visual, lógica de detección de clicks y una interfaz intuitiva.",
  images: [
    "https://res.cloudinary.com/dr5gfo075/image/upload/v1770166585/71661620-95a9-43a4-b4d2-99dabd772afb.png",
  ],
  technologies: [
    "React",
    "Tailwind CSS"
  ],
  keyPoints: [
    "Sistema de puntuación y temporizador para medir desempeño.",
    "Diseño responsivo y optimizado para diferentes dispositivos.",
    "Base de datos implementada en Supabase con conexión mediante su REST API."
  ],
  website: "https://wheres-waldo-e80.pages.dev/",
  github: "https://github.com/japhiuwu/wheres-waldo"
  },
  {
  title: "Tienda Virtual",
  shortName: "Tienda Virtual",
  description: "Proyecto personal de una tienda genérica de productos musicales y merchandising. Esta aplicación sirve como demostración de diseño y funcionalidad de un e-commerce, incluyendo visualización de álbumes, artículos de merch, carrito de compras y landing page.",
  images: [
    "https://res.cloudinary.com/dr5gfo075/image/upload/v1759295708/5fd765c6-1a5c-49d0-b1d5-dfbd6b52cbd7.png",
  ],
  technologies: [
    "React",
    "Tailwind CSS"
  ],
  keyPoints: [
    "Diseño de e-commerce para productos musicales y merchandising.",
    "Simulación de carrito de compras y gestión de cantidades.",
    "Proyecto de portafolio personal, no funcional como tienda real."
  ],
  website: "https://shopping-cart-21y.pages.dev/",
  github: "https://github.com/japhiuwu/shopping-cart"
  },
  {
    title: "Servicios Técnicos Múltiples Iker",
    shortName: "STMI",
    description:
      "Diseño y configuración de página web completa utilizando la plataforma WIX, orientada a la venta de productos y servicios. La solución integra funcionalidades comerciales clave y una experiencia de usuario optimizada.",
    images: [
      "https://res.cloudinary.com/dr5gfo075/image/upload/v1752545870/1d1a44a4-0609-4878-97e8-6459c879f92d.png",
    ],
    technologies: [
      "WIX"
    ],
    keyPoints: [
      "Catálogo interactivo de productos y servicios.",
      "Sistema de reservas y pagos integrados, incluyendo PayPal y TiloPay.",
      "Dominio personalizado y conexión a email para atención al cliente.",
    ],
    website: "https://ikermaradiaga089.wixsite.com/stm-iker",
    github: "",
  },
  {
    title: "SuperMarket",
    shortName: "SM",
    description:
      "Aplicación integral para la administración eficiente de un mercadito, que permite gestionar ventas, inventario, usuarios y reportes desde una sola plataforma.",
    images: [
      "https://res.cloudinary.com/dr5gfo075/image/upload/v1752546628/d35e7691-b618-4871-860b-733883bb3cc4.png",
    ],
    technologies: [
      "C#",
      "SQLite"],
    keyPoints: [
      "Control de ventas e inventario en tiempo real.",
      "Registro y gestión de empleados, clientes y proveedores.",
      "Generación de informes y mantenimiento de productos y categorías.",
    ],
    website: "",
    github: "https://github.com/ElderSolano/ProyectoMercadito.git",
  },
  {
    title: "Ecosistema Digital Empresarial M365",
    shortName: "Microsoft 365",
    description:
      "Implementación de una solución empresarial integral utilizando Microsoft 365, orientada a optimizar procesos internos, automatizar la gestión de citas e informes, y centralizar la colaboración a través de herramientas como Bookings, Power Automate y SharePoint.",
    images: [
      "https://res.cloudinary.com/dr5gfo075/image/upload/v1752546745/975214f3-13b0-4708-ac60-d239c3f39ea9.png",
    ],
    technologies: [
      "Power Automate",
      "Microsoft 365",
      "Bookings",
      "Microsoft Entra ID"
    ],
    keyPoints: [
      "Configuración de dominio personalizado y gestión de usuarios en Microsoft 365.",
      "Automatización de reservas y envío de informes mediante Power Automate.",
      "Creación de un espacio colaborativo en SharePoint para centralizar documentos y flujos de trabajo.",
    ],
    website: "",
    github: "",
  },
  {
    title: "Generador CV",
    shortName: "CV-Generator",
    description:
      "Generador de CV interactivo: llena tus datos personales, educación y experiencia laboral, visualiza tu currículum en tiempo real y descárgalo directamente en Word con un solo clic.",
    images: [
      "https://res.cloudinary.com/dr5gfo075/image/upload/v1756690400/a347f14c-34a2-427b-be59-5e1fcf35cde5.png",
    ],
    technologies: [
      "React",
      "Tailwind CSS"
    ],
    keyPoints: [
      "Interactividad en tiempo real",
      "Gestión de secciones al añadir y editar educación y experiencia laboral fácilmente.",
      "Descarga tu CV en Word con un solo clic.",
    ],
    website: "https://cv-generator-2fi.pages.dev/",
    github: "https://github.com/japhiuwu/CV-Generator",
  },
  {
    title: "VIKIA",
    shortName: "VIKIA",
    description:
      "Desarrollo de una plataforma web para la venta de productos musicales como álbumes, CDs, vinilos, cassettes y merchandising. (Solo landing page activa)",
    images: [
      "https://res.cloudinary.com/dr5gfo075/image/upload/v1752548261/ae80ed51-382e-48d4-aad6-4635d9b207c0.png",
    ],
    technologies: [
      "HTML 5",
      "CSS",
      "JavaScript",
      "MongoDB"
    ],
    keyPoints: [
      "Plataforma con roles diferenciados: cliente, delivery y administrador.",
      "Seguimiento en tiempo real del estado de los pedidos y asignación de entregas.",
      "Panel de administración para gestionar productos, categorías y usuarios.",
    ],
    website: "https://japhiuwu.github.io/landing-page-vikia/",
    github: "https://github.com/japhiuwu/frontend-cliente-vikia.git",
  },
  {
    title: "ScheduleMaster",
    shortName: "ScheduleMaster",
    description:
      "Aplicación web diseñada para facilitar la planificación y gestión de horarios académicos. Permite a instituciones educativas crear, visualizar y administrar secciones, asignar docentes, controlar periodos y generar reportes. (Solo landing page activa)",
    images: [
      "https://res.cloudinary.com/dr5gfo075/image/upload/v1752552093/WhatsApp_Image_2025-07-14_at_9.55.16_PM_ps0br8.jpg",
    ],
    technologies: [
      "NextJS",
      "Firebase",
      "Azure",
      "Tailwind CSS"
    ],
    keyPoints: [
      "Generación dinámica de horarios académicos y secciones.",
      "Gestión de usuarios y roles con acceso seguro.",
      "Integración con servicios externos y despliegue en Azure.",
    ],
    website: "https://schedule-master.pages.dev/",
    github: "https://github.com/japhiuwu/ScheduleMasterApp.git",
  },
  {
    title: "Generador de Boletos Automatizado",
    shortName: "",
    description:
      "Generador de boletos en pdf automatizado para eventos con conexión a spreadsheets de google, con QR y envío automático a correo electrónico.",
    images: [
      "https://res.cloudinary.com/dr5gfo075/image/upload/v1752631410/diplomas_kmotion_1_wukdit.png",
    ],
    technologies: [
      "Python"
    ],
    keyPoints: [
      "Generación dinámica de horarios académicos y secciones.",
      "Gestión de usuarios y roles con acceso seguro.",
      "Integración con servicios externos y despliegue en Azure.",
    ],
    website: "https://schedule-master.pages.dev/",
    github: "https://github.com/japhiuwu/ScheduleMasterApp.git",
  },
];

function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="layout">
        <AppCard selectedIndex={selectedIndex} Projects={Projects}></AppCard>
        <Slider setSelectedIndex={setSelectedIndex} Projects={Projects}></Slider>
    </div>
  );
}

export default Portfolio;
