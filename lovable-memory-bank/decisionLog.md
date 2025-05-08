
# Decision Log

This file records architectural and implementation decisions in a structured and navigable format.

---

## Table of Contents

1. [Decision 001: Type System – Support `string | number` for BloodTestResult.value](#decision-001-type-system--support-string--number-for-bloodtestresultvalue)
2. [Decision 002: UI/UX – Compact, Responsive Blood Test Input Form](#decision-002-uiux--compact-responsive-blood-test-input-form)
3. [Decision 003: UI/UX – Gender Switch Functionality & UI Organization](#decision-003-uiux--gender-switch-functionality--ui-organization)
4. [Decision 004: UI/UX – Marker Info Space Optimization](#decision-004-uiux--marker-info-space-optimization)
5. [Decision 005: UI/UX – Enhanced Upload Functionality & Visual Design](#decision-005-uiux--enhanced-upload-functionality--visual-design)
6. [Decision 006: Dependency – Icon Import Fixes (lucide-react)](#decision-006-dependency--icon-import-fixes-lucide-react)
7. [Decision 007: Internationalization – Locale Files & French Support](#decision-007-internationalization--locale-files--french-support)
8. [Decision 008: Accessibility – Button Accessibility & Event Handling](#decision-008-accessibility--button-accessibility--event-handling)
9. [Decision 009: Internationalization – Comprehensive Translation Keys](#decision-009-internationalization--comprehensive-translation-keys)
10. [Decision 010: Internationalization & UI – Spanish Support, Country Flags, and Layout Changes](#decision-010-internationalization--ui--spanish-support-country-flags-and-layout-changes)

---

### Decision 001: Type System – Support `string | number` for BloodTestResult.value

**Date:** 2025-04-28 10:00:00  
**Category:** Type System

#### Headline
Allow `BloodTestResult.value` to accept both strings and numbers.

#### Rationale
- Simplifies form handling and calculations.

#### Implementation Details
- Changed type to `string | number` and updated parsing logic.

---

### Decision 002: UI/UX – Compact, Responsive Blood Test Input Form

**Date:** 2025-05-07 13:30:00  
**Category:** UI/UX

#### Headline
Redesign input form for compactness and responsiveness.

#### Rationale
- Improve usability and fit more data on screen.

#### Implementation Details
- Used grid layout, hover tooltips, and gender-aware placeholders.

---

### Decision 003: UI/UX – Gender Switch Functionality & UI Organization

**Date:** 2025-05-07 14:45:00  
**Category:** UI/UX

#### Headline
Fix gender switch and remove redundant info.

#### Rationale
- Ensure accurate reference ranges and reduce clutter.

#### Implementation Details
- Synced gender state and moved info to hover cards.
- Updated BloodTestContainer to properly handle gender changes and pass them to getStatus function.
- Moved reference range information from below input fields into the info hover cards.
- Added gender-specific reference ranges in the placeholder text of input fields.
- Enhanced HoverCard components to display comprehensive marker information including reference ranges.
- Ensured reference ranges update appropriately when gender selection changes.

---

### Decision 004: UI/UX – Marker Info Space Optimization

**Date:** 2025-05-07 16:30:00  
**Category:** UI/UX

#### Headline
Optimize marker information display to reduce vertical space usage.

#### Rationale
- Additional information about markers was taking too much vertical space.
- Compact display needed for better readability.

#### Implementation Details
- Moved detailed marker info into hover cards.
- Reduced redundant information below input fields.

---

### Decision 005: UI/UX – Enhanced Upload Functionality & Health Impact Categorization

**Date:** 2025-05-07 16:30:00  
**Category:** UI/UX

#### Headline
Enhanced upload functionality and visual design with health impact categorization.

#### Rationale
- Users need to upload documents directly within the same interface.
- Color-coding values by health impact improves user understanding.
- Information boxes provide context without cluttering the interface.
- Categorizing blood markers by health impact area creates logical grouping.
- Multi-date extraction from documents enhances the utility of OCR.

#### Implementation Details
- Integrated document upload functionality directly into the main blood test form using a tab interface.
- Created a comprehensive OCR information box explaining supported document types.
- Implemented color-coded categories for different health impact areas (cardiovascular, metabolic, etc.).
- Added a legend explaining the health categories and their significance.
- Enhanced the test date display with an information card explaining its importance.
- Created a dialog system to display and select between multiple extracted test dates.
- Added gradient buttons and improved overall color scheme for visual appeal.
- Implemented category-based organization of blood markers with appropriate colors.
- Enhanced hover cards with more detailed marker information and implications.

---

### Decision 006: Dependency – Icon Import Fixes (lucide-react)

**Date:** 2025-05-07 18:15:00  
**Category:** Dependency

#### Headline
Fix icon imports in BloodTestContainer component.

#### Rationale
- Build errors occurred due to importing non-existent icons from lucide-react.
- Icons like 'FilePdf' and references to 'CalendarIcon' were causing build failures.

#### Implementation Details
- Replaced 'FilePdf' with the standard 'File' icon from lucide-react.
- Fixed all references to 'CalendarIcon' to use the imported 'Calendar' component.
- Updated all icon usages to ensure compatibility with the lucide-react package.
- Maintained the same visual design and functionality while resolving build errors.

---

### Decision 007: Internationalization – Locale Files & French Support

**Date:** 2025-05-07 20:30:00  
**Category:** Internationalization

#### Headline
Implement locale files for multi-language support and add French language.

#### Rationale
- Using separate locale files improves maintainability of translations.
- Adding French expands the application's accessibility to French-speaking users.
- Structured locale system allows for easier addition of more languages in the future.
- Dropdown menu for language selection provides better UX than toggle button.

#### Implementation Details
- Created a locales directory with separate files for each language (en.ts, de.ts, fr.ts).
- Updated the LanguageContext to use these locale files.
- Added types for supported languages and translation keys.
- Implemented a dropdown menu for language selection with language names.
- Updated components to use the new translation system.
- Added browser language detection with fallback to English.
- Maintained local storage persistence for language preference.

---

### Decision 008: Accessibility – Button Accessibility & Event Handling

**Date:** 2025-05-07 22:15:00  
**Category:** Accessibility

#### Headline
Improve button accessibility and event propagation handling.

#### Rationale
- Buttons within forms were triggering form submission when clicked.
- Information buttons should display information without affecting form state.
- Improved accessibility is needed for screen readers and keyboard navigation.
- Event bubbling was causing unintended form submissions.

#### Implementation Details
- Added explicit `type="button"` attribute to all buttons in forms that should not submit.
- Created dedicated event handlers that use both `e.preventDefault()` and `e.stopPropagation()`.
- Added descriptive `aria-label` attributes for screen readers.
- Improved focus states and keyboard navigation for all interactive elements.
- Separated button click handling from hover card functionality.
- Modified TestDateDisplay and GenderSwitch components to properly handle events.
- Ensured all clickable elements have proper accessibility attributes.
- Added descriptive comments to clarify the purpose of event handlers.

---

### Decision 009: Internationalization – Comprehensive Translation Keys

**Date:** 2025-05-07 23:45:00  
**Category:** Internationalization

#### Headline
Enhance internationalization with comprehensive translation keys.

#### Rationale
- Application needed consistent localization across all user-facing text.
- Hardcoded text made it difficult to maintain translations.
- Some components were using direct text instead of translation keys.
- Accessibility elements needed localization for screen readers.

#### Implementation Details
- Added comprehensive translation keys for all user-facing text in all supported languages.
- Updated components to use the translation system with the `t()` function.
- Applied translations to accessibility attributes like `aria-label`.
- Structured translations into logical groupings (disclaimer, results, timeline, etc.).
- Included translations for all status messages, tooltips, and button texts.
- Added translations for the welcome dialog content including health strategies and practices.
- Ensured consistent terminology across all languages.
- Maintained existing functionality while enhancing the internationalization.

---

### Decision 010: Internationalization & UI – Spanish Support, Country Flags, and Layout Changes

**Date:** 2025-05-08 09:30:00  
**Category:** Internationalization, UI/UX

#### Headline
Added Spanish language support, country flags in language selector, and adjusted layout.

#### Rationale
- Spanish language support expands accessibility to Spanish-speaking users.
- Country flags provide visual identification of languages, improving usability.
- Repositioning the logo and headline creates a more balanced and professional layout.
- These changes enhance the international appeal and usability of the application.

#### Implementation Details
- Created a comprehensive Spanish (es.ts) locale file with translations for all UI text.
- Updated the locales/index.ts file to include Spanish as a supported language.
- Added country flag emojis (🇬🇧, 🇩🇪, 🇫🇷, 🇪🇸) to the language selector dropdown.
- Enhanced the LanguageSwitcher component to display the current language flag in the button.
- Redesigned the header section of the Index page to place the logo on the left and headline on the right.
- Updated the language selection dropdown to show flags alongside language names.
- Documented changes in the decision log to maintain a comprehensive record of design decisions.
- Ensured all UI elements remain responsive after layout changes.

---
