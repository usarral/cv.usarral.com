// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type MenuItem from "src/lib/interfaces/MenuItem";
import type Project from "../lib/interfaces/Project";

export const SITE_TITLE = "Usarral | Software Developer";
export const NAME = "Carlos";
export const SUBTITLE = "Software Developer";
export const SITE_DESCRIPTION =
  "Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed.";
export const PERSONAL_DESCRIPTION = `
  I'm a software developer based in Spain, with experience in web development. 
  I'm passionate about technology and I love to learn new things. I'm always looking for new challenges and opportunities to grow as a professional.
  I work with technologies like Spring Boot, Angular, TypeScript, NestJS, PHP, and more.
`;
export const GENERATE_SLUG_FROM_TITLE = true;

export const TRANSITION_API = true;

export const MENU_ITEMS: MenuItem[] = [
  {
    Page: "Home",
    Link: "/",
    id: "home",
  },
  {
    Page: "Projects",
    Link: "/projects",
    id: "projects",
  },
  //{
  //  Page: "CV",
  //  Link: "/cv",
  //  id: "cv",
  //},
  //{
  //  Page: "Contact",
  //  Link: "/contact",
  //  id: "contact",
  //},
];

export const PROJECTS: Project[] = [
  {
    title: "GDM La Merced",
    image: "gdmlamerced.webp",
    techs: ["Astro", "Typescript"],
    link: "https://gdmlamerced.com",
    description:
      "Website of a handball club from Corella, Spain, where information about the club, teams, competitions, etc. is shown.",
    isComingSoon: false,
    postDate: "2024-08-01",
  },

  {
    title: "RafaelPalmero.com",
    image: "rafaelpalmero.com.webp",
    techs: ["NextJS", "TailwindCSS"],
    description: "Chef personal blog where he post recipes, tips, and more",
    link: "https://rafaelpalmero.com",
    isComingSoon: false,
  },
  {
    title: "Blog | Usarral",
    image: "usarral.png",
    techs: ["Astro"],
    link: "https://old.usarral.com",
    description:
      "This is my personal blog, where I post about software development, architecture, different technologies, and more.",
    isComingSoon: false,
    refactoring: true,
  },
  {
    title: "La Receta",
    image: "lareceta.png",
    techs: ["NestJS", "TypeScript"],
    description:
      "Platform to share recipes, tips and tricks about cooking, baking and more. The platform is still in development.",
    link: "#",
    isComingSoon: true,
  },
  {
    title: "Aszendix",
    image: "aszendix.png",
    techs: ["Express", "TypeScript", "Angular"],
    description: "CRM for small and medium businesses",
    link: "#",
    isComingSoon: true,
  },
  {
    title: "PerformSquad",
    image: "performsquad.png",
    description: "A platform to help you improve your league management",
    techs: ["Express", "TypeScript"],
    link: "#",
    isComingSoon: true,
  },
];
export const SOCIALS = [
  {
    title: "GitHub",
    link: "httsp://github.com/usarral",
    icon: "github",
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/usarral",
    icon: "linkedin",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/usarral",
    icon: "twitter",
  },
  {
    title: "Email",
    link: "mailto:cv@usarral.com",
    icon: "mail",
  },
];
