
# Product Context

This file provides a high-level overview of the project and the expected product that will be created. Initially it is based upon projectBrief.md (if provided) and all other available project-related information in the working directory. This file is intended to be updated as the project evolves, and should be used to inform all other modes of the project's goals and context.

"2025-04-28 10:00:00" - Log of updates made will be appended as footnotes to the end of this file.

## Project Goal

Create a comprehensive blood test analytics web tool that allows users to:
1. Input and upload diagnostic results from blood tests (OCR scan)
2. Track and visualize trends over time
3. Receive personalized recommendations for nutrition, supplements, physical activity, and stress reduction techniques based on their blood test results and personal information

## User Journey (High Level)

1. User accesses the app and selects their gender to view reference values for common blood markers.
2. User enters or uploads blood test results (manual input, PDF, or image upload with OCR).
3. App validates input, supporting both dot and comma decimal formats, and provides accessible error feedback.
4. User can proceed anonymously or register/login (optional, via OAuth 2.1 providers) to store results securely.
5. If registered, user profile is created (age, gender, height, weight, health conditions) and confirmed via email.
6. Personalized recommendations for nutrition, supplements, activity, and stress reduction are generated based on results and profile.
7. User can view and compare results over time in a timeline, with recommendations updated as new data is added.
8. The app supports multiple languages and is accessible (WCAG 2.1 compliant) on all devices.

---

## Learn more

- **Decision Log:** See `lovable-memory-bank/decisionLog.md` for all architectural, UI, and business decisions.
- **Reference Values:** See `public/ReferenceValues.md` for medical reference ranges.
- **README:** Project overview, architecture, and folder structure.
- **Contribution:** Follow guidelines in the README and document major changes in the memory bank.
2. Timeline view of test results with trend visualization after login
3. Personalized recommendation system based on:
   - Blood test results
   - User profile (sex, age, height, weight)
   - Known health issues
4. Recommendation categories:
   - Nutrition guidance
   - Supplement suggestions
   - Physical activity recommendations (Running, HIIT, Strength training)
   - Stress reduction techniques (Yoga, breathing exercises)

## Overall Architecture

1. Frontend: React-based UI with Shadcn components and Tailwind CSS
2. Data visualization: Recharts for trend analysis and data presentation
3. User profile management system
4. Authentication via Supabase
5. Blood test data storage in Supabase as flexible JSON structure accordingly to ReferenceValues.md
6. Analytics engine for generating personalized recommendations
7. Timeline management for historical blood test data
8. Later use N8N webhook to use a professional AI health agent trained with expert data
9. N8N agent will re-use the supabase database

## Notes

- Show a disclaimer that the recommendations are not medical advice