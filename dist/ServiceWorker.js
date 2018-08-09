var cacheName = 'DubaiQuizv2';
var filesToCache = [
  '/',
  'https://fonts.googleapis.com/css?family=Roboto:100:300,400,500,700,900|Material+Icons',
  'dist/**/*.{js,html,css}'
];

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/ServiceWorker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration ok', registration);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


self.addEventListener('install', function(event) {
  console.log('WORKER: install event in progress.');
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(filesToCache)
        .then(function() {
          console.log('WORKER: install completed');
        })
      })
  );
});