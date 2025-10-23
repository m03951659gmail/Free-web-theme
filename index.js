const _0x3b5ff7 = _0xf33d;
(function (_0x5008d3, _0x121280) {
    const _0x5837a6 = _0xf33d, _0x5f138c = _0x5008d3();
    while (!![]) {
        try {
            const _0x459a5f = -parseInt(_0x5837a6(0x1f5)) / 0x1 + -parseInt(_0x5837a6(0x22c)) / 0x2 + -parseInt(_0x5837a6(0x1e2)) / 0x3 + parseInt(_0x5837a6(0x1d6)) / 0x4 * (-parseInt(_0x5837a6(0x20c)) / 0x5) + parseInt(_0x5837a6(0x231)) / 0x6 + -parseInt(_0x5837a6(0x21e)) / 0x7 * (-parseInt(_0x5837a6(0x20f)) / 0x8) + parseInt(_0x5837a6(0x227)) / 0x9;
            if (_0x459a5f === _0x121280)
                break;
            else
                _0x5f138c['push'](_0x5f138c['shift']());
        } catch (_0x3f675b) {
            _0x5f138c['push'](_0x5f138c['shift']());
        }
    }
}(_0x4a16, 0xa9009));
const firebaseConfig = {
    'apiKey': _0x3b5ff7(0x1fa),
    'authDomain': 'gamar-421515.firebaseapp.com',
    'databaseURL': _0x3b5ff7(0x209),
    'projectId': 'gamar-421515',
    'storageBucket': _0x3b5ff7(0x237),
    'messagingSenderId': _0x3b5ff7(0x235),
    'appId': _0x3b5ff7(0x1ed),
    'measurementId': _0x3b5ff7(0x1c5)
};
if (typeof firebase !== _0x3b5ff7(0x1ef)) {
    firebase[_0x3b5ff7(0x1b9)](firebaseConfig);
    var db = firebase[_0x3b5ff7(0x1f9)]();
} else
    console[_0x3b5ff7(0x223)](_0x3b5ff7(0x1e0));
let allGames = [], onlineGames = [], offlineGames = [], displayedGames = [], currentCategory = 'all', currentSearchTerm = '', currentPage = 0x0;
const gamesPerPage = 0xc8;
let isLoading = ![], isOfflineMode = ![], clickData = {};
const gamesGrid = document[_0x3b5ff7(0x203)](_0x3b5ff7(0x1cf)), recentGamesGrid = document[_0x3b5ff7(0x203)]('recent-games'), recentSection = document['getElementById']('recent-section'), searchInput = document['getElementById'](_0x3b5ff7(0x1d5)), categoriesWrapper = document[_0x3b5ff7(0x210)](_0x3b5ff7(0x204)), loadingSpinner = document['getElementById'](_0x3b5ff7(0x217)), noResults = document[_0x3b5ff7(0x203)](_0x3b5ff7(0x20b)), themeToggle = document[_0x3b5ff7(0x203)](_0x3b5ff7(0x1df)), gameViewer = document[_0x3b5ff7(0x203)](_0x3b5ff7(0x1e3)), gameIframe = document[_0x3b5ff7(0x203)](_0x3b5ff7(0x230)), gameTitle = document[_0x3b5ff7(0x203)]('game-title'), closeGameBtn = document['getElementById'](_0x3b5ff7(0x1dd)), fullscreenGameBtn = document[_0x3b5ff7(0x203)]('fullscreen-game-btn'), networkStatus = document[_0x3b5ff7(0x203)](_0x3b5ff7(0x20e)), networkMessage = document[_0x3b5ff7(0x203)](_0x3b5ff7(0x21a)), gamesSectionTitle = document[_0x3b5ff7(0x203)]('games-section-title');
async function init() {
    const _0x5cc21f = _0x3b5ff7, _0xe1ca30 = localStorage['getItem'](_0x5cc21f(0x214)) || 'light';
    document[_0x5cc21f(0x1c2)]['setAttribute'](_0x5cc21f(0x206), _0xe1ca30), updateThemeIcon(), checkCacheExpiry(), await loadGames(), loadRecentGames(), setupEventListeners(), updateNetworkStatus(), setupInfiniteScroll();
}
async function loadGames() {
    const _0x79ef30 = _0x3b5ff7;
    try {
        const _0x26e7f3 = getCachedData(_0x79ef30(0x220)), _0x38a2df = getCachedData('offlineGames');
        if (navigator[_0x79ef30(0x1b7)]) {
            const [_0x21b819, _0x3b70bc] = await Promise[_0x79ef30(0x200)]([
                fetch(_0x79ef30(0x1ee)),
                fetch(_0x79ef30(0x1be))
            ]);
            onlineGames = await _0x21b819[_0x79ef30(0x216)](), offlineGames = await _0x3b70bc['json'](), setCachedData('onlineGames', onlineGames), setCachedData(_0x79ef30(0x211), offlineGames);
        } else
            onlineGames = _0x26e7f3 || [], offlineGames = _0x38a2df || [], isOfflineMode = !![];
        allGames = [
            ...onlineGames,
            ...offlineGames
        ], !isOfflineMode && typeof db !== _0x79ef30(0x1ef) && (loadingSpinner['classList'][_0x79ef30(0x1bb)]('hidden'), await loadClickCounts(), sortGamesByClicks(), loadingSpinner['classList'][_0x79ef30(0x1cc)]('hidden')), generateCategories(), displayGames();
    } catch (_0x1449ee) {
        console[_0x79ef30(0x223)](_0x79ef30(0x22f), _0x1449ee);
        const _0x445ce9 = getCachedData(_0x79ef30(0x220)), _0x1fccc2 = getCachedData('offlineGames');
        (_0x445ce9 || _0x1fccc2) && (onlineGames = _0x445ce9 || [], offlineGames = _0x1fccc2 || [], allGames = [
            ...onlineGames,
            ...offlineGames
        ], isOfflineMode = !![], generateCategories(), displayGames());
    }
}
async function loadClickCounts() {
    const _0x4b03e0 = _0x3b5ff7;
    try {
        const _0x3ff615 = await db['ref'](_0x4b03e0(0x1c3))['once']('value');
        clickData = _0x3ff615[_0x4b03e0(0x1fe)]() || {}, allGames[_0x4b03e0(0x236)](_0x16a150 => {
            const _0x23d89c = _0x4b03e0, _0x97b88a = clickData[_0x16a150['id']] || 0x0;
            _0x16a150[_0x23d89c(0x1d9)] = _0x97b88a;
        });
    } catch (_0x394948) {
        console[_0x4b03e0(0x223)](_0x4b03e0(0x1b8), _0x394948);
    }
}
function sortGamesByClicks() {
    const _0x319e8b = _0x3b5ff7;
    allGames[_0x319e8b(0x1e6)]((_0x4e5f1c, _0x305c59) => {
        const _0x49fe71 = _0x319e8b, _0x36f52b = _0x4e5f1c[_0x49fe71(0x1d9)] || 0x0, _0x5492c8 = _0x305c59[_0x49fe71(0x1d9)] || 0x0;
        if (_0x5492c8 !== _0x36f52b)
            return _0x5492c8 - _0x36f52b;
        return _0x4e5f1c[_0x49fe71(0x22d)][_0x49fe71(0x215)](_0x305c59['name']);
    });
}
function generateCategories() {
    const _0x422648 = _0x3b5ff7, _0x28867a = new Set();
    allGames['forEach'](_0x19f211 => {
        const _0xa6dfdd = _0xf33d;
        _0x19f211['category'] && _0x28867a[_0xa6dfdd(0x1cc)](_0x19f211[_0xa6dfdd(0x239)][_0xa6dfdd(0x1e4)]());
    });
    const _0x19999b = categoriesWrapper['querySelector']('[data-category=\x22all\x22]');
    categoriesWrapper[_0x422648(0x1bc)] = '', categoriesWrapper[_0x422648(0x213)](_0x19999b), _0x28867a[_0x422648(0x236)](_0x1c3c68 => {
        const _0x48dcf4 = _0x422648, _0x113449 = document['createElement'](_0x48dcf4(0x1f4));
        _0x113449[_0x48dcf4(0x1ba)] = 'category-btn', _0x113449[_0x48dcf4(0x1e9)](_0x48dcf4(0x1f1), _0x1c3c68), _0x113449[_0x48dcf4(0x1f2)] = _0x1c3c68[_0x48dcf4(0x1ea)](0x0)['toUpperCase']() + _0x1c3c68['slice'](0x1), categoriesWrapper[_0x48dcf4(0x213)](_0x113449);
    });
}
function filterGames() {
    const _0x3411d4 = _0x3b5ff7;
    let _0x1328ed = allGames;
    return currentCategory !== _0x3411d4(0x200) && (_0x1328ed = _0x1328ed[_0x3411d4(0x228)](_0xe52900 => _0xe52900[_0x3411d4(0x239)] && _0xe52900['category'][_0x3411d4(0x1e4)]() === currentCategory)), currentSearchTerm && (_0x1328ed = _0x1328ed[_0x3411d4(0x228)](_0x4cf661 => _0x4cf661['name'][_0x3411d4(0x1e4)]()[_0x3411d4(0x222)](currentSearchTerm[_0x3411d4(0x1e4)]()) || _0x4cf661['description'] && _0x4cf661['description'][_0x3411d4(0x1e4)]()[_0x3411d4(0x222)](currentSearchTerm[_0x3411d4(0x1e4)]()))), isOfflineMode && (_0x1328ed = _0x1328ed['filter'](_0x566fe9 => offlineGames['some'](_0x3067f4 => _0x3067f4['id'] === _0x566fe9['id']))), _0x1328ed;
}
function displayGames(_0x54172d = ![]) {
    const _0x45d74b = _0x3b5ff7, _0x5246fa = filterGames();
    !_0x54172d && (currentPage = 0x0, gamesGrid['innerHTML'] = '', displayedGames = []);
    const _0x5d5603 = currentPage * gamesPerPage, _0x429680 = _0x5d5603 + gamesPerPage, _0x4762e8 = _0x5246fa[_0x45d74b(0x1c0)](_0x5d5603, _0x429680);
    if (_0x4762e8[_0x45d74b(0x1d3)] === 0x0 && displayedGames[_0x45d74b(0x1d3)] === 0x0) {
        noResults[_0x45d74b(0x1eb)][_0x45d74b(0x1bb)]('hidden'), gamesGrid[_0x45d74b(0x1eb)]['add']('hidden');
        return;
    } else
        noResults[_0x45d74b(0x1eb)][_0x45d74b(0x1cc)](_0x45d74b(0x1c9)), gamesGrid['classList'][_0x45d74b(0x1bb)](_0x45d74b(0x1c9));
    _0x4762e8[_0x45d74b(0x236)](_0x14301c => {
        const _0x58fe39 = _0x45d74b, _0x47122b = createGameCard(_0x14301c);
        gamesGrid[_0x58fe39(0x213)](_0x47122b), displayedGames['push'](_0x14301c);
    }), currentPage++, currentCategory === _0x45d74b(0x200) ? gamesSectionTitle[_0x45d74b(0x1f2)] = isOfflineMode ? 'Offline\x20Games' : _0x45d74b(0x1e1) : gamesSectionTitle['textContent'] = currentCategory['charAt'](0x0)[_0x45d74b(0x22a)]() + currentCategory[_0x45d74b(0x1c0)](0x1);
}
function createGameCard(_0x24bd63) {
    const _0x52bae9 = _0x3b5ff7, _0x5ac93d = document[_0x52bae9(0x1e5)](_0x52bae9(0x22b));
    _0x5ac93d[_0x52bae9(0x1ba)] = 'game-card', _0x5ac93d[_0x52bae9(0x1e9)](_0x52bae9(0x1ff), _0x24bd63['id']);
    const _0x3ba0ff = _0x24bd63[_0x52bae9(0x1d9)] !== undefined ? _0x24bd63[_0x52bae9(0x1d9)] : clickData[_0x24bd63['id']] || 0x0, _0x11d50f = _0x3ba0ff > 0x0 ? _0x52bae9(0x1c8) + _0x3ba0ff + _0x52bae9(0x229) : '', _0x22fa30 = offlineGames[_0x52bae9(0x1e8)](_0x39a4d0 => _0x39a4d0['id'] === _0x24bd63['id']);
    return _0x5ac93d[_0x52bae9(0x1bc)] = _0x52bae9(0x221) + _0x24bd63[_0x52bae9(0x224)] + _0x52bae9(0x225) + _0x24bd63[_0x52bae9(0x22d)] + _0x52bae9(0x238) + _0x24bd63[_0x52bae9(0x22d)] + '</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22game-card-description\x22>' + (_0x24bd63[_0x52bae9(0x1d8)] || _0x52bae9(0x1f0)) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22game-card-category\x22>' + (_0x24bd63[_0x52bae9(0x239)] || _0x52bae9(0x201)) + _0x52bae9(0x1f6) + _0x11d50f + _0x52bae9(0x233) + (_0x22fa30 ? _0x52bae9(0x1fd) : '') + _0x52bae9(0x1da), _0x5ac93d['addEventListener']('click', () => openGame(_0x24bd63)), _0x5ac93d;
}
function _0xf33d(_0x4416b6, _0x4dce87) {
    const _0x4a1614 = _0x4a16();
    return _0xf33d = function (_0xf33d64, _0x5ae8b4) {
        _0xf33d64 = _0xf33d64 - 0x1b6;
        let _0x4fbafa = _0x4a1614[_0xf33d64];
        return _0x4fbafa;
    }, _0xf33d(_0x4416b6, _0x4dce87);
}
function openGame(_0xcb9f65) {
    const _0x1afd2a = _0x3b5ff7;
    gameTitle[_0x1afd2a(0x1f2)] = _0xcb9f65['name'], gameIframe[_0x1afd2a(0x1cd)] = _0xcb9f65['url'], gameViewer[_0x1afd2a(0x1eb)][_0x1afd2a(0x1bb)]('hidden'), document[_0x1afd2a(0x203)](_0x1afd2a(0x1c4))[_0x1afd2a(0x1eb)][_0x1afd2a(0x1cc)]('hidden'), !isOfflineMode && typeof db !== _0x1afd2a(0x1ef) && trackGameClick(_0xcb9f65['id']), saveRecentGame(_0xcb9f65);
}
function trackGameClick(_0x21be2b) {
    const _0x34eab1 = _0x3b5ff7, _0x3b8cb6 = db[_0x34eab1(0x21b)](_0x34eab1(0x1d2) + _0x21be2b);
    _0x3b8cb6['transaction'](_0x1faebc => {
        return (_0x1faebc || 0x0) + 0x1;
    }, (_0x48065a, _0x32f63c, _0x289d73) => {
        const _0x117410 = _0x34eab1;
        if (_0x48065a)
            console[_0x117410(0x223)]('Transaction\x20failed:\x20', _0x48065a);
        else
            _0x32f63c && console[_0x117410(0x1db)](_0x117410(0x1bd) + _0x21be2b + '\x20click\x20tracked.\x20New\x20count:\x20' + _0x289d73[_0x117410(0x1fe)]());
    });
}
function closeGame() {
    const _0x44fcb3 = _0x3b5ff7;
    gameIframe[_0x44fcb3(0x1cd)] = '', gameViewer[_0x44fcb3(0x1eb)]['add'](_0x44fcb3(0x1c9)), document[_0x44fcb3(0x203)](_0x44fcb3(0x1c4))[_0x44fcb3(0x1eb)][_0x44fcb3(0x1bb)](_0x44fcb3(0x1c9));
}
function toggleFullscreen() {
    const _0x2946aa = _0x3b5ff7;
    !document[_0x2946aa(0x21d)] ? gameViewer[_0x2946aa(0x1dc)]()['catch'](_0x2e98f6 => {
        const _0x352388 = _0x2946aa;
        console[_0x352388(0x223)](_0x352388(0x22e), _0x2e98f6);
    }) : document['exitFullscreen']();
}
function _0x4a16() {
    const _0x26d5df = [
        'add',
        'src',
        'theme-icon-sun',
        'games-grid',
        'popstate',
        'light',
        'game_clicks/',
        'length',
        'observe',
        'search-input',
        '50036vwQZgd',
        'offline',
        'description',
        'clicks',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        'log',
        'requestFullscreen',
        'close-game-btn',
        'back',
        'theme-toggle',
        'Firebase\x20SDK\x20not\x20loaded.\x20Check\x20your\x20HTML\x20setup.',
        'All\x20Games',
        '1784211iUXAtc',
        'game-viewer',
        'toLowerCase',
        'createElement',
        'sort',
        'loading',
        'some',
        'setAttribute',
        'charAt',
        'classList',
        'lastCacheCheck',
        '1:441909945114:web:08db60dd1a604713c882a3',
        'onlinegameadd.json',
        'undefined',
        'No\x20description\x20available',
        'data-category',
        'textContent',
        'map',
        'button',
        '1354183lndvbi',
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'parse',
        'reload',
        'database',
        'AIzaSyDOHM_mVxVVrFPWb545mIucoSW4fBJQamk',
        'target',
        '⚠️\x20Connect\x20to\x20the\x20internet\x20You\x20offline\x20Check\x20your\x20Internet\x20connection.',
        '<span\x20class=\x22game-card-badge\x22>Offline</span>',
        'val',
        'data-game-id',
        'all',
        'gaming',
        'theme-icon-moon',
        'getElementById',
        '.categories-wrapper',
        'click',
        'data-theme',
        'history',
        'recentGames',
        'https://gamar-421515-default-rtdb.firebaseio.com',
        'dark',
        'no-results',
        '20ouZFYy',
        'active',
        'network-status',
        '4647112PiqzUv',
        'querySelector',
        'offlineGames',
        'preventDefault',
        'appendChild',
        'theme',
        'localeCompare',
        'json',
        'loading-spinner',
        'pushState',
        'getItem',
        'network-message',
        'ref',
        'readyState',
        'fullscreenElement',
        '7NWxQBY',
        'addEventListener',
        'onlineGames',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
        'includes',
        'error',
        'icon',
        '\x22\x20alt=\x22',
        'getAttribute',
        '25331589yFeHmI',
        'filter',
        '\x20</span>',
        'toUpperCase',
        'div',
        '2617388FEuBnV',
        'name',
        'Error\x20attempting\x20to\x20enable\x20fullscreen:',
        'Error\x20loading\x20games:',
        'game-iframe',
        '3626238PwNgCv',
        'stringify',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'href',
        '441909945114',
        'forEach',
        'gamar-421515.appspot.com',
        '\x22\x20loading=\x22lazy\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.src=\x27data:image/svg+xml,%3Csvg\x20xmlns=%22http://www.w3.org/2000/svg%22\x20width=%22280%22\x20height=%22180%22%3E%3Crect\x20fill=%22%23ddd%22\x20width=%22280%22\x20height=%22180%22/%3E%3Ctext\x20fill=%22%23999%22\x20font-family=%22Arial%22\x20font-size=%2218%22\x20x=%2250%25%22\x20y=%2250%25%22\x20text-anchor=%22middle%22\x20dominant-baseline=%22middle%22%3ENo\x20Image%3C/text%3E%3C/svg%3E\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22game-card-title\x22>',
        'category',
        'removeItem',
        'setItem',
        'onLine',
        'Error\x20loading\x20click\x20counts\x20from\x20Firebase:',
        'initializeApp',
        'className',
        'remove',
        'innerHTML',
        'Game\x20',
        'offlinegameadd.json',
        'DOMContentLoaded',
        'slice',
        'contains',
        'documentElement',
        'game_clicks',
        'main-content',
        'G-2R0FC5DW33',
        'unshift',
        'value',
        '<span\x20class=\x22game-card-clicks\x22>🔥\x20',
        'hidden',
        'now',
        '.category-btn'
    ];
    _0x4a16 = function () {
        return _0x26d5df;
    };
    return _0x4a16();
}
function loadRecentGames() {
    const _0x51b0f1 = _0x3b5ff7, _0x1ca3a8 = getRecentGames();
    if (_0x1ca3a8['length'] === 0x0) {
        recentSection['classList'][_0x51b0f1(0x1cc)](_0x51b0f1(0x1c9));
        return;
    }
    recentSection[_0x51b0f1(0x1eb)][_0x51b0f1(0x1bb)]('hidden'), recentGamesGrid[_0x51b0f1(0x1bc)] = '', _0x1ca3a8[_0x51b0f1(0x236)](_0x10113d => {
        const _0x3dcbeb = _0x51b0f1, _0x2d4e05 = createGameCard(_0x10113d);
        recentGamesGrid[_0x3dcbeb(0x213)](_0x2d4e05);
    });
}
function getRecentGames() {
    const _0x20ade9 = _0x3b5ff7, _0x4a8d0c = localStorage['getItem'](_0x20ade9(0x208));
    if (!_0x4a8d0c)
        return [];
    try {
        const _0x59e134 = JSON[_0x20ade9(0x1f7)](_0x4a8d0c);
        return _0x59e134[_0x20ade9(0x1f3)](_0x30b72e => allGames['find'](_0x5ea6bc => _0x5ea6bc['id'] === _0x30b72e))[_0x20ade9(0x228)](_0x50af87 => _0x50af87 !== undefined)[_0x20ade9(0x1c0)](0x0, 0x4);
    } catch (_0x53b345) {
        return [];
    }
}
function saveRecentGame(_0x4ca6de) {
    const _0xf00f49 = _0x3b5ff7;
    let _0x1fa11d = [];
    const _0x1c7089 = localStorage['getItem'](_0xf00f49(0x208));
    if (_0x1c7089)
        try {
            _0x1fa11d = JSON[_0xf00f49(0x1f7)](_0x1c7089);
        } catch (_0x54f84c) {
            _0x1fa11d = [];
        }
    _0x1fa11d = _0x1fa11d[_0xf00f49(0x228)](_0x8db334 => _0x8db334 !== _0x4ca6de['id']), _0x1fa11d[_0xf00f49(0x1c6)](_0x4ca6de['id']), _0x1fa11d = _0x1fa11d['slice'](0x0, 0x4), localStorage[_0xf00f49(0x1b6)](_0xf00f49(0x208), JSON[_0xf00f49(0x232)](_0x1fa11d)), loadRecentGames();
}
function setCachedData(_0x436719, _0x35e4dc) {
    const _0x2b312d = _0x3b5ff7, _0x163371 = {
            'data': _0x35e4dc,
            'timestamp': Date['now']()
        };
    localStorage[_0x2b312d(0x1b6)](_0x436719, JSON[_0x2b312d(0x232)](_0x163371));
}
function getCachedData(_0x17bc0f) {
    const _0x1371dc = _0x3b5ff7, _0x4216d9 = localStorage[_0x1371dc(0x219)](_0x17bc0f);
    if (!_0x4216d9)
        return null;
    try {
        const {
                data: _0x5b5a09,
                timestamp: _0x2ac18b
            } = JSON[_0x1371dc(0x1f7)](_0x4216d9), _0x9ba429 = Date[_0x1371dc(0x1ca)]() - _0x2ac18b, _0xb7f3c9 = 0xa * 0x18 * 0x3c * 0x3c * 0x3e8;
        if (_0x9ba429 > _0xb7f3c9)
            return localStorage[_0x1371dc(0x23a)](_0x17bc0f), null;
        return _0x5b5a09;
    } catch (_0x3c4e34) {
        return null;
    }
}
function checkCacheExpiry() {
    const _0x789a40 = _0x3b5ff7, _0x4d30d7 = localStorage[_0x789a40(0x219)]('lastCacheCheck'), _0x21599e = Date[_0x789a40(0x1ca)]();
    (!_0x4d30d7 || _0x21599e - parseInt(_0x4d30d7) > 0x18 * 0x3c * 0x3c * 0x3e8) && ([
        'onlineGames',
        _0x789a40(0x211)
    ][_0x789a40(0x236)](_0x4e3e55 => {
        getCachedData(_0x4e3e55);
    }), localStorage[_0x789a40(0x1b6)](_0x789a40(0x1ec), _0x21599e['toString']()));
}
function updateNetworkStatus() {
    const _0x244fa3 = _0x3b5ff7;
    navigator['onLine'] ? (networkStatus[_0x244fa3(0x1eb)][_0x244fa3(0x1cc)](_0x244fa3(0x1c9)), isOfflineMode = ![]) : (networkStatus['classList'][_0x244fa3(0x1bb)]('hidden'), networkStatus[_0x244fa3(0x1eb)][_0x244fa3(0x1bb)]('online'), networkMessage[_0x244fa3(0x1f2)] = _0x244fa3(0x1fc), isOfflineMode = !![]);
}
function updateThemeIcon() {
    const _0x30143d = _0x3b5ff7, _0x2e4104 = document[_0x30143d(0x1c2)]['getAttribute'](_0x30143d(0x206)), _0x552616 = document['getElementById'](_0x30143d(0x1ce)), _0x56ff08 = document[_0x30143d(0x203)](_0x30143d(0x202));
    _0x2e4104 === _0x30143d(0x20a) ? (_0x552616[_0x30143d(0x1eb)]['add'](_0x30143d(0x1c9)), _0x56ff08[_0x30143d(0x1eb)][_0x30143d(0x1bb)]('hidden')) : (_0x552616[_0x30143d(0x1eb)][_0x30143d(0x1bb)](_0x30143d(0x1c9)), _0x56ff08[_0x30143d(0x1eb)][_0x30143d(0x1cc)]('hidden'));
}
function setupInfiniteScroll() {
    const _0x1b61c8 = _0x3b5ff7, _0x549628 = new IntersectionObserver(_0xc6a1a2 => {
            _0xc6a1a2['forEach'](_0x14df44 => {
                if (_0x14df44['isIntersecting'] && !isLoading) {
                    const _0x44d635 = filterGames(), _0x24c445 = currentPage * gamesPerPage < _0x44d635['length'];
                    _0x24c445 && (isLoading = !![], loadingSpinner['classList']['remove']('hidden'), setTimeout(() => {
                        const _0x405834 = _0xf33d;
                        displayGames(!![]), loadingSpinner['classList'][_0x405834(0x1cc)](_0x405834(0x1c9)), isLoading = ![];
                    }, 0x1f4));
                }
            });
        }, { 'threshold': 0.5 });
    _0x549628[_0x1b61c8(0x1d4)](loadingSpinner);
}
function setupEventListeners() {
    const _0x975d = _0x3b5ff7;
    themeToggle['addEventListener'](_0x975d(0x205), () => {
        const _0xc1271 = _0x975d, _0x1d96b0 = document[_0xc1271(0x1c2)][_0xc1271(0x226)]('data-theme'), _0x32ba13 = _0x1d96b0 === 'dark' ? _0xc1271(0x1d1) : _0xc1271(0x20a);
        document[_0xc1271(0x1c2)][_0xc1271(0x1e9)]('data-theme', _0x32ba13), localStorage[_0xc1271(0x1b6)](_0xc1271(0x214), _0x32ba13), updateThemeIcon();
    }), window[_0x975d(0x21f)](_0x975d(0x1d0), _0x2e2f9a => {
        const _0x48d7f4 = _0x975d;
        !gameViewer['classList'][_0x48d7f4(0x1c1)](_0x48d7f4(0x1c9)) ? (_0x2e2f9a[_0x48d7f4(0x212)](), closeGame(), history[_0x48d7f4(0x218)](null, '', location[_0x48d7f4(0x234)])) : window[_0x48d7f4(0x207)][_0x48d7f4(0x1de)]();
    }), history[_0x975d(0x218)](null, '', location[_0x975d(0x234)]), searchInput[_0x975d(0x21f)]('input', _0x587c4c => {
        const _0xfe7464 = _0x975d;
        currentSearchTerm = _0x587c4c[_0xfe7464(0x1fb)][_0xfe7464(0x1c7)], displayGames();
    }), categoriesWrapper[_0x975d(0x21f)](_0x975d(0x205), _0x2dfe2d => {
        const _0x1a2540 = _0x975d;
        _0x2dfe2d[_0x1a2540(0x1fb)]['classList'][_0x1a2540(0x1c1)]('category-btn') && (document['querySelectorAll'](_0x1a2540(0x1cb))[_0x1a2540(0x236)](_0x4b432c => {
            const _0x1f9589 = _0x1a2540;
            _0x4b432c[_0x1f9589(0x1eb)][_0x1f9589(0x1bb)](_0x1f9589(0x20d));
        }), _0x2dfe2d[_0x1a2540(0x1fb)][_0x1a2540(0x1eb)][_0x1a2540(0x1cc)](_0x1a2540(0x20d)), currentCategory = _0x2dfe2d[_0x1a2540(0x1fb)][_0x1a2540(0x226)](_0x1a2540(0x1f1)), displayGames());
    }), closeGameBtn[_0x975d(0x21f)](_0x975d(0x205), closeGame), fullscreenGameBtn[_0x975d(0x21f)]('click', toggleFullscreen), window[_0x975d(0x21f)]('online', () => {
        updateNetworkStatus(), loadGames();
    }), window[_0x975d(0x21f)](_0x975d(0x1d7), () => {
        updateNetworkStatus(), displayGames();
    }), document[_0x975d(0x210)]('.logo')['addEventListener']('click', () => {
        const _0x52be0e = _0x975d;
        location[_0x52be0e(0x1f8)]();
    });
}
document[_0x3b5ff7(0x21c)] === _0x3b5ff7(0x1e7) ? document[_0x3b5ff7(0x21f)](_0x3b5ff7(0x1bf), init) : init();