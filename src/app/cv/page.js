'use client'

export default function CVPage() {
  const cvData = {
    name: "Şevval Nur Kibar",
    title: "Full Stack Developer & Software Engineer",
    contact: {
      email: "sewalnrkibar@email.com",
      linkedin: "linkedin.com/in/sevval-kibar",
      github: "github.com/sevval-kibar",
      gitlab: "gitlab.com/sevval-kibar"
    },
    summary: "Experienced full-stack developer with expertise in modern web technologies, AI/ML applications, and cloud infrastructure. Passionate about building scalable applications and innovative solutions.",
    education: [
      {
        degree: "Bachelor of Computer Engineering (English)",
        school: "Istanbul Aydin University",
        year: "2021-2025",
        details: "Computer Engineering Department"
      }
    ],
    experience: [
      {
        title: "Full Stack Developer",
        company: "Fabriqa Innovation",
        period: "2023 - Present",
        description: "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions."
      },
      {
        title: "Software Engineer Intern",
        company: "MCS Ajans",
        period: "2022 - 2023",
        description: "Worked on various projects including API development, frontend implementation, and database optimization."
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
      "Programming Languages": ["Python", "JavaScript", "Golang", "Java", "C++"],
      "Frontend Technologies": ["React", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      "Backend Technologies": ["Node.js", "Flask", "Django", "Express.js"],
      "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      "Cloud & DevOps": ["AWS", "Docker", "Terraform", "Git", "CI/CD"],
      "AI/ML": ["NLP", "Machine Learning", "TensorFlow", "Scikit-learn"],
      "Tools & Platforms": ["VS Code", "Postman", "Figma", "Jira", "Slack"]
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/cv-sevval-kibar.pdf' // You'll need to add this PDF file to your public folder
    link.download = 'Sevval_Kibar_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {cvData.name}
          </h1>
          <h2 className="text-2xl text-white mb-6">{cvData.title}</h2>
          <button 
            onClick={handleDownload}
            className="glass px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            📄 Download CV
          </button>
        </div>

        <div className="glass p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-[#00d4ff]">📧</span>
              <span className="text-gray-300">{cvData.contact.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[#00d4ff]">💼</span>
              <a href={`https://${cvData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                {cvData.contact.linkedin}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[#00d4ff]">🐙</span>
              <a href={`https://${cvData.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                {cvData.contact.github}
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="glass p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
          <p className="text-gray-300 leading-relaxed">{cvData.summary}</p>
        </div>

        {/* Education */}
        <div className="glass p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
              <p className="text-[#00d4ff] font-medium">{edu.school}</p>
              <p className="text-gray-300">{edu.year}</p>
              <p className="text-gray-400 text-sm">{edu.details}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="glass p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
          {cvData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                <span className="text-[#00d4ff] text-sm">{exp.period}</span>
              </div>
              <p className="text-[#00d4ff] font-medium mb-2">{exp.company}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="glass p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Projects</h3>
          {cvData.projects.map((project, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold text-white mb-1">{project.title}</h4>
              <p className="text-[#00d4ff] font-medium mb-3">{project.subtitle}</p>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm font-medium text-[#00d4ff] bg-[#00d4ff]/10 rounded-md border border-[#00d4ff]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="glass p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(cvData.skills).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold text-[#00d4ff] mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm text-gray-300 bg-white/5 rounded border border-white/10"
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
