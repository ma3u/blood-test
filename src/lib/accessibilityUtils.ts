
type AccessibilityProps = {
  role?: string;
  component?: string;
  expanded?: boolean;
  importance?: string;
  selected?: boolean;
  pressed?: boolean;
  checked?: boolean;
  level?: number;
};

/**
 * Enhances accessibility by providing ARIA attributes
 * based on component properties and WCAG 2.1 requirements
 */
export const enhanceAccessibility = (props: AccessibilityProps): Record<string, string | boolean | number> => {
  const a11yProps: Record<string, string | boolean | number> = {};
  
  // Apply role if provided
  if (props.role) {
    a11yProps["role"] = props.role;
  }
  
  // Component-specific attributes
  if (props.component) {
    a11yProps["data-component"] = props.component;
  }
  
  // State attributes
  if (props.expanded !== undefined) {
    a11yProps["aria-expanded"] = props.expanded;
  }
  
  if (props.selected !== undefined) {
    a11yProps["aria-selected"] = props.selected;
  }
  
  if (props.pressed !== undefined) {
    a11yProps["aria-pressed"] = props.pressed;
  }
  
  if (props.checked !== undefined) {
    a11yProps["aria-checked"] = props.checked;
  }
  
  // Importance level (for recommendations)
  if (props.importance) {
    a11yProps["data-importance"] = props.importance;
  }
  
  // Heading level
  if (props.level && props.level >= 1 && props.level <= 6) {
    a11yProps["aria-level"] = props.level;
  }
  
  return a11yProps;
};

/**
 * Provides keyboard navigation support for custom components
 */
export const keyboardNavigation = (
  event: React.KeyboardEvent,
  options: {
    onEnter?: () => void;
    onSpace?: () => void;
    onArrowDown?: () => void;
    onArrowUp?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
    onEscape?: () => void;
    onTab?: () => void;
    onShiftTab?: () => void;
  }
): void => {
  switch (event.key) {
    case "Enter":
      options.onEnter?.();
      break;
    case " ":
      options.onSpace?.();
      break;
    case "ArrowDown":
      options.onArrowDown?.();
      break;
    case "ArrowUp":
      options.onArrowUp?.();
      break;
    case "ArrowLeft":
      options.onArrowLeft?.();
      break;
    case "ArrowRight":
      options.onArrowRight?.();
      break;
    case "Escape":
      options.onEscape?.();
      break;
    case "Tab":
      if (event.shiftKey) {
        options.onShiftTab?.();
      } else {
        options.onTab?.();
      }
      break;
  }
};

/**
 * Applies focus management to elements within a container
 */
export const manageFocus = (
  container: HTMLElement,
  options: {
    tabbableSelector?: string;
    startFocus?: boolean;
    trapFocus?: boolean;
    restoreFocus?: boolean;
  } = {}
): (() => void) => {
  const tabbableSelector = options.tabbableSelector || 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const tabbableElements = Array.from(container.querySelectorAll(tabbableSelector)) as HTMLElement[];
  
  let previousFocus: HTMLElement | null = null;
  
  if (options.startFocus && tabbableElements.length > 0) {
    previousFocus = document.activeElement as HTMLElement;
    tabbableElements[0].focus();
  }
  
  const handleTabKey = (event: KeyboardEvent) => {
    if (options.trapFocus && event.key === 'Tab') {
      const firstTabbable = tabbableElements[0];
      const lastTabbable = tabbableElements[tabbableElements.length - 1];
      
      if (event.shiftKey && document.activeElement === firstTabbable) {
        lastTabbable.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === lastTabbable) {
        firstTabbable.focus();
        event.preventDefault();
      }
    }
  };
  
  if (options.trapFocus) {
    document.addEventListener('keydown', handleTabKey);
  }
  
  // Return cleanup function
  return () => {
    if (options.trapFocus) {
      document.removeEventListener('keydown', handleTabKey);
    }
    
    if (options.restoreFocus && previousFocus) {
      previousFocus.focus();
    }
  };
};

// Export additional accessibility helper functions
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  // Create or get existing live region
  let liveRegion = document.getElementById('a11y-announcer');
  
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'a11y-announcer';
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.classList.add('sr-only'); // Screen reader only
    document.body.appendChild(liveRegion);
  } else {
    liveRegion.setAttribute('aria-live', priority);
  }
  
  // Set the message
  liveRegion.textContent = message;
  
  // Clear after a delay to prevent multiple rapid announcements
  setTimeout(() => {
    liveRegion.textContent = '';
  }, 3000);
};
