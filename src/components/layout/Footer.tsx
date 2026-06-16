import Logo from "../ui/Logo"


function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Logo />
          <span className="hidden md:inline text-slate-200 dark:text-zinc-800">|</span>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            © 2026 Erik Israel Cuevas Hernández.
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-zinc-400 text-center md:text-right leading-relaxed">
            Diseñado y desarrollado con <span className="text-slate-900 dark:text-zinc-100 font-semibold">React</span>, TypeScript y Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer