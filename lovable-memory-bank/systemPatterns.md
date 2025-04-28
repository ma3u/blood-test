
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

3. Data Handling:
   - Support both string and number values for measurements
   - Convert to appropriate types when performing calculations
   - Validate user inputs to prevent invalid data

## Architectural Patterns

1. Page Organization:
   - Separate pages for different main functions
   - Components folder for reusable UI elements
   - Lib folder for utilities and type definitions

2. State Management:
   - Local state for simple components
   - Context API for shared state across components
   - Toast notifications for user feedback

## Testing Patterns

1. Component Testing:
   - Test form submission with various input types
   - Verify visualization components render correctly
   - Ensure recommendations match expected outcomes based on inputs
