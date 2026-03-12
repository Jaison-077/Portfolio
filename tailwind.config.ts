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
                // Dark mode colors
                dark: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
                // Accent colors
                primary: '#7c3aed',
                secondary: '#ec4899',
                tertiary: '#06b6d4',
                accent: '#f59e0b',
            },
            fontFamily: {
                display: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Poppins', 'Inter', 'sans-serif'],
                body: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Poppins', 'Inter', 'sans-serif'],
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
            },
            animation: {
                'fade-in': 'fade-in 0.6s ease-out',
                'slide-in-up': 'slide-in-up 0.6s ease-out',
                'slide-in-down': 'slide-in-down 0.6s ease-out',
                'slide-in-left': 'slide-in-left 0.6s ease-out',
                'slide-in-right': 'slide-in-right 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'float-slow': 'float-slow 4s ease-in-out infinite',
                'bounce-in': 'bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'spin-slow': 'rotate-360 3s linear infinite',
                'spin-reverse': 'rotate-360 3s linear infinite reverse',
                'shimmer': 'shimmer 2s infinite',
                'scan': 'scan 3s linear infinite',
            },
            keyframes: {
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                'slide-in-up': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'slide-in-down': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(-30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'slide-in-left': {
                    from: {
                        opacity: '0',
                        transform: 'translateX(-30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                'slide-in-right': {
                    from: {
                        opacity: '0',
                        transform: 'translateX(30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'bounce-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.9)',
                    },
                    '50%': {
                        opacity: '1',
                        transform: 'scale(1.05)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
                    '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' },
                },
                'rotate-360': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                'scan': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '12px',
                lg: '16px',
                xl: '24px',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            transitionDuration: {
                '400': '400ms',
            },
            boxShadow: {
                'soft': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
                'glow': '0 0 30px rgba(124, 58, 237, 0.3)',
                'glow-lg': '0 0 40px rgba(124, 58, 237, 0.5)',
                'glow-secondary': '0 0 30px rgba(236, 72, 153, 0.2)',
            },
        },
    },
    plugins: [],
}

export default config
