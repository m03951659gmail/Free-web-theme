// indexeddb-save.js
// ============================
// IndexedDB দিয়ে file, image, data লোকালিতে সেভ করার সিস্টেম
// ============================

const DB_NAME = "WebsiteLocalFilesDB";
const DB_VERSION = 1;
const STORE_NAME = "files";

let db;

// ✅ Database খুলা / তৈরি করা
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "url" });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      console.log("✅ IndexedDB connected successfully");
      resolve(db);
    };

    request.onerror = (event) => {
      console.error("❌ IndexedDB error:", event.target.error);
      reject(event.target.error);
    };
  });
}

// ✅ File ডাউনলোড করে IndexedDB-তে সেভ করা
async function saveFileToDB(url) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    store.put({
      url: url,
      blob: blob,
      savedAt: new Date().toISOString(),
    });

    console.log(`📦 Saved file: ${url}`);
  } catch (err) {
    console.error("❌ Save failed:", err);
  }
}

// ✅ File IndexedDB থেকে পাওয়া
function getFileFromDB(url) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(url);

    request.onsuccess = (event) => {
      const record = event.target.result;
      if (record) {
        resolve(URL.createObjectURL(record.blob));
      } else {
        reject("File not found in DB");
      }
    };

    request.onerror = () => reject("DB read error");
  });
}

// ✅ File লোড করার helper
async function loadFile(url, elementSelector) {
  try {
    let fileURL;
    if (navigator.onLine) {
      // Online হলে server থেকে ফাইল এনে সেভ করো
      await saveFileToDB(url);
      fileURL = url;
    } else {
      // Offline হলে IndexedDB থেকে ফাইল লোড করো
      fileURL = await getFileFromDB(url);
      console.log(`📂 Loaded offline file: ${url}`);
    }

    // elementSelector অনুযায়ী ফাইল দেখানো
    const element = document.querySelector(elementSelector);
    if (element && element.tagName === "IMG") {
      element.src = fileURL;
    } else if (element && element.tagName === "VIDEO") {
      element.src = fileURL;
    } else if (element && element.tagName === "AUDIO") {
      element.src = fileURL;
    }
  } catch (err) {
    console.warn(`⚠️ Could not load ${url}:`, err);
  }
}

// ✅ Database শুরু করা এবং সব ফাইল সেভ করা
(async function initIndexedDB() {
  await openDB();

  // এখানে তোমার website-এর file/image/data গুলো add করো 👇
  const filesToSave = [
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
    
    '/offlineicon',
    '/offlineicon/memory-match/icon.png',
    '/offlineicon/pong/icon.png',
    '/offlineicon/snake/icon.png',
    '/offlineicon/tetris/icon.png',
    '/offlineicon/tic-tac-toe/icon.png',
    
    '/offline-games',
    '/offline-games/memory-match',
    '/offline-games/memory-match/index.html',
    '/offline-games/memory-match/script.js',
    '/offline-games/memory-match/style.css',
    
    '/offline-games/pong',
    '/offline-games/pong/index.html',
    '/offline-games/pong/script.js',
    '/offline-games/pong/style.css',
    
    '/offline-games',
    '/onlinegameadd.json',
    '/onlinegameadd.json',
    '/onlinegameadd.json',
    
    '/offline-games',
    '/onlinegameadd.json',
    '/onlinegameadd.json',
    '/onlinegameadd.json',
    
    '/offline-games',
    '/onlinegameadd.json',
    '/onlinegameadd.json',
    '/onlinegameadd.json',
    
    
    '/icon/icon-128.png',
     '/icon/icon-96.png',
     '/icon/icon-72.png',
     '/icon/icon-512.png',
     '/icon/icon-384.png',
     '/icon/icon-192.png',
     '/icon/icon-152.png',
     '/icon/icon-144.png',
    
    
      '/service-worker.js',
    
    '/offlinegameadd.json',
  ];

  if (navigator.onLine) {
    console.log("🌐 Online — Saving files to IndexedDB...");
    for (const file of filesToSave) {
      await saveFileToDB(file);
    }
  } else {
    console.log("📴 Offline — Files will load from IndexedDB...");
  }
})();
