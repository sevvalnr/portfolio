'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' }, 
  { href: '/projects', label: 'PROJECTS' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'CONTACT' }, 
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center pt-4 sm:pt-6 z-50">
      <div className="flex items-center border-2 border-[#F5E1D8] rounded-full px-2 sm:px-6 py-1 sm:py-2 bg-transparent shadow-md gap-1 sm:gap-2 overflow-x-auto max-w-full hide-scrollbar">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative px-2 sm:px-4 py-1 mx-0.5 sm:mx-1 rounded-full font-semibold transition-all duration-200 whitespace-nowrap
                ${isActive
                  ? 'bg-[#F5E1D8] text-[#0a2e1a] shadow'
                  : 'text-[#F5E1D8] hover:bg-[#F5E1D8]/80 hover:text-[#0a2e1a]'
                }
              `}
            >
              {link.label}
            </Link>
          );
        })}
        {/* Circle accent */}
        <span className="ml-1 sm:ml-2 w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#F5E1D8] flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M15.5 13.5C13.5 15.5 10.5 15.5 8.5 13.5C6.5 11.5 6.5 8.5 8.5 6.5C9.5 5.5 11 5 12.5 5C12.5 7.5 14.5 9.5 17 9.5C17 11 16.5 12.5 15.5 13.5Z"
              fill="#F5E1D8"
            />
          </svg>
        </span>
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