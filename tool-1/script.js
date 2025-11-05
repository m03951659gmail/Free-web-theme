const _0x224d6c = _0x31b7;
(function (_0x3b4ac4, _0x3ede0c) {
    const _0x5b0802 = _0x31b7, _0x462cfc = _0x3b4ac4();
    while (!![]) {
        try {
            const _0x2539b3 = -parseInt(_0x5b0802(0x201)) / 0x1 + -parseInt(_0x5b0802(0x1f8)) / 0x2 + parseInt(_0x5b0802(0x1dc)) / 0x3 * (-parseInt(_0x5b0802(0x21c)) / 0x4) + -parseInt(_0x5b0802(0x1d4)) / 0x5 * (-parseInt(_0x5b0802(0x1b6)) / 0x6) + -parseInt(_0x5b0802(0x1ab)) / 0x7 + parseInt(_0x5b0802(0x200)) / 0x8 + -parseInt(_0x5b0802(0x1d8)) / 0x9 * (-parseInt(_0x5b0802(0x214)) / 0xa);
            if (_0x2539b3 === _0x3ede0c)
                break;
            else
                _0x462cfc['push'](_0x462cfc['shift']());
        } catch (_0x47c0da) {
            _0x462cfc['push'](_0x462cfc['shift']());
        }
    }
}(_0x38c7, 0xdc562));
let allTools = [...toolsData], filteredTools = [...toolsData], displayedTools = [], currentCategory = 'all', searchQuery = '', loadIndex = 0x0;
const loadPerBatch = 0x3e8;
let isOnline = navigator[_0x224d6c(0x20f)], cachedTools = new Set();
function _0x38c7() {
    const _0x348c37 = [
        '7252jyosFz',
        'appendChild',
        'parse',
        'touchstart',
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tool-name\x22>',
        '<div\x20class=\x22no-results\x22>No\x20cached\x20tools\x20available\x20offline.\x20Please\x20go\x20online\x20to\x20browse\x20tools.</div>',
        '12216148ESruWs',
        'error',
        'tool-card\x20',
        'localhost',
        'light',
        'online',
        'has',
        'createElement',
        'style',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tool-icon\x22>',
        'toLowerCase',
        '3090OWOYBw',
        '(^|\x20)',
        'searchIcon',
        '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>',
        'offlineMessage',
        'searchX',
        'Loaded\x20cached\x20tools:',
        'match',
        'top',
        'setAttribute',
        'www.onlinegamesb.xyz',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'active',
        'left',
        'toolsGrid',
        '.category-btn',
        'target',
        'getTime',
        'preventDefault',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tool-tags\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'searchY',
        'name',
        'textContent',
        'innerHTML',
        'searchInput',
        'Error\x20loading\x20cached\x20tools:',
        'observe',
        'cachedTools',
        'cookie',
        'getItem',
        '225JVJcTr',
        'touchend',
        'length',
        'description',
        '34602489PcbsuX',
        'Online',
        'includes',
        'slice',
        '1896XlrwdI',
        '<span\x20class=\x22offline-badge\x22>Cached</span>',
        'filter',
        '</span>',
        'categoryList',
        'map',
        'documentElement',
        'Offline',
        'category',
        'removeEventListener',
        '=([^;]+)',
        'mousedown',
        'none',
        '.search-header',
        'animationDelay',
        'add',
        ';path=/',
        'theme',
        'offline-only',
        'button',
        'setItem',
        'value',
        'remove',
        'data-theme',
        'mouseup',
        'clientY',
        'className',
        'classList',
        '745242ABqTij',
        'statusDot',
        'display',
        'getElementById',
        'touchmove',
        'offline',
        'addEventListener',
        'searchBar',
        '8795280kXkFKD',
        '801207GwOziq',
        'some',
        '20px',
        'dataset',
        'Error\x20saving\x20cached\x20tools:',
        'clientX',
        'icon',
        'touches',
        'auto',
        'click',
        '100px',
        'dark',
        'getBoundingClientRect',
        'querySelector',
        'onLine',
        'all',
        'link',
        'input',
        'hostname',
        '10XonvNj',
        'forEach',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'contains',
        'category-btn',
        'This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!',
        'stringify',
        'type'
    ];
    _0x38c7 = function () {
        return _0x348c37;
    };
    return _0x38c7();
}
function setCookie(_0x179708, _0x429553, _0x3f949b = 0x16d) {
    const _0x571a68 = _0x224d6c, _0x2db9be = new Date();
    _0x2db9be['setTime'](_0x2db9be[_0x571a68(0x1c7)]() + _0x3f949b * 0x18 * 0x3c * 0x3c * 0x3e8), document['cookie'] = _0x179708 + '=' + _0x429553 + ';expires=' + _0x2db9be['toUTCString']() + _0x571a68(0x1ec);
}
function getCookie(_0x3cc5fe) {
    const _0x525f71 = _0x224d6c, _0x3babb0 = document[_0x525f71(0x1d2)][_0x525f71(0x1bd)](new RegExp(_0x525f71(0x1b7) + _0x3cc5fe + _0x525f71(0x1e6)));
    return _0x3babb0 ? _0x3babb0[0x2] : null;
}
function loadCachedTools() {
    const _0x11b184 = _0x224d6c;
    try {
        const _0x58dd93 = localStorage[_0x11b184(0x1d3)](_0x11b184(0x1d1));
        if (_0x58dd93) {
            const _0x132826 = JSON[_0x11b184(0x1a7)](_0x58dd93);
            cachedTools = new Set(_0x132826), console['log'](_0x11b184(0x1bc), cachedTools);
        }
    } catch (_0x535d8c) {
        console[_0x11b184(0x1ac)](_0x11b184(0x1cf), _0x535d8c), cachedTools = new Set();
    }
}
function saveCachedTools() {
    const _0x5a8d2e = _0x224d6c;
    try {
        localStorage[_0x5a8d2e(0x1f0)](_0x5a8d2e(0x1d1), JSON[_0x5a8d2e(0x21a)]([...cachedTools]));
    } catch (_0x510ed5) {
        console[_0x5a8d2e(0x1ac)](_0x5a8d2e(0x205), _0x510ed5);
    }
}
function addToCachedTools(_0x3dbac6) {
    cachedTools['add'](_0x3dbac6), saveCachedTools(), updateToolsDisplay();
}
function updateNetworkStatus() {
    const _0x41ddce = _0x224d6c, _0x4e6e55 = document[_0x41ddce(0x1fb)](_0x41ddce(0x1f9)), _0x2d8ded = document[_0x41ddce(0x1fb)]('statusText'), _0x2dc5e2 = document[_0x41ddce(0x1fb)](_0x41ddce(0x1ba));
    isOnline ? (_0x4e6e55[_0x41ddce(0x1f7)][_0x41ddce(0x1f2)](_0x41ddce(0x1fd)), _0x2d8ded[_0x41ddce(0x1cc)] = _0x41ddce(0x1d9), _0x2dc5e2[_0x41ddce(0x1b3)]['display'] = _0x41ddce(0x1e8)) : (_0x4e6e55[_0x41ddce(0x1f7)][_0x41ddce(0x1eb)](_0x41ddce(0x1fd)), _0x2d8ded['textContent'] = _0x41ddce(0x1e3), _0x2dc5e2[_0x41ddce(0x1b3)][_0x41ddce(0x1fa)] = 'block'), updateToolsDisplay();
}
const themeToggle = document[_0x224d6c(0x1fb)]('themeToggle'), themeBall = themeToggle[_0x224d6c(0x20e)]('.theme-toggle-ball'), savedTheme = getCookie(_0x224d6c(0x1ed)) || _0x224d6c(0x1af);
document[_0x224d6c(0x1e2)][_0x224d6c(0x1bf)]('data-theme', savedTheme), themeBall[_0x224d6c(0x1cc)] = savedTheme === _0x224d6c(0x20c) ? '☀️' : '🌙', themeToggle[_0x224d6c(0x1fe)](_0x224d6c(0x20a), () => {
    const _0x3fa3de = _0x224d6c, _0x1f14df = document[_0x3fa3de(0x1e2)]['getAttribute'](_0x3fa3de(0x1f3)), _0x3f9ca5 = _0x1f14df === 'dark' ? _0x3fa3de(0x1af) : 'dark';
    document[_0x3fa3de(0x1e2)][_0x3fa3de(0x1bf)](_0x3fa3de(0x1f3), _0x3f9ca5), themeBall[_0x3fa3de(0x1cc)] = _0x3f9ca5 === _0x3fa3de(0x20c) ? '☀️' : '🌙', setCookie(_0x3fa3de(0x1ed), _0x3f9ca5);
});
const searchIcon = document[_0x224d6c(0x1fb)](_0x224d6c(0x1b8)), searchBar = document[_0x224d6c(0x1fb)](_0x224d6c(0x1ff)), searchClose = document[_0x224d6c(0x1fb)]('searchClose'), searchInput = document[_0x224d6c(0x1fb)](_0x224d6c(0x1ce)), searchHeader = searchBar['querySelector'](_0x224d6c(0x1e9));
let isDragging = ![], currentX, currentY, initialX, initialY;
const savedX = getCookie('searchX'), savedY = getCookie(_0x224d6c(0x1ca));
savedX && savedY ? (searchBar[_0x224d6c(0x1b3)][_0x224d6c(0x1c3)] = savedX + 'px', searchBar['style'][_0x224d6c(0x1be)] = savedY + 'px') : (searchBar[_0x224d6c(0x1b3)]['top'] = _0x224d6c(0x20b), searchBar[_0x224d6c(0x1b3)]['right'] = _0x224d6c(0x203));
searchIcon[_0x224d6c(0x1fe)](_0x224d6c(0x20a), () => {
    const _0x482c0f = _0x224d6c;
    searchBar[_0x482c0f(0x1f7)][_0x482c0f(0x1eb)](_0x482c0f(0x1c2)), searchInput['focus']();
}), searchClose[_0x224d6c(0x1fe)](_0x224d6c(0x20a), () => {
    searchBar['classList']['remove']('active');
}), searchHeader[_0x224d6c(0x1fe)](_0x224d6c(0x1e7), dragStart), searchHeader[_0x224d6c(0x1fe)](_0x224d6c(0x1a8), dragStart);
function dragStart(_0x181117) {
    const _0x4f20a3 = _0x224d6c;
    if (_0x181117['target'] === searchInput)
        return;
    isDragging = !![], initialX = _0x181117['type'] === _0x4f20a3(0x1a8) ? _0x181117['touches'][0x0][_0x4f20a3(0x206)] : _0x181117[_0x4f20a3(0x206)], initialY = _0x181117[_0x4f20a3(0x21b)] === _0x4f20a3(0x1a8) ? _0x181117['touches'][0x0]['clientY'] : _0x181117[_0x4f20a3(0x1f5)];
    const _0xb5ba08 = searchBar[_0x4f20a3(0x20d)]();
    currentX = _0xb5ba08[_0x4f20a3(0x1c3)], currentY = _0xb5ba08[_0x4f20a3(0x1be)], document[_0x4f20a3(0x1fe)]('mousemove', drag), document[_0x4f20a3(0x1fe)](_0x4f20a3(0x1f4), dragEnd), document[_0x4f20a3(0x1fe)](_0x4f20a3(0x1fc), drag), document[_0x4f20a3(0x1fe)]('touchend', dragEnd);
}
function drag(_0x43b963) {
    const _0x5ec4aa = _0x224d6c;
    if (!isDragging)
        return;
    _0x43b963[_0x5ec4aa(0x1c8)]();
    const _0x54ccc4 = _0x43b963['type'] === _0x5ec4aa(0x1fc) ? _0x43b963['touches'][0x0][_0x5ec4aa(0x206)] : _0x43b963[_0x5ec4aa(0x206)], _0x4b1609 = _0x43b963[_0x5ec4aa(0x21b)] === 'touchmove' ? _0x43b963[_0x5ec4aa(0x208)][0x0]['clientY'] : _0x43b963['clientY'], _0xea54fb = _0x54ccc4 - initialX, _0x2fce62 = _0x4b1609 - initialY;
    searchBar[_0x5ec4aa(0x1b3)][_0x5ec4aa(0x1c3)] = currentX + _0xea54fb + 'px', searchBar[_0x5ec4aa(0x1b3)][_0x5ec4aa(0x1be)] = currentY + _0x2fce62 + 'px', searchBar[_0x5ec4aa(0x1b3)]['right'] = _0x5ec4aa(0x209);
}
function dragEnd() {
    const _0xf0e8db = _0x224d6c;
    if (isDragging) {
        const _0x5e8651 = searchBar[_0xf0e8db(0x20d)]();
        setCookie(_0xf0e8db(0x1bb), _0x5e8651['left']), setCookie(_0xf0e8db(0x1ca), _0x5e8651[_0xf0e8db(0x1be)]);
    }
    isDragging = ![], document[_0xf0e8db(0x1e5)]('mousemove', drag), document[_0xf0e8db(0x1e5)](_0xf0e8db(0x1f4), dragEnd), document[_0xf0e8db(0x1e5)](_0xf0e8db(0x1fc), drag), document['removeEventListener'](_0xf0e8db(0x1d5), dragEnd);
}
searchInput[_0x224d6c(0x1fe)](_0x224d6c(0x212), _0xe8baca => {
    const _0x293c4d = _0x224d6c;
    searchQuery = _0xe8baca[_0x293c4d(0x1c6)][_0x293c4d(0x1f1)][_0x293c4d(0x1b5)](), filterTools();
});
const categoryList = document['getElementById'](_0x224d6c(0x1e0)), categories = [
        'all',
        ...new Set(allTools['map'](_0x4cc3d4 => _0x4cc3d4[_0x224d6c(0x1e4)]))
    ];
categories[_0x224d6c(0x215)](_0x34b681 => {
    const _0x2008a1 = _0x224d6c;
    if (_0x34b681 !== 'all') {
        const _0x57302a = document[_0x2008a1(0x1b2)](_0x2008a1(0x1ef));
        _0x57302a[_0x2008a1(0x1f6)] = _0x2008a1(0x218), _0x57302a[_0x2008a1(0x1cc)] = _0x34b681, _0x57302a[_0x2008a1(0x204)][_0x2008a1(0x1e4)] = _0x34b681, categoryList[_0x2008a1(0x1a6)](_0x57302a);
    }
}), categoryList[_0x224d6c(0x1fe)](_0x224d6c(0x20a), _0x17b93d => {
    const _0x5906e9 = _0x224d6c;
    _0x17b93d[_0x5906e9(0x1c6)][_0x5906e9(0x1f7)][_0x5906e9(0x217)](_0x5906e9(0x218)) && (document['querySelectorAll'](_0x5906e9(0x1c5))[_0x5906e9(0x215)](_0x950247 => _0x950247[_0x5906e9(0x1f7)]['remove'](_0x5906e9(0x1c2))), _0x17b93d[_0x5906e9(0x1c6)][_0x5906e9(0x1f7)]['add'](_0x5906e9(0x1c2)), currentCategory = _0x17b93d['target'][_0x5906e9(0x204)][_0x5906e9(0x1e4)], filterTools());
});
function _0x31b7(_0x312ff5, _0x3269fd) {
    const _0x38c775 = _0x38c7();
    return _0x31b7 = function (_0x31b7f8, _0x2ec685) {
        _0x31b7f8 = _0x31b7f8 - 0x1a6;
        let _0x4c71c7 = _0x38c775[_0x31b7f8];
        return _0x4c71c7;
    }, _0x31b7(_0x312ff5, _0x3269fd);
}
function filterTools() {
    const _0x231478 = _0x224d6c;
    filteredTools = allTools[_0x231478(0x1de)](_0x12b7ae => {
        const _0x4c9a88 = _0x231478;
        if (!isOnline && !cachedTools[_0x4c9a88(0x1b1)](_0x12b7ae['id']))
            return ![];
        const _0x527254 = currentCategory === _0x4c9a88(0x210) || _0x12b7ae['category'] === currentCategory, _0x2bed95 = _0x12b7ae['name'][_0x4c9a88(0x1b5)]()[_0x4c9a88(0x1da)](searchQuery) || _0x12b7ae[_0x4c9a88(0x1d7)][_0x4c9a88(0x1b5)]()[_0x4c9a88(0x1da)](searchQuery) || _0x12b7ae['tags'][_0x4c9a88(0x202)](_0xa6b627 => _0xa6b627[_0x4c9a88(0x1b5)]()['includes'](searchQuery));
        return _0x527254 && _0x2bed95;
    }), loadIndex = 0x0, displayedTools = [], document[_0x231478(0x1fb)](_0x231478(0x1c4))['innerHTML'] = '', loadMoreTools();
}
function updateToolsDisplay() {
    filterTools();
}
function renderTools(_0x539361) {
    const _0x388db5 = _0x224d6c, _0x5e207c = document[_0x388db5(0x1fb)](_0x388db5(0x1c4));
    _0x539361['forEach']((_0x4696be, _0x494dab) => {
        const _0x5c71bb = _0x388db5, _0x769818 = cachedTools['has'](_0x4696be['id']), _0x192ef4 = _0x769818 && isOnline, _0x1c70d2 = !isOnline && _0x769818, _0x48ee48 = document[_0x5c71bb(0x1b2)]('a');
        _0x48ee48[_0x5c71bb(0x1f6)] = _0x5c71bb(0x1ad) + (_0x1c70d2 ? _0x5c71bb(0x1ee) : ''), _0x48ee48['href'] = _0x4696be[_0x5c71bb(0x211)], _0x48ee48[_0x5c71bb(0x1b3)][_0x5c71bb(0x1ea)] = _0x494dab * 0.05 + 's', _0x48ee48['addEventListener']('click', _0x436395 => {
            const _0x30fedb = _0x5c71bb;
            !cachedTools[_0x30fedb(0x1b1)](_0x4696be['id']) && addToCachedTools(_0x4696be['id']);
        }), _0x48ee48[_0x5c71bb(0x1cd)] = _0x5c71bb(0x216) + (_0x192ef4 ? _0x5c71bb(0x1dd) : '') + _0x5c71bb(0x1b4) + _0x4696be[_0x5c71bb(0x207)] + _0x5c71bb(0x1a9) + _0x4696be[_0x5c71bb(0x1cb)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tool-description\x22>' + _0x4696be['description'] + _0x5c71bb(0x1c9) + _0x4696be['tags'][_0x5c71bb(0x1e1)](_0x4c5a99 => '<span\x20class=\x22tool-tag\x22>' + _0x4c5a99 + _0x5c71bb(0x1df))['join']('') + _0x5c71bb(0x1c1), _0x5e207c['appendChild'](_0x48ee48);
    }), filteredTools[_0x388db5(0x1d6)] === 0x0 && (!isOnline ? _0x5e207c[_0x388db5(0x1cd)] = _0x388db5(0x1aa) : _0x5e207c[_0x388db5(0x1cd)] = '<div\x20class=\x22no-results\x22>No\x20tools\x20found.\x20Try\x20a\x20different\x20search\x20or\x20category.</div>');
}
function loadMoreTools() {
    const _0x1baff5 = _0x224d6c, _0x1d149e = filteredTools[_0x1baff5(0x1db)](loadIndex, loadIndex + loadPerBatch);
    displayedTools = [
        ...displayedTools,
        ..._0x1d149e
    ], renderTools(_0x1d149e), loadIndex += loadPerBatch;
}
const loading = document[_0x224d6c(0x1fb)]('loading'), observer = new IntersectionObserver(_0x1a496e => {
        const _0x4b36c0 = _0x224d6c;
        _0x1a496e[0x0]['isIntersecting'] && loadIndex < filteredTools[_0x4b36c0(0x1d6)] && (loading[_0x4b36c0(0x1b3)][_0x4b36c0(0x1fa)] = 'block', setTimeout(() => {
            const _0x4a9922 = _0x4b36c0;
            loadMoreTools(), loading['style'][_0x4a9922(0x1fa)] = 'none';
        }, 0x1f4));
    }, { 'threshold': 0.5 });
observer[_0x224d6c(0x1d0)](loading), window[_0x224d6c(0x1fe)](_0x224d6c(0x1b0), () => {
    isOnline = !![], updateNetworkStatus();
}), window[_0x224d6c(0x1fe)](_0x224d6c(0x1fd), () => {
    isOnline = ![], updateNetworkStatus();
}), loadCachedTools(), updateNetworkStatus(), loadMoreTools();
const allowedDomains = [
        _0x224d6c(0x1c0),
        _0x224d6c(0x1ae),
        'onlinegamesb.xyz'
    ], currentHost = window['location'][_0x224d6c(0x213)];
if (!allowedDomains[_0x224d6c(0x1da)](currentHost)) {
    document['body'][_0x224d6c(0x1cd)] = _0x224d6c(0x1b9);
    throw new Error(_0x224d6c(0x219));
}