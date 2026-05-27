// Instantly activate the worker
self.addEventListener('install', () => {
  self.skipWaiting();
});

// Claim clients immediately
self.addEventListener('activate', () => {
  self.clients.claim();
});

// Listen for skipWaiting + loading messages
self.addEventListener('message', event => {
  const data = event.data;

  if (data === 'skipWaiting') {
    self.skipWaiting();
  }

  if (typeof data === 'string' && data.startsWith('loading:')) {
    console.log('Loading ' + data.slice(8));
  }
});

// No caching — keeps APK downloads working
self.addEventListener('fetch', () => {});