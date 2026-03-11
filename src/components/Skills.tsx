'use client'

const skillCategories = [
    {
        category: 'Backend Development',
        skills: [
            { name: 'ASP.NET Core', level: 90 },
            { name: 'Web API / REST APIs', level: 90 },
            { name: 'C#', level: 90 },
            { name: '.NET Core MVC', level: 85 },
            { name: '.NET Framework', level: 80 },
            { name: 'Entity Framework', level: 85 },
            { name: 'LINQ', level: 85 },
        ],
    },
    {
        category: 'Database & Data',
        skills: [
            { name: 'SQL Server', level: 90 },
            { name: 'Database Design', level: 85 },
            { name: 'Query Optimization', level: 80 },
            { name: 'T-SQL', level: 85 },
            { name: 'Data Modeling', level: 80 },
        ],
    },
    {
        category: 'Frontend & UI',
        skills: [
            { name: 'Angular', level: 85 },
            { name: 'HTML/CSS', level: 85 },
            { name: 'TypeScript', level: 80 },
            { name: 'JavaScript', level: 85 },
            { name: 'Responsive Design', level: 80 },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { name: 'Azure App Services', level: 75 },
            { name: 'Azure SQL Database', level: 75 },
            { name: 'Azure Deployment', level: 70 },
            { name: 'Git / GitHub', level: 85 },
            { name: 'CI/CD Basics', level: 75 },
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
                    Skills & Expertise
                </h2>
                <div className="section-divider mb-12"></div>

                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
                    I have extensive experience with modern technologies and tools for building scalable web applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative bg-dark/50 backdrop-blur-md border border-primary/30 rounded-xl p-8 group-hover:border-primary/70 transition-all duration-300 group-hover:shadow-xl hover:scale-105 transform">
                                <h3 className="text-2xl font-bold mb-6 gradient-text">
                                    {category.category}
                                </h3>

                                <div className="space-y-6">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name} className="group/skill">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="font-semibold text-gray-200 group-hover/skill:text-white transition-colors">{skill.name}</span>
                                                <span className="text-primary text-sm font-bold bg-primary/20 px-2 py-1 rounded-full">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-dark/50 rounded-full h-3 overflow-hidden border border-primary/20">
                                                <div
                                                    className="h-full bg-gradient-to-r from-teamsPrimary via-primary to-teamsSecondary rounded-full transition-all duration-500 shadow-lg group-hover/skill:shadow-2xl"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        boxShadow: '0 0 12px #6264A7, 0 0 6px #464775',
                                                        background: `linear-gradient(90deg, #6264A7 0%, #00D9FF 50%, #464775 100%)`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        'Microservices',
                        'Dependency Injection',
                        'Authentication (JWT)',
                        'RESTful Architecture',
                        'Visual Studio',
                        'VS Code',
                        'Postman / Swagger',
                        'Git / GitHub',
                        'SOLID Principles',
                        'MES Systems',
                        'RFID Integration',
                        'Azure DevOps',
                    ].map((skill) => (
                        <div
                            key={skill}
                            className="bg-dark/50 backdrop-blur-md border border-secondary/30 rounded-lg p-4 text-center hover:border-secondary/60 hover:bg-secondary/5 transition-all duration-300"
                        >
                            <span className="font-semibold text-secondary">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
