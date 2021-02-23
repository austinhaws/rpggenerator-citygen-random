const randomMinMaxFloat = require("../src/randomMinMaxFloat");

test('randomMinMaxFloat', () => {
    expect(() => randomMinMaxFloat.randomMinMaxFloat({})).toThrowError(/Roll missing rollName:/);
    expect(typeof randomMinMaxFloat.randomMinMaxFloat({ rollName: 'Random Test', minMax: { min: 3000, max: 3002 } })).toBe("number");
    expect(randomMinMaxFloat.randomMinMaxFloat({ rollName: 'Random Test', minMax: { min: 3000, max: 3000 } })).toBe(3000);
});
