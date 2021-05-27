const isCustom = require("../src/isCustom");

test('isCustom', () => {
    expect(isCustom.isCustom('')).toBe(true);
    expect(isCustom.isCustom('Custom')).toBe(true);
    expect(isCustom.isCustom('CUSTOM')).toBe(true);
    expect(isCustom.isCustom('CuSToM')).toBe(true);
    expect(isCustom.isCustom(null)).toBe(true);
    expect(isCustom.isCustom(undefined)).toBe(true);
    expect(isCustom.isCustom()).toBe(true);

    expect(isCustom.isCustom(false)).toBe(false);
    expect(isCustom.isCustom('test')).toBe(false);
    expect(isCustom.isCustom(' ')).toBe(false);
    expect(isCustom.isCustom(' custom ')).toBe(false);
    expect(isCustom.isCustom(true)).toBe(false);
});
