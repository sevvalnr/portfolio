'use client'

export default function ContactPage() {
  const contactInfo = {
    email: "sewalnrkibar@gmail.com",
    location: "Istanbul, Turkey",
    linkedin: "www.linkedin.com/in/şevval-nur-kibar-724197236",
    github: "https://github.com/sevvalnr",
    gitlab: "https://gitlab.com/sewalnrkibar",
    medium: "medium.com/@sewalnrkibar"
  }

  return (
    <div className="min-h-screen pt-10 pb-20 bg-[var(--background)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-[var(--foreground)]">
            Contact Me
          </h1>
          <p className="text-xl text-[var(--muted-text)] max-w-3xl mx-auto font-light leading-relaxed">
            I am always interested in new opportunities and exciting projects. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Information - 6 Elements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="glass p-8 rounded-sm text-center hover-lift group border border-[var(--border-color)]">
            <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-[var(--background)] text-2xl">📧</span>
            </div>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-3 tracking-wide">Email</h3>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors text-lg break-all font-light"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Location */}
          <div className="glass p-8 rounded-sm text-center hover-lift group border border-[var(--border-color)]">
            <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-[var(--background)] text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-3 tracking-wide">Location</h3>
            <p className="text-[var(--muted-text)] text-lg font-light">{contactInfo.location}</p>
          </div>

          {/* LinkedIn */}
          <div className="glass p-8 rounded-sm text-center hover-lift group border border-[var(--border-color)]">
            <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-[var(--background)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-3 tracking-wide">LinkedIn</h3>
            <a 
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors text-sm break-all font-light"
            >
              {contactInfo.linkedin}
            </a>
          </div>

          {/* GitHub */}
          <div className="glass p-8 rounded-sm text-center hover-lift group border border-[var(--border-color)]">
            <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-[var(--background)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-3 tracking-wide">GitHub</h3>
            <a 
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors text-lg font-light"
            >
              github.com/sevvalnr
            </a>
          </div>

          {/* GitLab */}
          <div className="glass p-8 rounded-sm text-center hover-lift group border border-[var(--border-color)]">
            <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-[var(--background)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
              </svg>
            </div>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-3 tracking-wide">GitLab</h3>
            <a 
              href={contactInfo.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors text-lg font-light"
            >
              gitlab.com/sewalnrkibar
            </a>
          </div>

          {/* Medium */}
          <div className="glass p-8 rounded-sm text-center hover-lift group border border-[var(--border-color)]">
            <div className="w-16 h-16 bg-[var(--foreground)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-[var(--background)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </div>
            <h3 className="text-xl font-light text-[var(--foreground)] mb-3 tracking-wide">Medium</h3>
            <a 
              href={`https://${contactInfo.medium}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors text-lg font-light"
            >
              {contactInfo.medium}
            </a>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-16">
          <div className="glass p-8 rounded-sm text-center border border-[var(--border-color)]">
            <h2 className="text-2xl font-light text-[var(--foreground)] mb-6 tracking-wide">Current Status</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="text-[var(--foreground)] font-light">Available for new opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="text-[var(--foreground)] font-light">Open to freelance projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="text-[var(--foreground)] font-light">Interested in full-time positions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}