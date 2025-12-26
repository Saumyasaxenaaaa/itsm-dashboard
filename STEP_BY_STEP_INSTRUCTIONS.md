# Step-by-Step Instructions to Push to GitHub

## Step 1: Create GitHub Repository
1. Open your web browser
2. Go to: **https://github.com/new**
3. In "Repository name" field, type: `itsm-dashboard`
4. Choose **Public** or **Private** (your choice)
5. **IMPORTANT:** Make sure these checkboxes are UNCHECKED:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Click the green **"Create repository"** button

## Step 2: Push Your Code to GitHub
After creating the repository, come back to this terminal/PowerShell window and run:

```bash
git push -u origin main
```

### If you get asked for credentials:
- **Username:** Enter: `Saumyasaxenaaaa`
- **Password:** You need a **Personal Access Token** (NOT your GitHub password)
  - To create token: Go to https://github.com/settings/tokens
  - Click "Generate new token" → "Generate new token (classic)"
  - Give it a name like "ITSM Dashboard"
  - Check "repo" permission
  - Click "Generate token"
  - Copy the token and use it as password

## Step 3: Verify
After pushing, go to:
**https://github.com/Saumyasaxenaaaa/itsm-dashboard**

You should see all your files there!

---

**That's it! Your GitHub link will be:**
`https://github.com/Saumyasaxenaaaa/itsm-dashboard`

