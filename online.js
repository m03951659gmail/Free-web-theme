function _0x781f(_0x1d69c7, _0x3eef5e) {
    const _0xf35aaa = _0xf35a();
    return _0x781f = function (_0x781f3b, _0x5a7c2c) {
        _0x781f3b = _0x781f3b - 0x136;
        let _0x702e07 = _0xf35aaa[_0x781f3b];
        return _0x702e07;
    }, _0x781f(_0x1d69c7, _0x3eef5e);
}
const _0x4be5c3 = _0x781f;
function _0xf35a() {
    const _0x58ad40 = [
        'rel',
        '5841nxOeao',
        'Error\x20fetching\x20online\x20games:',
        'gameAnalytics',
        '411242yfqpsX',
        'HEAD',
        '4649631QWLzwV',
        'head',
        'slice',
        '3rFCmzM',
        '192292fpEwuF',
        'json',
        'stringify',
        'href',
        'onlinegameadd.json',
        '1743325eWvfqt',
        '3hbieOu',
        'link',
        'filter',
        'error',
        'parse',
        'onlineGames',
        'entries',
        'createElement',
        'map',
        'appendChild',
        '3591054acJsbA',
        '8055380bsnLLH',
        'onlineGameUtils',
        'getItem',
        '7624MYCyRD'
    ];
    _0xf35a = function () {
        return _0x58ad40;
    };
    return _0xf35a();
}
(function (_0x546505, _0x13ea8a) {
    const _0x2e30c3 = _0x781f, _0x32b17f = _0x546505();
    while (!![]) {
        try {
            const _0x337f75 = -parseInt(_0x2e30c3(0x145)) / 0x1 * (-parseInt(_0x2e30c3(0x140)) / 0x2) + parseInt(_0x2e30c3(0x14c)) / 0x3 * (-parseInt(_0x2e30c3(0x146)) / 0x4) + parseInt(_0x2e30c3(0x14b)) / 0x5 + -parseInt(_0x2e30c3(0x137)) / 0x6 + parseInt(_0x2e30c3(0x142)) / 0x7 + -parseInt(_0x2e30c3(0x13b)) / 0x8 * (-parseInt(_0x2e30c3(0x13d)) / 0x9) + -parseInt(_0x2e30c3(0x138)) / 0xa;
            if (_0x337f75 === _0x13ea8a)
                break;
            else
                _0x32b17f['push'](_0x32b17f['shift']());
        } catch (_0x11a4df) {
            _0x32b17f['push'](_0x32b17f['shift']());
        }
    }
}(_0xf35a, 0xc25ea));
async function fetchOnlineGames() {
    const _0x5e98cd = _0x781f;
    try {
        const _0x17ad6b = await fetch(_0x5e98cd(0x14a)), _0x5665e3 = await _0x17ad6b[_0x5e98cd(0x147)]();
        return setCachedData(_0x5e98cd(0x151), _0x5665e3), _0x5665e3;
    } catch (_0x560b0c) {
        return console[_0x5e98cd(0x14f)](_0x5e98cd(0x13e), _0x560b0c), getCachedData('onlineGames') || [];
    }
}
function preloadGame(_0x47b1e6) {
    const _0x5019de = _0x781f, _0x1ebe57 = document[_0x5019de(0x153)](_0x5019de(0x14d));
    _0x1ebe57[_0x5019de(0x13c)] = 'prefetch', _0x1ebe57[_0x5019de(0x149)] = _0x47b1e6, document[_0x5019de(0x143)][_0x5019de(0x136)](_0x1ebe57);
}
function trackGamePlay(_0x153308) {
    const _0x13af7f = _0x781f, _0x271997 = JSON['parse'](localStorage[_0x13af7f(0x13a)](_0x13af7f(0x13f)) || '{}');
    _0x271997[_0x153308] = (_0x271997[_0x153308] || 0x0) + 0x1, localStorage['setItem'](_0x13af7f(0x13f), JSON[_0x13af7f(0x148)](_0x271997));
}
function getPopularGames() {
    const _0xa24d1c = _0x781f, _0x4b230d = JSON[_0xa24d1c(0x150)](localStorage[_0xa24d1c(0x13a)](_0xa24d1c(0x13f)) || '{}'), _0x46b164 = Object[_0xa24d1c(0x152)](_0x4b230d)['sort']((_0x15d354, _0x22449d) => _0x22449d[0x1] - _0x15d354[0x1])[_0xa24d1c(0x144)](0x0, 0x5);
    return _0x46b164[_0xa24d1c(0x154)](([_0x51df96]) => allGames['find'](_0x10dfbb => _0x10dfbb['id'] === _0x51df96))[_0xa24d1c(0x14e)](Boolean);
}
async function checkGameAvailability(_0x3c67cc) {
    const _0x5a82e9 = _0x781f;
    try {
        const _0x31c117 = await fetch(_0x3c67cc, { 'method': _0x5a82e9(0x141) });
        return _0x31c117['ok'];
    } catch (_0x273517) {
        return ![];
    }
}
window[_0x4be5c3(0x139)] = {
    'fetchOnlineGames': fetchOnlineGames,
    'preloadGame': preloadGame,
    'trackGamePlay': trackGamePlay,
    'getPopularGames': getPopularGames,
    'checkGameAvailability': checkGameAvailability
};