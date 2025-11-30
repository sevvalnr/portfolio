import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col transition-colors duration-300">


      {/* Main Content - Centered */}
      <main className="flex-1 flex items-center justify-center px-6 pt-10">
        <div className="text-center max-w-2xl">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight leading-tight">
            Hello, I am <span className="font-normal">Şevval!</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-[var(--muted-text)] mb-12 leading-relaxed font-light tracking-wide">
            Full-stack developer who enjoys building things that solve real problems. I focus on clean design, solid backends, and products that actually work.          </p>
          
          {/* Contact Button */}
          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="px-12 py-4 text-lg font-light text-[var(--foreground)] border-2 border-[var(--foreground)] rounded-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 tracking-wider"
            >
              Contact me
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}