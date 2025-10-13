// Add Firebase Configuration
// ⚠️ আপনার Firebase কনফিগারেশন দিয়ে নিচের অংশটি পরিবর্তন করুন
const firebaseConfig = {
    apiKey: "AIzaSyDOHM_mVxVVrFPWb545mIucoSW4fBJQamk",
  authDomain: "gamar-421515.firebaseapp.com",
  databaseURL: "https://gamar-421515-default-rtdb.firebaseio.com",
  projectId: "gamar-421515",
  storageBucket: "gamar-421515.appspot.com",
  messagingSenderId: "441909945114",
  appId: "1:441909945114:web:08db60dd1a604713c882a3",
  measurementId: "G-2R0FC5DW33"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database();
} else {
    console.error("Firebase SDK not loaded. Check your HTML setup.");
}

// Global State
let allGames = [];
let onlineGames = [];
let offlineGames = [];
let displayedGames = [];
let currentCategory = 'all';
let currentSearchTerm = '';
let currentPage = 0;
const gamesPerPage = 2000000000;
let isLoading = false;
let isOfflineMode = false;
let clickData = {}; // ⭐ নতুন: Firebase থেকে লোড হওয়া ক্লিক ডেটা

// DOM Elements (No changes here, keeping your original list)
const gamesGrid = document.getElementById('games-grid');
const recentGamesGrid = document.getElementById('recent-games');
const recentSection = document.getElementById('recent-section');
const searchInput = document.getElementById('search-input');
const categoriesWrapper = document.querySelector('.categories-wrapper');
const loadingSpinner = document.getElementById('loading-spinner');
const noResults = document.getElementById('no-results');
const themeToggle = document.getElementById('theme-toggle');
const gameViewer = document.getElementById('game-viewer');
const gameIframe = document.getElementById('game-iframe');
const gameTitle = document.getElementById('game-title');
const closeGameBtn = document.getElementById('close-game-btn');
const fullscreenGameBtn = document.getElementById('fullscreen-game-btn');
const networkStatus = document.getElementById('network-status');
const networkMessage = document.getElementById('network-message');
const gamesSectionTitle = document.getElementById('games-section-title');

// Initialize App
async function init() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon();

    checkCacheExpiry();

    await loadGames(); // Load games and sort them

    loadRecentGames();

    setupEventListeners();

    updateNetworkStatus();

    setupInfiniteScroll();
}

// Load Games from JSON files (Modified to include sorting)
async function loadGames() {
    try {
        const cachedOnlineGames = getCachedData('onlineGames');
        const cachedOfflineGames = getCachedData('offlineGames');

        if (navigator.onLine) {
            // Online: Fetch fresh data
            const [onlineResponse, offlineResponse] = await Promise.all([
                fetch('onlinegameadd.json'),
                fetch('offlinegameadd.json')
            ]);

            onlineGames = await onlineResponse.json();
            offlineGames = await offlineResponse.json();

            setCachedData('onlineGames', onlineGames);
            setCachedData('offlineGames', offlineGames);
        } else {
            // Offline: Use cached data
            onlineGames = cachedOnlineGames || [];
            offlineGames = cachedOfflineGames || [];
            isOfflineMode = true;
        }

        // Combine all games
        allGames = [...onlineGames, ...offlineGames];
        
        // ⭐ নতুন লজিক: Firebase থেকে ক্লিক লোড এবং গেম সর্টিং
        if (!isOfflineMode && typeof db !== 'undefined') {
            loadingSpinner.classList.remove('hidden');
            await loadClickCounts(); // ক্লিক ডেটা লোড
            sortGamesByClicks();    // ক্লিক অনুযায়ী গেম সাজানো
            loadingSpinner.classList.add('hidden');
        }
        // ⭐ নতুন লজিক শেষ

        generateCategories();
        displayGames();

    } catch (error) {
        console.error('Error loading games:', error);
        
        const cachedOnlineGames = getCachedData('onlineGames');
        const cachedOfflineGames = getCachedData('offlineGames');
        
        if (cachedOnlineGames || cachedOfflineGames) {
            onlineGames = cachedOnlineGames || [];
            offlineGames = cachedOfflineGames || [];
            allGames = [...onlineGames, ...offlineGames];
            isOfflineMode = true;
            generateCategories();
            displayGames();
        }
    }
}

// ⭐ নতুন ফাংশন: Firebase থেকে ক্লিক কাউন্ট লোড করা
async function loadClickCounts() {
    try {
        const snapshot = await db.ref('game_clicks').once('value');
        clickData = snapshot.val() || {}; // গ্লোবাল clickData ভেরিয়েবলে সেভ
        
        // সব গেমে ক্লিক কাউন্ট যোগ করা
        allGames.forEach(game => {
            const clicks = clickData[game.id] || 0; 
            game.clicks = clicks;
        });
        
    } catch (error) {
        console.error("Error loading click counts from Firebase:", error);
    }
}

// ⭐ নতুন ফাংশন: ক্লিক কাউন্ট অনুযায়ী গেম সাজানো
function sortGamesByClicks() {
    // শুধুমাত্র অল গেমস (allGames) কে সর্ট করা হবে
    allGames.sort((a, b) => {
        const clickA = a.clicks || 0;
        const clickB = b.clicks || 0;
        
        // ডিসেন্ডিং অর্ডারে সাজান (বেশি ক্লিক প্রথমে)
        if (clickB !== clickA) {
            return clickB - clickA; 
        }
        
        // যদি ক্লিক সংখ্যা সমান হয়, তাহলে নামের Alphabetical অর্ডারে সাজান
        return a.name.localeCompare(b.name);
    });
}

// Generate Categories from Games (Original Code)
function generateCategories() {
    const categories = new Set();
    allGames.forEach(game => {
        if (game.category) {
            categories.add(game.category.toLowerCase());
        }
    });

    const allButton = categoriesWrapper.querySelector('[data-category="all"]');
    categoriesWrapper.innerHTML = '';
    categoriesWrapper.appendChild(allButton);

    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.setAttribute('data-category', category);
        btn.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoriesWrapper.appendChild(btn);
    });
}

// Filter Games (Original Code)
function filterGames() {
    let filtered = allGames;

    if (currentCategory !== 'all') {
        filtered = filtered.filter(game => 
            game.category && game.category.toLowerCase() === currentCategory
        );
    }

    if (currentSearchTerm) {
        filtered = filtered.filter(game =>
            game.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            (game.description && game.description.toLowerCase().includes(currentSearchTerm.toLowerCase()))
        );
    }

    if (isOfflineMode) {
        filtered = filtered.filter(game => offlineGames.some(og => og.id === game.id));
    }

    return filtered;
}

// Display Games (Original Code)
function displayGames(append = false) {
    const filtered = filterGames();
    
    if (!append) {
        currentPage = 0;
        gamesGrid.innerHTML = '';
        displayedGames = [];
    }

    const start = currentPage * gamesPerPage;
    const end = start + gamesPerPage;
    const gamesToDisplay = filtered.slice(start, end);

    if (gamesToDisplay.length === 0 && displayedGames.length === 0) {
        noResults.classList.remove('hidden');
        gamesGrid.classList.add('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
        gamesGrid.classList.remove('hidden');
    }

    gamesToDisplay.forEach(game => {
        const card = createGameCard(game);
        gamesGrid.appendChild(card);
        displayedGames.push(game);
    });

    currentPage++;

    if (currentCategory === 'all') {
        gamesSectionTitle.textContent = isOfflineMode ? 'Offline Games' : 'All Games';
    } else {
        gamesSectionTitle.textContent = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    }
}

// Create Game Card (Original Code)
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('data-game-id', game.id);

    // ⭐ নতুন: কার্ডে ক্লিক কাউন্ট ডিসপ্লে করা
    const clickCount = game.clicks !== undefined ? game.clicks : clickData[game.id] || 0;
    const clickDisplay = clickCount > 0 ? `<span class="game-card-clicks">🔥 ${clickCount} clicks</span>` : '';
    // ⭐ নতুন শেষ

    const isOffline = offlineGames.some(og => og.id === game.id);

    card.innerHTML = `
        <div class="game-card-image">
            <img src="${game.icon}" alt="${game.name}" loading="lazy" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22180%22%3E%3Crect fill=%22%23ddd%22 width=%22280%22 height=%22180%22/%3E%3Ctext fill=%22%23999%22 font-family=%22Arial%22 font-size=%2218%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E'">
        </div>
        <div class="game-card-content">
            <h3 class="game-card-title">${game.name}</h3>
            <p class="game-card-description">${game.description || 'No description available'}</p>
            <div class="game-card-footer">
                <span class="game-card-category">${game.category || 'gaming'}</span>
                ${clickDisplay}
                ${isOffline ? '<span class="game-card-badge">Offline</span>' : ''}
            </div>
        </div>
    `;

    card.addEventListener('click', () => openGame(game));

    return card;
}

// Open Game in Iframe (Modified to track clicks)
function openGame(game) {
    gameTitle.textContent = game.name;
    gameIframe.src = game.url;
    gameViewer.classList.remove('hidden');
    document.getElementById('main-content').classList.add('hidden');

    // ⭐ নতুন লজিক: Firebase-এ ক্লিক ট্র‍্যাক করা
    if (!isOfflineMode && typeof db !== 'undefined') {
        trackGameClick(game.id);
    }
    // ⭐ নতুন লজিক শেষ

    saveRecentGame(game);
}

// ⭐ নতুন ফাংশন: Firebase Realtime Database-এ ক্লিক আপডেট করা
function trackGameClick(gameId) {
    const clickRef = db.ref('game_clicks/' + gameId);
    
    // Atomically increment the click count
    clickRef.transaction((currentClicks) => {
        return (currentClicks || 0) + 1;
    }, (error, committed, snapshot) => {
        if (error) {
            console.error("Transaction failed: ", error);
        } else if (committed) {
            console.log(`Game ${gameId} click tracked. New count: ${snapshot.val()}`);
        }
    });
}

// Close Game (Original Code)
function closeGame() {
    gameIframe.src = '';
    gameViewer.classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
}

// Toggle Fullscreen (Original Code)
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        gameViewer.requestFullscreen().catch(err => {
            console.error('Error attempting to enable fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Load Recent Games (Original Code)
function loadRecentGames() {
    const recentGames = getRecentGames();
    
    if (recentGames.length === 0) {
        recentSection.classList.add('hidden');
        return;
    }

    recentSection.classList.remove('hidden');
    recentGamesGrid.innerHTML = '';

    recentGames.forEach(game => {
        const card = createGameCard(game);
        recentGamesGrid.appendChild(card);
    });
}

// Get Recent Games from LocalStorage (Original Code)
function getRecentGames() {
    const recent = localStorage.getItem('recentGames');
    if (!recent) return [];
    
    try {
        const recentIds = JSON.parse(recent);
        return recentIds
            .map(id => allGames.find(game => game.id === id))
            .filter(game => game !== undefined)
            .slice(0, 4);
    } catch (error) {
        return [];
    }
}

// Save Recent Game (Original Code)
function saveRecentGame(game) {
    let recent = [];
    const stored = localStorage.getItem('recentGames');
    
    if (stored) {
        try {
            recent = JSON.parse(stored);
        } catch (error) {
            recent = [];
        }
    }

    recent = recent.filter(id => id !== game.id);
    recent.unshift(game.id);
    recent = recent.slice(0, 4);
    
    localStorage.setItem('recentGames', JSON.stringify(recent));
    
    loadRecentGames();
}

// Cache Data in LocalStorage (Original Code)
function setCachedData(key, data) {
    const cacheData = {
        data: data,
        timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
}

// Get Cached Data from LocalStorage (Original Code)
function getCachedData(key) {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    try {
        const { data, timestamp } = JSON.parse(cached);
        const age = Date.now() - timestamp;
        const maxAge = 10 * 24 * 60 * 60 * 1000;
        
        if (age > maxAge) {
            localStorage.removeItem(key);
            return null;
        }
        
        return data;
    } catch (error) {
        return null;
    }
}

// Check and Clear Expired Cache (Original Code)
function checkCacheExpiry() {
    const lastCheck = localStorage.getItem('lastCacheCheck');
    const now = Date.now();
    
    if (!lastCheck || (now - parseInt(lastCheck)) > (24 * 60 * 60 * 1000)) {
        ['onlineGames', 'offlineGames'].forEach(key => {
            getCachedData(key);
        });
        
        localStorage.setItem('lastCacheCheck', now.toString());
    }
}

// Update Network Status (Original Code)
function updateNetworkStatus() {
    if (navigator.onLine) {
        networkStatus.classList.add('hidden');
        isOfflineMode = false;
    } else {
        networkStatus.classList.remove('hidden');
        networkStatus.classList.remove('online');
        networkMessage.textContent = '⚠️ You are offline. Showing cached games.';
        isOfflineMode = true;
    }
}

// Update Theme Icon (Original Code)
function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    
    if (theme === 'dark') {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}

// Setup Infinite Scroll (Original Code)
function setupInfiniteScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isLoading) {
                const filtered = filterGames();
                const hasMore = (currentPage * gamesPerPage) < filtered.length;
                
                if (hasMore) {
                    isLoading = true;
                    loadingSpinner.classList.remove('hidden');
                    
                    setTimeout(() => {
                        displayGames(true);
                        loadingSpinner.classList.add('hidden');
                        isLoading = false;
                    }, 500);
                }
            }
        });
    }, { threshold: 0.5 });

    observer.observe(loadingSpinner);
}

// Setup Event Listeners (Original Code)
function setupEventListeners() {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon();
    });

    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        displayGames();
    });

    categoriesWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            currentCategory = e.target.getAttribute('data-category');
            displayGames();
        }
    });

    closeGameBtn.addEventListener('click', closeGame);
    fullscreenGameBtn.addEventListener('click', toggleFullscreen);

    window.addEventListener('online', () => {
        updateNetworkStatus();
        loadGames();
    });

    window.addEventListener('offline', () => {
        updateNetworkStatus();
        displayGames();
    });

    document.querySelector('.logo').addEventListener('click', () => {
        location.reload();
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
