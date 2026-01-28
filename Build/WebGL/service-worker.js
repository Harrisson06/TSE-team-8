// Edited by Quinn Carr on 26/1/2026

const CACHE_NAME = "tse-pwa";

const ASSETS = [
  "./",
  "./index.html",
  "./Build/build.loader.js",
  "./Build/build.framework.js",
  "./Build/build.wasm",
  "./Build/build.data",
  "./icons/pwa_icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
