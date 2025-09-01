import React, { useState } from "react";
import AppCard from "./AppCard";
import Slider from "./Slider";
import "./styles/Portfolio.css";
import { Link } from "react-router-dom";


const Projects = [
  {
    title: "Servicios Técnicos Múltiples Iker",
    shortName: "STMI",
    description:
      "Diseño y configuración de página web completa utilizando la plataforma WIX, orientada a la venta de productos y servicios. La solución integra funcionalidades comerciales clave y una experiencia de usuario optimizada.",
    images: [
      "https://res.cloudinary.com/dr5gfo075/image/upload/v1752545870/1d1a44a4-0609-4878-97e8-6459c879f92d.png",
    ],
    technologies: [
      "https://companieslogo.com/img/orig/WIX.D-9b5f1d10.png?t=1720244494"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png",
      "https://www.aprendexojo.com/wp-content/uploads/2018/03/Sqlite.png"],
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
      "https://cdn.sanity.io/images/n1bn8kr3/production/ddf9e78ab06e6909dddf6b97b375dc8df3838005-642x512.png?w=1920&fm=webp&q=100&fit=clip&auto=format",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/931px-Microsoft_365_%282022%29.svg.png",
      "https://brandlogo.org/wp-content/uploads/2025/05/Microsoft-Bookings-Icon-2024.png.webp",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Microsoft_Entra_ID_color_icon.svg/2048px-Microsoft_Entra_ID_color_icon.svg.png"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
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
      "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
      "https://freesvg.org/img/1486641506.png",
      "https://images.icon-icons.com/2699/PNG/512/mongodb_logo_icon_170943.png"
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
      "https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png",
      "https://brandlogos.net/wp-content/uploads/2025/03/firebase_icon-logo_brandlogos.net_tcvck.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
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
      "https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png",
      "https://brandlogos.net/wp-content/uploads/2025/03/firebase_icon-logo_brandlogos.net_tcvck.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
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
