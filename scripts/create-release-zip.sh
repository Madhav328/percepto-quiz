#!/bin/bash

# Percepto Release Script
# Creates a clean release zip file excluding development files
# Works on Git Bash, Linux, macOS, and WSL
#
# Usage: bash scripts/create-release-zip.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="percepto"
RELEASE_DIR="releases"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
RELEASE_NAME="${PROJECT_NAME}_${TIMESTAMP}"
ZIP_FILE="${RELEASE_NAME}.zip"
RELEASE_FOLDER="${RELEASE_NAME}"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Percepto Release Script${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Get script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

echo "Project root: ${PROJECT_ROOT}"
echo ""

# Create releases directory if it doesn't exist
mkdir -p "${PROJECT_ROOT}/${RELEASE_DIR}"

# Clean up old release folder if it exists (safety check)
if [ -d "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}" ]; then
    echo -e "${YELLOW}Removing old release folder...${NC}"
    rm -rf "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}"
fi

# Create release folder
echo -e "${YELLOW}Creating release folder: ${RELEASE_FOLDER}${NC}"
mkdir -p "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}"

# Function to copy files with progress
copy_files() {
    local src_pattern=$1
    local dest=$2
    local description=$3
    
    echo -e "${YELLOW}Copying ${description}...${NC}"
    
    # Find and copy files, excluding unwanted directories
    find "${PROJECT_ROOT}" -maxdepth 1 -type f -name "${src_pattern}" ! -path "*/\.*" ! -path "*/${RELEASE_DIR}/*" -exec cp {} "${dest}/" \; 2>/dev/null || true
}

# Copy HTML pages
echo -e "${YELLOW}Copying HTML pages...${NC}"
find "${PROJECT_ROOT}" -maxdepth 1 -type f -name "*.html" ! -name "login_backup.html" ! -path "*/\.*" ! -path "*/${RELEASE_DIR}/*" -exec cp {} "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}/" \;

# Copy CSS files
copy_files "*.css" "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}" "CSS files"

# Copy JavaScript files at root
copy_files "*.js" "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}" "JavaScript files"

# Copy js directory
echo -e "${YELLOW}Copying js/ directory...${NC}"
if [ -d "${PROJECT_ROOT}/js" ]; then
    cp -r "${PROJECT_ROOT}/js" "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}/"
fi

# Copy images directory
echo -e "${YELLOW}Copying images/ directory...${NC}"
if [ -d "${PROJECT_ROOT}/images" ]; then
    cp -r "${PROJECT_ROOT}/images" "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}/"
fi

# Copy documentation files (selective)
echo -e "${YELLOW}Copying documentation...${NC}"
doc_files=(
    "README.md"
    "QUIZ_INVENTORY.md"
    "QUIZ_ORGANIZATION.md"
    "ASSESSMENT_GUIDE.md"
    "DEPLOYMENT_CHECKLIST.md"
    "firebase-security-rules.md"
    "GITHUB_HOSTING_AUDIT.md"
    "LINK_AUDIT_GITHUB_PAGES.md"
    ".nojekyll"
)

for file in "${doc_files[@]}"; do
    if [ -f "${PROJECT_ROOT}/${file}" ]; then
        cp "${PROJECT_ROOT}/${file}" "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}/"
    fi
done

# Create .gitignore for release (clean version)
cat > "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}/.gitignore" << 'EOF'
# Release .gitignore - minimal
.DS_Store
Thumbs.db
*.log
*.tmp
EOF

# Count what we included
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Release Contents${NC}"
echo -e "${GREEN}========================================${NC}"

HTML_COUNT=$(find "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}" -maxdepth 1 -name "*.html" | wc -l)
CSS_COUNT=$(find "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}" -maxdepth 1 -name "*.css" | wc -l)
JS_COUNT=$(find "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}" -maxdepth 1 -name "*.js" | wc -l)
JS_DIR_COUNT=$(find "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}/js" -type f 2>/dev/null | wc -l)
IMG_COUNT=$(find "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}/images" -type f 2>/dev/null | wc -l)
DOC_COUNT=$(find "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}" -maxdepth 1 -name "*.md" | wc -l)

echo "HTML pages:     ${HTML_COUNT}"
echo "CSS files:      ${CSS_COUNT}"
echo "JS files (root): ${JS_COUNT}"
echo "JS files (js/): ${JS_DIR_COUNT}"
echo "Image files:    ${IMG_COUNT}"
echo "Documentation:  ${DOC_COUNT}"
echo ""

# Verify key files exist
echo -e "${YELLOW}Verifying key files...${NC}"
key_files=(
    "index.html"
    "login.html"
    "about-percepto.html"
    "assessment-hub.html"
    "report.html"
    "VD.html"
    "VC.html"
    "VFC.html"
    "styles.css"
    "js/firebase-config.js"
    ".nojekyll"
)

all_present=true
for file in "${key_files[@]}"; do
    if [ -f "${PROJECT_ROOT}/${RELEASE_DIR}/${RELEASE_FOLDER}/${file}" ]; then
        echo -e "  ✅ ${file}"
    else
        echo -e "  ❌ ${file} MISSING"
        all_present=false
    fi
done

echo ""

# Create zip file
echo -e "${YELLOW}Creating release zip...${NC}"
cd "${PROJECT_ROOT}/${RELEASE_DIR}"
zip -r "${ZIP_FILE}" "${RELEASE_FOLDER}" -x "*.DS_Store" -x "*/\.*" 2>/dev/null || {
    echo -e "${YELLOW}zip command not available, trying tar...${NC}"
    tar -czf "${RELEASE_FOLDER}.tar.gz" "${RELEASE_FOLDER}"
    ZIP_FILE="${RELEASE_FOLDER}.tar.gz"
}

# Get file size
if [ -f "${ZIP_FILE}" ]; then
    FILE_SIZE=$(du -h "${ZIP_FILE}" | cut -f1)
else
    FILE_SIZE="unknown"
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Release Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "Release folder: ${GREEN}${RELEASE_DIR}/${RELEASE_FOLDER}${NC}"
echo -e "Archive file:   ${GREEN}${RELEASE_DIR}/${ZIP_FILE}${NC}"
echo -e "File size:      ${GREEN}${FILE_SIZE}${NC}"
echo ""

if [ "$all_present" = true ]; then
    echo -e "${GREEN}✅ All key files present${NC}"
else
    echo -e "${RED}⚠️  Some key files missing${NC}"
fi

echo ""
echo "Excluded from release:"
echo "  - .git/ directory"
echo "  - .github/ directory (if present)"
echo "  - .vscode/ directory (if present)"
echo "  - .DS_Store, Thumbs.db"
echo "  - *.log, *.tmp, *.bak"
echo "  - Audit files (CURRENT_STATE_AUDIT.md, etc.)"
echo "  - Backup files (login_backup.html)"
echo ""
echo -e "${GREEN}Ready for GitHub upload or deployment!${NC}"
