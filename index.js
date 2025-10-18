const _0x42e217 = _0x4c05;
(function (_0x3c527d, _0x556700) {
    const _0xbbe751 = _0x4c05, _0x530799 = _0x3c527d();
    while (!![]) {
        try {
            const _0x4faf58 = -parseInt(_0xbbe751(0xf4)) / 0x1 + parseInt(_0xbbe751('0x8c')) / 0x2 * (-parseInt(_0xbbe751('0xa7')) / 0x3) + -parseInt(_0xbbe751('0xcf')) / 0x4 + -parseInt(_0xbbe751(0x9e)) / 0x5 * (-parseInt(_0xbbe751('0xc2')) / 0x6) + -parseInt(_0xbbe751('0x74')) / 0x7 * (-parseInt(_0xbbe751('0x81')) / 0x8) + -parseInt(_0xbbe751('0xb9')) / 0x9 * (-parseInt(_0xbbe751('0xeb')) / 0xa) + parseInt(_0xbbe751('0x8e')) / 0xb * (parseInt(_0xbbe751('0xe5')) / 0xc);
            if (_0x4faf58 === _0x556700)
                break;
            else
                _0x530799['push'](_0x530799['shift']());
        } catch (_0x15c7d6) {
            _0x530799['push'](_0x530799['shift']());
        }
    }
}(_0x4384, 0xc4382));
const firebaseConfig = {
    'apiKey': _0x42e217(0xa1),
    'authDomain': _0x42e217('0xe0'),
    'databaseURL': _0x42e217('0x83'),
    'projectId': 'gamar-421515',
    'storageBucket': _0x42e217(0xb0),
    'messagingSenderId': '441909945114',
    'appId': _0x42e217(0x92),
    'measurementId': _0x42e217('0xcb')
};
if (typeof firebase !== 'undefined') {
    firebase[_0x42e217('0xdd')](firebaseConfig);
    var db = firebase[_0x42e217('0xb5')]();
} else
    console[_0x42e217(0x76)]('Firebase\x20SDK\x20not\x20loaded.\x20Check\x20your\x20HTML\x20setup.');
let allGames = [], onlineGames = [], offlineGames = [], displayedGames = [], currentCategory = 'all', currentSearchTerm = '', currentPage = 0x0;
const gamesPerPage = 0x77359400;
let isLoading = ![], isOfflineMode = ![], clickData = {};
const gamesGrid = document[_0x42e217('0xa3')]('games-grid'), recentGamesGrid = document[_0x42e217(0xa3)](_0x42e217('0x95')), recentSection = document[_0x42e217(0xa3)](_0x42e217('0xc4')), searchInput = document[_0x42e217(0xa3)](_0x42e217(0xa6)), categoriesWrapper = document[_0x42e217('0xd3')]('.categories-wrapper'), loadingSpinner = document[_0x42e217(0xa3)](_0x42e217('0xe4')), noResults = document['getElementById']('no-results'), themeToggle = document['getElementById'](_0x42e217(0x73)), gameViewer = document[_0x42e217(0xa3)]('game-viewer'), gameIframe = document[_0x42e217(0xa3)](_0x42e217(0xdb)), gameTitle = document[_0x42e217('0xa3')](_0x42e217('0x82')), closeGameBtn = document[_0x42e217('0xa3')](_0x42e217(0xa5)), fullscreenGameBtn = document[_0x42e217(0xa3)]('fullscreen-game-btn'), networkStatus = document[_0x42e217('0xa3')]('network-status'), networkMessage = document[_0x42e217(0xa3)](_0x42e217(0x90)), gamesSectionTitle = document[_0x42e217('0xa3')]('games-section-title');
async function init() {
    const _0x2cd7f4 = _0x42e217, _0x174ab3 = localStorage[_0x2cd7f4(0xac)](_0x2cd7f4(0xf0)) || _0x2cd7f4(0xbe);
    document[_0x2cd7f4('0xc5')][_0x2cd7f4('0xca')](_0x2cd7f4(0x85), _0x174ab3), updateThemeIcon(), checkCacheExpiry(), await loadGames(), loadRecentGames(), setupEventListeners(), updateNetworkStatus(), setupInfiniteScroll();
}
async function loadGames() {
    const _0x2d775f = _0x42e217;
    try {
        const _0x1f28cd = getCachedData(_0x2d775f('0xd9')), _0x4a2fcb = getCachedData(_0x2d775f('0xcd'));
        if (navigator[_0x2d775f('0xbb')]) {
            const [_0x25aa4d, _0x517b59] = await Promise[_0x2d775f(0xaf)]([
                fetch('onlinegameadd.json'),
                fetch(_0x2d775f('0x70'))
            ]);
            onlineGames = await _0x25aa4d[_0x2d775f('0x9a')](), offlineGames = await _0x517b59[_0x2d775f(0x9a)](), setCachedData(_0x2d775f(0xd9), onlineGames), setCachedData(_0x2d775f(0xcd), offlineGames);
        } else
            onlineGames = _0x1f28cd || [], offlineGames = _0x4a2fcb || [], isOfflineMode = !![];
        allGames = [
            ...onlineGames,
            ...offlineGames
        ], !isOfflineMode && typeof db !== _0x2d775f('0xae') && (loadingSpinner[_0x2d775f(0xd4)][_0x2d775f(0xaa)](_0x2d775f('0xdf')), await loadClickCounts(), sortGamesByClicks(), loadingSpinner[_0x2d775f(0xd4)][_0x2d775f(0x80)]('hidden')), generateCategories(), displayGames();
    } catch (_0x47552d) {
        console[_0x2d775f(0x76)]('Error\x20loading\x20games:', _0x47552d);
        const _0x56e856 = getCachedData(_0x2d775f('0xd9')), _0x3128cd = getCachedData('offlineGames');
        (_0x56e856 || _0x3128cd) && (onlineGames = _0x56e856 || [], offlineGames = _0x3128cd || [], allGames = [
            ...onlineGames,
            ...offlineGames
        ], isOfflineMode = !![], generateCategories(), displayGames());
    }
}
async function loadClickCounts() {
    const _0x4b292f = _0x42e217;
    try {
        const _0x5b835e = await db[_0x4b292f('0x91')](_0x4b292f('0xd2'))[_0x4b292f(0x8a)](_0x4b292f(0x72));
        clickData = _0x5b835e[_0x4b292f('0x99')]() || {}, allGames[_0x4b292f('0x7f')](_0x3607ca => {
            const _0x52a76f = clickData[_0x3607ca['id']] || 0x0;
            _0x3607ca['clicks'] = _0x52a76f;
        });
    } catch (_0x4e82ab) {
        console[_0x4b292f(0x76)](_0x4b292f(0xbd), _0x4e82ab);
    }
}
function sortGamesByClicks() {
    const _0x28a1ac = _0x42e217;
    allGames[_0x28a1ac(0x87)]((_0x5cb41c, _0x178cec) => {
        const _0x5958c9 = _0x28a1ac, _0x3444ed = _0x5cb41c[_0x5958c9('0x96')] || 0x0, _0x1de3af = _0x178cec[_0x5958c9('0x96')] || 0x0;
        if (_0x1de3af !== _0x3444ed)
            return _0x1de3af - _0x3444ed;
        return _0x5cb41c[_0x5958c9(0xe7)][_0x5958c9(0xd1)](_0x178cec[_0x5958c9(0xe7)]);
    });
}
function generateCategories() {
    const _0x5070e7 = _0x42e217, _0x3995c3 = new Set();
    allGames[_0x5070e7('0x7f')](_0x550788 => {
        const _0x162214 = _0x5070e7;
        _0x550788[_0x162214('0xd0')] && _0x3995c3[_0x162214(0x80)](_0x550788[_0x162214('0xd0')][_0x162214('0x7d')]());
    });
    const _0x2b2a7d = categoriesWrapper[_0x5070e7('0xd3')]('[data-category=\x22all\x22]');
    categoriesWrapper['innerHTML'] = '', categoriesWrapper['appendChild'](_0x2b2a7d), _0x3995c3[_0x5070e7('0x7f')](_0x595537 => {
        const _0x11b623 = _0x5070e7, _0x2f0d2b = document['createElement'](_0x11b623('0xc7'));
        _0x2f0d2b[_0x11b623('0xd5')] = _0x11b623('0xc3'), _0x2f0d2b[_0x11b623('0xca')](_0x11b623('0x86'), _0x595537), _0x2f0d2b[_0x11b623(0x7c)] = _0x595537['charAt'](0x0)[_0x11b623('0xe6')]() + _0x595537[_0x11b623('0x7a')](0x1), categoriesWrapper[_0x11b623(0x8f)](_0x2f0d2b);
    });
}
function filterGames() {
    const _0x13fa4f = _0x42e217;
    let _0x135fc9 = allGames;
    return currentCategory !== _0x13fa4f(0xaf) && (_0x135fc9 = _0x135fc9['filter'](_0x78c839 => _0x78c839['category'] && _0x78c839['category'][_0x13fa4f(0x7d)]() === currentCategory)), currentSearchTerm && (_0x135fc9 = _0x135fc9['filter'](_0x30e037 => _0x30e037[_0x13fa4f('0xe7')][_0x13fa4f(0x7d)]()[_0x13fa4f('0xb7')](currentSearchTerm[_0x13fa4f('0x7d')]()) || _0x30e037[_0x13fa4f('0x97')] && _0x30e037[_0x13fa4f(0x97)][_0x13fa4f('0x7d')]()[_0x13fa4f(0xb7)](currentSearchTerm[_0x13fa4f('0x7d')]()))), isOfflineMode && (_0x135fc9 = _0x135fc9[_0x13fa4f(0x9c)](_0x1e46f5 => offlineGames['some'](_0x2b1ee3 => _0x2b1ee3['id'] === _0x1e46f5['id']))), _0x135fc9;
}
function _0x4384() {
    const _0x58dc4f = [
        'theme-toggle',
        '7eMaLMY',
        'exitFullscreen',
        'error',
        'theme-icon-moon',
        'New\x20feature\x20loaded!',
        '\x20click\x20tracked.\x20New\x20count:\x20',
        'slice',
        'url',
        'textContent',
        'toLowerCase',
        'lastCacheCheck',
        'forEach',
        'add',
        '7697472ccpjcf',
        'game-title',
        'https://gamar-421515-default-rtdb.firebaseio.com',
        'createElement',
        'data-theme',
        'data-category',
        'sort',
        'dark',
        'div',
        'once',
        'Offline\x20Games',
        '180392FCRSdE',
        'No\x20description\x20available',
        '1210LXljGo',
        'appendChild',
        'network-message',
        'ref',
        '1:441909945114:web:08db60dd1a604713c882a3',
        'icon',
        'loading',
        'recent-games',
        'clicks',
        'description',
        'toString',
        'val',
        'json',
        'Error\x20attempting\x20to\x20enable\x20fullscreen:',
        'filter',
        '\x20</span>',
        '75WmGRQC',
        'parse',
        'online',
        'AIzaSyDOHM_mVxVVrFPWb545mIucoSW4fBJQamk',
        'contains',
        'getElementById',
        'transaction',
        'close-game-btn',
        'search-input',
        '33RsCpCQ',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        '\x22\x20loading=\x22lazy\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.src=\x27data:image/svg+xml,%3Csvg\x20xmlns=%22http://www.w3.org/2000/svg%22\x20width=%22280%22\x20height=%22180%22%3E%3Crect\x20fill=%22%23ddd%22\x20width=%22280%22\x20height=%22180%22/%3E%3Ctext\x20fill=%22%23999%22\x20font-family=%22Arial%22\x20font-size=%2218%22\x20x=%2250%25%22\x20y=%2250%25%22\x20text-anchor=%22middle%22\x20dominant-baseline=%22middle%22%3ENo\x20Image%3C/text%3E%3C/svg%3E\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22game-card-title\x22>',
        'remove',
        '\x22\x20alt=\x22',
        'getItem',
        'map',
        'undefined',
        'all',
        'gamar-421515.appspot.com',
        'innerHTML',
        'Transaction\x20failed:\x20',
        'game-card',
        'target',
        'database',
        'fullscreenElement',
        'includes',
        'main-content',
        '18adHaCo',
        'data-game-id',
        'onLine',
        'some',
        'Error\x20loading\x20click\x20counts\x20from\x20Firebase:',
        'light',
        '⚠️\x20You\x20are\x20offline.\x20Showing\x20cached\x20games.',
        'log',
        'offline',
        '317646YfSMKU',
        'category-btn',
        'recent-section',
        'documentElement',
        'theme-icon-sun',
        'button',
        'unshift',
        'querySelectorAll',
        'setAttribute',
        'G-2R0FC5DW33',
        'gaming',
        'offlineGames',
        'game_clicks/',
        '5257056YbURhq',
        'category',
        'localeCompare',
        'game_clicks',
        'querySelector',
        'classList',
        'className',
        '.category-btn',
        'src',
        'input',
        'onlineGames',
        'setItem',
        'game-iframe',
        'find',
        'initializeApp',
        '<span\x20class=\x22game-card-badge\x22>Offline</span>',
        'hidden',
        'gamar-421515.firebaseapp.com',
        '.logo',
        'length',
        'https://cdn.jsdelivr.net/gh/m03951659gmail/toolhubcdn@main/allfileadd.js',
        'loading-spinner',
        '275664BrxKOJ',
        'toUpperCase',
        'name',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22game-card-category\x22>',
        'reload',
        'script',
        '55970mRsUac',
        'recentGames',
        'addEventListener',
        'push',
        'now',
        'theme',
        'getAttribute',
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22game-card-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
        '1184279RhckeC',
        'click',
        'offlinegameadd.json',
        'isIntersecting',
        'value'
    ];
    _0x4384 = function () {
        return _0x58dc4f;
    };
    return _0x4384();
}
function displayGames(_0x1fd0e3 = ![]) {
    const _0x5c2c84 = _0x42e217, _0x34a7eb = filterGames();
    !_0x1fd0e3 && (currentPage = 0x0, gamesGrid['innerHTML'] = '', displayedGames = []);
    const _0xf181c5 = currentPage * gamesPerPage, _0x45cc56 = _0xf181c5 + gamesPerPage, _0x127cde = _0x34a7eb[_0x5c2c84('0x7a')](_0xf181c5, _0x45cc56);
    if (_0x127cde[_0x5c2c84('0xe2')] === 0x0 && displayedGames[_0x5c2c84('0xe2')] === 0x0) {
        noResults[_0x5c2c84('0xd4')][_0x5c2c84('0xaa')]('hidden'), gamesGrid[_0x5c2c84('0xd4')]['add'](_0x5c2c84(0xdf));
        return;
    } else
        noResults[_0x5c2c84(0xd4)][_0x5c2c84('0x80')]('hidden'), gamesGrid[_0x5c2c84(0xd4)][_0x5c2c84(0xaa)]('hidden');
    _0x127cde['forEach'](_0x24c35c => {
        const _0x1c97d2 = _0x5c2c84, _0x28deda = createGameCard(_0x24c35c);
        gamesGrid[_0x1c97d2(0x8f)](_0x28deda), displayedGames[_0x1c97d2('0xee')](_0x24c35c);
    }), currentPage++, currentCategory === _0x5c2c84('0xaf') ? gamesSectionTitle[_0x5c2c84('0x7c')] = isOfflineMode ? _0x5c2c84('0x8b') : 'All\x20Games' : gamesSectionTitle[_0x5c2c84('0x7c')] = currentCategory['charAt'](0x0)[_0x5c2c84(0xe6)]() + currentCategory['slice'](0x1);
}
function createGameCard(_0x23169d) {
    const _0x2033fe = _0x42e217, _0x293e67 = document[_0x2033fe('0x84')](_0x2033fe('0x89'));
    _0x293e67['className'] = _0x2033fe(0xb3), _0x293e67['setAttribute'](_0x2033fe('0xba'), _0x23169d['id']);
    const _0x197828 = _0x23169d[_0x2033fe(0x96)] !== undefined ? _0x23169d[_0x2033fe('0x96')] : clickData[_0x23169d['id']] || 0x0, _0x4717ce = _0x197828 > 0x0 ? '<span\x20class=\x22game-card-clicks\x22>🔥\x20' + _0x197828 + _0x2033fe(0x9d) : '', _0xf8fda9 = offlineGames[_0x2033fe(0xbc)](_0x2dab29 => _0x2dab29['id'] === _0x23169d['id']);
    return _0x293e67['innerHTML'] = _0x2033fe('0xf3') + _0x23169d[_0x2033fe('0x93')] + _0x2033fe(0xab) + _0x23169d['name'] + _0x2033fe(0xa9) + _0x23169d[_0x2033fe(0xe7)] + '</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22game-card-description\x22>' + (_0x23169d['description'] || _0x2033fe('0x8d')) + _0x2033fe(0xe8) + (_0x23169d[_0x2033fe('0xd0')] || _0x2033fe('0xcc')) + _0x2033fe('0xf2') + _0x4717ce + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xf8fda9 ? _0x2033fe('0xde') : '') + _0x2033fe(0xa8), _0x293e67['addEventListener'](_0x2033fe(0xf5), () => openGame(_0x23169d)), _0x293e67;
}
function openGame(_0x8dcae7) {
    const _0x1cc24f = _0x42e217;
    gameTitle[_0x1cc24f('0x7c')] = _0x8dcae7[_0x1cc24f('0xe7')], gameIframe['src'] = _0x8dcae7[_0x1cc24f('0x7b')], gameViewer[_0x1cc24f(0xd4)][_0x1cc24f('0xaa')]('hidden'), document[_0x1cc24f('0xa3')]('main-content')[_0x1cc24f(0xd4)]['add'](_0x1cc24f('0xdf')), !isOfflineMode && typeof db !== 'undefined' && trackGameClick(_0x8dcae7['id']), saveRecentGame(_0x8dcae7);
}
function trackGameClick(_0x25ab4f) {
    const _0x571a0c = _0x42e217, _0x32166c = db[_0x571a0c('0x91')](_0x571a0c('0xce') + _0x25ab4f);
    _0x32166c[_0x571a0c('0xa4')](_0x42398b => {
        return (_0x42398b || 0x0) + 0x1;
    }, (_0x4112f0, _0x3130e6, _0x29ee2f) => {
        const _0x146656 = _0x571a0c;
        if (_0x4112f0)
            console[_0x146656(0x76)](_0x146656('0xb2'), _0x4112f0);
        else
            _0x3130e6 && console['log']('Game\x20' + _0x25ab4f + _0x146656(0x79) + _0x29ee2f[_0x146656(0x99)]());
    });
}
function closeGame() {
    const _0x4e0eb5 = _0x42e217;
    gameIframe[_0x4e0eb5(0xd7)] = '', gameViewer['classList'][_0x4e0eb5('0x80')](_0x4e0eb5('0xdf')), document[_0x4e0eb5('0xa3')](_0x4e0eb5('0xb8'))[_0x4e0eb5(0xd4)][_0x4e0eb5(0xaa)]('hidden');
}
function toggleFullscreen() {
    const _0x56c77f = _0x42e217;
    !document[_0x56c77f('0xb6')] ? gameViewer['requestFullscreen']()['catch'](_0x2269f5 => {
        const _0x1a3df7 = _0x56c77f;
        console['error'](_0x1a3df7(0x9b), _0x2269f5);
    }) : document[_0x56c77f(0x75)]();
}
function loadRecentGames() {
    const _0x4451a3 = _0x42e217, _0x1f8fed = getRecentGames();
    if (_0x1f8fed['length'] === 0x0) {
        recentSection['classList'][_0x4451a3(0x80)](_0x4451a3(0xdf));
        return;
    }
    recentSection[_0x4451a3('0xd4')][_0x4451a3('0xaa')](_0x4451a3('0xdf')), recentGamesGrid[_0x4451a3('0xb1')] = '', _0x1f8fed[_0x4451a3('0x7f')](_0x2bed07 => {
        const _0x45d224 = _0x4451a3, _0x5a6745 = createGameCard(_0x2bed07);
        recentGamesGrid[_0x45d224('0x8f')](_0x5a6745);
    });
}
function getRecentGames() {
    const _0x16ea88 = _0x42e217, _0x44ff43 = localStorage['getItem'](_0x16ea88('0xec'));
    if (!_0x44ff43)
        return [];
    try {
        const _0xd5d488 = JSON[_0x16ea88('0x9f')](_0x44ff43);
        return _0xd5d488[_0x16ea88('0xad')](_0xa6bcbe => allGames[_0x16ea88('0xdc')](_0x42aece => _0x42aece['id'] === _0xa6bcbe))[_0x16ea88('0x9c')](_0x421c19 => _0x421c19 !== undefined)[_0x16ea88(0x7a)](0x0, 0x4);
    } catch (_0x3f1576) {
        return [];
    }
}
function saveRecentGame(_0x246bfb) {
    const _0x50cb73 = _0x42e217;
    let _0x37b40a = [];
    const _0x2bae59 = localStorage['getItem'](_0x50cb73('0xec'));
    if (_0x2bae59)
        try {
            _0x37b40a = JSON[_0x50cb73('0x9f')](_0x2bae59);
        } catch (_0x40eb4e) {
            _0x37b40a = [];
        }
    _0x37b40a = _0x37b40a['filter'](_0x3e1f42 => _0x3e1f42 !== _0x246bfb['id']), _0x37b40a[_0x50cb73(0xc8)](_0x246bfb['id']), _0x37b40a = _0x37b40a['slice'](0x0, 0x4), localStorage[_0x50cb73(0xda)](_0x50cb73(0xec), JSON['stringify'](_0x37b40a)), loadRecentGames();
}
function setCachedData(_0x3d9d2d, _0x279ce5) {
    const _0x3babd4 = _0x42e217, _0x2eff22 = {
            'data': _0x279ce5,
            'timestamp': Date[_0x3babd4('0xef')]()
        };
    localStorage[_0x3babd4(0xda)](_0x3d9d2d, JSON['stringify'](_0x2eff22));
}
function getCachedData(_0x4239bc) {
    const _0x27baa4 = _0x42e217, _0x2086e6 = localStorage['getItem'](_0x4239bc);
    if (!_0x2086e6)
        return null;
    try {
        const {
                data: _0x4c837d,
                timestamp: _0x1f61aa
            } = JSON[_0x27baa4(0x9f)](_0x2086e6), _0x2b3f25 = Date[_0x27baa4('0xef')]() - _0x1f61aa, _0x16ee9a = 0xa * 0x18 * 0x3c * 0x3c * 0x3e8;
        if (_0x2b3f25 > _0x16ee9a)
            return localStorage['removeItem'](_0x4239bc), null;
        return _0x4c837d;
    } catch (_0x27f786) {
        return null;
    }
}
function checkCacheExpiry() {
    const _0x3b9b0d = _0x42e217, _0x31c899 = localStorage[_0x3b9b0d('0xac')]('lastCacheCheck'), _0x20de96 = Date['now']();
    (!_0x31c899 || _0x20de96 - parseInt(_0x31c899) > 0x18 * 0x3c * 0x3c * 0x3e8) && ([
        _0x3b9b0d('0xd9'),
        _0x3b9b0d(0xcd)
    ]['forEach'](_0x44afa3 => {
        getCachedData(_0x44afa3);
    }), localStorage[_0x3b9b0d('0xda')](_0x3b9b0d('0x7e'), _0x20de96[_0x3b9b0d(0x98)]()));
}
function updateNetworkStatus() {
    const _0x655c59 = _0x42e217;
    navigator[_0x655c59(0xbb)] ? (networkStatus[_0x655c59('0xd4')][_0x655c59('0x80')](_0x655c59(0xdf)), isOfflineMode = ![]) : (networkStatus[_0x655c59(0xd4)][_0x655c59('0xaa')]('hidden'), networkStatus['classList']['remove'](_0x655c59(0xa0)), networkMessage['textContent'] = _0x655c59(0xbf), isOfflineMode = !![]);
}
function updateThemeIcon() {
    const _0x1b9710 = _0x42e217, _0x981823 = document['documentElement']['getAttribute'](_0x1b9710(0x85)), _0x3453bc = document[_0x1b9710(0xa3)](_0x1b9710(0xc6)), _0x5808b3 = document[_0x1b9710('0xa3')](_0x1b9710(0x77));
    _0x981823 === _0x1b9710('0x88') ? (_0x3453bc[_0x1b9710(0xd4)][_0x1b9710(0x80)]('hidden'), _0x5808b3[_0x1b9710(0xd4)][_0x1b9710('0xaa')](_0x1b9710('0xdf'))) : (_0x3453bc[_0x1b9710(0xd4)][_0x1b9710(0xaa)](_0x1b9710(0xdf)), _0x5808b3[_0x1b9710(0xd4)]['add']('hidden'));
}
function setupInfiniteScroll() {
    const _0x32d03e = new IntersectionObserver(_0x432fe7 => {
        _0x432fe7['forEach'](_0x19f442 => {
            const _0x216442 = _0x4c05;
            if (_0x19f442[_0x216442('0x71')] && !isLoading) {
                const _0x886416 = filterGames(), _0x1177af = currentPage * gamesPerPage < _0x886416[_0x216442(0xe2)];
                _0x1177af && (isLoading = !![], loadingSpinner['classList'][_0x216442('0xaa')]('hidden'), setTimeout(() => {
                    const _0x15c5b3 = _0x216442;
                    displayGames(!![]), loadingSpinner[_0x15c5b3('0xd4')][_0x15c5b3(0x80)](_0x15c5b3('0xdf')), isLoading = ![];
                }, 0x1f4));
            }
        });
    }, { 'threshold': 0.5 });
    _0x32d03e['observe'](loadingSpinner);
}
function setupEventListeners() {
    const _0x3bd287 = _0x42e217;
    themeToggle[_0x3bd287('0xed')](_0x3bd287(0xf5), () => {
        const _0x3080e2 = _0x3bd287, _0x1347b8 = document[_0x3080e2('0xc5')][_0x3080e2(0xf1)]('data-theme'), _0x11c5d0 = _0x1347b8 === _0x3080e2(0x88) ? _0x3080e2('0xbe') : _0x3080e2(0x88);
        document[_0x3080e2('0xc5')][_0x3080e2(0xca)](_0x3080e2('0x85'), _0x11c5d0), localStorage[_0x3080e2(0xda)]('theme', _0x11c5d0), updateThemeIcon();
    }), searchInput['addEventListener'](_0x3bd287(0xd8), _0x30919e => {
        const _0x3054e2 = _0x3bd287;
        currentSearchTerm = _0x30919e[_0x3054e2('0xb4')][_0x3054e2('0x72')], displayGames();
    }), categoriesWrapper[_0x3bd287('0xed')](_0x3bd287(0xf5), _0x44d4a5 => {
        const _0x436439 = _0x3bd287;
        _0x44d4a5[_0x436439(0xb4)][_0x436439(0xd4)][_0x436439('0xa2')](_0x436439(0xc3)) && (document[_0x436439('0xc9')](_0x436439('0xd6'))['forEach'](_0x2b40b3 => {
            const _0x2be8e7 = _0x436439;
            _0x2b40b3[_0x2be8e7(0xd4)][_0x2be8e7(0xaa)]('active');
        }), _0x44d4a5[_0x436439('0xb4')][_0x436439('0xd4')][_0x436439('0x80')]('active'), currentCategory = _0x44d4a5['target'][_0x436439(0xf1)]('data-category'), displayGames());
    }), closeGameBtn[_0x3bd287('0xed')]('click', closeGame), fullscreenGameBtn['addEventListener'](_0x3bd287('0xf5'), toggleFullscreen), window[_0x3bd287(0xed)]('online', () => {
        updateNetworkStatus(), loadGames();
    }), window[_0x3bd287(0xed)](_0x3bd287('0xc1'), () => {
        updateNetworkStatus(), displayGames();
    }), document[_0x3bd287(0xd3)](_0x3bd287(0xe1))[_0x3bd287(0xed)]('click', () => {
        const _0x69e3da = _0x3bd287;
        location[_0x69e3da(0xe9)]();
    });
}
function _0x4c05(_0x1d8f74, _0x1e01e5) {
    const _0x43842e = _0x4384();
    return _0x4c05 = function (_0x4c0500, _0x686de0) {
        _0x4c0500 = _0x4c0500 - 0x70;
        let _0x386e52 = _0x43842e[_0x4c0500];
        return _0x386e52;
    }, _0x4c05(_0x1d8f74, _0x1e01e5);
}
document['readyState'] === _0x42e217('0x94') ? document['addEventListener']('DOMContentLoaded', init) : init();
function loadScript(_0x7fc278, _0x1da77c) {
    const _0x21fad7 = _0x42e217, _0x1b094b = document['createElement'](_0x21fad7('0xea'));
    _0x1b094b['src'] = _0x7fc278, _0x1b094b['onload'] = _0x1da77c, document['head']['appendChild'](_0x1b094b);
}
loadScript(_0x42e217(0xe3), function () {
    const _0x4e8cd8 = _0x42e217;
    console[_0x4e8cd8(0xc0)](_0x4e8cd8(0x78));
});