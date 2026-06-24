import { useState } from "react";
import ButtonTheme from "../ui/ButtonTheme";
import Logo from "../ui/Logo";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full flex flex-col sm:flex-row justify-between p-4 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 border-b">
            <div className="flex justify-between items-center text-slate-900 dark:text-zinc-100 text-2xl w-full sm:w-auto">
                <Logo/>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden block focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://w3.org"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                    >
                        {isOpen ? (
                            <path d="M10.5859 12L5.15625 6.57031L6.57046 5.1561L12 10.5857L17.4295 5.1561L18.8438 6.57031L13.4141 12L18.8438 17.4297L17.4295 18.8439L12 13.4141L6.57046 18.8439L5.15625 17.4297L10.5859 12Z"></path>
                        ) : (
                            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                        )}
                    </svg>
                </button>
            </div>

            <div className={`${isOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row items-start sm:items-center gap-4 text-slate-900 dark:text-zinc-100 text-lg mt-4 sm:mt-0 w-full sm:w-auto`}>
                <a 
                    href="#inicio" 
                    onClick={handleCloseMenu}
                    className="w-full sm:w-auto py-2 sm:py-0 hover:text-blue-500 dark:hover:text-blue-400"
                >
                    Home
                </a>
                <a 
                    href="#proyectos" 
                    onClick={handleCloseMenu}
                    className="w-full sm:w-auto py-2 sm:py-0 hover:text-blue-500 dark:hover:text-blue-400"
                >
                    Proyectos
                </a>
                <a 
                    href="#habilidades" 
                    onClick={handleCloseMenu}
                    className="w-full sm:w-auto py-2 sm:py-0 hover:text-sky-500 dark:hover:text-indigo-400"
                >
                    Skills
                </a>
                <a 
                    href="#contacto" 
                    onClick={handleCloseMenu} 
                    className="w-full sm:w-auto py-2 sm:py-0 hover:text-blue-500 dark:hover:text-blue-400"
                >
                    Contacto
                </a>
                
                <div className="pt-2 sm:pt-0">
                    <ButtonTheme
                        icon={
                            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                            </svg>
                        }
                        className="hidden dark:inline-block"
                        disabled={false}
                    />
                    <ButtonTheme
                        icon={
                            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
                            </svg>
                        }
                        className="inline-block dark:hidden"
                        disabled={false}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
