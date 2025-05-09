
# Decision Record: Generate Longevity Page from Markdown

## Date
2025-05-09

## Context
The longevity page contains valuable information that is currently stored in both the React components and a markdown file. We need to ensure consistency between these sources and improve accessibility of the page.

## Decision
We have decided to generate the longevity page content from the `longevity.md` file. This approach will:

1. Ensure a single source of truth for the content
2. Make it easier to update content without changing code
3. Preserve all references and citations
4. Improve accessibility with proper heading structure and navigation
5. Enhance visual appeal by including the logo alongside headings

## Implementation Details
- Added navigation links at the top of the page for easier access to sections
- Added section IDs for direct linking and improved accessibility
- Preserved all references from the markdown file, including those by James Nestor, Wim Hof, and Ulrich Strunz
- Added proper target and rel attributes to external links for security and accessibility
- Included the Blood Test Oracle logo alongside the main heading
- Made tables responsive with overflow handling for mobile devices
- Added a "Back to top" link for better navigation on long pages

## Future Considerations
- Consider implementing a full markdown parser to automatically generate HTML content from the markdown file
- Set up a content management system to allow non-technical users to update the markdown content
- Implement a link checker to periodically verify that external references remain valid
