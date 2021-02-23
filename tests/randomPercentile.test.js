const randomPercentile = require("../src/randomPercentile");

test('randomPercentile', () => {
    expect(() => randomPercentile.randomPercentile({})).toThrowError(/Roll missing rollName:/);
    expect(typeof randomPercentile.randomPercentile({ rollName: 'Random Test' })).toBe("number");
});
