// sw.js — Service Worker with Offline Caching & Push Notifications

const CACHE_NAME = 'mamc-intern-portal-v8';

// Local static assets required for complete offline access
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/roster.js',
  './js/pond.js',
  './data/data_interns.js',
  './data/data_burari.js',
  './data/data_periphery.js',
  './data/data_labs.js',
  './data/data_schedules.js',
  './data/data_units.js',
  './data/data_faqs.js'
];

// Install Event: Pre-cache static files & activate immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clear legacy caches & claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Serve from local cache first, fallback to network
self.addEventListener('fetch', (event) => {
  // Ignore external API endpoints (Firebase, Google Apps Script, analytics)
  if (
    event.request.url.includes('firebase') ||
    event.request.url.includes('google') ||
    event.request.url.includes('script.google.com') ||
    event.request.method !== 'GET'
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Background revalidate strategy
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
          }
        }).catch(() => {/* Maintain cached response when offline */});

        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});

// Handle incoming push messages
self.addEventListener('push', (event) => {
  let data = { title: 'MAMC Intern Portal', body: 'New update' };

  try {
    if (event.data) {
      data = event.data.json();
    }
  } catch (e) {
    data.body = event.data ? event.data.text() : 'New notification';
  }

  const options = {
    body: data.body || 'New Duty Cover request',
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'MAMC Intern Portal', options)
  );
});

// When user clicks the notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
