'use client'

export default function ProjectsPage() {
  const projects = [
        {
      title: "Interactive Reading Platform",
      description: "Full Stack Web & Mobile Application with AI-powered recommendations and real-time features. Built with Golang Microservices, React, React Native, MongoDB, AWS ECS, Docker, Terraform.",
      tech: ["Golang", "React", "React Native", "MongoDB", "AWS", "Docker", "Terraform"],
    },
    {
      title: "Done Day - Habit Tracking Application",
      description: "A full-stack habit tracking application built with React (Frontend) and .NET Core (Backend). Features: Create, read, update, delete habits, mark completed/incomplete, progress tracking, modern UI with Tailwind CSS, real-time API.",
      tech: ["React", ".NET Core", "Tailwind CSS", "API"],
    },
    {
      title: "Sentiment Analysis Project",
      description: "This project analyzes the sentiment of user-provided text. Flask-based backend API with React frontend interface.",
      tech: ["Flask", "React", "API"],
    },
    {
      title: "Chaos Mirror - Data Art Project",
      description: "Transforms daily data into a 3D visualization of the Lorenz Attractor, creating unique data-driven art.",
      tech: ["3D Visualization", "Data Art", "JavaScript"],
    },

  ];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-[#0a2e1a] via-[#114d2e] to-[#1a7a4c] relative overflow-hidden">
      {/* Floating Neon Accents */}
      <div className="neon-accent"></div>
      <div className="neon-accent"></div>
      <div className="neon-accent"></div>

      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my notable projects showcasing my skills in full-stack web development, AI, data visualization, and mobile applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="bg-gradient-to-br from-[#26bb71] to-[#646060] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neon accent keyframes */}
     <style jsx>{`
  .neon-accent {
    position: absolute;
    border-radius: 50%;
    filter: blur(4px);
    opacity: 0.4;
    animation: float 6s ease-in-out infinite;
  }
  .neon-accent:nth-child(1) { 
    width: 100px; 
    height: 100px; 
    top: 10%; 
    right: 10%; 
    background: #006633; /* koyu yeşil */
    animation-delay: 0s; 
  }
  .neon-accent:nth-child(2) { 
    width: 150px; 
    height: 150px; 
    top: 30%; 
    right: 20%; 
    background: #2B6919; /* daha koyu yeşil */
    animation-delay: 2s; 
  }
  .neon-accent:nth-child(3) { 
    width: 80px; 
    height: 80px; 
    top: 60%; 
    right: 15%; 
    background: #008040; /* derin yeşil ton */
    animation-delay: 4s; 
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`}</style>
    </div>
  );
}
