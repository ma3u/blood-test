# Decision Log

## Instructions for AI Tools
- Every decision must be numbered sequentially (e.g., Decision 001, Decision 002, ...).
- Each decision must include:
  - Date (YYYY-MM-DD)
  - Category (e.g., Accessibility, UI/UX, Internationalization, Bugfix, etc.)
  - Short, clear headline
  - Concise bullet points for rationale and implementation details
- Add new decisions at the top of the file.
- Update the Table of Contents (TOC) with the number, headline, category, and date for each decision. TOC links must match the section anchors.
- Use markdown best practices and keep the log easy to scan.

---

## Table of Contents

1. [Decision 001: Type System – Support `string | number` for BloodTestResult.value (Type System, 2025-04-28)](#decision-001-type-system--support-string--number-for-bloodtestresultvalue-type-system-2025-04-28)
2. [Decision 002: UI/UX – Compact, Responsive Blood Test Input Form (UI/UX, 2025-05-07)](#decision-002-uiux--compact-responsive-blood-test-input-form-uiux-2025-05-07)
3. [Decision 003: UI/UX – Gender Switch Functionality & UI Organization (UI/UX, 2025-05-07)](#decision-003-uiux--gender-switch-functionality--ui-organization-uiux-2025-05-07)
4. [Decision 004: UI/UX – Marker Info Space Optimization (UI/UX, 2025-05-07)](#decision-004-uiux--marker-info-space-optimization-uiux-2025-05-07)
5. [Decision 005: UI/UX – Enhanced Upload Functionality & Health Impact Categorization (UI/UX, 2025-05-07)](#decision-005-uiux--enhanced-upload-functionality--health-impact-categorization-uiux-2025-05-07)
6. [Decision 006: Dependency – Icon Import Fixes (lucide-react) (Dependency, 2025-05-07)](#decision-006-dependency--icon-import-fixes-lucide-react-dependency-2025-05-07)
7. [Decision 007: Internationalization – Locale Files & French Support (Internationalization, 2025-05-07)](#decision-007-internationalization--locale-files--french-support-internationalization-2025-05-07)
8. [Decision 008: Accessibility – Button Accessibility & Event Handling (Accessibility, 2025-05-07)](#decision-008-accessibility--button-accessibility--event-handling-accessibility-2025-05-07)
9. [Decision 009: Internationalization – Comprehensive Translation Keys (Internationalization, 2025-05-07)](#decision-009-internationalization--comprehensive-translation-keys-internationalization-2025-05-07)
10. [Decision 010: Improved Language Switcher Accessibility (Accessibility, 2025-05-08)](#decision-010-improved-language-switcher-accessibility-accessibility-2025-05-08)
11. [Decision 011: Updated Language Handling in Main Page (Internationalization, 2025-05-08)](#decision-011-updated-language-handling-in-main-page-internationalization-2025-05-08)
12. [Decision 012: Fixed Type Error in MarkerExplanation Component (Bugfix, 2025-05-08)](#decision-012-fixed-type-error-in-markerexplanation-component-bugfix-2025-05-08)
13. [Decision 013: Added Spanish Language Support (Internationalization, 2025-05-08)](#decision-013-added-spanish-language-support-internationalization-2025-05-08)
14. [Decision 014: Updated Main Page Layout (UI/UX, 2025-05-08)](#decision-014-updated-main-page-layout-uiux-2025-05-08)
15. [Decision 015: Fixed Empty Page Issue (Bugfix, 2025-05-08)](#decision-015-fixed-empty-page-issue-bugfix-2025-05-08)
16. [Decision 016: Adopt WCAG 2.1 as Accessibility Standard (Accessibility, 2025-05-08)](#decision-016-adopt-wcag-21-as-accessibility-standard-accessibility-2025-05-08)
17. [Decision 017: Optimize SEO with Open Graph Best Practices (SEO, 2025-05-08)](#decision-017-optimize-seo-with-open-graph-best-practices-seo-2025-05-08)
18. [Outstanding Tasks](#outstanding-tasks)

---

### Decision 001: Type System – Support `string | number` for BloodTestResult.value (Type System, 2025-04-28)
- **Rationale:** Simplifies form handling and calculations.
- **Implementation:** Changed type to `string | number` and updated parsing logic.

### Decision 002: UI/UX – Compact, Responsive Blood Test Input Form (UI/UX, 2025-05-07)
- **Rationale:** Improve usability and fit more data on screen.
- **Implementation:** Used grid layout, hover tooltips, and gender-aware placeholders.

### Decision 003: UI/UX – Gender Switch Functionality & UI Organization (UI/UX, 2025-05-07)
- **Rationale:** Ensure accurate reference ranges and reduce clutter.
- **Implementation:** Synced gender state, moved info to hover cards, and updated reference range display.

### Decision 004: UI/UX – Marker Info Space Optimization (UI/UX, 2025-05-07)
- **Rationale:** Marker info took too much vertical space; needed compact display.
- **Implementation:** Moved details to hover cards and reduced redundant info.

### Decision 005: UI/UX – Enhanced Upload Functionality & Health Impact Categorization (UI/UX, 2025-05-07)
- **Rationale:** Enable uploads in main form and clarify marker categories.
- **Implementation:** Added upload tab, category color-coding, OCR info, and multi-date extraction.

### Decision 006: Dependency – Icon Import Fixes (lucide-react) (Dependency, 2025-05-07)
- **Rationale:** Build errors from non-existent icon imports.
- **Implementation:** Replaced problematic icons and updated all usages for compatibility.

### Decision 007: Internationalization – Locale Files & French Support (Internationalization, 2025-05-07)
- **Rationale:** Maintainable translations and French accessibility.
- **Implementation:** Added locale files, dropdown, browser detection, and persistence.

### Decision 008: Accessibility – Button Accessibility & Event Handling (Accessibility, 2025-05-07)
- **Rationale:** Prevent unintended form submissions and improve accessibility.
- **Implementation:** Added `type="button"`, improved ARIA, and handled events properly.

### Decision 009: Internationalization – Comprehensive Translation Keys (Internationalization, 2025-05-07)
- **Rationale:** Ensure consistent localization and accessibility.
- **Implementation:** Added translation keys, updated components, and organized translations.

### Decision 010: Improved Language Switcher Accessibility (Accessibility, 2025-05-08)
- **Rationale:** Meet WCAG 2.1 AA standards and improve usability for all users.
- **Implementation:** Enhanced text contrast ratio in language selector to meet WCAG 2.1 AA standards (minimum 4.5:1 for normal text); added proper aria attributes for screen readers; improved focus states with visible outlines; added full language names for better clarity; ensured dropdown menu has sufficient background contrast and z-index; fixed dropdown menu positioning; implemented consistent hover and focus states; followed WCAG 2.1 accessibility guidelines.

### Decision 011: Updated Language Handling in Main Page (Internationalization, 2025-05-08)
- **Rationale:** Ensure all text and visuals match selected language.
- **Implementation:** Added dynamic headline and subtitle text based on selected language; added country flag emojis to language selector; improved logo alignment with text height; updated LanguageSwitcher component with flags for better visual identification; made sure all translated text appears correctly across all supported languages.

### Decision 012: Fixed Type Error in MarkerExplanation Component (Bugfix, 2025-05-08)
- **Rationale:** Resolve TypeScript errors and improve flexibility.
- **Implementation:** Updated MarkerExplanation component to accept both direct marker props and BloodTestResult props; added support for displaying the component as both a hover card and a modal dialog; improved component flexibility by making gender and other props optional; resolved TypeScript errors in ResultsSummary component.

### Decision 013: Added Spanish Language Support (Internationalization, 2025-05-08)
- **Rationale:** Expand accessibility for Spanish-speaking users.
- **Implementation:** Added Spanish translations for all text in the application; updated language selector to include Spanish option; added country flags to language selector dropdown; resolved TypeScript errors in MarkerExplanation component by properly typing translation keys.

### Decision 014: Updated Main Page Layout (UI/UX, 2025-05-08)
- **Rationale:** Improve visual hierarchy and clarity.
- **Implementation:** Repositioned logo to the left of the headline; changed main headline to "Bluttest-Analyse" in German; added German subtitle: "Geben Sie Ihre Blutwerte ein oder laden Sie Testergebnisse für eine sofortige Analyse und Interpretation hoch"; added "Mehr erfahren" link for more information; improved responsive layout for header section.

### Decision 015: Fixed Empty Page Issue (Bugfix, 2025-05-08)
- **Rationale:** Prevent blank or non-responsive main page.
- **Implementation:** Updated Index.tsx component to properly display content; fixed responsive layout issues; ensured correct loading of components and language resources.

### Outstanding Tasks
- Consider refactoring BloodTestContainer.tsx as it's getting too long
- Organize translations into more logical groupings by feature
- Ensure all components use consistent language translation patterns

### Decision 016: Adopt WCAG 2.1 as Accessibility Standard (Accessibility, 2025-05-08)
- **Rationale:** WCAG 2.1 is the most widely recognized and adopted accessibility guideline for both web and mobile platforms, ensuring inclusivity for users with disabilities and compliance with legal requirements.
- **Implementation Steps:**
  - Review all UI components and flows against WCAG 2.1 AA criteria (perceivable, operable, understandable, robust).
  - Add semantic HTML and ARIA attributes to all interactive elements.
  - Ensure sufficient color contrast and scalable text.
  - Provide keyboard navigation and visible focus indicators for all controls.
  - Test with screen readers and mobile accessibility tools.
  - Document accessibility features and known limitations in project documentation.
  - Add automated accessibility checks to CI/CD pipeline (e.g., axe-core, Lighthouse).

### Decision 017: Optimize SEO with Open Graph Best Practices (SEO, 2025-05-08)
- **Rationale:** Open Graph meta tags are essential for improving the web app’s visibility, appearance, and engagement on social media platforms and search engines.
- **Implementation Activities:**
  - Add Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`, etc.) to all main pages in the HTML `<head>`.
  - Ensure each page has a unique and descriptive title and description.
  - Provide high-quality images with correct dimensions for `og:image`.
  - Add `twitter:card` and related Twitter meta tags for enhanced sharing on Twitter.
  - Use structured data (JSON-LD) for additional SEO benefits where appropriate.
  - Test Open Graph tags with Facebook Sharing Debugger and Twitter Card Validator.
  - Automate meta tag generation for dynamic pages if applicable.
  - Document Open Graph and SEO strategy in project documentation.
