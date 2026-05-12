# 📝 Customization Guide

Follow this guide to personalize your portfolio.

## 1. Update Personal Information

### Hero Section (`src/components/Hero.jsx`)

```javascript
// Update these lines:
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Hi, I'm <span className="gradient-text">Your Name</span>
</h1>

const fullText = 'Your custom subheading here.';

<p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
  Your custom intro text here.
</p>
```

### Links in Hero
```javascript
// Update button links
<a href="your-github-link" target="_blank">GitHub</a>
<a href="your-linkedin-link" target="_blank">LinkedIn</a>
<a href="mailto:your-email@example.com">Contact Me</a>
```

---

## 2. About Section (`src/components/About.jsx`)

```javascript
// Update main about text
<p className="text-lg text-slate-400 mb-6 leading-relaxed">
  I'm a [your info] student at [your university]...
</p>

// Update education
<p className="text-text-muted">B.Tech [Your Program]</p>
<p className="text-text-muted">[Your University Name]</p>

// Update focus areas
<p className="text-text-muted">Your Focus Area 1</p>
<p className="text-text-muted">Your Focus Area 2</p>
```

---

## 3. Update Skills (`src/components/Skills.jsx`)

```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C++', 'Java', 'JavaScript'] // Edit these
  },
  {
    title: 'Your Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  },
  // Add more categories...
];

// Update proficiency bars
{
  skill: 'Your Skill',
  level: 90 // Update level (0-100)
}
```

---

## 4. Add Your Projects (`src/components/Projects.jsx`)

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'Machine Learning',
    description: 'What does this project do?',
    tech: ['Python', 'TensorFlow', 'Pandas'],
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ],
    github: 'https://github.com/yourusername/project-name',
    demo: 'https://your-demo-link.com',
    image: '🎯' // Change emoji
  },
  // Add more projects...
];
```

### Project Tips:
- Add 4-6 of your best projects
- Include real GitHub links
- Add live demo links
- Use relevant emojis
- Highlight unique features

---

## 5. Update Experience (`src/components/Experience.jsx`)

```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2024 - 2024',
    description: 'What you did...',
    highlights: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3'
    ]
  },
  // Add more experiences...
];
```

---

## 6. Update Certifications (`src/components/Certifications.jsx`)

```javascript
const certifications = [
  {
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: '2024',
    icon: '🏆' // Change icon
  },
  // Add more certifications...
];
```

---

## 7. Update Achievements (`src/components/Achievements.jsx`)

```javascript
const achievements = [
  {
    title: 'Achievement Title',
    description: 'Description of achievement',
    icon: '🚀',
    stat: '5+'
  },
  // Add more achievements...
];

const milestones = [
  {
    year: '2024',
    title: 'Milestone Title',
    description: 'What happened in this year'
  },
  // Add more milestones...
];
```

---

## 8. Update Contact Form (`src/components/Contact.jsx`)

```javascript
const contactLinks = [
  {
    title: 'Email',
    value: 'your-email@example.com',
    icon: '✉️',
    link: 'mailto:your-email@example.com'
  },
  {
    title: 'LinkedIn',
    value: 'Your Name',
    icon: '💼',
    link: 'https://linkedin.com/in/your-profile'
  },
  // Add more contacts...
];

// Update form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // Add your form submission logic here
  // Examples: send email, store in database, use form service
  console.log('Form submitted:', formData);
};
```

---

## 9. Update Footer (`src/components/Footer.jsx`)

```javascript
<h3 className="text-2xl font-bold gradient-text">Your Name</h3>
<p className="text-text-muted">
  Your tagline or short bio
</p>

// Update social links
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
<a href="mailto:your-email@example.com">Email</a>
```

---

## 10. Change Colors & Theme

### Tailwind Config (`tailwind.config.js`)

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Change these hex codes
      secondary: '#1e293b',
      accent: '#3b82f6',
      'accent-purple': '#8b5cf6',
      text: '#e2e8f0',
      'text-muted': '#94a3b8',
    },
  },
},
```

### Color Ideas:
- **Dark Blue**: `#0f172a`, `#1e293b`
- **Vibrant**: Use bright accents for contrast
- **Professional**: Stick to 2-3 accent colors
- **Dark Theme**: Recommended for readability

---

## 11. Update Navigation (`src/components/Navigation.jsx`)

```javascript
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  // Add more sections...
];

// Update logo
<div className="text-2xl font-bold gradient-text">
  Your Initials or Name
</div>
```

---

## 12. Add Favicon

1. Create a favicon (e.g., `favicon.png`)
2. Place in `public/` folder
3. Update `index.html`:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

---

## 13. Update Meta Tags (`index.html`)

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
```

---

## 14. Add Google Analytics (Optional)

Add to `index.html` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

---

## 15. Deployment Configuration

### For Custom Domain on Vercel
1. Go to project settings
2. Domains → Add domain
3. Follow DNS instructions

### For GitHub Pages
Update `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo"
```

---

## Verification Checklist

- [ ] All personal info updated
- [ ] Projects have correct links
- [ ] Contact email is correct
- [ ] Social links are correct
- [ ] No placeholder text remains
- [ ] Colors match your brand
- [ ] Mobile responsive verified
- [ ] All links work
- [ ] No console errors
- [ ] Ready to deploy!

---

## Need Help?

1. Check React documentation: [react.dev](https://react.dev)
2. Check Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
3. Check Vite docs: [vitejs.dev](https://vitejs.dev)

**Your portfolio is now fully customized and ready to impress! 🎉**
