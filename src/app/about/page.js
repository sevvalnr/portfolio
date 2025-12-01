'use client'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-10 pb-20 bg-[var(--background)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-[var(--foreground)] tracking-tight">
            About Şevval
          </h1>
        </div>

        {/* Content with Image */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="bg-[var(--foreground)]/5 p-6 rounded-sm border border-[var(--border-color)]">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQHYO4dUMrs8Sg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712265673184?e=2147483647&v=beta&t=fqSq95T1hXUAhFGSNCh9xldRsZaPdpa2-3Zecq2pgUo" 
                alt="Şevval" 
                className="w-80 h-80 object-cover rounded-sm"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-3/5">
            <div className="bg-[var(--foreground)]/5 p-8 rounded-sm border border-[var(--border-color)]">
              <p className="text-lg text-[var(--muted-text)] font-light leading-relaxed mb-6">
I’m Şevval Nur Kibar — a recent Computer Engineering graduate and a Full-Stack Developer who enjoys building products that run in production and create real value for users. I see software as a creative problem-solving field where ideas turn into working systems.
              </p>
              
              <p className="text-lg text-[var(--muted-text)] font-light leading-relaxed mb-6">
                I started working on real projects early in my studies and I’m currently contributing to a large-scale MMA analytics platform. My work focuses on frontend & backend integration, API development, testing, performance improvements and building maintainable code architectures.
              </p>
              
              <p className="text-lg text-[var(--muted-text)] font-light leading-relaxed mb-6">
               Technologies I work with the most: React, TypeScript, Go, Python, PostgreSQL/MongoDB, Docker.
              </p>
              
              <p className="text-lg text-[var(--muted-text)] font-light leading-relaxed mb-6">
Beyond full-stack development, I have a strong interest in cognitive science and neuroscience-inspired approaches in AI — especially how biological learning and decision-making mechanisms can shape more adaptive and intelligent software systems.
              </p>
              
              <p className="text-lg text-[var(--muted-text)] font-light leading-relaxed">
               I’m a developer who loves learning, improving, and shipping reliable systems. My goal is to build scalable and impactful software that brings real value to people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}