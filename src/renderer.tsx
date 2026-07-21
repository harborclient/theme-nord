import { registerTheme, type PluginContext } from "@harborclient/sdk";

/**
 * Activates the Nord theme plugin and registers Nord in Appearance.
 *
 * Base palette tokens are set via `colors`; extended styling (scrollbars, focus
 * rings, aurora background, method badges) lives in `dist/theme.css`.
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
  });
}
