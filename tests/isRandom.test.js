const isRandom = require("../src/isRandom");

test('isRandom - true', () => {
    expect(isRandom.isRandom('')).toBe(true);
    expect(isRandom.isRandom('Random')).toBe(true);
    expect(isRandom.isRandom('RANDOM')).toBe(true);
    expect(isRandom.isRandom('RaNDoM')).toBe(true);
    expect(isRandom.isRandom(null)).toBe(true);
    expect(isRandom.isRandom(undefined)).toBe(true);
    expect(isRandom.isRandom()).toBe(true);

    expect(isRandom.isRandom(false)).toBe(false);
    expect(isRandom.isRandom('test')).toBe(false);
    expect(isRandom.isRandom(' ')).toBe(false);
    expect(isRandom.isRandom(' random ')).toBe(false);
});
