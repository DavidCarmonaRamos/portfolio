import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "David Carmona Ramos",
  DESCRIPTION:"Portfolio de David Carmona Ramos. Técnico en Sistemas Microinformáticos y Redes, desarrollador web y apasionado por la tecnología, la administración de sistemas y el desarrollo de aplicaciones.",
  AUTHOR: "David Carmona Ramos",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experiencia",
  DESCRIPTION: "Trayectoria profesional, formación académica y conocimientos técnicos.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos personales y profesionales desarrollados con distintas tecnologías.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Busca proyectos y artículos por palabras clave.",
}

export const LINKS: Links = [
  {
    TEXT: "Inicio",
    HREF: "/",
  },
  {
    TEXT: "Experiencia",
    HREF: "/work",
  },
  {
    TEXT: "Proyectos",
    HREF: "/projects",
  },
  {
    TEXT: "Contacto",
    HREF: "/contact",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "dcrcarmona@gmail.com",
    HREF: "mailto:dcrcarmona@gmail.com",
  },
  {
    NAME: "GitHub",
    ICON: "github",
    TEXT: "DavidCarmonaRamos",
    HREF: "https://github.com/DavidCarmonaRamos",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "David Carmona Ramos",
    HREF: "https://www.linkedin.com/in/david-carmona-ramos-bb4a71143/",
  },
  {
    NAME: "CV",
    ICON: "download",
    TEXT: "Currículum",
    HREF: "/cv.pdf",
  }
]

