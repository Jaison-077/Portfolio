# Jaison K Sebastian - Portfolio

A modern, attractive portfolio website showcasing Angular & .NET development expertise. Features a dark theme with vibrant neon accents, smooth animations, and a responsive design built with Next.js and Tailwind CSS.

## ✨ Features

- **Modern Design**: Dark mode with vibrant cyan, lime, and pink neon accents
- **Smooth Animations**: Engaging entrance animations and interactive hover effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Fully typed for better development experience
- **Components Included**:
  - Navigation with mobile menu
  - Hero section with CTA buttons
  - About section with experience timeline
  - Projects showcase with hover effects
  - Skills display with progress bars
  - Contact form with social links
  - Footer with quick links

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navigation.tsx    # Navigation bar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Skills.tsx       # Skills section
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   └── (other assets)
├── public/                   # Static files
├── package.json             # Dependencies
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Customization

### Update Content
Edit the relevant component files in `src/components/` to update:
- Your name and title
- About information
- Project details
- Skills and expertise
- Contact information

### Modify Colors
Edit `tailwind.config.ts` to customize the color scheme:
- `primary`: Cyan (#00D9FF)
- `secondary`: Lime (#00FF88)
- `accent`: Pink (#FF006E)

### Add Images
Replace the emoji placeholders in components with actual images:
1. Add images to `public/` folder
2. Use Next.js Image component for optimization

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration

## 📱 Responsive Breakpoints

The design adapts to:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository on Vercel
3. Vercel will automatically build and deploy

### Other Platforms
This is a standard Next.js app, so it can be deployed to:
- Netlify
- AWS
- Google Cloud
- Azure
- Any Node.js hosting

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Performance**: Images should be optimized before adding to the public folder
2. **SEO**: Update metadata in `layout.tsx` with your information
3. **Analytics**: Add your preferred analytics tool (Google Analytics, Vercel Analytics, etc.)
4. **Forms**: Integrate contact form with a service like Formspree, EmailJS, or your own backend

## 🚀 Next Steps

1. Customize all components with your information
2. Add your project images and links
3. Set up form submission backend
4. Test on various devices
5. Deploy to your preferred platform

---

Happy coding! 🎉
