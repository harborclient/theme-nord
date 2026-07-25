import { registerTheme, type PluginContext } from "@harborclient/sdk";

/**
 * Default UI sans-serif stack mirrored from HarborClient `:root` metrics.
 */
const FONT_SANS =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif";

/**
 * Default monospace stack mirrored from HarborClient `:root` metrics.
 */
const FONT_MONO =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

/**
 * Shared typography/geometry metrics applied to every theme until per-theme
 * tweaks land. Maps to `--mac-*` via the host.
 */
const SHARED_METRICS = {
  "layout-font-family": FONT_SANS,
  "layout-font-size": "14px",
  "layout-border-width": "1px",
  "layout-radius": "0.375rem",
  "breadcrumb-font-family": FONT_SANS,
  "breadcrumb-font-size": "14px",
  "breadcrumb-border-width": "1px",
  "breadcrumb-radius": "0.375rem",
  "text-font-family": FONT_SANS,
  "text-font-family-mono": FONT_MONO,
  "text-font-size": "14px",
  "text-font-size-sm": "14px",
  "text-font-size-lg": "16px",
  "interactive-font-family": FONT_SANS,
  "interactive-font-size": "14px",
  "interactive-border-width": "1px",
  "interactive-radius": "0.375rem",
  "interactive-focus-ring-width": "3px",
  "chrome-font-family": FONT_SANS,
  "chrome-font-size": "14px",
  "chrome-border-width": "1px",
  "chrome-radius": "0.375rem",
  "tab-font-family": FONT_SANS,
  "tab-font-size": "14px",
  "tab-border-width": "2px",
  "tab-radius": "9999px",
  "status-font-family": FONT_SANS,
  "status-font-size": "14px",
  "status-border-width": "1px",
  "status-radius": "9999px",
  "method-font-family": FONT_SANS,
  "method-font-size": "14px",
  "method-border-width": "1px",
  "method-radius": "0.25rem",
  "script-stage-font-family": FONT_SANS,
  "script-stage-font-size": "14px",
  "script-stage-border-width": "3px",
  "script-stage-radius": "0.375rem",
  "git-font-family": FONT_SANS,
  "git-font-size": "14px",
  "git-border-width": "1px",
  "git-radius": "0.375rem",
  "scrollbar-width": "8px",
} as const;

/**
 * Activates the Nord theme plugin and registers Nord in Appearance.
 *
 * Base palette tokens are set via `colors`; typography/geometry via `metrics`;
 * extended styling (scrollbars, focus rings, aurora background, method badges)
 * lives in `dist/theme.css`.
 *
 * @param hc - Renderer plugin context from the HarborClient host.
 */
export function activate(hc: PluginContext): void {
  registerTheme(hc, {
    id: "nord",
    title: "Nord",
    type: "dark",
    colors: {
      surface: "#2e3440",
      sidebar: "#3b4252",
      "sidebar-section": "#434c5e",
      control: "#434c5e",
      field: "rgba(255, 255, 255, 0.06)",
      separator: "rgba(255, 255, 255, 0.1)",
      text: "#eceff4",
      "text-secondary": "#e5e9f0",
      muted: "#4c566a",
      accent: "#88c0d0",
      selection: "rgba(136, 192, 208, 0.25)",
      danger: "#bf616a",
      warning: "#ebcb8b",
      success: "#a3be8c",
    },
    metrics: { ...SHARED_METRICS },
  });
}
