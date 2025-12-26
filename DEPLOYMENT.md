# Deployment Guide

## Pushing to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it `itsm-dashboard` (or any name you prefer)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Add the remote and push:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/itsm-dashboard.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

## Deploying to Get a Live Link

### Option 1: Vercel (Recommended - Easiest)

1. Go to https://vercel.com and sign up/login with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Deploy"
6. Your live link will be provided (e.g., `https://itsm-dashboard.vercel.app`)

### Option 2: Netlify

1. Go to https://netlify.com and sign up/login with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
5. Click "Deploy site"
6. Your live link will be provided (e.g., `https://itsm-dashboard.netlify.app`)

### Option 3: GitHub Pages (Static Hosting)

1. Install gh-pages: `cd frontend && npm install --save-dev gh-pages`
2. Add to `frontend/package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   },
   "homepage": "https://YOUR_USERNAME.github.io/itsm-dashboard"
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repository settings

