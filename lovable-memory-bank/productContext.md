
# Product Context

This file provides a high-level overview of the project and the expected product that will be created. Initially it is based upon projectBrief.md (if provided) and all other available project-related information in the working directory. This file is intended to be updated as the project evolves, and should be used to inform all other modes of the project's goals and context.

"2025-04-28 10:00:00" - Log of updates made will be appended as footnotes to the end of this file.

## Project Goal

Create a comprehensive blood test analytics web tool that allows users to:
1. Input and upload diagnostic results from blood tests (OCR scan)
2. Track and visualize trends over time
3. Receive personalized recommendations for nutrition, supplements, physical activity, and stress reduction techniques based on their blood test results and personal information

## User Journey

1. User see the common values of the blood test as Input fields with the range of the reference values based on ReferenceValues.md, he can switch between male and female to update the reference values
2. He can upload the diagnostic results as PDF or images a varous formats
3. After upload show the analysted values in the input field for final confirmation
4. Show the recommendations based on the values (male/female)
5. show a dialog window to ask if you want to register with his preferedAuthentication Provider
6. if yes register the user and store the user data, validate the email, via email request, generate email validation with a confirmation link, automatically login the user
7. store the analysted data and the recommendations in the database for the user
8. He can compare the results and get the recommendations in a timeline view
9. Create a user profile with sex, age, height, weight, known health issues

## Key Features

1. Blood test data input and upload functionality without login
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
