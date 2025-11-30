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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      
      if (isMobile) {
        // Mobile'da scale efektini kapat
        setScales(Array(projects.length).fill(1));
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const center = containerRect.left + containerRect.width / 2;

      const newScales = Array.from(container.children).map((child, idx) => {
        const cardRect = child.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(center - cardCenter);
        const scale = Math.max(0.85, 1 - distance / containerRect.width);
        return scale;
      });
      setScales(newScales);
    };

    handleScroll();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll);
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [projects.length, isMobile]);

  return (
    <div className="min-h-screen pt-10 pb-20 bg-[var(--background)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-[var(--foreground)] tracking-tight">
            My Projects
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-text)] max-w-2xl mx-auto font-light leading-relaxed px-4">
            A collection of my recent work showcasing full-stack development, 
            AI/ML projects, and innovative digital solutions.
          </p>
        </div>

        {/* Mobile View - Vertical Scroll */}
        <div className="block lg:hidden">
          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, idx) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block"
              >
                <div className="bg-[var(--foreground)]/5 p-4 sm:p-6 rounded-sm border border-[var(--border-color)] cursor-pointer shadow-sm hover-lift">
                  <h3 className="text-lg sm:text-xl font-light text-[var(--foreground)] mb-3 sm:mb-4 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted-text)] mb-4 sm:mb-6 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="bg-[var(--foreground)] text-[var(--background)] px-2 sm:px-3 py-1 rounded-full text-xs font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop View - Horizontal Scroll */}
        <div className="hidden lg:flex justify-center items-center" style={{ height: '60vh' }}>
          <div
            ref={containerRef}
            className="flex space-x-6 md:space-x-8 overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--foreground)]/20 scrollbar-track-transparent snap-x snap-mandatory scroll-smooth px-4 h-full mx-auto"
            style={{ scrollSnapType: 'x mandatory', width: '85vw', maxWidth: '85vw' }}
          >
            {projects.map((project, idx) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="snap-center flex-shrink-0"
                style={{
                  width: '40vw',
                  maxWidth: '40vw',
                  height: '90%',
                  transform: `scale(${scales[idx]})`,
                  zIndex: scales[idx] > 0.95 ? 10 : 1,
                  transition: 'transform 0.5s cubic-bezier(.4,2,.6,1), z-index 0.2s',
                }}
              >
                <div className="bg-[var(--foreground)]/5 p-6 rounded-sm border border-[var(--border-color)] cursor-pointer h-full shadow-sm flex flex-col justify-center hover-lift">
                  <h3 className="text-xl md:text-2xl font-light text-[var(--foreground)] mb-4 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted-text)] mb-6 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="bg-[var(--foreground)] text-[var(--background)] px-3 py-1 rounded-full text-xs font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-[var(--foreground)]/5 p-6 sm:p-8 rounded-sm border border-[var(--border-color)]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-light text-[var(--foreground)] mb-1 sm:mb-2">
                  {projects.length}+
                </div>
                <div className="text-[var(--muted-text)] text-xs sm:text-sm font-light">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-light text-[var(--foreground)] mb-1 sm:mb-2">
                  10+
                </div>
                <div className="text-[var(--muted-text)] text-xs sm:text-sm font-light">
                  Technologies
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-light text-[var(--foreground)] mb-1 sm:mb-2">
                  2+
                </div>
                <div className="text-[var(--muted-text)] text-xs sm:text-sm font-light">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-light text-[var(--foreground)] mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-[var(--muted-text)] text-xs sm:text-sm font-light">
                  Efficiency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}