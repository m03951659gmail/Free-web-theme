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
  //website all File
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
    '/offlinegameadd.json',
    '/service-worker.js',
    //pwa app icon
    '/icon/icon-128.png',
    '/icon/icon-96.png',
    '/icon/icon-72.png',
    '/icon/icon-512.png',
    '/icon/icon-384.png',
    '/icon/icon-192.png',
    '/icon/icon-152.png',
    '/icon/icon-144.png',
 
     
    //all Game Save 
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
'/offline-games/puzzle-master/css/slick.css',
'/offline-games/puzzle-master/css/style.css',
'/offline-games/puzzle-master/images/cat.jpg',
'/offline-games/puzzle-master/images/hourse.png',
'/offline-games/puzzle-master/images/jigsaw.png',
'/offline-games/puzzle-master/images/lion.png',
'/offline-games/puzzle-master/images/monkey.png',
'/offline-games/puzzle-master/index.html',
'/offline-games/puzzle-master/js/jigsaw.js',
'/offline-games/puzzle-master/js/script.js',
'/offline-games/puzzle-master/js/slick.min.js',
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
