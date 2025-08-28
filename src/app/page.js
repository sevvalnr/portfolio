import ProjectCard from '@/components/ProjectCard'
import Link from "next/link"

export default function HomePage() {
  // Real projects from CV
  const projects = [
      {
      title: "Interactive Reading Platform",
      description: "Full Stack Web & Mobile Application with AI. Built scalable EPUB reading platform with AI-powered recommendations and real-time features.",
      image: "bg-gradient-to-br from-purple-600 to-pink-600",
      technologies: ["Golang Microservices", "React", "React Native", "MongoDB", "AWS ECS", "Docker", "Terraform"],
      liveUrl: null,
      githubUrl: null,
      category: "Full Stack"
    },
    {
      title: "Sentiment Analyzer",
      description: "Python, Flask, ReactJS, NLP. Built full-stack sentiment analysis application with Flask API and React frontend.",
      image: "bg-gradient-to-br from-blue-600 to-cyan-600",
      technologies: ["Python", "Flask", "ReactJS", "NLP", "Machine Learning"],
      liveUrl: null,
      githubUrl: null,
      category: "AI/ML"
    }
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Hi, I&apos;m Şevval.</span>
            <span className="text-white ml-3">👋</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            I build digital products.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I&apos;m an engineer focusing on web development. I&apos;m providing freelance web development solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link 
              href="/#contact"
              className="glass px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              📬 Contact
            </Link>
            <Link 
              href="/cv"
              className="glass px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              📄 View CV
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            I build websites, ecommerce stores, and web apps.
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            I'm providing full-featured web services including web design, development and search engine optimization. I also like to use Django, AdonisJS, NextJS, React, Svelte, SolidJS.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Apps */}
            <div className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b9d] to-[#4facfe] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Web apps</h3>
              <p className="text-gray-300">
                I develop web applications in Python and JavaScript programming languages.
              </p>
            </div>

            {/* Software Solutions */}
            <div className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c44569] to-[#00d4ff] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Software Solutions</h3>
              <p className="text-gray-300">
                I build software solutions and provide technical solutions.
              </p>
            </div>

            {/* FullStack Solutions */}
            <div className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#ff6b9d] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">FullStack Solutions</h3>
              <p className="text-gray-300">
            I&apos;m providing full-featured web services including web design, development and search engine optimization. I also like to use Django, AdonisJS, NextJS, React, Svelte, SolidJS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
        <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-[#00d4ff] mb-2">FEATURED WORK</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">My Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects showcasing my skills in full-stack development, AI/ML, and digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="glass px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* E-Commerce Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-[#00d4ff] mb-2">SOFTWARE SOLUTIONS</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Software Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                I provide software solutions to my clients on UI, UX and FullStack as an expert web developer.
            </p>
          </div>

          {/* Platform Logos */}
          <div className="flex justify-center items-center gap-12 mb-16">
            <div className="glass px-8 py-4 rounded-lg">
              <span className="text-2xl font-bold text-white">FullStack</span>
            </div>
            <div className="glass px-8 py-4 rounded-lg">
              <span className="text-2xl font-bold text-white">AI/ML</span>
            </div>
            <div className="glass px-8 py-4 rounded-lg">
              <span className="text-2xl font-bold text-white">UI/UX</span>
            </div>
          </div>

          {/* Project Grid */}
          {/* <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Filiz Security Systems", image: "bg-gradient-to-br from-gray-800 to-gray-900" },
              { name: "Open Digital Gallery", image: "bg-gradient-to-br from-yellow-600 to-yellow-800" },
              { name: "Livicom", image: "bg-gradient-to-br from-blue-600 to-blue-800" },
              { name: "Istanbul Cruise Transfer", image: "bg-gradient-to-br from-green-600 to-green-800" },
              { name: "Tour Control Dashboard", image: "bg-gradient-to-br from-purple-600 to-purple-800" },
              { name: "La-Cuisinette", image: "bg-gradient-to-br from-red-600 to-red-800" },
              { name: "Gold Grain Organics", image: "bg-gradient-to-br from-indigo-600 to-indigo-800" },
              { name: "MCE Global", image: "bg-gradient-to-br from-pink-600 to-pink-800" },
              { name: "Lovedb4", image: "bg-gradient-to-br from-teal-600 to-teal-800" }
            ].map((project, index) => (
              <div key={index} className={`${project.image} rounded-xl p-6 h-48 flex items-end hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                <div className="text-white">
                  <h4 className="font-semibold text-lg">{project.name}</h4>
                  <p className="text-sm opacity-80">project.com</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  )
}
  