const _0x2f41c4 = _0x2a09;
(function (_0x33eabd, _0x32d6e0) {
    const _0x447f36 = _0x2a09, _0x3e27e3 = _0x33eabd();
    while (!![]) {
        try {
            const _0x58982a = parseInt(_0x447f36(0x1c2)) / 0x1 + -parseInt(_0x447f36(0x1e2)) / 0x2 * (-parseInt(_0x447f36(0x1ba)) / 0x3) + -parseInt(_0x447f36(0x1e3)) / 0x4 + -parseInt(_0x447f36(0x1b9)) / 0x5 * (parseInt(_0x447f36(0x1c5)) / 0x6) + -parseInt(_0x447f36(0x1ae)) / 0x7 + parseInt(_0x447f36(0x1d5)) / 0x8 + parseInt(_0x447f36(0x1c1)) / 0x9;
            if (_0x58982a === _0x32d6e0)
                break;
            else
                _0x3e27e3['push'](_0x3e27e3['shift']());
        } catch (_0x491184) {
            _0x3e27e3['push'](_0x3e27e3['shift']());
        }
    }
}(_0x5354, 0xc8b78));
function showToast(_0x482b3e) {
    const _0x5ecaa5 = _0x2a09, _0x135565 = document[_0x5ecaa5(0x19a)]('toast');
    _0x135565['textContent'] = _0x482b3e, _0x135565[_0x5ecaa5(0x1bf)][_0x5ecaa5(0x1de)](_0x5ecaa5(0x1ac)), setTimeout(() => _0x135565[_0x5ecaa5(0x1bf)][_0x5ecaa5(0x18d)](_0x5ecaa5(0x1ac)), 0x7d0);
}
function updateCount(_0x21f496, _0x5e05eb) {
    const _0xbc6e28 = _0x2a09, _0x5164bf = _0x21f496[_0xbc6e28(0x194)], _0x405e56 = _0x5164bf['length'], _0x360555 = _0x5164bf[_0xbc6e28(0x1cd)]() ? _0x5164bf['trim']()[_0xbc6e28(0x1d4)](/\s+/)[_0xbc6e28(0x1ca)] : 0x0;
    document['getElementById'](_0x5e05eb)[_0xbc6e28(0x1d7)] = _0x405e56 + '\x20characters,\x20' + _0x360555 + _0xbc6e28(0x1c4);
}
function decodeZW(_0x36b009) {
    const _0x10c36b = _0x2a09, _0x497b9d = {
            '​': '0',
            '‍': '1'
        };
    let _0x12520b = '';
    for (const _0x4578d6 of _0x36b009) {
        if (_0x4578d6 in _0x497b9d)
            _0x12520b += _0x497b9d[_0x4578d6];
    }
    let _0x5f5436 = '';
    for (let _0x41d4b9 = 0x0; _0x41d4b9 < _0x12520b[_0x10c36b(0x1ca)]; _0x41d4b9 += 0x8) {
        const _0x20141e = _0x12520b[_0x10c36b(0x1bb)](_0x41d4b9, _0x41d4b9 + 0x8);
        _0x20141e[_0x10c36b(0x1ca)] === 0x8 && (_0x5f5436 += String[_0x10c36b(0x196)](parseInt(_0x20141e, 0x2)));
    }
    return _0x5f5436;
}
function stripInvisibles(_0x32c0aa) {
    const _0x1f4f42 = _0x2a09;
    return _0x32c0aa[_0x1f4f42(0x18e)](/[\u200B-\u200D\u2060]/g, '');
}
function countZeroWidth(_0x1ecb33) {
    const _0x427bc0 = _0x2a09;
    return (_0x1ecb33[_0x427bc0(0x1d6)](/[\u200B-\u200D\u2060]/g) || [])[_0x427bc0(0x1ca)];
}
function encodeToZeroWidth(_0x471d94) {
    const _0x53d7bc = _0x2a09;
    let _0x42db79 = '';
    for (const _0x59269f of _0x471d94) {
        const _0x35e7ab = _0x59269f[_0x53d7bc(0x1d8)](0x0)[_0x53d7bc(0x1d9)](0x2)[_0x53d7bc(0x1e0)](0x8, '0');
        for (const _0x3acb5f of _0x35e7ab) {
            _0x42db79 += _0x3acb5f === '0' ? '​' : '‍';
        }
    }
    return _0x42db79;
}
const inputEl = document[_0x2f41c4(0x19a)](_0x2f41c4(0x1d0)), outputEl = document[_0x2f41c4(0x19a)](_0x2f41c4(0x193)), previewEl = document[_0x2f41c4(0x19a)](_0x2f41c4(0x1a9)), charCountEl = document[_0x2f41c4(0x19a)]('char-count'), counterEl = document[_0x2f41c4(0x19a)]('counter'), modeEls = document['querySelectorAll'](_0x2f41c4(0x1b0)), themeToggle = document[_0x2f41c4(0x19a)](_0x2f41c4(0x1c0)), faqToggle = document[_0x2f41c4(0x19a)](_0x2f41c4(0x1b3)), faqSection = document[_0x2f41c4(0x19a)]('faq'), trySampleBtn = document[_0x2f41c4(0x19a)](_0x2f41c4(0x1e4)), generateBtn = document[_0x2f41c4(0x19a)](_0x2f41c4(0x1c3)), revealBtn = document[_0x2f41c4(0x19a)]('reveal'), copyBtn = document[_0x2f41c4(0x19a)]('copy'), clearBtn = document[_0x2f41c4(0x19a)](_0x2f41c4(0x1e1)), downloadBtn = document['getElementById']('download'), stripBtn = document['getElementById']('strip');
let isRevealed = ![];
function _0x2a09(_0xbd36e6, _0x5d8c3c) {
    const _0x5354ab = _0x5354();
    return _0x2a09 = function (_0x2a09dd, _0x2481aa) {
        _0x2a09dd = _0x2a09dd - 0x18d;
        let _0x270ee8 = _0x5354ab[_0x2a09dd];
        return _0x270ee8;
    }, _0x2a09(_0xbd36e6, _0x5d8c3c);
}
function _0x5354() {
    const _0x2b25a9 = [
        'css-hidden',
        'invisible-ink.txt',
        'Hello,\x20this\x20is\x20secret!',
        'getElementById',
        'keydown',
        'body',
        '(prefers-color-scheme:\x20dark)',
        'toggle',
        'char-count',
        'Downloaded!',
        'Cleared!',
        'Switch\x20to\x20Light\x20Theme',
        'hidden',
        'createObjectURL',
        'revokeObjectURL',
        'matchMedia',
        'click',
        'dark-theme',
        'preview',
        'revealed',
        'Switch\x20to\x20Dark\x20Theme',
        'show',
        '\x20|\x20Payload\x20size:\x20',
        '4747232XNRcoZ',
        'hostname',
        'input[name=\x22mode\x22]',
        'innerHTML',
        'dark',
        'faq-toggle',
        'input',
        'location',
        'aria-expanded',
        'Hide',
        'Escape',
        '5LnxTow',
        '12QnOQuy',
        'slice',
        'blank',
        'true',
        'querySelector',
        'classList',
        'theme-toggle',
        '13613238cpEdFP',
        '189240YTBWXd',
        'generate',
        '\x20words',
        '4176858NxnhDo',
        'Invisibles\x20stripped!',
        'size',
        '(No\x20valid\x20hidden\x20text)',
        'combined',
        'length',
        'addEventListener',
        'key',
        'trim',
        'getAttribute',
        'input[name=\x22mode\x22]:checked',
        'input-text',
        'zero-width',
        'theme',
        'writeText',
        'split',
        '1294656LEOpte',
        'match',
        'textContent',
        'charCodeAt',
        'toString',
        'Reveal',
        'Zero-width\x20chars:\x200\x20|\x20Payload\x20size:\x200\x20B',
        'getItem',
        'false',
        'add',
        'preview\x20blank',
        'padStart',
        'clear',
        '174760JsmJqe',
        '66876ABFDdX',
        'try-sample',
        'light',
        'setAttribute',
        '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>',
        'Copied!',
        'matches',
        'remove',
        'replace',
        'className',
        'createElement',
        'setItem',
        'assign',
        'output-text',
        'value',
        'forEach',
        'fromCharCode'
    ];
    _0x5354 = function () {
        return _0x2b25a9;
    };
    return _0x5354();
}
inputEl[_0x2f41c4(0x1cb)](_0x2f41c4(0x1b4), () => updateCount(inputEl, 'char-count')), generateBtn[_0x2f41c4(0x1cb)](_0x2f41c4(0x1a7), () => {
    const _0x4d5a79 = _0x2f41c4, _0x2e348c = inputEl[_0x4d5a79(0x194)];
    if (!_0x2e348c)
        return;
    let _0x4531e1 = _0x2e348c, _0x3b5806 = '', _0x34c869 = 0x0;
    const _0x2170aa = document[_0x4d5a79(0x1be)](_0x4d5a79(0x1cf))['value'];
    if (_0x2170aa === _0x4d5a79(0x1d1))
        _0x4531e1 = encodeToZeroWidth(_0x2e348c), _0x3b5806 = '', _0x34c869 = _0x4531e1[_0x4d5a79(0x1ca)];
    else {
        if (_0x2170aa === _0x4d5a79(0x197))
            _0x4531e1 = _0x2e348c, _0x3b5806 = _0x2e348c, previewEl[_0x4d5a79(0x1bf)]['add'](_0x4d5a79(0x197));
        else
            _0x2170aa === _0x4d5a79(0x1c9) && (_0x4531e1 = encodeToZeroWidth(_0x2e348c), _0x3b5806 = _0x2e348c, previewEl[_0x4d5a79(0x1bf)][_0x4d5a79(0x1de)](_0x4d5a79(0x197)), _0x34c869 = _0x4531e1['length']);
    }
    outputEl['value'] = _0x4531e1, _0x2170aa !== _0x4d5a79(0x1d1) ? (previewEl[_0x4d5a79(0x1d7)] = _0x3b5806, previewEl[_0x4d5a79(0x1bf)][_0x4d5a79(0x19e)](_0x4d5a79(0x1bc), !isRevealed), previewEl[_0x4d5a79(0x1bf)][_0x4d5a79(0x19e)](_0x4d5a79(0x1aa), isRevealed)) : (previewEl['textContent'] = '', previewEl[_0x4d5a79(0x18f)] = _0x4d5a79(0x1df)), counterEl[_0x4d5a79(0x1d7)] = 'Zero-width\x20chars:\x20' + _0x34c869 + _0x4d5a79(0x1ad) + new Blob([_0x4531e1])[_0x4d5a79(0x1c7)] + '\x20B', [
        revealBtn,
        copyBtn,
        downloadBtn
    ][_0x4d5a79(0x195)](_0x2a5d06 => _0x2a5d06['disabled'] = ![]), revealBtn[_0x4d5a79(0x1d7)] = isRevealed ? _0x4d5a79(0x1b7) : _0x4d5a79(0x1da);
}), revealBtn['addEventListener']('click', () => {
    const _0x27056d = _0x2f41c4;
    isRevealed = !isRevealed;
    const _0x1d53b6 = document[_0x27056d(0x1be)]('input[name=\x22mode\x22]:checked')[_0x27056d(0x194)];
    _0x1d53b6 === _0x27056d(0x1d1) ? previewEl['textContent'] = decodeZW(outputEl[_0x27056d(0x194)]) || _0x27056d(0x1c8) : previewEl[_0x27056d(0x1d7)] = outputEl[_0x27056d(0x194)], previewEl[_0x27056d(0x1bf)]['toggle']('blank', !isRevealed), previewEl[_0x27056d(0x1bf)]['toggle'](_0x27056d(0x1aa), isRevealed), revealBtn[_0x27056d(0x1d7)] = isRevealed ? _0x27056d(0x1b7) : _0x27056d(0x1da);
}), copyBtn[_0x2f41c4(0x1cb)](_0x2f41c4(0x1a7), async () => {
    const _0x12f18e = _0x2f41c4;
    try {
        await navigator['clipboard'][_0x12f18e(0x1d3)](outputEl[_0x12f18e(0x194)]), showToast(_0x12f18e(0x1e8));
    } catch (_0x367817) {
        showToast('Copy\x20failed.\x20Use\x20Ctrl+C.');
    }
}), downloadBtn['addEventListener']('click', () => {
    const _0x5a4570 = _0x2f41c4, _0x5c4e6e = new Blob([outputEl['value']], { 'type': 'text/plain' }), _0x480277 = URL[_0x5a4570(0x1a4)](_0x5c4e6e), _0x2ddd69 = Object[_0x5a4570(0x192)](document[_0x5a4570(0x190)]('a'), {
            'href': _0x480277,
            'download': _0x5a4570(0x198)
        });
    _0x2ddd69['click'](), URL[_0x5a4570(0x1a5)](_0x480277), showToast(_0x5a4570(0x1a0));
}), clearBtn[_0x2f41c4(0x1cb)](_0x2f41c4(0x1a7), () => {
    const _0x4a4303 = _0x2f41c4;
    inputEl['value'] = '', outputEl[_0x4a4303(0x194)] = '', previewEl['textContent'] = '', previewEl[_0x4a4303(0x18f)] = _0x4a4303(0x1df), counterEl[_0x4a4303(0x1d7)] = _0x4a4303(0x1db), [
        revealBtn,
        copyBtn,
        downloadBtn
    ][_0x4a4303(0x195)](_0x4d0e72 => _0x4d0e72['disabled'] = !![]), revealBtn[_0x4a4303(0x1d7)] = _0x4a4303(0x1da), isRevealed = ![], updateCount(inputEl, _0x4a4303(0x19f)), showToast(_0x4a4303(0x1a1));
}), stripBtn[_0x2f41c4(0x1cb)](_0x2f41c4(0x1a7), () => {
    const _0x203b02 = _0x2f41c4, _0x209ca1 = stripInvisibles(inputEl[_0x203b02(0x194)]);
    inputEl['value'] = _0x209ca1, updateCount(inputEl, 'char-count'), showToast(_0x203b02(0x1c6));
}), themeToggle['addEventListener'](_0x2f41c4(0x1a7), () => {
    const _0x330825 = _0x2f41c4, _0x307dc2 = document[_0x330825(0x19c)][_0x330825(0x1bf)]['toggle']('dark-theme');
    document['body']['className'] = _0x307dc2 ? _0x330825(0x1a8) : 'light-theme', themeToggle[_0x330825(0x1d7)] = _0x307dc2 ? _0x330825(0x1a2) : _0x330825(0x1ab), localStorage[_0x330825(0x191)](_0x330825(0x1d2), _0x307dc2 ? _0x330825(0x1b2) : _0x330825(0x1e5));
}), faqToggle[_0x2f41c4(0x1cb)](_0x2f41c4(0x1a7), () => {
    const _0x18b7ff = _0x2f41c4, _0x5b0d5e = faqToggle[_0x18b7ff(0x1ce)]('aria-expanded') === _0x18b7ff(0x1bd);
    faqToggle['setAttribute']('aria-expanded', String(!_0x5b0d5e)), faqSection[_0x18b7ff(0x1a3)] = _0x5b0d5e;
}), trySampleBtn[_0x2f41c4(0x1cb)](_0x2f41c4(0x1a7), () => {
    const _0x32254b = _0x2f41c4;
    inputEl[_0x32254b(0x194)] = _0x32254b(0x199), updateCount(inputEl, 'char-count'), generateBtn[_0x32254b(0x1a7)](), faqSection[_0x32254b(0x1a3)] = !![], faqToggle[_0x32254b(0x1e6)](_0x32254b(0x1b6), _0x32254b(0x1dd));
}), function init() {
    const _0x3f4871 = _0x2f41c4, _0x3bc11a = localStorage[_0x3f4871(0x1dc)](_0x3f4871(0x1d2)), _0x19d6f3 = window[_0x3f4871(0x1a6)](_0x3f4871(0x19d))[_0x3f4871(0x1e9)], _0x1a5a1a = _0x3bc11a === 'dark' || !_0x3bc11a && _0x19d6f3;
    _0x1a5a1a && (document[_0x3f4871(0x19c)][_0x3f4871(0x1bf)][_0x3f4871(0x1de)](_0x3f4871(0x1a8)), themeToggle[_0x3f4871(0x1d7)] = _0x3f4871(0x1a2)), updateCount(inputEl, _0x3f4871(0x19f)), document['addEventListener'](_0x3f4871(0x19b), _0x24e51e => {
        const _0x586941 = _0x3f4871;
        _0x24e51e[_0x586941(0x1cc)] === _0x586941(0x1b8) && clearBtn[_0x586941(0x1a7)]();
    }), inputEl['focus']();
}();
const allowedDomains = [
        'www.onlinegamesb.xyz',
        'localhost',
        'onlinegamesb.xyz'
    ], currentHost = window[_0x2f41c4(0x1b5)][_0x2f41c4(0x1af)];
if (!allowedDomains['includes'](currentHost)) {
    document[_0x2f41c4(0x19c)][_0x2f41c4(0x1b1)] = _0x2f41c4(0x1e7);
    throw new Error('This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!');
}