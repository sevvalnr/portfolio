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
                Recent software engineering graduate. I am passionate about full-stack 
                development, cloud technologies, and creating scalable digital solutions.
              </p>
              
              <p className="text-lg text-[var(--muted-text)] font-light leading-relaxed mb-6">
                My goal is to make my mark in the tech industry by building innovative 
                applications that solve real-world problems and enhance user experiences.
              </p>
              
              <p className="text-lg text-[var(--muted-text)] font-light leading-relaxed mb-6">
                I specialize in modern web technologies including React, Next.js, Node.js, 
                and cloud platforms, with a strong focus on clean code and best practices.
              </p>
              
              <p className="text-lg text-[var(--muted-text)] font-light leading-relaxed mb-6">
                I would love to work with teams and companies who will give me the opportunity 
                to apply my technical skills and contribute to meaningful digital products.
              </p>
              
              <p className="text-lg text-[var(--muted-text)] font-light leading-relaxed">
                Reach out if you think we can create impactful software solutions together 
                and push the boundaries of what's possible in the digital space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}