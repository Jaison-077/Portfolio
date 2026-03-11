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
    title: 'Manufacturing Reporting & RFID Tracking System',
    description:
      'Enterprise-scale manufacturing dashboard and backend system for real-time production monitoring, efficiency tracking, and RFID-based asset management.',
    achievements: [
      'Built ASP.NET Core REST API handling 1000+ concurrent requests',
      'Designed SQL Server database for real-time data processing',
      'Developed Angular dashboards with real-time data visualization',
      'Integrated RFID scanning for production flow tracking',
      'Deployed on Azure with auto-scaling capabilities'
    ],
    tags: ['ASP.NET Core', 'Web API', 'SQL Server', 'Angular', 'Azure', 'RFID'],
    image: '🏭',
    github: 'https://github.com/Jaison-077',
  },
  {
    id: 2,
    title: 'Online Charity Management System',
    description:
      'Full-stack web application for managing NGO donations, fund distribution, and donor relationships with secure payment processing.',
    achievements: [
      'Developed secure donation management APIs with payment gateway integration',
      'Implemented role-based access control and authentication',
      'Built responsive Angular frontend for donor registration and tracking',
      'Optimized SQL queries reducing data retrieval time by 40%',
      'Created comprehensive reporting module for fund analysis'
    ],
    tags: ['ASP.NET Core', '.NET Core MVC', 'SQL Server', 'Entity Framework', 'Angular'],
    image: '🤝',
    github: 'https://github.com/Jaison-077',
  },
  {
    id: 3,
    title: 'Online Food Order Processing System',
    description:
      'Scalable backend system for restaurant management with order processing, payment handling, and real-time order tracking.',
    achievements: [
      'Designed RESTful APIs for order management and vendor coordination',
      'Implemented microservices architecture for payment and inventory',
      'Built real-time order status tracking system',
      'Created comprehensive testing suite with 85% code coverage',
      'Optimized API response time from 800ms to 150ms'
    ],
    tags: ['ASP.NET Core', 'Web API', 'C#', 'SQL Server', 'Angular'],
    image: '🍕',
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