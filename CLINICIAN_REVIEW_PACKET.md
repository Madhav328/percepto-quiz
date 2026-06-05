# Clinician Review Packet

**For:** Dr. Sahithya / Clinical Reviewers  
**Date:** June 5, 2026  
**Purpose:** Decision checklist for next implementation pass  
**Status:** Review Required - No Action Taken Yet

---

## Executive Summary

This packet contains **8 high-priority decisions** needed from clinical reviewers before the next implementation pass. Each decision directly impacts assessment validity and clinical appropriateness.

**Total Decisions Needed:** 8  
**Asset Replacements Pending:** 1 confirmed (VC4) + 1 possible (VD Emotions)  
**Category Confirmations:** 2  
**Label Verifications:** 1

---

## 1. High-Priority Decisions

---

### Decision #1: VC4 - Find the Missing Objects Image Replacement

**Current File/Page:** `VC4.html` (Visual Closure - Level 4)

**Current Issue:**
- Scene images currently used are "not appropriate" per previous clinician feedback
- Images do not support the task purpose of finding missing objects in familiar scenes
- Task is currently unusable for clinical purposes

**Why Clinician Input is Needed:**
- Need to confirm what types of scenes are developmentally appropriate
- Need to verify what objects should be hideable/missing
- Must ensure cultural appropriateness for target population
- Need to confirm visual complexity level suitable for CVI screening

**Recommended Options:**

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| A | Replace with child-friendly scenes (classroom, playground, home) | Familiar contexts, developmentally appropriate | Requires sourcing/generating new assets |
| B | Use simplified graphic scenes (cartoon-style) | Consistent style, clear visibility | May lack ecological validity |
| C | Use photo-realistic but simplified environments | Real-world transfer | Harder to source appropriate images |

**Clinician Decision Needed:**
- [ ] Select option A, B, or C
- [ ] Specify 4-6 scene types (e.g., classroom, bedroom, park, kitchen)
- [ ] Specify object categories appropriate to hide (toys, school items, household items)
- [ ] Confirm 2-4 missing objects per scene is appropriate quantity

**What Developer Will Do After Decision:**
- Source or generate images matching selected option
- Ensure 20-30 hideable objects across all scenes
- Implement in VC4.html with proper sizing
- Test functionality before requesting clinical review

---

### Decision #2: VD Emotions - Image Suitability

**Current File/Page:** `VDTSE1.html` (Visual Discrimination - Emotions)

**Current Issue:**
- Facial expression images present but clinical appropriateness not verified
- Previous feedback noted: "Emotion images need review"
- May contain images that are confusing, culturally inappropriate, or clinically unsuitable

**Why Clinician Input is Needed:**
- Verify facial expressions are unambiguous and recognizable
- Ensure cultural appropriateness for target population
- Confirm emotions selected are clinically relevant for CVI screening
- Check that images are not distressing or confusing for children

**Recommended Options:**

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| A | Current images are acceptable | No asset replacement needed | Risk of unsuitable content |
| B | Replace with simplified cartoon faces | Clear expressions, child-friendly | Less real-world validity |
| C | Replace with photo-realistic diverse faces | Real-world application | Sourcing challenge, may have ambiguity |
| D | Replace with culturally-specific faces for target population | Cultural appropriateness | Requires knowing target population |

**Clinician Decision Needed:**
- [ ] Review current VDTSE1.html images
- [ ] Select option A (keep), B, C, or D (replace)
- [ ] If replacing: specify required emotions (e.g., happy, sad, angry, surprised, scared)
- [ ] Specify if diverse representation needed (age, ethnicity, gender)
- [ ] Confirm 4-6 emotions is appropriate range

**What Developer Will Do After Decision:**
- If keep (Option A): Document approval, no changes
- If replace (Options B/C/D): Source appropriate emotion images
- Update VDTSE1.html with new assets
- Ensure consistent sizing and clarity

---

### Decision #3: VC1-VC3 - Visual Closure Image Suitability

**Current File/Page:** 
- `VC1.html` (Find the Matching Shape)
- `VC2.html` (Find the Shadow)  
- `VC3.html` (Animal Behind the Bush)

**Current Issue:**
- Images marked "Under Review" in truth audit
- Appropriateness for developmental level not verified
- Visual complexity, partial occlusion appropriateness not confirmed

**Why Clinician Input is Needed:**
- VC1: Verify partial shapes are appropriate difficulty for visual closure screening
- VC2: Confirm shadow silhouettes are recognizable and developmentally appropriate
- VC3: Verify animal occlusion levels are appropriate (not too hard/easy)
- All: Ensure images are child-friendly and engaging

**Recommended Approach:**
Request review of current images with specific criteria:

| Criterion | VC1 (Partial Shapes) | VC2 (Shadows) | VC3 (Occluded Animals) |
|-----------|----------------------|---------------|------------------------|
| Difficulty | 50-75% visible? | Clear silhouette? | 30-60% occluded? |
| Content | Familiar objects? | Recognizable forms? | Child-friendly animals? |
| Clarity | Unambiguous? | Distinct shadows? | Clear animal features? |

**Clinician Decision Needed:**
- [ ] Review each VC1, VC2, VC3 page
- [ ] For each: Mark as ✅ Acceptable or ❌ Needs Replacement
- [ ] If replacement needed: specify what changes required

**What Developer Will Do After Decision:**
- For pages marked ✅: Document approval, no changes
- For pages marked ❌: Source replacement images per specifications
- Update pages with new assets
- Re-verify functionality

---

### Decision #4: VD Colour - Contrast Appropriateness

**Current File/Page:** `VDTCC1.html` (Visual Discrimination - Color)

**Current Issue:**
- Previous feedback noted: "Options should use similar contrast where possible"
- Current implementation uses colored geometric shapes
- Contrast levels not clinically verified

**Why Clinician Input is Needed:**
- Confirm current color choices are appropriate for CVI screening
- Verify similarity/difference in colors matches intended difficulty
- Ensure contrast levels don't create false positives/negatives

**Recommended Questions for Reviewer:**
1. Are the current color options appropriate for discriminating color perception?
2. Is the difficulty level appropriate for the target age group?
3. Should colors have more similar luminance (harder) or more different (easier)?
4. Are the specific colors chosen clinically meaningful?

**Clinician Decision Needed:**
- [ ] Review VDTCC1.html current implementation
- [ ] Mark as: ✅ Acceptable or ⚠️ Needs Adjustment
- [ ] If adjustment needed: specify which colors need changing and why

**What Developer Will Do After Decision:**
- If ✅: Document approval
- If ⚠️: Adjust color specifications per clinician guidance
- May involve changing color hex codes in CSS

---

### Decision #5: Biological Motion Category Confirmation

**Current File/Page:** `BM.html` (Biological Motion category placeholder)

**Current Issue:**
- Category created per previous feedback but no assessments implemented
- Need to confirm this category is still desired
- If yes, need to prioritize development or keep as placeholder

**Why Clinician Input is Needed:**
- Confirm Biological Motion is clinically relevant for CVI screening
- Determine priority level for assessment development
- Verify intended assessment types align with clinical needs

**Recommended Options:**

| Option | Description | Timeline | Effort |
|--------|-------------|----------|--------|
| A | Keep as placeholder only | Immediate | None |
| B | Active development - priority | 2-3 months | High (needs animated assets) |
| C | Active development - future phase | 6-12 months | High |
| D | Remove category | Immediate | None (delete BM.html) |

**Planned Assessments (if proceeding):**
1. Direction of moving dots discrimination
2. Shape represented by moving dots identification
3. Matching moving dot figure to static image
4. Biological motion recognition (point-light displays)

**Clinician Decision Needed:**
- [ ] Select option A, B, C, or D
- [ ] If B or C: prioritize which assessment type to develop first
- [ ] If B or C: confirm point-light display format is acceptable

**What Developer Will Do After Decision:**
- Option A: No changes, document as future placeholder
- Option B/C: Begin asset sourcing and development
- Option D: Remove BM.html and update all documentation to 11 categories

---

### Decision #6: Figure Ground vs Visual Complexity Category Placement

**Current Files/Pages:** 
- `FG.html` (Figure Ground)
- Potentially other "hidden object" or "what's happening" tasks

**Current Issue:**
- Previous feedback: "Find Hidden Objects should be in Figure Ground or Visual Complexity"
- Current location of certain tasks unclear
- "What's happening to FG" feedback unclear - needs clarification

**Why Clinician Input is Needed:**
- Confirm appropriate categorization of visual tasks
- Clarify "What's happening to FG" feedback
- Determine if Visual Complexity should be separate category or combined

**Current Category Structure:**
```
Current (12 categories):
├── Figure Ground (2 assessments)
├── Visual Complexity - NOT A SEPARATE CATEGORY
└── Find Hidden Objects - UNCLEAR LOCATION
```

**Recommended Options:**

| Option | Description | Changes Required |
|--------|-------------|------------------|
| A | Keep current: Figure Ground contains hidden object tasks | None |
| B | Create separate Visual Complexity category | Move tasks, create new menu page |
| C | Rename Figure Ground to "Figure Ground & Visual Complexity" | Documentation updates only |
| D | Reclassify specific tasks to different categories | Task-by-task review |

**Clinician Decision Needed:**
- [ ] Clarify "What's happening to FG" feedback - what was the concern?
- [ ] Select categorization option A, B, C, or D
- [ ] If B or D: specify which specific tasks need reclassification
- [ ] Confirm if "What's Happening" quiz belongs in Observation or elsewhere

**What Developer Will Do After Decision:**
- Implement selected categorization
- Update all navigation menus
- Update documentation (README, QUIZ_INVENTORY, etc.)
- Ensure no broken links

---

### Decision #7: Form Constancy Task Labels Verification

**Current Files/Pages:**
- `VFC11.html` - "Level 1: Numbers"
- `VFC12.html` - "Level 2: Alphabets"
- `VFC13.html` - "Level 3: Pictures & Objects"
- `VFC23.html` - "Level 4: Shapes Placement"

**Current Issue:**
- Labels were updated in previous pass per clinician feedback
- Need to verify these labels are clinically appropriate
- Previous feedback mentioned changing "Letters" to "Alphabets" and adding "Pictures & Objects"

**Why Clinician Input is Needed:**
- Confirm terminology is standard in clinical practice
- Verify "Alphabets" vs "Letters" is appropriate
- Confirm "Pictures & Objects" accurately describes task content
- Verify "Shapes Placement" is clear to users

**Current Labels (to verify):**

| Level | Current Label | Previous Label | Status |
|-------|---------------|----------------|--------|
| 1 | Numbers | Numbers | ✅ Standard |
| 2 | Alphabets | Letters | ⚠️ Verify preferred term |
| 3 | Pictures & Objects | Size/Shape | ⚠️ Verify accuracy |
| 4 | Shapes Placement | (varied) | ⚠️ Verify clarity |

**Clinician Decision Needed:**
- [ ] Confirm "Alphabets" is preferred term over "Letters" for Level 2
- [ ] Confirm "Pictures & Objects" accurately describes VFC13 content
- [ ] Confirm "Shapes Placement" is clear for VFC23 matching task
- [ ] Any other label adjustments needed?

**What Developer Will Do After Decision:**
- If all confirmed: Document approval
- If changes needed: Update page titles and headings
- Update assessment-hub.html descriptions
- Update menu button labels

---

### Decision #8: VFC Numbers & Alphabets Difficulty Calibration

**Current Files/Pages:**
- `VFC11.html` (Numbers Level 1)
- `VFC21.html` (Numbers Level 2)
- `VFC12.html` (Alphabets Level 1)
- `VFC22.html` (Alphabets Level 2)

**Current Issue:**
- Previous feedback: "Numbers options similar contrast" and "Numbers should be visually similar/harder where possible"
- Current font variations and number styles not verified for appropriate difficulty

**Why Clinician Input is Needed:**
- Verify difficulty progression from Level 1 to Level 2 is appropriate
- Confirm font/number variations create meaningful challenge
- Ensure similarity level is calibrated for target age group
- Check that tasks are neither too easy (ceiling effect) nor too hard (frustration)

**Assessment Questions:**

For **VFC11 vs VFC21 (Numbers)**:
- Is the difference between Level 1 and Level 2 numbers appropriate?
- Are Level 2 numbers sufficiently similar/difficult?
- Is the progression meaningful for assessing form constancy?

For **VFC12 vs VFC22 (Alphabets/Letters)**:
- Is font variation in Level 2 appropriately challenging?
- Are letter forms sufficiently different/similar?
- Is the task appropriate for reading readiness screening?

**Clinician Decision Needed:**
- [ ] Review VFC11 and VFC21 - mark difficulty as: ✅ Appropriate or ⚠️ Needs Adjustment
- [ ] Review VFC12 and VFC22 - mark difficulty as: ✅ Appropriate or ⚠️ Needs Adjustment
- [ ] If adjustment needed: specify what changes (font types, number styles, similarity levels)

**What Developer Will Do After Decision:**
- If ✅: Document approval
- If ⚠️: Source new font/number assets per specifications
- Update image files in `images/VFC/` directories
- Re-verify task functionality

---

## 2. Asset Requirements Summary

For confirmed and potential image replacements, specifications are:

### For VC4 (Find the Missing Objects) - CONFIRMED NEED

**Required:** YES - High Priority  
**Current Status:** Inappropriate images  
**Decision:** Awaiting clinician scene selection

| Specification | Requirement |
|-------------|-------------|
| **Image Type** | Scene backgrounds with hideable objects |
| **Quantity** | 4-6 scene backgrounds + 20-30 objects |
| **Visual Style** | Child-friendly, familiar environments |
| **Format** | PNG with transparency for objects (or separate object files) |
| **Resolution** | 800x600 minimum, optimized for tablet display |
| **Constraints** | |
| - Child-friendly | ✅ Familiar settings (home, school, park) |
| - Culturally appropriate | ✅ Neutral/global settings preferred |
| - Clear contrast | ✅ Objects distinguishable from background |
| - No copyrighted images | ✅ Original or licensed assets only |
| - Clinically meaningful | ✅ Real-world environments |
| - Mobile/tablet usable | ✅ Touch-friendly sizing |

**Example Scenes Needed:**
- Classroom with desk, books, pencils, etc.
- Bedroom with toys, furniture, clothing
- Playground with equipment, balls, etc.
- Kitchen with utensils, food items
- Park/Outdoor with nature items
- Living room with common objects

---

### For VD Emotions (VDTSE1) - POSSIBLE NEED

**Required:** Depends on clinician review  
**Current Status:** Awaiting suitability decision  
**Decision:** Awaiting clinician review of current images

| Specification | Requirement |
|-------------|-------------|
| **Image Type** | Facial expression images |
| **Quantity** | 4-6 distinct emotions |
| **Visual Style** | Simplified, unambiguous expressions |
| **Format** | PNG or JPG, consistent sizing |
| **Resolution** | 400x400 minimum, face clearly visible |
| **Constraints** | |
| - Child-friendly | ✅ Non-threatening, approachable |
| - Culturally appropriate | ✅ Diverse representation or culturally matched to population |
| - Clear contrast | ✅ Distinct from background |
| - No copyrighted images | ✅ Original or licensed assets only |
| - Clinically meaningful | ✅ Basic emotions: happy, sad, angry, surprised, etc. |
| - Mobile/tablet usable | ✅ Visible at small sizes |

**Emotions Likely Needed:**
- Happy
- Sad
- Angry
- Surprained/Scared
- Neutral (optional)

---

### For VC1-VC3 (If Replacement Needed)

**Required:** Depends on clinician review  
**Current Status:** Pending review  

| Page | If Replacement Needed | Specifications |
|------|----------------------|----------------|
| VC1 (Matching Shape) | Partial shape images | 50-75% visible, familiar objects |
| VC2 (Find Shadow) | Shadow silhouettes | Clear, recognizable forms |
| VC3 (Animal/Bush) | Occluded animals | 30-60% occluded, child-friendly animals |

---

### For VFC (If Replacement Needed)

**Required:** Depends on clinician review  
**Current Status:** Pending difficulty verification  

| Page | If Replacement Needed | Specifications |
|------|----------------------|----------------|
| VFC11 (Numbers L1) | Number variations | Standard fonts, clear differences |
| VFC21 (Numbers L2) | Number variations | Similar fonts, subtle differences |
| VFC12 (Letters L1) | Letter variations | Standard fonts |
| VFC22 (Letters L2) | Letter variations | Varied fonts, challenging but readable |

---

## 3. Summary: Clinician Decisions Needed

### Immediate Decisions (Before Next Dev Pass)

| # | Decision | Page/File | Impact |
|---|----------|-----------|--------|
| 1 | **VC4 Image Replacement Strategy** | VC4.html | High - Task currently unusable |
| 2 | **VD Emotions Image Suitability** | VDTSE1.html | Medium - May need replacement |
| 3 | **VC1-VC3 Image Suitability** | VC1/2/3.html | Medium - Verify appropriateness |
| 4 | **VD Colour Contrast** | VDTCC1.html | Low-Medium - May need adjustment |

### Category/Structure Decisions

| # | Decision | Impact |
|---|----------|--------|
| 5 | **Biological Motion Priority** | Structural - Keep/Develop/Remove |
| 6 | **Figure Ground Categorization** | Structural - Reclassification may be needed |

### Label/Terminology Decisions

| # | Decision | Page/File | Impact |
|---|----------|-----------|--------|
| 7 | **Form Constancy Labels** | VFC11-23.html | Low - Verify terminology |
| 8 | **VFC Difficulty Calibration** | VFC11/12/21/22.html | Medium - Verify challenge level |

---

## 4. Next Steps After Clinician Review

### For Clinician:
1. Review this packet
2. Go through each of 8 decisions
3. Make selections/recommendations
4. Return marked-up packet or notes

### For Developer (After Receiving Feedback):
1. Update `CLINICIAN_FEEDBACK_ACTIONS.md` with decisions
2. Create implementation plan based on priorities
3. Source assets for confirmed replacements (VC4, possibly VD Emotions)
4. Begin next implementation pass
5. Update `PROJECT_STATUS_JUNE_2026.md` with new timeline

---

## 5. Contact & Questions

**For questions about this packet:**
- Review `CLINICIAN_FEEDBACK_VALIDATION.md` for detailed technical status
- Review `PROJECT_STATUS_JUNE_2026.md` for overall project context
- Each decision section above includes specific questions

**No code changes will be made** until this packet is returned with decisions.

---

**Packet Prepared:** June 5, 2026  
**Awaiting Clinician Review:** Pending  
**Do Not Implement Until:** Decisions received
