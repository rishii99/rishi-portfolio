# 🚀 Deployment Guide

## Deploy to Vercel (Easiest & Recommended)

Vercel has the best performance for React + Vite apps and provides free hosting.

### Step 1: Prepare Your Repository

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create a new repo on GitHub and push
git remote add origin https://github.com/yourusername/rishi-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

**Your site will be live in 2-3 minutes!**

### Step 3: Custom Domain (Optional)

After deployment:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., `rishimaddheshiya.com`)
4. Follow DNS setup instructions

---

## Deploy to Netlify

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Deploy

**Option A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist/` folder
3. Done! Your site is live

**Option B: GitHub Integration**
1. Sign in to Netlify
2. Click "New site from Git"
3. Connect GitHub
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

---

## Deploy to GitHub Pages

### Step 1: Update Package.json

```json
{
  "homepage": "https://yourusername.github.io/rishi-portfolio"
}
```

### Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 3: Update scripts in package.json

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

### Step 4: Deploy

```bash
npm run build
npm run deploy
```

Your site will be live at: `https://yourusername.github.io/rishi-portfolio`

---

## Environment Variables

Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_EMAIL=your-email@example.com
```

Access in components:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Performance Tips

1. **Optimize Images**: Use compressed PNG/WebP images
2. **Enable Gzip**: Most hosts do this automatically
3. **Use CDN**: Vercel and Netlify use global CDNs
4. **Monitor Performance**: Use Lighthouse and WebVitals

---

## Monitoring & Maintenance

- Keep dependencies updated: `npm update`
- Monitor website uptime: Use UptimeRobot
- Track analytics: Add Google Analytics
- Regular backups: Keep GitHub repo updated

---

## Common Issues

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### CSS Not Loading
- Check `tailwind.config.js`
- Verify `@import "tailwindcss"` in index.css
- Clear Vite cache: `rm -rf .vite`

---

**Your portfolio is now ready to launch! Choose Vercel for the best experience.** 🚀
