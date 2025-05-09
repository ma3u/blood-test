
import React from 'react';

/**
 * Accessibility Configuration
 * Following Web Content Accessibility Guidelines (WCAG) 2.1
 * https://www.w3.org/WAI/standards-guidelines/wcag/
 */

type AccessibilityProps = {
  role?: string;
  component?: string;
  expanded?: boolean;
  importance?: string;
  selected?: boolean;
  pressed?: boolean;
  checked?: boolean;
  level?: number;
  label?: string;
  controls?: string;
  describedby?: string;
  labelledby?: string;
  live?: "polite" | "assertive" | "off";
  atomic?: boolean;
  relevant?: string;
  busy?: boolean;
};

export const accessibilityConfig = {
  standard: "WCAG 2.1",
  level: "AA", // Conformance level (A, AA, or AAA)
  guidelines: {
    perceivable: [
      "Provide text alternatives for non-text content",
      "Provide captions and alternatives for audio and video",
      "Make content adaptable",
      "Make content distinguishable",
    ],
    operable: [
      "Make all functionality available from a keyboard",
      "Provide users enough time to read and use content",
      "Do not design content in a way that is known to cause seizures or physical reactions",
      "Provide ways to help users navigate, find content, and determine where they are",
      "Make it easier to use inputs other than keyboard",
    ],
    understandable: [
      "Make text readable and understandable",
      "Make content appear and operate in predictable ways",
      "Help users avoid and correct mistakes",
    ],
    robust: [
      "Maximize compatibility with current and future user tools",
    ],
  },
  minimumContrastRatio: {
    normalText: 4.5, // 4.5:1 for normal text
    largeText: 3.0, // 3:1 for large text
    uiComponents: 3.0, // 3:1 for UI components and graphical objects
  },
  screenReaderSupport: true,
  keyboardAccessibility: true,
  focusVisible: true,
  textResizing: true,
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
  
  // Relationship attributes
  if (props.label) {
    a11yProps["aria-label"] = props.label;
  }
  
  if (props.controls) {
    a11yProps["aria-controls"] = props.controls;
  }
  
  if (props.describedby) {
    a11yProps["aria-describedby"] = props.describedby;
  }
  
  if (props.labelledby) {
    a11yProps["aria-labelledby"] = props.labelledby;
  }
  
  // Live region attributes
  if (props.live) {
    a11yProps["aria-live"] = props.live;
  }
  
  if (props.atomic !== undefined) {
    a11yProps["aria-atomic"] = props.atomic;
  }
  
  if (props.relevant) {
    a11yProps["aria-relevant"] = props.relevant;
  }
  
  if (props.busy !== undefined) {
    a11yProps["aria-busy"] = props.busy;
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
      event.preventDefault(); // Prevent page scroll on space
      options.onSpace?.();
      break;
    case "ArrowDown":
      event.preventDefault();
      options.onArrowDown?.();
      break;
    case "ArrowUp":
      event.preventDefault();
      options.onArrowUp?.();
      break;
    case "ArrowLeft":
      event.preventDefault();
      options.onArrowLeft?.();
      break;
    case "ArrowRight":
      event.preventDefault();
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

/**
 * Creates an anchor link that meets accessibility standards
 */
export const createAccessibleLink = (
  href: string,
  text: string,
  options: {
    isExternal?: boolean;
    className?: string;
    ariaLabel?: string;
    onClick?: (e: React.MouseEvent) => void;
  } = {}
): React.ReactElement => {
  const props = {
    href,
    className: options.className || "text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm px-1",
    onClick: options.onClick,
    ...(options.ariaLabel ? { "aria-label": options.ariaLabel } : {}),
    ...(options.isExternal ? {
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": options.ariaLabel || `${text} (opens in a new tab)`,
    } : {}),
  };
  
  return React.createElement(
    "a", 
    props, 
    [
      text,
      options.isExternal && React.createElement("span", { 
        className: "sr-only", 
        key: "sr-only" 
      }, " (opens in a new tab)"),
      options.isExternal && React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-4 w-4 inline-block ml-1",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        key: "external-icon",
        "aria-hidden": true,
      }, React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      })),
    ].filter(Boolean)
  );
};

/**
 * Announces messages to screen readers
 */
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

/**
 * Returns ARIA attributes for common components
 */
export const getAriaAttributes = {
  button: (label: string) => ({
    role: "button",
    "aria-label": label,
    tabIndex: 0,
  }),
  
  dialog: (title: string, description?: string) => ({
    role: "dialog",
    "aria-modal": true,
    "aria-labelledby": `dialog-title-${title.toLowerCase().replace(/\s/g, "-")}`,
    ...(description && { "aria-describedby": `dialog-desc-${title.toLowerCase().replace(/\s/g, "-")}` }),
  }),
  
  tab: (selected: boolean, controls: string) => ({
    role: "tab",
    "aria-selected": selected,
    "aria-controls": controls,
    tabIndex: selected ? 0 : -1,
  }),
  
  tabpanel: (labelledBy: string) => ({
    role: "tabpanel",
    "aria-labelledby": labelledBy,
    tabIndex: 0,
  }),
  
  listitem: (position: number, totalItems: number) => ({
    role: "listitem",
    "aria-posinset": position,
    "aria-setsize": totalItems,
  }),
};
