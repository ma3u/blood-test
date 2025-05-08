
# System Patterns

This file documents recurring patterns and standards used in the project.
It is optional, but recommended to be updated as the project evolves.
"2025-04-28 10:00:00" - Log of updates made.

## Coding Patterns

1. Type Safety:
   - Use proper TypeScript interfaces for all data structures
   - Handle type conversions explicitly where needed
   - Use type assertions only when necessary and with caution

2. Component Structure:
   - Create small, focused components
   - Use shadcn/ui for UI components
   - Implement responsive design with Tailwind classes
   - Recommendations UI: Modular panel with tabs for nutrition, supplements, exercise, and stress; badge counters; evidence and contraindication indicators; mobile-friendly design

3. Data Handling:
   - Support both string and number values for measurements
   - Convert to appropriate types when performing calculations
   - Validate user inputs to prevent invalid data
   - Recommendations system: Utility functions for each recommendation type, custom hook (useRecommendations) integrates profile and results

4. Internationalization:
   - All UI and recommendation text uses translation keys
   - Multi-language support for all major features
   - Error and feedback messages are localized

5. Accessibility:
   - WCAG 2.1 compliance across UI
   - ARIA roles and attributes for interactive components
   - Keyboard navigation and screen reader support

## Architectural Patterns

1. Page Organization:
   - Separate pages for different main functions
   - Components folder for reusable UI elements
   - Lib folder for utilities and type definitions
   - Recommendation utilities and hooks separated from UI logic

2. State Management:
   - Local state for simple components
   - Context API for shared state across components
   - Toast notifications for user feedback
   - Recommendation system state managed via hooks and context

3. Error Handling & Feedback:
   - Toast notifications for errors and actions
   - Error boundaries for critical UI sections
   - Consistent error messages and fallback UI

## Testing Patterns

**Framework:**
- Use [Vitest](https://vitest.dev/) for all unit and integration tests (fast, Vite-native, TS support).
- Use [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for component and accessibility testing (user-centric best practices).

**Patterns & Best Practices:**
1. **Component & UI Testing:**
   - Test all components in isolation with realistic props and user interactions.
   - Simulate form submissions, input changes, and button clicks.
   - Verify visual output and state changes for all UI states (loading, error, success).
   - Validate accessibility: ARIA roles, keyboard navigation, and screen reader text.
   - Ensure i18n (translations) are rendered as expected.

2. **Integration Testing:**
   - Test flows that span multiple components (e.g., recommendations panel + user profile).
   - Mock API/data fetching with MSW or Vitest mocks; avoid real network requests.
   - Assert that the recommendations system produces correct advice for varied inputs.

3. **Test Organization:**
   - Place tests alongside source files as `*.test.ts(x)` in the same folder.
   - Use descriptive test names and group related cases with `describe()` blocks.
   - Keep test files under 200 lines; refactor shared helpers to `testUtils` as needed.

4. **Coverage & CI:**
   - Target 80%+ code coverage for all new features and critical logic.
   - Run all tests automatically on every push/PR via GitHub Actions (see `.github/workflows/test.yml`).
   - Block merges on failing tests; review coverage reports in CI.

5. **Accessibility & Feedback:**
   - Always check for a11y violations using Testing Library queries (`getByRole`, `getByLabelText`, etc.).
   - Test toast notifications, error boundaries, and fallback UI for user feedback.

**References:**
- See Decision 023 in `decisionLog.md` for rationale and action items.
- Follow [Testing Library best practices](https://testing-library.com/docs/guide-which-query/) for queries and assertions.
