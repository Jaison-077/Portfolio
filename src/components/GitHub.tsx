'use client'

interface Repository {
  name: string
  description: string
  technologies: string[]
  stars: number
  icon: string
  url: string
}

const repositories: Repository[] = [
  {
    name: 'Manufacturing MES System',
    description: 'ASP.NET Core backend system for manufacturing data processing with real-time dashboard integration',
    technologies: ['ASP.NET Core', 'SQL Server', 'Web API', 'Angular'],
    stars: 0,
    icon: '🏭',
    url: 'https://github.com/Jaison-077',
  },
  {
    name: 'REST API Framework',
    description: 'Reusable framework for building enterprise REST APIs with authentication, validation, and logging',
    technologies: ['ASP.NET Core', 'Entity Framework', 'C#'],
    stars: 0,
    icon: '🔌',
    url: 'https://github.com/Jaison-077',
  },
  {
    name: 'Database Query Optimizer',
    description: 'Tool for analyzing and optimizing SQL Server queries with performance benchmarking',
    technologies: ['SQL Server', 'T-SQL', 'C#'],
    stars: 0,
    icon: '⚙️',
    url: 'https://github.com/Jaison-077',
  },
  {
    name: 'Azure Deployment Pipeline',
    description: 'Automated CI/CD pipeline for deploying ASP.NET Core applications to Azure',
    technologies: ['Azure', 'Git', 'DevOps', 'Docker'],
    stars: 0,
    icon: '🚀',
    url: 'https://github.com/Jaison-077',
  },
]

export default function GitHub() {
  return (
    <section id="github" className="flex items-center justify-center py-20 px-4 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Code & Repositories
        </h2>
        <div className="section-divider mb-12"></div>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Explore my GitHub repositories and see my latest projects, contributions, and open-source work.
        </p>

        {/* GitHub Profile Card */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-dark/50 backdrop-blur-md border border-primary/30 rounded-xl p-8 hover:border-primary/70 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">🐙</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">GitHub Profile</h3>
                  <p className="text-gray-400">Jaison-077</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Follow my GitHub for recent projects, contributions, and code samples. I regularly contribute to open-source and maintain multiple repositories focused on backend development and enterprise solutions.
              </p>
              <a
                href="https://github.com/Jaison-077"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 glow-primary"
              >
                Visit GitHub Profile →
              </a>
            </div>
          </div>
        </div>

        {/* Featured Repositories */}
        <h3 className="text-2xl font-bold mb-8 text-center text-primary">Featured Repositories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repositories.map((repo, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-dark/50 backdrop-blur-md border border-primary/30 rounded-xl p-6 hover:border-primary/70 transition-all duration-300 hover:shadow-xl hover:scale-105 transform h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{repo.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white">{repo.name}</h4>
                    </div>
                  </div>
                  {repo.stars > 0 && (
                    <div className="text-sm text-yellow-400 font-semibold">⭐ {repo.stars}</div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 flex-grow">{repo.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm active:scale-95 transform hover:scale-105 glow-primary text-center"
                >
                  View Repository →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
