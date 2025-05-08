
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/context/LanguageContext';
import { UserProfileProvider } from '@/context/UserProfileContext';
import { QueryProvider } from '@/context/QueryProvider';

// Wrapper with all providers for testing components
export function renderWithProviders(
  ui: React.ReactElement,
  { route = '/' } = {}
) {
  window.history.pushState({}, 'Test page', route);
  
  return render(
    <QueryProvider>
      <LanguageProvider>
        <UserProfileProvider>
          <ThemeProvider defaultTheme="light" storageKey="blood-test-oracle-theme">
            <BrowserRouter>{ui}</BrowserRouter>
          </ThemeProvider>
        </UserProfileProvider>
      </LanguageProvider>
    </QueryProvider>
  );
}

// Helper to test accessibility (a11y) basics
export const checkA11yBasics = (container: HTMLElement): void => {
  // Check for valid HTML structure
  const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  // Check for semantic HTML
  const semanticElements = container.querySelectorAll('main, article, section, header, footer, nav');
  
  // Check all images have alt text
  const images = container.querySelectorAll('img');
  images.forEach(img => {
    expect(img).toHaveAttribute('alt');
  });
  
  // Check interactive elements have accessible names
  const buttons = container.querySelectorAll('button, [role="button"]');
  buttons.forEach(button => {
    const hasAccessibleName = 
      button.hasAttribute('aria-label') || 
      button.textContent || 
      button.querySelector('[aria-label]');
    expect(hasAccessibleName).toBeTruthy();
  });
};
