// ═══════════════════════════════════════════════════════════════
// SIADEEL WATER — MODULES CONFIGURATION
// ═══════════════════════════════════════════════════════════════
// Add your modules here — index.html will automatically load them
// ═══════════════════════════════════════════════════════════════

const SIADEEL_MODULES = [
  {
    id: 'results',
    icon: 'check',
    label: 'Results',
    stat: 'sv-results',
    sub: 'Latest test results',
    value: '24',           // ⬅️ Default value to display
    page: 'results.html',  // ⬅️ Page to navigate to (optional)
    wide: false
  },
  {
    id: 'trends',
    icon: 'trend',
    label: 'Trends',
    stat: 'sv-trends',
    sub: 'Performance analytics',
    value: '89%',
    page: 'trends.html',
    wide: false
  },
  {
    id: 'process',
    icon: 'info',
    label: 'Process Information',
    stat: 'sv-process',
    sub: 'System operations',
    value: '5',
    page: 'process.html',
    wide: true             // ⬅️ Wide card (spans 2 columns)
  },
  {
    id: 'water-quality',
    icon: 'droplet',
    label: 'Water Quality',
    stat: 'sv-quality',
    sub: 'Current status',
    value: '98%',
    page: 'quality.html',
    wide: false
  },
  {
    id: 'treatment',
    icon: 'filter',
    label: 'Treatment',
    stat: 'sv-treatment',
    sub: 'Active processes',
    value: '3',
    page: 'treatment.html',
    wide: false
  },
  {
    id: 'settings',
    icon: 'settings',
    label: 'Settings',
    stat: 'sv-settings',
    sub: 'App configuration',
    value: '—',
    page: 'settings.html',
    wide: true
  }
];

// ✅ PAANO MAGDAGDAG NG BAGONG MODULE:
// 1. Copy ang format sa itaas
// 2. Palitan ang values (id, label, page, etc.)
// 3. Save — automatic na lalabas sa dashboard!
//
// Example ng bagong module:
// {
//   id: 'reports',
//   icon: 'check',           // Available icons: check, trend, info, droplet, filter, settings
//   label: 'Reports',
//   stat: 'sv-reports',      // Unique ID for the stat value element
//   sub: 'Monthly summaries',
//   value: '12',             // Initial display value
//   page: 'reports.html',    // HTML file to navigate to
//   wide: false              // true = 2 columns, false = 1 column
// }
