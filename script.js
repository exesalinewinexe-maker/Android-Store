// Register the service worker (simple, no skip button)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .catch(err => console.log('SW registration failed:', err));
}