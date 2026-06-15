interface props {
    title: string;
    description: string;
    createdAt: string;
}

export default function CardProject({ title, description, createdAt }: props) {
    return (
        <>
            <div className="flex flex-col gap-2 pr-24">

                <span className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 dark:text-zinc-50 transition-colors group-hover:text-blue-600 dark:group-hover:text-violet-400">
                    {title}
                </span>


                <p className="text-sm font-normal leading-relaxed text-slate-600 dark:text-zinc-400">
                    {description}
                </p>
            </div>

            <div className="absolute top-4 right-4 px-2.5 rounded-full border bg-white/60 dark:bg-slate-950/40 backdrop-blur-md border-slate-200 dark:border-violet-500/20 shadow-sm transition-all duration-300 hover:border-slate-300 dark:hover:border-violet-500/40">
                <span className="text-[11px] font-mono tracking-wider text-slate-500 dark:text-violet-300/80 uppercase">
                    {createdAt}
                </span>
            </div>

        </>
    )
}
