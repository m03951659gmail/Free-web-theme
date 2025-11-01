const _0xddedde = _0x32d7;
(function (_0x4233e2, _0x1b8a07) {
    const _0x5468ea = _0x32d7, _0x5f58f2 = _0x4233e2();
    while (!![]) {
        try {
            const _0x23c298 = -parseInt(_0x5468ea(0xf5)) / 0x1 * (parseInt(_0x5468ea(0xfa)) / 0x2) + -parseInt(_0x5468ea(0xe7)) / 0x3 + -parseInt(_0x5468ea(0xe9)) / 0x4 * (-parseInt(_0x5468ea(0x109)) / 0x5) + -parseInt(_0x5468ea(0xf1)) / 0x6 * (-parseInt(_0x5468ea(0x10c)) / 0x7) + -parseInt(_0x5468ea(0xea)) / 0x8 + parseInt(_0x5468ea(0x107)) / 0x9 + -parseInt(_0x5468ea(0x106)) / 0xa;
            if (_0x23c298 === _0x1b8a07)
                break;
            else
                _0x5f58f2['push'](_0x5f58f2['shift']());
        } catch (_0x3e9fcc) {
            _0x5f58f2['push'](_0x5f58f2['shift']());
        }
    }
}(_0x2d88, 0x485e2));
async function fetchOfflineGames() {
    const _0x51bc9b = _0x32d7;
    try {
        const _0x21954b = await fetch(_0x51bc9b(0xe1)), _0x1d6cec = await _0x21954b[_0x51bc9b(0x101)]();
        return setCachedData(_0x51bc9b(0xe0), _0x1d6cec), _0x1d6cec;
    } catch (_0x393c59) {
        return console['error'](_0x51bc9b(0xf4), _0x393c59), getCachedData(_0x51bc9b(0xe0)) || [];
    }
}
async function cacheOfflineGameAssets(_0x55a003) {
    const _0x3cf322 = _0x32d7;
    if (_0x3cf322(0xec) in window)
        try {
            const _0x7d5598 = await caches[_0x3cf322(0xe6)](_0x3cf322(0xdf)), _0x2d8074 = [
                    _0x55a003['url'],
                    _0x55a003[_0x3cf322(0x102)]
                ];
            await _0x7d5598[_0x3cf322(0xf7)](_0x2d8074), console[_0x3cf322(0x10d)]('Cached\x20assets\x20for\x20' + _0x55a003[_0x3cf322(0xf0)]);
        } catch (_0x5eb8ff) {
            console[_0x3cf322(0x104)](_0x3cf322(0xf3) + _0x55a003[_0x3cf322(0xf0)] + ':', _0x5eb8ff);
        }
}
async function cacheAllOfflineGames() {
    const _0x56cd98 = _0x32d7, _0x492260 = await fetchOfflineGames();
    for (const _0x46d7df of _0x492260) {
        await cacheOfflineGameAssets(_0x46d7df);
    }
    console[_0x56cd98(0x10d)](_0x56cd98(0x105));
}
async function isGameCached(_0x30ab97) {
    const _0x5c4d1f = _0x32d7;
    if ('caches' in window) {
        const _0x37cd3e = await caches[_0x5c4d1f(0xe6)]('offline-games-v1'), _0x5ecd65 = await _0x37cd3e[_0x5c4d1f(0xfc)](_0x30ab97);
        return !!_0x5ecd65;
    }
    return ![];
}
function _0x32d7(_0x5e2751, _0x4381f8) {
    const _0x2d8826 = _0x2d88();
    return _0x32d7 = function (_0x32d753, _0x4cfc1e) {
        _0x32d753 = _0x32d753 - 0xdf;
        let _0xe5bead = _0x2d8826[_0x32d753];
        return _0xe5bead;
    }, _0x32d7(_0x5e2751, _0x4381f8);
}
async function getCachedOfflineGames() {
    const _0x4221ee = _0x32d7, _0xcba878 = getCachedData(_0x4221ee(0xe0)) || [], _0x302c2c = [];
    for (const _0x443e53 of _0xcba878) {
        await isGameCached(_0x443e53[_0x4221ee(0xfb)]) && _0x302c2c[_0x4221ee(0xeb)](_0x443e53);
    }
    return _0x302c2c;
}
function _0x2d88() {
    const _0x1e97b2 = [
        'All\x20offline\x20games\x20cached',
        '2234030TUBggR',
        '5263029ZOqTdm',
        'Error\x20downloading\x20game:',
        '90TStVkN',
        'notification\x20',
        'style',
        '7Jubidj',
        'log',
        'offline-games-v1',
        'offlineGames',
        'offlinegameadd.json',
        'cssText',
        'appendChild',
        'onlinegamesb.xyz',
        'Failed\x20to\x20download\x20',
        'open',
        '701706YnLblU',
        '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>',
        '71752yCuEnk',
        '35856xMxoLf',
        'push',
        'caches',
        'success',
        'body',
        'className',
        'name',
        '2413314IUZNjt',
        'slideOut\x200.3s\x20ease-out',
        'Error\x20caching\x20',
        'Error\x20fetching\x20offline\x20games:',
        '183893JuRuIk',
        'animation',
        'addAll',
        'localhost',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201rem\x201.5rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20',
        '6FBYzGX',
        'url',
        'match',
        'www.onlinegamesb.xyz',
        'includes',
        '#10b981',
        '\x20is\x20now\x20available\x20offline!',
        'json',
        'icon',
        'location',
        'error'
    ];
    _0x2d88 = function () {
        return _0x1e97b2;
    };
    return _0x2d88();
}
async function downloadOfflineGame(_0x1da9dc) {
    const _0xebf6b8 = _0x32d7;
    if (_0xebf6b8(0xec) in window)
        try {
            return await cacheOfflineGameAssets(_0x1da9dc), showNotification(_0x1da9dc[_0xebf6b8(0xf0)] + _0xebf6b8(0x100)), !![];
        } catch (_0x85db74) {
            return console['error'](_0xebf6b8(0x108), _0x85db74), showNotification(_0xebf6b8(0xe5) + _0x1da9dc['name'], 'error'), ![];
        }
    return ![];
}
function showNotification(_0x47aad0, _0x4c50fa = _0xddedde(0xed)) {
    const _0x4ca870 = _0xddedde, _0x4dee3b = document['createElement']('div');
    _0x4dee3b[_0x4ca870(0xef)] = _0x4ca870(0x10a) + _0x4c50fa, _0x4dee3b['textContent'] = _0x47aad0, _0x4dee3b[_0x4ca870(0x10b)][_0x4ca870(0xe2)] = _0x4ca870(0xf9) + (_0x4c50fa === _0x4ca870(0xed) ? _0x4ca870(0xff) : '#ef4444') + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200.5rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20var(--shadow-lg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideIn\x200.3s\x20ease-out;\x0a\x20\x20\x20\x20', document[_0x4ca870(0xee)][_0x4ca870(0xe3)](_0x4dee3b), setTimeout(() => {
        const _0x5e9719 = _0x4ca870;
        _0x4dee3b[_0x5e9719(0x10b)][_0x5e9719(0xf6)] = _0x5e9719(0xf2), setTimeout(() => _0x4dee3b['remove'](), 0x12c);
    }, 0xbb8);
}
window['offlineGameUtils'] = {
    'fetchOfflineGames': fetchOfflineGames,
    'cacheOfflineGameAssets': cacheOfflineGameAssets,
    'cacheAllOfflineGames': cacheAllOfflineGames,
    'isGameCached': isGameCached,
    'getCachedOfflineGames': getCachedOfflineGames,
    'downloadOfflineGame': downloadOfflineGame
};
const allowedDomains = [
        _0xddedde(0xe4),
        _0xddedde(0xf8),
        _0xddedde(0xfd)
    ], currentHost = window[_0xddedde(0x103)]['hostname'];
if (!allowedDomains[_0xddedde(0xfe)](currentHost)) {
    document[_0xddedde(0xee)]['innerHTML'] = _0xddedde(0xe8);
    throw new Error('This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!');
}