const _0x391eba = _0x15b1;
(function (_0xf089f5, _0x484bad) {
    const _0x4113cd = _0x15b1, _0x1937c7 = _0xf089f5();
    while (!![]) {
        try {
            const _0x156116 = parseInt(_0x4113cd(0x177)) / 0x1 * (-parseInt(_0x4113cd(0x15e)) / 0x2) + -parseInt(_0x4113cd(0x123)) / 0x3 + parseInt(_0x4113cd(0x172)) / 0x4 + parseInt(_0x4113cd(0x14d)) / 0x5 + parseInt(_0x4113cd(0x15a)) / 0x6 * (parseInt(_0x4113cd(0x148)) / 0x7) + parseInt(_0x4113cd(0x141)) / 0x8 + -parseInt(_0x4113cd(0x173)) / 0x9;
            if (_0x156116 === _0x484bad)
                break;
            else
                _0x1937c7['push'](_0x1937c7['shift']());
        } catch (_0x23507f) {
            _0x1937c7['push'](_0x1937c7['shift']());
        }
    }
}(_0x23bf, 0x62d6a));
const firebaseConfig = {
    'apiKey': _0x391eba(0x11f),
    'authDomain': 'gamar-421515.firebaseapp.com',
    'databaseURL': _0x391eba(0x140),
    'projectId': _0x391eba(0x12e),
    'storageBucket': 'gamar-421515.appspot.com',
    'messagingSenderId': _0x391eba(0x101),
    'appId': _0x391eba(0x137),
    'measurementId': _0x391eba(0x10d)
};
function _0x15b1(_0x3b1de3, _0xa15ccb) {
    const _0x23bffc = _0x23bf();
    return _0x15b1 = function (_0x15b1fb, _0x59d839) {
        _0x15b1fb = _0x15b1fb - 0xfd;
        let _0x1eea54 = _0x23bffc[_0x15b1fb];
        return _0x1eea54;
    }, _0x15b1(_0x3b1de3, _0xa15ccb);
}
if (typeof firebase !== 'undefined') {
    firebase[_0x391eba(0x112)](firebaseConfig);
    var db = firebase[_0x391eba(0x13b)]();
} else
    console[_0x391eba(0x10e)](_0x391eba(0x105));
let allGames = [], onlineGames = [], offlineGames = [], displayedGames = [], currentCategory = _0x391eba(0x115), currentSearchTerm = '', currentPage = 0x0;
const gamesPerPage = 0x77359400;
let isLoading = ![], isOfflineMode = ![], clickData = {};
const gamesGrid = document[_0x391eba(0x14f)]('games-grid'), recentGamesGrid = document[_0x391eba(0x14f)]('recent-games'), recentSection = document[_0x391eba(0x14f)]('recent-section'), searchInput = document[_0x391eba(0x14f)](_0x391eba(0x122)), categoriesWrapper = document['querySelector'](_0x391eba(0x16e)), loadingSpinner = document[_0x391eba(0x14f)](_0x391eba(0x17a)), noResults = document[_0x391eba(0x14f)](_0x391eba(0x17b)), themeToggle = document[_0x391eba(0x14f)]('theme-toggle'), gameViewer = document[_0x391eba(0x14f)]('game-viewer'), gameIframe = document[_0x391eba(0x14f)]('game-iframe'), gameTitle = document[_0x391eba(0x14f)](_0x391eba(0x157)), closeGameBtn = document['getElementById'](_0x391eba(0x143)), fullscreenGameBtn = document[_0x391eba(0x14f)](_0x391eba(0x12b)), networkStatus = document[_0x391eba(0x14f)](_0x391eba(0x14a)), networkMessage = document[_0x391eba(0x14f)](_0x391eba(0x155)), gamesSectionTitle = document[_0x391eba(0x14f)]('games-section-title');
async function init() {
    const _0x1dfc70 = _0x391eba, _0x2713bf = localStorage[_0x1dfc70(0xfe)](_0x1dfc70(0x15d)) || _0x1dfc70(0x14b);
    document[_0x1dfc70(0x116)][_0x1dfc70(0x152)](_0x1dfc70(0x17f), _0x2713bf), updateThemeIcon(), checkCacheExpiry(), await loadGames(), loadRecentGames(), setupEventListeners(), updateNetworkStatus(), setupInfiniteScroll();
}
async function loadGames() {
    const _0x833ae5 = _0x391eba;
    try {
        const _0x13812f = getCachedData(_0x833ae5(0x163)), _0x314d33 = getCachedData('offlineGames');
        if (navigator[_0x833ae5(0x135)]) {
            const [_0x27092e, _0xcccc04] = await Promise[_0x833ae5(0x115)]([
                fetch(_0x833ae5(0x11d)),
                fetch('offlinegameadd.json')
            ]);
            onlineGames = await _0x27092e[_0x833ae5(0x107)](), offlineGames = await _0xcccc04[_0x833ae5(0x107)](), setCachedData(_0x833ae5(0x163), onlineGames), setCachedData(_0x833ae5(0x129), offlineGames);
        } else
            onlineGames = _0x13812f || [], offlineGames = _0x314d33 || [], isOfflineMode = !![];
        allGames = [
            ...onlineGames,
            ...offlineGames
        ], !isOfflineMode && typeof db !== _0x833ae5(0x17d) && (loadingSpinner[_0x833ae5(0x16b)][_0x833ae5(0x128)](_0x833ae5(0x15f)), await loadClickCounts(), sortGamesByClicks(), loadingSpinner[_0x833ae5(0x16b)][_0x833ae5(0x111)](_0x833ae5(0x15f))), generateCategories(), displayGames();
    } catch (_0x500b43) {
        console[_0x833ae5(0x10e)](_0x833ae5(0x13d), _0x500b43);
        const _0x2bbb9e = getCachedData(_0x833ae5(0x163)), _0x59d651 = getCachedData(_0x833ae5(0x129));
        (_0x2bbb9e || _0x59d651) && (onlineGames = _0x2bbb9e || [], offlineGames = _0x59d651 || [], allGames = [
            ...onlineGames,
            ...offlineGames
        ], isOfflineMode = !![], generateCategories(), displayGames());
    }
}
async function loadClickCounts() {
    const _0x4f347c = _0x391eba;
    try {
        const _0x42e104 = await db['ref']('game_clicks')['once'](_0x4f347c(0x162));
        clickData = _0x42e104[_0x4f347c(0x125)]() || {}, allGames[_0x4f347c(0x100)](_0x40af14 => {
            const _0x1ee0e6 = clickData[_0x40af14['id']] || 0x0;
            _0x40af14['clicks'] = _0x1ee0e6;
        });
    } catch (_0x5a92f7) {
        console['error']('Error\x20loading\x20click\x20counts\x20from\x20Firebase:', _0x5a92f7);
    }
}
function sortGamesByClicks() {
    allGames['sort']((_0x2354f9, _0x21d0f0) => {
        const _0x598771 = _0x15b1, _0x464196 = _0x2354f9[_0x598771(0x106)] || 0x0, _0x4cfd5d = _0x21d0f0['clicks'] || 0x0;
        if (_0x4cfd5d !== _0x464196)
            return _0x4cfd5d - _0x464196;
        return _0x2354f9[_0x598771(0x118)][_0x598771(0x134)](_0x21d0f0[_0x598771(0x118)]);
    });
}
function generateCategories() {
    const _0x30d129 = _0x391eba, _0x1cb91f = new Set();
    allGames['forEach'](_0x5df5f7 => {
        const _0x398e65 = _0x15b1;
        _0x5df5f7[_0x398e65(0x156)] && _0x1cb91f[_0x398e65(0x111)](_0x5df5f7[_0x398e65(0x156)][_0x398e65(0x119)]());
    });
    const _0x587e57 = categoriesWrapper[_0x30d129(0x10b)](_0x30d129(0xff));
    categoriesWrapper[_0x30d129(0x12f)] = '', categoriesWrapper[_0x30d129(0x11b)](_0x587e57), _0x1cb91f[_0x30d129(0x100)](_0x30f6a7 => {
        const _0x7b1a22 = _0x30d129, _0x2c2260 = document[_0x7b1a22(0x178)]('button');
        _0x2c2260[_0x7b1a22(0x12d)] = _0x7b1a22(0x121), _0x2c2260[_0x7b1a22(0x152)](_0x7b1a22(0x138), _0x30f6a7), _0x2c2260[_0x7b1a22(0x164)] = _0x30f6a7[_0x7b1a22(0x103)](0x0)[_0x7b1a22(0x114)]() + _0x30f6a7[_0x7b1a22(0x165)](0x1), categoriesWrapper['appendChild'](_0x2c2260);
    });
}
function filterGames() {
    const _0x32b697 = _0x391eba;
    let _0x1c910d = allGames;
    return currentCategory !== _0x32b697(0x115) && (_0x1c910d = _0x1c910d[_0x32b697(0x17e)](_0x4e205c => _0x4e205c[_0x32b697(0x156)] && _0x4e205c['category'][_0x32b697(0x119)]() === currentCategory)), currentSearchTerm && (_0x1c910d = _0x1c910d[_0x32b697(0x17e)](_0x57a886 => _0x57a886[_0x32b697(0x118)]['toLowerCase']()[_0x32b697(0x175)](currentSearchTerm[_0x32b697(0x119)]()) || _0x57a886[_0x32b697(0x13e)] && _0x57a886[_0x32b697(0x13e)][_0x32b697(0x119)]()[_0x32b697(0x175)](currentSearchTerm[_0x32b697(0x119)]()))), isOfflineMode && (_0x1c910d = _0x1c910d[_0x32b697(0x17e)](_0x3ae158 => offlineGames[_0x32b697(0x15c)](_0x7bbc0a => _0x7bbc0a['id'] === _0x3ae158['id']))), _0x1c910d;
}
function displayGames(_0x5b4ad0 = ![]) {
    const _0x5bbc23 = _0x391eba, _0x3d166a = filterGames();
    !_0x5b4ad0 && (currentPage = 0x0, gamesGrid['innerHTML'] = '', displayedGames = []);
    const _0x8ec8cb = currentPage * gamesPerPage, _0x5c7d5c = _0x8ec8cb + gamesPerPage, _0x14d4be = _0x3d166a['slice'](_0x8ec8cb, _0x5c7d5c);
    if (_0x14d4be['length'] === 0x0 && displayedGames[_0x5bbc23(0x12c)] === 0x0) {
        noResults['classList'][_0x5bbc23(0x128)](_0x5bbc23(0x15f)), gamesGrid[_0x5bbc23(0x16b)]['add'](_0x5bbc23(0x15f));
        return;
    } else
        noResults[_0x5bbc23(0x16b)][_0x5bbc23(0x111)]('hidden'), gamesGrid[_0x5bbc23(0x16b)][_0x5bbc23(0x128)](_0x5bbc23(0x15f));
    _0x14d4be[_0x5bbc23(0x100)](_0x54ff00 => {
        const _0x3a5afe = _0x5bbc23, _0xa8ed00 = createGameCard(_0x54ff00);
        gamesGrid[_0x3a5afe(0x11b)](_0xa8ed00), displayedGames['push'](_0x54ff00);
    }), currentPage++, currentCategory === 'all' ? gamesSectionTitle[_0x5bbc23(0x164)] = isOfflineMode ? _0x5bbc23(0x142) : _0x5bbc23(0x109) : gamesSectionTitle[_0x5bbc23(0x164)] = currentCategory['charAt'](0x0)['toUpperCase']() + currentCategory[_0x5bbc23(0x165)](0x1);
}
function createGameCard(_0x31972b) {
    const _0x42fd04 = _0x391eba, _0x260897 = document['createElement']('div');
    _0x260897['className'] = _0x42fd04(0x171), _0x260897[_0x42fd04(0x152)](_0x42fd04(0x117), _0x31972b['id']);
    const _0x446301 = _0x31972b[_0x42fd04(0x106)] !== undefined ? _0x31972b[_0x42fd04(0x106)] : clickData[_0x31972b['id']] || 0x0, _0x511025 = _0x446301 > 0x0 ? _0x42fd04(0x166) + _0x446301 + '\x20clicks</span>' : '', _0x3fd1f8 = offlineGames[_0x42fd04(0x15c)](_0x5d7380 => _0x5d7380['id'] === _0x31972b['id']);
    return _0x260897[_0x42fd04(0x12f)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + _0x31972b[_0x42fd04(0x13f)] + _0x42fd04(0x132) + _0x31972b[_0x42fd04(0x118)] + '\x22\x20loading=\x22lazy\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.src=\x27data:image/svg+xml,%3Csvg\x20xmlns=%22http://www.w3.org/2000/svg%22\x20width=%22280%22\x20height=%22180%22%3E%3Crect\x20fill=%22%23ddd%22\x20width=%22280%22\x20height=%22180%22/%3E%3Ctext\x20fill=%22%23999%22\x20font-family=%22Arial%22\x20font-size=%2218%22\x20x=%2250%25%22\x20y=%2250%25%22\x20text-anchor=%22middle%22\x20dominant-baseline=%22middle%22%3ENo\x20Image%3C/text%3E%3C/svg%3E\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22game-card-title\x22>' + _0x31972b[_0x42fd04(0x118)] + _0x42fd04(0x153) + (_0x31972b[_0x42fd04(0x13e)] || _0x42fd04(0x139)) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22game-card-category\x22>' + (_0x31972b[_0x42fd04(0x156)] || _0x42fd04(0x176)) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x511025 + _0x42fd04(0x169) + (_0x3fd1f8 ? _0x42fd04(0x136) : '') + _0x42fd04(0x179), _0x260897[_0x42fd04(0x17c)](_0x42fd04(0x16a), () => openGame(_0x31972b)), _0x260897;
}
function openGame(_0x5cd45e) {
    const _0x2aec6d = _0x391eba;
    gameTitle[_0x2aec6d(0x164)] = _0x5cd45e[_0x2aec6d(0x118)], gameIframe[_0x2aec6d(0xfd)] = _0x5cd45e[_0x2aec6d(0x10c)], gameViewer[_0x2aec6d(0x16b)][_0x2aec6d(0x128)]('hidden'), document[_0x2aec6d(0x14f)]('main-content')[_0x2aec6d(0x16b)][_0x2aec6d(0x111)](_0x2aec6d(0x15f)), !isOfflineMode && typeof db !== 'undefined' && trackGameClick(_0x5cd45e['id']), saveRecentGame(_0x5cd45e);
}
function trackGameClick(_0x16619b) {
    const _0x332482 = _0x391eba, _0x182e38 = db['ref'](_0x332482(0x12a) + _0x16619b);
    _0x182e38['transaction'](_0x3f1a7f => {
        return (_0x3f1a7f || 0x0) + 0x1;
    }, (_0x55be8d, _0x33c116, _0x30c0de) => {
        const _0x21abfc = _0x332482;
        if (_0x55be8d)
            console[_0x21abfc(0x10e)](_0x21abfc(0x13c), _0x55be8d);
        else
            _0x33c116 && console[_0x21abfc(0x154)](_0x21abfc(0x158) + _0x16619b + _0x21abfc(0x133) + _0x30c0de['val']());
    });
}
function closeGame() {
    const _0x36785d = _0x391eba;
    gameIframe[_0x36785d(0xfd)] = '', gameViewer[_0x36785d(0x16b)][_0x36785d(0x111)](_0x36785d(0x15f)), document[_0x36785d(0x14f)](_0x36785d(0x146))[_0x36785d(0x16b)][_0x36785d(0x128)](_0x36785d(0x15f));
}
function toggleFullscreen() {
    const _0x42fb63 = _0x391eba;
    !document[_0x42fb63(0x104)] ? gameViewer['requestFullscreen']()[_0x42fb63(0x120)](_0x3ac2e5 => {
        const _0xffc253 = _0x42fb63;
        console[_0xffc253(0x10e)]('Error\x20attempting\x20to\x20enable\x20fullscreen:', _0x3ac2e5);
    }) : document['exitFullscreen']();
}
function loadRecentGames() {
    const _0x2fc0f1 = _0x391eba, _0x197d36 = getRecentGames();
    if (_0x197d36[_0x2fc0f1(0x12c)] === 0x0) {
        recentSection[_0x2fc0f1(0x16b)]['add'](_0x2fc0f1(0x15f));
        return;
    }
    recentSection[_0x2fc0f1(0x16b)]['remove']('hidden'), recentGamesGrid['innerHTML'] = '', _0x197d36[_0x2fc0f1(0x100)](_0xe309b3 => {
        const _0x166a71 = _0x2fc0f1, _0x46edd3 = createGameCard(_0xe309b3);
        recentGamesGrid[_0x166a71(0x11b)](_0x46edd3);
    });
}
function getRecentGames() {
    const _0x3267e9 = _0x391eba, _0x1ed660 = localStorage[_0x3267e9(0xfe)]('recentGames');
    if (!_0x1ed660)
        return [];
    try {
        const _0x29cd3f = JSON[_0x3267e9(0x127)](_0x1ed660);
        return _0x29cd3f[_0x3267e9(0x150)](_0x355c28 => allGames['find'](_0x251b23 => _0x251b23['id'] === _0x355c28))[_0x3267e9(0x17e)](_0x3218b1 => _0x3218b1 !== undefined)[_0x3267e9(0x165)](0x0, 0x4);
    } catch (_0x50bf21) {
        return [];
    }
}
function saveRecentGame(_0x20ac2a) {
    const _0x1b11b9 = _0x391eba;
    let _0x27c3d9 = [];
    const _0x1f0143 = localStorage['getItem'](_0x1b11b9(0x126));
    if (_0x1f0143)
        try {
            _0x27c3d9 = JSON[_0x1b11b9(0x127)](_0x1f0143);
        } catch (_0x822dd8) {
            _0x27c3d9 = [];
        }
    _0x27c3d9 = _0x27c3d9[_0x1b11b9(0x17e)](_0x21f8d2 => _0x21f8d2 !== _0x20ac2a['id']), _0x27c3d9['unshift'](_0x20ac2a['id']), _0x27c3d9 = _0x27c3d9['slice'](0x0, 0x4), localStorage[_0x1b11b9(0x174)](_0x1b11b9(0x126), JSON['stringify'](_0x27c3d9)), loadRecentGames();
}
function setCachedData(_0x4e8170, _0x47e18e) {
    const _0x22fee3 = _0x391eba, _0x46fd81 = {
            'data': _0x47e18e,
            'timestamp': Date[_0x22fee3(0x170)]()
        };
    localStorage[_0x22fee3(0x174)](_0x4e8170, JSON[_0x22fee3(0x113)](_0x46fd81));
}
function getCachedData(_0x2f1e17) {
    const _0x316e9b = _0x391eba, _0x2d70bb = localStorage['getItem'](_0x2f1e17);
    if (!_0x2d70bb)
        return null;
    try {
        const {
                data: _0x5832f6,
                timestamp: _0x3f75db
            } = JSON[_0x316e9b(0x127)](_0x2d70bb), _0x17e5c5 = Date['now']() - _0x3f75db, _0x23460e = 0xa * 0x18 * 0x3c * 0x3c * 0x3e8;
        if (_0x17e5c5 > _0x23460e)
            return localStorage['removeItem'](_0x2f1e17), null;
        return _0x5832f6;
    } catch (_0x4c9411) {
        return null;
    }
}
function checkCacheExpiry() {
    const _0x231ff4 = _0x391eba, _0x268ea2 = localStorage[_0x231ff4(0xfe)](_0x231ff4(0x16c)), _0x42db4f = Date['now']();
    (!_0x268ea2 || _0x42db4f - parseInt(_0x268ea2) > 0x18 * 0x3c * 0x3c * 0x3e8) && ([
        'onlineGames',
        _0x231ff4(0x129)
    ][_0x231ff4(0x100)](_0x33ce2b => {
        getCachedData(_0x33ce2b);
    }), localStorage[_0x231ff4(0x174)](_0x231ff4(0x16c), _0x42db4f[_0x231ff4(0x10f)]()));
}
function updateNetworkStatus() {
    const _0x1f4172 = _0x391eba;
    navigator[_0x1f4172(0x135)] ? (networkStatus['classList'][_0x1f4172(0x111)](_0x1f4172(0x15f)), isOfflineMode = ![]) : (networkStatus['classList'][_0x1f4172(0x128)](_0x1f4172(0x15f)), networkStatus[_0x1f4172(0x16b)][_0x1f4172(0x128)](_0x1f4172(0x13a)), networkMessage[_0x1f4172(0x164)] = _0x1f4172(0x160), isOfflineMode = !![]);
}
function updateThemeIcon() {
    const _0x13f6f1 = _0x391eba, _0x6a3d79 = document[_0x13f6f1(0x116)][_0x13f6f1(0x10a)](_0x13f6f1(0x17f)), _0x57ed7f = document[_0x13f6f1(0x14f)](_0x13f6f1(0x11c)), _0x9086f1 = document[_0x13f6f1(0x14f)](_0x13f6f1(0x102));
    _0x6a3d79 === 'dark' ? (_0x57ed7f['classList'][_0x13f6f1(0x111)](_0x13f6f1(0x15f)), _0x9086f1[_0x13f6f1(0x16b)][_0x13f6f1(0x128)](_0x13f6f1(0x15f))) : (_0x57ed7f[_0x13f6f1(0x16b)][_0x13f6f1(0x128)](_0x13f6f1(0x15f)), _0x9086f1['classList'][_0x13f6f1(0x111)]('hidden'));
}
function setupInfiniteScroll() {
    const _0xdc013a = _0x391eba, _0x3c8ba6 = new IntersectionObserver(_0x2c9aa1 => {
            const _0xd13781 = _0x15b1;
            _0x2c9aa1[_0xd13781(0x100)](_0x544f45 => {
                const _0x3c4829 = _0xd13781;
                if (_0x544f45[_0x3c4829(0x131)] && !isLoading) {
                    const _0x154e92 = filterGames(), _0x11fb8e = currentPage * gamesPerPage < _0x154e92[_0x3c4829(0x12c)];
                    _0x11fb8e && (isLoading = !![], loadingSpinner[_0x3c4829(0x16b)][_0x3c4829(0x128)]('hidden'), setTimeout(() => {
                        const _0x195e02 = _0x3c4829;
                        displayGames(!![]), loadingSpinner[_0x195e02(0x16b)]['add']('hidden'), isLoading = ![];
                    }, 0x1f4));
                }
            });
        }, { 'threshold': 0.5 });
    _0x3c8ba6[_0xdc013a(0x16d)](loadingSpinner);
}
function setupEventListeners() {
    const _0x63848c = _0x391eba;
    window[_0x63848c(0x17c)](_0x63848c(0x124), _0x423869 => {
        const _0x45d0b3 = _0x63848c;
        if (!gameViewer['classList'][_0x45d0b3(0x151)](_0x45d0b3(0x15f)))
            _0x423869[_0x45d0b3(0x168)](), closeGame(), history[_0x45d0b3(0x159)](null, '', location[_0x45d0b3(0x130)]);
        else {
            const _0x516205 = confirm(_0x45d0b3(0x161));
            _0x516205 ? window[_0x45d0b3(0x145)][_0x45d0b3(0x14e)]() : history[_0x45d0b3(0x159)](null, '', location['href']);
        }
    }), history[_0x63848c(0x159)](null, '', location[_0x63848c(0x130)]), themeToggle[_0x63848c(0x17c)](_0x63848c(0x16a), () => {
        const _0x2ece34 = _0x63848c, _0x3ec56b = document[_0x2ece34(0x116)][_0x2ece34(0x10a)](_0x2ece34(0x17f)), _0x18595f = _0x3ec56b === _0x2ece34(0x15b) ? 'light' : _0x2ece34(0x15b);
        document[_0x2ece34(0x116)][_0x2ece34(0x152)](_0x2ece34(0x17f), _0x18595f), localStorage['setItem'](_0x2ece34(0x15d), _0x18595f), updateThemeIcon();
    }), searchInput[_0x63848c(0x17c)](_0x63848c(0x14c), _0x474925 => {
        const _0x14adab = _0x63848c;
        currentSearchTerm = _0x474925[_0x14adab(0x149)]['value'], displayGames();
    }), categoriesWrapper[_0x63848c(0x17c)](_0x63848c(0x16a), _0xa13d08 => {
        const _0x183569 = _0x63848c;
        _0xa13d08[_0x183569(0x149)]['classList'][_0x183569(0x151)](_0x183569(0x121)) && (document[_0x183569(0x110)](_0x183569(0x11a))[_0x183569(0x100)](_0x5d353e => {
            const _0xe58a7f = _0x183569;
            _0x5d353e['classList'][_0xe58a7f(0x128)](_0xe58a7f(0x108));
        }), _0xa13d08[_0x183569(0x149)]['classList']['add'](_0x183569(0x108)), currentCategory = _0xa13d08[_0x183569(0x149)]['getAttribute'](_0x183569(0x138)), displayGames());
    }), closeGameBtn[_0x63848c(0x17c)]('click', closeGame), fullscreenGameBtn[_0x63848c(0x17c)]('click', toggleFullscreen), window[_0x63848c(0x17c)](_0x63848c(0x13a), () => {
        updateNetworkStatus(), loadGames();
    }), window[_0x63848c(0x17c)](_0x63848c(0x144), () => {
        updateNetworkStatus(), displayGames();
    }), document[_0x63848c(0x10b)](_0x63848c(0x11e))[_0x63848c(0x17c)]('click', () => {
        const _0x3cee4a = _0x63848c;
        location[_0x3cee4a(0x147)]();
    });
}
document[_0x391eba(0x167)] === 'loading' ? document['addEventListener'](_0x391eba(0x16f), init) : init();
function _0x23bf() {
    const _0x24b709 = [
        'className',
        'gamar-421515',
        'innerHTML',
        'href',
        'isIntersecting',
        '\x22\x20alt=\x22',
        '\x20click\x20tracked.\x20New\x20count:\x20',
        'localeCompare',
        'onLine',
        '<span\x20class=\x22game-card-badge\x22>Offline</span>',
        '1:441909945114:web:08db60dd1a604713c882a3',
        'data-category',
        'No\x20description\x20available',
        'online',
        'database',
        'Transaction\x20failed:\x20',
        'Error\x20loading\x20games:',
        'description',
        'icon',
        'https://gamar-421515-default-rtdb.firebaseio.com',
        '1961272QGQdSp',
        'Offline\x20Games',
        'close-game-btn',
        'offline',
        'history',
        'main-content',
        'reload',
        '109207nbdJJv',
        'target',
        'network-status',
        'light',
        'input',
        '3305730nEIdbU',
        'back',
        'getElementById',
        'map',
        'contains',
        'setAttribute',
        '</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22game-card-description\x22>',
        'log',
        'network-message',
        'category',
        'game-title',
        'Game\x20',
        'pushState',
        '138NthJFu',
        'dark',
        'some',
        'theme',
        '39322sYZDMB',
        'hidden',
        '⚠️\x20You\x20are\x20offline.\x20Showing\x20cached\x20games.',
        'আপনি\x20কি\x20Website\x20থেকে\x20বের\x20হতে\x20চান?',
        'value',
        'onlineGames',
        'textContent',
        'slice',
        '<span\x20class=\x22game-card-clicks\x22>🔥\x20',
        'readyState',
        'preventDefault',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'click',
        'classList',
        'lastCacheCheck',
        'observe',
        '.categories-wrapper',
        'DOMContentLoaded',
        'now',
        'game-card',
        '2679640okLkiS',
        '3909168XmZbLB',
        'setItem',
        'includes',
        'gaming',
        '24Mjlftg',
        'createElement',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        'loading-spinner',
        'no-results',
        'addEventListener',
        'undefined',
        'filter',
        'data-theme',
        'src',
        'getItem',
        '[data-category=\x22all\x22]',
        'forEach',
        '441909945114',
        'theme-icon-moon',
        'charAt',
        'fullscreenElement',
        'Firebase\x20SDK\x20not\x20loaded.\x20Check\x20your\x20HTML\x20setup.',
        'clicks',
        'json',
        'active',
        'All\x20Games',
        'getAttribute',
        'querySelector',
        'url',
        'G-2R0FC5DW33',
        'error',
        'toString',
        'querySelectorAll',
        'add',
        'initializeApp',
        'stringify',
        'toUpperCase',
        'all',
        'documentElement',
        'data-game-id',
        'name',
        'toLowerCase',
        '.category-btn',
        'appendChild',
        'theme-icon-sun',
        'onlinegameadd.json',
        '.logo',
        'AIzaSyDOHM_mVxVVrFPWb545mIucoSW4fBJQamk',
        'catch',
        'category-btn',
        'search-input',
        '1871940ikWYUq',
        'popstate',
        'val',
        'recentGames',
        'parse',
        'remove',
        'offlineGames',
        'game_clicks/',
        'fullscreen-game-btn',
        'length'
    ];
    _0x23bf = function () {
        return _0x24b709;
    };
    return _0x23bf();
}