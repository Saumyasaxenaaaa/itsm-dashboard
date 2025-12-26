# Quick GitHub Setup Guide

## 🚀 Fast Setup (3 Steps)

### Step 1: Create GitHub Repository
1. Go to: **https://github.com/new**
2. Repository name: `itsm-dashboard` (or any name)
3. Choose **Public** or **Private**
4. **DO NOT** check "Initialize with README"
5. Click **"Create repository"**

### Step 2: Run the Push Script
Open PowerShell in this directory and run:
```powershell
.\push-to-github.ps1
```

Enter your GitHub username and repository name when prompted.

### Step 3: Or Run Commands Manually

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/itsm-dashboard.git
git branch -M main
git push -u origin main
```

## 📋 Your GitHub Link Will Be:
```
https://github.com/YOUR_USERNAME/itsm-dashboard
```

## 🔐 Authentication
If you get authentication errors:
- Use a **Personal Access Token** instead of password
- Or set up SSH keys
- GitHub no longer accepts passwords for Git operations

## ✅ After Pushing
Once pushed, you can:
- Share the GitHub link
- Deploy to Vercel/Netlify for a live link
- Clone it anywhere with: `git clone https://github.com/YOUR_USERNAME/itsm-dashboard.git`

