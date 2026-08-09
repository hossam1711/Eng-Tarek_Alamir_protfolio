# 💼 Portfolio Website - Tasneem Abdelrazek

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

**Modern, Fast, and Optimized Portfolio Website**

[Demo](https://your-portfolio.vercel.app) · [Report Bug](https://github.com/tasneem-abdelrazek/portfolio/issues) · [Request Feature](https://github.com/tasneem-abdelrazek/portfolio/issues)

</div>

---

## ✨ Features

- ⚡ **Lightning Fast** - Optimized for performance with Next.js 15
- 🎨 **Modern Design** - Beautiful UI with smooth animations
- 📱 **Fully Responsive** - Works on all devices
- ♿ **Accessible** - WCAG 2.1 compliant
- 🔍 **SEO Optimized** - Meta tags and sitemap
- 🎭 **Dark Theme** - Eye-friendly design
- 🚀 **Performance** - 95+ Lighthouse score
- 📦 **Modular** - Easy to maintain and extend
- 🔧 **Customizable** - All data in separate files

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+ or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tasneem-abdelrazek/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
│
├── components/            # React components
│   ├── common/           # Reusable components
│   │   ├── Badge.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ProgressBar.tsx
│   └── Home/             # Home page sections
│       ├── Hero/
│       ├── About/
│       ├── Skills/
│       ├── Projects/
│       ├── Services/
│       ├── Navbar/
│       └── Footer/
│
├── data/                 # Data files (Easy to edit!)
│   ├── projects.ts       # Projects data
│   ├── skills.ts         # Skills data
│   ├── about.ts          # About section data
│   └── services.ts       # Services data
│
├── styles/               # Styles
│   └── theme.tsx         # Theme & animations
│
├── public/               # Static assets
│   └── images/          # Images
│
└── next.config.ts        # Next.js configuration
```

---

## 🎨 Customization

### Adding a New Project

Edit `data/projects.ts`:

```typescript
export const projects: Project[] = [
  // ... existing projects
  {
    id: 11,
    title: "Your New Project",
    description: "Project description",
    image: "/images/your-project.png",
    tags: ["React", "TypeScript"],
    github: "https://github.com/...",
    demo: "https://...",
    icon: FaRocket,
  }
];
```

### Adding a New Skill

Edit `data/skills.ts`:

```typescript
export const skillsData: SkillsData = {
  expert: [
    // ... existing skills
    { name: "New Skill", percentage: 85, icon: "newskill" }
  ]
};
```

### Adding a New Service

Edit `data/services.ts`:

```typescript
export const servicesData: Service[] = [
  // ... existing services
  {
    id: 3,
    title: "New Service",
    description: "Service description",
    image: "/images/service.png",
    features: ["Feature 1", "Feature 2"],
    whatsappMessage: "Hello, I need this service."
  }
];
```

### Changing Colors

Edit `styles/theme.tsx`:

```typescript
// Change primary colors
from-[#YOUR_COLOR] to-[#YOUR_COLOR]
```

---

## 📊 Performance

### Lighthouse Scores

| Metric | Score |
|--------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### Optimizations Applied

✅ Image Optimization (WebP, AVIF)  
✅ Code Splitting  
✅ Lazy Loading  
✅ Tree Shaking  
✅ Minification  
✅ Compression (Gzip)  
✅ Caching Strategies  
✅ Font Optimization  

---

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 15
- **Language:** TypeScript 5.6
- **UI Library:** React 19

### Styling
- **CSS Framework:** Tailwind CSS 3.4
- **Animations:** Custom CSS animations
- **Icons:** React Icons

### Other
- **Particles:** @tsparticles
- **Typewriter Effect:** typewriter-effect
- **Fonts:** Google Fonts (Inter, Tajawal)

---

## 📝 Scripts

```bash
# Development
npm run dev              # Start dev server with Turbo

# Production
npm run build           # Build for production
npm start               # Start production server

# Maintenance
npm run clean           # Clean cache
npm run type-check      # TypeScript check
npm run lint            # Lint code
npm run format          # Format code

# Analysis
npm run analyze         # Analyze bundle size
npm run lighthouse      # Run Lighthouse audit
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-site.com
NEXT_PUBLIC_WHATSAPP=201030354268
```

### Next.js Config

Key configurations in `next.config.ts`:

- Image optimization
- Compression
- Security headers
- Font optimization
- SWC minification

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy! 🎉

### Other Platforms

```bash
# Build
npm run build

# The output will be in .next folder
# Upload to your hosting platform
```

---

## 📈 Analytics & Monitoring

### Web Vitals

The site tracks Core Web Vitals:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

To view metrics:

```typescript
// In app/layout.tsx
export function reportWebVitals(metric) {
  console.log(metric);
}
```

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
npm run clean
npm install
npm run build
```

### Type Errors

```bash
# Check types
npm run type-check
```

### Image Loading Issues

Ensure images are in `public/images/` and paths are correct.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Tasneem Abdelrazek**

- Email: tasneem.ar.work@gmail.com
- WhatsApp: [+201030354268](https://wa.me/201030354268)
- LinkedIn: [tasneem-abdelrazek](https://linkedin.com/in/tasneem-abdelrazek)
- GitHub: [@tasneem-abdelrazek](https://github.com/tasneem-abdelrazek)

---

## 🙏 Acknowledgments

- Next.js team for amazing framework
- Tailwind CSS for utility-first CSS
- Vercel for hosting platform
- React Icons for beautiful icons

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/tasneem-abdelrazek/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/tasneem-abdelrazek/portfolio?style=social)
![GitHub issues](https://img.shields.io/github/issues/tasneem-abdelrazek/portfolio)

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

Made with ❤️ by [Tasneem Abdelrazek](https://github.com/tasneem-abdelrazek)

</div>