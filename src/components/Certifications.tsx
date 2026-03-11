'use client'

interface Certification {
  title: string
  issuer: string
  date: string
  icon: string
  description?: string
}

const certifications: Certification[] = [
  {
    title: 'Professional .NET Developer',
    issuer: 'Microsoft Certified',
    date: '2023',
    icon: '📜',
    description: 'Certified in ASP.NET Core and enterprise application development'
  },
  {
    title: 'Cloud Fundamentals - Azure',
    issuer: 'Microsoft Learn',
    date: '2023',
    icon: '☁️',
    description: 'Azure AppServices, SQL Database, and cloud deployment'
  },
  {
    title: 'RESTful Web Services with Spring Boot',
    issuer: 'Udemy',
    date: '2022',
    icon: '🔧',
    description: 'Advanced API design and architecture patterns'
  },
  {
    title: 'Database Design & Optimization',
    issuer: 'Professional Training',
    date: '2022',
    icon: '🗄️',
    description: 'SQL Server optimization and performance tuning'
  },
]

const achievements = [
  {
    title: '1000+ Concurrent Users',
    description: 'Built backend systems supporting 1000+ concurrent requests without performance degradation',
    icon: '👥'
  },
  {
    title: '60% Performance Improvement',
    description: 'Optimized legacy APIs reducing response time from 2.5s to 1s through smart caching',
    icon: '⚡'
  },
  {
    title: '3.6+ Years Experience',
    description: 'Diverse portfolio spanning manufacturing, fintech, and enterprise solutions',
    icon: '📈'
  },
  {
    title: 'Cloud Migration Expert',
    description: 'Successfully migrated 15+ applications to Azure with zero downtime',
    icon: '🚀'
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Certifications & Achievements
        </h2>
        <div className="section-divider mb-12"></div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-primary text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-dark/50 backdrop-blur-md border border-primary/30 rounded-lg p-6 hover:border-primary/70 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{cert.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-primary font-semibold text-sm">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  {cert.description && (
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-primary text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-dark/50 backdrop-blur-md border border-secondary/30 rounded-lg p-6 hover:border-secondary/70 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl flex-shrink-0">{achievement.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
