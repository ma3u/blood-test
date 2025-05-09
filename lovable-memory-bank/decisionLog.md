
# Decision Log

## 📝 How to Update This Decision Record

1. 🆕 **Add new decisions after the TOC** 
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
    - [📖 Decision 026: Simplified Longevity Content to One Static Page Per Language](#-decision-026-simplified-longevity-content-to-one-static-page-per-language)
    - [📖 Decision 025: Comprehensive Mind-Body Section for Longevity Page](#-decision-025-comprehensive-mind-body-section-for-longevity-page)
    - [📖 Decision 024: Comprehensive Longevity Page – Evidence-Based Healthspan Guide](#-decision-024-comprehensive-longevity-page--evidence-based-healthspan-guide)
    - [🧪 Decision 023: Automated Testing Strategy for Vite/React/TS](#-decision-023-automated-testing-strategy-for-vitereactts)
    - [🌿 Decision 022: Personalized Health Recommendations System](#-decision-022-personalized-health-recommendations-system)
    - [👤 Decision 021: User Profile Management – Personal Health Information](#-decision-021-user-profile-management--personal-health-information)
    - [🔢 Decision 020: Input Validation – Support for International Decimal Formats](#-decision-020-input-validation--support-for-international-decimal-formats)
    - [🟦 Decision 019: Auth – Optional Login \& Health Record Storage](#-decision-019-auth--optional-login--health-record-storage)
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
    - [🛠️ Decision 001: Type System – Support `string | number` for BloodTestResult.value](#️-decision-001-type-system--support-string--number-for-bloodtestresultvalue)

---


### 📋 Outstanding Tasks

- Create automated tests for core application features
- Improve application responsiveness on various devices
- Implement personalized health recommendations based on blood test results
- Enhance data visualization for blood test trends
- Add more comprehensive educational content
- Apply the new accessibility framework to all existing components
- Add automated accessibility testing to the development workflow
- Create accessibility documentation for the project
- Add automated SEO validation to CI/CD pipeline

### 📖 Decision 026: Simplified Longevity Content to One Static Page Per Language
<div style="background-color:#e3f2fd; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Content Architecture<br><b>Date:</b> 2025-05-09</div>

- **Rationale:**
  - The longevity content was overly complex due to locale-based dynamic loading and translation logic.
  - Content for longevity is static and best maintained as one dedicated page per language, improving maintainability and clarity.
  - Reduces code duplication, avoids unnecessary indirection, and makes it easier to add or update languages.
- **Implementation:**
  - Removed all locale and translation logic from `Longevity.tsx` and related components.
  - Created new static pages: `LongevityEn.tsx` (English) and `LongevityDe.tsx` (German placeholder), each containing the full content for that language.
  - Updated `Longevity.tsx` to point users to the new static language-specific pages.
  - Followed the content structure of `public/longevity.md` for the English version.
  - Updated this decision log and the Table of Contents to reflect the change.

### 📖 Decision 025: Comprehensive Mind-Body Section for Longevity Page
<div style="background-color:#fffde7; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Feature / Documentation<br><b>Date:</b> 2025-05-09</div>

- **Rationale:**
  - Implement a detailed mind-body practices section based on the source content in longevity.md
  - Provide scientific evidence-based information on stress management techniques and their impact on longevity
  - Make the information accessible and structured for optimal user comprehension
  - Ensure the content is properly internationalized for all supported languages

- **Implementation:**
  - Created a dedicated `MindBodySection.tsx` component with detailed information on:
    - Stress reduction practices (meditation, breathwork, yoga, nature exposure)
    - Sleep optimization techniques (circadian alignment, environment optimization, sleep tracking)
    - Hormetic stressors focusing on cold exposure and its benefits
    - Social connection and purpose as key longevity factors
  - Updated the Longevity page to include the new MindBodySection component
  - Added navigation links to access the mind-body section directly
  - Implemented comprehensive translation keys in the English locale file
  - Structured the content with clear headings, subheadings, and bullet points for readability
  - Included scientific backing and practical implementation guidance for each practice
  - Connected the mind-body content with the overall theme of evidence-based longevity

- **Impact:**
  - Provides users with actionable mind-body practices that complement the physical health aspects
  - Enhances the educational value of the Longevity page with scientifically-supported information
  - Creates a more holistic view of health by integrating mental, social, and physical aspects of longevity
  - Maintains consistent, high-quality formatting and organization across all longevity content

---

### 📖 Decision 024: Comprehensive Longevity Page – Evidence-Based Healthspan Guide
<div style="background-color:#fffde7; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Documentation / Feature<br><b>Date:</b> 2025-05-09<br><b>Status:</b> <span style="color:green;">Complete</span></div>

- **Rationale:**
  - Empower users with a single, accessible resource synthesizing personal experience, clinical best practices, and scientific evidence for maximizing both lifespan and healthspan.
  - Bridge the gap between technical diagnostics and actionable lifestyle change using a relatable narrative and quantified, referenced data.
  - Provide a foundation for future features (personalized recommendations, diagnostics, and user education).

- **Implementation:**
  - The requirements have been fully implemented in `public/longevity.md`, which now serves as the canonical longevity and healthspan guide for the project. Key aspects:
    - **Personal Journey:** The document opens with a personal health narrative, motivation for change, and lessons learned from family health history.
    - **Proactive Diagnostics:** Detailed sections on laboratory markers, microbiome analysis, and digital health tracking, with actionable interpretation and integration.
    - **Quantified Longevity Factors:** Evidence-based tables and summaries quantify the impact of positive and negative lifestyle factors on healthspan and lifespan, with direct references.
    - **Actionable Routines:** Practical routines for nutrition, movement, mind-body practices, gut health, and social connection are provided, with clear implementation tips.
    - **Literature Review:** Over 60 scientific references, including books and peer-reviewed articles, are included with accessible links for further reading.
    - **Structure:** The page is organized for user focus—summary, diagnostics, routines, references, and key takeaways.
    - **Accessible Source Links:** All references are directly linked and numbered for easy navigation and verification.
  - The markdown file is linted and structured for clarity and accessibility, supporting both user education and future feature development.

- **Impact:**
  - Establishes a new documentation standard for healthspan topics in the project
  - Serves as a blueprint for future educational and personalized features
  - Demonstrates the value of integrating personal narrative with scientific rigor

---

**Completion Note:**
Decision 024 is now complete. The current `public/longevity.md` is the canonical, evidence-based guide for longevity and healthspan, fulfilling all requirements for holistic content, quantified evidence, actionable routines, and accessible references. Future improvements should iterate on this foundation.
  - Empowers users to take control of their health, regardless of genetic background


---


### 🧪 Decision 023: Automated Testing Strategy for Vite/React/TS
<div style="background-color:#e3f2fd; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Tooling<br><b>Date:</b> 2025-05-08</div>

- **Rationale:**
  - Ensure code quality and prevent regressions as the project grows.
  - Align testing tools with the Vite + React + TypeScript stack for fast, reliable feedback and modern syntax support.
  - Enable automated CI to catch errors before merging changes.

- **Decision:**
  - Use **Vitest** as the primary test runner (native Vite support, fast, TypeScript-friendly).
  - Use **@testing-library/react** for React component/unit/integration testing (best practice for user-centric UI tests).
  - Add a **GitHub Actions** workflow to run all tests on every push and pull request.

- **Action Items:**
  1. Add `vitest`, `@testing-library/react`, and related dependencies to `devDependencies`.
  2. Configure `vitest.config.ts` for the project (setup files, coverage, etc.).
  3. Write initial unit and integration tests for core components and the recommendations system (see decisionLog and progress.md for coverage targets).
  4. Create `.github/workflows/test.yml` to run tests automatically on push/PR.
  5. Ensure test results are visible in PRs and failing tests block merges.

---


### 🌿 Decision 022: Personalized Health Recommendations System
<div style="background-color:#e8f5e9; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Feature<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Provide actionable, personalized health recommendations based on blood test results to help users understand what lifestyle changes might improve their health markers.

- **Implementation:**
  - Created a comprehensive recommendations utility library with specialized functions for different health domains:
    - Nutrition recommendations based on specific blood marker abnormalities
    - Supplement suggestions tied to specific deficiencies and health needs
    - Exercise recommendations considering both blood markers and user profile data (age, BMI)
    - Stress reduction techniques focused on mindfulness and breathing exercises
  - Developed a custom hook `useRecommendations` that integrates with the user profile system to generate personalized recommendations
  - Implemented a tabbed recommendations panel UI with clear categorization of different recommendation types
  - Added visual priority indicators (high, medium, low) to help users identify the most important recommendations
  - Included scientific evidence level indicators for each recommendation
  - Listed contraindications where applicable for safety considerations
  - Created responsive tabs with icon-only display on mobile devices
  - Added badge counters to show number of recommendations in each category at a glance
  - Integrated with the existing internationalization system for multi-language support
  - Connected recommendations to specific markers for better context
  - Applied consistent styling matching the overall application design

### 👤 Decision 021: User Profile Management – Personal Health Information
<div style="background-color:#e8f5e9; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Feature<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Collecting personal health information enables more accurate and personalized blood test analysis and recommendations. The user profile system enhances the application's value by providing context-aware health insights based on individual characteristics.
- **Implementation:**
  - Created a `UserProfileContext` to store and manage user profile data throughout the application
  - Developed a comprehensive user profile form with the following capabilities:
    - Basic information input (age, height, weight) with automatic BMI calculation
    - Gender selection that synchronizes with blood test analysis
    - Health condition management with severity levels and diagnosis years
    - Client-side validation for all inputs with appropriate error messages
    - Local storage persistence to maintain user data between sessions
  - Implemented a dedicated profile page with a clean, accessible interface
  - Integrated the profile system with the existing gender selection functionality
  - Added proper navigation in the header for easy access to the profile page
  - Enhanced the language system with comprehensive translations for all profile-related elements
  - Applied consistent validation patterns with user-friendly error messaging
  - Ensured responsive design that works well on both mobile and desktop devices

### 🔢 Decision 020: Input Validation – Support for International Decimal Formats
<div style="background-color:#fff8e1; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Input Validation<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Enhance user experience by accommodating international number format conventions, specifically allowing both comma (,) and dot (.) as decimal separators. This improves data entry for users from countries where commas are the standard decimal separator.
- **Implementation:**  
  - Updated `BloodValueInput` component to accept and properly normalize decimal values with both comma and dot separators.
  - Added validation to ensure only valid numerical inputs are accepted.
  - Implemented error handling with visual indicators when invalid input is detected.
  - Normalized comma-separated values to dot-separated format for internal processing.
  - Added accessibility attributes (`aria-invalid`) for screen reader support.
  - Enhanced visual feedback with red border and error message for invalid inputs.
  - Maintained original input display while converting to standardized format for processing.
  - Ensured empty inputs are handled correctly to allow clearing of values.

### 🟦 Decision 019: Auth – Optional Login & Health Record Storage
<div style="background-color:#e3f2fd; padding:8px; border-radius:6px; margin-bottom:6px;"><b>Category:</b> Auth<br><b>Date:</b> 2025-05-08</div>

- **Rationale:** Lower the barrier for user adoption by making login optional. Allow users to use the tool without authentication, but enable them to store and track their diagnosis results and recommendations in Supabase if they choose to log in. Storing the original test date (not just entry date) is required for meaningful health development tracking. After getting the personal recommandation, ask the user to register will various OAuth 2.1 providers. 
- **Implementation:**  
  - Users can use the health tool without logging in.  
  - Implement a login modal with OAuth 2.1 providers (Google, GitHub, etc.) with the provided functions of Supabase
  - Logging in is only required to save results and recommendations in Supabase.  
  - Each stored record must include the original date of the test, enabling longitudinal health comparisons.

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
