const CACHE_VERSION = 'v1';
const CACHE_NAME = `game-portal-${CACHE_VERSION}`;
const OFFLINE_CACHE = `offline-games-${CACHE_VERSION}`;

// Assets to cache on install
const CORE_ASSETS = [
    '/',
    '/index.html',
    '/index.css',
    '/online.css',
    '/offline.css',
    '/index.js',
    '/online.js',
    '/offline.js',
    '/pwa-install.js',
    '/manifest.json',
    '/onlinegameadd.json',
    '/service-worker.js',
    '/indexeddb-save.js',

'/tool-1/data.js',
'/tool-1/menu.js',
'/tool-1/script.js',
'/tool-1/style.css',
'/menu/footer.css',
'/offline-games/inde.js',
'/safe/safe.js',
'/tools.html',
'/tool-1/data.json',
'/tool-1/online-tools.js',
'/tool-1/online-tools.css',
'/all-tool.html',
'/online-tools.html',
     //menu
'/menu/script.js',
'/menu/style.css',
'/menu/search.css',
'/menu/search.js',

//site menu
   '/about.html',
   '/contact.html',
   '/privacy-policy.html',
   '/terms-and-conditions.html',
    //game
//1
'/offline-games/100-question-iq-test/ast/logo.png',
'/offline-games/100-question-iq-test/index.html',
'/offline-games/100-question-iq-test/script.js',
'/offline-games/100-question-iq-test/styles.css',
//2
'/offline-games/2048/css/keyframes.css',
'/offline-games/2048/css/media.css',
'/offline-games/2048/css/style.css',
'/offline-games/2048/favicon.ico',
'/offline-games/2048/font/ClearSans-Bold-webfont.woff',
'/offline-games/2048/font/ClearSans-Regular-webfont.woff',
'/offline-games/2048/font/clear-sans.css',
'/offline-games/2048/index.html',
'/offline-games/2048/js/config.js',
'/offline-games/2048/js/data.js',
'/offline-games/2048/js/event.js',
'/offline-games/2048/js/game.js',
'/offline-games/2048/js/main.js',
'/offline-games/2048/js/utils.js',
'/offline-games/2048/js/view.js',
//3
'/offline-games/balloon-pop/index.html',
//4
'/offline-games/checkers/img/adsense.png',
'/offline-games/checkers/img/logo.png',
'/offline-games/checkers/img/sound.png',
'/offline-games/checkers/index.html',
'/offline-games/checkers/script.js',
'/offline-games/checkers/style.css',
//5
'/offline-games/color-connect/index.html',
//6
'/offline-games/color-match/index.html',
//7
'/offline-games/connect-4/index.html',
//8
'/offline-games/connect-four/assets/connect-four.png',
'/offline-games/connect-four/assets/script.js',
'/offline-games/connect-four/assets/style.css',
'/offline-games/connect-four/index.html',
//9
'/offline-games/cross-road/index.html',
'/offline-games/cross-road/three.min.js',
//10
'/offline-games/dragon-wing/assets/favicon.png',
'/offline-games/dragon-wing/assets/script.js',
'/offline-games/dragon-wing/assets/style.css',
'/offline-games/dragon-wing/index.html',
//11
'/offline-games/fruit-slice/index.html',
//12
'/offline-games/genius-memory/assets/memory.png',
'/offline-games/genius-memory/assets/script.js',
'/offline-games/genius-memory/assets/style.css',
'/offline-games/genius-memory/index.html',
//13
'/offline-games/math-quiz/index.html',
//14
'/offline-games/maze/index.html',
//15
'/offline-games/pc-typing-champ/assets/images/favicons/apple-touch-icon.png',
'/offline-games/pc-typing-champ/assets/images/favicons/favicon-16x16.png',
'/offline-games/pc-typing-champ/assets/images/favicons/favicon-32x32.png',
'/offline-games/pc-typing-champ/assets/images/favicons/safari-pinned-tab.svg',
'/offline-games/pc-typing-champ/assets/images/favicons/site.webmanifest',
'/offline-games/pc-typing-champ/assets/stylesheets/style.css',
'/offline-games/pc-typing-champ/controllers/quote.js',
'/offline-games/pc-typing-champ/controllers/script.js',
'/offline-games/pc-typing-champ/index.html',
//16
'/offline-games/pong/index.html',
//17

//18
'/offline-games/rock-paper/index.html',
//19
'/offline-games/simon/index.html',
//20
'/offline-games/slider-number/assets/puzzle.png',
'/offline-games/slider-number/assets/script.js',
'/offline-games/slider-number/assets/style.css',
'/offline-games/slider-number/index.html',
//21
'/offline-games/snake/index.html',
//22
'/offline-games/stack/TweenMax.min.js',
'/offline-games/stack/index.html',
'/offline-games/stack/three.min.js',
//23
'/offline-games/sudoku/app.css',
'/offline-games/sudoku/index.html',
'/offline-games/sudoku/static/images/icon.png',
'/offline-games/sudoku/static/js/app.js',
'/offline-games/sudoku/static/js/constant.js',
'/offline-games/sudoku/static/js/sudoku.js',
//24
'/offline-games/typing-speed/index.html',
//25
'/offline-games/word-guess/index.html',
//26
'/offline-games/word-master/assets/countries.jpg',
'/offline-games/word-master/assets/food.jpg',
'/offline-games/word-master/assets/fruits.jpg',
'/offline-games/word-master/assets/hobbies.jpg',
'/offline-games/word-master/assets/logo.png',
'/offline-games/word-master/assets/music.jpg',
'/offline-games/word-master/assets/professions.jpg',
'/offline-games/word-master/assets/school.jpg',
'/offline-games/word-master/assets/sports.jpg',
'/offline-games/word-master/assets/superheroes.jpg',
'/offline-games/word-master/assets/tiger.jpg',
'/offline-games/word-master/categories.html',
'/offline-games/word-master/game.html',
'/offline-games/word-master/index.html',
'/offline-games/word-master/script.js',
'/offline-games/word-master/styles.css',
//27
'/offline-games/xoxo/index.html',
    
    

//all tools file Path
'/tool-1/Age Calculator 8/index.html',
'/tool-1/Base64 to Image 28/index.html',
'/tool-1/Calculator 14/index.html',
'/tool-1/Case Converter Uppercase Lowercase 4/index.html',
'/tool-1/Character Counter 3/index.html',
'/tool-1/Color Code Converter 16/index.html',
'/tool-1/Days Between Dates Calculator 26/index.html',
'/offline-games/main/tool-1/EXIF data viewer 50/index.html',
'/tool-1/EXIF data viewer 50/script.js',
'/tool-1/EXIF data viewer 50/styles.css',
'/tool-1/Emoji Combiner 42/index.html',
'/tool-1/Emoji Text translator 39/emoji-data.js',
'/tool-1/Emoji Text translator 39/index.html',
'/tool-1/Emoji Text translator 39/script.js',
'/tool-1/Emoji Text translator 39/style.css',
'/tool-1/Emoji Text translator 39/tailwind.css',
'/tool-1/Fake Tweet generator 32/index.html',
'/tool-1/Fake Tweet generator 32/script.js',
'/tool-1/Fake Tweet generator 32/style.css',
'/tool-1/Friendship Calculator 46/index.html',
'/tool-1/Funny Font Style Converter 35/index.html',
'/tool-1/Funny Font Style Converter 35/script.js',
'/tool-1/Funny Font Style Converter 35/style.css',
'/tool-1/Funny Nickname  Crush Name Combiner 47/index.html',
'/tool-1/Invisible Ink Text Generator 44/app.js',
'/tool-1/Invisible Ink Text Generator 44/index.html',
'/tool-1/Invisible Ink Text Generator 44/styles.css',
'/tool-1/Loan Calculator 10/index.html',
'/tool-1/Lucky Number  Mood Detector 48/index.html',
'/tool-1/Morse Code translator 38/index.html',
'/tool-1/Morse Code translator 38/script.js',
'/tool-1/Number to Word converter 7/index.html',
'/tool-1/Online Stopwatch 17/index.html',
'/tool-1/Password Generator 5/index.html',
'/tool-1/Pig Latin And translator 40/index.html',
'/tool-1/QR Code Generator 12/index.html',
'/tool-1/Random Funny Quote Generator 43/index.html',
'/tool-1/Random Number Generator 24/index.html',
'/tool-1/Reverse Text generator 33/index.html',
'/tool-1/Reverse Text generator 33/script.js',
'/tool-1/Reverse Text generator 33/styles.css',
'/tool-1/Text Glitch Effect generator 36/index.html',
'/tool-1/Text Repeater 6/index.html',
'/tool-1/Text to Binary  Binary to Text Converter 27/index.html',
'/tool-1/Text to Emoji Art generator 41/index.html',
'/tool-1/Typewriter Animation Text 37/index.html',
'/tool-1/Typewriter Animation Text 37/script.js',
'/tool-1/Upside down Text generator 34/index.html',
'/tool-1/Zalgo Sarcasm Text Generator 45/index.html',
'/tool-1/bmi calculator 9/index.html',
'/tool-1/color picker 15/index.html',
'/tool-1/countdown timer 18/index.html',
'/tool-1/fake Facebook status generator 30/index.html',
'/tool-1/fake instagram post generator 31/index.html',
'/tool-1/fake instagram post generator 31/script.js',
'/tool-1/fake internet speed test 19/index.html',
'/tool-1/image filter tool 29/index.html',
'/tool-1/internet speed test 21/index.html',
'/tool-1/love calculator 20/index.html',
'/tool-1/meta tag generator 22/index.html',
'/tool-1/percentage calculator 25/index.html',
'/tool-1/privacy policy generator 23/index.html',
'/tool-1/random food picker 49/index.html',
'/tool-1/text Comparison 13/index.html',
'/tool-1/text to speech converter 1/index.html',
'/tool-1/unit converter 11/index.html',
'/tool-1/word counter 2/index.html',
 '/tool-1/QR Code Scanner 51/index.html',
'/tool-1/QR Code Scanner 51/script.js',
'/tool-1/QR Code Scanner 51/qr-code-generator.html',
'/tool-1/QR Code Scanner 51/image-qr-code-scanner.html',   
    '/offlinegameadd.json'   
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching core assets');
            return cache.addAll(CORE_ASSETS);
        }).then(() => {
            console.log('[Service Worker] Installed successfully');
            return self.skipWaiting();
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== OFFLINE_CACHE) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('[Service Worker] Activated successfully');
            return self.clients.claim();
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip cross-origin requests
    if (url.origin !== location.origin) {
        return;
    }

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                // Return cached version and update cache in background
                fetchAndCache(request);
                return cachedResponse;
            }

            // Not in cache, fetch from network
            return fetch(request).then((response) => {
                // Don't cache if not a success response
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }

                // Clone the response
                const responseToCache = response.clone();

                // Cache the new resource
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(request, responseToCache);
                });

                return response;
            }).catch(() => {
                // Network failed, try to return cached version
                return caches.match(request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    // Return offline page if available
                    if (request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                });
            });
        })
    );
});

// Background fetch and cache update
function fetchAndCache(request) {
    fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'error') {
            return;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
        });
    }).catch(() => {
        // Silently fail - we're already serving from cache
    });
}

// Message event - handle messages from clients
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'CACHE_URLS') {
        const urls = event.data.urls;
        event.waitUntil(
            caches.open(OFFLINE_CACHE).then((cache) => {
                return cache.addAll(urls);
            })
        );
    }

    if (event.data && event.data.type === 'CLEAR_OLD_CACHE') {
        const maxAge = 10 * 24 * 60 * 60 * 1000; // 10 days
        event.waitUntil(clearOldCache(maxAge));
    }
});

// Clear old cached items
async function clearOldCache(maxAge) {
    const cacheNames = await caches.keys();
    const now = Date.now();

    for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();

        for (const request of requests) {
            const response = await cache.match(request);
            const dateHeader = response.headers.get('date');
            
            if (dateHeader) {
                const cacheTime = new Date(dateHeader).getTime();
                if (now - cacheTime > maxAge) {
                    await cache.delete(request);
                    console.log('[Service Worker] Deleted old cache:', request.url);
                }
            }
        }
    }
}

// Periodic background sync (if supported)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-games') {
        event.waitUntil(syncGames());
    }
});

async function syncGames() {
    try {
        const [onlineResponse, offlineResponse] = await Promise.all([
            fetch('/onlinegameadd.json'),
            fetch('/offlinegameadd.json')
        ]);

        const cache = await caches.open(CACHE_NAME);
        await cache.put('/onlinegameadd.json', onlineResponse.clone());
        await cache.put('/offlinegameadd.json', offlineResponse.clone());

        console.log('[Service Worker] Games synced successfully');
    } catch (error) {
        console.error('[Service Worker] Sync failed:', error);
    }
}

// Push notification event (for future feature)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New games available!',
        icon: '/icon/icon-192.png',
        badge: '/icon/icon-72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification('Game Portal', options)
    );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    event.waitUntil(
        clients.openWindow('/')
    );
});