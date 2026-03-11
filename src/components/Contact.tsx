'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
                    Get In Touch
                </h2>
                <div className="section-divider mb-12"></div>

                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
                    I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="group">
                            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-dark/20 transition-all duration-300 transform hover:translate-x-2">
                                <div className="w-12 h-12 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                                    ✉️
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1 text-white">Email</h3>
                                    <a
                                        href="mailto:officialjaisonksebastian1999@gmail.com"
                                        className="text-gray-300 hover:text-primary transition-colors font-medium"
                                    >
                                        officialjaisonksebastian1999@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-dark/20 transition-all duration-300 transform hover:translate-x-2">
                                <div className="w-12 h-12 bg-secondary/20 border border-secondary/50 rounded-lg flex items-center justify-center text-secondary group-hover:bg-secondary/30 group-hover:scale-110 transition-all duration-300">
                                    📍
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-white mb-1">Location</h3>
                                    <p className="text-gray-300 font-medium">
                                        Delhi, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-dark/20 transition-all duration-300 transform hover:translate-x-2">
                                <div className="w-12 h-12 bg-accent/20 border border-accent/50 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                                    💼
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-white mb-1">Let&apos;s Connect</h3>
                                    <p className="text-gray-300 font-medium">
                                        Available for freelance projects and full-time roles
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 space-y-4">
                            <h3 className="font-semibold text-lg text-primary">Follow Me</h3>
                            <div className="flex gap-4">
                                {[
                                    { name: 'GitHub', icon: '🐙', url: '#' },
                                    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/jaison-sebastian-542412136/' },
                                    { name: 'Twitter', icon: '𝕏', url: '#' },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center text-xl hover:bg-primary/40 hover:border-primary/80 hover:scale-125 hover:shadow-lg transition-all duration-300 glow-primary"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-primary">
                                    Name  <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-primary">
                                    Email  <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-primary">
                                    Subject  <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-primary">
                                    Message  <span className="text-red-400">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="input-field resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 glow-primary"
                            >
                                Send Message
                            </button>

                            {submitted && (
                                <div className="p-4 bg-secondary/30 border border-secondary/50 rounded-lg text-secondary text-center font-semibold animate-pulse">
                                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
