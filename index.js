const _0x463258 = _0x2b98;
(function (_0x1bb383, _0x2da8ea) {
    const _0xb15050 = _0x2b98, _0x34bdae = _0x1bb383();
    while (!![]) {
        try {
            const _0x13c6c8 = parseInt(_0xb15050(0xd6)) / 0x1 * (parseInt(_0xb15050(0xf4)) / 0x2) + parseInt(_0xb15050(0x15c)) / 0x3 * (-parseInt(_0xb15050(0x104)) / 0x4) + parseInt(_0xb15050(0x107)) / 0x5 * (-parseInt(_0xb15050(0x159)) / 0x6) + parseInt(_0xb15050(0x113)) / 0x7 * (parseInt(_0xb15050(0xe8)) / 0x8) + parseInt(_0xb15050(0x121)) / 0x9 * (parseInt(_0xb15050(0x11a)) / 0xa) + -parseInt(_0xb15050(0xe7)) / 0xb * (-parseInt(_0xb15050(0x129)) / 0xc) + parseInt(_0xb15050(0xdf)) / 0xd * (-parseInt(_0xb15050(0x15b)) / 0xe);
            if (_0x13c6c8 === _0x2da8ea)
                break;
            else
                _0x34bdae['push'](_0x34bdae['shift']());
        } catch (_0x45356a) {
            _0x34bdae['push'](_0x34bdae['shift']());
        }
    }
}(_0x5177, 0xb05fd));
const firebaseConfig = {
    'apiKey': _0x463258(0xe6),
    'authDomain': _0x463258(0x169),
    'databaseURL': 'https://gamar-421515-default-rtdb.firebaseio.com',
    'projectId': _0x463258(0x14e),
    'storageBucket': 'gamar-421515.appspot.com',
    'messagingSenderId': '441909945114',
    'appId': _0x463258(0x167),
    'measurementId': _0x463258(0x144)
};
function _0x2b98(_0x506872, _0x40b79b) {
    const _0x517717 = _0x5177();
    return _0x2b98 = function (_0x2b980a, _0x195c18) {
        _0x2b980a = _0x2b980a - 0xd6;
        let _0x1337ba = _0x517717[_0x2b980a];
        return _0x1337ba;
    }, _0x2b98(_0x506872, _0x40b79b);
}
if (typeof firebase !== _0x463258(0x13d)) {
    firebase[_0x463258(0x13b)](firebaseConfig);
    var db = firebase[_0x463258(0x10f)]();
} else
    console[_0x463258(0x117)](_0x463258(0xed));
let allGames = [], onlineGames = [], offlineGames = [], displayedGames = [], currentCategory = _0x463258(0x12b), currentSearchTerm = '', currentPage = 0x0;
const gamesPerPage = 0x77359400;
let isLoading = ![], isOfflineMode = ![], clickData = {};
const gamesGrid = document['getElementById'](_0x463258(0x13c)), recentGamesGrid = document[_0x463258(0xe0)](_0x463258(0x15a)), recentSection = document['getElementById'](_0x463258(0x101)), searchInput = document[_0x463258(0xe0)]('search-input'), categoriesWrapper = document['querySelector']('.categories-wrapper'), loadingSpinner = document[_0x463258(0xe0)]('loading-spinner'), noResults = document[_0x463258(0xe0)](_0x463258(0x13a)), themeToggle = document[_0x463258(0xe0)](_0x463258(0xde)), gameViewer = document[_0x463258(0xe0)](_0x463258(0x10c)), gameIframe = document[_0x463258(0xe0)](_0x463258(0xeb)), gameTitle = document['getElementById'](_0x463258(0x139)), closeGameBtn = document['getElementById']('close-game-btn'), fullscreenGameBtn = document['getElementById'](_0x463258(0x10e)), networkStatus = document['getElementById'](_0x463258(0xd7)), networkMessage = document['getElementById'](_0x463258(0x10b)), gamesSectionTitle = document['getElementById'](_0x463258(0xe1));
async function init() {
    const _0x2d453e = _0x463258, _0x32679d = localStorage[_0x2d453e(0x102)](_0x2d453e(0x132)) || _0x2d453e(0xfb);
    document[_0x2d453e(0x150)][_0x2d453e(0xe3)]('data-theme', _0x32679d), updateThemeIcon(), checkCacheExpiry(), await loadGames(), loadRecentGames(), setupEventListeners(), updateNetworkStatus(), setupInfiniteScroll();
}
async function loadGames() {
    const _0x1b7211 = _0x463258;
    try {
        const _0x677ac8 = getCachedData(_0x1b7211(0x12d)), _0x4d92af = getCachedData(_0x1b7211(0x11b));
        if (navigator[_0x1b7211(0x12c)]) {
            const [_0x1402cf, _0xf70623] = await Promise[_0x1b7211(0x12b)]([
                fetch(_0x1b7211(0x140)),
                fetch(_0x1b7211(0x131))
            ]);
            onlineGames = await _0x1402cf['json'](), offlineGames = await _0xf70623[_0x1b7211(0x138)](), setCachedData(_0x1b7211(0x12d), onlineGames), setCachedData(_0x1b7211(0x11b), offlineGames);
        } else
            onlineGames = _0x677ac8 || [], offlineGames = _0x4d92af || [], isOfflineMode = !![];
        allGames = [
            ...onlineGames,
            ...offlineGames
        ], !isOfflineMode && typeof db !== _0x1b7211(0x13d) && (loadingSpinner[_0x1b7211(0x130)]['remove'](_0x1b7211(0x12e)), await loadClickCounts(), sortGamesByClicks(), loadingSpinner['classList'][_0x1b7211(0x13e)](_0x1b7211(0x12e))), generateCategories(), displayGames();
    } catch (_0x42ef20) {
        console[_0x1b7211(0x117)](_0x1b7211(0xf7), _0x42ef20);
        const _0x4e606d = getCachedData(_0x1b7211(0x12d)), _0x367b06 = getCachedData('offlineGames');
        (_0x4e606d || _0x367b06) && (onlineGames = _0x4e606d || [], offlineGames = _0x367b06 || [], allGames = [
            ...onlineGames,
            ...offlineGames
        ], isOfflineMode = !![], generateCategories(), displayGames());
    }
}
async function loadClickCounts() {
    const _0x498325 = _0x463258;
    try {
        const _0x44e53a = await db[_0x498325(0xea)](_0x498325(0x151))[_0x498325(0xe9)]('value');
        clickData = _0x44e53a['val']() || {}, allGames[_0x498325(0x122)](_0x268826 => {
            const _0x5e57a6 = _0x498325, _0x61e0bb = clickData[_0x268826['id']] || 0x0;
            _0x268826[_0x5e57a6(0xf6)] = _0x61e0bb;
        });
    } catch (_0xdd3cb6) {
        console['error'](_0x498325(0x14c), _0xdd3cb6);
    }
}
function sortGamesByClicks() {
    const _0x373020 = _0x463258;
    allGames[_0x373020(0x10d)]((_0x5538ff, _0x54bcae) => {
        const _0x32999a = _0x373020, _0x4e80a3 = _0x5538ff[_0x32999a(0xf6)] || 0x0, _0x1ed6f1 = _0x54bcae[_0x32999a(0xf6)] || 0x0;
        if (_0x1ed6f1 !== _0x4e80a3)
            return _0x1ed6f1 - _0x4e80a3;
        return _0x5538ff['name'][_0x32999a(0x160)](_0x54bcae[_0x32999a(0x148)]);
    });
}
function generateCategories() {
    const _0x4b7f2b = _0x463258, _0x3d84f9 = new Set();
    allGames['forEach'](_0x29173f => {
        const _0x3c2739 = _0x2b98;
        _0x29173f[_0x3c2739(0xdb)] && _0x3d84f9[_0x3c2739(0x13e)](_0x29173f[_0x3c2739(0xdb)][_0x3c2739(0x103)]());
    });
    const _0x412244 = categoriesWrapper['querySelector'](_0x4b7f2b(0xfe));
    categoriesWrapper[_0x4b7f2b(0x111)] = '', categoriesWrapper[_0x4b7f2b(0x165)](_0x412244), _0x3d84f9[_0x4b7f2b(0x122)](_0x201ee4 => {
        const _0xdb805c = _0x4b7f2b, _0xf23390 = document[_0xdb805c(0xdc)](_0xdb805c(0x141));
        _0xf23390[_0xdb805c(0x109)] = _0xdb805c(0x118), _0xf23390['setAttribute'](_0xdb805c(0x14d), _0x201ee4), _0xf23390[_0xdb805c(0xfc)] = _0x201ee4[_0xdb805c(0x146)](0x0)[_0xdb805c(0x124)]() + _0x201ee4['slice'](0x1), categoriesWrapper['appendChild'](_0xf23390);
    });
}
function filterGames() {
    const _0x49b20f = _0x463258;
    let _0x54ab8e = allGames;
    return currentCategory !== _0x49b20f(0x12b) && (_0x54ab8e = _0x54ab8e['filter'](_0x2538e8 => _0x2538e8['category'] && _0x2538e8[_0x49b20f(0xdb)][_0x49b20f(0x103)]() === currentCategory)), currentSearchTerm && (_0x54ab8e = _0x54ab8e['filter'](_0x2a0cf8 => _0x2a0cf8[_0x49b20f(0x148)][_0x49b20f(0x103)]()[_0x49b20f(0x11e)](currentSearchTerm[_0x49b20f(0x103)]()) || _0x2a0cf8[_0x49b20f(0x135)] && _0x2a0cf8['description'][_0x49b20f(0x103)]()[_0x49b20f(0x11e)](currentSearchTerm[_0x49b20f(0x103)]()))), isOfflineMode && (_0x54ab8e = _0x54ab8e[_0x49b20f(0x110)](_0x17ea32 => offlineGames[_0x49b20f(0x162)](_0x2dac99 => _0x2dac99['id'] === _0x17ea32['id']))), _0x54ab8e;
}
function displayGames(_0x8d2bb = ![]) {
    const _0x5301c6 = _0x463258, _0x5dd471 = filterGames();
    !_0x8d2bb && (currentPage = 0x0, gamesGrid[_0x5301c6(0x111)] = '', displayedGames = []);
    const _0x4b98ac = currentPage * gamesPerPage, _0x202c04 = _0x4b98ac + gamesPerPage, _0x3c7c7d = _0x5dd471[_0x5301c6(0x125)](_0x4b98ac, _0x202c04);
    if (_0x3c7c7d[_0x5301c6(0x15d)] === 0x0 && displayedGames['length'] === 0x0) {
        noResults[_0x5301c6(0x130)][_0x5301c6(0x108)]('hidden'), gamesGrid[_0x5301c6(0x130)][_0x5301c6(0x13e)](_0x5301c6(0x12e));
        return;
    } else
        noResults[_0x5301c6(0x130)][_0x5301c6(0x13e)]('hidden'), gamesGrid['classList'][_0x5301c6(0x108)](_0x5301c6(0x12e));
    _0x3c7c7d['forEach'](_0x467273 => {
        const _0x590889 = _0x5301c6, _0x33eb3a = createGameCard(_0x467273);
        gamesGrid[_0x590889(0x165)](_0x33eb3a), displayedGames['push'](_0x467273);
    }), currentPage++, currentCategory === _0x5301c6(0x12b) ? gamesSectionTitle[_0x5301c6(0xfc)] = isOfflineMode ? _0x5301c6(0xfa) : _0x5301c6(0x133) : gamesSectionTitle[_0x5301c6(0xfc)] = currentCategory['charAt'](0x0)[_0x5301c6(0x124)]() + currentCategory['slice'](0x1);
}
function createGameCard(_0x2500c2) {
    const _0x2368c5 = _0x463258, _0x501af0 = document[_0x2368c5(0xdc)](_0x2368c5(0xff));
    _0x501af0[_0x2368c5(0x109)] = _0x2368c5(0xe5), _0x501af0[_0x2368c5(0xe3)](_0x2368c5(0x149), _0x2500c2['id']);
    const _0x4de666 = _0x2500c2['clicks'] !== undefined ? _0x2500c2['clicks'] : clickData[_0x2500c2['id']] || 0x0, _0x297be4 = _0x4de666 > 0x0 ? _0x2368c5(0x10a) + _0x4de666 + _0x2368c5(0x12f) : '', _0x2f1459 = offlineGames[_0x2368c5(0x162)](_0xb493f5 => _0xb493f5['id'] === _0x2500c2['id']);
    return _0x501af0['innerHTML'] = _0x2368c5(0x136) + _0x2500c2[_0x2368c5(0x163)] + _0x2368c5(0x123) + _0x2500c2['name'] + _0x2368c5(0x134) + _0x2500c2[_0x2368c5(0x148)] + _0x2368c5(0x157) + (_0x2500c2['description'] || 'No\x20description\x20available') + _0x2368c5(0x147) + (_0x2500c2['category'] || _0x2368c5(0x143)) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x297be4 + _0x2368c5(0x115) + (_0x2f1459 ? _0x2368c5(0x116) : '') + _0x2368c5(0x120), _0x501af0[_0x2368c5(0x106)](_0x2368c5(0x154), () => openGame(_0x2500c2)), _0x501af0;
}
function openGame(_0x1456fe) {
    const _0x1d2d20 = _0x463258;
    gameTitle[_0x1d2d20(0xfc)] = _0x1456fe[_0x1d2d20(0x148)], gameIframe[_0x1d2d20(0x158)] = _0x1456fe[_0x1d2d20(0x112)], gameViewer[_0x1d2d20(0x130)]['remove'](_0x1d2d20(0x12e)), document[_0x1d2d20(0xe0)](_0x1d2d20(0x128))[_0x1d2d20(0x130)][_0x1d2d20(0x13e)](_0x1d2d20(0x12e)), !isOfflineMode && typeof db !== _0x1d2d20(0x13d) && trackGameClick(_0x1456fe['id']), saveRecentGame(_0x1456fe);
}
function trackGameClick(_0x374343) {
    const _0xe036f3 = _0x463258, _0x352291 = db['ref']('game_clicks/' + _0x374343);
    _0x352291[_0xe036f3(0x15e)](_0xe052a9 => {
        return (_0xe052a9 || 0x0) + 0x1;
    }, (_0x2238c6, _0x66bf55, _0x1d9e3c) => {
        const _0x11803c = _0xe036f3;
        if (_0x2238c6)
            console[_0x11803c(0x117)](_0x11803c(0x152), _0x2238c6);
        else
            _0x66bf55 && console['log'](_0x11803c(0x11f) + _0x374343 + '\x20click\x20tracked.\x20New\x20count:\x20' + _0x1d9e3c[_0x11803c(0xd8)]());
    });
}
function closeGame() {
    const _0x19ea92 = _0x463258;
    gameIframe[_0x19ea92(0x158)] = '', gameViewer[_0x19ea92(0x130)][_0x19ea92(0x13e)]('hidden'), document['getElementById'](_0x19ea92(0x128))[_0x19ea92(0x130)][_0x19ea92(0x108)](_0x19ea92(0x12e));
}
function toggleFullscreen() {
    const _0x57ee0a = _0x463258;
    !document[_0x57ee0a(0xf1)] ? gameViewer[_0x57ee0a(0x166)]()[_0x57ee0a(0xdd)](_0x1cea70 => {
        console['error']('Error\x20attempting\x20to\x20enable\x20fullscreen:', _0x1cea70);
    }) : document[_0x57ee0a(0xf3)]();
}
function loadRecentGames() {
    const _0x3ec9ff = _0x463258, _0x57f807 = getRecentGames();
    if (_0x57f807[_0x3ec9ff(0x15d)] === 0x0) {
        recentSection[_0x3ec9ff(0x130)][_0x3ec9ff(0x13e)](_0x3ec9ff(0x12e));
        return;
    }
    recentSection[_0x3ec9ff(0x130)][_0x3ec9ff(0x108)]('hidden'), recentGamesGrid[_0x3ec9ff(0x111)] = '', _0x57f807['forEach'](_0x100720 => {
        const _0x185f7b = _0x3ec9ff, _0x4130c4 = createGameCard(_0x100720);
        recentGamesGrid[_0x185f7b(0x165)](_0x4130c4);
    });
}
function getRecentGames() {
    const _0x44ec09 = _0x463258, _0x24ceb0 = localStorage[_0x44ec09(0x102)](_0x44ec09(0xf8));
    if (!_0x24ceb0)
        return [];
    try {
        const _0x1ef1d5 = JSON[_0x44ec09(0x114)](_0x24ceb0);
        return _0x1ef1d5[_0x44ec09(0x126)](_0x318bcb => allGames[_0x44ec09(0x153)](_0x42b689 => _0x42b689['id'] === _0x318bcb))[_0x44ec09(0x110)](_0x23bc88 => _0x23bc88 !== undefined)[_0x44ec09(0x125)](0x0, 0x4);
    } catch (_0x38fb0b) {
        return [];
    }
}
function saveRecentGame(_0x3be209) {
    const _0x1aa001 = _0x463258;
    let _0x5200c3 = [];
    const _0x3fd31e = localStorage[_0x1aa001(0x102)](_0x1aa001(0xf8));
    if (_0x3fd31e)
        try {
            _0x5200c3 = JSON['parse'](_0x3fd31e);
        } catch (_0xdcd06e) {
            _0x5200c3 = [];
        }
    _0x5200c3 = _0x5200c3[_0x1aa001(0x110)](_0x3a28c0 => _0x3a28c0 !== _0x3be209['id']), _0x5200c3[_0x1aa001(0xfd)](_0x3be209['id']), _0x5200c3 = _0x5200c3['slice'](0x0, 0x4), localStorage[_0x1aa001(0x137)](_0x1aa001(0xf8), JSON[_0x1aa001(0xda)](_0x5200c3)), loadRecentGames();
}
function setCachedData(_0x583394, _0x5f328e) {
    const _0x4b65ff = _0x463258, _0xbce647 = {
            'data': _0x5f328e,
            'timestamp': Date[_0x4b65ff(0x155)]()
        };
    localStorage['setItem'](_0x583394, JSON[_0x4b65ff(0xda)](_0xbce647));
}
function getCachedData(_0x503e70) {
    const _0x4bdd04 = _0x463258, _0x55b19c = localStorage[_0x4bdd04(0x102)](_0x503e70);
    if (!_0x55b19c)
        return null;
    try {
        const {
                data: _0x11d080,
                timestamp: _0x2805e0
            } = JSON[_0x4bdd04(0x114)](_0x55b19c), _0x1a1cce = Date[_0x4bdd04(0x155)]() - _0x2805e0, _0x3baeb0 = 0xa * 0x18 * 0x3c * 0x3c * 0x3e8;
        if (_0x1a1cce > _0x3baeb0)
            return localStorage[_0x4bdd04(0xf0)](_0x503e70), null;
        return _0x11d080;
    } catch (_0x17db8a) {
        return null;
    }
}
function checkCacheExpiry() {
    const _0x34c803 = _0x463258, _0x1d1f8a = localStorage[_0x34c803(0x102)](_0x34c803(0x127)), _0x2b7047 = Date[_0x34c803(0x155)]();
    (!_0x1d1f8a || _0x2b7047 - parseInt(_0x1d1f8a) > 0x18 * 0x3c * 0x3c * 0x3e8) && ([
        'onlineGames',
        'offlineGames'
    ][_0x34c803(0x122)](_0x4428a7 => {
        getCachedData(_0x4428a7);
    }), localStorage[_0x34c803(0x137)]('lastCacheCheck', _0x2b7047[_0x34c803(0x12a)]()));
}
function updateNetworkStatus() {
    const _0xab91a6 = _0x463258;
    navigator[_0xab91a6(0x12c)] ? (networkStatus[_0xab91a6(0x130)][_0xab91a6(0x13e)](_0xab91a6(0x12e)), isOfflineMode = ![]) : (networkStatus['classList'][_0xab91a6(0x108)](_0xab91a6(0x12e)), networkStatus[_0xab91a6(0x130)]['remove'](_0xab91a6(0x156)), networkMessage[_0xab91a6(0xfc)] = '⚠️\x20You\x20are\x20offline.\x20Showing\x20cached\x20games.', isOfflineMode = !![]);
}
function _0x5177() {
    const _0xacb72e = [
        'description',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
        'setItem',
        'json',
        'game-title',
        'no-results',
        'initializeApp',
        'games-grid',
        'undefined',
        'add',
        'input',
        'onlinegameadd.json',
        'button',
        'DOMContentLoaded',
        'gaming',
        'G-2R0FC5DW33',
        'data-theme',
        'charAt',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22game-card-category\x22>',
        'name',
        'data-game-id',
        'theme-icon-moon',
        'reload',
        'Error\x20loading\x20click\x20counts\x20from\x20Firebase:',
        'data-category',
        'gamar-421515',
        '.category-btn',
        'documentElement',
        'game_clicks',
        'Transaction\x20failed:\x20',
        'find',
        'click',
        'now',
        'online',
        '</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22game-card-description\x22>',
        'src',
        '18tsVYES',
        'recent-games',
        '42CSlANv',
        '21twInQk',
        'length',
        'transaction',
        'script',
        'localeCompare',
        'dark',
        'some',
        'icon',
        'contains',
        'appendChild',
        'requestFullscreen',
        '1:441909945114:web:08db60dd1a604713c882a3',
        'loading',
        'gamar-421515.firebaseapp.com',
        '62121FUiVbh',
        'network-status',
        'val',
        'querySelector',
        'stringify',
        'category',
        'createElement',
        'catch',
        'theme-toggle',
        '5973799UypJRs',
        'getElementById',
        'games-section-title',
        'onload',
        'setAttribute',
        'offline',
        'game-card',
        'AIzaSyDOHM_mVxVVrFPWb545mIucoSW4fBJQamk',
        '44lfLddr',
        '3318960aHGdnW',
        'once',
        'ref',
        'game-iframe',
        'active',
        'Firebase\x20SDK\x20not\x20loaded.\x20Check\x20your\x20HTML\x20setup.',
        'getAttribute',
        'target',
        'removeItem',
        'fullscreenElement',
        'readyState',
        'exitFullscreen',
        '44NoDWPN',
        'theme-icon-sun',
        'clicks',
        'Error\x20loading\x20games:',
        'recentGames',
        'head',
        'Offline\x20Games',
        'light',
        'textContent',
        'unshift',
        '[data-category=\x22all\x22]',
        'div',
        'https://cdn.jsdelivr.net/gh/m03951659gmail/toolhubcdn@main/allfileadd.js',
        'recent-section',
        'getItem',
        'toLowerCase',
        '515948RleGWz',
        'querySelectorAll',
        'addEventListener',
        '1641655DkuEzf',
        'remove',
        'className',
        '<span\x20class=\x22game-card-clicks\x22>🔥\x20',
        'network-message',
        'game-viewer',
        'sort',
        'fullscreen-game-btn',
        'database',
        'filter',
        'innerHTML',
        'url',
        '21oZQgmz',
        'parse',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '<span\x20class=\x22game-card-badge\x22>Offline</span>',
        'error',
        'category-btn',
        'isIntersecting',
        '45800AKGViq',
        'offlineGames',
        'value',
        'log',
        'includes',
        'Game\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        '1845qlcjqd',
        'forEach',
        '\x22\x20alt=\x22',
        'toUpperCase',
        'slice',
        'map',
        'lastCacheCheck',
        'main-content',
        '1316184OjvVZg',
        'toString',
        'all',
        'onLine',
        'onlineGames',
        'hidden',
        '\x20</span>',
        'classList',
        'offlinegameadd.json',
        'theme',
        'All\x20Games',
        '\x22\x20loading=\x22lazy\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.src=\x27data:image/svg+xml,%3Csvg\x20xmlns=%22http://www.w3.org/2000/svg%22\x20width=%22280%22\x20height=%22180%22%3E%3Crect\x20fill=%22%23ddd%22\x20width=%22280%22\x20height=%22180%22/%3E%3Ctext\x20fill=%22%23999%22\x20font-family=%22Arial%22\x20font-size=%2218%22\x20x=%2250%25%22\x20y=%2250%25%22\x20text-anchor=%22middle%22\x20dominant-baseline=%22middle%22%3ENo\x20Image%3C/text%3E%3C/svg%3E\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22game-card-title\x22>'
    ];
    _0x5177 = function () {
        return _0xacb72e;
    };
    return _0x5177();
}
function updateThemeIcon() {
    const _0x7d2b39 = _0x463258, _0x4b52f5 = document[_0x7d2b39(0x150)]['getAttribute'](_0x7d2b39(0x145)), _0x1c63b6 = document[_0x7d2b39(0xe0)](_0x7d2b39(0xf5)), _0x581ef3 = document['getElementById'](_0x7d2b39(0x14a));
    _0x4b52f5 === _0x7d2b39(0x161) ? (_0x1c63b6['classList']['add']('hidden'), _0x581ef3[_0x7d2b39(0x130)][_0x7d2b39(0x108)](_0x7d2b39(0x12e))) : (_0x1c63b6[_0x7d2b39(0x130)]['remove'](_0x7d2b39(0x12e)), _0x581ef3[_0x7d2b39(0x130)][_0x7d2b39(0x13e)]('hidden'));
}
function setupInfiniteScroll() {
    const _0x2fd93d = new IntersectionObserver(_0x43aa5f => {
        _0x43aa5f['forEach'](_0x531e03 => {
            const _0x204356 = _0x2b98;
            if (_0x531e03[_0x204356(0x119)] && !isLoading) {
                const _0x219c28 = filterGames(), _0x49504c = currentPage * gamesPerPage < _0x219c28['length'];
                _0x49504c && (isLoading = !![], loadingSpinner[_0x204356(0x130)][_0x204356(0x108)](_0x204356(0x12e)), setTimeout(() => {
                    const _0x59bd5f = _0x204356;
                    displayGames(!![]), loadingSpinner['classList'][_0x59bd5f(0x13e)](_0x59bd5f(0x12e)), isLoading = ![];
                }, 0x1f4));
            }
        });
    }, { 'threshold': 0.5 });
    _0x2fd93d['observe'](loadingSpinner);
}
function setupEventListeners() {
    const _0x585216 = _0x463258;
    themeToggle[_0x585216(0x106)]('click', () => {
        const _0x24c33b = _0x585216, _0x4dfef7 = document[_0x24c33b(0x150)][_0x24c33b(0xee)](_0x24c33b(0x145)), _0x290c6e = _0x4dfef7 === _0x24c33b(0x161) ? _0x24c33b(0xfb) : _0x24c33b(0x161);
        document[_0x24c33b(0x150)][_0x24c33b(0xe3)]('data-theme', _0x290c6e), localStorage[_0x24c33b(0x137)](_0x24c33b(0x132), _0x290c6e), updateThemeIcon();
    }), searchInput[_0x585216(0x106)](_0x585216(0x13f), _0x4b995b => {
        const _0xdab4e = _0x585216;
        currentSearchTerm = _0x4b995b['target'][_0xdab4e(0x11c)], displayGames();
    }), categoriesWrapper[_0x585216(0x106)](_0x585216(0x154), _0x50e03f => {
        const _0x23c111 = _0x585216;
        _0x50e03f[_0x23c111(0xef)][_0x23c111(0x130)][_0x23c111(0x164)](_0x23c111(0x118)) && (document[_0x23c111(0x105)](_0x23c111(0x14f))[_0x23c111(0x122)](_0x37dfd3 => {
            const _0x148cf9 = _0x23c111;
            _0x37dfd3[_0x148cf9(0x130)][_0x148cf9(0x108)](_0x148cf9(0xec));
        }), _0x50e03f[_0x23c111(0xef)][_0x23c111(0x130)][_0x23c111(0x13e)](_0x23c111(0xec)), currentCategory = _0x50e03f[_0x23c111(0xef)][_0x23c111(0xee)](_0x23c111(0x14d)), displayGames());
    }), closeGameBtn[_0x585216(0x106)]('click', closeGame), fullscreenGameBtn[_0x585216(0x106)](_0x585216(0x154), toggleFullscreen), window[_0x585216(0x106)](_0x585216(0x156), () => {
        updateNetworkStatus(), loadGames();
    }), window['addEventListener'](_0x585216(0xe4), () => {
        updateNetworkStatus(), displayGames();
    }), document[_0x585216(0xd9)]('.logo')[_0x585216(0x106)](_0x585216(0x154), () => {
        const _0x24fd33 = _0x585216;
        location[_0x24fd33(0x14b)]();
    });
}
document[_0x463258(0xf2)] === _0x463258(0x168) ? document['addEventListener'](_0x463258(0x142), init) : init();
function loadScript(_0x10a5d1, _0x7da1ed) {
    const _0x11af1f = _0x463258, _0x3c2834 = document[_0x11af1f(0xdc)](_0x11af1f(0x15f));
    _0x3c2834[_0x11af1f(0x158)] = _0x10a5d1, _0x3c2834[_0x11af1f(0xe2)] = _0x7da1ed, document[_0x11af1f(0xf9)][_0x11af1f(0x165)](_0x3c2834);
}
loadScript(_0x463258(0x100), function () {
    const _0x49a74f = _0x463258;
    console[_0x49a74f(0x11d)]('New\x20feature\x20loaded!');
});