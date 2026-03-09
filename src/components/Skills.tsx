'use client'

const skillCategories = [
    {
        category: 'Frontend',
        skills: [
            { name: 'Angular', level: 90 },
            { name: 'HTML', level: 85 },
            { name: 'CSS', level: 85 },
            { name: 'JavaScript', level: 80 },
            { name: 'TypeScript', level: 75 },
            { name: 'Bootstrap', level: 80 },
            { name: 'jQuery', level: 70 },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: '.NET Core MVC', level: 85 },
            { name: '.NET Framework', level: 80 },
            { name: 'C#', level: 85 },
            { name: 'Entity Framework', level: 80 },
            { name: 'REST APIs', level: 85 },
        ],
    },
    {
        category: 'Database & Cloud',
        skills: [
            { name: 'SQL Server', level: 85 },
            { name: 'Azure App Services', level: 70 },
            { name: 'Azure SQL Database', level: 70 },
            { name: 'Database Design', level: 80 },
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
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    I have extensive experience with modern technologies and tools for building scalable web applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <div className="relative bg-dark/50 backdrop-blur-md border border-primary/30 rounded-xl p-8 group-hover:border-primary/60 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-6 text-primary">
                                    {category.category}
                                </h3>

                                <div className="space-y-6">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold">{skill.name}</span>
                                                <span className="text-primary text-sm font-bold">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-teamsPrimary to-teamsSecondary rounded-full transition-all duration-500 border border-teamsBorder shadow-lg"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        boxShadow: '0 0 12px #6264A7, 0 0 6px #464775',
                                                        background: `linear-gradient(90deg, #6264A7 0%, #464775 100%)`,
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
                        'MES Systems',
                        'RFID Integration',
                        'Git',
                        'GitHub',
                        'Visual Studio',
                        'VS Code',
                        'Postman',
                        'ServiceNow',
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
