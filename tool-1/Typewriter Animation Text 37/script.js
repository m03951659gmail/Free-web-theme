function _0x67a5(_0x26a46d, _0x2449a0) {
    const _0x50e42e = _0x50e4();
    return _0x67a5 = function (_0x67a5cf, _0x1c3c13) {
        _0x67a5cf = _0x67a5cf - 0x65;
        let _0x5bdfc9 = _0x50e42e[_0x67a5cf];
        return _0x5bdfc9;
    }, _0x67a5(_0x26a46d, _0x2449a0);
}
const _0x44023d = _0x67a5;
(function (_0xbf0917, _0x21ad02) {
    const _0x2e7982 = _0x67a5, _0x45fe6d = _0xbf0917();
    while (!![]) {
        try {
            const _0x2979be = -parseInt(_0x2e7982(0x65)) / 0x1 + -parseInt(_0x2e7982(0xbc)) / 0x2 * (-parseInt(_0x2e7982(0x67)) / 0x3) + parseInt(_0x2e7982(0x7e)) / 0x4 * (-parseInt(_0x2e7982(0xa7)) / 0x5) + parseInt(_0x2e7982(0x77)) / 0x6 + -parseInt(_0x2e7982(0x69)) / 0x7 + -parseInt(_0x2e7982(0x9b)) / 0x8 * (-parseInt(_0x2e7982(0xb8)) / 0x9) + parseInt(_0x2e7982(0xb0)) / 0xa * (-parseInt(_0x2e7982(0x6f)) / 0xb);
            if (_0x2979be === _0x21ad02)
                break;
            else
                _0x45fe6d['push'](_0x45fe6d['shift']());
        } catch (_0x14ccb3) {
            _0x45fe6d['push'](_0x45fe6d['shift']());
        }
    }
}(_0x50e4, 0xe58f0));
class Typewriter {
    constructor(_0x46d8e5, _0x273008 = {}) {
        const _0x6f9cff = _0x67a5;
        this['element'] = _0x46d8e5, this['text'] = _0x273008[_0x6f9cff(0xb6)] || '', this[_0x6f9cff(0x86)] = _0x273008[_0x6f9cff(0x86)] || 0x64, this[_0x6f9cff(0x97)] = _0x273008[_0x6f9cff(0x97)] || 0x32, this['startDelay'] = _0x273008[_0x6f9cff(0xb3)] || 0x1f4, this['mode'] = _0x273008[_0x6f9cff(0xa5)] || 'char', this['loop'] = _0x273008[_0x6f9cff(0x8f)] !== undefined ? _0x273008['loop'] : !![], this[_0x6f9cff(0x87)] = _0x273008['cursorChar'] || '|', this['blinkCursor'] = _0x273008[_0x6f9cff(0x88)] !== undefined ? _0x273008[_0x6f9cff(0x88)] : !![], this[_0x6f9cff(0xaf)] = this[_0x6f9cff(0xb6)], this['currentIndex'] = 0x0, this[_0x6f9cff(0x81)] = [], this[_0x6f9cff(0xb2)] = ![], this[_0x6f9cff(0x8d)] = null, this['parseText'](), this['render']();
    }
    ['parseText']() {
        const _0x1c9755 = _0x67a5, _0x529d9f = /(\^[0-9]+)|(\S+|\s+)/g;
        let _0x78a6b9;
        this[_0x1c9755(0x81)] = [];
        while ((_0x78a6b9 = _0x529d9f['exec'](this[_0x1c9755(0xb6)])) !== null) {
            _0x78a6b9[0x1] ? this['words'][_0x1c9755(0x82)]({
                'type': _0x1c9755(0x8c),
                'duration': parseInt(_0x78a6b9[0x1][_0x1c9755(0x96)](0x1))
            }) : this['words'][_0x1c9755(0x82)]({
                'type': 'text',
                'content': _0x78a6b9[0x0]
            });
        }
    }
    ['render']() {
        const _0x2bc8c4 = _0x67a5;
        this[_0x2bc8c4(0x94)][_0x2bc8c4(0xba)] = '', this[_0x2bc8c4(0x94)]['style'][_0x2bc8c4(0xb9)] = 'pre-line', this['element'][_0x2bc8c4(0xa0)][_0x2bc8c4(0x7d)] = _0x2bc8c4(0xa4), this[_0x2bc8c4(0x9d)] = document[_0x2bc8c4(0x76)]('span'), this[_0x2bc8c4(0x9d)]['textContent'] = this[_0x2bc8c4(0x87)], this['cursorSpan'][_0x2bc8c4(0xae)] = _0x2bc8c4(0xa8), this[_0x2bc8c4(0x88)] && this[_0x2bc8c4(0x9d)][_0x2bc8c4(0x8e)][_0x2bc8c4(0xab)](_0x2bc8c4(0x9c)), this['element']['appendChild'](this[_0x2bc8c4(0x9d)]);
    }
    [_0x44023d(0x6c)]() {
        const _0x45225a = _0x44023d;
        if (this[_0x45225a(0xb2)])
            return;
        this[_0x45225a(0xb2)] = !![], this[_0x45225a(0x6a)] = 0x0, this[_0x45225a(0x94)][_0x45225a(0xa6)][_0x45225a(0xbb)]((_0x344747, _0xa233a6) => {
            const _0x22feb5 = _0x45225a;
            if (_0xa233a6 !== this['element']['childNodes'][_0x22feb5(0xa3)] - 0x1)
                _0x344747[_0x22feb5(0xa2)]();
        }), setTimeout(() => {
            this['typeNext']();
        }, this[_0x45225a(0xb3)]);
    }
    [_0x44023d(0x75)]() {
        const _0x4911d1 = _0x44023d;
        this[_0x4911d1(0xb2)] = ![], this[_0x4911d1(0x8d)] && (clearTimeout(this['timeout']), this[_0x4911d1(0x8d)] = null);
    }
    ['reset']() {
        const _0x1152f4 = _0x44023d;
        this['stop'](), this[_0x1152f4(0x6a)] = 0x0, this[_0x1152f4(0x94)][_0x1152f4(0xa6)][_0x1152f4(0xbb)]((_0x3be8d7, _0x161992) => {
            const _0x500fab = _0x1152f4;
            if (_0x161992 !== this[_0x500fab(0x94)]['childNodes'][_0x500fab(0xa3)] - 0x1)
                _0x3be8d7[_0x500fab(0xa2)]();
        });
    }
    [_0x44023d(0x74)]() {
        const _0x8b8e74 = _0x44023d;
        if (!this['isRunning'])
            return;
        if (this[_0x8b8e74(0x6a)] >= this[_0x8b8e74(0x81)][_0x8b8e74(0xa3)]) {
            this['loop'] && (this['reset'](), this[_0x8b8e74(0x8d)] = setTimeout(() => this['typeNext'](), 0x3e8));
            return;
        }
        const _0xd1c256 = this['words'][this[_0x8b8e74(0x6a)]];
        this['currentIndex']++;
        if (_0xd1c256[_0x8b8e74(0xb1)] === _0x8b8e74(0x8c)) {
            this['timeout'] = setTimeout(() => this[_0x8b8e74(0x74)](), _0xd1c256[_0x8b8e74(0x98)]);
            return;
        }
        const _0x2ab64a = _0xd1c256[_0x8b8e74(0x99)];
        let _0xded092 = 0x0;
        const _0x56e463 = () => {
            const _0x241e1d = _0x8b8e74;
            if (_0xded092 < _0x2ab64a[_0x241e1d(0xa3)]) {
                const _0x382c1f = document[_0x241e1d(0x76)]('span');
                _0x382c1f[_0x241e1d(0x78)] = _0x2ab64a[_0xded092++], this[_0x241e1d(0x94)][_0x241e1d(0x89)](_0x382c1f, this[_0x241e1d(0x9d)]), this[_0x241e1d(0x8d)] = setTimeout(_0x56e463, this[_0x241e1d(0x86)]);
            } else
                this[_0x241e1d(0x8d)] = setTimeout(() => this[_0x241e1d(0x74)](), this['speed']);
        };
        _0x56e463();
    }
}
const inputText = document[_0x44023d(0x9f)](_0x44023d(0xbe)), animationMode = document[_0x44023d(0x9f)](_0x44023d(0x79)), speedInput = document[_0x44023d(0x9f)]('speed'), startDelayInput = document[_0x44023d(0x9f)](_0x44023d(0xb3)), loopCheckbox = document['getElementById'](_0x44023d(0x8f)), cursorCharInput = document[_0x44023d(0x9f)](_0x44023d(0x87)), blinkCursorCheckbox = document[_0x44023d(0x9f)](_0x44023d(0x88)), backspaceSpeedInput = document[_0x44023d(0x9f)]('backspaceSpeed'), startBtn = document[_0x44023d(0x9f)]('startBtn'), stopBtn = document[_0x44023d(0x9f)](_0x44023d(0xaa)), resetBtn = document['getElementById'](_0x44023d(0x9e)), copyHtmlBtn = document[_0x44023d(0x9f)](_0x44023d(0x7a)), copyCodeBtn = document[_0x44023d(0x9f)](_0x44023d(0xb4)), clearBtn = document['getElementById'](_0x44023d(0x66)), typewriterText = document[_0x44023d(0x9f)](_0x44023d(0x6e));
let typewriter = new Typewriter(typewriterText, {
    'text': inputText[_0x44023d(0x72)],
    'speed': parseInt(speedInput[_0x44023d(0x72)]),
    'backspaceSpeed': parseInt(backspaceSpeedInput[_0x44023d(0x72)]),
    'startDelay': parseInt(startDelayInput[_0x44023d(0x72)]),
    'mode': animationMode[_0x44023d(0x72)],
    'loop': loopCheckbox[_0x44023d(0x80)],
    'cursorChar': cursorCharInput[_0x44023d(0x72)],
    'blinkCursor': blinkCursorCheckbox[_0x44023d(0x80)]
});
function _0x50e4() {
    const _0x48cc03 = [
        ',\x0a\x20\x20cursorChar:\x20\x27',
        'element',
        'input',
        'slice',
        'backspaceSpeed',
        'duration',
        'content',
        'reset',
        '250352RrOCXL',
        'blink',
        'cursorSpan',
        'resetBtn',
        'getElementById',
        'style',
        'hostname',
        'remove',
        'length',
        'monospace',
        'mode',
        'childNodes',
        '80ciddAB',
        'typewriter-cursor',
        'change',
        'stopBtn',
        'add',
        '\x0a\x0a/*\x20JavaScript\x20*/\x0a',
        '\x0a//\x20Typewriter\x20class\x20(paste\x20full\x20class\x20here\x20or\x20import)\x0aconst\x20tw\x20=\x20new\x20Typewriter(document.getElementById(\x27typewriter\x27),\x20{\x0a\x20\x20text:\x20`',
        'className',
        'originalText',
        '2251190hIjcmD',
        'type',
        'isRunning',
        'startDelay',
        'copyCodeBtn',
        '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>',
        'text',
        ',\x0a\x20\x20backspaceSpeed:\x20',
        '288hpiwNE',
        'whiteSpace',
        'innerHTML',
        'forEach',
        '11348izViDh',
        '\x27,\x0a\x20\x20blinkCursor:\x20',
        'inputText',
        '1336446nkkqoM',
        'clearBtn',
        '801yDGsEX',
        'click',
        '6255578FcKYRy',
        'currentIndex',
        'HTML\x20snippet\x20copied\x20to\x20clipboard!',
        'start',
        'onlinegamesb.xyz',
        'typewriterText',
        '22AnYpPR',
        'addEventListener',
        '\x0a});\x0atw.start();\x0a\x20\x20',
        'value',
        'replace',
        'typeNext',
        'stop',
        'createElement',
        '9524952cUQiQS',
        'textContent',
        'animationMode',
        'copyHtmlBtn',
        'clipboard',
        'This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!',
        'fontFamily',
        '120812pwgoYV',
        'includes',
        'checked',
        'words',
        'push',
        '`,\x0a\x20\x20speed:\x20',
        '\x0a.typewriter-cursor\x20{\x0a\x20\x20display:\x20inline-block;\x0a\x20\x20margin-left:\x202px;\x0a}\x0a.blink\x20{\x0a\x20\x20animation:\x20blink\x201s\x20step-end\x20infinite;\x0a}\x0a@keyframes\x20blink\x20{\x0a\x20\x200%,\x20100%\x20{\x20opacity:\x201;\x20}\x0a\x20\x2050%\x20{\x20opacity:\x200;\x20}\x0a}\x0a\x20\x20',
        'body',
        'speed',
        'cursorChar',
        'blinkCursor',
        'insertBefore',
        'writeText',
        'then',
        'pause',
        'timeout',
        'classList',
        'loop',
        '\x27,\x0a\x20\x20loop:\x20',
        'www.onlinegamesb.xyz',
        'localhost'
    ];
    _0x50e4 = function () {
        return _0x48cc03;
    };
    return _0x50e4();
}
function updateTypewriter() {
    const _0x329d4e = _0x44023d;
    typewriter[_0x329d4e(0x75)](), typewriter = new Typewriter(typewriterText, {
        'text': inputText[_0x329d4e(0x72)],
        'speed': parseInt(speedInput['value']),
        'backspaceSpeed': parseInt(backspaceSpeedInput['value']),
        'startDelay': parseInt(startDelayInput[_0x329d4e(0x72)]),
        'mode': animationMode['value'],
        'loop': loopCheckbox['checked'],
        'cursorChar': cursorCharInput[_0x329d4e(0x72)],
        'blinkCursor': blinkCursorCheckbox[_0x329d4e(0x80)]
    });
}
inputText[_0x44023d(0x70)](_0x44023d(0x95), updateTypewriter), animationMode[_0x44023d(0x70)](_0x44023d(0xa9), updateTypewriter), speedInput[_0x44023d(0x70)](_0x44023d(0xa9), updateTypewriter), startDelayInput['addEventListener'](_0x44023d(0xa9), updateTypewriter), loopCheckbox[_0x44023d(0x70)]('change', updateTypewriter), cursorCharInput[_0x44023d(0x70)]('input', updateTypewriter), blinkCursorCheckbox[_0x44023d(0x70)]('change', updateTypewriter), backspaceSpeedInput[_0x44023d(0x70)](_0x44023d(0xa9), updateTypewriter), startBtn['addEventListener']('click', () => typewriter[_0x44023d(0x6c)]()), stopBtn[_0x44023d(0x70)](_0x44023d(0x68), () => typewriter[_0x44023d(0x75)]()), resetBtn['addEventListener']('click', () => typewriter[_0x44023d(0x9a)]()), clearBtn[_0x44023d(0x70)](_0x44023d(0x68), () => {
    const _0x68f080 = _0x44023d;
    inputText[_0x68f080(0x72)] = '', updateTypewriter();
}), copyHtmlBtn[_0x44023d(0x70)](_0x44023d(0x68), () => {
    const _0x54a27a = _0x44023d, _0x1d6312 = '<div\x20id=\x22typewriter\x22\x20class=\x22text-lg\x22></div>';
    navigator[_0x54a27a(0x7b)][_0x54a27a(0x8a)](_0x1d6312)[_0x54a27a(0x8b)](() => {
        const _0x5ba9f7 = _0x54a27a;
        alert(_0x5ba9f7(0x6b));
    });
}), copyCodeBtn[_0x44023d(0x70)](_0x44023d(0x68), () => {
    const _0x590dfe = _0x44023d, _0x5e4e9d = _0x590dfe(0x84), _0x2b2fd3 = _0x590dfe(0xad) + inputText[_0x590dfe(0x72)][_0x590dfe(0x73)](/`/g, '\x5c`') + _0x590dfe(0x83) + speedInput[_0x590dfe(0x72)] + _0x590dfe(0xb7) + backspaceSpeedInput[_0x590dfe(0x72)] + ',\x0a\x20\x20startDelay:\x20' + startDelayInput[_0x590dfe(0x72)] + ',\x0a\x20\x20mode:\x20\x27' + animationMode[_0x590dfe(0x72)] + _0x590dfe(0x90) + loopCheckbox['checked'] + _0x590dfe(0x93) + cursorCharInput['value'][_0x590dfe(0x73)](/'/g, '\x5c\x27') + _0x590dfe(0xbd) + blinkCursorCheckbox[_0x590dfe(0x80)] + _0x590dfe(0x71), _0x2fed6d = '/*\x20CSS\x20*/\x0a' + _0x5e4e9d + _0x590dfe(0xac) + _0x2b2fd3;
    navigator[_0x590dfe(0x7b)][_0x590dfe(0x8a)](_0x2fed6d)['then'](() => {
        alert('CSS\x20&\x20JS\x20code\x20snippet\x20copied!');
    });
});
const allowedDomains = [
        _0x44023d(0x91),
        _0x44023d(0x92),
        _0x44023d(0x6d)
    ], currentHost = window['location'][_0x44023d(0xa1)];
if (!allowedDomains[_0x44023d(0x7f)](currentHost)) {
    document[_0x44023d(0x85)]['innerHTML'] = _0x44023d(0xb5);
    throw new Error(_0x44023d(0x7c));
}