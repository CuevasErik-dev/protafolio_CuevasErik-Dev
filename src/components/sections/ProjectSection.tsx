import { projects } from "../../data/projects"
import CardProject from "../ui/CardProject"


function ProjectSection() {
    return (
        <section id="proyectos" className="max-w-6xl mx-auto px-6 py-10 md:py-10">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-zinc-100 tracking-tight">
                    Proyectos Destacados
                </h2>
                <p className="mt-3 text-base text-slate-500 dark:text-zinc-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
                    Una muestra de mis desarrollos universitarios más robustos, abarcando desde la arquitectura de APIs hasta clientes web y móviles.
                </p>
            </div>
            <div className="space-y-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="border p-6 flex flex-col sm:flex-row gap-6 items-start rounded-2xl relative bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800"
                    >
                        <div className="shrink-0 flex items-center justify-center p-3 rounded-xl border bg-slate-50 dark:bg-zinc-900/50 border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-100 shadow-sm">
                            <project.Icono
                                size={24}
                                color="currentColor"
                            />
                        </div>

                        <div className="flex-1 flex flex-col gap-4 w-full">
                            <CardProject
                                title={project.title}
                                description={project.desciption}
                                createdAt={project.createdAt}
                            />

                            <div className="flex flex-row flex-wrap gap-2">
                                {project.tags?.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="text-[11px] font-mono tracking-wide font-medium bg-slate-50 dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-zinc-800 transition-all duration-200 hover:bg-slate-100 dark:hover:bg-zinc-800"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col gap-1.5 pt-1 pb-12 sm:pb-2 pr-0 sm:pr-24">
                                <span className="text-xl font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-bold">
                                    Contribución:
                                </span>
                                <p className="text-sm text-slate-500 dark:text-zinc-400 bg-slate-50/50 dark:bg-zinc-900/30 p-3 rounded-xl border border-slate-100 dark:border-zinc-800/60 leading-relaxed">
                                    {project.contribution}
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-6 right-6 flex flex-row items-center gap-4">
                            {project.urlGithub?.map((url) => {
                                const IconoEnlace = url.Icono;
                                return (
                                    <a
                                        key={url.id}
                                        href={url.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 dark:text-zinc-400 transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400"
                                    >
                                        <IconoEnlace size={22} color="currentColor" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default ProjectSection