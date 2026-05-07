// ═══════════════════════════════════════════════════════════════
// SIADEEL WATER — MODULES CONFIGURATION
// ═══════════════════════════════════════════════════════════════

const SIADEEL_MODULES = [
  {
    id: 'results',
    icon: 'check',
    label: 'Results',
    stat: 'sv-results',
    sub: 'Test entries',
    metric: 'Total Results', // ⬅️ BAGO: Metric name from DashboardStats sheet
    page: 'results.html',
    wide: false
  },
  {
    id: 'trends',
    icon: 'trend',
    label: 'Trends',
    stat: 'sv-trends',
    sub: 'This month',
    metric: 'This Month Tests',
    page: 'trends.html',
    wide: false
  },
  {
    id: 'process',
    icon: 'info',
    label: 'Process Information',
    stat: 'sv-process',
    sub: 'Active sample points',
    metric: 'Active Sample Points',
    page: 'process.html',
    wide: true
  },
  {
    id: 'water-quality',
    icon: 'droplet',
    label: 'Water Quality',
    stat: 'sv-quality',
    sub: 'Average pH',
    metric: 'Avg pH',
    page: 'quality.html',
    wide: false
  },
  {
    id: 'treatment',
    icon: 'filter',
    label: 'Treatment',
    stat: 'sv-treatment',
    sub: 'Avg Chlorine (mg/L)',
    metric: 'Avg Chlorine',
    page: 'treatment.html',
    wide: false
  },
  {
    id: 'settings',
    icon: 'settings',
    label: 'Settings',
    stat: 'sv-settings',
    sub: 'App configuration',
    metric: null, // ⬅️ No metric for settings
    page: 'settings.html',
    wide: true
  }
];
