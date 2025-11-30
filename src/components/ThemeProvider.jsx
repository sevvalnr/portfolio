'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from '../utils/cookies';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = getCookie('theme');

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setCookie('theme', newTheme, 365);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Prevent hydration mismatch by not rendering until mounted, 
    // BUT we must provide the context so useTheme doesn't crash.
    // However, if we render children with default 'light' theme on server, 
    // and client is 'dark', we get mismatch.
    // The best way is to render the provider, but maybe suppress warning or accept the initial 'light' state.
    // Since we use suppressHydrationWarning in layout, we should be fine rendering the provider.

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
