'use client'

import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark/70 backdrop-blur-lg border-t border-primary/30 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="group">
                        <h3 className="text-2xl font-bold gradient-text mb-3 group-hover:scale-110 transform transition-transform">Portfolio</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Building beautiful and functional digital experiences with modern technologies and best practices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-primary font-semibold mb-4 text-lg">Quick Links</h4>
                        <div className="space-y-2 flex flex-col">
                            <Link
                                href="#about"
                                className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all text-sm font-medium"
                            >
                                → About
                            </Link>
                            <Link
                                href="#projects"
                                className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all text-sm font-medium"
                            >
                                → Projects
                            </Link>
                            <Link
                                href="#skills"
                                className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all text-sm font-medium"
                            >
                                → Skills
                            </Link>
                            <Link
                                href="#contact"
                                className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all text-sm font-medium"
                            >
                                → Contact
                            </Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-primary font-semibold mb-4 text-lg">Connect With Me</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Jaison-077"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary/40 hover:border-primary/80 hover:scale-125 transition-all duration-300 glow-primary"
                                title="GitHub"
                            >
                                🐙
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jaison-sebastian-542412136/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary/40 hover:border-primary/80 hover:scale-125 transition-all duration-300 glow-primary"
                                title="LinkedIn"
                            >
                                💼
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary/40 hover:border-primary/80 hover:scale-125 transition-all duration-300 glow-primary"
                                title="Twitter"
                            >
                                𝕏
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p className="font-medium">© {currentYear} Jaison K Sebastian. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-primary transition-colors font-medium">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors font-medium">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
