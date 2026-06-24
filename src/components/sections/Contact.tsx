import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

function Contact() {
    return (
        <section id="contacto" className="py-16 px-4  mx-auto text-center border-t border-slate-200 dark:border-zinc-800">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 mb-2">
                Contáctame
            </h2>

            <p className="text-slate-500 dark:text-zinc-400 mb-8 text-sm sm:text-base">
                ¿Tienes alguna propuesta o quieres charlar sobre un proyecto? ¡Escríbeme!
            </p>


            <div className="flex gap-8 items-center justify-center bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80 p-5 rounded-2xl shadow-sm max-w-xs mx-auto">
                <a
                    href="mailto:cuevas.erik.israel@gmail.com"
                    className="text-slate-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 hover:scale-110"
                    aria-label="Gmail"
                >
                    <SiGmail size={36} />
                </a>

                <div className="w-px h-8 bg-slate-200 dark:bg-zinc-800" />

                <a
                    href="https://www.linkedin.com/in/erik-israel-cuevas-hernández-7b30ab3bb"
                    className="text-slate-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={36} />
                </a>
            </div>
        </section>


    )
}

export default Contact