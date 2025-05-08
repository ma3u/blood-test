
/**
 * Accessibility Configuration
 * Following Web Content Accessibility Guidelines (WCAG) 2.1
 * https://www.w3.org/WAI/standards-guidelines/wcag/
 */

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
 * Checks if color contrast meets WCAG 2.1 AA standards
 * @param foreground Foreground color in hex (#RRGGBB)
 * @param background Background color in hex (#RRGGBB)
 * @param isLargeText Whether the text is large (14pt bold or 18pt)
 * @returns boolean indicating if contrast ratio meets requirements
 */
export const hasValidContrast = (foreground: string, background: string, isLargeText = false): boolean => {
  // Convert hex to RGB
  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : { r: 0, g: 0, b: 0 };
  };
  
  // Calculate relative luminance
  const getLuminance = (rgb: { r: number; g: number; b: number }): number => {
    const a = [rgb.r, rgb.g, rgb.b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };
  
  const rgb1 = hexToRgb(foreground);
  const rgb2 = hexToRgb(background);
  
  const l1 = getLuminance(rgb1);
  const l2 = getLuminance(rgb2);
  
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  
  // Return whether contrast meets WCAG 2.1 AA standards
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
};

/**
 * Accessibility hook for keyboard navigation
 */
export const useAccessibleKeyboardNavigation = () => {
  return {
    handleKeyNavigation: (e: React.KeyboardEvent, action: () => void) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        action();
      }
    }
  };
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

