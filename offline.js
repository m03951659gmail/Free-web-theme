const _0x2588e5 = _0x1dd4;
(function (_0x92a8e3, _0x1d856b) {
    const _0x523bb6 = _0x1dd4, _0x3a827e = _0x92a8e3();
    while (!![]) {
        try {
            const _0x5bf494 = parseInt(_0x523bb6(0xdd)) / 0x1 + -parseInt(_0x523bb6(0xef)) / 0x2 + -parseInt(_0x523bb6(0xde)) / 0x3 + parseInt(_0x523bb6(0xd5)) / 0x4 * (parseInt(_0x523bb6(0xcd)) / 0x5) + parseInt(_0x523bb6(0xd0)) / 0x6 + parseInt(_0x523bb6(0xd1)) / 0x7 * (parseInt(_0x523bb6(0xe7)) / 0x8) + parseInt(_0x523bb6(0xfa)) / 0x9 * (parseInt(_0x523bb6(0xd7)) / 0xa);
            if (_0x5bf494 === _0x1d856b)
                break;
            else
                _0x3a827e['push'](_0x3a827e['shift']());
        } catch (_0x5e1f9a) {
            _0x3a827e['push'](_0x3a827e['shift']());
        }
    }
}(_0x41a2, 0x43425));
async function fetchOfflineGames() {
    const _0x2a96de = _0x1dd4;
    try {
        const _0x2a9cca = await fetch('offlinegameadd.json'), _0x529434 = await _0x2a9cca[_0x2a96de(0xe4)]();
        return setCachedData('offlineGames', _0x529434), _0x529434;
    } catch (_0x137906) {
        return console[_0x2a96de(0xe0)](_0x2a96de(0xce), _0x137906), getCachedData(_0x2a96de(0xd6)) || [];
    }
}
async function cacheOfflineGameAssets(_0x4a5969) {
    const _0x3322b9 = _0x1dd4;
    if (_0x3322b9(0xf0) in window)
        try {
            const _0x337e6d = await caches[_0x3322b9(0xf6)](_0x3322b9(0xf9)), _0xe1ae48 = [
                    _0x4a5969[_0x3322b9(0xeb)],
                    _0x4a5969['icon']
                ];
            await _0x337e6d[_0x3322b9(0xe2)](_0xe1ae48), console[_0x3322b9(0xf4)](_0x3322b9(0xea) + _0x4a5969[_0x3322b9(0xe8)]);
        } catch (_0x36a0f3) {
            console[_0x3322b9(0xe0)]('Error\x20caching\x20' + _0x4a5969[_0x3322b9(0xe8)] + ':', _0x36a0f3);
        }
}
async function cacheAllOfflineGames() {
    const _0x21701d = _0x1dd4, _0x5f1b19 = await fetchOfflineGames();
    for (const _0x346bac of _0x5f1b19) {
        await cacheOfflineGameAssets(_0x346bac);
    }
    console[_0x21701d(0xf4)](_0x21701d(0xec));
}
function _0x41a2() {
    const _0x20096d = [
        'addAll',
        'textContent',
        'json',
        'Failed\x20to\x20download\x20',
        '\x20is\x20now\x20available\x20offline!',
        '8IXZEVF',
        'name',
        'onlinegamesb.xyz',
        'Cached\x20assets\x20for\x20',
        'url',
        'All\x20offline\x20games\x20cached',
        '#10b981',
        'innerHTML',
        '253340zfIJlK',
        'caches',
        'appendChild',
        'body',
        'includes',
        'log',
        'success',
        'open',
        'location',
        '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>',
        'offline-games-v1',
        '4211037qdNeiz',
        'offlineGameUtils',
        '122895wufPfq',
        'Error\x20fetching\x20offline\x20games:',
        'createElement',
        '821124NpoDDW',
        '206122fmgQLV',
        'notification\x20',
        'className',
        'localhost:8080/index.html',
        '4UmNTVD',
        'offlineGames',
        '10SQohZl',
        'remove',
        'cssText',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201rem\x201.5rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20',
        'div',
        '#ef4444',
        '254223EutaGg',
        '1532496SuUCiF',
        'localhost',
        'error',
        'This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!'
    ];
    _0x41a2 = function () {
        return _0x20096d;
    };
    return _0x41a2();
}
async function isGameCached(_0x40809e) {
    const _0x2e354d = _0x1dd4;
    if (_0x2e354d(0xf0) in window) {
        const _0x2e67ca = await caches[_0x2e354d(0xf6)](_0x2e354d(0xf9)), _0x2251c5 = await _0x2e67ca['match'](_0x40809e);
        return !!_0x2251c5;
    }
    return ![];
}
async function getCachedOfflineGames() {
    const _0x4dd773 = _0x1dd4, _0x52cfa1 = getCachedData(_0x4dd773(0xd6)) || [], _0xda37a8 = [];
    for (const _0x1afb84 of _0x52cfa1) {
        await isGameCached(_0x1afb84['url']) && _0xda37a8['push'](_0x1afb84);
    }
    return _0xda37a8;
}
async function downloadOfflineGame(_0x4fdbee) {
    const _0x36f9c1 = _0x1dd4;
    if (_0x36f9c1(0xf0) in window)
        try {
            return await cacheOfflineGameAssets(_0x4fdbee), showNotification(_0x4fdbee[_0x36f9c1(0xe8)] + _0x36f9c1(0xe6)), !![];
        } catch (_0x2777c5) {
            return console[_0x36f9c1(0xe0)]('Error\x20downloading\x20game:', _0x2777c5), showNotification(_0x36f9c1(0xe5) + _0x4fdbee[_0x36f9c1(0xe8)], _0x36f9c1(0xe0)), ![];
        }
    return ![];
}
function showNotification(_0x560924, _0x5c815c = _0x2588e5(0xf5)) {
    const _0x40a55c = _0x2588e5, _0xd5d24a = document[_0x40a55c(0xcf)](_0x40a55c(0xdb));
    _0xd5d24a[_0x40a55c(0xd3)] = _0x40a55c(0xd2) + _0x5c815c, _0xd5d24a[_0x40a55c(0xe3)] = _0x560924, _0xd5d24a['style'][_0x40a55c(0xd9)] = _0x40a55c(0xda) + (_0x5c815c === 'success' ? _0x40a55c(0xed) : _0x40a55c(0xdc)) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200.5rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20var(--shadow-lg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20slideIn\x200.3s\x20ease-out;\x0a\x20\x20\x20\x20', document[_0x40a55c(0xf2)][_0x40a55c(0xf1)](_0xd5d24a), setTimeout(() => {
        const _0x1571b9 = _0x40a55c;
        _0xd5d24a['style']['animation'] = 'slideOut\x200.3s\x20ease-out', setTimeout(() => _0xd5d24a[_0x1571b9(0xd8)](), 0x12c);
    }, 0xbb8);
}
function _0x1dd4(_0x4c38c7, _0x25f706) {
    const _0x41a2d4 = _0x41a2();
    return _0x1dd4 = function (_0x1dd4f1, _0x392bdc) {
        _0x1dd4f1 = _0x1dd4f1 - 0xcc;
        let _0x31a09c = _0x41a2d4[_0x1dd4f1];
        return _0x31a09c;
    }, _0x1dd4(_0x4c38c7, _0x25f706);
}
window[_0x2588e5(0xcc)] = {
    'fetchOfflineGames': fetchOfflineGames,
    'cacheOfflineGameAssets': cacheOfflineGameAssets,
    'cacheAllOfflineGames': cacheAllOfflineGames,
    'isGameCached': isGameCached,
    'getCachedOfflineGames': getCachedOfflineGames,
    'downloadOfflineGame': downloadOfflineGame
};
const allowedDomains = [
        _0x2588e5(0xe9),
        _0x2588e5(0xdf),
        _0x2588e5(0xd4)
    ], currentHost = window[_0x2588e5(0xf7)]['hostname'];
if (!allowedDomains[_0x2588e5(0xf3)](currentHost)) {
    document[_0x2588e5(0xf2)][_0x2588e5(0xee)] = _0x2588e5(0xf8);
    throw new Error(_0x2588e5(0xe1));
}