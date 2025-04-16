// public/sw.js

// ✅ Импорт Workbox из CDN (как обычный скрипт)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

// Проверка загрузки Workbox
if (workbox) {
  console.log('✅ Workbox загружен');

  // 📦 Кэшируем изображения
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
      cacheName: 'images-cache',
    })
  );

  // 📄 Кэшируем CSS и JS
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'style' || request.destination === 'script',
    new workbox.strategies.CacheFirst({
      cacheName: 'static-files-cache',
    })
  );

  // 🗂 Кэшируем HTML
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'document',
    new workbox.strategies.CacheFirst({
      cacheName: 'html-pages-cache',
    })
  );

} else {
  console.log('❌ Workbox не загрузился');
}
