import type { IconType } from "react-icons";

interface Project {
    id: number;
    title: string;
    desciption: string;
    createdAt: string;
    tags: ProjectTag[],
    urlGithub?: url [];
    Icono: IconType;
    contribution: string;
}

interface url{
    id:number,
    url:string
    Icono: IconType
}

interface ProjectTag {
    id: number;
    name: string;
}

interface Bio {
    name: string;
    lastName: string;
    role: string;
    about: string;
    linkedin: string;
    github: string;
}

interface Skill {
    id: number;
    name: string;
    Icono: IconType;
    className: string;
}
interface SkillsCategory {
    id: number;
    name: string;
    skills: Skill[];
}

export type { Project, Bio, SkillsCategory }
