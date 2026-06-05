# Image Content Review

**Date:** June 2026  
**Purpose:** Review image suitability for clinical assessment tasks  
**Status:** In Progress - Clinician Feedback Implementation

---

## Visual Discrimination (VD)

### VD Emotions (VDTSE1.html)

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Under Review | Facial expression images need review |
| Appropriateness | TBD | Pending clinician review |
| Replacement Needed | Possible | If current images are not suitable |
| Asset Source | N/A | Document if manual replacement required |

**Clinician Feedback:** Emotion images may need replacement if not suitable for clinical context.

**Action:** Marked for manual asset replacement if clinician determines current images inappropriate.

---

### VD Colour (VDTCC1.html)

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Basic color swatches/shapes | Using colored geometric shapes |
| Contrast Issues | Review Needed | Options should use similar contrast levels |
| Similarity | Review Needed | Colors should be visually similar for difficulty |

**Clinician Feedback:** Options should use colors with similar contrast where possible.

**Action:** Current implementation uses colored shapes. May need adjustment if contrast is too high/low.

---

### VD Size (VDTS1.html / VDTS2.html)

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Geometric shapes at different sizes | size1.png, size2.png, etc. |
| Appropriateness | ✅ Acceptable | Size discrimination task is clear |
| Functionality | Fixed | Popup feedback system verified working |

**Status:** No image changes required. Functionality issues addressed.

---

## Visual Closure (VC)

### VC1 - Find the Matching Shape

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Partial/incomplete shapes | Need review for appropriateness |
| Appropriateness | Under Review | Pending clinician feedback |

**Action:** Images need clinical review for developmental appropriateness.

---

### VC2 - Find the Shadow

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Shadow silhouettes | Need review |
| Appropriateness | Under Review | Pending clinician feedback |

**Action:** Images need clinical review.

---

### VC3 - Animal Behind the Bush

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Animals partially hidden | Need review |
| Appropriateness | Under Review | Child-friendly imagery needs verification |

**Clinician Feedback:** "Animal Behind the Bush" - verify images show appropriate occlusion.

**Action:** Images need clinical review for developmental appropriateness.

---

### VC4 - Find the Missing Objects

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Scene-based images | CURRENTLY INAPPROPRIATE |
| Appropriateness | ❌ Needs Replacement | Clinician noted pictures are not appropriate |
| Replacement Priority | HIGH | Task needs compatible images |
| Quantity | 2 items sufficient | Current implementation supports variable count |

**Clinician Feedback:** Current pictures are not appropriate. Make them compatible with the task. 2 items/images are enough.

**Action Required:** 
- Replace scene images with developmentally appropriate content
- Ensure 2-4 objects can be hidden/removed from familiar scenes
- Scenes should be child-friendly (classroom, playground, home)

---

## Form Constancy (VFC)

### VFC11 - Level 1: Numbers

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Numbers in different fonts/styles | images/VFC/lvl1/numbers/ |
| Appropriateness | Under Review | Need to verify visual similarity |
| Task Type | Number matching | "Shape" language changed to "numbers" |

**Clinician Feedback:** Numbers should be visually similar/harder where possible.

**Action:** Review number assets for appropriate difficulty level.

---

### VFC12 - Level 2: Alphabets

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Letters in different fonts | images/VFC/lvl1/letters/ |
| Appropriateness | Under Review | Need verification |
| Label | ✅ Fixed | Changed from "Letters" to "Alphabets" |

**Action:** Review letter assets for appropriate difficulty.

---

### VFC13 - Level 3: Pictures & Objects

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Objects at different sizes | images/VFC/lvl1/size/ |
| Appropriateness | Under Review | Need verification |
| Label | ✅ Fixed | Changed from "Size/Shape" to "Pictures & Objects" |

**Action:** Review object images for size variation clarity.

---

### VFC23 - Level 4: Shapes Placement

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Images | Shape matching/placement | Grid-based interaction |
| Layout | Fixed | Removed unnecessary gaps |
| Interaction | Verified | "Select correct matching options" behavior |
| Appropriateness | Under Review | Need verification |
| Label | ✅ Fixed | Changed to "Shapes Placement" |

**Clinician Feedback:** Shapes placing exercise - remove unnecessary gaps, ensure proper interaction.

**Action:** Layout issues addressed. Images need review.

---

## Figure Ground / Visual Complexity

### FG.html - Object Matching Game

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Content | "Remember and Find the Object!" | May need reclassification |
| Category | Under Review | Verify if this belongs here or elsewhere |

**Clinician Feedback:** "Find Hidden Objects" should be in Figure Ground or Visual Complexity.

**Action:** Investigate if FG.html contains hidden object tasks or if separate pages exist.

---

## Biological Motion (New Category)

### BM.html - Biological Motion Category

| Aspect | Status | Notes |
|--------|--------|-------|
| Current Content | Placeholder category page | No actual assessments yet |
| Assets Required | Yes | Moving dot patterns, biological motion stimuli |
| Status | Prototype | Placeholder for future development |

**Assets Needed (if implementing):**
- Point-light displays of human figures
- Direction of moving dots animations
- Biological motion recognition stimuli
- Walking/running point-light figures

**Note:** No actual assessment files created yet - category page only.

---

## Summary Table

| Page/File | Status | Action Required | Asset Replacement |
|-----------|--------|-----------------|-------------------|
| VD Emotions (VDTSE1) | ❓ Clinician Review | Verify facial expression appropriateness | TBD after review |
| VD Colour (VDTCC1) | ✅ OK | Current colored shapes acceptable | No |
| VD Size (VDTS1/2) | ✅ OK | Geometric shapes appropriate | No |
| VC1 (Matching Shape) | ❓ Clinician Review | Verify partial shape appropriateness | TBD after review |
| VC2 (Find Shadow) | ❓ Clinician Review | Verify shadow silhouettes | TBD after review |
| VC3 (Animal/Bush) | ❓ Clinician Review | Verify occlusion appropriateness | TBD after review |
| VC4 (Missing Objects) | ❌ INAPPROPRIATE | **HIGH PRIORITY - Replace scene images** | **YES - REQUIRES NEW ASSETS** |
| VFC11 (Numbers) | ❓ Clinician Review | Verify difficulty level | TBD after review |
| VFC12 (Alphabets) | ❓ Clinician Review | Verify font variation | TBD after review |
| VFC13 (Pictures) | ❓ Clinician Review | Verify size variation clarity | TBD after review |
| VFC23 (Shapes) | ✅ OK | Layout fixed, images acceptable | No |
| FG (Hidden Objects) | ❓ Verify Location | Confirm if FG contains hidden object tasks | N/A |
| BM (Biological Motion) | ⏸️ Placeholder | Future development - no assets yet | N/A |

---

## Priority Actions

### HIGH PRIORITY
1. **VC4 (Find Missing Objects)** - Replace inappropriate scene images
2. **VD Emotions** - Review and replace if unsuitable

### MEDIUM PRIORITY
3. Review all VC pages for developmental appropriateness
4. Review VFC number/alphabet images for difficulty calibration

### LOW PRIORITY
5. Biological Motion assets (future development)
6. Fine-tuning color contrasts in VD Colour

---

## Asset Requirements (If Manual Replacement Needed)

### For VC4 (Find Missing Objects):
- 4-6 familiar scene backgrounds (classroom, playground, home, park)
- 20-30 familiar objects that can be hidden (toys, school items, animals)
- Objects should be clearly identifiable when visible
- Scenes should not be overly complex or cluttered

### For VD Emotions (If replacement needed):
- Simplified facial expression images
- Clear, unambiguous emotions (happy, sad, angry, surprised)
- Child-friendly, culturally appropriate faces
- Avoiding overly complex or potentially distressing images

### For Biological Motion (Future):
- Point-light display animations
- Moving dot pattern videos/GIFs
- Human figure motion sequences
- Animal motion sequences

---

## Notes

**Important:** Do not use random web images without permission. All current assets should be reviewed with clinicians before replacement. This document tracks the status but actual asset replacement requires:
1. Clinical approval of current images
2. Sourcing of appropriate replacement assets
3. Testing of new assets for task functionality

**Last Updated:** June 2026  
**Next Review:** After clinician feedback on current assets
