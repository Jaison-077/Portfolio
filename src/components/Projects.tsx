'use client'

import { useState } from 'react'

type Project = {
  id: number
  title: string
  description: string
  achievements: string[]
  tags: string[]
  image: string        // emoji or icon
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Daily Consumption Reporting (DCR) Portal',
    description:
      'Enterprise-scale system to digitalize and streamline material consumption tracking, validation, and reporting across manufacturing production lines. Improved data accuracy, reduced manual intervention, and enabled real-time visibility into production consumption and variance analysis.',
    achievements: [
      'Designed and developed RESTful APIs for data submission, validation, and approval workflows',
      'Implemented complex business validation rules (UoM checks, BOM-level validation, variance threshold checks)',
      'Designed optimized SQL Server schemas for transactions, summaries, and audit logs',
      'Integrated with MES/ERP systems for actual vs. standard BOM comparison and deviation detection',
      'Developed role-based access control (RBAC) with multi-level approval workflows',
      'Implemented comprehensive audit logging for compliance and traceability'
    ],
    tags: ['.NET Core API', 'C#', 'SQL Server', 'REST APIs', 'MES/ERP Integration', 'RBAC'],
    image: '📊',
    github: 'https://github.com/Jaison-077',
  },
  {
    id: 2,
    title: 'Manufacturing Reporting & RFID Tracking System',
    description:
      'Backend-driven system for manufacturing reporting and RFID-based tracking, enabling real-time visibility into production processes. Improved traceability, reduced manual tracking efforts, and ensured accurate production data flow across systems.',
    achievements: [
      'Designed and developed backend services using .NET Core MVC with secure RESTful APIs',
      'Implemented RFID data processing logic for manufacturing unit tracking and traceability',
      'Designed and maintained SQL Server databases for RFID data and production records',
      'Integrated backend services with Manufacturing Execution Systems (MES) for real-time synchronization',
      'Optimized backend workflows for real-time data processing and system reliability',
      'Enabled accurate production data flow across integrated manufacturing systems'
    ],
    tags: ['.NET Core MVC', 'C#', 'SQL Server', 'REST APIs', 'MES Integration', 'RFID Processing'],
    image: '🏭',
    github: 'https://github.com/Jaison-077',
  },
  {
    id: 3,
    title: 'Online Charity Management System',
    description:
      'Full-stack web application for managing NGO donations, fund distribution, and donor relationships with secure payment processing and comprehensive financial reporting.',
    achievements: [
      'Developed secure donation management APIs with payment gateway integration',
      'Implemented role-based access control and multi-factor authentication',
      'Built responsive Angular frontend for donor registration and tracking',
      'Optimized SQL queries reducing data retrieval time by 40%',
      'Created comprehensive financial reporting and fund analysis modules'
    ],
    tags: ['ASP.NET Core', '.NET Core MVC', 'SQL Server', 'Entity Framework', 'Angular'],
    image: '🤝',
    github: 'https://github.com/Jaison-077',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <div className="section-divider mb-12"></div>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Here are some of my recent projects showcasing my skills and expertise
          in building modern web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300" />
              <div className="relative bg-dark/50 backdrop-blur-md border border-primary/30 rounded-xl p-6 h-full flex flex-col hover:border-primary/70 transition-all duration-300 hover:shadow-2xl group-hover:transform group-hover:scale-105">
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg aspect-video flex items-center justify-center mb-4 text-6xl group-hover:scale-125 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-4 text-sm">
                  <p className="text-primary font-semibold mb-2">Key Achievements:</p>
                  <ul className="space-y-1 text-gray-300">
                    {project.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary font-bold">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary text-xs font-semibold hover:bg-primary/30 hover:border-primary/80 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm active:scale-95 transform hover:scale-105 glow-primary text-center"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/20 transition-all duration-300 text-sm active:scale-95 transform hover:scale-105 text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <button className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm active:scale-95 transform hover:scale-105 glow-primary">
                      View Details →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}