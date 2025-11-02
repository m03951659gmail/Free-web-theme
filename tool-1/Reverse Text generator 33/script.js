const _0x30ac97 = _0x299a;
(function (_0x3a15d3, _0x2f3868) {
    const _0x995364 = _0x299a, _0x406df1 = _0x3a15d3();
    while (!![]) {
        try {
            const _0x8cd7de = parseInt(_0x995364(0x1a1)) / 0x1 + parseInt(_0x995364(0x166)) / 0x2 + parseInt(_0x995364(0x167)) / 0x3 * (-parseInt(_0x995364(0x194)) / 0x4) + -parseInt(_0x995364(0x173)) / 0x5 + -parseInt(_0x995364(0x1a6)) / 0x6 + -parseInt(_0x995364(0x18e)) / 0x7 + -parseInt(_0x995364(0x1a9)) / 0x8 * (-parseInt(_0x995364(0x183)) / 0x9);
            if (_0x8cd7de === _0x2f3868)
                break;
            else
                _0x406df1['push'](_0x406df1['shift']());
        } catch (_0x322176) {
            _0x406df1['push'](_0x406df1['shift']());
        }
    }
}(_0x3f69, 0x76645));
function _0x299a(_0x535081, _0x353c79) {
    const _0x3f69f0 = _0x3f69();
    return _0x299a = function (_0x299ab0, _0x5ad238) {
        _0x299ab0 = _0x299ab0 - 0x161;
        let _0x117a2a = _0x3f69f0[_0x299ab0];
        return _0x117a2a;
    }, _0x299a(_0x535081, _0x353c79);
}
const textInput = document[_0x30ac97(0x17a)]('textInput'), reversedText = document[_0x30ac97(0x17a)](_0x30ac97(0x168)), copyBtn = document[_0x30ac97(0x17a)](_0x30ac97(0x185)), copyOutputBtn = document[_0x30ac97(0x17a)](_0x30ac97(0x19b)), clearBtn = document[_0x30ac97(0x17a)](_0x30ac97(0x18d)), charCount = document[_0x30ac97(0x17a)](_0x30ac97(0x186)), outputContainer = document['getElementById'](_0x30ac97(0x170)), yearSpan = document['getElementById'](_0x30ac97(0x169));
yearSpan[_0x30ac97(0x192)] = new Date()[_0x30ac97(0x165)]();
function reverseText(_0x478cdc) {
    const _0x4f5e70 = _0x30ac97;
    return _0x478cdc['split']('')[_0x4f5e70(0x16a)]()[_0x4f5e70(0x197)]('');
}
function updateOutput() {
    const _0x4b27e9 = _0x30ac97, _0x29697a = textInput[_0x4b27e9(0x161)], _0x1149b9 = reverseText(_0x29697a);
    reversedText[_0x4b27e9(0x192)] = _0x1149b9, charCount[_0x4b27e9(0x192)] = _0x29697a[_0x4b27e9(0x195)] + '\x20characters';
}
function copyToClipboard(_0x482a69, _0x551f4d) {
    const _0x5bfe32 = _0x30ac97;
    if (!_0x482a69) {
        showToast(_0x5bfe32(0x18f), _0x5bfe32(0x175));
        return;
    }
    navigator[_0x5bfe32(0x1af)][_0x5bfe32(0x16f)](_0x482a69)[_0x5bfe32(0x163)](() => {
        const _0x416cdb = _0x5bfe32;
        showToast(_0x416cdb(0x187), _0x416cdb(0x17f));
        const _0x5a3761 = _0x551f4d[_0x416cdb(0x19c)];
        _0x551f4d[_0x416cdb(0x19c)] = _0x416cdb(0x1a7), setTimeout(() => {
            _0x551f4d['innerHTML'] = _0x5a3761;
        }, 0x7d0);
    })[_0x5bfe32(0x193)](_0x1212e7 => {
        const _0x76551f = _0x5bfe32;
        console['error'](_0x76551f(0x184), _0x1212e7), showToast('Failed\x20to\x20copy!', 'error');
    });
}
function showToast(_0x2ca1d5, _0x2373f4 = _0x30ac97(0x17f)) {
    const _0x4a4c73 = _0x30ac97, _0x1c0155 = document[_0x4a4c73(0x190)]('.toast');
    _0x1c0155 && _0x1c0155['remove']();
    const _0x4c0b61 = document[_0x4a4c73(0x19a)](_0x4a4c73(0x17e));
    _0x4c0b61['className'] = _0x4a4c73(0x18b), _0x4c0b61[_0x4a4c73(0x19c)] = _0x4a4c73(0x171) + (_0x2373f4 === _0x4a4c73(0x17f) ? _0x4a4c73(0x162) : _0x4a4c73(0x189)) + _0x4a4c73(0x1a2) + _0x2ca1d5 + _0x4a4c73(0x174), document[_0x4a4c73(0x1ac)][_0x4a4c73(0x196)](_0x4c0b61), setTimeout(() => {
        const _0x132763 = _0x4a4c73;
        _0x4c0b61[_0x132763(0x188)] && (_0x4c0b61[_0x132763(0x1a3)][_0x132763(0x179)] = '0', _0x4c0b61[_0x132763(0x1a3)][_0x132763(0x164)] = 'opacity\x200.3s\x20ease', setTimeout(() => {
            const _0x13278c = _0x132763;
            _0x4c0b61[_0x13278c(0x188)] && _0x4c0b61[_0x13278c(0x180)]();
        }, 0x12c));
    }, 0xbb8);
}
function clearAll() {
    const _0x3eafb6 = _0x30ac97;
    textInput[_0x3eafb6(0x161)] = '', reversedText[_0x3eafb6(0x192)] = '', charCount[_0x3eafb6(0x192)] = '0\x20characters', textInput[_0x3eafb6(0x16c)](), showToast(_0x3eafb6(0x1ad), _0x3eafb6(0x17f));
}
textInput[_0x30ac97(0x17d)](_0x30ac97(0x1ab), updateOutput), copyBtn[_0x30ac97(0x17d)](_0x30ac97(0x182), _0x2b7794 => {
    const _0x2989c3 = _0x30ac97;
    _0x2b7794[_0x2989c3(0x19e)](), copyToClipboard(reversedText[_0x2989c3(0x192)], copyBtn);
}), copyOutputBtn[_0x30ac97(0x17d)]('click', () => {
    const _0x5cfcaa = _0x30ac97;
    copyToClipboard(reversedText[_0x5cfcaa(0x192)], copyOutputBtn);
}), clearBtn[_0x30ac97(0x17d)](_0x30ac97(0x182), clearAll), document[_0x30ac97(0x17d)](_0x30ac97(0x1a4), _0x1f365f => {
    const _0x57a5fa = _0x30ac97;
    (_0x1f365f[_0x57a5fa(0x17c)] || _0x1f365f[_0x57a5fa(0x1a5)]) && _0x1f365f[_0x57a5fa(0x177)] === 'c' && ((document[_0x57a5fa(0x16d)] === reversedText || outputContainer[_0x57a5fa(0x16e)](document[_0x57a5fa(0x16d)])) && (_0x1f365f[_0x57a5fa(0x191)](), copyToClipboard(reversedText[_0x57a5fa(0x192)], copyOutputBtn)));
}), reversedText['addEventListener']('click', function () {
    const _0x5ba4b7 = _0x30ac97, _0x69a94d = window['getSelection'](), _0x3675ce = document[_0x5ba4b7(0x181)]();
    _0x3675ce['selectNodeContents'](this), _0x69a94d[_0x5ba4b7(0x1ae)](), _0x69a94d[_0x5ba4b7(0x199)](_0x3675ce);
}), updateOutput(), document[_0x30ac97(0x17d)](_0x30ac97(0x18a), () => {
    const _0xafaa28 = _0x30ac97;
    document[_0xafaa28(0x190)](_0xafaa28(0x178))[_0xafaa28(0x1a3)][_0xafaa28(0x179)] = '0', document[_0xafaa28(0x190)](_0xafaa28(0x178))['style'][_0xafaa28(0x18c)] = 'translateY(20px)', setTimeout(() => {
        const _0x3e65ee = _0xafaa28;
        document[_0x3e65ee(0x190)](_0x3e65ee(0x178))['style'][_0x3e65ee(0x164)] = 'all\x200.6s\x20cubic-bezier(0.25,\x200.8,\x200.25,\x201)', document[_0x3e65ee(0x190)](_0x3e65ee(0x178))[_0x3e65ee(0x1a3)][_0x3e65ee(0x179)] = '1', document[_0x3e65ee(0x190)](_0x3e65ee(0x178))[_0x3e65ee(0x1a3)]['transform'] = 'translateY(0)';
    }, 0x64);
}), textInput[_0x30ac97(0x1a0)](_0x30ac97(0x19d), 'Text\x20input\x20for\x20reversal'), reversedText[_0x30ac97(0x1a0)](_0x30ac97(0x16b), 'polite'), reversedText[_0x30ac97(0x1a0)]('tabindex', '0'), reversedText[_0x30ac97(0x1a0)](_0x30ac97(0x1aa), _0x30ac97(0x176)), reversedText[_0x30ac97(0x1a0)](_0x30ac97(0x19d), 'Reversed\x20text\x20output');
const allowedDomains = [
        'www.onlinegamesb.xyz',
        'localhost',
        'onlinegamesb.xyz'
    ], currentHost = window[_0x30ac97(0x19f)][_0x30ac97(0x17b)];
if (!allowedDomains[_0x30ac97(0x198)](currentHost)) {
    document[_0x30ac97(0x1ac)][_0x30ac97(0x19c)] = _0x30ac97(0x1a8);
    throw new Error(_0x30ac97(0x172));
}
function _0x3f69() {
    const _0x3f49ef = [
        'clearBtn',
        '3442656eAMFzl',
        'Nothing\x20to\x20copy!',
        'querySelector',
        'preventDefault',
        'textContent',
        'catch',
        '8RHUAsr',
        'length',
        'appendChild',
        'join',
        'includes',
        'addRange',
        'createElement',
        'copyOutputBtn',
        'innerHTML',
        'aria-label',
        'stopPropagation',
        'location',
        'setAttribute',
        '173269LztvfY',
        '\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span>',
        'style',
        'keydown',
        'metaKey',
        '4551846hwTgeJ',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22h-5\x20w-5\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke=\x22currentColor\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M5\x2013l4\x204L19\x207\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>',
        '815064VnxnXY',
        'role',
        'input',
        'body',
        'Cleared!',
        'removeAllRanges',
        'clipboard',
        'value',
        'M9\x2012l2\x202\x204-4m6\x202a9\x209\x200\x2011-18\x200\x209\x209\x200\x200118\x200z',
        'then',
        'transition',
        'getFullYear',
        '1720734sEKObG',
        '819507DngoZj',
        'reversedText',
        'year',
        'reverse',
        'aria-live',
        'focus',
        'activeElement',
        'contains',
        'writeText',
        'outputContainer',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22h-5\x20w-5\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke=\x22currentColor\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22',
        'This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!',
        '381975vORXqC',
        '</span>\x0a\x20\x20\x20\x20',
        'error',
        'region',
        'key',
        '.max-w-2xl',
        'opacity',
        'getElementById',
        'hostname',
        'ctrlKey',
        'addEventListener',
        'div',
        'success',
        'remove',
        'createRange',
        'click',
        '117eeeToG',
        'Failed\x20to\x20copy:\x20',
        'copyBtn',
        'charCount',
        'Copied\x20to\x20clipboard!',
        'parentNode',
        'M10\x2014l2-2m0\x200l2-2m-2\x202l-2-2m2\x202l2\x202m7-2a9\x209\x200\x2011-18\x200\x209\x209\x200\x200118\x200z',
        'DOMContentLoaded',
        'toast',
        'transform'
    ];
    _0x3f69 = function () {
        return _0x3f49ef;
    };
    return _0x3f69();
}