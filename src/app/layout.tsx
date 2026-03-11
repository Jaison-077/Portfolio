import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Jaison Sebastian - .NET Developer | Backend Engineer',
    description: 'Senior .NET Developer and Backend Engineer with 3.6+ years of expertise in ASP.NET Core, Web APIs, SQL Server, and Azure. Specializes in building scalable enterprise applications and REST APIs.',
    keywords: ['Backend Engineer', '.NET Developer', 'ASP.NET Core', 'C#', 'Web API', 'SQL Server', 'Azure', 'Cloud', 'Full-stack Developer', 'Software Engineer'],
    authors: [{ name: 'Jaison Sebastian' }],
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
