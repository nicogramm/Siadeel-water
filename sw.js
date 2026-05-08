const CACHE_VERSION = 'v1.0.8';
const CACHE_NAME = `siadeel-${CACHE_VERSION}`;

const CACHE_FILES = [
  './',
  './index.html',
  './results.html',
  './trends.html',
  './process.html',
  './settings.html',
  './modules-config.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// ═══════════════════════════════════════
// INSTALL
// ═══════════════════════════════════════
self.addEventListener('install', e => {
  console.log('[SW] Installing version:', CACHE_VERSION);
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching app shell');
      return cache.addAll(CACHE_FILES);
    })
  );
  self.skipWaiting();
});

// ═══════════════════════════════════════
// ACTIVATE
// ═══════════════════════════════════════
self.addEventListener('activate', e => {
  console.log('[SW] Activating version:', CACHE_VERSION);
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k.startsWith('siadeel-') && k !== CACHE_NAME)
           .map(k => {
             console.log('[SW] Deleting old cache:', k);
             return caches.delete(k);
           })
      )
    )
  );
  self.clients.claim();
});

// ═══════════════════════════════════════
// FETCH
// ═══════════════════════════════════════
self.addEventListener('fetch', e => {
  const url = e.request.url;
  
  // ✅ NEVER cache Google APIs or OAuth
  if (url.includes('googleapis.com') ||
      url.includes('accounts.google.com') ||
      url.includes('gstatic.com') ||
      url.includes('fonts.googleapis.com') ||
      url.includes('fonts.gstatic.com')) {
    return; // Let it pass through
  }
  
  // ✅ Network-First with proper error handling (same as PedroEX)
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // ✅ ONLY cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(e.request)) // ✅ Fallback to cache on network error
  );
});
