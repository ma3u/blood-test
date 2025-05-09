
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/test/testUtils';
import Header from '@/components/layout/Header';

describe('Header Component', () => {
  it('renders correctly with all required elements', () => {
    renderWithProviders(<Header />);
    
    // Check that the logo text is rendered
    expect(screen.getByText('Blood Test Oracle')).toBeInTheDocument();
    
    // Check that the language switcher is present
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    
    // Check profile link is present
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });

  it('navigates to profile page when profile link is clicked', () => {
    renderWithProviders(<Header />);
    
    const profileLink = screen.getByText(/profile/i).closest('a');
    expect(profileLink).toHaveAttribute('href', '/profile');
  });

  it('meets basic accessibility requirements', () => {
    const { container } = renderWithProviders(<Header />);
    
    // Check buttons have accessible names
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('aria-label');
    });
    
    // Check navigation landmark is present
    expect(container.querySelector('nav')).toBeInTheDocument();
    
    // Check header landmark is present
    expect(container.querySelector('header')).toBeInTheDocument();
  });
});
