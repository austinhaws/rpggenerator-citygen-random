const randomRatio = require("../src/randomRatio");

test('randomRatio', () => {
    expect(() => randomRatio.randomRatio({})).toThrowError(/Roll missing rollName:/);
    expect(typeof randomRatio.randomRatio({ rollName: 'Random Test' })).toBe("number");
});
