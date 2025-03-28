import { useEffect, useState } from 'react';

const useThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("resourcefyi-theme") === "dark";
    });

    const handleThemeChange = () => {
        setTheme(!theme);
        localStorage.setItem("resourcefyi-theme", !theme ? "dark" : "light");
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme);
    }, [theme]);
    
    return { handleThemeChange, theme }
};

export default useThemeToggle;