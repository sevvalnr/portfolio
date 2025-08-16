'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="glass text-white px-6 py-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
          My Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link 
            href="/" 
            className="hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            Ana Sayfa
          </Link>
          <Link 
            href="/about" 
            className="hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            Hakkımda
          </Link>
          <Link 
            href="/projects" 
            className="hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            Projeler
          </Link>
          <Link 
            href="/cv" 
            className="hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            CV
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            İletişim
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="glass mt-4 rounded-lg p-4 space-y-4">
          <Link 
            href="/" 
            onClick={closeMenu}
            className="block hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            Ana Sayfa
          </Link>
          <Link 
            href="/about" 
            onClick={closeMenu}
            className="block hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            Hakkımda
          </Link>
          <Link 
            href="/projects" 
            onClick={closeMenu}
            className="block hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            Projeler
          </Link>
          <Link 
            href="/cv" 
            onClick={closeMenu}
            className="block hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            CV
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMenu}
            className="block hover:text-[#00d4ff] transition-colors duration-300 font-medium"
          >
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  )
}
