// Cache static assets on install
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
        'https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Roboto+Slab:300,400,700',
        '/images/icons/favicon.ico',
        '/images/logo.svg',
        '/images/logo.png',
        '/images/icons/homescreen192.png',
        '/images/icons/homescreen512.png',
        '/images/yoga.png',
        '/images/steph.jpg',
        '/images/nutrition.jpeg',
        '/images/relax.jpeg',
        '/images/training.jpeg'
      ]);
    })
  );
});

// Static Cache Offline Response
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
