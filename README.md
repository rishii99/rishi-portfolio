# 🚀 Rishi Maddheshiya's Portfolio

A modern, responsive portfolio website showcasing **Data Science** and **Full-Stack Development** projects.

## 🎨 Features

- **Modern Design**: Dark theme with blue/purple gradient accents
- **Fully Responsive**: Works seamlessly on all devices
- **Smooth Animations**: Fade-in and slide-up animations
- **Fast Performance**: Built with Vite for optimal speed
- **Professional Sections**:
  - Hero section with typewriter effect
  - About me
  - Skills & Technologies categorized
  - Featured Projects (4 projects showcased)
  - Experience & Training
  - Certifications
  - Achievements & Milestones
  - Contact form

## 🛠️ Tech Stack

**Frontend:**

- React 18
- Tailwind CSS v4
- Vite (build tool)

**Deployment Ready:**

- Configured for Vercel deployment
- Optimized for production builds

## 📁 Project Structure

```
rishi-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Sticky navbar
│   │   ├── Hero.jsx             # Landing section
│   │   ├── About.jsx            # About section
│   │   ├── Skills.jsx           # Skills section
│   │   ├── Projects.jsx         # Featured projects
│   │   ├── Experience.jsx       # Experience timeline
│   │   ├── Certifications.jsx   # Certifications
│   │   ├── Achievements.jsx     # Achievements
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles with Tailwind
│   └── main.jsx                 # Entry point
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173/`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:

```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

## 🎯 Featured Projects

1. **PackVote** - ML prediction system
2. **AI Skin Cancer Detection** - Healthcare AI
3. **Realtime Whiteboard** - Full-stack collaboration app
4. **Music Player** - Java desktop application

## 📝 Customization

### Update Personal Information

- Edit component files in `src/components/`
- Update links in Navigation, Footer, and Contact components
- Modify email and social links

### Change Colors

- Tailwind colors are defined in `tailwind.config.js`
- Custom CSS variables in `src/index.css`

### Add More Projects

- Edit `src/components/Projects.jsx`
- Add project details to the projects array
- Update with your project links

## 📱 Sections

- **Hero**: Animated title with typewriter effect and quick stats
- **About**: Your background and interests
- **Skills**: Categorized by Languages, Data Science, Development, Databases, and Tools
- **Projects**: Featured projects with detailed cards
- **Experience**: Timeline of training and internships
- **Certifications**: Achievements and certifications
- **Contact**: Contact form and social links

## 📈 Performance

- **Lighthouse Score**: 90+ (Performance optimized)
- **Load Time**: < 2 seconds
- **Bundle Size**: ~45KB (gzipped)

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

**Built with ❤️ using React + Tailwind CSS + Vite**
