import { skills } from "../../data/skills";

export default function Skills() {

    return (
        <section id="habilidades" className="max-w-6xl mx-auto px-6 py-10 md:py-10 space-y-16">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-zinc-100 tracking-tight">
                    Mi Stack Tecnológico
                </h2>
                <p className="mt-3 text-base text-slate-500 dark:text-zinc-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
                    Las herramientas, lenguajes y frameworks que utilizo para transformar ideas en código limpio y productos digitales funcionales
                </p>
            </div>

            <div className="space-y-12">
                {skills.map((categoria) => (
                    <div key={categoria.id} className="flex flex-col">
                        <h3 className="text-2xl md:text-xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 mb-6">
                            {categoria.name}
                        </h3>

                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {categoria.skills.map((skill) => {
                                const IconoComponente = skill.Icono;
                                return (
                                    <li
                                        key={skill.id}
                                        className="border rounded-xl p-4 flex flex-col md:flex-row items-center gap-3 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-all duration-200 shadow-sm group"
                                    >
                                        <div className="shrink-0 flex items-center justify-center">
                                            <IconoComponente
                                                size={32}
                                                className={`${skill.className} transition-transform duration-300 group-hover:scale-110`}
                                            />
                                        </div>

                                        <span className="text-sm font-medium tracking-tight text-slate-700 dark:text-zinc-300 text-center md:text-left w-full">
                                            {skill.name}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );

}
