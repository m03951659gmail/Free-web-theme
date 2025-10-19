const _0x1d97ff = _0x1c1b;
(function (_0x3d6a49, _0x31492e) {
    const _0x54c772 = _0x1c1b, _0x13c06c = _0x3d6a49();
    while (!![]) {
        try {
            const _0x2c21e8 = -parseInt(_0x54c772(0x1c1)) / 0x1 * (-parseInt(_0x54c772(0x1aa)) / 0x2) + parseInt(_0x54c772(0x1b6)) / 0x3 + -parseInt(_0x54c772(0x1b1)) / 0x4 + parseInt(_0x54c772(0x1b7)) / 0x5 + parseInt(_0x54c772(0x1ba)) / 0x6 * (-parseInt(_0x54c772(0x1b9)) / 0x7) + -parseInt(_0x54c772(0x1cc)) / 0x8 + parseInt(_0x54c772(0x1a8)) / 0x9;
            if (_0x2c21e8 === _0x31492e)
                break;
            else
                _0x13c06c['push'](_0x13c06c['shift']());
        } catch (_0x1a0f34) {
            _0x13c06c['push'](_0x13c06c['shift']());
        }
    }
}(_0x16f1, 0xa7224));
async function fetchOfflineGames() {
    const _0x1e8421 = _0x1c1b;
    try {
        const _0x32fecb = await fetch('offlinegameadd.json'), _0x5779b1 = await _0x32fecb['json']();
        return setCachedData(_0x1e8421(0x1bd), _0x5779b1), _0x5779b1;
    } catch (_0x543bac) {
        return console[_0x1e8421(0x1ac)]('Error\x20fetching\x20offline\x20games:', _0x543bac), getCachedData(_0x1e8421(0x1bd)) || [];
    }
}
async function cacheOfflineGameAssets(_0xfc7da0) {
    const _0x2259fe = _0x1c1b;
    if ('caches' in window)
        try {
            const _0x512613 = await caches['open'](_0x2259fe(0x1c0)), _0x262b4a = [
                    _0xfc7da0[_0x2259fe(0x1b3)],
                    _0xfc7da0[_0x2259fe(0x1ca)]
                ];
            await _0x512613[_0x2259fe(0x1b5)](_0x262b4a), console[_0x2259fe(0x1bc)](_0x2259fe(0x1c3) + _0xfc7da0[_0x2259fe(0x1ad)]);
        } catch (_0x2a6633) {
            console[_0x2259fe(0x1ac)]('Error\x20caching\x20' + _0xfc7da0[_0x2259fe(0x1ad)] + ':', _0x2a6633);
        }
}
function _0x1c1b(_0x315ed2, _0x3e51db) {
    const _0x16f1a3 = _0x16f1();
    return _0x1c1b = function (_0x1c1bbd, _0x2ebe8d) {
        _0x1c1bbd = _0x1c1bbd - 0x1a7;
        let _0x5dbab0 = _0x16f1a3[_0x1c1bbd];
        return _0x5dbab0;
    }, _0x1c1b(_0x315ed2, _0x3e51db);
}
async function cacheAllOfflineGames() {
    const _0x4c5299 = _0x1c1b, _0x20359d = await fetchOfflineGames();
    for (const _0x4ffccf of _0x20359d) {
        await cacheOfflineGameAssets(_0x4ffccf);
    }
    console[_0x4c5299(0x1bc)]('All\x20offline\x20games\x20cached');
}
async function isGameCached(_0x3680d7) {
    const _0x32750f = _0x1c1b;
    if (_0x32750f(0x1c5) in window) {
        const _0x5c4432 = await caches['open'](_0x32750f(0x1c0)), _0x84190c = await _0x5c4432[_0x32750f(0x1c2)](_0x3680d7);
        return !!_0x84190c;
    }
    return ![];
}
async function getCachedOfflineGames() {
    const _0x4d2c45 = _0x1c1b, _0xe88bd6 = getCachedData(_0x4d2c45(0x1bd)) || [], _0xe97682 = [];
    for (const _0x23beaa of _0xe88bd6) {
        await isGameCached(_0x23beaa[_0x4d2c45(0x1b3)]) && _0xe97682[_0x4d2c45(0x1be)](_0x23beaa);
    }
    return _0xe97682;
}
async function downloadOfflineGame(_0x175274) {
    const _0x114ed6 = _0x1c1b;
    if ('caches' in window)
        try {
            return await cacheOfflineGameAssets(_0x175274), showNotification(_0x175274[_0x114ed6(0x1ad)] + _0x114ed6(0x1cb)), !![];
        } catch (_0x2b3e87) {
            return console['error'](_0x114ed6(0x1af), _0x2b3e87), showNotification(_0x114ed6(0x1b4) + _0x175274[_0x114ed6(0x1ad)], _0x114ed6(0x1ac)), ![];
        }
    return ![];
}
function showNotification(_0x5931bf, _0x3ac345 = _0x1d97ff(0x1c6)) {
    const _0x445910 = _0x1d97ff, _0x114215 = document[_0x445910(0x1b0)](_0x445910(0x1b8));
    _0x114215['className'] = _0x445910(0x1c8) + _0x3ac345, _0x114215[_0x445910(0x1b2)] = _0x5931bf, _0x114215[_0x445910(0x1c9)][_0x445910(0x1bb)] = _0x445910(0x1a9) + (_0x3ac345 === 'success' ? _0x445910(0x1bf) : _0x445910(0x1ab)) + _0x445910(0x1ae), document[_0x445910(0x1cd)][_0x445910(0x1a7)](_0x114215), setTimeout(() => {
        const _0x5593d8 = _0x445910;
        _0x114215['style'][_0x5593d8(0x1c4)] = _0x5593d8(0x1c7), setTimeout(() => _0x114215['remove'](), 0x12c);
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
function _0x16f1() {
    const _0x3317ec = [
        'textContent',
        'url',
        'Failed\x20to\x20download\x20',
        'addAll',
        '2426214JEWdkr',
        '4401065Hvakfc',
        'div',
        '7DcjraS',
        '5343336ZGvIHW',
        'cssText',
        'log',
        'offlineGames',
        'push',
        '#10b981',
        'offline-games-v1',
        '1ePXDqs',
        'match',
        'Cached\x20assets\x20for\x20',
        'animation',
        'caches',
        'success',
        'slideOut\x200.3s\x20ease-out',
        'notification\x20',
        'style',
        'icon',
        '\x20is\x20now\x20available\x20offline!',
        '9129376mMlTZI',
        'body',
        'appendChild',
        '1632411ooaxiT',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201rem\x201.5rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20',
        '2597738KgrwYx',
        '#ef4444',
        'error',
        'name',
        ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200.5rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20var(--shadow-lg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideIn\x200.3s\x20ease-out;\x0a\x20\x20\x20\x20',
        'Error\x20downloading\x20game:',
        'createElement',
        '1811564KzkcZH'
    ];
    _0x16f1 = function () {
        return _0x3317ec;
    };
    return _0x16f1();
}