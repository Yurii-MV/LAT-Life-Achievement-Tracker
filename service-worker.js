// Service Worker для PWA - Трекер життєвих досягнень
const CACHE_NAME = 'life-achievements-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './appicon.png',
  './appicon.svg',
];

// Установка service worker та кешування файлів
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Кешування файлів...');
        // Кешуємо основні файли, але не помилюємо якщо якщь не доступно
        return Promise.allSettled(
          urlsToCache.map((url) =>
            fetch(url)
              .then((response) => {
                if (response.ok) {
                  return cache.put(url, response);
                }
              })
              .catch(() => {
                console.log(`[Service Worker] Не вдалося кешувати ${url}`);
              }),
          ),
        );
      })
      .catch((error) => {
        console.error('[Service Worker] Помилка при кешуванні:', error);
      }),
  );
  self.skipWaiting();
});

// Активація service worker та очистка старих кешів
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Видаляю старий кеш:', cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

// Перехват запитів - спочатку кеш, далі мережа
self.addEventListener('fetch', (event) => {
  // Пропускаємо non-GET запити
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Якщо в кеші, повертаємо кешовану версію
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((response) => {
          // Якщо немає response або це помилка
          if (
            !response ||
            response.status !== 200 ||
            response.type === 'error'
          ) {
            return response;
          }

          // Кешуємо успішні відповіді
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Якщо мережа недоступна, повертаємо кешовану сторінку
          return caches.match('./index.html');
        });
    }),
  );
});

// Обробка повідомлень з клієнта (опціонально для синхронізації)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
