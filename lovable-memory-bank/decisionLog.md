
# Decision Log

This file records architectural and implementation decisions using a list format.

"2025-04-28 10:00:00" - Log of updates made.
"2025-05-07 13:30:00" - Added compact design principles for blood test input form.

## Decision

Allow BloodTestResult.value to be of type `string | number` instead of just `number`

## Rationale

1. Form inputs naturally return string values
2. Converting between types in every component creates unnecessary complexity
3. Some operations require numeric values (charts, calculations)
4. Supporting both types provides flexibility while maintaining functionality

## Implementation Details

1. Updated BloodTestResult interface in bloodTestUtils.ts to use union type `string | number`
2. Modified analyzeBloodTest function to handle string values by parsing them to float
3. Updated chart components to convert string values to numbers before calculations
4. Added type assertions in components where TypeScript couldn't infer the correct types

## Decision

Implement a compact, responsive design for blood test input form

## Rationale

1. More compact design improves user experience and fits more information on screen
2. Responsive layout adjusts to different screen sizes
3. Contextual information (hover details) reduces visual clutter while providing necessary details
4. Gender-specific reference ranges improve accuracy of test analysis

## Implementation Details

1. Moved reference values link into the gender selection box for a more compact layout
2. Show reference values in input field placeholders according to selected gender
3. Added hover information tooltips for each input field showing detailed marker information
4. Implemented responsive grid layout with multiple columns based on viewport width
5. Added gender-specific reference ranges that update when switching between male/female
6. Organized blood markers into categories for better visual grouping
7. Used HoverCard component to display detailed information about each marker
