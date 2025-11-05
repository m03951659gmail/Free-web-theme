const _0xae3fa7 = _0x4d42;
(function (_0x349522, _0x3e74a7) {
    const _0x250804 = _0x4d42, _0xb52935 = _0x349522();
    while (!![]) {
        try {
            const _0x206df4 = -parseInt(_0x250804(0x1a9)) / 0x1 * (-parseInt(_0x250804(0x156)) / 0x2) + -parseInt(_0x250804(0x19c)) / 0x3 * (parseInt(_0x250804(0x17e)) / 0x4) + -parseInt(_0x250804(0x15a)) / 0x5 * (parseInt(_0x250804(0x1a8)) / 0x6) + -parseInt(_0x250804(0x1c0)) / 0x7 * (-parseInt(_0x250804(0x1bb)) / 0x8) + -parseInt(_0x250804(0x1a5)) / 0x9 + parseInt(_0x250804(0x18f)) / 0xa + -parseInt(_0x250804(0x15b)) / 0xb * (-parseInt(_0x250804(0x1a1)) / 0xc);
            if (_0x206df4 === _0x3e74a7)
                break;
            else
                _0xb52935['push'](_0xb52935['shift']());
        } catch (_0x185792) {
            _0xb52935['push'](_0xb52935['shift']());
        }
    }
}(_0x442c, 0x4515a));
let allTools = [...toolsData], filteredTools = [...toolsData], displayedTools = [], currentCategory = _0xae3fa7(0x17f), searchQuery = '', loadIndex = 0x0;
const loadPerBatch = 0x6;
let isOnline = navigator['onLine'];
async function checkCachedTools() {
    const _0x5c922c = _0xae3fa7, _0x1e7623 = new Set();
    try {
        const _0x33a173 = await caches[_0x5c922c(0x1a7)]();
        for (const _0x42ca5e of _0x33a173) {
            const _0xce4521 = await caches[_0x5c922c(0x1a6)](_0x42ca5e), _0x5194f7 = await _0xce4521[_0x5c922c(0x1a7)]();
            _0x5194f7[_0x5c922c(0x16f)](_0x303ccb => {
                const _0x31443e = _0x5c922c, _0x239c6d = new URL(_0x303ccb[_0x31443e(0x19d)]);
                _0x1e7623['add'](_0x239c6d[_0x31443e(0x175)]);
            });
        }
    } catch (_0x1e5e23) {
        console['error']('Cache\x20check\x20error:', _0x1e5e23);
    }
    return _0x1e7623;
}
function _0x4d42(_0x2ee390, _0x2127c6) {
    const _0x442c5f = _0x442c();
    return _0x4d42 = function (_0x4d4262, _0x14e61a) {
        _0x4d4262 = _0x4d4262 - 0x153;
        let _0x24e841 = _0x442c5f[_0x4d4262];
        return _0x24e841;
    }, _0x4d42(_0x2ee390, _0x2127c6);
}
function updateOnlineStatus() {
    const _0x4bda97 = _0xae3fa7;
    isOnline = navigator['onLine'];
    const _0x2fc06e = document[_0x4bda97(0x159)](_0x4bda97(0x171)), _0x9c68e8 = document[_0x4bda97(0x159)](_0x4bda97(0x1b1));
    isOnline ? (_0x2fc06e[_0x4bda97(0x185)]['remove'](_0x4bda97(0x1a4)), _0x9c68e8['textContent'] = 'Online') : (_0x2fc06e[_0x4bda97(0x185)][_0x4bda97(0x181)](_0x4bda97(0x1a4)), _0x9c68e8[_0x4bda97(0x1c2)] = _0x4bda97(0x16c)), filterTools();
}
window[_0xae3fa7(0x17a)](_0xae3fa7(0x191), updateOnlineStatus), window[_0xae3fa7(0x17a)](_0xae3fa7(0x1a4), updateOnlineStatus);
function setCookie(_0x582c71, _0x19b52a, _0x40245a = 0x16d) {
    const _0x1762db = _0xae3fa7, _0x3ab5ec = new Date();
    _0x3ab5ec[_0x1762db(0x169)](_0x3ab5ec[_0x1762db(0x1aa)]() + _0x40245a * 0x18 * 0x3c * 0x3c * 0x3e8), document[_0x1762db(0x155)] = _0x582c71 + '=' + _0x19b52a + ';expires=' + _0x3ab5ec[_0x1762db(0x1b3)]() + _0x1762db(0x164);
}
function getCookie(_0x474b74) {
    const _0x10e085 = _0xae3fa7, _0x578134 = document[_0x10e085(0x155)]['match'](new RegExp('(^|\x20)' + _0x474b74 + _0x10e085(0x18a)));
    return _0x578134 ? _0x578134[0x2] : null;
}
const themeToggle = document[_0xae3fa7(0x159)](_0xae3fa7(0x1b5)), themeBall = themeToggle[_0xae3fa7(0x1af)](_0xae3fa7(0x1ae)), savedTheme = getCookie(_0xae3fa7(0x1b9)) || _0xae3fa7(0x17b);
document[_0xae3fa7(0x165)][_0xae3fa7(0x166)]('data-theme', savedTheme), themeBall[_0xae3fa7(0x1c2)] = savedTheme === _0xae3fa7(0x157) ? '☀️' : '🌙', themeToggle['addEventListener'](_0xae3fa7(0x180), () => {
    const _0x77b8c4 = _0xae3fa7, _0xdf8840 = document['documentElement'][_0x77b8c4(0x18b)](_0x77b8c4(0x168)), _0x2f7dea = _0xdf8840 === _0x77b8c4(0x157) ? 'light' : _0x77b8c4(0x157);
    document['documentElement']['setAttribute'](_0x77b8c4(0x168), _0x2f7dea), themeBall[_0x77b8c4(0x1c2)] = _0x2f7dea === _0x77b8c4(0x157) ? '☀️' : '🌙', setCookie(_0x77b8c4(0x1b9), _0x2f7dea);
});
const searchIcon = document['getElementById']('searchIcon'), searchBar = document[_0xae3fa7(0x159)]('searchBar'), searchClose = document[_0xae3fa7(0x159)](_0xae3fa7(0x19b)), searchInput = document['getElementById'](_0xae3fa7(0x195)), searchHeader = searchBar[_0xae3fa7(0x1af)](_0xae3fa7(0x16b));
let isDragging = ![], currentX, currentY, initialX, initialY;
const savedX = getCookie(_0xae3fa7(0x154)), savedY = getCookie(_0xae3fa7(0x178));
savedX && savedY ? (searchBar[_0xae3fa7(0x18d)][_0xae3fa7(0x1ab)] = savedX + 'px', searchBar[_0xae3fa7(0x18d)]['top'] = savedY + 'px') : (searchBar[_0xae3fa7(0x18d)][_0xae3fa7(0x1b2)] = '100px', searchBar['style'][_0xae3fa7(0x161)] = '20px');
searchIcon[_0xae3fa7(0x17a)](_0xae3fa7(0x180), () => {
    const _0x4a4168 = _0xae3fa7;
    searchBar[_0x4a4168(0x185)][_0x4a4168(0x181)](_0x4a4168(0x186)), searchInput[_0x4a4168(0x1c1)]();
}), searchClose[_0xae3fa7(0x17a)](_0xae3fa7(0x180), () => {
    const _0x2c05bc = _0xae3fa7;
    searchBar[_0x2c05bc(0x185)][_0x2c05bc(0x153)](_0x2c05bc(0x186));
}), searchHeader['addEventListener']('mousedown', dragStart), searchHeader[_0xae3fa7(0x17a)](_0xae3fa7(0x15d), dragStart);
function dragStart(_0x2c6e95) {
    const _0x2ba98d = _0xae3fa7;
    if (_0x2c6e95[_0x2ba98d(0x192)] === searchInput)
        return;
    isDragging = !![], initialX = _0x2c6e95[_0x2ba98d(0x19a)] === _0x2ba98d(0x15d) ? _0x2c6e95[_0x2ba98d(0x16d)][0x0][_0x2ba98d(0x16e)] : _0x2c6e95[_0x2ba98d(0x16e)], initialY = _0x2c6e95[_0x2ba98d(0x19a)] === _0x2ba98d(0x15d) ? _0x2c6e95['touches'][0x0]['clientY'] : _0x2c6e95[_0x2ba98d(0x1bd)];
    const _0x105cb8 = searchBar[_0x2ba98d(0x1ad)]();
    currentX = _0x105cb8[_0x2ba98d(0x1ab)], currentY = _0x105cb8['top'], document['addEventListener']('mousemove', drag), document['addEventListener'](_0x2ba98d(0x1be), dragEnd), document[_0x2ba98d(0x17a)](_0x2ba98d(0x190), drag), document[_0x2ba98d(0x17a)](_0x2ba98d(0x158), dragEnd);
}
function drag(_0x157958) {
    const _0x5d88e8 = _0xae3fa7;
    if (!isDragging)
        return;
    _0x157958[_0x5d88e8(0x1bc)]();
    const _0x1b0d48 = _0x157958[_0x5d88e8(0x19a)] === _0x5d88e8(0x190) ? _0x157958[_0x5d88e8(0x16d)][0x0][_0x5d88e8(0x16e)] : _0x157958[_0x5d88e8(0x16e)], _0x1b5a21 = _0x157958['type'] === _0x5d88e8(0x190) ? _0x157958[_0x5d88e8(0x16d)][0x0][_0x5d88e8(0x1bd)] : _0x157958[_0x5d88e8(0x1bd)], _0x172fac = _0x1b0d48 - initialX, _0x569bf9 = _0x1b5a21 - initialY;
    searchBar[_0x5d88e8(0x18d)][_0x5d88e8(0x1ab)] = currentX + _0x172fac + 'px', searchBar[_0x5d88e8(0x18d)]['top'] = currentY + _0x569bf9 + 'px', searchBar[_0x5d88e8(0x18d)][_0x5d88e8(0x161)] = _0x5d88e8(0x1b7);
}
function dragEnd() {
    const _0x144cec = _0xae3fa7;
    if (isDragging) {
        const _0x192bc8 = searchBar[_0x144cec(0x1ad)]();
        setCookie('searchX', _0x192bc8[_0x144cec(0x1ab)]), setCookie(_0x144cec(0x178), _0x192bc8[_0x144cec(0x1b2)]);
    }
    isDragging = ![], document[_0x144cec(0x162)]('mousemove', drag), document[_0x144cec(0x162)](_0x144cec(0x1be), dragEnd), document[_0x144cec(0x162)](_0x144cec(0x190), drag), document[_0x144cec(0x162)]('touchend', dragEnd);
}
searchInput['addEventListener']('input', _0x2bf784 => {
    const _0x2df7a1 = _0xae3fa7;
    searchQuery = _0x2bf784[_0x2df7a1(0x192)][_0x2df7a1(0x182)][_0x2df7a1(0x194)](), filterTools();
});
const categoryList = document[_0xae3fa7(0x159)](_0xae3fa7(0x188)), categories = [
        _0xae3fa7(0x17f),
        ...new Set(allTools['map'](_0x50b522 => _0x50b522[_0xae3fa7(0x17d)]))
    ];
categories[_0xae3fa7(0x16f)](_0x411ece => {
    const _0x327741 = _0xae3fa7;
    if (_0x411ece !== 'all') {
        const _0x173266 = document[_0x327741(0x1a3)](_0x327741(0x179));
        _0x173266[_0x327741(0x1b6)] = _0x327741(0x183), _0x173266[_0x327741(0x1c2)] = _0x411ece, _0x173266[_0x327741(0x18c)][_0x327741(0x17d)] = _0x411ece, categoryList[_0x327741(0x163)](_0x173266);
    }
}), categoryList[_0xae3fa7(0x17a)]('click', _0x39a6ce => {
    const _0x1dc48a = _0xae3fa7;
    _0x39a6ce['target'][_0x1dc48a(0x185)]['contains'](_0x1dc48a(0x183)) && (document[_0x1dc48a(0x173)](_0x1dc48a(0x19f))[_0x1dc48a(0x16f)](_0x9b7383 => _0x9b7383[_0x1dc48a(0x185)][_0x1dc48a(0x153)](_0x1dc48a(0x186))), _0x39a6ce[_0x1dc48a(0x192)][_0x1dc48a(0x185)][_0x1dc48a(0x181)]('active'), currentCategory = _0x39a6ce['target'][_0x1dc48a(0x18c)][_0x1dc48a(0x17d)], filterTools());
});
async function filterTools() {
    const _0x515a3d = _0xae3fa7;
    let _0x425f41 = allTools;
    if (!isOnline) {
        const _0xe4b241 = await checkCachedTools();
        _0x425f41 = allTools[_0x515a3d(0x170)](_0x5d6dbd => {
            const _0x32f2b4 = _0x515a3d, _0x25c7eb = '/' + _0x5d6dbd['link'];
            return _0xe4b241['has'](_0x25c7eb) || _0xe4b241[_0x32f2b4(0x1b4)](_0x5d6dbd[_0x32f2b4(0x1ba)]);
        });
    }
    filteredTools = _0x425f41[_0x515a3d(0x170)](_0x48b08b => {
        const _0x151924 = _0x515a3d, _0x1ae2fa = currentCategory === _0x151924(0x17f) || _0x48b08b[_0x151924(0x17d)] === currentCategory, _0x2c7eb8 = _0x48b08b['name'][_0x151924(0x194)]()[_0x151924(0x196)](searchQuery) || _0x48b08b['description']['toLowerCase']()['includes'](searchQuery) || _0x48b08b[_0x151924(0x193)][_0x151924(0x1c3)](_0x415d19 => _0x415d19[_0x151924(0x194)]()[_0x151924(0x196)](searchQuery));
        return _0x1ae2fa && _0x2c7eb8;
    }), loadIndex = 0x0, displayedTools = [], document[_0x515a3d(0x159)](_0x515a3d(0x177))[_0x515a3d(0x199)] = '', loadMoreTools();
}
function _0x442c() {
    const _0x544562 = [
        'No\x20offline\x20tools\x20available.\x20Visit\x20tools\x20while\x20online\x20to\x20cache\x20them.',
        'location',
        'right',
        'removeEventListener',
        'appendChild',
        ';path=/',
        'documentElement',
        'setAttribute',
        'join',
        'data-theme',
        'setTime',
        'href',
        '.search-header',
        'Offline',
        'touches',
        'clientX',
        'forEach',
        'filter',
        'statusIndicator',
        '</span>',
        'querySelectorAll',
        'No\x20tools\x20found.\x20Try\x20a\x20different\x20search\x20or\x20category.',
        'pathname',
        'hostname',
        'toolsGrid',
        'searchY',
        'button',
        'addEventListener',
        'light',
        'length',
        'category',
        '133996CatKDp',
        'all',
        'click',
        'add',
        'value',
        'category-btn',
        'localhost',
        'classList',
        'active',
        'This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!',
        'categoryList',
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tool-name\x22>',
        '=([^;]+)',
        'getAttribute',
        'dataset',
        'style',
        'block',
        '5221950SCpPqy',
        'touchmove',
        'online',
        'target',
        'tags',
        'toLowerCase',
        'searchInput',
        'includes',
        'body',
        'description',
        'innerHTML',
        'type',
        'searchClose',
        '21AeEOtd',
        'url',
        'www.onlinegamesb.xyz',
        '.category-btn',
        '<span\x20class=\x22tool-tag\x22>',
        '8508AXSIIa',
        'animationDelay',
        'createElement',
        'offline',
        '1526247QPfyDS',
        'open',
        'keys',
        '6JedpWI',
        '2251sMcumU',
        'getTime',
        'left',
        'display',
        'getBoundingClientRect',
        '.theme-toggle-ball',
        'querySelector',
        'none',
        'statusText',
        'top',
        'toUTCString',
        'has',
        'themeToggle',
        'className',
        'auto',
        'name',
        'theme',
        'link',
        '29256bhYouB',
        'preventDefault',
        'clientY',
        'mouseup',
        'isIntersecting',
        '133hkrFck',
        'focus',
        'textContent',
        'some',
        'remove',
        'searchX',
        'cookie',
        '406xeTsWf',
        'dark',
        'touchend',
        'getElementById',
        '2311315brbHpe',
        '1562oYIkjI',
        '<div\x20class=\x22no-results\x22>',
        'touchstart',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'
    ];
    _0x442c = function () {
        return _0x544562;
    };
    return _0x442c();
}
async function renderTools(_0x102d8a) {
    const _0x3dc53b = _0xae3fa7, _0x47816b = document[_0x3dc53b(0x159)](_0x3dc53b(0x177)), _0x59d798 = await checkCachedTools();
    _0x102d8a[_0x3dc53b(0x16f)]((_0x26ec6d, _0x1ae037) => {
        const _0x401382 = _0x3dc53b, _0x19410a = document[_0x401382(0x1a3)]('a');
        _0x19410a[_0x401382(0x1b6)] = 'tool-card', _0x19410a[_0x401382(0x16a)] = _0x26ec6d[_0x401382(0x1ba)], _0x19410a[_0x401382(0x18d)][_0x401382(0x1a2)] = _0x1ae037 * 0.05 + 's';
        const _0x4092b3 = '/' + _0x26ec6d['link'], _0xf37726 = _0x59d798['has'](_0x4092b3) || _0x59d798[_0x401382(0x1b4)](_0x26ec6d[_0x401382(0x1ba)]);
        _0xf37726 && _0x19410a[_0x401382(0x185)]['add']('offline-available'), _0x19410a[_0x401382(0x199)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tool-icon\x22>' + _0x26ec6d['icon'] + _0x401382(0x189) + _0x26ec6d[_0x401382(0x1b8)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tool-description\x22>' + _0x26ec6d[_0x401382(0x198)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tool-tags\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x26ec6d[_0x401382(0x193)]['map'](_0x29f529 => _0x401382(0x1a0) + _0x29f529 + _0x401382(0x172))[_0x401382(0x167)]('') + _0x401382(0x15e), _0x47816b[_0x401382(0x163)](_0x19410a);
    });
    if (filteredTools['length'] === 0x0) {
        const _0xe35503 = isOnline ? _0x3dc53b(0x174) : _0x3dc53b(0x15f);
        _0x47816b['innerHTML'] = _0x3dc53b(0x15c) + _0xe35503 + '</div>';
    }
}
function loadMoreTools() {
    const _0x3401b0 = filteredTools['slice'](loadIndex, loadIndex + loadPerBatch);
    displayedTools = [
        ...displayedTools,
        ..._0x3401b0
    ], renderTools(_0x3401b0), loadIndex += loadPerBatch;
}
const loading = document[_0xae3fa7(0x159)]('loading'), observer = new IntersectionObserver(_0xa9c21 => {
        const _0x1e5e6d = _0xae3fa7;
        _0xa9c21[0x0][_0x1e5e6d(0x1bf)] && loadIndex < filteredTools[_0x1e5e6d(0x17c)] && (loading['style'][_0x1e5e6d(0x1ac)] = _0x1e5e6d(0x18e), setTimeout(() => {
            const _0x4b017f = _0x1e5e6d;
            loadMoreTools(), loading['style'][_0x4b017f(0x1ac)] = _0x4b017f(0x1b0);
        }, 0x1f4));
    }, { 'threshold': 0.5 });
observer['observe'](loading), updateOnlineStatus();
const allowedDomains = [
        _0xae3fa7(0x19e),
        _0xae3fa7(0x184),
        'onlinegamesb.xyz'
    ], currentHost = window[_0xae3fa7(0x160)][_0xae3fa7(0x176)];
if (!allowedDomains['includes'](currentHost)) {
    document[_0xae3fa7(0x197)]['innerHTML'] = '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>';
    throw new Error(_0xae3fa7(0x187));
}