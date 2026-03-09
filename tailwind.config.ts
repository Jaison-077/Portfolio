import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                teamsPrimary: '#6264A7', // Teams purple
                teamsSecondary: '#464775', // Teams dark purple
                teamsAccent: '#B3B3B3', // Teams gray
                teamsBackground: '#201F1E', // Teams dark background
                teamsSurface: '#2B2C34', // Teams surface
                teamsHighlight: '#E5E5E5', // Teams highlight
                teamsText: '#FFFFFF', // Teams main text
                teamsButton: '#464775', // Teams button
                teamsButtonHover: '#6264A7', // Teams button hover
                teamsBorder: '#B3B3B3', // Teams border
            },
            fontFamily: {
                display: ['Poppins', 'Montserrat', 'Arial', 'sans-serif'],
                body: ['Poppins', 'Montserrat', 'Arial', 'sans-serif'],
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
                glow: 'glow 2s ease-in-out infinite',
                slideInUp: 'slideInUp 0.5s ease-out',
                slideInLeft: 'slideInLeft 0.5s ease-out',
                slideInRight: 'slideInRight 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
                    '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.8)' },
                },
                slideInUp: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                slideInLeft: {
                    from: {
                        opacity: '0',
                        transform: 'translateX(-30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                slideInRight: {
                    from: {
                        opacity: '0',
                        transform: 'translateX(30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}

export default config
