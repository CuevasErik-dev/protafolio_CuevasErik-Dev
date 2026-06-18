import { useEffect, useState, type ReactNode } from 'react'

interface buttonProps {
    icon: ReactNode;
    disabled: boolean;
    className?: string;
}

function ButtonTheme({ icon, className, disabled,}: buttonProps) {

    const [theme, setTheme] = useState<string>(() => {
        return localStorage.getItem('color-scheme') || 'ligth'
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark'); 
            localStorage.setItem('color-scheme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-scheme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button className={className} disabled={disabled} onClick={toggleTheme} color=''>
            {icon}

        </button>
    )
}

export default ButtonTheme