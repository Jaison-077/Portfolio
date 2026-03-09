import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Jaison K Sebastian - Angular & .NET Developer',
    description: 'Angular and .NET Developer with 3.6+ years of experience in enterprise-grade web applications, MES systems, and data-driven platforms.',
    keywords: ['Angular', '.NET', 'C#', 'SQL Server', 'MES', 'developer', 'portfolio'],
    authors: [{ name: 'Jaison K Sebastian' }],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-teamsBackground text-teamsText font-display">
                {children}
            </body>
        </html>
    )
}
