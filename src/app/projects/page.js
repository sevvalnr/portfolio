'use client'
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function ProjectsPage() {
  const projects = [
    {
      id: "interactive-reading",
      title: "Interactive Reading Platform",
      description: "Full Stack Web & Mobile Application with AI-powered recommendations and real-time features. Built with Golang Microservices, React, React Native, MongoDB, AWS ECS, Docker, Terraform.",
      tech: ["Golang", "React", "React Native", "MongoDB", "AWS", "Docker", "Terraform"],
    },
    {
      id: "done-day",
      title: "Done Day - Habit Tracking Application",
      description: "A full-stack habit tracking application built with React (Frontend) and .NET Core (Backend). Features: Create, read, update, delete habits, mark completed/incomplete, progress tracking, modern UI with Tailwind CSS, real-time API.",
      tech: ["React", ".NET Core", "Tailwind CSS", "API"],
    },
    {
      id: "sentiment-analysis",
      title: "Sentiment Analysis Project",
      description: "This project analyzes the sentiment of user-provided text. Flask-based backend API with React frontend interface.",
      tech: ["Flask", "React", "API"],
    },
    {
      id: "chaos-mirror",
      title: "Chaos Mirror - Data Art Project",
      description: "Transforms daily data into a 3D visualization of the Lorenz Attractor, creating unique data-driven art.",
      tech: ["3D Visualization", "Data Art", "JavaScript"],
    },
  ];

  const containerRef = useRef(null);
  const [scales, setScales] = useState(Array(projects.length).fill(1));

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const center = containerRect.left + containerRect.width / 2;

      const newScales = Array.from(container.children).map((child, idx) => {
        const cardRect = child.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(center - cardCenter);
        // The closer to center, the bigger the scale (max 1.0, min 0.85)
        const scale = Math.max(0.85, 1 - distance / containerRect.width);
        return scale;
      });
      setScales(newScales);
    };

    handleScroll(); // Initial call
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll);
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [projects.length]);

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-[#0a2e1a] via-[#114d2e] to-[#1a7a4c] relative overflow-hidden">
      {/* Floating Neon Accents */}
      <div className="neon-accent"></div>
      <div className="neon-accent"></div>
      <div className="neon-accent"></div>

      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold gradient-text mb-4 sm:mb-6">
            My Projects
          </h1>
        </div>

        {/* Horizontal Scroll Cards with scaling */}
        <div className="flex justify-center items-center" style={{ height: '60vh' }}>
          <div
            ref={containerRef}
            className="flex space-x-4 md:space-x-8 overflow-x-auto scrollbar-thin scrollbar-thumb-[#26bb71]/60 scrollbar-track-transparent snap-x snap-mandatory scroll-smooth px-2 sm:px-4 h-full mx-auto"
            style={{ scrollSnapType: 'x mandatory', width: '85vw', maxWidth: '85vw' }}
          >
            {projects.map((project, idx) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="snap-center flex-shrink-0"
                style={{
                  width: '40vw', // Keep your original width
                  maxWidth: '40vw',
                  height: '90%',
                  transform: `scale(${scales[idx]})`,
                  zIndex: scales[idx] > 0.95 ? 10 : 1,
                  transition: 'transform 0.5s cubic-bezier(.4,2,.6,1), z-index 0.2s',
                }}
              >
                <div className="glass p-4 sm:p-8 rounded-2xl cursor-pointer h-full shadow-xl flex flex-col justify-center">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-white mb-4 sm:mb-6">{project.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="bg-gradient-to-br from-[#26bb71] to-[#646060] text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-base font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
          background: #006633;
          animation-delay: 0s; 
        }
        .neon-accent:nth-child(2) { 
          width: 150px; 
          height: 150px; 
          top: 30%; 
          right: 20%; 
          background: #2B6919;
          animation-delay: 2s; 
        }
        .neon-accent:nth-child(3) { 
          width: 80px; 
          height: 80px; 
          top: 60%; 
          right: 15%; 
          background: #008040;
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
