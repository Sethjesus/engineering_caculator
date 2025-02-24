const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/static/style.css",
  "/static/script.js",
  "/static/icons/icon-192x192.png",
  "/static/icons/icon-512x512.png"
];

// 安裝 Service Worker 並快取靜態文件
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 攔截請求並回應快取
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
