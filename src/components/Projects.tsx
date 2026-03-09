'use client'

import { useState } from 'react'

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  image: string        // emoji or icon
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Manufacturing Reporting & RFID Tracking System',
    description:
      'Designed and developed Angular dashboards to visualize real-time manufacturing production metrics, efficiency reports, and system alerts. Implemented backend services using .NET Core MVC and REST APIs to fetch, process, and expose MES production data.',
    tags: ['Angular', '.NET Core MVC', 'SQL Server', 'Azure', 'MES', 'RFID'],
    image: '🏭',
    link: '#',
  },
  {
    id: 2,
    title: 'Online Charity Management System',
    description:
      'Designed and developed a full-stack web application for managing charity donations and NGO fund distribution. Built a responsive Angular frontend for donor registration, donation tracking, and NGO management.',
    tags: ['Angular', '.NET Core MVC', 'SQL Server', 'Entity Framework'],
    image: '🤝',
    link: '#',
  },
  {
    id: 3,
    title: 'Online Food Order Processing System',
    description:
      'Developed a responsive Angular-based frontend for menu browsing, order placement, and user interaction. Created RESTful APIs using .NET Core to manage users, orders, sellers, and order status workflows.',
    tags: ['Angular', '.NET Core', 'SQL Server', 'REST APIs'],
    image: '🍕',
    link: '#',
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
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-dark/50 backdrop-blur-md border border-primary/30 rounded-xl p-6 h-full flex flex-col hover:border-primary/60 transition-all duration-300">
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg aspect-video flex items-center justify-center mb-4 text-5xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="w-full py-2 bg-primary text-dark font-semibold rounded-lg hover:bg-secondary transition-all duration-300 text-sm">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}