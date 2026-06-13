interface project {
    id: number;
    name : string;
    lastName: string;
    desciption: string;
    createdAt: Date;
    skills: string [],
    urlGithub: string;

}

interface Bio {
    name : string;
    lastName : string;
    role: string;
    about: string;
    linkedin: string;
    github: string;
}

export type {project, Bio}