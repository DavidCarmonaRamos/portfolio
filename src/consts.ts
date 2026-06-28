import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "David Carmona Ramos",
  DESCRIPTION: "Portfolio de David Carmona Ramos, Técnico en Sistemas Microinformáticos y Redes, desarrollador web y apasionado del mundo de los videojuegos.",
  AUTHOR: "David Carmona Ramos",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experiencia",
  DESCRIPTION: "Experiencia profesional y formación.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Artículos sobre desarrollo, tecnología y proyectos personales.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Una selección de los proyectos en los que he trabajado.",
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
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
]

