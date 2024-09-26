import forkifyImg from "/forkifyImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "UX/UI",
    hash: "#uxui",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Forkify Recipe App",
    description:
      "Forkify is a vanilla JavaScript app that interacts with the food2fork API to fetch and display recipe food data. This app uses modern JavaScript tools, such as Webpack to bundle the modules, and Babel to convert to ES5.",
    tags: ["JavaScript", "Sass", "Webpack", "Babel", "AJAX"],
    imageUrl: forkifyImg,
    repository: "https://github.com/strongcurrentscf/forkify-recipe-app",
    link: "https://forkify-christian.netlify.app/",
  },
  {
    title: "Node Services",
    description:
      "Forkify is a vanilla JavaScript app that interacts with the food2fork API to fetch and display recipe food data. This app uses modern JavaScript tools, such as Webpack to bundle the modules, and Babel to convert to ES5.",
    tags: ["JavaScript", "Sass", "Webpack", "Babel", "AJAX"],
    imageUrl: forkifyImg,
    repository: "https://github.com/strongcurrentscf/forkify-recipe-app",
    link: "https://forkify-christian.netlify.app/",
  },
  {
    title: "Forkify Recipe App 2",
    description:
      "Forkify is a vanilla JavaScript app that interacts with the food2fork API to fetch and display recipe food data. This app uses modern JavaScript tools, such as Webpack to bundle the modules, and Babel to convert to ES5.",
    tags: ["JavaScript", "Sass", "Webpack", "Babel", "AJAX"],
    imageUrl: forkifyImg,
    repository: "https://github.com/strongcurrentscf/forkify-recipe-app",
    link: "https://forkify-christian.netlify.app/",
  },
] as const;

export const skills = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Material UI",
  "Chakra UI",
  "Ant Design",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Zustand",
  "Express",
  "Storybook",
  "Framer Motion",
  "Jest/React Testing Library",
  "Python",
  "FastAPI",
] as const;
