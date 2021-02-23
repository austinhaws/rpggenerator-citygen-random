const randomMinMaxInt = require("../src/randomMinMaxInt");

test('randomMinMaxInt', () => {
    expect(() => randomMinMaxInt.randomMinMaxInt({ minMax: { min: 0 } })).toThrowError(/Roll missing rollName:/);
    expect(typeof randomMinMaxInt.randomMinMaxInt({ rollName: 'Random Test', minMax: { min: 3000, max: 3002 } })).toBe("number");
    expect(randomMinMaxInt.randomMinMaxInt({ rollName: 'Random Test', minMax: { min: 3000, max: 3000 } })).toBe(3000);
});
