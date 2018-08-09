var cacheName = 'DubaiQuizv2';
var filesToCache = [
  '/',
  'https://fonts.googleapis.com/css?family=Roboto:100:300,400,500,700,900|Material+Icons',
  'dist/**/*.{js,html,css}'
];

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/ServiceWorker.js').then(function(registration) {
      console.log('ServiceWorker registration success', registration);
      registration.update()
      installWorkers()
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


function installWorkers(){
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
  })
}