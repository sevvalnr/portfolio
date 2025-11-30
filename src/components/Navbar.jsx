'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full flex justify-center pt-4 sm:pt-6 z-50">
      <div className="flex items-center border-2 border-[#532813] dark:border-[#5A0E24] rounded-full px-2 sm:px-6 py-1 sm:py-2 bg-transparent shadow-md gap-1 sm:gap-2 overflow-x-auto max-w-full hide-scrollbar transition-colors duration-300">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative px-2 sm:px-4 py-1 mx-0.5 sm:mx-1 rounded-full font-semibold transition-all duration-200 whitespace-nowrap
                ${isActive
                  ? 'bg-[#3f261b] text-[#f7faf8] shadow dark:bg-[#5A0E24] dark:text-[#2a2a2a]'
                  : 'text-[#632d13] hover:bg-[#632d13]/80 hover:text-[#cde0d6] dark:text-[#2a2a2a] dark:hover:bg-[#5A0E24]/80 dark:hover:text-[#F1F3E0]'
                }
              `}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-1 sm:ml-2 w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#F5E1D8] dark:border-[#532813] flex-shrink-0 hover:scale-110 transition-transform duration-200"
          aria-label="Toggle Theme"
        >
          {mounted && theme === 'dark' ? (
            // Sun icon for dark mode
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5E1D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            // Moon icon for light mode
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#532813" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </div>
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </nav>
  );
}