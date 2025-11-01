const _0x444ca7 = _0xc3b5;
(function (_0x3d75a4, _0x150d30) {
    const _0x2272de = _0xc3b5, _0x27ad66 = _0x3d75a4();
    while (!![]) {
        try {
            const _0x542f1c = -parseInt(_0x2272de(0x18f)) / 0x1 + -parseInt(_0x2272de(0x19b)) / 0x2 + parseInt(_0x2272de(0x1a0)) / 0x3 + -parseInt(_0x2272de(0x194)) / 0x4 + parseInt(_0x2272de(0x188)) / 0x5 + -parseInt(_0x2272de(0x18b)) / 0x6 + parseInt(_0x2272de(0x199)) / 0x7;
            if (_0x542f1c === _0x150d30)
                break;
            else
                _0x27ad66['push'](_0x27ad66['shift']());
        } catch (_0x1b83fe) {
            _0x27ad66['push'](_0x27ad66['shift']());
        }
    }
}(_0x1ebb, 0x45ff8));
function _0xc3b5(_0x137625, _0x3fab2d) {
    const _0x1ebbf7 = _0x1ebb();
    return _0xc3b5 = function (_0xc3b549, _0x1dfde8) {
        _0xc3b549 = _0xc3b549 - 0x188;
        let _0x4a36bf = _0x1ebbf7[_0xc3b549];
        return _0x4a36bf;
    }, _0xc3b5(_0x137625, _0x3fab2d);
}
const menuToggle = document[_0x444ca7(0x192)]('menuToggle'), sidebar = document[_0x444ca7(0x192)](_0x444ca7(0x19e)), overlay = document['getElementById'](_0x444ca7(0x1a1));
menuToggle[_0x444ca7(0x193)](_0x444ca7(0x198), () => {
    const _0x4c2275 = _0x444ca7;
    menuToggle[_0x4c2275(0x191)][_0x4c2275(0x189)](_0x4c2275(0x19d)), sidebar[_0x4c2275(0x191)][_0x4c2275(0x189)](_0x4c2275(0x19d)), overlay[_0x4c2275(0x191)][_0x4c2275(0x189)](_0x4c2275(0x19d));
}), overlay[_0x444ca7(0x193)](_0x444ca7(0x198), () => {
    const _0x3a1230 = _0x444ca7;
    menuToggle[_0x3a1230(0x191)][_0x3a1230(0x195)](_0x3a1230(0x19d)), sidebar[_0x3a1230(0x191)][_0x3a1230(0x195)](_0x3a1230(0x19d)), overlay['classList']['remove'](_0x3a1230(0x19d));
});
const rootDomain = _0x444ca7(0x196), currentHost = window[_0x444ca7(0x19f)][_0x444ca7(0x18c)];
if (currentHost === _0x444ca7(0x18e))
    console[_0x444ca7(0x197)](_0x444ca7(0x19a));
else {
    const allowedDomains = [
            rootDomain,
            'www.' + rootDomain
        ], isSubdomain = currentHost[_0x444ca7(0x18a)]('.' + rootDomain);
    if (!allowedDomains['includes'](currentHost) && !isSubdomain) {
        document[_0x444ca7(0x19c)]['innerHTML'] = _0x444ca7(0x18d);
        throw new Error(_0x444ca7(0x190) + currentHost);
    }
}
function _0x1ebb() {
    const _0x37142b = [
        'active',
        'sidebar',
        'location',
        '406290ttwIPW',
        'overlay',
        '716935btLwjH',
        'toggle',
        'endsWith',
        '587022hxlkbx',
        'hostname',
        '\x0a\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:red;\x20text-align:center;\x20margin-top:50px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20⚠️\x20This\x20website\x20is\x20not\x20authorized\x20to\x20run\x20on\x20this\x20domain.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Please\x20contact:\x20<b>sabbirkhanmd245@gmail.com</b>\x0a\x20\x20\x20\x20\x20\x20</h2>\x0a\x20\x20\x20\x20',
        'localhost',
        '89174OFSuWk',
        'Unauthorized\x20domain:\x20',
        'classList',
        'getElementById',
        'addEventListener',
        '1338304TdLMnl',
        'remove',
        'onlinegamesb.xyz',
        'log',
        'click',
        '5820864YMxjeT',
        'Running\x20on\x20localhost\x20–\x20no\x20domain\x20restriction.',
        '604140IXcAMw',
        'body'
    ];
    _0x1ebb = function () {
        return _0x37142b;
    };
    return _0x1ebb();
}