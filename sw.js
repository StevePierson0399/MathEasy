self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                '/manifest.json',
                "./src/css/default.css",
                "./src/css/all.min.css",
                "./src/css/bootstrap.min.css",
                "./src/js/table.js",
                "./src/js/chart.js",
                "./src/js/common.js",
                "./src/js/translate.js",
                "./src/favicons/Web/icons8-medium-old-ios-16-120.png",
                "./src/fonts/Poppins-Regular.ttf",
                "./src/fonts/Poppins-SemiBold.ttf",
                "./src/webfonts/fa-regular-400.ttf",
                "./src/webfonts/fa-solid-900.ttf",
                "./src/webfonts/fa-regular-400.woff2",
                "./src/webfonts/fa-solid-900.woff2",
            ])
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

