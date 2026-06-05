# Percepto Deployment Checklist

**Date:** June 2026  
**Version:** GitHub Pages Deployment v3  
**Purpose:** Safe deployment guide for GitHub Pages hosting with release packaging

---

## Quick Start

### For GitHub Pages (Easiest - Recommended for Demos):

**⚠️ Important:** Configure Firebase security rules before real patient data use.

1. Create release zip: `bash scripts/create-release-zip.sh`
2. Push to GitHub repository
3. Enable GitHub Pages in Settings → Pages
4. Select source: "Deploy from a branch" → "main" → "/ (root)"
5. Site will be live at `https://yourusername.github.io/percepto/`
6. **Entry point:** `index.html` loads automatically at root URL

### For Firebase Hosting:
```bash
# Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize (if first time)
firebase init hosting

# Deploy
firebase deploy
```

---

## Pre-Deployment Checklist

### 1. Files to Include in Deployment

#### ✅ Required Files:
```
All .html files except:
  - login_backup.html (backup, not needed)
  - maintenance.html (optional)
  - extra.html (unknown purpose)

All .css files:
  - styles.css
  - translate-styles.css
  - cvi-colors.css

All .js files:
  - script.js
  - auth.js
  - translate.js
  - js/firebase-config.js      ← NEW shared utility
  - js/auth-utils.js           ← NEW shared utility
  - js/report-utils.js         ← NEW shared utility

All folders:
  - images/                    (if exists)
  - js/                        (NEW directory)

Root files:
  - .nojekyll                  (for GitHub Pages)
  - firebase-security-rules.md (admin reference)
  - DEPLOYMENT_CHECKLIST.md    (this file)
  - PROJECT_AUDIT_AND_FIXES.md (documentation)
```

#### ❌ Files to Exclude:
```
.git/                          (repository history)
.gitignore                     (not needed in deployment)
CURRENT_STATE_AUDIT.md         (dev-only documentation)
PROJECT_STRUCTURE.md           (dev-only documentation)
LINK_AUDIT.md                  (dev-only documentation)
REFACTOR_REPORT.md             (dev-only documentation)
FINAL_AUDIT.md                 (dev-only documentation)
login_backup.html              (backup file)
maintenance.html               (optional)
extra.html                     (unknown purpose)
server.py                      (local dev server only)
*.log                          (log files)
*.tmp                          (temp files)
*.bak                          (backup files)
```

---

## Creating a Clean Release Package

### Method 1: Bash Script (Cross-Platform - Recommended)

**Works on:** Git Bash, Linux, macOS, WSL

```bash
# Create clean release zip
bash scripts/create-release-zip.sh
```

**Output:**
- Creates `releases/percepto_YYYYMMDD_HHMMSS/` folder
- Creates `releases/percepto_YYYYMMDD_HHMMSS.zip` archive
- Excludes: `.git/`, `.github/`, `.vscode/`, `.DS_Store`, `*.log`, backups
- Includes: All HTML, CSS, JS, images, 33 assessments, documentation

### Method 2: PowerShell Script (Windows)

Create `create-release-zip.ps1`:

```powershell
# Percepto Release Zip Creator
# Run this script to create a clean deployment package

$ErrorActionPreference = "Stop"

# Configuration
$sourceDir = "."
$releaseFolder = "percepto-release"
$zipName = "percepto-release-$(Get-Date -Format 'yyyyMMdd').zip"

Write-Host "Creating Percepto release package..." -ForegroundColor Green

# Clean up old release folder if exists
if (Test-Path $releaseFolder) {
    Remove-Item -Recurse -Force $releaseFolder
    Write-Host "Cleaned up old release folder"
}

# Create release folder
New-Item -ItemType Directory -Force -Path $releaseFolder

# Copy HTML files (excluding specific ones)
$htmlFiles = Get-ChildItem -Path $sourceDir -Filter "*.html" | Where-Object {
    $_.Name -notin @('login_backup.html', 'maintenance.html', 'extra.html')
}
$htmlFiles | ForEach-Object {
    Copy-Item $_.FullName -Destination $releaseFolder
}
Write-Host "Copied $($htmlFiles.Count) HTML files"

# Copy CSS files
$cssFiles = Get-ChildItem -Path $sourceDir -Filter "*.css"
$cssFiles | ForEach-Object {
    Copy-Item $_.FullName -Destination $releaseFolder
}
Write-Host "Copied $($cssFiles.Count) CSS files"

# Copy JS files (root level)
$jsFiles = Get-ChildItem -Path $sourceDir -Filter "*.js"
$jsFiles | ForEach-Object {
    Copy-Item $_.FullName -Destination $releaseFolder
}
Write-Host "Copied $($jsFiles.Count) JS files from root"

# Copy js/ folder with new shared utilities
if (Test-Path "js") {
    Copy-Item -Recurse "js" -Destination $releaseFolder
    Write-Host "Copied js/ folder with shared utilities"
}

# Copy images folder if exists
if (Test-Path "images") {
    Copy-Item -Recurse "images" -Destination $releaseFolder
    Write-Host "Copied images/ folder"
}

# Copy specific documentation files
$docFiles = @(
    '.nojekyll',
    'firebase-security-rules.md',
    'DEPLOYMENT_CHECKLIST.md',
    'PROJECT_AUDIT_AND_FIXES.md'
)
$docFiles | ForEach-Object {
    if (Test-Path $_) {
        Copy-Item $_ -Destination $releaseFolder
    }
}
Write-Host "Copied documentation files"

# Create zip
if (Test-Path $zipName) {
    Remove-Item $zipName
}
Compress-Archive -Path "$releaseFolder\*" -DestinationPath $zipName

# Clean up release folder
Remove-Item -Recurse -Force $releaseFolder

Write-Host "`n✅ Release package created: $zipName" -ForegroundColor Green
Write-Host "`nExcluded from package:"
Write-Host "  - .git/ folder (repository history)"
Write-Host "  - .gitignore"
Write-Host "  - Dev documentation (CURRENT_STATE_AUDIT.md, etc.)"
Write-Host "  - Backup files (login_backup.html, etc.)"
Write-Host "  - Local server (server.py)"
```

**To run:**
```powershell
# Open PowerShell in project directory
.\create-release-zip.ps1
```

### Method 2: Manual Zip Creation

1. Select all files in project folder (Ctrl+A)
2. Deselect these files (Ctrl+Click):
   - `.git/` folder
   - `CURRENT_STATE_AUDIT.md`
   - `PROJECT_STRUCTURE.md`
   - `LINK_AUDIT.md`
   - `REFACTOR_REPORT.md`
   - `FINAL_AUDIT.md`
   - `login_backup.html`
   - `maintenance.html` (optional)
   - `extra.html`
   - `server.py`
   - Any `.log` files
3. Right-click → Send to → Compressed folder
4. Rename to `percepto-release.zip`

---

## Deployment Steps

### For Firebase Hosting:

```bash
# 1. Navigate to project
cd c:\Users\krish\OneDrive\Documents\Coding\Percepto

# 2. Login (if not already logged in)
firebase login

# 3. Initialize (if not already initialized)
firebase init hosting
#   - Select "Configure files for Firebase Hosting"
#   - Select your project: projeccvi
#   - Public directory: . (root)
#   - Configure as single-page app: No
#   - Set up automatic builds: No

# 4. Deploy
firebase deploy

# 5. Verify
#   - Check console output for hosting URL
#   - Visit the URL and test login
```

### For GitHub Pages:

**Prerequisites:**
- GitHub account
- Git installed locally
- Repository name: `percepto` (or your preferred name)

```bash
# 1. Create release (excludes development files)
bash scripts/create-release-zip.sh

# 2. Create repository on GitHub
#    - Go to github.com and create new repository
#    - Name it: percepto
#    - Make it Public (for GitHub Pages free hosting)

# 3. Initialize and push to GitHub
cd c:/Users/krish/OneDrive/Documents/Coding/Percepto  # Adjust path as needed
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/percepto-quiz.git
git push -u origin main

# 4. Enable GitHub Pages
#    - Go to Settings → Pages
#    - Source: Deploy from a branch
#    - Branch: main → / (root)
#    - Click Save

# 5. Wait 1-3 minutes for deployment
# 6. Visit https://yourusername.github.io/percepto-quiz/
#    - Entry point: index.html loads automatically
```

---

## Post-Deployment Verification

### Critical Tests (Must Pass):

#### 1. Firebase Configuration
- [ ] No "Firebase not initialized" errors in console
- [ ] No "Duplicate app" warnings in console
- [ ] Firebase Auth recognizes the domain

**Check:** Open browser console (F12), look for red errors.

#### 2. Login Flow
- [ ] `login.html` loads correctly
- [ ] Google Sign-In works
- [ ] Email/Password login works
- [ ] Successful login redirects to `index.html`

#### 3. Dashboard
- [ ] `index.html` loads after login
- [ ] Quiz menu displays correctly
- [ ] Profile icon shows user initial
- [ ] Logout button works

#### 4. Quiz Flow
- [ ] Select any quiz from menu
- [ ] Quiz page loads without errors
- [ ] Complete at least 2-3 questions
- [ ] Score saves correctly
- [ ] Returns to dashboard

#### 5. Reports
- [ ] `report.html` loads
- [ ] Previous quiz results display
- [ ] Charts render (if data exists)
- [ ] No console errors

#### 6. Mobile/Responsive
- [ ] Test on mobile device or mobile view in browser
- [ ] All buttons tappable
- [ ] Text readable
- [ ] No horizontal scrolling issues

---

## Firebase Console Configuration

### Before First Deployment:

1. **Authentication → Sign-in method**
   - [ ] Google: Enabled
   - [ ] Email/Password: Enabled
   - [ ] Authorized domains: Add your hosting domain

2. **Authentication → Authorized domains**
   - [ ] `localhost` (for local testing)
   - [ ] `yourusername.github.io` (if GitHub Pages)
   - [ ] `projeccvi.web.app` (Firebase default)
   - [ ] Custom domain (if configured)

3. **Realtime Database → Rules** (WARNING: Apply recommended rules from firebase-security-rules.md)

4. **Firestore Database → Rules** (WARNING: Apply recommended rules from firebase-security-rules.md)

---

## GitHub Pages Specific Validation

### Static Hosting Verification

After GitHub Pages deployment, test these URLs in order:

#### 1. Root URL (Entry Point)
```
https://yourusername.github.io/percepto/
```
**Expected:** Loads `index.html` (dashboard with navigation buttons)
**Check:** 
- [ ] Page loads without 404
- [ ] CSS styles applied (not plain HTML)
- [ ] Navigation buttons visible

#### 2. Key Pages
```
https://yourusername.github.io/percepto/about-percepto.html
https://yourusername.github.io/percepto/assessment-hub.html
https://yourusername.github.io/percepto/login.html
https://yourusername.github.io/percepto/report.html
```
**Check:**
- [ ] All pages load without 404
- [ ] Navigation between pages works
- [ ] Relative links function correctly

#### 3. Assessment Pages (Sample Test)
```
https://yourusername.github.io/percepto/VD.html
https://yourusername.github.io/percepto/VC.html
https://yourusername.github.io/percepto/VFC.html
```
**Check:**
- [ ] At least 5 random assessments load
- [ ] Images display correctly
- [ ] No broken links to sub-assessments

#### 4. Asset Loading
Open browser console (F12 → Console) and verify:
- [ ] No 404 errors for CSS files
- [ ] No 404 errors for JS files
- [ ] No 404 errors for images
- [ ] No mixed content warnings (HTTPS issues)

#### 5. Firebase Warning
**Expected:** Console may show Firebase warnings (acceptable for demo)
- [ ] "Firebase not initialized" or "no app" warnings are OK for static demo
- [ ] These warnings disappear when valid Firebase config is added

### GitHub Pages Readiness Status

| Check | Status | Notes |
|-------|--------|-------|
| Entry point loads | ⬜ | index.html at root URL |
| Key pages reachable | ⬜ | About, Hub, Login, Reports |
| Assets load | ⬜ | CSS, JS, images |
| Navigation works | ⬜ | Relative links functional |
| Firebase warnings only | ⬜ | No critical errors |

**When all checks pass:** GitHub Pages deployment is successful and ready for controlled demonstrations.

---

## Troubleshooting

### Issue: "Firebase app already exists" error
**Solution:** This should not happen with updated pages. If it does:
- Check that js/firebase-config.js is loaded before other Firebase code
- Ensure `if (!firebase.apps.length)` guard is in place

### Issue: "Permission denied" when saving quiz results
**Solution:**
- Firebase security rules need to be configured
- See `firebase-security-rules.md` for recommended rules
- Rules must be applied in Firebase Console

### Issue: Google Sign-In not working on deployed site
**Solution:**
- Add deployed domain to Firebase Auth → Authorized domains
- Check browser console for exact error
- May need to wait 5-10 minutes after adding domain

### Issue: Shared JS files not loading (404 errors)
**Solution:**
- Verify `js/` folder is in deployment
- Check case sensitivity (js vs JS)
- Verify script src paths: `js/firebase-config.js`

### Issue: Images not loading
**Solution:**
- Verify `images/` folder is in deployment
- Check case sensitivity in image filenames
- Check image paths in HTML (relative to root)

---

## Rollback Plan

If deployment causes issues:

### From GitHub Pages:
1. Go to Settings → Pages
2. Change source to "None"
3. Site is immediately unavailable
4. Previous version still in git history - revert to last known good commit

### From Firebase Hosting:
```bash
# List previous versions
firebase hosting:releases:list

# Rollback to previous version
firebase hosting:clone <prev_release_id>

# Or redeploy previous code
```

---

## Security Notes

### ⚠️ IMPORTANT - Before Production Use:

1. **Apply Firebase Security Rules**
   - Current rules may be open/development mode
   - See `firebase-security-rules.md` for recommended rules
   - Must be manually applied in Firebase Console

2. **Review Authorized Domains**
   - Remove any unused/unauthorized domains
   - Add production domain before launch

3. **Enable App Check** (recommended)
   - Prevents abuse of Firebase services
   - Configure in Firebase Console

4. **Data Protection**
   - No patient PHI in demo data
   - Use test accounts only for demo
   - Add HIPAA/GDPR compliance before real clinical use

---

## Package Contents Summary

### What Gets Deployed:
```
percepto-release/
├── HTML files (55 pages)
├── CSS files (3 files)
├── JS files (6 files including new shared utilities)
├── js/ folder (NEW shared utilities)
├── images/ folder (if exists)
├── .nojekyll
├── firebase-security-rules.md
├── DEPLOYMENT_CHECKLIST.md
└── PROJECT_AUDIT_AND_FIXES.md
```

### What Stays Private:
```
.git/ folder (repository history)
Dev documentation (CURRENT_STATE_AUDIT.md, etc.)
Backup files (login_backup.html)
```

---

## Maintenance Notes

### After Deployment:

1. **Monitor Firebase Console**
   - Check Auth usage for anomalies
   - Monitor Database usage/billing
   - Review any security alerts

2. **Regular Backups**
   - Export Firebase data periodically
   - Keep git repository up to date

3. **Updates**
   - Test changes locally before deploying
   - Use staging environment if possible
   - Document all changes in git commits

---

## Emergency Contacts/Resources

- Firebase Status: https://status.firebase.google.com/
- Firebase Docs: https://firebase.google.com/docs/hosting
- GitHub Pages Docs: https://docs.github.com/en/pages

---

**Last Updated:** June 2026  
**Version:** Demo-Ready Cleanup v2
