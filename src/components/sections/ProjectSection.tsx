import { projects } from "../../data/projects"
import CardProject from "../ui/CardProject"


function ProjectSection() {
    return (
        <div className="">
            {projects.map((project) => (
                <section
                    key={project.id}
                    className="border m-4 p-4 flex flex-row gap-4 items-start rounded-xl relative bg-white dark:bg-zinc-900 border-slate-200 dark:border-violet-900"
                >
                    <div className="shrink-0 flex items-center justify-center p-2.5 rounded-xl border bg-slate-50/50 dark:bg-zinc-900/30 border-slate-200/60 dark:border-zinc-800/50 text-slate-800 dark:text-zinc-100 transition-all duration-300 group-hover:scale-105 group-hover:border-slate-300 dark:group-hover:border-violet-500/30 shadow-sm">
                        <project.Icono
                            size={24}
                            color="currentColor"
                        />
                    </div>

                    <div className="flex-1 flex flex-col gap-3">
                        <CardProject
                            title={project.title}
                            description={project.desciption}
                            createdAt={project.createdAt}
                        />

                        <div className="flex flex-row flex-wrap gap-2 ">
                            {project.tags?.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="text-[11px] font-mono tracking-wide font-medium bg-slate-100/70 dark:bg-zinc-900/50 text-slate-700 dark:text-zinc-300 px-2.5 py-0.5 rounded-md border border-slate-200/60 dark:border-zinc-800/80 transition-all duration-200 hover:bg-slate-200/50 dark:hover:bg-zinc-800/50"
                                >
                                    {tag.name}
                                </span>

                            ))}
                        </div>

                        <div className="flex flex-col gap-1 pt-1 pb-6 pr-24">

                            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-semibold">
                                Contribución:
                            </span>
                            <p className="text-xs text-slate-600 dark:text-zinc-400 bg-slate-50/50 dark:bg-zinc-900/50 p-2 rounded-lg border border-slate-100 dark:border-zinc-800/50">
                                {project.contribution}
                            </p>
                        </div>
                        
                    </div>


                    <div className="absolute bottom-4 right-4 flex flex-row items-center gap-3">
                        {project.urlGithub?.map((url) => {
                            const IconoEnlace = url.Icono;
                            return (
                                <a
                                    key={url.id}
                                    href={url.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-700 dark:text-zinc-300 transition-colors duration-200 hover:text-black dark:hover:text-white"
                                >
                                    <IconoEnlace size={22} color="currentColor" />
                                </a>
                            );
                        })}
                    </div>

                </section>
            ))}
        </div>

    )
}

export default ProjectSection