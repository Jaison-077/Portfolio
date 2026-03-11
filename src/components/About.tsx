'use client'

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
                    About Me
                </h2>
                <div className="section-divider mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left - Image/Profile Card */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="relative bg-dark/50 backdrop-blur-md border border-primary/30 rounded-2xl p-8 glow-primary hover:border-primary/70 transition-all duration-300">
                            <div className="bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl aspect-square flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <div className="text-7xl">👨‍💻</div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 gradient-text">Jaison K Sebastian</h3>
                            <p className="text-primary font-semibold mb-4">Angular & .NET Developer</p>
                            <p className="text-gray-400 text-sm">
                                Delhi, India | 3.6+ years experience
                            </p>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-8">
                        <div className="group">
                            <h3 className="text-2xl font-bold mb-4 text-primary">About Me</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                I'm a passionate .NET Developer and Backend Engineer with 3.6+ years of professional experience building scalable, high-performance enterprise applications. My expertise spans full-stack development with a strong focus on backend architecture, RESTful API design, and cloud technologies.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                I specialize in designing and implementing robust backend systems using ASP.NET Core, optimizing SQL Server databases, and deploying solutions on Azure cloud infrastructure. I'm passionate about writing clean, maintainable code and architecting solutions that scale.
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Why Hire Me?</h3>
                            <ul className="text-gray-300 space-y-3">
                                <li className="flex items-start gap-3">
                                  <span className="text-primary font-bold text-lg">✓</span>
                                  <span><strong>Backend-First Mentality:</strong> Decade-level focus on ASP.NET Core, Web APIs, and microservices architecture</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <span className="text-primary font-bold text-lg">✓</span>
                                  <span><strong>Performance Optimization:</strong> Proven track record of 60%+ API performance improvements through caching and query optimization</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <span className="text-primary font-bold text-lg">✓</span>
                                  <span><strong>Cloud Ready:</strong> Extensive Azure experience with deployment, scaling, and cloud best practices</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <span className="text-primary font-bold text-lg">✓</span>
                                  <span><strong>Production Experience:</strong> Built systems handling 1000+ concurrent users with enterprise-grade reliability</span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4 space-y-4">
                            <h3 className="text-2xl font-bold text-primary">Education</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-gradient-to-b from-secondary to-primary pl-4 hover:translate-x-2 transition-transform duration-300 bg-dark/20 rounded-r-lg p-3">
                                    <h4 className="font-semibold text-lg text-white mb-1">Bachelor of Computer Applications</h4>
                                    <p className="text-primary text-sm font-semibold">Himalayan Garhwal University</p>
                                    <p className="text-gray-400 text-sm mt-1">2018 - 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
