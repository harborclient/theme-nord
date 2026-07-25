// node_modules/.pnpm/@harborclient+sdk@1.0.33_@babel+runtime@8.0.0_@codemirror+search@6.7.1_@codemirror+them_f39ff3884637cfd15f954ae52c8cfc3e/node_modules/@harborclient/sdk/dist/runtime/index.js
function registerTheme(hc, theme) {
  const disposable = hc.themes.register(theme);
  hc.subscriptions.push(disposable);
  return disposable;
}

// src/renderer.tsx
var FONT_SANS = "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif";
var FONT_MONO = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
var SHARED_METRICS = {
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
  "scrollbar-width": "8px"
};
function activate(hc) {
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
      success: "#a3be8c"
    },
    metrics: { ...SHARED_METRICS }
  });
}
export {
  activate
};
