function _0x3000() {
    const _0x4d5efd = [
        '2HsVYNI',
        '1603ENHPcp',
        'localhost',
        '10yKYOTO',
        '60cWYgeN',
        'getElementById',
        '19961051KjVDXV',
        'startsWith',
        'innerHTML',
        'includes',
        'location',
        'onlinegamesb.xyz',
        '340776epHPqF',
        'toggle',
        'classList',
        '3259940cwltjk',
        'active',
        'log',
        'overlay',
        'menuToggle',
        '❌\x20This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain:',
        'hostname',
        'remove',
        'addEventListener',
        '69162SseNyf',
        '221292bcIgTM',
        '5250186hoMCaq',
        '13512iOmVkD',
        '127.'
    ];
    _0x3000 = function () {
        return _0x4d5efd;
    };
    return _0x3000();
}
const _0xa62a0c = _0x3fdb;
(function (_0x5322d3, _0x439bdb) {
    const _0x13f7ac = _0x3fdb, _0x24677e = _0x5322d3();
    while (!![]) {
        try {
            const _0x2fac3a = parseInt(_0x13f7ac(0xf8)) / 0x1 * (parseInt(_0x13f7ac(0xec)) / 0x2) + parseInt(_0x13f7ac(0x104)) / 0x3 + -parseInt(_0x13f7ac(0xfb)) / 0x4 + -parseInt(_0x13f7ac(0xf0)) / 0x5 * (parseInt(_0x13f7ac(0xe8)) / 0x6) + -parseInt(_0x13f7ac(0xed)) / 0x7 * (-parseInt(_0x13f7ac(0xea)) / 0x8) + -parseInt(_0x13f7ac(0xe9)) / 0x9 + parseInt(_0x13f7ac(0xef)) / 0xa * (parseInt(_0x13f7ac(0xf2)) / 0xb);
            if (_0x2fac3a === _0x439bdb)
                break;
            else
                _0x24677e['push'](_0x24677e['shift']());
        } catch (_0x1f56b1) {
            _0x24677e['push'](_0x24677e['shift']());
        }
    }
}(_0x3000, 0xb0d69));
const menuToggle = document[_0xa62a0c(0xf1)](_0xa62a0c(0xff)), sidebar = document[_0xa62a0c(0xf1)]('sidebar'), overlay = document[_0xa62a0c(0xf1)](_0xa62a0c(0xfe));
menuToggle[_0xa62a0c(0x103)]('click', () => {
    const _0x89cbe5 = _0xa62a0c;
    menuToggle[_0x89cbe5(0xfa)]['toggle']('active'), sidebar['classList'][_0x89cbe5(0xf9)](_0x89cbe5(0xfc)), overlay['classList'][_0x89cbe5(0xf9)](_0x89cbe5(0xfc));
}), overlay[_0xa62a0c(0x103)]('click', () => {
    const _0x3abea5 = _0xa62a0c;
    menuToggle['classList'][_0x3abea5(0x102)](_0x3abea5(0xfc)), sidebar[_0x3abea5(0xfa)][_0x3abea5(0x102)](_0x3abea5(0xfc)), overlay['classList'][_0x3abea5(0x102)](_0x3abea5(0xfc));
});
function _0x3fdb(_0x6a067a, _0x3406e5) {
    const _0x300025 = _0x3000();
    return _0x3fdb = function (_0x3fdb38, _0x47e4dc) {
        _0x3fdb38 = _0x3fdb38 - 0xe8;
        let _0x4240d1 = _0x300025[_0x3fdb38];
        return _0x4240d1;
    }, _0x3fdb(_0x6a067a, _0x3406e5);
}
const allowedDomains = [
        _0xa62a0c(0xf7),
        'onlinegamesb.xyz',
        _0xa62a0c(0xf7),
        _0xa62a0c(0xf7),
        _0xa62a0c(0xee)
    ], uniqueDomains = [...new Set(allowedDomains)], currentHost = window[_0xa62a0c(0xf6)][_0xa62a0c(0x101)];
if (currentHost === _0xa62a0c(0xee) || currentHost[_0xa62a0c(0xf3)](_0xa62a0c(0xeb)))
    console[_0xa62a0c(0xfd)]('Localhost\x20detected\x20—\x20security\x20check\x20skipped.');
else {
    if (!uniqueDomains[_0xa62a0c(0xf5)](currentHost)) {
        document['body'][_0xa62a0c(0xf4)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20<b>sabbirkhanmd245@gmail.com</b>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</h2>\x0a\x20\x20\x20\x20', console['error'](_0xa62a0c(0x100), currentHost);
        throw new Error('This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!');
    } else
        console[_0xa62a0c(0xfd)]('✅\x20Domain\x20verified\x20successfully:', currentHost);
}