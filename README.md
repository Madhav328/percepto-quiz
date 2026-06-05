# Percepto

**A Digital Visual-Perception Screening Platform for Early Identification of Cerebral Visual Impairment (CVI)**

---

## ⚠️ Clinical Disclaimer

> **Percepto is a visual perception screening and profiling aid. It is not a diagnostic device. Results should be interpreted by a qualified clinician. These assessments are designed for screening and referral support purposes only and do not replace comprehensive clinical evaluation.**

---

## Table of Contents

1. [The Problem](#the-problem)
2. [Our Solution](#our-solution)
3. [Assessment Library](#assessment-library)
4. [What Percepto Measures](#what-percepto-measures)
5. [Intended Users](#intended-users)
6. [Clinical Positioning](#clinical-positioning)
7. [Current Status](#current-status)
8. [Future Roadmap](#future-roadmap)
9. [Repository Structure](#repository-structure)
10. [Running Locally](#running-locally)
11. [GitHub Pages Deployment](#github-pages-deployment)
12. [Contributing](#contributing)

---

## The Problem

**Cerebral Visual Impairment (CVI) is frequently underdiagnosed.**

Children with CVI may appear to see normally during casual observation while struggling significantly with visual processing tasks. This creates a critical gap in identification and intervention:

- **Limited Access to Screening:** Traditional visual-perception assessments require specialized equipment and trained professionals, making them inaccessible in resource-limited settings
- **Specialist Shortage:** Pediatric ophthalmologists and CVI specialists are scarce, particularly in rural and underserved regions
- **Delayed Identification:** Many at-risk children never receive evaluation, delaying critical early intervention windows
- **Cost Barriers:** Existing assessment tools are expensive, limiting deployment in schools, community programs, and developing regions
- **Functional Impact:** Undiagnosed visual processing difficulties affect learning, daily living skills, and quality of life

Early identification can significantly improve outcomes through targeted interventions, accommodations, and therapy. Percepto exists to bridge this gap.

---

## Our Solution

**Percepto transforms visual-perception assessment into structured, interactive, gamified tasks.**

The platform provides:

### Gamified Visual-Perception Assessments
- Child-friendly, engaging interfaces that reduce assessment anxiety
- Interactive tasks across 11 visual-perception domains
- Immediate feedback to maintain engagement
- Adaptive difficulty levels for varying abilities

### Structured Behavioral Data Collection
- Quantitative metrics on accuracy, response time, and interaction patterns
- Consistent assessment protocols for reliable screening
- Multi-session tracking to monitor changes over time
- Observable behavioral indicators during task completion

### Screening and Referral Support
- Systematic visual-perception profiling across multiple domains
- Identifies children who may benefit from specialist evaluation
- Supports referral decisions with objective screening data
- Generates professional reports for clinical review

### Scalable Digital Deployment
- Browser-based platform requiring no specialized hardware
- Deployable via GitHub Pages, Firebase, or institutional servers
- Suitable for schools, clinics, community screening programs, and research
- Multi-user support for clinicians, educators, and administrators

### Child-Friendly Experience
- Designed with CVI-friendly colors and contrasts
- Engaging visuals and positive reinforcement
- Simple, intuitive interactions suitable for children
- Reduced assessment fatigue through gamification

---

## Assessment Library

Percepto currently includes **33 assessments across 11 categories**, providing comprehensive coverage of visual-perception domains relevant to CVI screening:

| Category | Assessments | Description |
|----------|-------------|-------------|
| **Visual Discrimination** | 6 | Identifying differences/similarities between shapes, colors, sizes, patterns |
| **Visual Closure** | 4 | Recognizing objects when partially hidden or incomplete |
| **Visual Form Constancy** | 6 | Recognizing forms regardless of size, color, orientation, or font |
| **Visual Memory** | 3 | Remembering and recalling visual information |
| **Visual Sequential Memory** | 5 | Remembering sequences of visual stimuli in order |
| **Visual Spatial Skills** | 2 | Understanding spatial relationships and navigation |
| **Visual Neglect** | 2 | Assessment of visual field awareness and attention |
| **Figure Ground** | 2 | Distinguishing objects from background clutter |
| **Motion Perception** | 1 | Detecting and tracking moving objects |
| **Pursuit & Fixation** | 1 | Eye movement control and visual attention (experimental) |
| **Observation Tasks** | 1 | Structured behavioral observation for functional profiling |

### Assessment Levels

Most assessments offer two difficulty levels:
- **Level 1:** Foundational skills for broader screening
- **Level 2:** Advanced skills for detailed profiling

### Accessing Assessments

- **Assessment Hub:** `assessment-hub.html` - Complete visual library
- **Category Menus:** Organized navigation via category pages (VD.html, VC.html, etc.)
- **Dashboard:** `index.html` - Quick access to frequently used assessments

For detailed assessment descriptions, see [ASSESSMENT_GUIDE.md](ASSESSMENT_GUIDE.md).

---

## What Percepto Measures

Percepto collects structured behavioral metrics during assessment completion:

### Performance Metrics
- **Accuracy:** Percentage of correct responses per assessment
- **Response Time:** Time taken for individual item responses
- **Average Response Time:** Mean response time across assessment
- **Incorrect Responses:** Count and pattern of errors
- **Completion Status:** Finished, partial, or abandoned

### Behavioral Interaction Patterns
- **Total Taps/Clicks:** Frequency of interaction attempts
- **Response Patterns:** Sequence and timing of responses
- **Attention Indicators:** Sustained engagement metrics
- **Error Patterns:** Types of mistakes (random, consistent, systematic)

### Report Outputs
- Individual assessment scores with interpretation bands
- Category-wise performance summaries
- Progress tracking across multiple sessions
- Visual charts and analytics for clinical review

**Note:** These metrics support screening and profiling. They do not constitute a medical diagnosis.

---

## Intended Users

Percepto is designed for use by qualified professionals and organizations:

### Clinical Users
- **Pediatric Ophthalmologists:** Screening and referral support
- **Optometrists:** Visual-perception profiling
- **Pediatricians:** Developmental screening inclusion
- **Vision Therapists:** Progress monitoring and assessment

### Educational Users
- **Special Educators:** Identifying visual factors affecting learning
- **Teachers:** Classroom screening and accommodation planning
- **School Psychologists:** Comprehensive assessment batteries
- **Occupational Therapists:** Functional vision evaluation

### Organizational Users
- **NGOs:** Community screening programs in resource-limited settings
- **Schools:** Systematic visual-perception screening
- **Hospitals:** Outpatient and rehabilitation departments
- **Research Institutions:** Data collection for visual-perception studies

### Field Workers
- Community health workers conducting screening programs
- Therapists in rural or mobile clinics
- Early intervention specialists

**Important:** Percepto is intended to assist screening and referral decisions. It does not replace clinical judgment or comprehensive evaluation.

---

## Clinical Positioning

### What Percepto Is
- A **screening** tool for visual-perception abilities
- A **profiling** platform for identifying strengths and challenges
- A **referral support** system for clinical decision-making
- A **progress tracking** tool for monitoring over time
- A **visual-perception assessment** aid for structured evaluation

### What Percepto Is NOT
- A **diagnostic** device or engine
- A **medical device** requiring regulatory approval (at current stage)
- A **replacement** for clinical decision-making
- A **substitute** for comprehensive ophthalmological evaluation
- A **standalone** diagnostic for CVI or other conditions

### Appropriate Use

**Appropriate:**
- Initial screening to identify children needing specialist evaluation
- Visual-perception profiling to guide intervention planning
- Progress monitoring in response to therapy or accommodations
- Research data collection on visual-perception abilities
- Educational assessment for learning support planning

**Not Appropriate:**
- Sole basis for medical diagnosis
- Replacement for comprehensive clinical evaluation
- Determining eligibility for services without additional assessment
- Self-diagnosis by families or caregivers

### Regulatory Status

Percepto is currently a **research prototype** and **not regulatory approved** as a medical device. Use is appropriate for:
- Pilot studies and research
- Clinical demonstrations
- Educational screening programs
- Referral support under professional supervision

---

## Current Status

### Prototype Stage

Percepto is currently a **pilot-stage platform** suitable for:
- Demonstrations to clinicians and hospital administrators
- Research studies with appropriate ethics approval
- Small-scale pilot programs (5-50 children)
- Technology evaluation and usability testing

### Not Clinically Validated

- **No normative data** established
- **Not validated** against gold-standard assessments
- **Not peer-reviewed** through clinical publication
- **Not regulatory approved** (CE, FDA, etc.)

### Technical Status

- **Functional:** 33 assessments operational
- **Firebase Integration:** Realtime Database and Authentication active
- **Reporting:** Basic reports and progress tracking implemented
- **Security:** Development mode; production security rules documented but not deployed
- **Browser Support:** Optimized for Chrome/Firefox on tablets and desktops

### Documentation Status

- ✅ Complete assessment inventory ([QUIZ_INVENTORY.md](QUIZ_INVENTORY.md))
- ✅ Assessment organization guide ([QUIZ_ORGANIZATION.md](QUIZ_ORGANIZATION.md))
- ✅ Clinician assessment guide ([ASSESSMENT_GUIDE.md](ASSESSMENT_GUIDE.md))
- ✅ Clinician landing page ([about-percepto.html](about-percepto.html))
- ✅ Deployment documentation ([DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md))
- ⚠️ Clinical validation: Pending future study

---

## Future Roadmap

### Near-Term (6-12 months)
- **Larger Pilot Studies:** Deploy in 2-3 clinical or educational sites
- **Behavioral Analytics:** Enhanced pattern recognition from interaction data
- **Firebase Security:** Deploy production security rules
- **Accessibility Improvements:** WCAG compliance and screen reader support
- **Multi-Language Support:** Initial localization for major languages

### Medium-Term (1-2 years)
- **Longitudinal Tracking:** Extended progress monitoring over months/years
- **Adaptive Assessments:** Dynamic difficulty adjustment based on performance
- **AI-Assisted Risk Prediction:** Machine learning models for screening risk stratification
- **Rehabilitation Support:** Integration with therapy protocols and home programs
- **Clinical Validation Study:** Formal validation against established assessments

### Long-Term (2-5 years)
- **Health System Integration:** EHR connectivity and clinical workflow integration
- **Normative Data Establishment:** Population-specific reference data
- **Telehealth Capabilities:** Remote assessment and supervision features
- **Regulatory Pathway:** Pursue appropriate regulatory classification
- **Global Deployment:** NGO partnerships for resource-limited settings

**Note:** Roadmap represents planned directions. Actual implementation depends on funding, partnerships, and validation results. No overcommitment to specific timelines or capabilities.

---

## Repository Structure

```
percepto/
│
├── 📄 Core Application Pages
│   ├── index.html                 # Main dashboard
│   ├── about-percepto.html        # Clinician information page
│   ├── login.html                 # Authentication
│   ├── register.html              # User registration
│   ├── profile.html               # User profile
│   ├── patient_profile.html       # Patient profile
│   ├── admin.html                 # Admin dashboard
│   ├── patients.html              # Patient management
│   └── assessment-hub.html        # Complete assessment library
│
├── 📊 Reports
│   ├── report.html                # Individual assessment report
│   └── reports.html               # Comprehensive dashboard
│
├── 🧩 Assessment Categories (33 assessments)
│   ├── Visual Discrimination/     # 6 assessments + menu pages
│   ├── Visual Closure/            # 4 assessments + menu page
│   ├── Visual Form Constancy/     # 6 assessments + menu pages
│   ├── Visual Memory/             # 3 assessments
│   ├── Visual Sequential Memory/  # 5 assessments + menu page
│   ├── Visual Spatial/            # 2 assessments + menu page
│   ├── Visual Neglect/            # 2 assessments + menu page
│   ├── Figure Ground/             # 2 assessments
│   ├── Motion Perception/         # 1 assessment
│   ├── Pursuit & Fixation/        # 1 experimental assessment
│   └── Observation/               # 1 assessment
│
├── 📁 Shared Resources
│   ├── js/
│   │   ├── firebase-config.js     # Firebase configuration
│   │   ├── auth-utils.js          # Authentication utilities
│   │   └── report-utils.js        # Report generation utilities
│   ├── styles.css                 # Main stylesheet
│   ├── translate-styles.css       # Translation styling
│   └── cvi-colors.css             # CVI-optimized color variables
│
├── 📚 Documentation
│   ├── README.md                  # This file
│   ├── QUIZ_INVENTORY.md          # Complete assessment catalog
│   ├── QUIZ_ORGANIZATION.md       # Assessment hierarchy
│   ├── ASSESSMENT_GUIDE.md        # Clinician interpretation guide
│   ├── DEPLOYMENT_CHECKLIST.md    # Setup and deployment guide
│   ├── firebase-security-rules.md # Security configuration
│   └── CLINICIAN_EXPERIENCE_AUDIT.md # UX audit documentation
│
└── 📁 Assets
    └── images/                    # Assessment images and resources
```

**Total Files:** 45+ pages including 33 active assessments, 12 menu/category pages, reports, and documentation.

---

## Running Locally

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended for full functionality)
- Firebase project (for data persistence and authentication)

### Method 1: Direct File Access
1. Clone or download repository
2. Open `login.html` in web browser
3. Note: Some features may be limited without local server

### Method 2: Python Simple Server
```bash
cd /path/to/percepto
python -m http.server 8000
# Open http://localhost:8000
```

### Method 3: Node.js http-server
```bash
npm install -g http-server
cd /path/to/percepto
http-server -p 8000
```

### Firebase Setup (Required for Full Functionality)
1. Create Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication (Email/Password, Google)
3. Enable Realtime Database and Firestore
4. Copy Firebase config to `js/firebase-config.js`
5. Deploy security rules from `firebase-security-rules.md` (before production use)

---

## GitHub Pages Deployment

### Free Hosting for Demonstrations

GitHub Pages provides free, static hosting suitable for Percepto demonstrations and pilot testing.

**⚠️ Before Real Patient Data:**
> Firebase security rules must be configured before collecting real patient data. See [firebase-security-rules.md](firebase-security-rules.md). GitHub Pages hosts only the frontend; data persistence requires separate Firebase setup.

### Setup Instructions

#### Step 1: Create GitHub Repository

```bash
# Initialize repository (if not already done)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/percepto-quiz.git
git push -u origin main
```

#### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/(root)** folder
5. Click **Save**

#### Step 3: Wait and Access

- Deployment takes 1-3 minutes
- Your site will be live at: `https://yourusername.github.io/percepto-quiz/`
- **Main entry point:** `index.html` loads automatically at the root URL

### Post-Deployment Testing

After deployment, verify these URLs load correctly:

| URL | Expected Content |
|-----|------------------|
| `https://yourusername.github.io/percepto-quiz/` | Dashboard with navigation buttons |
| `/percepto-quiz/about-percepto.html` | About Percepto information page |
| `/percepto-quiz/assessment-hub.html` | Assessment library |
| `/percepto-quiz/login.html` | Authentication page |
| `/percepto-quiz/report.html` | Report viewer |

### Recommended Configuration

- **Source:** `main` branch, `/(root)` folder
- **.nojekyll:** Already present in repository (disables Jekyll processing)
- **Custom domain:** Optional (see GitHub documentation)

### Benefits

- ✅ Free hosting with HTTPS
- ✅ Automatic deployment on every push to main
- ✅ No server maintenance required
- ✅ Suitable for controlled demonstrations and pilot studies
- ✅ GitHub Pages demo-ready

### Limitations & Warnings

| Aspect | Status | Note |
|--------|--------|------|
| **Firebase** | ⚠️ Separate setup required | Authentication and database need valid Firebase config |
| **Server-side** | ❌ Not supported | Only static files; no PHP, Node.js, etc. |
| **Privacy** | ⚠️ Public repository | Code is public; patient data goes to your Firebase |
| **Production** | ❌ Not for real patients | Use only for demos and controlled pilots |

### Alternative: Firebase Hosting

For production use with full Firebase integration:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

See [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) for complete setup instructions, including release packaging and post-deploy validation.

---

## Contributing

### Professional Contribution Standards

Percepto welcomes contributions that advance its mission of accessible visual-perception screening. Contributions should maintain clinical appropriateness and platform integrity.

### Areas for Contribution

**Technical:**
- Accessibility improvements (WCAG compliance)
- Browser compatibility enhancements
- Performance optimizations
- Code organization and refactoring
- Security enhancements

**Clinical:**
- Documentation improvements
- Assessment guide refinements
- User experience research
- Pilot study coordination

**Translation:**
- Multi-language support
- Cultural adaptation guidance
- Regional deployment documentation

### Contribution Guidelines

**Encouraged:**
- Bug fixes and stability improvements
- Documentation enhancements
- Accessibility features
- Code quality improvements
- Translation contributions

**Requires Clinical Review:**
- Changes to assessment scoring algorithms
- Modifications to assessment protocols
- New assessment additions
- Changes to interpretation frameworks

**Not Accepted:**
- Removal of existing assessments
- Breaking changes to Firebase data structure
- Diagnostic claims without validation
- Unvalidated clinical assertions

### Process

1. Fork repository
2. Create feature branch (`feature/description`)
3. Make changes following existing code style
4. Test thoroughly across browsers
5. Submit pull request with clear description
6. Respond to review feedback

### Code of Conduct

- Maintain patient-centered focus
- Respect clinical boundaries (screening, not diagnosis)
- Prioritize accessibility and inclusion
- Acknowledge limitations honestly
- Support resource-limited deployment contexts

---

## Contact & Support

### Technical Support
- Review [QUIZ_INVENTORY.md](QUIZ_INVENTORY.md) for assessment details
- Consult [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) for setup help
- See [firebase-security-rules.md](firebase-security-rules.md) for security configuration

### Clinical Questions
- Reference [ASSESSMENT_GUIDE.md](ASSESSMENT_GUIDE.md) for interpretation guidance
- Consult qualified vision specialists for clinical interpretation
- Validate results with established assessment protocols

### Research & Partnership Inquiries
- For pilot study collaboration
- For NGO deployment partnerships
- For clinical validation research

---

## Acknowledgments

Percepto was developed to address the critical gap in CVI identification, particularly for children in resource-limited settings who may never access specialist evaluation.

**Core Principles:**
- Early identification saves futures
- Technology should increase access, not create barriers
- Screening should be child-friendly and engaging
- Clinical utility requires professional interpretation
- Honest limitations build trust

**Supported By:**
- Clinical advisors providing domain expertise
- Open-source community contributions
- Research partners advancing validation

---

**Version:** 1.0  
**Last Updated:** June 2026  
**Status:** Pilot-Stage Prototype  
**Next Milestone:** Clinical pilot studies

---

*Percepto - Visualizing Potential. Enabling Early Identification.*
