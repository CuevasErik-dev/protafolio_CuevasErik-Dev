import { skills } from "../../data/skills";

export default function Skills() {

    return (
        <div className="space-y-10 px-4">
            {skills.map((categoria) => (
                <div key={categoria.id} className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 mb-4">
                        {categoria.name}
                    </h3>

                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {categoria.skills.map((skill) => {
                            const IconoComponente = skill.Icono;
                            return (
                                <li
                                    key={skill.id}
                                    className="border rounded-xl p-4 flex flex-col md:flex-row items-center gap-3 bg-slate-50/50 dark:bg-zinc-900/30 border-slate-200/60 dark:border-zinc-800/80 hover:bg-slate-100/50 dark:hover:bg-zinc-800/50 transition-all duration-200 shadow-sm group"
                                >
                                    <div className="shrink-0 flex items-center justify-center">
                                        <IconoComponente
                                            size={36} 
                                            className={`${skill.className} transition-transform duration-300 group-hover:scale-110`}
                                        />
                                    </div>

                                    <span className="text-sm font-medium tracking-tight text-slate-800 dark:text-zinc-200 text-center md:text-left w-full">
                                        {skill.name}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
}
