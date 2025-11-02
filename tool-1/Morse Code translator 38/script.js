const _0x2bcec7 = _0x1161;
function _0x1161(_0x48dcc0, _0x2cc173) {
    const _0x2c48b1 = _0x2c48();
    return _0x1161 = function (_0x116140, _0x2c2b49) {
        _0x116140 = _0x116140 - 0x1ad;
        let _0x190972 = _0x2c48b1[_0x116140];
        return _0x190972;
    }, _0x1161(_0x48dcc0, _0x2cc173);
}
(function (_0x2f97ab, _0x2dfa1e) {
    const _0xdb7641 = _0x1161, _0x37ef76 = _0x2f97ab();
    while (!![]) {
        try {
            const _0x51ab47 = parseInt(_0xdb7641(0x1c1)) / 0x1 * (parseInt(_0xdb7641(0x227)) / 0x2) + -parseInt(_0xdb7641(0x1bb)) / 0x3 + parseInt(_0xdb7641(0x1cb)) / 0x4 + parseInt(_0xdb7641(0x203)) / 0x5 * (-parseInt(_0xdb7641(0x22e)) / 0x6) + parseInt(_0xdb7641(0x1b8)) / 0x7 + -parseInt(_0xdb7641(0x1fb)) / 0x8 + parseInt(_0xdb7641(0x1e8)) / 0x9;
            if (_0x51ab47 === _0x2dfa1e)
                break;
            else
                _0x37ef76['push'](_0x37ef76['shift']());
        } catch (_0x473dfe) {
            _0x37ef76['push'](_0x37ef76['shift']());
        }
    }
}(_0x2c48, 0x752a4));
const MORSE_CODE_MAP = {
        'A': '.-',
        'B': _0x2bcec7(0x204),
        'C': '-.-.',
        'D': '-..',
        'E': '.',
        'F': '..-.',
        'G': _0x2bcec7(0x1fc),
        'H': '....',
        'I': '..',
        'J': '.---',
        'K': _0x2bcec7(0x1e3),
        'L': _0x2bcec7(0x1bf),
        'M': '--',
        'N': '-.',
        'O': '---',
        'P': _0x2bcec7(0x1e9),
        'Q': _0x2bcec7(0x207),
        'R': _0x2bcec7(0x1d5),
        'S': _0x2bcec7(0x1e0),
        'T': '-',
        'U': _0x2bcec7(0x1ee),
        'V': _0x2bcec7(0x1e0),
        'W': _0x2bcec7(0x1af),
        'X': _0x2bcec7(0x216),
        'Y': '-.--',
        'Z': _0x2bcec7(0x21b),
        '0': _0x2bcec7(0x1e7),
        '1': _0x2bcec7(0x1e6),
        '2': _0x2bcec7(0x1c8),
        '3': _0x2bcec7(0x22d),
        '4': _0x2bcec7(0x1ea),
        '5': '.....',
        '6': '-....',
        '7': _0x2bcec7(0x1fe),
        '8': _0x2bcec7(0x1d6),
        '9': _0x2bcec7(0x1db),
        '.': _0x2bcec7(0x235),
        ',': _0x2bcec7(0x212),
        '?': _0x2bcec7(0x1d9),
        '/': _0x2bcec7(0x200),
        '-': _0x2bcec7(0x1d0),
        '(': _0x2bcec7(0x1b4),
        ')': '-.--.-',
        '@': '.--.-.',
        '\x22': _0x2bcec7(0x22c),
        'SOS': '...---...',
        'AR': _0x2bcec7(0x1b7),
        'SK': _0x2bcec7(0x236),
        'BT': _0x2bcec7(0x1ce),
        'CT': _0x2bcec7(0x210),
        'KN': _0x2bcec7(0x1ba),
        'VE': _0x2bcec7(0x229)
    }, MORSE_CODE_REVERSE_MAP = {};
for (const char in MORSE_CODE_MAP) {
    MORSE_CODE_REVERSE_MAP[MORSE_CODE_MAP[char]] = char;
}
const inputTextarea = document[_0x2bcec7(0x218)](_0x2bcec7(0x1c2)), outputTextarea = document[_0x2bcec7(0x218)]('outputText'), copyBtn = document['getElementById'](_0x2bcec7(0x224)), clearBtn = document[_0x2bcec7(0x218)](_0x2bcec7(0x1b1)), fileUploadInput = document['getElementById'](_0x2bcec7(0x1cf)), downloadResultBtn = document[_0x2bcec7(0x218)](_0x2bcec7(0x217)), wpmSlider = document['getElementById'](_0x2bcec7(0x1f5)), wpmValueSpan = document[_0x2bcec7(0x218)](_0x2bcec7(0x1eb)), farnsworthSlider = document[_0x2bcec7(0x218)]('farnsworthSlider'), farnsworthValueSpan = document['getElementById'](_0x2bcec7(0x1c6)), frequencySlider = document['getElementById'](_0x2bcec7(0x228)), frequencyValueSpan = document[_0x2bcec7(0x218)]('frequencyValue'), volumeSlider = document[_0x2bcec7(0x218)]('volumeSlider'), volumeValueSpan = document[_0x2bcec7(0x218)](_0x2bcec7(0x1bc)), playAudioBtn = document[_0x2bcec7(0x218)]('playAudioBtn'), pauseAudioBtn = document[_0x2bcec7(0x218)](_0x2bcec7(0x1f4)), stopAudioBtn = document[_0x2bcec7(0x218)]('stopAudioBtn'), downloadWavBtn = document[_0x2bcec7(0x218)](_0x2bcec7(0x209));
let audioContext = null, oscillator = null, gainNode = null, audioBufferSource = null, audioRecording = [], audioIsPlaying = ![], audioIsPaused = ![], currentMorseIndex = 0x0, currentMorseSequence = [];
function initAudio() {
    const _0x97c13c = _0x2bcec7;
    !audioContext && (audioContext = new (window[(_0x97c13c(0x1de))] || window[(_0x97c13c(0x222))])(), gainNode = audioContext[_0x97c13c(0x1dd)](), gainNode['connect'](audioContext[_0x97c13c(0x1c7)]), gainNode['gain'][_0x97c13c(0x1f9)] = parseFloat(volumeSlider[_0x97c13c(0x1f9)]));
}
function autoDetectInput(_0x24e573) {
    const _0x561671 = _0x2bcec7, _0x3bd3bb = _0x24e573[_0x561671(0x1ad)]();
    if (_0x3bd3bb === '')
        return ![];
    const _0x473523 = (_0x3bd3bb['match'](/[\.\-\s]/g) || [])[_0x561671(0x1d7)], _0x546c73 = (_0x3bd3bb[_0x561671(0x1bd)](/[a-zA-Z0-9]/g) || [])[_0x561671(0x1d7)], _0x218a2b = _0x473523 / _0x3bd3bb[_0x561671(0x1d7)] > 0.8 && _0x546c73 === 0x0;
    return _0x218a2b;
}
function updateTranslation() {
    const _0x25c227 = _0x2bcec7, _0x248837 = inputTextarea[_0x25c227(0x1f9)]['trim'](), _0x117476 = autoDetectInput(_0x248837);
    let _0x20a766 = '', _0x3e4fe9 = [];
    if (_0x117476) {
        const {
            translated: _0x5c4918,
            invalid: _0x44b23c
        } = morseToText(_0x248837);
        _0x20a766 = _0x5c4918, _0x3e4fe9 = _0x44b23c;
    } else {
        const {
            translated: _0x366a05,
            invalid: _0x1357ef
        } = textToMorse(_0x248837);
        _0x20a766 = _0x366a05, _0x3e4fe9 = _0x1357ef;
    }
    outputTextarea[_0x25c227(0x1f9)] = _0x20a766, _0x3e4fe9[_0x25c227(0x1d7)] > 0x0 ? inputTextarea[_0x25c227(0x1b5)][_0x25c227(0x1b6)](_0x25c227(0x1f0)) : inputTextarea['classList'][_0x25c227(0x214)](_0x25c227(0x1f0));
}
function textToMorse(_0x18cb47) {
    const _0x412b5a = _0x2bcec7;
    let _0x5aef7c = [], _0x1cc792 = new Set();
    const _0xca0338 = _0x18cb47['toUpperCase']()[_0x412b5a(0x1e4)]('\x20');
    return _0xca0338[_0x412b5a(0x1f2)]((_0xa4cc4c, _0x116ee2) => {
        const _0x335a98 = _0x412b5a, _0xa5be68 = _0xa4cc4c[_0x335a98(0x1e4)]('');
        _0xa5be68['forEach']((_0x447e64, _0xddbcdf) => {
            const _0x16d52b = _0x335a98;
            let _0x44395e = ![];
            for (const _0x431d47 in MORSE_CODE_MAP) {
                if (_0xa4cc4c['startsWith'](_0x431d47) && _0x431d47[_0x16d52b(0x1d7)] > 0x1) {
                    _0x5aef7c[_0x16d52b(0x223)](MORSE_CODE_MAP[_0x431d47]), _0x44395e = !![];
                    break;
                }
            }
            if (_0x44395e && _0xddbcdf === 0x0) {
                if (MORSE_CODE_MAP[_0xa4cc4c]) {
                    _0x5aef7c[_0x16d52b(0x223)](MORSE_CODE_MAP[_0xa4cc4c]);
                    return;
                }
            }
            if (MORSE_CODE_MAP[_0x447e64])
                _0x5aef7c[_0x16d52b(0x223)](MORSE_CODE_MAP[_0x447e64]);
            else {
                if (_0x447e64[_0x16d52b(0x1bd)](/\s/)) {
                } else
                    _0x1cc792[_0x16d52b(0x1b6)](_0x447e64);
            }
            _0xddbcdf < _0xa5be68[_0x16d52b(0x1d7)] - 0x1 && _0x5aef7c[_0x16d52b(0x223)]('\x20');
        }), _0x116ee2 < _0xca0338[_0x335a98(0x1d7)] - 0x1 && _0x5aef7c[_0x335a98(0x223)](_0x335a98(0x1be));
    }), {
        'translated': _0x5aef7c[_0x412b5a(0x21e)]('\x20')[_0x412b5a(0x1f1)](/\s+/g, '\x20')[_0x412b5a(0x1ad)](),
        'invalid': Array[_0x412b5a(0x1b2)](_0x1cc792)
    };
}
function _0x2c48() {
    const _0x319c01 = [
        '-.--.',
        'classList',
        'add',
        '.-.-.',
        '217532afkfyR',
        'result',
        '-.-.-.',
        '1106037bEdcOi',
        'volumeValue',
        'match',
        '\x20\x20\x20',
        '.-..',
        'href',
        '1pwNBVb',
        'inputText',
        'data',
        'onended',
        'createOscillator',
        'farnsworthValue',
        'destination',
        '..---',
        'createElement',
        'setUint32',
        '351772jtAJZA',
        'www.onlinegamesb.xyz',
        'ceil',
        '-...-',
        'fileUpload',
        '-....-',
        'type',
        'setUint16',
        'morse_translation.txt',
        'WAVE',
        '.-.',
        '---..',
        'length',
        'removeChild',
        '..--..',
        'RIFF',
        '----.',
        'textContent',
        'createGain',
        'AudioContext',
        'min',
        '...',
        'disconnect',
        'No\x20content\x20to\x20download.\x20Translate\x20something\x20first!',
        '-.-',
        'split',
        'max',
        '.----',
        '-----',
        '15504156OdoYAQ',
        '.--.',
        '....-',
        'wpmValue',
        'onerror',
        'stop',
        '..-',
        'onload',
        'invalid-input',
        'replace',
        'forEach',
        'body',
        'pauseAudioBtn',
        'wpmSlider',
        'sampleRate',
        'resume',
        'then',
        'value',
        'localhost',
        '1869888AUOmhg',
        '--.',
        'hostname',
        '--...',
        'target',
        '-..-.',
        'audio/wav',
        'frequency',
        '5Tgkiun',
        '-...',
        'text/plain;charset=utf-8',
        'state',
        '--.-',
        'currentTime',
        'downloadWavBtn',
        'sin',
        'revokeObjectURL',
        'DOMContentLoaded',
        'gain',
        'addEventListener',
        'createObjectURL',
        '-.-.-',
        'error',
        '--..--',
        'location',
        'remove',
        '\x20|\x20',
        '-..-',
        'downloadResultBtn',
        'getElementById',
        'duration',
        'copy',
        '--..',
        'byteLength',
        'Error\x20reading\x20file:',
        'join',
        'suspended',
        'silence',
        'Failed\x20to\x20read\x20file.',
        'webkitAudioContext',
        'push',
        'copyBtn',
        'tone',
        'charCodeAt',
        '32362uOLJRW',
        'frequencySlider',
        '...-.',
        'innerHTML',
        'readAsText',
        '.-..-.',
        '...--',
        '4653366vKcTYY',
        'disabled',
        'input',
        'click',
        '[?]',
        'connect',
        'onlinegamesb.xyz',
        '.-.-.-',
        '...-.-',
        'trim',
        'No\x20audio\x20recorded\x20yet.\x20Play\x20some\x20Morse\x20code\x20first!',
        '.--',
        'start',
        'clearBtn',
        'from',
        'appendChild'
    ];
    _0x2c48 = function () {
        return _0x319c01;
    };
    return _0x2c48();
}
function morseToText(_0x43a0db) {
    const _0x5d8bb7 = _0x2bcec7;
    let _0x574dea = [], _0x82ece3 = new Set();
    const _0x44be42 = _0x43a0db['trim']()['split'](/\s{3,}/);
    return _0x44be42[_0x5d8bb7(0x1f2)]((_0x33757a, _0x2a24bd) => {
        const _0x40411d = _0x5d8bb7, _0x3a15f5 = _0x33757a[_0x40411d(0x1e4)](/\s+/);
        _0x3a15f5[_0x40411d(0x1f2)](_0x434872 => {
            const _0x19d819 = _0x40411d;
            if (_0x434872 === '')
                return;
            MORSE_CODE_REVERSE_MAP[_0x434872] ? _0x574dea[_0x19d819(0x223)](MORSE_CODE_REVERSE_MAP[_0x434872]) : (_0x82ece3[_0x19d819(0x1b6)](_0x434872), _0x574dea['push'](_0x19d819(0x232)));
        }), _0x2a24bd < _0x44be42[_0x40411d(0x1d7)] - 0x1 && _0x574dea[_0x40411d(0x223)]('\x20');
    }), {
        'translated': _0x574dea[_0x5d8bb7(0x21e)]('')[_0x5d8bb7(0x1ad)](),
        'invalid': Array[_0x5d8bb7(0x1b2)](_0x82ece3)
    };
}
function getMorseTiming(_0x5c00ce, _0x14ee9f) {
    const _0x43fd0c = _0x2bcec7, _0x15c651 = Math[_0x43fd0c(0x1e5)](_0x5c00ce, _0x14ee9f), _0x555594 = 0x4b0 / _0x15c651, _0x55cb64 = _0x555594 * 0x3, _0x3a3d22 = _0x555594, _0x573767 = _0x5c00ce, _0x21b604 = _0x555594 * 0x3, _0x1b658d = _0x555594 * 0x7, _0x61e644 = 0x3c / _0x573767 * 0x3e8, _0x5fdb82 = 0x3c / _0x15c651 * 0x3e8;
    let _0x25c294 = (_0x61e644 - _0x5fdb82) / (0x32 / 0x5);
    const _0x108e3b = 0x4b0 / _0x14ee9f, _0x2989a1 = 0x4b0 / _0x5c00ce * 0x3, _0x51b5db = 0x4b0 / _0x5c00ce * 0x7;
    return {
        'dotDuration': _0x108e3b,
        'dashDuration': _0x108e3b * 0x3,
        'elementSpace': _0x108e3b,
        'charSpace': _0x2989a1,
        'wordSpace': _0x51b5db
    };
}
function createAudioSequence(_0x1d318b, _0x113ecd, _0x165154) {
    const _0x5d38ed = _0x2bcec7, {
            dotDuration: _0x116bb6,
            dashDuration: _0x305a63,
            elementSpace: _0x295cfd,
            charSpace: _0x4d4238,
            wordSpace: _0x301cbb
        } = getMorseTiming(_0x113ecd, _0x165154), _0x2ae6b = [], _0x545f91 = _0x1d318b[_0x5d38ed(0x1ad)]()[_0x5d38ed(0x1f1)](/\s{3,}/g, _0x5d38ed(0x215))[_0x5d38ed(0x1e4)]('\x20');
    return _0x545f91['forEach']((_0x2a45cc, _0x4ab953) => {
        const _0x1ccfd6 = _0x5d38ed;
        if (_0x2a45cc === '|')
            _0x2ae6b[_0x1ccfd6(0x223)]({
                'type': 'silence',
                'duration': _0x301cbb
            });
        else {
            const _0x394fe0 = _0x2a45cc[_0x1ccfd6(0x1e4)]('');
            _0x394fe0[_0x1ccfd6(0x1f2)]((_0x49cdd8, _0x39cfd3) => {
                const _0x246614 = _0x1ccfd6;
                if (_0x49cdd8 === '.')
                    _0x2ae6b['push']({
                        'type': _0x246614(0x225),
                        'duration': _0x116bb6
                    });
                else
                    _0x49cdd8 === '-' && _0x2ae6b['push']({
                        'type': _0x246614(0x225),
                        'duration': _0x305a63
                    });
                _0x39cfd3 < _0x394fe0[_0x246614(0x1d7)] - 0x1 && _0x2ae6b['push']({
                    'type': _0x246614(0x220),
                    'duration': _0x295cfd
                });
            }), _0x4ab953 < _0x545f91[_0x1ccfd6(0x1d7)] - 0x1 && _0x545f91[_0x4ab953 + 0x1] !== '|' && _0x2ae6b[_0x1ccfd6(0x223)]({
                'type': _0x1ccfd6(0x220),
                'duration': _0x4d4238
            });
        }
    }), _0x2ae6b;
}
function playTone(_0x1fc943, _0x5796a5) {
    return new Promise(_0x2db583 => {
        const _0x3682ae = _0x1161;
        (!audioContext || audioContext[_0x3682ae(0x206)] === _0x3682ae(0x21f)) && initAudio();
        audioContext[_0x3682ae(0x206)] === _0x3682ae(0x21f) ? audioContext[_0x3682ae(0x1f7)]()[_0x3682ae(0x1f8)](() => {
            _0x39c2cf();
        }) : _0x39c2cf();
        function _0x39c2cf() {
            const _0x1bf08e = _0x3682ae;
            oscillator && (oscillator[_0x1bf08e(0x1ed)](), oscillator[_0x1bf08e(0x1e1)]()), oscillator = audioContext[_0x1bf08e(0x1c5)](), oscillator[_0x1bf08e(0x1d1)] = 'sine', oscillator[_0x1bf08e(0x202)]['setValueAtTime'](_0x5796a5, audioContext[_0x1bf08e(0x208)]), oscillator[_0x1bf08e(0x233)](gainNode), oscillator[_0x1bf08e(0x1b0)](), oscillator[_0x1bf08e(0x1ed)](audioContext[_0x1bf08e(0x208)] + _0x1fc943 / 0x3e8), oscillator[_0x1bf08e(0x1c4)] = () => {
                const _0xe07451 = _0x1bf08e;
                oscillator[_0xe07451(0x1e1)](), oscillator = null, _0x2db583();
            };
        }
    });
}
function stopTone() {
    const _0x41a5f1 = _0x2bcec7;
    oscillator && (oscillator[_0x41a5f1(0x1ed)](), oscillator[_0x41a5f1(0x1e1)](), oscillator = null);
}
async function playMorseAudioSequence() {
    const _0x4fa4c6 = _0x2bcec7;
    if (audioIsPlaying && !audioIsPaused)
        return;
    initAudio(), audioIsPlaying = !![], audioIsPaused = ![], playAudioBtn[_0x4fa4c6(0x22f)] = !![], pauseAudioBtn[_0x4fa4c6(0x22f)] = ![], stopAudioBtn[_0x4fa4c6(0x22f)] = ![], downloadWavBtn[_0x4fa4c6(0x22f)] = !![];
    const _0x37d4e4 = outputTextarea[_0x4fa4c6(0x1f9)];
    if (!_0x37d4e4) {
        stopAudio();
        return;
    }
    if (currentMorseIndex === 0x0 && !audioIsPaused) {
        const _0x2e9b16 = parseInt(wpmSlider['value']), _0x47c7b2 = parseInt(farnsworthSlider[_0x4fa4c6(0x1f9)]);
        currentMorseSequence = createAudioSequence(_0x37d4e4, _0x2e9b16, _0x47c7b2), audioRecording = [];
    }
    const _0x3e5961 = parseFloat(frequencySlider[_0x4fa4c6(0x1f9)]), _0x40499b = parseFloat(volumeSlider[_0x4fa4c6(0x1f9)]);
    gainNode['gain'][_0x4fa4c6(0x1f9)] = _0x40499b;
    for (let _0x2b8544 = currentMorseIndex; _0x2b8544 < currentMorseSequence['length']; _0x2b8544++) {
        if (!audioIsPlaying || audioIsPaused) {
            currentMorseIndex = _0x2b8544;
            return;
        }
        const _0x471886 = currentMorseSequence[_0x2b8544];
        if (_0x471886[_0x4fa4c6(0x1d1)] === _0x4fa4c6(0x225))
            await playTone(_0x471886[_0x4fa4c6(0x219)], _0x3e5961), recordAudio(_0x3e5961, _0x471886[_0x4fa4c6(0x219)], audioContext[_0x4fa4c6(0x1f6)]);
        else
            _0x471886[_0x4fa4c6(0x1d1)] === 'silence' && (await new Promise(_0x4815c9 => setTimeout(_0x4815c9, _0x471886[_0x4fa4c6(0x219)])), recordAudio(0x0, _0x471886[_0x4fa4c6(0x219)], audioContext[_0x4fa4c6(0x1f6)]));
        currentMorseIndex = _0x2b8544 + 0x1;
    }
    stopAudio();
}
function recordAudio(_0x3dcdcc, _0x59183d, _0x4ec6ec) {
    const _0x57baf4 = _0x2bcec7, _0x2eb774 = Math[_0x57baf4(0x1cd)](_0x59183d / 0x3e8 * _0x4ec6ec);
    for (let _0x288407 = 0x0; _0x288407 < _0x2eb774; _0x288407++) {
        let _0x12cae1 = 0x0;
        _0x3dcdcc > 0x0 && (_0x12cae1 = Math[_0x57baf4(0x20a)](0x2 * Math['PI'] * _0x3dcdcc * (audioRecording[_0x57baf4(0x1d7)] + _0x288407) / _0x4ec6ec)), audioRecording[_0x57baf4(0x223)](_0x12cae1 * 0x7fff);
    }
}
function stopAudio() {
    const _0x12b8be = _0x2bcec7;
    stopTone(), audioIsPlaying = ![], audioIsPaused = ![], currentMorseIndex = 0x0, currentMorseSequence = [], playAudioBtn[_0x12b8be(0x22f)] = ![], pauseAudioBtn['disabled'] = !![], stopAudioBtn[_0x12b8be(0x22f)] = !![], downloadWavBtn[_0x12b8be(0x22f)] = ![];
}
function pauseAudio() {
    const _0x5e1318 = _0x2bcec7;
    audioIsPlaying && (stopTone(), audioIsPaused = !![], audioIsPlaying = ![], playAudioBtn[_0x5e1318(0x22f)] = ![], pauseAudioBtn[_0x5e1318(0x22f)] = !![], stopAudioBtn[_0x5e1318(0x22f)] = ![]);
}
function downloadWAV() {
    const _0x474ddc = _0x2bcec7;
    if (audioRecording[_0x474ddc(0x1d7)] === 0x0) {
        alert(_0x474ddc(0x1ae));
        return;
    }
    initAudio();
    const _0x3f2c5b = audioContext[_0x474ddc(0x1f6)], _0x3e44a1 = new Int16Array(audioRecording), _0x5ca98f = new ArrayBuffer(0x2c + _0x3e44a1[_0x474ddc(0x21c)]), _0x10b985 = new DataView(_0x5ca98f);
    writeString(_0x10b985, 0x0, _0x474ddc(0x1da)), _0x10b985[_0x474ddc(0x1ca)](0x4, 0x24 + _0x3e44a1[_0x474ddc(0x21c)], !![]), writeString(_0x10b985, 0x8, _0x474ddc(0x1d4)), writeString(_0x10b985, 0xc, 'fmt\x20'), _0x10b985['setUint32'](0x10, 0x10, !![]), _0x10b985['setUint16'](0x14, 0x1, !![]), _0x10b985[_0x474ddc(0x1d2)](0x16, 0x1, !![]), _0x10b985[_0x474ddc(0x1ca)](0x18, _0x3f2c5b, !![]), _0x10b985[_0x474ddc(0x1ca)](0x1c, _0x3f2c5b * 0x2, !![]), _0x10b985['setUint16'](0x20, 0x2, !![]), _0x10b985[_0x474ddc(0x1d2)](0x22, 0x10, !![]), writeString(_0x10b985, 0x24, _0x474ddc(0x1c3)), _0x10b985[_0x474ddc(0x1ca)](0x28, _0x3e44a1[_0x474ddc(0x21c)], !![]), floatTo16BitPCM(_0x10b985, 0x2c, _0x3e44a1);
    const _0x367848 = new Blob([_0x5ca98f], { 'type': _0x474ddc(0x201) }), _0x3e5f50 = URL[_0x474ddc(0x20f)](_0x367848), _0x5c471f = document[_0x474ddc(0x1c9)]('a');
    _0x5c471f[_0x474ddc(0x1c0)] = _0x3e5f50, _0x5c471f['download'] = 'morse_audio.wav', document['body'][_0x474ddc(0x1b3)](_0x5c471f), _0x5c471f[_0x474ddc(0x231)](), document['body'][_0x474ddc(0x1d8)](_0x5c471f), URL[_0x474ddc(0x20b)](_0x3e5f50), audioRecording = [];
}
function writeString(_0x2b7892, _0x38c317, _0xfdc267) {
    const _0x46b0f5 = _0x2bcec7;
    for (let _0x323d68 = 0x0; _0x323d68 < _0xfdc267[_0x46b0f5(0x1d7)]; _0x323d68++) {
        _0x2b7892['setUint8'](_0x38c317 + _0x323d68, _0xfdc267[_0x46b0f5(0x226)](_0x323d68));
    }
}
function floatTo16BitPCM(_0x4f904f, _0x470ef5, _0x2c58b2) {
    const _0x425d1c = _0x2bcec7;
    for (let _0x326f16 = 0x0; _0x326f16 < _0x2c58b2['length']; _0x326f16++, _0x470ef5 += 0x2) {
        const _0xe4f72c = Math[_0x425d1c(0x1e5)](-0x1, Math[_0x425d1c(0x1df)](0x1, _0x2c58b2[_0x326f16] / 0x7fff));
        _0x4f904f['setInt16'](_0x470ef5, _0xe4f72c < 0x0 ? _0xe4f72c * 0x8000 : _0xe4f72c * 0x7fff, !![]);
    }
}
function uploadFile(_0x345fd3) {
    const _0x246543 = _0x2bcec7, _0x30d81a = _0x345fd3[_0x246543(0x1ff)]['files'][0x0];
    if (!_0x30d81a)
        return;
    const _0x1da403 = new FileReader();
    _0x1da403[_0x246543(0x1ef)] = _0x6b55b8 => {
        const _0x54bf6e = _0x246543;
        inputTextarea[_0x54bf6e(0x1f9)] = _0x6b55b8[_0x54bf6e(0x1ff)][_0x54bf6e(0x1b9)], updateTranslation();
    }, _0x1da403[_0x246543(0x1ec)] = _0x3d0328 => {
        const _0x372774 = _0x246543;
        console['error'](_0x372774(0x21d), _0x3d0328), alert(_0x372774(0x221));
    }, _0x1da403[_0x246543(0x22b)](_0x30d81a);
}
function downloadFile(_0x53d4b0, _0xfbe851) {
    const _0x328c00 = _0x2bcec7, _0x5ebfe2 = new Blob([_0xfbe851], { 'type': _0x328c00(0x205) }), _0x2ae425 = URL[_0x328c00(0x20f)](_0x5ebfe2), _0x1ef531 = document['createElement']('a');
    _0x1ef531['href'] = _0x2ae425, _0x1ef531['download'] = _0x53d4b0, document['body'][_0x328c00(0x1b3)](_0x1ef531), _0x1ef531[_0x328c00(0x231)](), document[_0x328c00(0x1f3)][_0x328c00(0x1d8)](_0x1ef531), URL['revokeObjectURL'](_0x2ae425);
}
inputTextarea[_0x2bcec7(0x20e)](_0x2bcec7(0x230), updateTranslation), copyBtn[_0x2bcec7(0x20e)]('click', () => {
    const _0x20b21b = _0x2bcec7;
    outputTextarea['select']();
    try {
        document['execCommand'](_0x20b21b(0x21a));
    } catch (_0x4c74c4) {
        console[_0x20b21b(0x211)]('Failed\x20to\x20copy\x20text:', _0x4c74c4);
    }
}), clearBtn[_0x2bcec7(0x20e)]('click', () => {
    const _0x5acb54 = _0x2bcec7;
    inputTextarea[_0x5acb54(0x1f9)] = '', outputTextarea[_0x5acb54(0x1f9)] = '', inputTextarea[_0x5acb54(0x1b5)][_0x5acb54(0x214)]('invalid-input'), stopAudio();
}), fileUploadInput['addEventListener']('change', uploadFile), downloadResultBtn[_0x2bcec7(0x20e)]('click', () => {
    const _0x44f77d = _0x2bcec7;
    if (outputTextarea[_0x44f77d(0x1f9)][_0x44f77d(0x1ad)]() === '') {
        alert(_0x44f77d(0x1e2));
        return;
    }
    downloadFile(_0x44f77d(0x1d3), outputTextarea[_0x44f77d(0x1f9)]);
}), playAudioBtn[_0x2bcec7(0x20e)](_0x2bcec7(0x231), playMorseAudioSequence), pauseAudioBtn[_0x2bcec7(0x20e)](_0x2bcec7(0x231), pauseAudio), stopAudioBtn[_0x2bcec7(0x20e)](_0x2bcec7(0x231), stopAudio), downloadWavBtn[_0x2bcec7(0x20e)](_0x2bcec7(0x231), downloadWAV), wpmSlider[_0x2bcec7(0x20e)](_0x2bcec7(0x230), () => {
    const _0x6c7b3c = _0x2bcec7;
    wpmValueSpan[_0x6c7b3c(0x1dc)] = wpmSlider[_0x6c7b3c(0x1f9)];
}), farnsworthSlider[_0x2bcec7(0x20e)](_0x2bcec7(0x230), () => {
    const _0x3af4dd = _0x2bcec7;
    farnsworthValueSpan[_0x3af4dd(0x1dc)] = farnsworthSlider[_0x3af4dd(0x1f9)];
}), frequencySlider['addEventListener'](_0x2bcec7(0x230), () => {
    const _0x4df252 = _0x2bcec7;
    frequencyValueSpan[_0x4df252(0x1dc)] = frequencySlider[_0x4df252(0x1f9)];
}), volumeSlider[_0x2bcec7(0x20e)](_0x2bcec7(0x230), () => {
    const _0xfe6fba = _0x2bcec7;
    volumeValueSpan[_0xfe6fba(0x1dc)] = volumeSlider[_0xfe6fba(0x1f9)], gainNode && (gainNode[_0xfe6fba(0x20d)][_0xfe6fba(0x1f9)] = parseFloat(volumeSlider[_0xfe6fba(0x1f9)]));
}), document[_0x2bcec7(0x20e)](_0x2bcec7(0x20c), () => {
    updateTranslation(), stopAudio();
});
const allowedDomains = [
        _0x2bcec7(0x1cc),
        _0x2bcec7(0x1fa),
        _0x2bcec7(0x234)
    ], currentHost = window[_0x2bcec7(0x213)][_0x2bcec7(0x1fd)];
if (!allowedDomains['includes'](currentHost)) {
    document['body'][_0x2bcec7(0x22a)] = '<h2\x20style=\x27color:red;\x20text-align:center;\x20margin-top:50px;\x27>To\x20launch\x20your\x20website,\x20contact\x20this\x20email\x20sabbirkhanmd245@gmail.com</h2>';
    throw new Error('This\x20game\x20is\x20not\x20allowed\x20to\x20run\x20on\x20this\x20domain!');
}