/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

// importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const CACHE_NAME = 'myCache';
this.addEventListener('install', function (event) {
    
    const urlsToCache = [
      'favicon.ico'
    ];
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
      console.log('opened cache');
      return cache.addAll(urlsToCache);
    }));
});

// self.addEventListener('fetch', function(event) {
//   console.log('processing cache');
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }

//         return fetch(event.request).then(
//           function(response) {
//             // Check if we received a valid response
//             if(!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }

//             // IMPORTANT: Clone the response. A response is a stream
//             // and because we want the browser to consume the response
//             // as well as the cache consuming the response, we need
//             // to clone it so we have two streams.
//             var responseToCache = response.clone();

//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           }
//         );
//       })
//     );
// });


this.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    this.skipWaiting();
  }
});

// workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/newJsFeatures/index.html"), {
  
//   blacklist: [/^\/_/,/\/[^\/?]+\.[^\/]+$/],
// });
