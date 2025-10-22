const _0x51d821 = _0x10fb;
(function (_0x569a7e, _0xf01a9a) {
    const _0x1c3387 = _0x10fb, _0x4fa78e = _0x569a7e();
    while (!![]) {
        try {
            const _0x419e15 = -parseInt(_0x1c3387(0xc1)) / 0x1 + -parseInt(_0x1c3387(0xdc)) / 0x2 + parseInt(_0x1c3387(0x1a5)) / 0x3 * (-parseInt(_0x1c3387(0x111)) / 0x4) + parseInt(_0x1c3387(0xa9)) / 0x5 + parseInt(_0x1c3387(0x15d)) / 0x6 + parseInt(_0x1c3387(0x178)) / 0x7 * (-parseInt(_0x1c3387(0xa2)) / 0x8) + parseInt(_0x1c3387(0x13c)) / 0x9;
            if (_0x419e15 === _0xf01a9a)
                break;
            else
                _0x4fa78e['push'](_0x4fa78e['shift']());
        } catch (_0x51f537) {
            _0x4fa78e['push'](_0x4fa78e['shift']());
        }
    }
}(_0x32fc, 0xda4a6));
const startScreen = document[_0x51d821(0x9d)](_0x51d821(0x81)), startText = document[_0x51d821(0x9d)](_0x51d821(0xeb)), quizContainer = document[_0x51d821(0x9d)](_0x51d821(0xcb)), questionElement = document['getElementById'](_0x51d821(0xe7)), optionsContainer = document[_0x51d821(0x9d)](_0x51d821(0x14c)), progressBar = document['getElementById'](_0x51d821(0x176)), questionCountElement = document[_0x51d821(0x9d)](_0x51d821(0x101)), prevBtn = document['getElementById'](_0x51d821(0x84)), nextBtn = document[_0x51d821(0x9d)](_0x51d821(0xe2)), resultContainer = document['getElementById'](_0x51d821(0x10f)), percentageElement = document[_0x51d821(0x9d)]('percentage'), scoreTextElement = document[_0x51d821(0x9d)]('score-text'), iqDescriptionElement = document[_0x51d821(0x9d)](_0x51d821(0xb7)), restartBtn = document[_0x51d821(0x9d)](_0x51d821(0x96)), questions = [
        {
            'question': _0x51d821(0x191),
            'options': [
                '4',
                '5',
                '6',
                '7'
            ],
            'answer': '5'
        },
        {
            'question': _0x51d821(0xf0),
            'options': [
                _0x51d821(0x88),
                _0x51d821(0x140),
                'Red',
                _0x51d821(0xfb)
            ],
            'answer': _0x51d821(0xaf)
        },
        {
            'question': _0x51d821(0x198),
            'options': [
                '3',
                '4',
                '5',
                '6'
            ],
            'answer': '4'
        },
        {
            'question': 'Which\x20animal\x20says\x20\x27meow\x27?',
            'options': [
                _0x51d821(0x103),
                'Cow',
                _0x51d821(0x169),
                _0x51d821(0xf3)
            ],
            'answer': _0x51d821(0x169)
        },
        {
            'question': _0x51d821(0x1a6),
            'options': [
                '2',
                '3',
                '4',
                '5'
            ],
            'answer': '4'
        },
        {
            'question': _0x51d821(0xb6),
            'options': [
                _0x51d821(0x136),
                'Right',
                'Down',
                _0x51d821(0x1a1)
            ],
            'answer': 'Down'
        },
        {
            'question': _0x51d821(0x97),
            'options': [
                _0x51d821(0xe8),
                _0x51d821(0x16e),
                _0x51d821(0xbe),
                'September'
            ],
            'answer': _0x51d821(0x16e)
        },
        {
            'question': _0x51d821(0x10a),
            'options': [
                _0x51d821(0x14d),
                _0x51d821(0x15c),
                _0x51d821(0x164),
                'Flower'
            ],
            'answer': _0x51d821(0x15c)
        },
        {
            'question': _0x51d821(0x10c),
            'options': [
                _0x51d821(0x154),
                _0x51d821(0x100),
                _0x51d821(0x1a9),
                _0x51d821(0xfc)
            ],
            'answer': _0x51d821(0x1a9)
        },
        {
            'question': _0x51d821(0x146),
            'options': [
                _0x51d821(0xaf),
                _0x51d821(0x151),
                'Yellow',
                _0x51d821(0x171)
            ],
            'answer': _0x51d821(0xa1)
        },
        {
            'question': _0x51d821(0x9a),
            'options': [
                '12',
                '24',
                '36',
                '48'
            ],
            'answer': '24'
        },
        {
            'question': _0x51d821(0xa8),
            'options': [
                '1',
                '5',
                '3',
                '7'
            ],
            'answer': '7'
        },
        {
            'question': _0x51d821(0x16f),
            'options': [
                '2',
                '5',
                '10',
                '15'
            ],
            'answer': '5'
        },
        {
            'question': _0x51d821(0x11e),
            'options': [
                'Apple',
                _0x51d821(0x140),
                _0x51d821(0x184),
                _0x51d821(0xf5)
            ],
            'answer': _0x51d821(0x184)
        },
        {
            'question': _0x51d821(0x13e),
            'options': [
                _0x51d821(0x155),
                _0x51d821(0xa6),
                _0x51d821(0x141),
                'Madrid'
            ],
            'answer': 'Paris'
        },
        {
            'question': _0x51d821(0x170),
            'options': [
                'B',
                'C',
                'Same',
                _0x51d821(0x80)
            ],
            'answer': 'B'
        },
        {
            'question': _0x51d821(0xff),
            'options': [
                'C',
                'D',
                'E',
                'F'
            ],
            'answer': 'D'
        },
        {
            'question': _0x51d821(0x158),
            'options': [
                _0x51d821(0x1a2),
                _0x51d821(0x19d),
                _0x51d821(0xb5),
                _0x51d821(0x80)
            ],
            'answer': _0x51d821(0xb5)
        },
        {
            'question': _0x51d821(0xc5),
            'options': [
                '0',
                '1',
                '2',
                '3'
            ],
            'answer': '2'
        },
        {
            'question': 'What\x20is\x20the\x20plural\x20of\x20\x27dog\x27?',
            'options': [
                _0x51d821(0x103),
                _0x51d821(0xce),
                _0x51d821(0x83),
                _0x51d821(0xb9)
            ],
            'answer': 'Dogs'
        },
        {
            'question': _0x51d821(0xe1),
            'options': [
                '50',
                '55',
                '60',
                '65'
            ],
            'answer': '60'
        },
        {
            'question': _0x51d821(0x196),
            'options': [
                _0x51d821(0x15f),
                'Mars',
                _0x51d821(0x15a),
                'Venus'
            ],
            'answer': 'Mercury'
        },
        {
            'question': _0x51d821(0x168),
            'options': [
                '20',
                '24',
                '32',
                '64'
            ],
            'answer': '32'
        },
        {
            'question': _0x51d821(0x121),
            'options': [
                '4',
                '5',
                '6',
                '7'
            ],
            'answer': '6'
        },
        {
            'question': _0x51d821(0x185),
            'options': [
                '4',
                '6',
                '8',
                '10'
            ],
            'answer': '8'
        },
        {
            'question': 'Which\x20is\x20not\x20a\x20prime\x20number:\x202,\x203,\x204,\x205?',
            'options': [
                '2',
                '3',
                '4',
                '5'
            ],
            'answer': '4'
        },
        {
            'question': _0x51d821(0xed),
            'options': [
                'Go',
                'Gd',
                'Au',
                'Ag'
            ],
            'answer': 'Au'
        },
        {
            'question': _0x51d821(0x18c),
            'options': [
                '5',
                '6',
                '7',
                '8'
            ],
            'answer': '7'
        },
        {
            'question': _0x51d821(0x172),
            'options': [
                'K',
                'L',
                'M',
                'N'
            ],
            'answer': 'M'
        },
        {
            'question': _0x51d821(0x181),
            'options': [
                '25',
                '50',
                '75',
                '100'
            ],
            'answer': '50'
        },
        {
            'question': _0x51d821(0xf7),
            'options': [
                _0x51d821(0x8d),
                _0x51d821(0x12c),
                _0x51d821(0xf1),
                'Pacific'
            ],
            'answer': _0x51d821(0xc0)
        },
        {
            'question': _0x51d821(0x93),
            'options': [
                '20',
                '25',
                '30',
                '36'
            ],
            'answer': '25'
        },
        {
            'question': _0x51d821(0x17e),
            'options': [
                _0x51d821(0x13d),
                _0x51d821(0xb0),
                _0x51d821(0x118),
                'Bangkok'
            ],
            'answer': _0x51d821(0x118)
        },
        {
            'question': _0x51d821(0x150),
            'options': [
                '45',
                '90',
                _0x51d821(0x186),
                _0x51d821(0x180)
            ],
            'answer': '90'
        },
        {
            'question': _0x51d821(0x1a8),
            'options': [
                '▲',
                '■',
                '●',
                '◆'
            ],
            'answer': '●'
        },
        {
            'question': _0x51d821(0x195),
            'options': [
                _0x51d821(0x14e),
                '0',
                '10',
                _0x51d821(0x13f)
            ],
            'answer': '0'
        },
        {
            'question': 'Which\x20is\x20not\x20a\x20vowel:\x20A,\x20E,\x20I,\x20T?',
            'options': [
                'A',
                'E',
                'I',
                'T'
            ],
            'answer': 'T'
        },
        {
            'question': _0x51d821(0x82),
            'options': [
                '10',
                '11',
                '12',
                '13'
            ],
            'answer': '13'
        },
        {
            'question': _0x51d821(0x90),
            'options': [
                _0x51d821(0xb3),
                _0x51d821(0x18e),
                _0x51d821(0x13a),
                '306'
            ],
            'answer': _0x51d821(0x18e)
        },
        {
            'question': _0x51d821(0x14b),
            'options': [
                'Q',
                'R',
                'S',
                'U'
            ],
            'answer': 'R'
        },
        {
            'question': _0x51d821(0x128),
            'options': [
                'Yes',
                'No',
                _0x51d821(0xf2),
                'Not\x20enough\x20information'
            ],
            'answer': _0x51d821(0x194)
        },
        {
            'question': _0x51d821(0xd1),
            'options': [
                '45',
                '53',
                '63',
                '72'
            ],
            'answer': '63'
        },
        {
            'question': 'Which\x20word\x20is\x20the\x20odd\x20one\x20out:\x20Happy,\x20Sad,\x20Angry,\x20Chair?',
            'options': [
                _0x51d821(0x89),
                _0x51d821(0xf6),
                _0x51d821(0x1a3),
                _0x51d821(0xc8)
            ],
            'answer': _0x51d821(0xc8)
        },
        {
            'question': _0x51d821(0x133),
            'options': [
                '240',
                _0x51d821(0x16b),
                _0x51d821(0xd8),
                '720'
            ],
            'answer': _0x51d821(0x19f)
        },
        {
            'question': 'If\x20a\x20train\x20travels\x2060\x20km/h,\x20how\x20far\x20will\x20it\x20travel\x20in\x203\x20hours?',
            'options': [
                _0x51d821(0xb2),
                _0x51d821(0x1a0),
                _0x51d821(0x153),
                _0x51d821(0x149)
            ],
            'answer': '180\x20km'
        },
        {
            'question': _0x51d821(0x182),
            'options': [
                'M',
                'N',
                'O',
                'P'
            ],
            'answer': 'O'
        },
        {
            'question': _0x51d821(0x106),
            'options': [
                '13',
                '20',
                '30',
                '40'
            ],
            'answer': '40'
        },
        {
            'question': 'What\x20is\x20the\x20next\x20number:\x20100,\x2095,\x2085,\x2070,\x20__?',
            'options': [
                '45',
                '50',
                '55',
                '60'
            ],
            'answer': '50'
        },
        {
            'question': _0x51d821(0xcd),
            'options': [
                '⬟',
                '⬢',
                '⬡',
                '⬠'
            ],
            'answer': '⬡'
        },
        {
            'question': 'What\x20is\x20the\x20next\x20number:\x202,\x205,\x2011,\x2023,\x20__?',
            'options': [
                '35',
                '41',
                '47',
                '53'
            ],
            'answer': '47'
        },
        {
            'question': _0x51d821(0x12e),
            'options': [
                'Y',
                'U',
                'I',
                'O'
            ],
            'answer': 'Y'
        },
        {
            'question': _0x51d821(0xd0),
            'options': [
                _0x51d821(0x124),
                '1024',
                '3125',
                _0x51d821(0x127)
            ],
            'answer': _0x51d821(0x19a)
        },
        {
            'question': _0x51d821(0x173),
            'options': [
                '◑',
                '◒',
                '◐',
                '◓'
            ],
            'answer': '◑'
        },
        {
            'question': _0x51d821(0xa0),
            'options': [
                _0x51d821(0xf4),
                _0x51d821(0x16c),
                _0x51d821(0xde),
                _0x51d821(0x180)
            ],
            'answer': '360'
        },
        {
            'question': _0x51d821(0x134),
            'options': [
                'O',
                'P',
                'Q',
                'R'
            ],
            'answer': 'Q'
        },
        {
            'question': _0x51d821(0x11c),
            'options': [
                '20',
                '24',
                '32',
                '64'
            ],
            'answer': '32'
        },
        {
            'question': _0x51d821(0x189),
            'options': [
                '□',
                '⬟',
                '◯',
                '△'
            ],
            'answer': '□'
        },
        {
            'question': _0x51d821(0xdd),
            'options': [
                '18',
                '20',
                '21',
                '24'
            ],
            'answer': '21'
        },
        {
            'question': _0x51d821(0x172),
            'options': [
                'K',
                'L',
                'M',
                'N'
            ],
            'answer': 'M'
        },
        {
            'question': _0x51d821(0xa5),
            'options': [
                '30',
                '36',
                '42',
                '49'
            ],
            'answer': '36'
        },
        {
            'question': _0x51d821(0x17b),
            'options': [
                '15',
                '20',
                '25',
                '30'
            ],
            'answer': '25'
        },
        {
            'question': _0x51d821(0x139),
            'options': [
                _0x51d821(0x18a),
                _0x51d821(0x119),
                _0x51d821(0xe0),
                _0x51d821(0xdf)
            ],
            'answer': _0x51d821(0x119)
        },
        {
            'question': _0x51d821(0xe4),
            'options': [
                _0x51d821(0x15b),
                _0x51d821(0x99),
                _0x51d821(0x14a),
                'None\x20must\x20be\x20true'
            ],
            'answer': 'None\x20must\x20be\x20true'
        },
        {
            'question': _0x51d821(0x129),
            'options': [
                '45',
                '50',
                '55',
                '60'
            ],
            'answer': '50'
        },
        {
            'question': _0x51d821(0x193),
            'options': [
                _0x51d821(0xba),
                _0x51d821(0xd3),
                _0x51d821(0xae),
                _0x51d821(0xc4)
            ],
            'answer': '518554'
        },
        {
            'question': _0x51d821(0x10e),
            'options': [
                _0x51d821(0x17c),
                '321122',
                _0x51d821(0xc9),
                _0x51d821(0x156)
            ],
            'answer': _0x51d821(0x17c)
        },
        {
            'question': 'Which\x20number\x20is\x20the\x20odd\x20one\x20out:\x206,\x2028,\x20496,\x208128,\x2033550336?',
            'options': [
                '6',
                '28',
                _0x51d821(0x183),
                '8128',
                _0x51d821(0x17d)
            ],
            'answer': _0x51d821(0x17d)
        },
        {
            'question': 'If\x205\x20cats\x20can\x20catch\x205\x20mice\x20in\x205\x20minutes,\x20how\x20many\x20cats\x20are\x20needed\x20to\x20catch\x20100\x20mice\x20in\x20100\x20minutes?',
            'options': [
                '5',
                '10',
                '20',
                '100'
            ],
            'answer': '5'
        },
        {
            'question': _0x51d821(0xa7),
            'options': [
                '0',
                '2',
                '10',
                '12'
            ],
            'answer': '2'
        },
        {
            'question': _0x51d821(0x10d),
            'options': [
                '76',
                '86',
                '96',
                _0x51d821(0xb1)
            ],
            'answer': '96'
        },
        {
            'question': _0x51d821(0xec),
            'options': [
                '♠',
                '♣',
                '♦',
                '♥'
            ],
            'answer': '♠'
        },
        {
            'question': _0x51d821(0x137),
            'options': [
                '3',
                '5',
                '7',
                '9'
            ],
            'answer': '5'
        },
        {
            'question': 'What\x20is\x20the\x20next\x20number:\x200,\x201,\x201,\x202,\x204,\x207,\x2013,\x2024,\x20__?',
            'options': [
                '36',
                '40',
                '44',
                '48'
            ],
            'answer': '44'
        },
        {
            'question': _0x51d821(0x107),
            'options': [
                _0x51d821(0x166),
                _0x51d821(0xfa),
                'All\x20Waps\x20are\x20Wips',
                _0x51d821(0x115)
            ],
            'answer': _0x51d821(0x166)
        },
        {
            'question': _0x51d821(0x190),
            'options': [
                '720',
                '1440',
                '2520',
                _0x51d821(0xf9)
            ],
            'answer': _0x51d821(0xc6)
        },
        {
            'question': _0x51d821(0xf8),
            'options': [
                '3',
                '4',
                '5',
                '6'
            ],
            'answer': '4'
        },
        {
            'question': 'What\x20is\x20the\x20next\x20number:\x202,\x204,\x208,\x2016,\x2032,\x2064,\x20__?',
            'options': [
                '96',
                _0x51d821(0x19e),
                '144',
                _0x51d821(0x13a)
            ],
            'answer': '128'
        },
        {
            'question': 'Which\x20is\x20the\x20odd\x20one\x20out:\x20132,\x20275,\x20396,\x20427,\x20528,\x20639',
            'options': [
                _0x51d821(0x19c),
                _0x51d821(0x104),
                '427',
                _0x51d821(0x8a)
            ],
            'answer': _0x51d821(0xe5)
        },
        {
            'question': 'If\x203\x20painters\x20can\x20paint\x203\x20rooms\x20in\x203\x20hours,\x20how\x20many\x20painters\x20are\x20needed\x20to\x20paint\x209\x20rooms\x20in\x209\x20hours?',
            'options': [
                '3',
                '6',
                '9',
                '12'
            ],
            'answer': '3'
        },
        {
            'question': _0x51d821(0x161),
            'options': [
                '27',
                '31',
                '37',
                '42'
            ],
            'answer': '37'
        },
        {
            'question': _0x51d821(0xe9),
            'options': [
                '548',
                _0x51d821(0x8b),
                _0x51d821(0x19b),
                _0x51d821(0xd5)
            ],
            'answer': _0x51d821(0x8b)
        },
        {
            'question': 'What\x20is\x20the\x20next\x20number:\x201,\x202,\x206,\x2030,\x20210,\x20__?',
            'options': [
                '420',
                _0x51d821(0x1a7),
                _0x51d821(0xab),
                _0x51d821(0x148)
            ],
            'answer': _0x51d821(0x148)
        },
        {
            'question': 'Which\x20number\x20comes\x20next:\x201,\x209,\x2025,\x2049,\x2081,\x20__?',
            'options': [
                _0x51d821(0x13f),
                _0x51d821(0x199),
                _0x51d821(0x119),
                _0x51d821(0xf4)
            ],
            'answer': '121'
        },
        {
            'question': _0x51d821(0x87),
            'options': [
                _0x51d821(0x159),
                '7',
                '14',
                '28'
            ],
            'answer': '7'
        },
        {
            'question': _0x51d821(0xe6),
            'options': [
                '32',
                '34',
                '36',
                '38'
            ],
            'answer': '36'
        },
        {
            'question': _0x51d821(0x9c),
            'options': [
                _0x51d821(0x188),
                _0x51d821(0x135),
                _0x51d821(0x167),
                _0x51d821(0x12b)
            ],
            'answer': _0x51d821(0x135)
        },
        {
            'question': _0x51d821(0x1aa),
            'options': [
                '81',
                '100',
                _0x51d821(0xdf),
                '216'
            ],
            'answer': '125'
        },
        {
            'question': _0x51d821(0x8f),
            'options': [
                '3',
                '6',
                '9',
                '12'
            ],
            'answer': '6'
        },
        {
            'question': 'What\x20is\x20the\x20next\x20number:\x201,\x204,\x209,\x2061,\x2052,\x20__?',
            'options': [
                '63',
                '94',
                _0x51d821(0x119),
                '144'
            ],
            'answer': '63'
        },
        {
            'question': 'If\x203\x20hens\x20lay\x203\x20eggs\x20in\x203\x20days,\x20how\x20many\x20eggs\x20will\x20300\x20hens\x20lay\x20in\x20300\x20days?',
            'options': [
                _0x51d821(0x13f),
                _0x51d821(0x18b),
                _0x51d821(0x94),
                _0x51d821(0xaa)
            ],
            'answer': _0x51d821(0xaa)
        },
        {
            'question': 'If\x20A\x20=\x201,\x20B\x20=\x202,\x20...,\x20Z\x20=\x2026,\x20what\x20is\x20the\x20product\x20of\x20the\x20letters\x20in\x20\x27QUIZ\x27?',
            'options': [
                '8820',
                '9240',
                _0x51d821(0x160),
                '10560'
            ],
            'answer': '8820'
        },
        {
            'question': _0x51d821(0xac),
            'options': [
                '46656',
                _0x51d821(0x122),
                '7776',
                _0x51d821(0x143)
            ],
            'answer': _0x51d821(0x125)
        },
        {
            'question': _0x51d821(0xda),
            'options': [
                '4',
                '8',
                '16',
                '64'
            ],
            'answer': '16'
        },
        {
            'question': 'Which\x20is\x20the\x20odd\x20one\x20out:\x20144,\x20169,\x20196,\x20225,\x20256,\x20289,\x20324,\x20350?',
            'options': [
                _0x51d821(0xfd),
                _0x51d821(0x187),
                _0x51d821(0x1a4),
                '350'
            ],
            'answer': '350'
        },
        {
            'question': _0x51d821(0x112),
            'options': [
                _0x51d821(0x179),
                '54321',
                _0x51d821(0x179),
                '54325'
            ],
            'answer': _0x51d821(0x179)
        },
        {
            'question': _0x51d821(0x18f),
            'options': [
                '1806',
                '3263442',
                _0x51d821(0x197),
                _0x51d821(0xd6)
            ],
            'answer': _0x51d821(0xef)
        },
        {
            'question': _0x51d821(0x109),
            'options': [
                '8',
                '9',
                '10',
                '11'
            ],
            'answer': '11'
        },
        {
            'question': _0x51d821(0x174),
            'options': [
                '⚀',
                '⚁',
                '⚂',
                '⚇'
            ],
            'answer': '⚀'
        },
        {
            'question': 'If\x205\x20+\x203\x20=\x2028,\x209\x20+\x201\x20=\x20810,\x208\x20+\x206\x20=\x20214,\x20then\x207\x20+\x203\x20=\x20?',
            'options': [
                _0x51d821(0x86),
                _0x51d821(0x114),
                '47',
                _0x51d821(0x10b)
            ],
            'answer': _0x51d821(0x114)
        },
        {
            'question': _0x51d821(0x92),
            'options': [
                '1113122112',
                _0x51d821(0xbc),
                _0x51d821(0x123),
                _0x51d821(0x131)
            ],
            'answer': _0x51d821(0x11a)
        }
    ];
console['log'](_0x51d821(0xfe), questions[_0x51d821(0x117)]);
questions['length'] !== 0x64 && console['error'](_0x51d821(0x113), questions[_0x51d821(0x117)]);
let currentQuestionIndex = 0x0, score = 0x0, selectedOption = null, userAnswers = Array(0x64)[_0x51d821(0xad)](null);
function initQuiz() {
    const _0x57e7c9 = _0x51d821;
    currentQuestionIndex = 0x0, score = 0x0, selectedOption = null, userAnswers[_0x57e7c9(0xad)](null), showQuestion(), updateProgressBar(), updateQuestionCount(), prevBtn['disabled'] = !![], nextBtn[_0x57e7c9(0xe3)] = 'Next', nextBtn[_0x57e7c9(0xea)] = !![], resultContainer[_0x57e7c9(0xa3)][_0x57e7c9(0x130)]('show'), document['getElementById']('question-container')[_0x57e7c9(0x8e)][_0x57e7c9(0x105)] = 'block', document['querySelector'](_0x57e7c9(0x126))[_0x57e7c9(0x8e)][_0x57e7c9(0x105)] = _0x57e7c9(0x162), document[_0x57e7c9(0x108)](_0x57e7c9(0x17f))['forEach'](_0x5f55c5 => _0x5f55c5[_0x57e7c9(0x130)]());
}
function showQuestion() {
    const _0x438456 = _0x51d821, _0x360cb1 = questions[currentQuestionIndex];
    questionElement[_0x438456(0xe3)] = _0x360cb1['question'], optionsContainer[_0x438456(0x11f)] = '', _0x360cb1['options']['forEach'](_0x38d856 => {
        const _0x294644 = _0x438456, _0x3dec04 = document[_0x294644(0x120)](_0x294644(0xd7));
        _0x3dec04[_0x294644(0xa3)]['add'](_0x294644(0x192)), _0x3dec04[_0x294644(0xe3)] = _0x38d856, userAnswers[currentQuestionIndex] === _0x38d856 && (_0x3dec04[_0x294644(0xa3)]['add'](_0x294644(0x15e)), selectedOption = _0x38d856, nextBtn[_0x294644(0xea)] = ![]), _0x3dec04['addEventListener']('click', () => selectOption(_0x3dec04, _0x38d856)), optionsContainer[_0x294644(0xd4)](_0x3dec04);
    });
}
function selectOption(_0x3a682b, _0x5bf071) {
    const _0xf6bb7b = _0x51d821;
    document['querySelectorAll'](_0xf6bb7b(0x147))['forEach'](_0xb0f63c => {
        const _0xee12fa = _0xf6bb7b;
        _0xb0f63c[_0xee12fa(0xa3)][_0xee12fa(0x130)]('selected');
    }), _0x3a682b[_0xf6bb7b(0xa3)][_0xf6bb7b(0x175)](_0xf6bb7b(0x15e)), selectedOption = _0x5bf071, userAnswers[currentQuestionIndex] = _0x5bf071, nextBtn[_0xf6bb7b(0xea)] = ![];
}
function nextQuestion() {
    const _0x13c68c = _0x51d821;
    selectedOption === questions[currentQuestionIndex]['answer'] && score++, currentQuestionIndex++, currentQuestionIndex < questions[_0x13c68c(0x117)] ? (showQuestion(), updateProgressBar(), updateQuestionCount(), prevBtn[_0x13c68c(0xea)] = ![], nextBtn[_0x13c68c(0xe3)] = currentQuestionIndex === questions['length'] - 0x1 ? _0x13c68c(0x157) : _0x13c68c(0x11d), nextBtn['disabled'] = !![], selectedOption = null) : showResult();
}
function _0x10fb(_0xeb098a, _0x3037ca) {
    const _0x32fc55 = _0x32fc();
    return _0x10fb = function (_0x10fbec, _0x4b24e5) {
        _0x10fbec = _0x10fbec - 0x80;
        let _0x456abe = _0x32fc55[_0x10fbec];
        return _0x456abe;
    }, _0x10fb(_0xeb098a, _0x3037ca);
}
function prevQuestion() {
    const _0x168f8b = _0x51d821;
    currentQuestionIndex--, showQuestion(), updateProgressBar(), updateQuestionCount(), prevBtn[_0x168f8b(0xea)] = currentQuestionIndex === 0x0, nextBtn['textContent'] = 'Next', nextBtn[_0x168f8b(0xea)] = ![];
}
function updateProgressBar() {
    const _0x3f4f84 = _0x51d821;
    progressBar['style'][_0x3f4f84(0x145)] = (currentQuestionIndex + 0x1) / questions[_0x3f4f84(0x117)] * 0x64 + '%';
}
function _0x32fc() {
    const _0x1d43ca = [
        '15625',
        '231122',
        '625',
        '46656',
        '.controls',
        '4096',
        'If\x20all\x20Bloops\x20are\x20Razzies\x20and\x20all\x20Razzies\x20are\x20Lazzies,\x20are\x20all\x20Bloops\x20definitely\x20Lazzies?',
        'What\x20is\x20the\x20next\x20number:\x202,\x203,\x2010,\x2015,\x2026,\x2035,\x20__?',
        'https://www.facebook.com/sharer/sharer.php?u=',
        '500\x20minutes',
        'Indian',
        'confetti',
        'What\x20is\x20the\x20next\x20letter:\x20Q,\x20W,\x20E,\x20R,\x20T,\x20__?',
        'head',
        'remove',
        '312213',
        'question-container',
        'What\x20is\x20the\x20next\x20number:\x201,\x202,\x206,\x2024,\x20120,\x20__?',
        'What\x20is\x20the\x20next\x20letter:\x20B,\x20C,\x20E,\x20H,\x20L,\x20__?',
        '5\x20minutes',
        'Left',
        'If\x203x\x20+\x207\x20=\x2022,\x20what\x20is\x20x?',
        'none',
        'What\x20is\x20the\x20next\x20number\x20in\x20the\x20sequence:\x201,\x202,\x205,\x2012,\x2027,\x2058,\x20__?',
        '256',
        '_blank',
        '21960612KfyPCm',
        'Beijing',
        'What\x20is\x20the\x20capital\x20of\x20France?',
        '100',
        'Banana',
        'Paris',
        'open',
        '32768',
        'script',
        'width',
        'What\x20is\x20the\x20color\x20of\x20a\x20banana?',
        '.option-btn',
        '2310',
        '200\x20km',
        'No\x20Zips\x20are\x20Zops',
        'What\x20is\x20the\x20next\x20letter:\x20Z,\x20X,\x20V,\x20T,\x20__?',
        'options-container',
        'Spoon',
        '-10',
        'https://wa.me/?text=',
        'How\x20many\x20degrees\x20are\x20in\x20a\x20right\x20angle?',
        'Blue',
        'href',
        '180\x20km',
        'Circle',
        'London',
        '212211',
        'Finish',
        'Which\x20is\x20heavier:\x201kg\x20of\x20feathers\x20or\x201kg\x20of\x20stones?',
        '3.5',
        'Mercury',
        'All\x20Zips\x20are\x20Zops',
        'Pen',
        '2778234GIrQfy',
        'selected',
        'Earth',
        '10080',
        'What\x20is\x20the\x20next\x20number:\x201,\x204,\x205,\x209,\x2014,\x2023,\x20__?',
        'flex',
        'left',
        'Hammer',
        'random',
        'No\x20Wips\x20are\x20Waps',
        '100\x20minutes',
        'What\x20is\x20the\x20next\x20number:\x202,\x204,\x208,\x2016,\x20__?',
        'Cat',
        'Excellent\x20score!\x20Well\x20above\x20average\x20intelligence.',
        '480',
        '216',
        'Good\x20score!\x20Solid\x20average\x20performance.',
        'July',
        'What\x20is\x2010\x20-\x205?',
        'Which\x20comes\x20first\x20in\x20the\x20alphabet:\x20B\x20or\x20C?',
        'Green',
        'What\x20is\x20the\x20next\x20letter:\x20A,\x20D,\x20G,\x20J,\x20__?',
        'What\x20is\x20the\x20next\x20shape:\x20◑,\x20◒,\x20◐,\x20◓,\x20__?',
        'What\x20is\x20the\x20next\x20symbol:\x20⚀,\x20⚁,\x20⚂,\x20⚃,\x20⚄,\x20⚅,\x20__?',
        'add',
        'progress-bar',
        'location',
        '203CKKxhf',
        '54325',
        'querySelector',
        'If\x203\x20workers\x20can\x20build\x209\x20widgets\x20in\x206\x20hours,\x20how\x20many\x20widgets\x20can\x205\x20workers\x20build\x20in\x2010\x20hours?',
        '312211',
        '33550336',
        'What\x20is\x20the\x20capital\x20of\x20Japan?',
        '.confetti',
        '360',
        'What\x20is\x2025%\x20of\x20200?',
        'What\x20is\x20the\x20next\x20letter:\x20A,\x20C,\x20F,\x20J,\x20__?',
        '496',
        'Car',
        'What\x20is\x20the\x20square\x20root\x20of\x2064?',
        '180',
        '225',
        '1\x20minute',
        'What\x20is\x20the\x20next\x20shape:\x20◯,\x20△,\x20□,\x20⬟,\x20◯,\x20△,\x20__?',
        '112',
        '300',
        'How\x20many\x20continents\x20are\x20there?',
        '#0000ff',
        '206',
        'What\x20is\x20the\x20next\x20number:\x201,\x202,\x206,\x2042,\x201806,\x20__?',
        'What\x20is\x20the\x20next\x20number:\x201,\x203,\x2012,\x2060,\x20360,\x20__?',
        'What\x20comes\x20next\x20in\x20the\x20sequence:\x201,\x202,\x203,\x204,\x20__?',
        'option-btn',
        'If\x20RED\x20is\x20coded\x20as\x201854,\x20how\x20is\x20GREEN\x20coded?',
        'Yes',
        'What\x20is\x20the\x20freezing\x20point\x20of\x20water\x20in\x20Celsius?',
        'Which\x20planet\x20is\x20closest\x20to\x20the\x20sun?',
        '81234',
        'What\x20is\x202\x20+\x202?',
        '108',
        '3125',
        '578',
        '132',
        'Stones',
        '128',
        '720',
        '150\x20km',
        'Side',
        'Feathers',
        'Angry',
        '289',
        '81jftPeH',
        'How\x20many\x20legs\x20does\x20a\x20normal\x20chair\x20have?',
        '1050',
        'What\x20is\x20the\x20next\x20shape:\x20▲,\x20■,\x20●,\x20▲,\x20■,\x20__?',
        'Triangle',
        'What\x20is\x20the\x20next\x20number:\x200,\x201,\x208,\x2027,\x2064,\x20__?',
        'None',
        'start-screen',
        'What\x20is\x20the\x20next\x20number:\x201,\x201,\x202,\x203,\x205,\x208,\x20__?',
        'Doges',
        'prev-btn',
        'share-whatsapp',
        '421',
        'If\x207\x20workers\x20can\x20build\x207\x20houses\x20in\x207\x20days,\x20how\x20many\x20days\x20would\x20it\x20take\x2014\x20workers\x20to\x20build\x2014\x20houses?',
        'Apple',
        'Happy',
        '639',
        '549',
        '#ff00ff',
        'Atlantic',
        'style',
        'If\x202\x20painters\x20can\x20paint\x202\x20rooms\x20in\x202\x20hours,\x20how\x20many\x20painters\x20are\x20needed\x20to\x20paint\x2018\x20rooms\x20in\x206\x20hours?',
        'How\x20many\x20bones\x20are\x20in\x20the\x20adult\x20human\x20body?',
        'Question\x20',
        'What\x20is\x20the\x20next\x20number:\x202,\x2012,\x201112,\x203112,\x20132112,\x20__?',
        'What\x20is\x20the\x20next\x20number:\x201,\x204,\x209,\x2016,\x20__?',
        '900',
        '%\x20on\x20the\x20IQ\x20Challenge!\x20Can\x20you\x20beat\x20my\x20score?\x20',
        'restart-btn',
        'Which\x20month\x20comes\x20after\x20June?',
        'div',
        'Some\x20Zips\x20are\x20Zops',
        'How\x20many\x20hours\x20are\x20in\x20a\x20day?',
        '\x20of\x20',
        'If\x205\x20machines\x20can\x20make\x205\x20widgets\x20in\x205\x20minutes,\x20how\x20long\x20would\x20it\x20take\x20100\x20machines\x20to\x20make\x20100\x20widgets?',
        'getElementById',
        'https://cdn.jsdelivr.net/gh/m03951659gmail/toolhubcdn@main/allfileadd.js',
        'New\x20feature\x20loaded!',
        'What\x20is\x20the\x20next\x20number:\x203,\x206,\x2018,\x2072,\x20__?',
        'Yellow',
        '390952SakwWr',
        'classList',
        '#ff0000',
        'What\x20is\x20the\x20next\x20number:\x201,\x204,\x209,\x2016,\x2025,\x20__?',
        'Berlin',
        'What\x20is\x20the\x20missing\x20number\x20in\x20this\x20grid:\x0a8\x20|\x203\x20|\x204\x0a1\x20|\x205\x20|\x209\x0a6\x20|\x207\x20|\x20?',
        'Which\x20is\x20the\x20largest:\x201,\x205,\x203,\x207?',
        '997515nQjEyo',
        '30000',
        '1470',
        'What\x20is\x20the\x20next\x20number\x20in\x20the\x20sequence:\x201,\x204,\x2027,\x20256,\x203125,\x20__?',
        'fill',
        '618554',
        'Red',
        'Seoul',
        '106',
        '120\x20km',
        '156',
        '%\x20on\x20the\x20IQ\x20Challenge!\x20Can\x20you\x20beat\x20my\x20score?',
        'Same',
        'What\x20is\x20the\x20opposite\x20of\x20\x27up\x27?',
        'iq-description',
        'addEventListener',
        'Dogies',
        '518554',
        '#00ff00',
        '123112',
        'backgroundColor',
        'August',
        '\x20out\x20of\x20',
        'Pacific',
        '100188cAWTqM',
        'hidden',
        'width=600,height=400',
        '718554',
        'How\x20many\x20zeros\x20are\x20in\x20one\x20hundred?',
        '2520',
        '&url=',
        'Chair',
        '121122',
        'floor',
        'quiz',
        'log',
        'What\x20is\x20the\x20next\x20shape:\x20⬟,\x20⬢,\x20⬡,\x20⬟,\x20⬢,\x20__?',
        'Dogs',
        'click',
        'What\x20is\x20the\x20next\x20number:\x201,\x204,\x2027,\x20256,\x20__?',
        'What\x20is\x20the\x20next\x20number:\x201,\x203,\x207,\x2015,\x2031,\x20__?',
        'You\x20scored\x20',
        '518555',
        'appendChild',
        '579',
        '123456',
        'button',
        '600',
        'share-twitter',
        'If\x203↑3\x20=\x2027\x20and\x204↑4\x20=\x20256,\x20what\x20is\x202↑↑3?\x20(Knuth\x27s\x20up-arrow\x20notation)',
        'I\x20scored\x20',
        '1124302JnyPvV',
        'What\x20is\x20the\x20next\x20number:\x201,\x201,\x202,\x203,\x205,\x208,\x2013,\x20__?',
        '288',
        '125',
        '123',
        'What\x20is\x2012\x20×\x205?',
        'next-btn',
        'textContent',
        'If\x20all\x20Zips\x20are\x20Zaps\x20and\x20some\x20Zaps\x20are\x20Zops,\x20then\x20which\x20statement\x20must\x20be\x20true?',
        '427',
        'What\x20is\x20the\x20next\x20number:\x201,\x203,\x206,\x2010,\x2015,\x2021,\x2028,\x20__?',
        'question',
        'May',
        'If\x20the\x20code\x20for\x20JUMP\x20is\x205478\x20and\x20the\x20code\x20for\x20RUN\x20is\x20239,\x20what\x20is\x20the\x20code\x20for\x20JOG?',
        'disabled',
        'start-text',
        'Which\x20comes\x20next:\x20♠,\x20♣,\x20♦,\x20♥,\x20__?',
        'What\x20is\x20the\x20chemical\x20symbol\x20for\x20gold?',
        'Genius\x20level!\x20You\x27re\x20in\x20the\x20top\x2010%\x20of\x20test-takers.',
        '3263442',
        'Which\x20of\x20these\x20is\x20a\x20color:\x20Apple,\x20Banana,\x20Red,\x20Table?',
        'Arctic',
        'Maybe',
        'Bird',
        '144',
        'Orange',
        'Sad',
        'Which\x20is\x20the\x20largest\x20ocean?',
        'If\x201/2\x20of\x205\x20is\x203,\x20then\x20what\x20is\x201/3\x20of\x2010?',
        '5040',
        'Some\x20Wips\x20are\x20Waps',
        'Table',
        'Rectangle',
        '169',
        'Total\x20questions:',
        'What\x20is\x20the\x20next\x20letter:\x20A,\x20B,\x20C,\x20__?',
        'Square',
        'question-count',
        'round',
        'Dog',
        '275',
        'display',
        'What\x20is\x20the\x20area\x20of\x20a\x20rectangle\x20with\x20length\x208\x20and\x20width\x205?',
        'If\x20all\x20Wips\x20are\x20Wops\x20and\x20no\x20Wops\x20are\x20Waps,\x20then:',
        'querySelectorAll',
        'If\x20PENCIL\x20=\x206\x20and\x20ERASER\x20=\x206,\x20what\x20is\x20MATHEMATICS?',
        'What\x20do\x20you\x20use\x20to\x20write\x20on\x20paper?',
        '1021',
        'Which\x20shape\x20has\x203\x20sides?',
        'If\x20A\x20is\x201,\x20B\x20is\x202,\x20etc.,\x20what\x20is\x20the\x20sum\x20of\x20the\x20letters\x20in\x20the\x20word\x20\x27KNOWLEDGE\x27?',
        'What\x20is\x20the\x20next\x20number:\x201,\x2011,\x2021,\x201211,\x20111221,\x20__?',
        'result-container',
        'share-facebook',
        '19104GxaDUX',
        'If\x201\x20=\x205,\x202\x20=\x2025,\x203\x20=\x20325,\x204\x20=\x204325,\x20then\x205\x20=\x20?',
        'ERROR:\x20Question\x20count\x20is\x20not\x20100!\x20Found:',
        '310',
        'None\x20of\x20the\x20above',
        '.quiz-container',
        'length',
        'Tokyo',
        '121',
        '1113122112',
        'Keep\x20practicing!\x20You\x20can\x20improve\x20with\x20more\x20experience.',
        'What\x20is\x20the\x20next\x20number:\x201,\x202,\x204,\x208,\x2016,\x20__?',
        'Next',
        'Which\x20is\x20not\x20a\x20fruit:\x20Apple,\x20Banana,\x20Car,\x20Orange?',
        'innerHTML',
        'createElement',
        'How\x20many\x20sides\x20does\x20a\x20hexagon\x20have?'
    ];
    _0x32fc = function () {
        return _0x1d43ca;
    };
    return _0x32fc();
}
function updateQuestionCount() {
    const _0x8696c4 = _0x51d821;
    questionCountElement[_0x8696c4(0xe3)] = _0x8696c4(0x91) + (currentQuestionIndex + 0x1) + _0x8696c4(0x9b) + questions['length'];
}
function showResult() {
    const _0x5a0109 = _0x51d821, _0x421e75 = Math['round'](score / questions[_0x5a0109(0x117)] * 0x64);
    percentageElement[_0x5a0109(0xe3)] = _0x421e75 + '%', scoreTextElement[_0x5a0109(0xe3)] = _0x5a0109(0xd2) + score + _0x5a0109(0xbf) + questions['length'];
    let _0x181afe = '';
    if (_0x421e75 >= 0x5a)
        _0x181afe = _0x5a0109(0xee);
    else {
        if (_0x421e75 >= 0x4b)
            _0x181afe = _0x5a0109(0x16a);
        else
            _0x421e75 >= 0x32 ? _0x181afe = _0x5a0109(0x16d) : _0x181afe = _0x5a0109(0x11b);
    }
    iqDescriptionElement[_0x5a0109(0xe3)] = _0x181afe, document[_0x5a0109(0x9d)](_0x5a0109(0x132))[_0x5a0109(0x8e)][_0x5a0109(0x105)] = 'none', document['querySelector'](_0x5a0109(0x126))['style'][_0x5a0109(0x105)] = _0x5a0109(0x138), resultContainer[_0x5a0109(0xa3)]['add']('show'), createConfetti();
}
function createConfetti() {
    const _0x3340a9 = _0x51d821, _0x783ab3 = [
            _0x3340a9(0xa4),
            _0x3340a9(0xbb),
            _0x3340a9(0x18d),
            '#ffff00',
            _0x3340a9(0x8c)
        ], _0x3b9d93 = document[_0x3340a9(0x17a)](_0x3340a9(0x116));
    for (let _0x56122b = 0x0; _0x56122b < 0x64; _0x56122b++) {
        const _0x1bd08b = document[_0x3340a9(0x120)](_0x3340a9(0x98));
        _0x1bd08b[_0x3340a9(0xa3)][_0x3340a9(0x175)](_0x3340a9(0x12d)), _0x1bd08b['style'][_0x3340a9(0x163)] = Math[_0x3340a9(0x165)]() * 0x64 + '%', _0x1bd08b[_0x3340a9(0x8e)][_0x3340a9(0xbd)] = _0x783ab3[Math[_0x3340a9(0xca)](Math[_0x3340a9(0x165)]() * _0x783ab3[_0x3340a9(0x117)])], _0x1bd08b[_0x3340a9(0x8e)]['animationDelay'] = Math[_0x3340a9(0x165)]() + 's', _0x3b9d93[_0x3340a9(0xd4)](_0x1bd08b);
    }
}
startText[_0x51d821(0xb8)](_0x51d821(0xcf), () => {
    const _0x58003f = _0x51d821;
    startScreen[_0x58003f(0xa3)]['add']('hidden'), quizContainer['classList'][_0x58003f(0x130)](_0x58003f(0xc2)), initQuiz();
}), nextBtn[_0x51d821(0xb8)](_0x51d821(0xcf), nextQuestion), prevBtn['addEventListener']('click', prevQuestion), restartBtn['addEventListener']('click', initQuiz), initQuiz();
function shareOnFacebook() {
    const _0x525555 = _0x51d821, _0x19b953 = Math['round'](score / questions[_0x525555(0x117)] * 0x64), _0x4ae402 = _0x525555(0x12a) + encodeURIComponent(window[_0x525555(0x177)]['href']) + '&quote=I\x20scored\x20' + _0x19b953 + _0x525555(0xb4);
    window['open'](_0x4ae402, _0x525555(0x13b), _0x525555(0xc3));
}
function shareOnWhatsApp() {
    const _0x26ec5c = _0x51d821, _0x36f36c = Math[_0x26ec5c(0x102)](score / questions['length'] * 0x64), _0x1c30b0 = _0x26ec5c(0xdb) + _0x36f36c + _0x26ec5c(0x95) + window['location'][_0x26ec5c(0x152)];
    window[_0x26ec5c(0x142)](_0x26ec5c(0x14f) + encodeURIComponent(_0x1c30b0), _0x26ec5c(0x13b));
}
function shareOnTwitter() {
    const _0x4015a4 = _0x51d821, _0x3131a7 = Math['round'](score / questions[_0x4015a4(0x117)] * 0x64), _0x4bebf8 = 'I\x20scored\x20' + _0x3131a7 + '%\x20on\x20the\x20IQ\x20Challenge!\x20Can\x20you\x20beat\x20my\x20score?';
    window[_0x4015a4(0x142)]('https://twitter.com/intent/tweet?text=' + encodeURIComponent(_0x4bebf8) + _0x4015a4(0xc7) + encodeURIComponent(window[_0x4015a4(0x177)]['href']), _0x4015a4(0x13b), _0x4015a4(0xc3));
}
document[_0x51d821(0x9d)](_0x51d821(0x110))[_0x51d821(0xb8)]('click', shareOnFacebook), document[_0x51d821(0x9d)](_0x51d821(0x85))[_0x51d821(0xb8)]('click', shareOnWhatsApp), document['getElementById'](_0x51d821(0xd9))['addEventListener'](_0x51d821(0xcf), shareOnTwitter);
function loadScript(_0xf87dad, _0x28fa2f) {
    const _0x2b226f = _0x51d821, _0x17a6fc = document[_0x2b226f(0x120)](_0x2b226f(0x144));
    _0x17a6fc['src'] = _0xf87dad, _0x17a6fc['onload'] = _0x28fa2f, document[_0x2b226f(0x12f)]['appendChild'](_0x17a6fc);
}
loadScript(_0x51d821(0x9e), function () {
    const _0x4b4933 = _0x51d821;
    console[_0x4b4933(0xcc)](_0x4b4933(0x9f));
});