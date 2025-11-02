const _0x4514c6 = _0xc2b6;
(function (_0x4c665d, _0x25a866) {
    const _0x41f431 = _0xc2b6, _0x29ec13 = _0x4c665d();
    while (!![]) {
        try {
            const _0x4f2b3b = -parseInt(_0x41f431(0x185)) / 0x1 + parseInt(_0x41f431(0x158)) / 0x2 * (-parseInt(_0x41f431(0x137)) / 0x3) + parseInt(_0x41f431(0x141)) / 0x4 + parseInt(_0x41f431(0x17e)) / 0x5 + -parseInt(_0x41f431(0x1a5)) / 0x6 + -parseInt(_0x41f431(0x1a8)) / 0x7 + parseInt(_0x41f431(0x14c)) / 0x8 * (parseInt(_0x41f431(0x172)) / 0x9);
            if (_0x4f2b3b === _0x25a866)
                break;
            else
                _0x29ec13['push'](_0x29ec13['shift']());
        } catch (_0x21165d) {
            _0x29ec13['push'](_0x29ec13['shift']());
        }
    }
}(_0x6c8f, 0x741fd));
class TrieNode {
    constructor() {
        const _0x37d6de = _0xc2b6;
        this[_0x37d6de(0x1b2)] = {}, this[_0x37d6de(0x1a9)] = null;
    }
}
class Trie {
    constructor() {
        const _0x3f223e = _0xc2b6;
        this[_0x3f223e(0x170)] = new TrieNode();
    }
    [_0x4514c6(0x182)](_0x566824, _0x59f520) {
        const _0x3e1e21 = _0x4514c6;
        let _0x233178 = this['root'];
        const _0xd679fa = _0x566824[_0x3e1e21(0x139)]()[_0x3e1e21(0x15e)]('\x20');
        for (const _0xdf93e0 of _0xd679fa) {
            if (!_0x233178[_0x3e1e21(0x1b2)][_0xdf93e0])
                _0x233178[_0x3e1e21(0x1b2)][_0xdf93e0] = new TrieNode();
            _0x233178 = _0x233178[_0x3e1e21(0x1b2)][_0xdf93e0];
        }
        _0x233178[_0x3e1e21(0x1a9)] = _0x59f520;
    }
    [_0x4514c6(0x19d)](_0x2fc192, _0x5ec0ba) {
        const _0xf540a8 = _0x4514c6;
        let _0x30c261 = this[_0xf540a8(0x170)], _0x4c4842 = null, _0x142da3 = _0x5ec0ba;
        for (let _0x10d957 = _0x5ec0ba; _0x10d957 < _0x2fc192[_0xf540a8(0x13f)]; _0x10d957++) {
            const _0x18faae = _0x2fc192[_0x10d957][_0xf540a8(0x139)]();
            if (!_0x30c261['children'][_0x18faae])
                break;
            _0x30c261 = _0x30c261['children'][_0x18faae], _0x30c261[_0xf540a8(0x1a9)] !== null && (_0x4c4842 = _0x30c261[_0xf540a8(0x1a9)], _0x142da3 = _0x10d957);
        }
        return {
            'emoji': _0x4c4842,
            'endIndex': _0x142da3
        };
    }
}
const inputEl = document['getElementById'](_0x4514c6(0x193)), outputEl = document[_0x4514c6(0x16c)](_0x4514c6(0x16b)), suggestionsEl = document[_0x4514c6(0x16c)]('suggestions'), languageSelect = document[_0x4514c6(0x16c)]('language-select'), modeSelect = document[_0x4514c6(0x16c)](_0x4514c6(0x18a)), preservePunctuation = document[_0x4514c6(0x16c)](_0x4514c6(0x15c)), copyBtn = document[_0x4514c6(0x16c)](_0x4514c6(0x15f)), downloadBtn = document[_0x4514c6(0x16c)](_0x4514c6(0x1b3)), editMappingsBtn = document['getElementById'](_0x4514c6(0x1b0)), modal = document[_0x4514c6(0x16c)](_0x4514c6(0x14b)), closeModal = document[_0x4514c6(0x16c)](_0x4514c6(0x143)), customPhrase = document[_0x4514c6(0x16c)](_0x4514c6(0x169)), customEmoji = document[_0x4514c6(0x16c)]('custom-emoji'), addCustomBtn = document[_0x4514c6(0x16c)](_0x4514c6(0x1ad)), customList = document[_0x4514c6(0x16c)]('custom-list'), exportMappings = document['getElementById'](_0x4514c6(0x19c)), importMappings = document[_0x4514c6(0x16c)]('import-mappings'), clearCustom = document[_0x4514c6(0x16c)](_0x4514c6(0x14f)), favoritesEl = document[_0x4514c6(0x16c)](_0x4514c6(0x156)), recentsEl = document[_0x4514c6(0x16c)]('recents'), themeToggle = document[_0x4514c6(0x16c)]('theme-toggle');
let currentLang = 'en', currentMode = 'text-to-emoji', trie = new Trie(), reverseMap = new Map(), favorites = JSON['parse'](localStorage[_0x4514c6(0x186)](_0x4514c6(0x156))) || [], recents = JSON[_0x4514c6(0x151)](localStorage[_0x4514c6(0x186)]('recents')) || [], customMappings = JSON[_0x4514c6(0x151)](localStorage['getItem'](_0x4514c6(0x19e))) || {};
function escapeHtml(_0x40e9bd) {
    const _0xfe49d = _0x4514c6, _0x15c1c8 = document[_0xfe49d(0x14d)]('div');
    return _0x15c1c8[_0xfe49d(0x154)] = _0x40e9bd, _0x15c1c8['innerHTML'];
}
function _0xc2b6(_0x4ed208, _0x1c756e) {
    const _0x6c8ffa = _0x6c8f();
    return _0xc2b6 = function (_0xc2b6c6, _0x3ca5d3) {
        _0xc2b6c6 = _0xc2b6c6 - 0x137;
        let _0x26d998 = _0x6c8ffa[_0xc2b6c6];
        return _0x26d998;
    }, _0xc2b6(_0x4ed208, _0x1c756e);
}
function debounce(_0x264428, _0x37e028) {
    let _0x1c2ab3;
    return function (..._0x3ffd9e) {
        clearTimeout(_0x1c2ab3), _0x1c2ab3 = setTimeout(() => _0x264428['apply'](this, _0x3ffd9e), _0x37e028);
    };
}
function loadData() {
    const _0x387727 = _0x4514c6;
    Object[_0x387727(0x15b)](EMOJI_DATA[currentLang])['forEach'](([_0x38e639, _0x1d50e2]) => {
        const _0x1e16d3 = _0x387727;
        trie[_0x1e16d3(0x182)](_0x38e639, _0x1d50e2), reverseMap[_0x1e16d3(0x168)](_0x1d50e2, _0x38e639);
    }), Object['entries'](customMappings)['forEach'](([_0x5e91a3, _0x9c5a78]) => {
        const _0x4d5e75 = _0x387727;
        trie[_0x4d5e75(0x182)](_0x5e91a3, _0x9c5a78), reverseMap[_0x4d5e75(0x168)](_0x9c5a78, _0x5e91a3);
    });
}
function translate() {
    const _0x575346 = _0x4514c6, _0x4dcfd4 = inputEl[_0x575346(0x164)];
    if (!_0x4dcfd4['trim']()) {
        outputEl['textContent'] = '';
        return;
    }
    if (currentMode === _0x575346(0x140)) {
        const _0x6f2ee9 = _0x4dcfd4[_0x575346(0x15e)](/(\s+)/);
        let _0x1a301d = '', _0x2ce358 = 0x0;
        while (_0x2ce358 < _0x6f2ee9[_0x575346(0x13f)]) {
            const _0x3b978e = _0x6f2ee9[_0x2ce358];
            if (!_0x3b978e[_0x575346(0x18d)]() || /^\s+$/[_0x575346(0x1af)](_0x3b978e)) {
                _0x1a301d += preservePunctuation[_0x575346(0x13e)] ? _0x3b978e : '', _0x2ce358++;
                continue;
            }
            const _0x462182 = trie[_0x575346(0x19d)](_0x6f2ee9, _0x2ce358);
            if (_0x462182[_0x575346(0x1a9)]) {
                _0x1a301d += _0x462182[_0x575346(0x1a9)];
                for (let _0x57e604 = _0x2ce358; _0x57e604 <= _0x462182[_0x575346(0x1b5)]; _0x57e604++) {
                    if (_0x57e604 > _0x2ce358)
                        recents['unshift'](_0x6f2ee9[_0x57e604][_0x575346(0x18d)]());
                }
                _0x2ce358 = _0x462182[_0x575346(0x1b5)] + 0x1;
            } else
                _0x1a301d += preservePunctuation[_0x575346(0x13e)] ? _0x3b978e : '', _0x2ce358++;
        }
        outputEl['innerHTML'] = escapeHtml(_0x1a301d)[_0x575346(0x18f)](/\n/g, '<br>');
    } else {
        let _0x3c2a62 = '';
        for (let _0xfd5a0c of _0x4dcfd4) {
            reverseMap[_0x575346(0x1b1)](_0xfd5a0c) ? (_0x3c2a62 += reverseMap[_0x575346(0x1a2)](_0xfd5a0c) + '\x20', recents['unshift'](reverseMap[_0x575346(0x1a2)](_0xfd5a0c))) : _0x3c2a62 += preservePunctuation[_0x575346(0x13e)] ? _0xfd5a0c : '';
        }
        outputEl[_0x575346(0x154)] = _0x3c2a62[_0x575346(0x18d)]();
    }
    saveRecents(), renderRecents();
}
function showSuggestions(_0xdcbceb) {
    const _0x2497c4 = _0x4514c6;
    suggestionsEl[_0x2497c4(0x165)]['add'](_0x2497c4(0x1b4));
    if (!_0xdcbceb || currentMode !== 'text-to-emoji')
        return;
    const _0x5ba4fd = _0xdcbceb[_0x2497c4(0x139)]()[_0x2497c4(0x15e)]('\x20');
    let _0x5783de = trie[_0x2497c4(0x170)];
    for (const _0x1f999e of _0x5ba4fd) {
        if (!_0x5783de[_0x2497c4(0x1b2)][_0x1f999e])
            return;
        _0x5783de = _0x5783de[_0x2497c4(0x1b2)][_0x1f999e];
    }
    const _0x2efa77 = [];
    collectSuggestions(_0x5783de, _0x5ba4fd[_0x2497c4(0x15d)]('\x20'), _0x2efa77), _0x2efa77[_0x2497c4(0x15a)](), _0x2efa77[_0x2497c4(0x13f)] > 0x0 && (suggestionsEl[_0x2497c4(0x18c)] = '', _0x2efa77[_0x2497c4(0x173)](0x0, 0xa)[_0x2497c4(0x162)](_0x482bc4 => {
        const _0x5e17f1 = _0x2497c4, _0x3fe948 = document[_0x5e17f1(0x14d)]('li');
        _0x3fe948[_0x5e17f1(0x154)] = _0x482bc4, _0x3fe948[_0x5e17f1(0x163)]('click', () => {
            const _0x1b6538 = _0x5e17f1;
            insertAtCursor(_0x482bc4), suggestionsEl[_0x1b6538(0x165)][_0x1b6538(0x1a1)]('hidden');
        }), suggestionsEl[_0x5e17f1(0x18b)](_0x3fe948);
    }), suggestionsEl[_0x2497c4(0x165)][_0x2497c4(0x155)](_0x2497c4(0x1b4)));
}
function collectSuggestions(_0x2f6285, _0x581476, _0x38fb5b) {
    const _0x7affdf = _0x4514c6;
    if (_0x2f6285[_0x7affdf(0x1a9)])
        _0x38fb5b[_0x7affdf(0x157)](_0x581476);
    for (const [_0x4f0195, _0xc08510] of Object[_0x7affdf(0x15b)](_0x2f6285[_0x7affdf(0x1b2)])) {
        collectSuggestions(_0xc08510, _0x581476 + '\x20' + _0x4f0195, _0x38fb5b);
    }
}
function insertAtCursor(_0x4d558f) {
    const _0x50dd58 = _0x4514c6, _0x1f4fd4 = inputEl[_0x50dd58(0x197)], _0x58d5ef = inputEl[_0x50dd58(0x166)];
    inputEl[_0x50dd58(0x164)] = inputEl[_0x50dd58(0x164)]['substring'](0x0, _0x1f4fd4) + _0x4d558f + inputEl[_0x50dd58(0x164)]['substring'](_0x58d5ef), inputEl[_0x50dd58(0x197)] = inputEl[_0x50dd58(0x166)] = _0x1f4fd4 + _0x4d558f[_0x50dd58(0x13f)], inputEl[_0x50dd58(0x146)](), translate();
}
inputEl[_0x4514c6(0x163)](_0x4514c6(0x14e), debounce(() => {
    const _0x554c85 = _0x4514c6;
    translate();
    const _0x972119 = inputEl[_0x554c85(0x164)][_0x554c85(0x159)](0x0, inputEl['selectionStart'])[_0x554c85(0x15e)](/\s+/)[_0x554c85(0x1a4)]();
    showSuggestions(_0x972119);
}, 0x12c)), inputEl[_0x4514c6(0x163)](_0x4514c6(0x142), _0x5d712e => {
    const _0x4d49cf = _0x4514c6, _0x4c796b = suggestionsEl[_0x4d49cf(0x19f)]('li');
    let _0x57cf08 = Array[_0x4d49cf(0x176)](_0x4c796b)['findIndex'](_0x18b4e3 => _0x18b4e3['classList'][_0x4d49cf(0x1aa)](_0x4d49cf(0x1ac)));
    if (_0x5d712e[_0x4d49cf(0x175)] === _0x4d49cf(0x194)) {
        _0x5d712e[_0x4d49cf(0x13c)]();
        if (_0x57cf08 < _0x4c796b[_0x4d49cf(0x13f)] - 0x1) {
            if (_0x57cf08 >= 0x0)
                _0x4c796b[_0x57cf08][_0x4d49cf(0x165)]['remove'](_0x4d49cf(0x1ac));
            _0x4c796b[_0x57cf08 + 0x1][_0x4d49cf(0x165)][_0x4d49cf(0x1a1)](_0x4d49cf(0x1ac));
        }
    } else {
        if (_0x5d712e[_0x4d49cf(0x175)] === _0x4d49cf(0x1ae))
            _0x5d712e[_0x4d49cf(0x13c)](), _0x57cf08 > 0x0 && (_0x4c796b[_0x57cf08][_0x4d49cf(0x165)][_0x4d49cf(0x155)](_0x4d49cf(0x1ac)), _0x4c796b[_0x57cf08 - 0x1][_0x4d49cf(0x165)][_0x4d49cf(0x1a1)](_0x4d49cf(0x1ac)));
        else {
            if (_0x5d712e[_0x4d49cf(0x175)] === _0x4d49cf(0x199) && _0x57cf08 >= 0x0)
                _0x5d712e[_0x4d49cf(0x13c)](), _0x4c796b[_0x57cf08]['click']();
            else
                _0x5d712e[_0x4d49cf(0x175)] === _0x4d49cf(0x191) && suggestionsEl[_0x4d49cf(0x165)][_0x4d49cf(0x1a1)](_0x4d49cf(0x1b4));
        }
    }
}), languageSelect['addEventListener'](_0x4514c6(0x178), () => {
    const _0x5953e6 = _0x4514c6;
    currentLang = languageSelect[_0x5953e6(0x164)], trie = new Trie(), reverseMap = new Map(), loadData(), translate();
}), modeSelect[_0x4514c6(0x163)](_0x4514c6(0x178), () => {
    const _0x50e03a = _0x4514c6;
    currentMode = modeSelect[_0x50e03a(0x164)], translate();
}), preservePunctuation['addEventListener'](_0x4514c6(0x178), translate), copyBtn[_0x4514c6(0x163)](_0x4514c6(0x19b), () => {
    const _0x5e808f = _0x4514c6;
    navigator[_0x5e808f(0x14a)]['writeText'](outputEl[_0x5e808f(0x154)])[_0x5e808f(0x192)](() => {
        const _0x23ba46 = _0x5e808f;
        alert(_0x23ba46(0x13b));
    });
}), downloadBtn[_0x4514c6(0x163)]('click', () => {
    const _0x2772b4 = _0x4514c6, _0x53cfee = new Blob([outputEl[_0x2772b4(0x154)]], { 'type': _0x2772b4(0x17c) }), _0x11cf0a = URL[_0x2772b4(0x145)](_0x53cfee), _0x422813 = document[_0x2772b4(0x14d)]('a');
    _0x422813[_0x2772b4(0x1a6)] = _0x11cf0a, _0x422813[_0x2772b4(0x1a0)] = _0x2772b4(0x1a7), _0x422813[_0x2772b4(0x19b)]();
}), editMappingsBtn['addEventListener'](_0x4514c6(0x19b), () => {
    const _0xb1ebdd = _0x4514c6;
    modal[_0xb1ebdd(0x165)][_0xb1ebdd(0x155)]('hidden'), setTimeout(() => modal['querySelector']('.modal-show')[_0xb1ebdd(0x165)][_0xb1ebdd(0x1a1)](_0xb1ebdd(0x150)), 0xa), renderCustomList();
}), closeModal[_0x4514c6(0x163)]('click', () => {
    const _0x4fdc89 = _0x4514c6;
    modal[_0x4fdc89(0x16d)](_0x4fdc89(0x190))['classList'][_0x4fdc89(0x155)](_0x4fdc89(0x150)), setTimeout(() => modal[_0x4fdc89(0x165)][_0x4fdc89(0x1a1)](_0x4fdc89(0x1b4)), 0x12c);
}), addCustomBtn[_0x4514c6(0x163)](_0x4514c6(0x19b), () => {
    const _0x238eae = _0x4514c6, _0x54a50a = customPhrase['value'][_0x238eae(0x18d)](), _0x54693e = customEmoji[_0x238eae(0x164)]['trim']();
    _0x54a50a && _0x54693e && (customMappings[_0x54a50a] = _0x54693e, localStorage[_0x238eae(0x147)](_0x238eae(0x19e), JSON[_0x238eae(0x16a)](customMappings)), trie[_0x238eae(0x182)](_0x54a50a, _0x54693e), reverseMap[_0x238eae(0x168)](_0x54693e, _0x54a50a), customPhrase[_0x238eae(0x164)] = '', customEmoji['value'] = '', renderCustomList(), translate());
});
function renderCustomList() {
    const _0x84db1a = _0x4514c6;
    customList['innerHTML'] = '', Object[_0x84db1a(0x15b)](customMappings)['forEach'](([_0x30f5d4, _0x5836c0]) => {
        const _0x4bdc96 = _0x84db1a, _0x1a475a = document[_0x4bdc96(0x14d)]('li');
        _0x1a475a[_0x4bdc96(0x144)] = _0x4bdc96(0x174), _0x1a475a[_0x4bdc96(0x18c)] = _0x4bdc96(0x184) + escapeHtml(_0x30f5d4) + '\x20→\x20' + _0x5836c0 + _0x4bdc96(0x187) + escapeHtml(_0x30f5d4) + _0x4bdc96(0x1a3), customList[_0x4bdc96(0x18b)](_0x1a475a);
    }), customList['querySelectorAll'](_0x84db1a(0x148))[_0x84db1a(0x162)](_0x4b6e70 => {
        const _0x4d2de2 = _0x84db1a;
        _0x4b6e70[_0x4d2de2(0x163)](_0x4d2de2(0x19b), _0x2afce8 => {
            const _0xbbac06 = _0x4d2de2, _0x2bb95b = _0x2afce8[_0xbbac06(0x17b)][_0xbbac06(0x138)]['phrase'];
            delete customMappings[_0x2bb95b], localStorage['setItem'](_0xbbac06(0x19e), JSON[_0xbbac06(0x16a)](customMappings)), trie = new Trie(), reverseMap = new Map(), loadData(), renderCustomList(), translate();
        });
    });
}
exportMappings['addEventListener'](_0x4514c6(0x19b), () => {
    const _0x3f37ba = _0x4514c6, _0x4a507a = JSON[_0x3f37ba(0x16a)](customMappings, null, 0x2), _0x166f32 = new Blob([_0x4a507a], { 'type': _0x3f37ba(0x16f) }), _0x340fef = URL[_0x3f37ba(0x145)](_0x166f32), _0x4d5e03 = document[_0x3f37ba(0x14d)]('a');
    _0x4d5e03[_0x3f37ba(0x1a6)] = _0x340fef, _0x4d5e03[_0x3f37ba(0x1a0)] = _0x3f37ba(0x149), _0x4d5e03[_0x3f37ba(0x19b)]();
}), importMappings[_0x4514c6(0x163)](_0x4514c6(0x178), _0x16c9f7 => {
    const _0x218d09 = _0x4514c6, _0x51406b = _0x16c9f7[_0x218d09(0x17b)][_0x218d09(0x196)][0x0];
    if (!_0x51406b)
        return;
    const _0x3f61dc = new FileReader();
    _0x3f61dc[_0x218d09(0x177)] = _0x2d3ced => {
        const _0x559708 = _0x218d09;
        try {
            const _0x52b630 = JSON['parse'](_0x2d3ced['target'][_0x559708(0x183)]);
            Object[_0x559708(0x17f)](customMappings, _0x52b630), localStorage[_0x559708(0x147)]('customMappings', JSON[_0x559708(0x16a)](customMappings)), trie = new Trie(), reverseMap = new Map(), loadData(), renderCustomList(), translate(), alert(_0x559708(0x171));
        } catch (_0x46667d) {
            alert('Invalid\x20JSON\x20file.');
        }
    }, _0x3f61dc[_0x218d09(0x188)](_0x51406b);
}), clearCustom[_0x4514c6(0x163)](_0x4514c6(0x19b), () => {
    const _0x20e97f = _0x4514c6;
    confirm('Clear\x20all\x20custom\x20mappings?') && (customMappings = {}, localStorage[_0x20e97f(0x180)](_0x20e97f(0x19e)), trie = new Trie(), reverseMap = new Map(), loadData(), renderCustomList(), translate());
});
function _0x6c8f() {
    const _0x4d06d9 = [
        'add',
        'get',
        '\x22\x20class=\x22text-red-500\x20text-sm\x22>Remove</button>',
        'pop',
        '1805712QERrYm',
        'href',
        'emoji-output.txt',
        '3426808jthyWd',
        'emoji',
        'contains',
        'dark',
        'selected',
        'add-custom',
        'ArrowUp',
        'test',
        'edit-mappings',
        'has',
        'children',
        'download-output',
        'hidden',
        'endIndex',
        '7656htZkgC',
        'dataset',
        'toLowerCase',
        'text-2xl\x20cursor-pointer\x20hover:scale-125\x20transition',
        'Copied\x20to\x20clipboard!',
        'preventDefault',
        'www.onlinegamesb.xyz',
        'checked',
        'length',
        'text-to-emoji',
        '3331692IDrwnx',
        'keydown',
        'close-modal',
        'className',
        'createObjectURL',
        'focus',
        'setItem',
        'button',
        'custom-emoji-mappings.json',
        'clipboard',
        'mapping-modal',
        '3996920vPlenq',
        'createElement',
        'input',
        'clear-custom',
        'modal-show',
        'parse',
        'hostname',
        '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>',
        'textContent',
        'remove',
        'favorites',
        'push',
        '298OhIqew',
        'substring',
        'sort',
        'entries',
        'preserve-punctuation',
        'join',
        'split',
        'copy-output',
        '(prefers-color-scheme:\x20dark)',
        'indexOf',
        'forEach',
        'addEventListener',
        'value',
        'classList',
        'selectionEnd',
        'matchMedia',
        'set',
        'custom-phrase',
        'stringify',
        'output-text',
        'getElementById',
        'querySelector',
        'recents',
        'application/json',
        'root',
        'Mappings\x20imported!',
        '27CFevvr',
        'slice',
        'flex\x20justify-between\x20p-2\x20border-b',
        'key',
        'from',
        'onload',
        'change',
        'includes',
        'onlinegamesb.xyz',
        'target',
        'text/plain',
        'splice',
        '1229105OYLamf',
        'assign',
        'removeItem',
        'span',
        'insert',
        'result',
        '<span>',
        '931200KloDpE',
        'getItem',
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20data-phrase=\x22',
        'readAsText',
        'contextmenu',
        'mode-select',
        'appendChild',
        'innerHTML',
        'trim',
        'text-sm\x20bg-indigo-100\x20dark:bg-indigo-900\x20px-2\x20py-1\x20rounded\x20cursor-pointer',
        'replace',
        '.modal-show',
        'Escape',
        'then',
        'input-text',
        'ArrowDown',
        'matches',
        'files',
        'selectionStart',
        'documentElement',
        'Enter',
        'localhost',
        'click',
        'export-mappings',
        'searchLongestMatch',
        'customMappings',
        'querySelectorAll',
        'download'
    ];
    _0x6c8f = function () {
        return _0x4d06d9;
    };
    return _0x6c8f();
}
function toggleFavorite(_0x12e0e2) {
    const _0x37c0df = _0x4514c6, _0x24e3b3 = favorites[_0x37c0df(0x161)](_0x12e0e2);
    _0x24e3b3 === -0x1 ? favorites[_0x37c0df(0x157)](_0x12e0e2) : favorites[_0x37c0df(0x17d)](_0x24e3b3, 0x1), localStorage['setItem']('favorites', JSON[_0x37c0df(0x16a)](favorites)), renderFavorites();
}
function saveRecents() {
    const _0x2623d4 = _0x4514c6;
    recents = [...new Set(recents)][_0x2623d4(0x173)](0x0, 0xa), localStorage[_0x2623d4(0x147)](_0x2623d4(0x16e), JSON[_0x2623d4(0x16a)](recents));
}
function renderFavorites() {
    const _0x17bf74 = _0x4514c6;
    favoritesEl[_0x17bf74(0x18c)] = '', favorites[_0x17bf74(0x162)](_0x300c5d => {
        const _0x4f39ae = _0x17bf74, _0x37358a = document[_0x4f39ae(0x14d)](_0x4f39ae(0x181));
        _0x37358a[_0x4f39ae(0x144)] = _0x4f39ae(0x13a), _0x37358a[_0x4f39ae(0x154)] = _0x300c5d, _0x37358a[_0x4f39ae(0x163)](_0x4f39ae(0x19b), () => insertAtCursor(_0x300c5d)), _0x37358a[_0x4f39ae(0x163)](_0x4f39ae(0x189), _0x4c376e => {
            _0x4c376e['preventDefault'](), toggleFavorite(_0x300c5d);
        }), favoritesEl[_0x4f39ae(0x18b)](_0x37358a);
    });
}
function renderRecents() {
    const _0x99de21 = _0x4514c6;
    recentsEl[_0x99de21(0x18c)] = '', [...new Set(recents)][_0x99de21(0x173)](0x0, 0xa)[_0x99de21(0x162)](_0x5540cd => {
        const _0x3cd8f4 = _0x99de21, _0x48f651 = document[_0x3cd8f4(0x14d)]('span');
        _0x48f651['className'] = _0x3cd8f4(0x18e), _0x48f651['textContent'] = _0x5540cd, _0x48f651[_0x3cd8f4(0x163)](_0x3cd8f4(0x19b), () => insertAtCursor(_0x5540cd)), recentsEl['appendChild'](_0x48f651);
    });
}
themeToggle[_0x4514c6(0x163)](_0x4514c6(0x19b), () => {
    const _0x5d0261 = _0x4514c6;
    document['documentElement'][_0x5d0261(0x165)]['toggle'](_0x5d0261(0x1ab)), themeToggle['textContent'] = document[_0x5d0261(0x198)][_0x5d0261(0x165)][_0x5d0261(0x1aa)](_0x5d0261(0x1ab)) ? '☀️' : '🌙';
}), window[_0x4514c6(0x177)] = () => {
    const _0x57eadd = _0x4514c6;
    loadData(), renderFavorites(), renderRecents(), window[_0x57eadd(0x167)](_0x57eadd(0x160))[_0x57eadd(0x195)] && (document[_0x57eadd(0x198)][_0x57eadd(0x165)]['add'](_0x57eadd(0x1ab)), themeToggle[_0x57eadd(0x154)] = '☀️');
};
const allowedDomains = [
        _0x4514c6(0x13d),
        _0x4514c6(0x19a),
        _0x4514c6(0x17a)
    ], currentHost = window['location'][_0x4514c6(0x152)];
if (!allowedDomains[_0x4514c6(0x179)](currentHost)) {
    document['body'][_0x4514c6(0x18c)] = _0x4514c6(0x153);
    throw new Error('This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!');
}