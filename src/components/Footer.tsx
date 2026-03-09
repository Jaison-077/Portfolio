'use client'

import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark/50 backdrop-blur-md border-t border-primary/20 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold gradient-text mb-2">Portfolio</h3>
                        <p className="text-gray-400 text-sm">
                            Building beautiful and functional digital experiences
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
                        <div className="space-x-4">
                            <Link
                                href="#about"
                                className="text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                About
                            </Link>
                            <Link
                                href="#projects"
                                className="text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                Projects
                            </Link>
                            <Link
                                href="#skills"
                                className="text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                Skills
                            </Link>
                            <Link
                                href="#contact"
                                className="text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-primary font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-secondary transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-secondary transition-colors"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>© {currentYear} Portfolio. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
