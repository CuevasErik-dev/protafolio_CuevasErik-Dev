import { SiApplemusic, SiApplenews, SiGithub, SiReacthookform } from "react-icons/si";
import type { Project } from "../types";

const url: string = "https://github.com/CuevasErik-dev/"
export const projects: Project[] = [
    {
        id: 1,
        title: "Music-Wave",
        desciption: "App de música desarrollada con React Native y Expo Go, enfocada en la reproducción (En desarrollo)",
        contribution: "Mi contribución: Arquitectura base del proyecto individual. Implementé el sistema de navegación modular con React Navigation y diseñé los componentes de la interfaz de usuario utilizando React Native Paper",
        createdAt: "Enero 2026-Presente",
        tags: [
            { id: 1, name: "JavaScript" },
            { id: 2, name: "React Native" },
            { id: 3, name: "Git" },
        ],
        urlGithub: [
            {
                id: 1,
                url: `${url}MusicWave`,
                Icono: SiGithub
            }
        ],
        Icono: SiApplemusic
    },
    {
        id: 2,
        title: "App- TecNM-Tlaxiaco",
        desciption: "Aplicación móvil institucional desarrollada en colaboración, diseñada para centralizar y difundir la información de la comunidad universitaria.",
        contribution: "Mi contribución: Colaboración en el desarrollo de la aplicación móvil. Implementé el sistema de navegación de las pantallas con React Navigation y me encargué de integrar el consumo de la API REST existente de WordPress para mostrar las noticias en tiempo real.",
        createdAt: "Diciembre 2025-Presente",
        tags: [
            { id: 1, name: "JavaScript" },
            { id: 2, name: "React Native" },
            { id: 3, name: "Git" },

        ],
        Icono: SiApplenews

    },
    {
        id: 3,
        title: "CRUD-Alumnos",
        desciption: "Proyecto académico de gestión escolar que implementa los principios de la arquitectura MVC, integrando un backend seguro con Spring Security, autenticación JWT y persistencia de datos en MySQL",
        contribution: "Desarrollo integral de la aplicación (Frontend y Backend). Diseñé el CRUD de alumnos en el backend construyendo una API REST con Java y Spring Boot (protegida con Spring Security y JWT), y desarrollé las vistas para el consumo de estos datos desde el frontend utilizando Vue.js.",
        createdAt: "Diciembre 2025 - Mayo 2026",
        tags: [
            { id: 1, name: "Java" },
            { id: 2, name: "Spring Boot" },
            { id: 3, name: "Spring Security" },
            { id: 4, name: "Spring Data JPA" },
            { id: 5, name: "JavaScript" },
            { id: 6, name: "Vue.Js" },
            { id: 7, name: "JWT" },
            { id: 8, name: "Git" },
            { id: 9, name: "MySQL" },
        ],
        Icono: SiReacthookform,
        urlGithub: [
            {
                id: 1,
                url: `${url}alumnos-api-rest/tree/develop`,
                Icono: SiGithub
            },
            {
                id: 2,
                url: `${url}Computo_vue`,
                Icono: SiGithub
            },
        ],
    },
]
