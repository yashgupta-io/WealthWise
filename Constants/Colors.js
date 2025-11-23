export const Theme = {
  light: {
    primary: "#4A90E2",       // Blue (main brand color)
    secondary: "#50E3C2",     // Teal (accents, highlights)
    background: "#F9FAFB",    // Almost white background
    card: "#FFFFFF",          // Cards, components
    textPrimary: "#1F2937",   // Main text (dark gray)
    textSecondary: "#6B7280", // Secondary text (medium gray)
    border: "#E5E7EB",        // Soft borders/dividers
    error: "#EF4444",         // Red for "over budget"
    success: "#10B981",       // Green for income/positive values
    warning: "#F59E0B",       // Yellow for near-budget limits
    overlay: "rgba(0,0,0,0.1)", // Light overlay for modals
  },
  dark: {
    primary: "#60A5FA",         // Soft blue
    secondary: "#34D399",       // Teal/green accent
    background: "#0D1117",      // Dark base (GitHub-like)
    card: "#1F2937",            // Dark gray card background
    textPrimary: "#F3F4F6",     // Main text white-ish
    textSecondary: "#9CA3AF",   // Gray text
    border: "#374151",          // Soft dark border
    error: "#F87171",           // Softer red for dark mode
    success: "#34D399",         // Green for positives
    warning: "#FBBF24",         // Yellow warnings
    overlay: "rgba(255,255,255,0.1)", // Bright overlay for modals
  }
};