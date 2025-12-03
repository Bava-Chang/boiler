// Service Worker for Boiler Management System PWA
const CACHE_NAME = 'boiler-management-v1.0.1';
const urlsToCache = [
  '/boiler/',
  '/boiler/index.html',
  '/boiler/qr-mobile-multilang.html',
  '/boiler/manifest.json',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&family=Noto+Sans+Thai:wght@300;400;500;700;900&family=Noto+Sans:wght@300;400;500;700;900&family=Orbitron:wght@400;700;900&display=swap'
];

// 安裝 Service Worker
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('[Service Worker] Cache error:', err);
      })
  );
  self.skipWaiting();
});

// 啟動 Service Worker
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 攔截網路請求
self.addEventListener('fetch', event => {
  // 跳過 Google Apps Script API 請求，這些必須即時
  if (event.request.url.includes('script.google.com') || 
      event.request.url.includes('script.googleusercontent.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果快取中有，直接返回
        if (response) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return response;
        }

        // 否則發送網路請求
        return fetch(event.request).then(response => {
          // 檢查是否為有效回應
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // 複製回應並存入快取
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(err => {
        console.error('[Service Worker] Fetch error:', err);
        // 如果離線且沒有快取，可以返回自訂的離線頁面
        return new Response('離線模式 - Offline Mode - โหมดออฟไลน์', {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      })
  );
});

// 處理推送通知（可選）
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : '油爐系統通知',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification('油爐管理系統', options)
  );
});

// 處理通知點擊
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./boiler-dashboard-simple.html')
  );
});
