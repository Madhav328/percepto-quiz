# Clinician Feedback Actions Tracker

**Date:** June 2026  
**Branch:** clinician-feedback-pass  
**Purpose:** Track all clinician feedback items and their resolution status

---

## Visual Discrimination (VD)

| Feedback Item | Current Page/File | Category | Action Needed | Status | Notes |
|--------------|-------------------|----------|---------------|--------|-------|
| Size popup not appearing | VDSize.html | Visual Discrimination | Fix correct/incorrect popup functionality | pending | Check JavaScript event handlers |
| Size dialogue shows 2 tries incorrectly | VDSize.html | Visual Discrimination | Fix attempt counting and feedback logic | pending | Review scoring logic |
| Emotions should be 1 level only | VDEmotions.html | Visual Discrimination | Remove "Level 1" label, set title to "Emotion Recognition Exercise" | pending | Check if suitable emotion images exist |
| Emotion images need review | VDEmotions.html | Visual Discrimination | Review image suitability, mark if replacement needed | pending | Document current assets |
| Colour remove "Level 1" wording | VDColour.html | Visual Discrimination | Remove level labeling if single quiz | pending | Verify there's only one colour quiz |
| Yellow dot not moving | mirror.html or VDmirror | Visual Discrimination/Fixation | Investigate animation issue | pending | Check CSS animations or JavaScript |

---

## Visual Closure (VC)

| Feedback Item | Current Page/File | Category | Action Needed | Status | Notes |
|--------------|-------------------|----------|---------------|--------|-------|
| Reorganize levels | VC.html, VC1-4 | Visual Closure | Reorder: 1-Matching Shape, 2-Find Shadow, 3-Animal Behind Bush, 4-Missing Objects | pending | Update menu and file references |
| Level 1 label | VC1.html | Visual Closure | Change to "Find the Matching Shape" | pending | |
| Level 2 label | VC2.html | Visual Closure | Change to "Find the Shadow" | pending | |
| Level 3 label | VC3.html | Visual Closure | Change to "Animal Behind the Bush" | pending | |
| Level 4 label | VC4.html | Visual Closure | Change to "Find the Missing Objects" | pending | |
| VC images need review | VC1-4.html | Visual Closure | Review image appropriateness | pending | Document each page's assets |
| Missing Objects pictures not appropriate | VC4.html | Visual Closure | Replace or mark for manual asset replacement | pending | Check existing assets |
| Missing Objects reduce to 2 items | VC4.html | Visual Closure | Adjust to 2 images if implementation supports | pending | May require code changes |
| VC4 image size adjustment | VC4.html | Visual Closure | Fix image sizing issues | pending | Check CSS |
| VC4 functionality broken | VC4.html | Visual Closure | Fix clicks/answers if broken | pending | Test interaction |
| Add 1 more column | VC pages | Visual Closure | Add additional answer choice if improves layout | pending | Check mobile responsiveness |
| No popup for VC | VC1-4.html | Visual Closure | Add correct/incorrect feedback popups | pending | Ensure child-friendly design |

---

## Figure Ground and Visual Complexity

| Feedback Item | Current Page/File | Category | Action Needed | Status | Notes |
|--------------|-------------------|----------|---------------|--------|-------|
| Move "Find Hidden Object" | Currently in FC? | Form Constancy → Figure Ground | Reclassify task to Figure Ground | pending | Verify current location |
| "What's happening to FG" | FG.html | Figure Ground | Investigate unclear feedback | pending | Clarify with clinician |
| Visual Complexity → What's Happening quiz | Unknown | Visual Complexity/Figure Ground | Reclassify and relabel | pending | Determine appropriate category |
| Find Hidden Objects shift to Figure Ground | Hidden Object pages | Form Constancy/Other → Figure Ground | Move visible navigation to Figure Ground | pending | Update all menu pages and docs |

---

## Form Constancy (VFC)

| Feedback Item | Current Page/File | Category | Action Needed | Status | Notes |
|--------------|-------------------|----------|---------------|--------|-------|
| Replace confusing subheadings | VFC pages | Form Constancy | Use: Level 1 Numbers, Level 2 Alphabets, Level 3 Pictures, Level 4 Shapes Placement | pending | Update all level pages |
| Numbers task - change "shape" language | VFC Numbers | Form Constancy | Change to "numbers" terminology | pending | |
| Numbers options similar contrast | VFC Numbers | Form Constancy | Make options visually similar | pending | May need asset review |
| Alphabets subheading | VFC Alphabets | Form Constancy | Change to "Alphabets" or "Letter Recognition" | pending | |
| Add picture/object exercise | VFC | Form Constancy | Add only if suitable assets exist | pending | Document if assets unavailable |
| Shapes placing exercise gaps | VFC Shapes | Form Constancy | Remove unnecessary gaps | pending | Check layout |
| Shapes placing interaction | VFC Shapes | Form Constancy | Ensure "select correct matching" behavior | pending | Verify interaction logic |
| Find Hidden Objects placement | FC pages | Form Constancy | Move to Figure Ground if incorrectly placed | pending | Check current location |

---

## Biological Motion (New Category)

| Feedback Item | Current Page/File | Category | Action Needed | Status | Notes |
|--------------|-------------------|----------|---------------|--------|-------|
| Create new category | - | Biological Motion | Add to all documentation and navigation | pending | |
| Direction of moving dots | Existing pages? | Biological Motion | Categorize existing or document as needed | pending | Find existing pages |
| Shape represented by moving dots | Existing pages? | Biological Motion | Categorize existing or document as needed | pending | Find existing pages |
| Matching moving dot figure | Existing pages? | Biological Motion | Categorize existing or document as needed | pending | Find existing pages |

---

## Popup/Feedback Consistency

| Feedback Item | Current Page/File | Category | Action Needed | Status | Notes |
|--------------|-------------------|----------|---------------|--------|-------|
| No popup for Size | VDSize.html | Visual Discrimination | Add correct/incorrect feedback | pending | |
| No popup for Emotions | VDEmotions.html | Visual Discrimination | Add correct/incorrect feedback | pending | |
| No popup for Colour | VDColour.html | Visual Discrimination | Add correct/incorrect feedback | pending | |
| No popup for VC | VC1-4.html | Visual Closure | Add correct/incorrect feedback | pending | |

---

## Image Content Review

| Page/File | Current Status | Issue | Fixed | Needs New Assets | Recommended Action |
|-----------|----------------|-------|-------|------------------|-------------------|
| VD Emotions | pending review | Image appropriateness | no | TBD | Review and document |
| VD Colour | pending review | Contrast/similarity | no | TBD | Review and document |
| VC1 | pending review | Appropriateness | no | TBD | Review and document |
| VC2 | pending review | Appropriateness | no | TBD | Review and document |
| VC3 | pending review | Appropriateness | no | TBD | Review and document |
| VC4 | pending review | Appropriateness | no | TBD | Review and document |
| VC Missing Objects | pending review | Inappropriate images | no | TBD | Mark for replacement |
| VC Find Shadow | pending review | Appropriateness | no | TBD | Review and document |
| VC Animal Behind Bush | pending review | Appropriateness | no | TBD | Review and document |
| VFC Numbers | pending review | Visual similarity | no | TBD | Review and document |
| VFC Alphabets | pending review | Visual similarity | no | TBD | Review and document |
| VFC Pictures | pending review | Appropriateness | no | TBD | Review and document |
| VFC Shapes | pending review | Layout/interaction | no | TBD | Review and document |
| Biological Motion | pending review | Assets exist? | no | TBD | Review and document |

---

## Documentation Updates Required

| Document | Updates Needed | Status |
|----------|----------------|--------|
| assessment-hub.html | Reorganize categories, add Biological Motion | pending |
| README.md | Update assessment category list | pending |
| ASSESSMENT_GUIDE.md | Reorganize categories, add Biological Motion descriptions | pending |
| QUIZ_INVENTORY.md | Reorganize assessments, update categories | pending |
| QUIZ_ORGANIZATION.md | Restructure categories | pending |
| LINK_AUDIT_GITHUB_PAGES.md | Update if links change | pending |
| FINAL_GITHUB_DEPLOYMENT_AUDIT.md | Update if readiness changes | pending |

---

## Assessment Count Tracking

| Category | Current Count | Expected After Changes | Notes |
|----------|---------------|------------------------|-------|
| Visual Discrimination | TBD | TBD | Verify after reorganization |
| Visual Closure | 4 | 4 | Reorganize levels only |
| Figure Ground | TBD | TBD | + Hidden Objects if moved |
| Visual Complexity | TBD | TBD | Reclassify What's Happening |
| Form Constancy | TBD | TBD | - Hidden Objects if moved |
| Biological Motion | 0 | TBD | New category |

---

## Progress Summary

**Total Feedback Items:** ~30+  
**Fixed:** 0  
**Pending:** ~30+  
**Needs Manual Assets:** TBD  
**Needs Clarification:** TBD

---

## Branch Information

**Branch Name:** `clinician-feedback-pass`  
**Created From:** `main`  
**Purpose:** Clinical content corrections and category reorganization  
**Preservation Rule:** All existing quizzes preserved unless explicitly instructed
