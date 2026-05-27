// Instantly activate the service worker
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Claim clients immediately so updates apply fast
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// No caching — keeps APK downloads working
self.addEventListener('fetch', event => {
  // Let the browser handle all requests normally
});