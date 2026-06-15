import type { SkillsCategory } from "../types";
import { SiBootstrap, SiExpo, SiGit, SiGithub, SiHtml5, SiJavascript, SiOpenjdk, SiPostman, SiPython, SiReact, SiSpring, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";
export const skills: SkillsCategory[] = [
  {
    id: 1,
    name: "Frontend y Móvil",
    skills: [
      {
        id: 1,
        name: "JavaScript",
        Icono: SiJavascript,
        className: "text-[#F7DF1E] "
      },
      {
        id: 2,
        name: "TypeScript",
        Icono: SiTypescript,
        className: "text-[#3178C6]"
      },
      {
        id: 3,
        name: "HTML5", 
        Icono: SiHtml5,
        className: "text-[#E34C26]"
      },
      {
        id: 4,
        name: "React",
        Icono: SiReact,
        className: "text-[#61DAFB]"
      },
      {
        id: 5,
        name: "Vue.js",
        Icono: SiVuedotjs,
        className: "text-[#4FC08D]"
      },
      {
        id: 6,
        name: "Bootstrap", 
        Icono: SiBootstrap,
        className: "text-[#7952B3]"
      },
      {
        id: 7,
        name: "Tailwind CSS",
        Icono: SiTailwindcss,
        className: "text-[#06B6D4]"
      },
      {
        id: 8,
        name: "Expo",
        Icono: SiExpo,
        className: "text-[#000020] dark:text-[#FFFFFF]"
      },
    ],
  }, 
  {
    id: 2,
    name: "Backend",
    skills: [
      {
        id: 1,
        name: "Java",
        Icono: SiOpenjdk,
        className: "text-[#ED8B00]"
      },
      {
        id: 2,
        name: "Spring Boot",
        Icono: SiSpring,
        className: "text-[#6DB33F] dark:bg-white rounded-3xl"
      },
      {
        id: 3,
        name: "Python",
        Icono: SiPython,
        className: "text-[#306998]" 
      },
    ]
  },
  {
    id: 3,
    name: "Herramientas", 
    skills: [
      {
        id: 1,
        name: "Git",
        Icono: SiGit,
        className: "text-[#F05032]"
      },
      {
        id: 2,
        name: "GitHub", 
        Icono: SiGithub,
        className: "text-[#181717] dark:text-[#FFFFFF]" 
      },
      {
        id: 3,
        name: "Postman",
        Icono: SiPostman,
        className: "text-[#FF6C37] dark:bg-white rounded-3xl"
      },
    ]
  }
];
