
# Product Context

This file provides a high-level overview of the project and the expected product that will be created. Initially it is based upon projectBrief.md (if provided) and all other available project-related information in the working directory. This file is intended to be updated as the project evolves, and should be used to inform all other modes of the project's goals and context.

"2025-04-28 10:00:00" - Log of updates made will be appended as footnotes to the end of this file.

## Project Goal

Create a comprehensive blood test analytics web tool that allows users to:
1. Input and upload diagnostic results from blood tests
2. Track and visualize trends over time
3. Receive personalized recommendations for nutrition, supplements, physical activity, and stress reduction techniques based on their blood test results and personal information

## Key Features

1. Blood test data input and upload functionality
2. Timeline view of test results with trend visualization
3. Personalized recommendation system based on:
   - Blood test results
   - User profile (age, height, weight)
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
4. Analytics engine for generating personalized recommendations
5. Timeline management for historical blood test data
