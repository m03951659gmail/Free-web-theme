function _0x2b2b() {
    const _0x56f662 = [
        ';path=/',
        'block',
        'mousemove',
        'cookie',
        'preventDefault',
        'type',
        'map',
        'contains',
        'addEventListener',
        '895938qLHQLu',
        'button',
        'www.onlinegamesb.xyz',
        '71608cjoYKv',
        'removeEventListener',
        'href',
        ';expires=',
        'touchstart',
        'dark',
        'some',
        'top',
        'dataset',
        '553qlOwla',
        'clientY',
        'data-theme',
        'createElement',
        'add',
        'includes',
        'body',
        'This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!',
        'description',
        'toolsGrid',
        'mousedown',
        'textContent',
        'right',
        '2029248bzviMM',
        'getBoundingClientRect',
        'onlinegamesb.xyz',
        'getElementById',
        '80lqzkQf',
        'classList',
        'active',
        'toUTCString',
        'value',
        'hostname',
        'theme',
        'auto',
        '533984UGBAoq',
        'setAttribute',
        'forEach',
        'themeToggle',
        'target',
        'touchend',
        '(^|\x20)',
        'category',
        '2xqCHBK',
        'focus',
        'clientX',
        'tags',
        '.category-btn',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tool-description\x22>',
        'innerHTML',
        'length',
        'category-btn',
        'isIntersecting',
        '=([^;]+)',
        'name',
        '5BEkZWZ',
        '900046CmsAMf',
        'join',
        'localhost',
        'left',
        'all',
        'remove',
        'className',
        'searchIcon',
        '7434366iMzkxT',
        'display',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '20px',
        'touchmove',
        'touches',
        'searchClose',
        'appendChild',
        'searchX',
        '.search-header',
        'none',
        'toLowerCase',
        'loading',
        'querySelector',
        'animationDelay',
        'location',
        'style',
        'light',
        'searchBar',
        'tool-card',
        '<div\x20class=\x22no-results\x22>No\x20tools\x20found.\x20Try\x20a\x20different\x20search\x20or\x20category.</div>',
        'mouseup',
        'getTime',
        'click',
        '1680201LdtDGx',
        'documentElement',
        '732cSgSwt'
    ];
    _0x2b2b = function () {
        return _0x56f662;
    };
    return _0x2b2b();
}
const _0x823be7 = _0xf70f;
(function (_0x24a6d6, _0x332ef3) {
    const _0x4ff4f3 = _0xf70f, _0x43182c = _0x24a6d6();
    while (!![]) {
        try {
            const _0x33c8be = -parseInt(_0x4ff4f3(0x1b6)) / 0x1 + -parseInt(_0x4ff4f3(0x20f)) / 0x2 * (-parseInt(_0x4ff4f3(0x1e2)) / 0x3) + parseInt(_0x4ff4f3(0x1fb)) / 0x4 + -parseInt(_0x4ff4f3(0x1b5)) / 0x5 * (parseInt(_0x4ff4f3(0x1be)) / 0x6) + parseInt(_0x4ff4f3(0x1ee)) / 0x7 * (parseInt(_0x4ff4f3(0x1e5)) / 0x8) + -parseInt(_0x4ff4f3(0x1d6)) / 0x9 * (parseInt(_0x4ff4f3(0x1ff)) / 0xa) + parseInt(_0x4ff4f3(0x207)) / 0xb * (parseInt(_0x4ff4f3(0x1d8)) / 0xc);
            if (_0x33c8be === _0x332ef3)
                break;
            else
                _0x43182c['push'](_0x43182c['shift']());
        } catch (_0x383690) {
            _0x43182c['push'](_0x43182c['shift']());
        }
    }
}(_0x2b2b, 0xcd7b4));
let allTools = [...toolsData], filteredTools = [...toolsData], displayedTools = [], currentCategory = _0x823be7(0x1ba), searchQuery = '', loadIndex = 0x0;
const loadPerBatch = 0x7d0;
function setCookie(_0x4fc964, _0x2a61b7, _0x17c5de = 0x16d) {
    const _0x2b665a = _0x823be7, _0x3f7172 = new Date();
    _0x3f7172['setTime'](_0x3f7172[_0x2b665a(0x1d4)]() + _0x17c5de * 0x18 * 0x3c * 0x3c * 0x3e8), document[_0x2b665a(0x1dc)] = _0x4fc964 + '=' + _0x2a61b7 + _0x2b665a(0x1e8) + _0x3f7172[_0x2b665a(0x202)]() + _0x2b665a(0x1d9);
}
function getCookie(_0xe448f9) {
    const _0x411424 = _0x823be7, _0xa9a0a7 = document['cookie']['match'](new RegExp(_0x411424(0x20d) + _0xe448f9 + _0x411424(0x1b3)));
    return _0xa9a0a7 ? _0xa9a0a7[0x2] : null;
}
const themeToggle = document['getElementById'](_0x823be7(0x20a)), themeBall = themeToggle[_0x823be7(0x1cb)]('.theme-toggle-ball'), savedTheme = getCookie(_0x823be7(0x205)) || 'light';
document[_0x823be7(0x1d7)][_0x823be7(0x208)](_0x823be7(0x1f0), savedTheme), themeBall['textContent'] = savedTheme === _0x823be7(0x1ea) ? '☀️' : '🌙', themeToggle[_0x823be7(0x1e1)]('click', () => {
    const _0x51b40f = _0x823be7, _0x405d91 = document[_0x51b40f(0x1d7)]['getAttribute'](_0x51b40f(0x1f0)), _0x4f9c2c = _0x405d91 === _0x51b40f(0x1ea) ? _0x51b40f(0x1cf) : _0x51b40f(0x1ea);
    document[_0x51b40f(0x1d7)][_0x51b40f(0x208)](_0x51b40f(0x1f0), _0x4f9c2c), themeBall[_0x51b40f(0x1f9)] = _0x4f9c2c === 'dark' ? '☀️' : '🌙', setCookie(_0x51b40f(0x205), _0x4f9c2c);
});
const searchIcon = document[_0x823be7(0x1fe)](_0x823be7(0x1bd)), searchBar = document[_0x823be7(0x1fe)](_0x823be7(0x1d0)), searchClose = document[_0x823be7(0x1fe)](_0x823be7(0x1c4)), searchInput = document[_0x823be7(0x1fe)]('searchInput'), searchHeader = searchBar[_0x823be7(0x1cb)](_0x823be7(0x1c7));
let isDragging = ![], currentX, currentY, initialX, initialY;
const savedX = getCookie(_0x823be7(0x1c6)), savedY = getCookie('searchY');
function _0xf70f(_0x3414ae, _0x2293fb) {
    const _0x2b2bff = _0x2b2b();
    return _0xf70f = function (_0xf70fa0, _0x596fef) {
        _0xf70fa0 = _0xf70fa0 - 0x1af;
        let _0x267ee1 = _0x2b2bff[_0xf70fa0];
        return _0x267ee1;
    }, _0xf70f(_0x3414ae, _0x2293fb);
}
savedX && savedY ? (searchBar['style'][_0x823be7(0x1b9)] = savedX + 'px', searchBar[_0x823be7(0x1ce)]['top'] = savedY + 'px') : (searchBar[_0x823be7(0x1ce)][_0x823be7(0x1ec)] = '100px', searchBar[_0x823be7(0x1ce)][_0x823be7(0x1fa)] = _0x823be7(0x1c1));
searchIcon[_0x823be7(0x1e1)](_0x823be7(0x1d5), () => {
    const _0x19cb99 = _0x823be7;
    searchBar[_0x19cb99(0x200)][_0x19cb99(0x1f2)]('active'), searchInput[_0x19cb99(0x210)]();
}), searchClose[_0x823be7(0x1e1)](_0x823be7(0x1d5), () => {
    const _0x19c0dd = _0x823be7;
    searchBar[_0x19c0dd(0x200)]['remove']('active');
}), searchHeader['addEventListener'](_0x823be7(0x1f8), dragStart), searchHeader[_0x823be7(0x1e1)](_0x823be7(0x1e9), dragStart);
function dragStart(_0x2a873e) {
    const _0x4fdcc3 = _0x823be7;
    if (_0x2a873e[_0x4fdcc3(0x20b)] === searchInput)
        return;
    isDragging = !![], initialX = _0x2a873e[_0x4fdcc3(0x1de)] === 'touchstart' ? _0x2a873e['touches'][0x0][_0x4fdcc3(0x211)] : _0x2a873e[_0x4fdcc3(0x211)], initialY = _0x2a873e[_0x4fdcc3(0x1de)] === _0x4fdcc3(0x1e9) ? _0x2a873e[_0x4fdcc3(0x1c3)][0x0]['clientY'] : _0x2a873e[_0x4fdcc3(0x1ef)];
    const _0x48bb1a = searchBar[_0x4fdcc3(0x1fc)]();
    currentX = _0x48bb1a[_0x4fdcc3(0x1b9)], currentY = _0x48bb1a[_0x4fdcc3(0x1ec)], document[_0x4fdcc3(0x1e1)]('mousemove', drag), document[_0x4fdcc3(0x1e1)](_0x4fdcc3(0x1d3), dragEnd), document[_0x4fdcc3(0x1e1)](_0x4fdcc3(0x1c2), drag), document[_0x4fdcc3(0x1e1)](_0x4fdcc3(0x20c), dragEnd);
}
function drag(_0x5f343) {
    const _0xf82372 = _0x823be7;
    if (!isDragging)
        return;
    _0x5f343[_0xf82372(0x1dd)]();
    const _0x192b70 = _0x5f343[_0xf82372(0x1de)] === _0xf82372(0x1c2) ? _0x5f343[_0xf82372(0x1c3)][0x0][_0xf82372(0x211)] : _0x5f343[_0xf82372(0x211)], _0x296672 = _0x5f343[_0xf82372(0x1de)] === 'touchmove' ? _0x5f343[_0xf82372(0x1c3)][0x0][_0xf82372(0x1ef)] : _0x5f343[_0xf82372(0x1ef)], _0x316126 = _0x192b70 - initialX, _0x52c959 = _0x296672 - initialY;
    searchBar[_0xf82372(0x1ce)][_0xf82372(0x1b9)] = currentX + _0x316126 + 'px', searchBar[_0xf82372(0x1ce)][_0xf82372(0x1ec)] = currentY + _0x52c959 + 'px', searchBar[_0xf82372(0x1ce)]['right'] = _0xf82372(0x206);
}
function dragEnd() {
    const _0x2cefea = _0x823be7;
    if (isDragging) {
        const _0x2998a6 = searchBar[_0x2cefea(0x1fc)]();
        setCookie(_0x2cefea(0x1c6), _0x2998a6['left']), setCookie('searchY', _0x2998a6[_0x2cefea(0x1ec)]);
    }
    isDragging = ![], document[_0x2cefea(0x1e6)](_0x2cefea(0x1db), drag), document[_0x2cefea(0x1e6)](_0x2cefea(0x1d3), dragEnd), document['removeEventListener'](_0x2cefea(0x1c2), drag), document[_0x2cefea(0x1e6)](_0x2cefea(0x20c), dragEnd);
}
searchInput[_0x823be7(0x1e1)]('input', _0x76fefe => {
    const _0x32880e = _0x823be7;
    searchQuery = _0x76fefe[_0x32880e(0x20b)][_0x32880e(0x203)][_0x32880e(0x1c9)](), filterTools();
});
const categoryList = document[_0x823be7(0x1fe)]('categoryList'), categories = [
        _0x823be7(0x1ba),
        ...new Set(allTools['map'](_0x443f45 => _0x443f45[_0x823be7(0x20e)]))
    ];
categories[_0x823be7(0x209)](_0x160d7b => {
    const _0x2e0cbf = _0x823be7;
    if (_0x160d7b !== _0x2e0cbf(0x1ba)) {
        const _0x42b028 = document[_0x2e0cbf(0x1f1)](_0x2e0cbf(0x1e3));
        _0x42b028['className'] = 'category-btn', _0x42b028[_0x2e0cbf(0x1f9)] = _0x160d7b, _0x42b028[_0x2e0cbf(0x1ed)][_0x2e0cbf(0x20e)] = _0x160d7b, categoryList[_0x2e0cbf(0x1c5)](_0x42b028);
    }
}), categoryList[_0x823be7(0x1e1)]('click', _0x1e017a => {
    const _0x57c7f1 = _0x823be7;
    _0x1e017a['target']['classList'][_0x57c7f1(0x1e0)](_0x57c7f1(0x1b1)) && (document['querySelectorAll'](_0x57c7f1(0x213))['forEach'](_0x73e5b2 => _0x73e5b2[_0x57c7f1(0x200)][_0x57c7f1(0x1bb)](_0x57c7f1(0x201))), _0x1e017a['target']['classList'][_0x57c7f1(0x1f2)](_0x57c7f1(0x201)), currentCategory = _0x1e017a['target']['dataset'][_0x57c7f1(0x20e)], filterTools());
});
function filterTools() {
    const _0x5b44bd = _0x823be7;
    filteredTools = allTools['filter'](_0x254631 => {
        const _0x52451a = _0xf70f, _0x160aeb = currentCategory === 'all' || _0x254631[_0x52451a(0x20e)] === currentCategory, _0x17382a = _0x254631[_0x52451a(0x1b4)][_0x52451a(0x1c9)]()[_0x52451a(0x1f3)](searchQuery) || _0x254631[_0x52451a(0x1f6)]['toLowerCase']()[_0x52451a(0x1f3)](searchQuery) || _0x254631[_0x52451a(0x212)][_0x52451a(0x1eb)](_0x1eb2af => _0x1eb2af[_0x52451a(0x1c9)]()['includes'](searchQuery));
        return _0x160aeb && _0x17382a;
    }), loadIndex = 0x0, displayedTools = [], document[_0x5b44bd(0x1fe)](_0x5b44bd(0x1f7))[_0x5b44bd(0x1af)] = '', loadMoreTools();
}
function renderTools(_0x1352e2) {
    const _0x1c96dc = _0x823be7, _0x39d8d2 = document['getElementById'](_0x1c96dc(0x1f7));
    _0x1352e2[_0x1c96dc(0x209)]((_0x4d2bd9, _0x573859) => {
        const _0x180598 = _0x1c96dc, _0x3e7f9e = document[_0x180598(0x1f1)]('a');
        _0x3e7f9e[_0x180598(0x1bc)] = _0x180598(0x1d1), _0x3e7f9e[_0x180598(0x1e7)] = _0x4d2bd9['link'], _0x3e7f9e['style'][_0x180598(0x1cc)] = _0x573859 * 0.05 + 's', _0x3e7f9e[_0x180598(0x1af)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tool-icon\x22>' + _0x4d2bd9['icon'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tool-name\x22>' + _0x4d2bd9[_0x180598(0x1b4)] + _0x180598(0x214) + _0x4d2bd9[_0x180598(0x1f6)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tool-tags\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x4d2bd9[_0x180598(0x212)][_0x180598(0x1df)](_0x23270a => '<span\x20class=\x22tool-tag\x22>' + _0x23270a + '</span>')[_0x180598(0x1b7)]('') + _0x180598(0x1c0), _0x39d8d2[_0x180598(0x1c5)](_0x3e7f9e);
    }), filteredTools[_0x1c96dc(0x1b0)] === 0x0 && (_0x39d8d2[_0x1c96dc(0x1af)] = _0x1c96dc(0x1d2));
}
function loadMoreTools() {
    const _0x188adc = filteredTools['slice'](loadIndex, loadIndex + loadPerBatch);
    displayedTools = [
        ...displayedTools,
        ..._0x188adc
    ], renderTools(_0x188adc), loadIndex += loadPerBatch;
}
const loading = document['getElementById'](_0x823be7(0x1ca)), observer = new IntersectionObserver(_0x41f5dd => {
        const _0xb3c5bb = _0x823be7;
        _0x41f5dd[0x0][_0xb3c5bb(0x1b2)] && loadIndex < filteredTools[_0xb3c5bb(0x1b0)] && (loading[_0xb3c5bb(0x1ce)]['display'] = _0xb3c5bb(0x1da), setTimeout(() => {
            const _0xf16707 = _0xb3c5bb;
            loadMoreTools(), loading['style'][_0xf16707(0x1bf)] = _0xf16707(0x1c8);
        }, 0x1f4));
    }, { 'threshold': 0.5 });
observer['observe'](loading), loadMoreTools();
const allowedDomains = [
        _0x823be7(0x1e4),
        _0x823be7(0x1b8),
        _0x823be7(0x1fd)
    ], currentHost = window[_0x823be7(0x1cd)][_0x823be7(0x204)];
if (!allowedDomains['includes'](currentHost)) {
    document[_0x823be7(0x1f4)]['innerHTML'] = '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>';
    throw new Error(_0x823be7(0x1f5));
}