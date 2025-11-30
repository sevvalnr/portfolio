'use client'

export default function CVPage() {
  const cvData = {
    name: "Şevval Nur Kibar",
    title: "Full Stack Developer & Software Engineer",
    contact: {
      email: "sewalnrkibar@gmail.com",
      linkedin: "linkedin.com/in/şevval-nur-kibar-724197236",
      github: "github.com/sevvalnr",
      gitlab: "gitlab.com/sewalnrkibar"
    },
    summary: "Experienced full-stack developer with expertise in modern web technologies, AI/ML applications, and cloud infrastructure. Passionate about building scalable applications and innovative solutions.",
    experience: [
      {
        title: "Full Stack Developer",
        company: "Hitai",
        period: "2025 - Present",
        location: "Belgium-Remote",
        description: "Worked on various projects including API development, frontend implementation, and database optimization with python and ReacyJS."
      },
      {
        title: "Software Engineer Intern",
        company: "MCS Ajans",
        period: "2024 - 2024",
        location: "Istanbul, Turkey",
        description: "Worked on various projects including API development, frontend implementation, and database optimization."
      },
      {
        title: "Full Stack Developer",
        company: "Fabriqa Innovation",
        period: "2023 - 2024",
        location: "Istanbul, Turkey",
        description: "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions."
      },
    ],
    education: [
      {
        degree: "Bachelor of Computer Engineering (English)",
        school: "Istanbul Aydin University",
        year: "2021-2025",
        details: "Computer Engineering Department"
      }
    ],
    
    projects: [
      {
        title: "Interactive Reading Platform",
        subtitle: "Full Stack Web & Mobile Application with AI",
        technologies: ["Golang Microservices", "React", "React Native", "MongoDB", "AWS ECS", "Docker", "Terraform"],
        description: "Built scalable EPUB reading platform with AI-powered recommendations and real-time features."
      },
      {
        title: "Sentiment Analyzer",
        subtitle: "Python, Flask, ReactJS, NLP",
        technologies: ["Python", "Flask", "ReactJS", "NLP", "Machine Learning"],
        description: "Built full-stack sentiment analysis application with Flask API and React frontend."
      },
      {
        title: "Habit Tracker - Done Day",
        subtitle: "C#, Asp.Net, ReactJS, SQL Server",
        technologies: ["C#", "Asp.Net", "ReactJS", "SQL Server"],
        description: "Built a habit tracker application with C# and Asp.Net backend and ReactJS frontend."
      }
    ],
    skills: {
      "Frontend Technologies": ["React", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      "Backend Technologies": ["Python", "JavaScript", "Golang", "Java"],
      "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      "Cloud & DevOps": ["AWS", "Docker", "Terraform", "Git", "CI/CD"],
      "Tools & Platforms": ["VS Code", "Postman", "Figma", "Slack"]
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/cv-sevval-kibar.pdf'
    link.download = 'Sevval_Kibar_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen pt-10 pb-20 bg-[var(--background)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-[var(--foreground)] tracking-tight">
            {cvData.name}
          </h1>
          <h2 className="text-2xl text-[var(--muted-text)] mb-8 font-light">{cvData.title}</h2>
          <button 
            onClick={handleDownload}
            className="px-8 py-4 text-lg font-light text-[var(--foreground)] border-2 border-[var(--foreground)] rounded-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 tracking-wide"
          >
            📄 Download CV
          </button>
        </div>



        {/* Professional Summary */}
        <div className="bg-[var(--foreground)]/5 p-8 rounded-sm border border-[var(--border-color)] mb-8">
          <h3 className="text-2xl font-light text-[var(--foreground)] mb-4 tracking-wide">Professional Summary</h3>
          <p className="text-[var(--muted-text)] leading-relaxed font-light">{cvData.summary}</p>
        </div>
{/* 
        Education
        <div className="bg-[var(--foreground)]/5 p-8 rounded-sm border border-[var(--border-color)] mb-8">
          <h3 className="text-2xl font-light text-[var(--foreground)] mb-6 tracking-wide">Education</h3>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-xl font-light text-[var(--foreground)] mb-2">{edu.degree}</h4>
              <p className="text-[var(--foreground)] font-light mb-1">{edu.school}</p>
              <p className="text-[var(--muted-text)] font-light mb-1">{edu.year}</p>
              <p className="text-[var(--muted-text)] text-sm font-light">{edu.details}</p>
            </div>
          ))}
        </div> */}

        {/* Experience */}
        <div className="bg-[var(--foreground)]/5 p-8 rounded-sm border border-[var(--border-color)] mb-8">
          <h3 className="text-2xl font-light text-[var(--foreground)] mb-6 tracking-wide">Experience</h3>
          {cvData.experience.map((exp, index) => (
            <div key={index} className="mb-6 pb-6 border-b border-[var(--border-color)] last:border-b-0 last:mb-0 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-light text-[var(--foreground)]">{exp.title}</h4>
                <span className="text-[var(--foreground)] text-sm font-light">{exp.period}</span>
              </div>
              <p className="text-[var(--foreground)] font-light mb-2">{exp.company} • {exp.location}</p>
              <p className="text-[var(--muted-text)] font-light leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>


        {/* Skills */}
        <div className="bg-[var(--foreground)]/5 p-8 rounded-sm border border-[var(--border-color)]">
          <h3 className="text-2xl font-light text-[var(--foreground)] mb-6 tracking-wide">Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(cvData.skills).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-lg font-light text-[var(--foreground)] mb-3 tracking-wide">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm text-[var(--foreground)] font-light bg-[var(--foreground)]/5 rounded-sm border border-[var(--border-color)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}