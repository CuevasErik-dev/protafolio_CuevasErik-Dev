interface ButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    title: string;
    variant?: 'primary' | 'secondary';
}

export default function Button({ disabled, onClick, title, variant = 'primary' }: ButtonProps) {
    
    
    const baseStyles = "relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wide rounded-xl active:scale-[0.98] transition-all duration-200 ease-out shadow-sm disabled:opacity-50 disabled:pointer-events-none disabled:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
    
    const variants = {
        primary: "border border-slate-200 dark:border-violet-900 text-slate-50 dark:text-violet-100 bg-slate-900 dark:bg-violet-950 hover:bg-slate-800 dark:hover:bg-violet-900 focus-visible:outline-slate-500 dark:focus-visible:outline-violet-500",
        
        secondary: "border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 bg-transparent hover:bg-slate-50 dark:hover:bg-zinc-900 focus-visible:outline-slate-400 dark:focus-visible:outline-zinc-500 shadow-none"
    };

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]}`}
        >
            {title}
        </button>
    );
}
