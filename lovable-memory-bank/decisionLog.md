
# Decision Log

---

## 📝 How to Update This Decision Record

1. 🆕 **Add new decisions at the top** of the file.
2. 🔄 **Sort all decisions** in the content and the TOC by date (latest first)—the newest decision is always at the top.
3. 🗂️ **Update the Table of Contents (TOC)** so it matches the order and headlines of decisions.
4. ✅ **Number each decision sequentially** (e.g., Decision 017, 016, ... 001).
5. ⚡ **Use the template below** for each decision:
6. Short Clear Headline
7. Add Category and Date:
8. Add Rationale and Implementation
9. 🛠️ Use markdown best practices: add blank lines around headings and lists for readability.
10. 🌈 Use category color boxes and emojis for visual orientation.
11. Allways update the TOC
---
# Table Of Contents
- [Decision Log](#decision-log)
  - [📝 How to Update This Decision Record](#-how-to-update-this-decision-record)
- [Table Of Contents](#table-of-contents)
    - [📋 Outstanding Tasks](#-outstanding-tasks)
    - [🌐 Decision 018: Added Asian Language Support (Russian, Chinese, Japanese)](#-decision-018-added-asian-language-support-russian-chinese-japanese)
    - [🔍 Decision 017: Optimize SEO with Open Graph Best Practices](#-decision-017-optimize-seo-with-open-graph-best-practices)
    - [♿ Decision 016: Adopt WCAG 2.1 as Accessibility Standard](#-decision-016-adopt-wcag-21-as-accessibility-standard)
    - [🐞 Decision 015: Fixed Empty Page Issue](#-decision-015-fixed-empty-page-issue)
    - [🟦 Decision 014: Updated Main Page Layout](#-decision-014-updated-main-page-layout)
    - [🌐 Decision 013: Added Spanish Language Support](#-decision-013-added-spanish-language-support)
    - [🐞 Decision 012: Fixed Type Error in MarkerExplanation Component](#-decision-012-fixed-type-error-in-markerexplanation-component)
    - [🌐 Decision 011: Updated Language Handling in Main Page](#-decision-011-updated-language-handling-in-main-page)
    - [♿ Decision 010: Improved Language Switcher Accessibility](#-decision-010-improved-language-switcher-accessibility)
    - [🌐 Decision 009: Internationalization – Comprehensive Translation Keys](#-decision-009-internationalization--comprehensive-translation-keys)
    - [♿ Decision 008: Accessibility – Button Accessibility \& Event Handling](#-decision-008-accessibility--button-accessibility--event-handling)
    - [🌐 Decision 007: Internationalization – Locale Files \& French Support](#-decision-007-internationalization--locale-files--french-support)
    - [📦 Decision 006: Dependency – Icon Import Fixes (lucide-react)](#-decision-006-dependency--icon-import-fixes-lucide-react)
    - [🟦 Decision 005: UI/UX – Enhanced Upload Functionality \& Health Impact Categorization](#-decision-005-uiux--enhanced-upload-functionality--health-impact-categorization)
    - [🟦 Decision 004: UI/UX – Marker Info Space Optimization](#-decision-004-uiux--marker-info-space-optimization)
    - [🟦 Decision 003: UI/UX – Gender Switch Functionality \& UI Organization](#-decision-003-uiux--gender-switch-functionality--ui-organization)
    - [🟦 Decision 002: UI/UX – Compact, Responsive Blood Test Input Form](#-decision-002-uiux--compact-responsive-blood-test-input-form)
    - [Decision 001: Type System – Support `string | number` for BloodTestResult.value (Type System, 2025-04-28)](#decision-001-type-system--support-string--number-for-bloodtestresultvalue-type-system-2025-04-28)

---

### 📋 Outstanding Tasks

- Consider refactoring BloodTestContainer.tsx as it's getting too long
- Organize translations into more logical groupings by feature
- Ensure all components use consistent language translation patterns
- Apply the new accessibility framework to all existing components
- Add automated accessibility testing to the development workflow
- Create accessibility documentation for the project
- Add automated SEO validation to CI/CD pipeline

### 🌐 Decision 018: Added Asian Language Support (Russian, Chinese, Japanese)
<div style="background-color:#e8f5e9; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Internationalization<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Expand application accessibility to users who speak Russian, Chinese (Mandarin), and Japanese, which are some of the most widely spoken languages globally.
- **Implementation Activities:**
  - Added locale files for Russian (ru.ts), Chinese (zh.ts), and Japanese (ja.ts) with comprehensive translations for all application text
  - Updated language switcher component to include new language options with appropriate flag emojis
  - Added full language names to improve clarity and accessibility
  - Ensured dropdown menu displays correctly with proper width for longer language names
  - Updated language context to include new languages in available languages array
  - Added language-specific headlines and descriptions for the main page
  - Tested language switching functionality to verify correct rendering of all supported languages
  - Ensured proper RTL (right-to-left) support where needed
  - Verified compatibility with screen readers and accessibility tools

### 🔍 Decision 017: Optimize SEO with Open Graph Best Practices
<div style="background-color:#ffebee; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> SEO<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Open Graph meta tags are essential for improving the web app's visibility, appearance, and engagement on social media platforms and search engines.
- **Implementation Activities:**
  - Created a dedicated SEOHead component using react-helmet for centralized management of meta tags
  - Added comprehensive Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, etc.)
  - Implemented Twitter Card meta tags for enhanced sharing on Twitter
  - Made meta tags dynamic based on current language selection
  - Added canonical URL tags to prevent duplicate content issues
  - Ensured proper language attributes for multilingual SEO optimization
  - Added viewport and theme-color meta tags for mobile optimization
  - Made the component reusable across different pages with customizable properties
  - Implemented proper image URL handling for Open Graph images
  - Added language-specific titles and descriptions for better SEO in each language
  - Verified that all meta tags comply with Open Graph protocol specifications
  - Ensured proper integration with the application's internationalization system

### ♿ Decision 016: Adopt WCAG 2.1 as Accessibility Standard
<div style="background-color:#f3e5f5; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Accessibility<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Systematically adopt WCAG 2.1 standards across the application, ensuring inclusivity, legal compliance, and providing developers with tools to maintain accessibility.
- **Implementation Steps:**
  - Review all UI components and flows against WCAG 2.1 AA criteria (perceivable, operable, understandable, robust).
  - Add semantic HTML and ARIA attributes to all interactive elements.
  - Ensure sufficient color contrast and scalable text; implement utility functions for checking color contrast ratios (4.5:1 for normal text, 3:1 for large text).
  - Provide keyboard navigation and visible focus indicators for all controls; add keyboard navigation helpers to support keyboard-only users.
  - Create standardized ARIA attribute generators for common components (buttons, dialogs, tabs, list items).
  - Establish a structure for consistent application of accessibility features throughout the app.
  - Test with screen readers and mobile accessibility tools.
  - Document accessibility features and known limitations in project documentation; create a dedicated accessibility configuration file with WCAG 2.1 documentation.
  - Add automated accessibility checks to CI/CD pipeline (e.g., axe-core, Lighthouse).
  - Provide developers with tools to verify accessibility compliance during development.
  - Set AA as the minimum conformance level with clear guidelines for all four WCAG principles.

### 🐞 Decision 015: Fixed Empty Page Issue
<div style="background-color:#fff3e0; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Bugfix<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Prevent blank or non-responsive main page.
- **Implementation:** Updated Index.tsx component to properly display content; fixed responsive layout issues; ensured correct loading of components and language resources.

### 🟦 Decision 014: Updated Main Page Layout
<div style="background-color:#e3f2fd; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> UI/UX<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Improve visual hierarchy and clarity.
- **Implementation:** Repositioned logo to the left of the headline; changed main headline to "Bluttest-Analyse" in German; added German subtitle: "Geben Sie Ihre Blutwerte ein oder laden Sie Testergebnisse für eine sofortige Analyse und Interpretation hoch"; added "Mehr erfahren" link for more information; improved responsive layout for header section.

### 🌐 Decision 013: Added Spanish Language Support
<div style="background-color:#e8f5e9; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Internationalization<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Expand accessibility for Spanish-speaking users.
- **Implementation:** Added Spanish translations for all text in the application; updated language selector to include Spanish option; added country flags to language selector dropdown; resolved TypeScript errors in MarkerExplanation component by properly typing translation keys.

### 🐞 Decision 012: Fixed Type Error in MarkerExplanation Component
<div style="background-color:#fff3e0; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Bugfix<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Resolve TypeScript errors and improve flexibility.
- **Implementation:** Updated MarkerExplanation component to accept both direct marker props and BloodTestResult props; added support for displaying the component as both a hover card and a modal dialog; improved component flexibility by making gender and other props optional; resolved TypeScript errors in ResultsSummary component.

### 🌐 Decision 011: Updated Language Handling in Main Page
<div style="background-color:#e8f5e9; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Internationalization<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Ensure all text and visuals match selected language.
- **Implementation:** Added dynamic headline and subtitle text based on selected language; added country flag emojis to language selector; improved logo alignment with text height; updated LanguageSwitcher component with flags for better visual identification; made sure all translated text appears correctly across all supported languages.

### ♿ Decision 010: Improved Language Switcher Accessibility
<div style="background-color:#f3e5f5; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Accessibility<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Meet WCAG 2.1 AA standards and improve usability for all users.
- **Implementation:** Enhanced text contrast ratio in language selector to meet WCAG 2.1 AA standards (minimum 4.5:1 for normal text); added proper aria attributes for screen readers; improved focus states with visible outlines; added full language names for better clarity; ensured dropdown menu has sufficient background contrast and z-index; fixed dropdown menu positioning; implemented consistent hover and focus states; followed WCAG 2.1 accessibility guidelines.

### 🌐 Decision 009: Internationalization – Comprehensive Translation Keys
<div style="background-color:#e8f5e9; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Internationalization<br><b>Date:</b> 2025-05-07</div>

- **Rationale:** Ensure consistent localization and accessibility.
- **Implementation:** Added translation keys, updated components, and organized translations.

### ♿ Decision 008: Accessibility – Button Accessibility & Event Handling
<div style="background-color:#f3e5f5; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Accessibility<br><b>Date:</b> 2025-05-07</div>

- **Rationale:** Prevent unintended form submissions and improve accessibility.
- **Implementation:** Added `type="button"`, improved ARIA, and handled events properly.

### 🌐 Decision 007: Internationalization – Locale Files & French Support
<div style="background-color:#e8f5e9; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Internationalization<br><b>Date:</b> 2025-05-07</div>

- **Rationale:** Maintainable translations and French accessibility.
- **Implementation:** Added locale files, dropdown, browser detection, and persistence.

### 📦 Decision 006: Dependency – Icon Import Fixes (lucide-react)
<div style="background-color:#ede7f6; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Dependency<br><b>Date:</b> 2025-05-07</div>

- **Rationale:** Build errors from non-existent icon imports.
- **Implementation:** Replaced problematic icons and updated all usages for compatibility.

### 🟦 Decision 005: UI/UX – Enhanced Upload Functionality & Health Impact Categorization
<div style="background-color:#e3f2fd; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> UI/UX<br><b>Date:</b> 2025-05-07</div>

- **Rationale:** Enable uploads in main form and clarify marker categories.
- **Implementation:** Added upload tab, category color-coding, OCR info, and multi-date extraction.

### 🟦 Decision 004: UI/UX – Marker Info Space Optimization
<div style="background-color:#e3f2fd; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> UI/UX<br><b>Date:</b> 2025-05-07</div>

- **Rationale:** Marker info took too much vertical space; needed compact display.
- **Implementation:** Moved details to hover cards and reduced redundant info.

### 🟦 Decision 003: UI/UX – Gender Switch Functionality & UI Organization
<div style="background-color:#e3f2fd; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> UI/UX<br><b>Date:</b> 2025-05-07</div>

- **Rationale:** Ensure accurate reference ranges and reduce clutter.
- **Implementation:** Synced gender state, moved info to hover cards, and updated reference range display.

### 🟦 Decision 002: UI/UX – Compact, Responsive Blood Test Input Form
<div style="background-color:#e3f2fd; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> UI/UX<br><b>Date:</b> 2025-05-07</div>

- **Rationale:** Improve usability and fit more data on screen.
- **Implementation:** Used grid layout, hover tooltips, and gender-aware placeholders.

### 🛠️ Decision 001: Type System – Support `string | number` for BloodTestResult.value
<div style="background-color:#f5f5f5; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Type System<br><b>Date:</b> 2025-04-28</div>

- **Rationale:**
  - Form inputs naturally return string values.
  - Converting between types in every component creates unnecessary complexity.
  - Some operations require numeric values (charts, calculations).
  - Supporting both types provides flexibility while maintaining functionality.

- **Implementation:**
  - Updated `BloodTestResult` interface in `bloodTestUtils.ts` to use union type `string | number`.
  - Modified `analyzeBloodTest` function to handle string values by parsing them to float.
  - Updated chart components to convert string values to numbers before calculations.
  - Added type assertions in components where TypeScript couldn't infer the correct types.
