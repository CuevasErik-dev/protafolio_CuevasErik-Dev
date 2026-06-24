import { bio } from "../../data/bio"
import { download } from "../../utils/downolad"
import Button from "../ui/Button"


const handleClick = () => {
    window.location.href = "https://github.com/CuevasErik-dev"
}

const downloadCV = () => {
    download(
        {
            file: "CV-Erik_Israel_Cuevas_Hernandez.pdf", 
            nameDownload: "CV-Erik_Israel_Cuevas_Hernandez.pdf"
        })
}

function Hero() {

    return (
        <section id="inicio" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row justify-between items-center gap-12 text-slate-600 dark:text-zinc-400">
            <div className="flex-1 text-center md:text-left space-y-6">
                <div className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight leading-none">
                    <h1>{bio.name}</h1>
                    <h1>{bio.lastName}</h1>
                </div>

                <div>
                    <span className="border border-slate-200 dark:border-zinc-800 rounded-full px-4 py-1.5 text-sm bg-slate-50 dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 font-medium">
                        {bio.role}
                    </span>
                </div>

                <p className="text-base sm:text-lg text-slate-500 dark:text-zinc-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
                    {bio.about}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                    <Button title="Descargar CV"
                        disabled={false} onClick={downloadCV}
                        variant="primary" />
                    <Button title="Perfil en GitHub"
                        disabled={false}
                        onClick={handleClick}
                        variant="secondary" />
                </div>
            </div>

            <div className="w-56 h-56 md:w-72 md:h-72 shrink-0 order-first md:order-last relative group">
                <div className="absolute inset-0 bg-linear-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-2xl transition-all duration-500 group-hover:scale-105" />

                <div className="relative w-full h-full rounded-full shadow-md border border-slate-200 dark:border-zinc-800 bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-violet-400 via-purple-400 to-indigo-400 select-none transition-transform duration-300 group-hover:scale-105">
                        EICH
                    </span>

                    <span className="text-[10px] md:text-[11px] font-mono text-slate-500 dark:text-zinc-500 tracking-widest mt-1.5 uppercase select-none">
                        Developer_
                    </span>
                </div>
            </div>
        </section>
    )
}
export default Hero
