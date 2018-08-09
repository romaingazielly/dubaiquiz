var cacheName = 'DubaiQuizv2';
var filesToCache = [
  'https://fonts.googleapis.com/css?family=Roboto:100:300,400,500,700,900|Material+Icons',
  '/**/*.{js,html,css}',
  '/index.html'
];

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/ServiceWorker.js').then(function(registration) {
      console.log('ServiceWorker registration success', registration.scope);
      registration.update()
      installWorkers()
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


function installWorkers(){
  console.log('install is called')
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


  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
}