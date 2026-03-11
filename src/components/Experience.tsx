'use client'

interface ExperienceItem {
  title: string
  company: string
  duration: string
  location: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Associate Manufacturing Engineer, Software',
    company: 'First Solar Inc.',
    duration: 'Sep 2022 - Present',
    location: 'Delhi, India',
    responsibilities: [
      'Developed and maintained RESTful APIs using ASP.NET Core for manufacturing data processing',
      'Designed and optimized SQL Server databases for real-time production systems',
      'Built responsive Angular dashboards for real-time data visualization and analytics',
      'Implemented microservices architecture for scalable enterprise solutions',
      'Collaborated with cross-functional teams to translate business requirements into technical solutions',
    ],
    achievements: [
      'Reduced API response time by 60% through query optimization and caching strategies',
      'Built a real-time RFID tracking system handling 1000+ concurrent requests',
      'Designed database schema supporting 10M+ records with <200ms query response time',
      'Improved system performance, reducing deployment downtime by 75%',
      'Led migration of legacy systems to Azure cloud platform',
    ],
    technologies: ['ASP.NET Core', 'C#', 'Web API', 'SQL Server', 'Entity Framework', 'Angular', 'Azure', 'Git', 'REST APIs'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Professional Experience
        </h2>
        <div className="section-divider mb-12"></div>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          With over 3.6 years of professional experience, I have built scalable backend systems, optimized databases, and delivered enterprise solutions.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-dark/50 backdrop-blur-md border border-primary/30 rounded-xl p-8 hover:border-primary/70 transition-all duration-300 hover:shadow-xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 gradient-text">{exp.title}</h3>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-400 mt-2">
                      <span className="flex items-center gap-2">
                        📅 {exp.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        📍 {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-primary mb-3">Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-gray-300">
                        <span className="text-primary font-bold flex-shrink-0">→</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-primary mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex gap-3 text-gray-300">
                        <span className="text-secondary font-bold flex-shrink-0">✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-semibold hover:bg-primary/30 hover:border-primary/80 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
