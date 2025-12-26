# PowerShell script to push ITSM Dashboard to GitHub
# Replace YOUR_USERNAME with your GitHub username
# Replace REPO_NAME with your repository name (e.g., itsm-dashboard)

$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter your repository name (e.g., itsm-dashboard)"

Write-Host "`nSetting up GitHub remote..." -ForegroundColor Cyan

# Add remote
git remote add origin "https://github.com/$username/$repoName.git"

# Rename branch to main
git branch -M main

Write-Host "`nReady to push! Your repository URL will be:" -ForegroundColor Green
Write-Host "https://github.com/$username/$repoName" -ForegroundColor Yellow

Write-Host "`nNow pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "`n✅ Done! Your GitHub link is:" -ForegroundColor Green
Write-Host "https://github.com/$username/$repoName" -ForegroundColor Yellow

