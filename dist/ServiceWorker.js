var CACHE_NAME = 'DubaiQuizv1';
var urlsToCache = [
  '/',
  '/index.html',
  '/css/*',
  '/js/*'
];

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/ServiceWorker.js').then(function(registration) {
      // Registration was successful
      if(reg.installing) {
        console.log('Service worker installing');
      } else if(reg.waiting) {
        console.log('Service worker installed');
      } else if(reg.active) {
        console.log('Service worker active');
      }
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


self.addEventListener('install', function(event) {
  console.log('WORKER: install event in progress.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache)
        .then(function() {
          console.log('WORKER: install completed');
        })
      })
  );
});