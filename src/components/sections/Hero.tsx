import { bio } from "../../data/bio"
import Button from "../ui/Button"

const handleClick = () => {
    console.log("Has presionado el botón")
}

function Hero() {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center gap-8 p-4 text-slate-600 dark:text-zinc-400">
            
            <div className="flex-1 text-center md:text-left space-y-6">
                <div>
                    <span className="border border-sky-200 dark:border-indigo-900 rounded-2xl px-3 py-1 text-sm bg-sky-100 dark:bg-indigo-950 text-sky-700 dark:text-indigo-300">
                        {bio.role}
                    </span>
                </div>

                <div className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight leading-none">
                    <h1>{bio.name}</h1>
                    <h1>{bio.lastName}</h1>
                </div>

                <p className="text-base text-slate-600 dark:text-slate-200 max-w-xl mx-auto md:mx-0">
                    {bio.about}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                    <Button title="Descargar CV" disabled={false} onClick={handleClick} variant="primary" />
                    <Button title="Perfil en GitHub" disabled={false} onClick={handleClick} variant="secondary"/>
                </div>
            </div>

            
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 order-first md:order-last">
                <img 
                    src="https://i.pinimg.com/originals/f3/9a/c7/f39ac732e60060f83953adc78e01ac5b.jpg" 
                    alt="Foto de perfil" 
                    className="w-full h-full object-cover rounded-full shadow-lg border-2 border-slate-200 dark:border-zinc-700" 
                />
            </div>

        </section>
    )
}

export default Hero
