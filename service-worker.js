// Change this to your repository name
// const GHPATH = 'https://vite-svelte-pwa.codewithshin.com';
const GHPATH = '';

// Choose a different app prefix name
const APP_PREFIX = 'vite_svelte_pwa_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…).
// If you don't change the version, the service worker will give your
// users the old files!
const VERSION = 'version_07';

// The files to make available for offline use. make sure to add others to this list
const URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`
];

const CACHE_NAME = APP_PREFIX + VERSION;
self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log('Responding with cache : ' + e.request.url);
        return request;
      } else {
        console.log('File is not cached, fetching : ' + e.request.url);
        return fetch(e.request);
      }
    })
  );
});

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS);
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            console.log('Deleting cache : ' + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});