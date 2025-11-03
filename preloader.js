/**
 * Smart Background Preloader for "All in one tools website"
 * এই স্ক্রিপ্টটি আপনার ওয়েবসাইটের ফাইলগুলিকে ব্যাকগ্রাউন্ডে লোড করে
 * যাতে ব্যবহারকারীর অভিজ্ঞতা আরও দ্রুত এবং মসৃণ হয়।
 *
 * বৈশিষ্ট্য:
 * 1. Background Loading: ব্যবহারকারীকে ডিস্টার্ব না করে লোড হয়।
 * 2. Batch Processing: একবারে সব ফাইল লোড না করে ছোট ছোট ব্যাচে লোড করে।
 * 3. Connection Aware: নেটওয়ার্ক স্পিড অনুযায়ী লোডিং অ্যাডজাস্ট করে।
 */

// --- ১. আপনার ফাইলের তালিকা ---
// আপনার ওয়েবসাইটের সমস্ত HTML, JSON, CSS, বা গুরুত্বপূর্ণ ছবির পাথ এখানে যোগ করুন।
const filesToPreload = [
    '/icon/icon-128.png',
    '/icon/icon-96.png',
    '/icon/icon-72.png',
    '/icon/icon-512.png',
    '/icon/icon-384.png',
    '/icon/icon-192.png',
    '/icon/icon-152.png',
    '/icon/icon-144.png',
 
     
    
    
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
    
    '/offlinegameadd.json',
];

// --- ২. প্রিলোডার কনফিগারেশন ---
const DEFAULT_BATCH_SIZE = 5; // সাধারণ নেটওয়ার্কে প্রতি ব্যাচে ফাইলের সংখ্যা
const SLOW_BATCH_SIZE = 2;    // স্লো নেটওয়ার্কে প্রতি ব্যাচে ফাইলের সংখ্যা
const FAST_BATCH_SIZE = 8;    // ফাস্ট নেটওয়ার্কে প্রতি ব্যাচে ফাইলের সংখ্যা
const DELAY_BETWEEN_BATCHES = 1000; // প্রতি ব্যাচের মধ্যে ১ সেকেন্ড দেরি

/**
 * একটি রিসোর্স ফেচ (fetch) করে ব্রাউজার ক্যাশে (cache) জমা রাখে।
 * @param {string} url - যে ফাইলটি প্রিলোড করতে হবে তার URL.
 */
async function preloadResource(url) {
    try {
        // আমরা 'default' ক্যাশ ব্যবহার করছি। ব্রাউজার নিজে থেকেই ঠিক করবে।
        const response = await fetch(url, { method: 'GET', cache: 'default' });

        if (!response.ok) {
            console.warn(`প্রিলোড ব্যর্থ: ${url} (Status: ${response.status})`);
        } else {
            // রেসপন্স দিয়ে কিছু করার দরকার নেই,
            // শুধু ফেচ করলেই ব্রাউজার এটি ক্যাশ করে ফেলবে।
            console.log(`প্রিলোড সম্পন্ন: ${url}`);
        }
    } catch (error) {
        // নেটওয়ার্ক বা অন্য কোনো সমস্যায় এরর দেখাতে পারে।
        console.error(`প্রিলোড এরর ${url}:`, error.message);
    }
}

/**
 * ফাইলের তালিকাটি ব্যাচ অনুযায়ী প্রসেস করে।
 * @param {string[]} fileQueue - বাকি থাকা ফাইলের তালিকা।
 * @param {number} batchSize - প্রতি ব্যাচে কয়টি ফাইল লোড হবে।
 */
async function processQueue(fileQueue, batchSize) {
    // যদি কোনো ফাইল বাকি না থাকে, তবে কাজ শেষ।
    if (fileQueue.length === 0) {
        console.log('সমস্ত ফাইল সফলভাবে প্রিলোড করা হয়েছে।');
        return;
    }

    // পরবর্তী ব্যাচের জন্য ফাইল আলাদা করা
    const batch = fileQueue.slice(0, batchSize);
    const remainingFiles = fileQueue.slice(batchSize);

    console.log(`বর্তমান ব্যাচে ${batch.length} টি ফাইল লোড হচ্ছে... বাকি আছে ${remainingFiles.length} টি।`);

    // বর্তমান ব্যাচের সব ফাইলকে একবারে ফেচ করার জন্য প্রমিস তৈরি করা
    const preloadPromises = batch.map(preloadResource);

    // ব্যাচের সব ফাইল লোড (বা ফেইল) হওয়ার জন্য অপেক্ষা করা
    await Promise.allSettled(preloadPromises);

    // পরবর্তী ব্যাচ শুরু করার আগে কিছুক্ষণ অপেক্ষা করা
    setTimeout(() => {
        processQueue(remainingFiles, batchSize);
    }, DELAY_BETWEEN_BATCHES);
}

/**
 * নেটওয়ার্কের অবস্থা দেখে ব্যাচের সাইজ ঠিক করে।
 * @returns {number} - ব্যাচের সাইজ (0 হলে প্রিলোড বন্ধ থাকবে)।
 */
function getBatchSize() {
    // 'Connection Aware' API চেক করা
    if ('connection' in navigator) {
        const conn = navigator.connection;

        // যদি ব্যবহারকারী 'Data Saver' মোড চালু রাখে, তবে প্রিলোড বন্ধ রাখা
        if (conn.saveData) {
            console.log('Data saver চালু আছে। প্রিলোড বন্ধ রাখা হলো।');
            return 0; // 0 রিটার্ন করলে প্রিলোড শুরু হবে না
        }

        // নেটওয়ার্কের ধরন অনুযায়ী ব্যাচ সাইজ ঠিক করা
        switch (conn.effectiveType) {
            case 'slow-2g':
            case '2g':
                return SLOW_BATCH_SIZE; // খুব স্লো নেটওয়ার্ক
            case '3g':
                return DEFAULT_BATCH_SIZE; // মাঝারি নেটওয়ার্ক
            case '4g':
                return FAST_BATCH_SIZE; // ফাস্ট নেটওয়ার্ক
            default:
                return DEFAULT_BATCH_SIZE;
        }
    }
    // যদি 'connection' API সাপোর্ট না করে, তবে ডিফল্ট সাইজ ব্যবহার করা
    return DEFAULT_BATCH_SIZE;
}

/**
 * প্রিলোডার চালু করার প্রধান ফাংশন।
 */
function startPreloader() {
    const batchSize = getBatchSize();

    if (batchSize > 0 && filesToPreload.length > 0) {
        // ফাইলের তালিকা ঠিক থাকলে প্রসেস শুরু করা
        processQueue([...filesToPreload], batchSize);
    } else if (filesToPreload.length === 0) {
        console.warn('প্রিলোডার: তালিকায় কোনো ফাইল যোগ করা হয়নি।');
    }
}

// --- ৩. প্রিলোডার চালু করা ---
// আমরা 'load' ইভেন্টের জন্য অপেক্ষা করবো।
// এর মানে হলো, আপনার ওয়েবসাইটের মূল কন্টেন্ট লোড হওয়ার *পরে*
// এই ব্যাকগ্রাউন্ড লোডিং শুরু হবে।
// এতে আপনার সাইটের প্রাথমিক লোডিংয়ে কোনো বাধা পড়বে না।
window.addEventListener('load', () => {
    // মূল পেজ লোড হওয়ার পরও ১ সেকেন্ড দেরি করা, যাতে সব স্বাভাবিক হয়ে আসে
    setTimeout(startPreloader, 600);
});