
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { renderWithProviders } from '@/test/testUtils';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import userEvent from '@testing-library/user-event';
import * as testingLibrary from '@testing-library/dom';
const { screen, fireEvent } = testingLibrary;

describe('AccessibilityMenu Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    
    // Reset document classes
    document.documentElement.className = '';
  });

  it('renders correctly with the A11y button', () => {
    renderWithProviders(<AccessibilityMenu />);
    
    const a11yButton = screen.getByRole('button', { name: /accessibility options/i });
    expect(a11yButton).toBeInTheDocument();
    expect(a11yButton).toHaveTextContent('A11y');
  });

  it('opens dropdown menu when clicked', async () => {
    renderWithProviders(<AccessibilityMenu />);
    
    const a11yButton = screen.getByRole('button', { name: /accessibility options/i });
    await fireEvent.click(a11yButton);
    
    // Check dropdown is open
    expect(screen.getByText('Accessibility Options')).toBeInTheDocument();
    expect(screen.getByText('Text Size')).toBeInTheDocument();
    expect(screen.getByText('Normal Text')).toBeInTheDocument();
    expect(screen.getByText('Large Text (125%)')).toBeInTheDocument();
    expect(screen.getByText('Larger Text (150%)')).toBeInTheDocument();
    expect(screen.getByText('High Contrast')).toBeInTheDocument();
    expect(screen.getByText('Reduced Motion')).toBeInTheDocument();
  });

  it('changes text size when options are clicked', async () => {
    renderWithProviders(<AccessibilityMenu />);
    
    // Open menu
    const a11yButton = screen.getByRole('button', { name: /accessibility options/i });
    await fireEvent.click(a11yButton);
    
    // Click large text option
    const largeTextOption = screen.getByText('Large Text (125%)');
    await fireEvent.click(largeTextOption);
    
    // Check if class is applied to html element
    expect(document.documentElement.classList.contains('text-large')).toBeTruthy();
    
    // Check localStorage is updated
    expect(localStorage.getItem('accessibility-text-size')).toBe('large');
  });

  it('toggles high contrast mode correctly', async () => {
    renderWithProviders(<AccessibilityMenu />);
    
    // Open menu
    const a11yButton = screen.getByRole('button', { name: /accessibility options/i });
    await fireEvent.click(a11yButton);
    
    // Click high contrast option
    const highContrastOption = screen.getByText('High Contrast');
    await fireEvent.click(highContrastOption);
    
    // Check if class is applied to html element
    expect(document.documentElement.classList.contains('high-contrast')).toBeTruthy();
    
    // Check localStorage is updated
    expect(localStorage.getItem('accessibility-high-contrast')).toBe('true');
  });

  it('toggles reduced motion correctly', async () => {
    renderWithProviders(<AccessibilityMenu />);
    
    // Open menu
    const a11yButton = screen.getByRole('button', { name: /accessibility options/i });
    await fireEvent.click(a11yButton);
    
    // Click reduced motion option
    const reducedMotionOption = screen.getByText('Reduced Motion');
    await fireEvent.click(reducedMotionOption);
    
    // Check if class is applied to html element
    expect(document.documentElement.classList.contains('reduced-motion')).toBeTruthy();
    
    // Check localStorage is updated
    expect(localStorage.getItem('accessibility-reduced-motion')).toBe('true');
  });
  
  it('loads settings from localStorage on mount', async () => {
    // Set up initial localStorage values
    localStorage.setItem('accessibility-text-size', 'larger');
    localStorage.setItem('accessibility-high-contrast', 'true');
    localStorage.setItem('accessibility-reduced-motion', 'true');
    
    renderWithProviders(<AccessibilityMenu />);
    
    // Wait for useEffect to apply classes
    await new Promise(r => setTimeout(r, 0));
    
    // Check if classes are applied based on localStorage
    expect(document.documentElement.classList.contains('text-larger')).toBeTruthy();
    expect(document.documentElement.classList.contains('high-contrast')).toBeTruthy();
    expect(document.documentElement.classList.contains('reduced-motion')).toBeTruthy();
  });
});
